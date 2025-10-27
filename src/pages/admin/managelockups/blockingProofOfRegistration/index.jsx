import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function BlockingProofOfRegistration() {
  // const universityId = 1;
    const nameOfLU= 'reasonsOfBlocking';
    const property = 'سبب حجب اثبات القيد ';
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);


  return (
    <div className="App">
    { universityId &&    <DataTable     universityId ={universityId}
 apiUri={   (universityId) =>
`https://localhost:7095/api/BlockingProofOfRegistration?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/BlockingProofOfRegistration/${id}?updatedReasonsOfBlocking=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/BlockingProofOfRegistration/${id}`}
        apiUriPost={`https://localhost:7095/api/BlockingProofOfRegistration`}
        nameOfLU={nameOfLU}
        property= {property}/>    }

       
    </div>
  );
}

BlockingProofOfRegistration.displayName = "BlockingProofOfRegistration";

BlockingProofOfRegistration.propTypes = {};

export { BlockingProofOfRegistration };