import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";


function ReasonForBlockingRegistration() {
  // const universityId = 1;
    const nameOfLU= 'theReasonForBlockingRegistration';
    const property = 'سبب حجب التسجيل';

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);
    
  return (
    <div className="App">
   { universityId &&   <DataTable universityId ={universityId}
 apiUri={   (universityId) =>
`https://localhost:7095/api/ReasonForBlockingRegistration?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/ReasonForBlockingRegistration/${id}?updatedReason=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/ReasonForBlockingRegistration/${id}`}
        apiUriPost={`https://localhost:7095/api/ReasonForBlockingRegistration`}
        nameOfLU={nameOfLU}
        property= {property}/>  }

       
    </div>
  );
}

ReasonForBlockingRegistration.displayName = "ReasonForBlockingRegistration";

ReasonForBlockingRegistration.propTypes = {};

export { ReasonForBlockingRegistration };