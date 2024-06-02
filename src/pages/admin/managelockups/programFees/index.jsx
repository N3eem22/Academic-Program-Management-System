import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function TypeOfProgramFees() {
  const universityId = 1;
    const nameOfLU= 'typeOfFees';
    const property = 'نوع الرسوم البرنامج';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TypeOfProgramFees?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfProgramFees/${id}?updatedTypeOfFeesName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfProgramFees/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfProgramFees`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

TypeOfProgramFees.displayName = "TypeOfProgramFees";

TypeOfProgramFees.propTypes = {};

export { TypeOfProgramFees };