import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function Levels() {
  const universityId = 1;
    const nameOfLU= 'levels';
    const property = 'المستويات';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/Level?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Level/${id}?updatedLevel=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Level/${id}`}
        apiUriPost={`https://localhost:7095/api/Level`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

Levels.displayName = "Levels";

Levels.propTypes = {};

export { Levels };