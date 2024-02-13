using AutoMapper;
using Generic.Domian.Constants;
using Generic.Domian.Dtos.Requests.HR;
using Generic.Domian.Dtos.Responses;
using Generic.Domian.Dtos.Responses.HR;
using Generic.Domian.Interfaces;
using Generic.Domian.Models.HR;
using Generic.Services.IServices.HR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Generic.Services.Services.HR
{
    public class EmployeeService : IEmployeesService
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public EmployeeService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }


        public async Task<ResponseWithData<List<GetListResponse>>> GetAllEmployeesAsync()
        {
            try
            {
                return new ResponseWithData<List<GetListResponse>>()
                {
                    Data = _mapper.Map<List<GetListResponse>>((await _unitOfWork.EmployeesRepository.GetAllAsync()).OrderByDescending(x => x.Id)),
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

        public async Task<ResponseWithData<EmployeeRequest>> AddEmployeeAsync(EmployeeRequest EmployeeRequest)
        {
            bool mobileExists = await _unitOfWork.EmployeesRepository.ExistAsync(x => x.Mobile.Trim() == EmployeeRequest.Mobile.Trim());

            bool NidExists = await _unitOfWork.EmployeesRepository.ExistAsync(x => x.NId.Trim() == EmployeeRequest.NId.Trim());

            if (mobileExists || NidExists)
            {
                string resultMsg = mobileExists ? ApplicationMessages.IsMobileExist : ApplicationMessages.IsNidExist;

                return new ResponseWithData<EmployeeRequest>()
                {
                    IsExists = true,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }

            string err = ApplicationMessages.Error;
            try
            {
                var objResult = await _unitOfWork.EmployeesRepository.AddAsync(_mapper.Map<Employee>(EmployeeRequest));
                bool result = await _unitOfWork.CompleteAsync() > 0;

                return new ResponseWithData<EmployeeRequest>()
                {
                    IsSuccess = result,
                    IdOfAddedObject = objResult.Id,
                    Data = EmployeeRequest,
                    Errors = new string[] { },
                    Message = result ? ApplicationMessages.Done : err
                };
            }
            catch (Exception ex)
            {
                await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, EmployeeRequest);
                return new ResponseWithData<EmployeeRequest>()
                {
                    Errors = new string[] { err },
                    Message = ex.Message
                };
            }
        }

        public async Task<ResponseWithData<EmployeeRequest>> UpdateEmployeeAsync(int EmpId, EmployeeRequest EmployeeRequest)
        {
            EmployeeRequest.Id = 0;

            string localizedEmployee = ApplicationMessages.Employee;

            var Employee = await _unitOfWork.EmployeesRepository.GetByIdAsync(EmpId);

            if (Employee == null )
            {
                string resultMsg = ApplicationMessages.CannotBeFound;

                return new ResponseWithData<EmployeeRequest>()
                {
                    IsNotFound = true,
                    Data = EmployeeRequest,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }


            bool mobileExists = await _unitOfWork.EmployeesRepository.ExistAsync(x => x.Mobile.Trim() == EmployeeRequest.Mobile.Trim() && x.Id != EmpId);

            bool NidExists = await _unitOfWork.EmployeesRepository.ExistAsync(x => x.NId.Trim() == EmployeeRequest.NId.Trim() && x.Id != EmpId);

            if (mobileExists || NidExists)
            {
                string resultMsg = mobileExists ? ApplicationMessages.IsMobileExist : ApplicationMessages.IsNidExist;

                return new ResponseWithData<EmployeeRequest>()
                {
                    IsExists = true,
                    Errors = new string[] { resultMsg },
                    Message = resultMsg
                };
            }

         
                string err = ApplicationMessages.Error;
                try
                {

                    Employee.Name = EmployeeRequest.Name;
                    var objResult = _unitOfWork.EmployeesRepository.Update(_mapper.Map<Employee>(EmployeeRequest));
                    bool result = await _unitOfWork.CompleteAsync() > 0;

                    return new ResponseWithData<EmployeeRequest>()
                    {
                        IsSuccess = result,
                        IsUpdated = true,
                        IdOfAddedObject = objResult.Id,
                        Data = EmployeeRequest,
                        Errors = new string[] { },
                        Message = result ? ApplicationMessages.Updated : err
                    };
                }
                catch (Exception ex)
                {
                    await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, EmployeeRequest);
                    return new ResponseWithData<EmployeeRequest>()
                    {
                        Errors = new string[] { err },
                        Message = ex.Message
                    };
                }
            
        }

        public async Task<Response> DeleteEmployeeAsync(int EmpId)
        {
            var Employee = await _unitOfWork.EmployeesRepository.GetByIdAsync(EmpId);

            if (Employee == null)
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
                await _unitOfWork.EmployeesRepository.Remove(Employee);

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
                await _unitOfWork.ApplicationLogsRepository.LogInDB(ex, new { EmpId });
                return new Response()
                {
                    Errors = new string[] { err },
                    Message = ex.Message
                };
            }
        }

        public async Task<ResponseWithData<List<SelectListResponse>>> ListOfEmployeesAsync()
        {

            return new ResponseWithData<List<SelectListResponse>>()
            {
                IsSuccess = true,
                Data = _mapper.Map<List<SelectListResponse>>(await _unitOfWork.EmployeesRepository.GetAllAsync(orderBy: x => x.OrderByDescending(a => a.Id))),
                Message = ApplicationMessages.Data
            };

        }


    }
}
