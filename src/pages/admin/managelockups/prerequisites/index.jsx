import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function Prerequisites() {
  const universityId = 1;
    const nameOfLU= 'prerequisite';
    const property = 'المتطلب';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/Prerequisites?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Prerequisites/${id}?updatedPrerequisite=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Prerequisites/${id}`}
        apiUriPost={`https://localhost:7095/api/Prerequisites`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

Prerequisites.displayName = "Prerequisites";

Prerequisites.propTypes = {};

export { Prerequisites };