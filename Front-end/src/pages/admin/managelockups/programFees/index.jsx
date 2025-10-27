import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function TypeOfProgramFees() {
  // const universityId = 1;
    const nameOfLU= 'typeOfFees';
    const property = 'نوع الرسوم البرنامج';
        

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);

  return (
    <div className="App">
      { universityId && 
  <DataTable universityId ={universityId}
 apiUri={(universityId) =>
`https://localhost:7095/api/TypeOfProgramFees?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfProgramFees/${id}?updatedTypeOfFeesName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfProgramFees/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfProgramFees`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

TypeOfProgramFees.displayName = "TypeOfProgramFees";

TypeOfProgramFees.propTypes = {};

export { TypeOfProgramFees };