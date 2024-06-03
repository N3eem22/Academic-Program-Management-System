import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function CourseType() {
  const universityId = 1;
    const nameOfLU= 'courseType';
    const property = 'نوع المقرر';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/CourseType?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/courseType/${id}?updatedCourseType=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/courseType/${id}`}
        apiUriPost={`https://localhost:7095/api/CourseType`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

CourseType.displayName = "CourseType";

CourseType.propTypes = {};

export { CourseType };