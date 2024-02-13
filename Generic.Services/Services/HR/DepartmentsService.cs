using AutoMapper;
using Generic.Domian.Dtos.Responses.HR;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Interfaces;
using Generic.Services.IServices.HR;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Requests.HR;
using Generic.Domian.Models.HR;

namespace Generic.Services.Services.HR
{
    public class DepartmentsService : IDepartmentsService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public DepartmentsService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<ResponseWithData<List<GetListResponse>>> GetAllDepartmentsAsync()
        {
            try
            {
                return new ResponseWithData<List<GetListResponse>>()
                {
                    Data = _mapper.Map<List<GetListResponse>>((await _unitOfWork.DepartmentsRepository.GetAllAsync()).OrderByDescending(x => x.Id)),
                    Message = ApplicationMessages.Data,
                    IsSuccess = true
                };
            }
            catch (Exception ex)
            {
                return new ResponseWithData<List<GetListResponse>>()
                {
                    Data = new List<GetListResponse>(),
                    Message = ApplicationMessages.Error,
                    Errors = new[] { ex.Message }
                };
            }
        }

        public async Task<ResponseWithData<DepartmentRequest>> AddDepartmentAsync(DepartmentRequest departmentRequest)
        {
            bool exists = false;
            exists = await _unitOfWork.DepartmentsRepository.ExistAsync(x => x.Name.Trim().ToUpper() == departmentRequest.Name.Trim().ToUpper());

            if (exists)
            {
                string resultMsg = ApplicationMessages.IsExist;

                return new ResponseWithData<DepartmentRequest>()
                {
                    IsExists = true,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }

            string err = ApplicationMessages.Error;
            try
            {
                var objResult = await _unitOfWork.DepartmentsRepository.AddAsync(_mapper.Map<Department>(departmentRequest));
                bool result = await _unitOfWork.CompleteAsync() > 0;

                return new ResponseWithData<DepartmentRequest>()
                {
                    IsSuccess = result,
                    IdOfAddedObject = objResult.Id,
                    Data = departmentRequest,
                    Errors = new string[] { },
                    Message = result ? ApplicationMessages.Done : err
                };
            }
            catch (Exception ex)
            {
                await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, departmentRequest);
                return new ResponseWithData<DepartmentRequest>()
                {
                    Errors = new string[] { err },
                    Message = ex.Message
                };
            }
        }

        public async Task<ResponseWithData<DepartmentRequest>> UpdateDepartmentAsync(int deptId, DepartmentRequest departmentRequest)
        {
            bool exists = false;
            string localizedDepartment = ApplicationMessages.Department;

            var department = await _unitOfWork.DepartmentsRepository.GetByIdAsync(deptId);

            if (department == null || departmentRequest.Id != deptId)
            {
                string resultMsg = ApplicationMessages.CannotBeFound;

                return new ResponseWithData<DepartmentRequest>()
                {
                    IsNotFound = true,
                    Data = departmentRequest,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }

            exists = await _unitOfWork.DepartmentsRepository.ExistAsync(x => x.Name.Trim().ToUpper() == departmentRequest.Name.Trim().ToUpper() && x.Id != deptId);
            if (!exists)
            {
                string err = ApplicationMessages.Error;
                try
                {

                    department.Name = departmentRequest.Name;
                    var objResult = _unitOfWork.DepartmentsRepository.Update(department);
                    bool result = await _unitOfWork.CompleteAsync() > 0;

                    return new ResponseWithData<DepartmentRequest>()
                    {
                        IsSuccess = result,
                        IsUpdated = true,
                        IdOfAddedObject = objResult.Id,
                        Data = departmentRequest,
                        Errors = new string[] { },
                        Message = result ? ApplicationMessages.Updated : err
                    };
                }
                catch (Exception ex)
                {
                    await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, departmentRequest);
                    return new ResponseWithData<DepartmentRequest>()
                    {
                        Errors = new string[] { err },
                        Message = ex.Message
                    };
                }
            }

            string msg = ApplicationMessages.IsExist;
            return new ResponseWithData<DepartmentRequest>()
            {
                IsExists = true,
                Errors = new string[] { msg },
                Message = msg
            };
        }

        public async Task<Response> DeleteDepartmentAsync(int deptId)
        {
            var department = await _unitOfWork.DepartmentsRepository.GetByIdAsync(deptId);

            if (department == null)
            {
                string? resultMsg = ApplicationMessages.CannotBeFound;

                return new Response()
                {
                    IsNotFound = true,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }


            string err = ApplicationMessages.Error;
            try
            {
                await _unitOfWork.DepartmentsRepository.Remove(department);

                if (!(await _unitOfWork.CompleteAsync() > 0))

                    return new Response()
                    {
                        IsSuccess = false,
                        Errors = new string[] { err },
                        Message = err
                    };
                return new Response()
                {
                    IsSuccess = true,
                    Errors = new string[] { },
                    Message = ApplicationMessages.Deleted
                };
            }
            catch (Exception ex)
            {
                await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, new { deptId });
                return new Response()
                {
                    Errors = new string[] { err },
                    Message = ex.Message
                };
            }
        }

        public async Task<ResponseWithData<List<SelectListResponse>>> ListOfDepartmentsAsync()
        {

            return new ResponseWithData<List<SelectListResponse>>()
            {
                IsSuccess = true,
                Data = _mapper.Map<List<SelectListResponse>>(await _unitOfWork.DepartmentsRepository.GetAllAsync(orderBy: x => x.OrderByDescending(a => a.Id))),
                Message = ApplicationMessages.Data
            };

        }

    }
}
