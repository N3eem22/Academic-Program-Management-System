import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function CourseType() {
  // const universityId = 1;
    const nameOfLU= 'courseType';
    const property = 'نوع المقرر';

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);
  return (
    <div className="App">
     { universityId &&  <DataTable universityId ={universityId}
  apiUri={   (universityId) =>
`https://localhost:7095/api/CourseType?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/courseType/${id}?updatedCourseType=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/courseType/${id}`}
        apiUriPost={`https://localhost:7095/api/CourseType`}
        nameOfLU={nameOfLU}
        property= {property}/> }

       
    </div>
  );
}

CourseType.displayName = "CourseType";

CourseType.propTypes = {};

export { CourseType };