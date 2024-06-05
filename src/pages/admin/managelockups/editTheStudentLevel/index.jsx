import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function EditTheStudentLevel() {
  const universityId = 1;
    const nameOfLU= 'editTheStudentLevel';
    const property = 'تعديل مستوي الطالب';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/EditTheStudentLevel?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/EditTheStudentLevel/${id}?updatedEditTheStudentLevel=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/EditTheStudentLevel/${id}`}
        apiUriPost={`https://localhost:7095/api/EditTheStudentLevel`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

EditTheStudentLevel.displayName = "EditTheStudentLevel";

EditTheStudentLevel.propTypes = {};

export { EditTheStudentLevel };