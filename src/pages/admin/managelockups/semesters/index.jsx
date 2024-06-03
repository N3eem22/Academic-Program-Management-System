import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function Semesters() {
  const universityId = 1;
    const nameOfLU= 'semesters';
    const property = 'الفصل الدراسي';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/Semesters?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Semesters/${id}?updatedSemester=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Semesters/${id}`}
        apiUriPost={`https://localhost:7095/api/Semesters`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

Semesters.displayName = "Semesters";

Semesters.propTypes = {};

export { Semesters };