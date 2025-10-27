import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function Levels() {
  // const universityId = 1;
    const nameOfLU= 'levels';
    const property = 'المستويات';
    

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);

  return (
    <div className="App">
    { universityId && 
  <DataTable universityId ={universityId}
 apiUri={   (universityId) =>
`https://localhost:7095/api/Level?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Level/${id}?updatedLevel=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Level/${id}`}
        apiUriPost={`https://localhost:7095/api/Level`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

Levels.displayName = "Levels";

Levels.propTypes = {};

export { Levels };