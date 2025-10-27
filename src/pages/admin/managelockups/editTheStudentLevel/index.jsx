import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function EditTheStudentLevel() {
  // const universityId = 1;
    const nameOfLU= 'editTheStudentLevel';
    const property = 'تعديل مستوي الطالب';
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);
  return (
    <div className="App">
        { universityId &&  <DataTable     universityId ={universityId}
  apiUri={  (universityId) =>
    `https://localhost:7095/api/EditTheStudentLevel?UniversityId=${universityId}`}
        apiUriPut = {(id,value) =>` https://localhost:7095/api/EditTheStudentLevel/${id}?updatedEditTheStudentLevel=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/EditTheStudentLevel/${id}`}
        apiUriPost={`https://localhost:7095/api/EditTheStudentLevel`}
        nameOfLU={nameOfLU}
        property= {property}/>  }

       
    </div>
  );
}

EditTheStudentLevel.displayName = "EditTheStudentLevel";

EditTheStudentLevel.propTypes = {};

export { EditTheStudentLevel };