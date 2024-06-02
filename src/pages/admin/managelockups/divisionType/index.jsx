import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function DivisionType() {
  const universityId = 1;
    const nameOfLU= 'division_Type';
    const property = 'نوع الشعبة';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/DivisionType?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/DivisionType/${id}?updatedDivisionType=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/DivisionType/${id}`}
        apiUriPost={`https://localhost:7095/api/DivisionType`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

DivisionType.displayName = "DivisionType";

DivisionType.propTypes = {};

export { DivisionType };