import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function ReasonForBlockingRegistration() {
  const universityId = 1;
    const nameOfLU= '';
    const property = 'سبب حجب التسجيل';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/ReasonForBlockingRegistration?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/ReasonForBlockingRegistration/${id}?updatedReason=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/ReasonForBlockingRegistration/${id}`}
        apiUriPost={`https://localhost:7095/api/ReasonForBlockingRegistration`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

ReasonForBlockingRegistration.displayName = "ReasonForBlockingRegistration";

ReasonForBlockingRegistration.propTypes = {};

export { ReasonForBlockingRegistration };