
import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function Faculty() {
  const universityId = 1;
    const nameOfLU= 'facultyName';
    const property = 'المعهد';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/Faculty${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Faculty/${id}?updatedFacultyName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Faculty?${id}`}
        apiUriPost={`https://localhost:7095/api/Faculty`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

Faculty.displayName = "Faculty";

Faculty.propTypes = {};

export { Faculty };