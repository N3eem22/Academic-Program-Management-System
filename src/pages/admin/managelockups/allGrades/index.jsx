import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function AllGrades() {
  const universityId = 1;
    const nameOfLU= 'theGrade';
    const property ='الدرجات';

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/AllGrades?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/AllGrades/${id}?Updatedgrade=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/AllGrades/${id}`}
        apiUriPost={`https://localhost:7095/api/AllGrades`}
        nameOfLU={nameOfLU}
        property= {property}/>
    </div>
  );
}

AllGrades.displayName = "AllGrades";

AllGrades.propTypes = {};

export { AllGrades };