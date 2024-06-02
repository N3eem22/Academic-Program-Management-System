import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function TheResultAppears() {
  const universityId = 1;
    const nameOfLU= 'ResultAppears';
    const property = 'ظهور النتيجة';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TheResultAppears?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TheResultAppears/${id}?updatedResultAppears=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TheResultAppears/${id}`}
        apiUriPost={`https://localhost:7095/api/TheResultAppears`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

TheResultAppears.displayName = "TheResultAppears";

TheResultAppears.propTypes = {};

export { TheResultAppears };