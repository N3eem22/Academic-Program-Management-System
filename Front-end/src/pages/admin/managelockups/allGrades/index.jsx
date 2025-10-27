import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function AllGrades() {
  // const universityId = 1;
    const nameOfLU= 'theGrade';
    const property ='الدرجات';

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);

  return (
    <div className="App">
     { universityId &&  <DataTable universityId ={universityId}    apiUri={ (universityId) => `https://localhost:7095/api/AllGrades?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/AllGrades/${id}?Updatedgrade=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/AllGrades/${id}`}
        apiUriPost={`https://localhost:7095/api/AllGrades`}
        nameOfLU={nameOfLU}
        property= {property}/>}
    </div>
  );
}

AllGrades.displayName = "AllGrades";

AllGrades.propTypes = {};

export { AllGrades };