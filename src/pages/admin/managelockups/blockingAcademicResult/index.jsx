import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function ReasonForBlockingAcademicResult() {
  // const universityId = 1;
    const nameOfLU= 'theReasonForBlockingAcademicResult';
    const property = 'سبب حجب النتيجة';

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);
    
    

  return (
    <div className="App">
     { universityId &&  <DataTable  universityId ={universityId}
 apiUri={   (universityId) =>
`https://localhost:7095/api/ReasonForBlockingAcademicResult?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/ReasonForBlockingAcademicResult/${id}?updatedReason=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/ReasonForBlockingAcademicResult/${id}`}
        apiUriPost={`https://localhost:7095/api/ReasonForBlockingAcademicResult`}
        nameOfLU={nameOfLU}
        property= {property}/> }
       
    </div>
  );
}

ReasonForBlockingAcademicResult.displayName = "ReasonForBlockingAcademicResult";

ReasonForBlockingAcademicResult.propTypes = {};

export { ReasonForBlockingAcademicResult };