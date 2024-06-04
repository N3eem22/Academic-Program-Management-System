import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function ReasonForBlockingAcademicResult() {
  const universityId = 1;
    const nameOfLU= 'theReasonForBlockingAcademicResult';
    const property = 'سبب حجب النتيجة';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/ReasonForBlockingAcademicResult?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/ReasonForBlockingAcademicResult/${id}?updatedReason=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/ReasonForBlockingAcademicResult/${id}`}
        apiUriPost={`https://localhost:7095/api/ReasonForBlockingAcademicResult`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

ReasonForBlockingAcademicResult.displayName = "ReasonForBlockingAcademicResult";

ReasonForBlockingAcademicResult.propTypes = {};

export { ReasonForBlockingAcademicResult };