import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function Hours() {
  // const universityId = 1;
    const nameOfLU= 'hoursName';
    const property = 'الساعات';

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
`https://localhost:7095/api/Hours?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Hours/${id}?updatedHour=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Hours/${id}`}
        apiUriPost={`https://localhost:7095/api/Hours`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

Hours.displayName = "Hours";

Hours.propTypes = {};

export { Hours };