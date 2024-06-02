import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function BurdenCalculation() {
  const universityId = 1;
    const nameOfLU= 'BurdenCalculationAS';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/BurdenCalculation?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/BurdenCalculation${id}?updatedBurdenCalculationAS=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/BurdenCalculation/${id}`}
        apiUriPost={`https://localhost:7095/api/BurdenCalculation`}
        nameOfLU={nameOfLU}/>
    </div>
  );
}

BurdenCalculation.displayName = "BurdenCalculation";

BurdenCalculation.propTypes = {};

export { BurdenCalculation };