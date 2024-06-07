import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function GradesDetails() {
  const universityId = 1;
    const nameOfLU= 'theDetails';
    const property = 'الدرجات التفصيلية';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/GradesDetails?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/GradesDetails/${id}?updatedTheDetails=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/GradesDetails/${id}`}
        apiUriPost={`https://localhost:7095/api/GradesDetails`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

GradesDetails.displayName = "GradesDetails";

GradesDetails.propTypes = {};

export { GradesDetails };