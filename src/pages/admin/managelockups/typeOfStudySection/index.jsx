import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function TypeOfStudySection() {
  const universityId = 1;
    const nameOfLU= 'TheTypeOfStudySectio';
    const property = '';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TypeOfStudySection?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfStudySection/${id}?updatedTypeOfStudySectionName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfStudySection/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfStudySection`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

TypeOfStudySection.displayName = "TypeOfStudySection";

TypeOfStudySection.propTypes = {};

export { TypeOfStudySection };