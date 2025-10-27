import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function PreviousQualification() {
  // const universityId = 1;
    const nameOfLU= 'previousQualification';
    const property = 'المؤهل السابق';
        

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
`https://localhost:7095/api/PreviousQualification?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/PreviousQualification/${id}?updatedQualification=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/PreviousQualification/${id}`}
        apiUriPost={`https://localhost:7095/api/PreviousQualification`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

PreviousQualification.displayName = "PreviousQualification";

PreviousQualification.propTypes = {};

export { PreviousQualification };