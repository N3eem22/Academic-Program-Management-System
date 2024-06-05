import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function BlockingProofOfRegistration() {
  const universityId = 1;
    const nameOfLU= 'reasonsOfBlocking';
    const property = 'سبب حجب اثبات القيد ';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/BlockingProofOfRegistration?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/BlockingProofOfRegistration/${id}?updatedReasonsOfBlocking=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/BlockingProofOfRegistration/${id}`}
        apiUriPost={`https://localhost:7095/api/BlockingProofOfRegistration`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

BlockingProofOfRegistration.displayName = "BlockingProofOfRegistration";

BlockingProofOfRegistration.propTypes = {};

export { BlockingProofOfRegistration };