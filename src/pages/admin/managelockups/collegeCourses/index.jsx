import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function CollegeCourses() {
  const universityId = 1;
    const nameOfLU= '';
    const property = '';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/CollegeCourses?FacultyId=${universityId}`}
        apiUriPut = {(id,value) => `/${id}?=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/CollegeCourses/${id}`}
        apiUriPost={`https://localhost:7095/api/CollegeCourses`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

CollegeCourses.displayName = "CollegeCourses";

CollegeCourses.propTypes = {};

export { CollegeCourses };