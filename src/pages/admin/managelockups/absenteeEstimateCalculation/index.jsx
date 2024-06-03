import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function AbsenteeEstimateCalculation() {
  const universityId = 1;
    const nameOfLU= 'absenteeEstimateCalculation';
    const property='';

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/AbsenteeEstimateCalculation?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/absenteeEstimateCalculation/${id}?updatedCalculation=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/absenteeEstimateCalculation/${id}`}
        apiUriPost={`https://localhost:7095/api/AbsenteeEstimateCalculation`}
        nameOfLU={nameOfLU}
        property={property}/>
    </div>
  );
}

AbsenteeEstimateCalculation.displayName = "AbsenteeEstimateCalculation";

AbsenteeEstimateCalculation.propTypes = {};

export { AbsenteeEstimateCalculation };