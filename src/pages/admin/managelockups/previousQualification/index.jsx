import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function PreviousQualification() {
  const universityId = 1;
    const nameOfLU= 'previousQualification';
    const property = 'المؤهل السابق';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/PreviousQualification?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/PreviousQualification/${id}?updatedQualification=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/PreviousQualification/${id}`}
        apiUriPost={`https://localhost:7095/api/PreviousQualification`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

PreviousQualification.displayName = "PreviousQualification";

PreviousQualification.propTypes = {};

export { PreviousQualification };