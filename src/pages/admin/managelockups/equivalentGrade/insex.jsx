
import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function EquivalentGrade() {
  const universityId = 1;
    const nameOfLU= 'equivalentGrade';
    const property = 'التقدير المكافئ';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/EquivalentGrade?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/EquivalentGrad/${id}?updatedEquivalentGrade=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/EquivalentGrade/${id}`}
        apiUriPost={`https://localhost:7095/api/EquivalentGrade`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

EquivalentGrade.displayName = "EquivalentGrade";

EquivalentGrade.propTypes = {};

export { EquivalentGrade };