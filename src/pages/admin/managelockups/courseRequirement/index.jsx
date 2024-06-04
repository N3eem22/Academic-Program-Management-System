import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function CourseRequirement() {
  const universityId = 1;
    const nameOfLU= '';
    const property = '';
    

  return (
    <div className="App">
      <DataTable  apiUri={`=${universityId}`}
        apiUriPut = {(id,value) => `/${id}?=${value}`}
        apiUriDelete={(id) => `/${id}`}
        apiUriPost={``}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

CourseRequirement.displayName = "CourseRequirement";

CourseRequirement.propTypes = {};

export { CourseRequirement };