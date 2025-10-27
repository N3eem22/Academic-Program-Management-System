import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function Prerequisites() {
  // const universityId = 1;
    const nameOfLU= 'prerequisite';
    const property = 'المتطلب';
        

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);

  return (
    <div className="App">
      { universityId && 
  <DataTable universityId ={universityId}
  apiUri={ (universityId) =>
`https://localhost:7095/api/Prerequisites?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Prerequisites/${id}?updatedPrerequisite=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Prerequisites/${id}`}
        apiUriPost={`https://localhost:7095/api/Prerequisites`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

Prerequisites.displayName = "Prerequisites";

Prerequisites.propTypes = {};

export { Prerequisites };