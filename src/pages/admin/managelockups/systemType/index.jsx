import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function SystemType() {
  const universityId = 1;
    const nameOfLU= 'systemName';
    const property = 'نوع النظام';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/SystemType?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/SystemType/${id}?updatedSystemName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/SystemType/${id}`}
        apiUriPost={`https://localhost:7095/api/SystemType`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

SystemType.displayName = "SystemType";

SystemType.propTypes = {};

export { SystemType };