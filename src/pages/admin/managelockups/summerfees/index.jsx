import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function SummerFees() {
  const universityId = 1;
    const nameOfLU= 'theTypeOfSummerFees';
    const property = 'رسوم المقرر الصيفي';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TypeOfSummerFees?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfSummerFees/${id}?updatedTypeOfSummerFees=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfSummerFees/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfSummerFees`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

SummerFees.displayName = "SummerFees";

SummerFees.propTypes = {};

export { SummerFees };