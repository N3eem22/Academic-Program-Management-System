import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function TheResultAppears() {
  // const universityId = 1;
    const nameOfLU= 'ResultAppears';
    const property = 'ظهور النتيجة';
    
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);

  return (
    <div className="App">
        { universityId && 
  <DataTable     universityId ={universityId}
  apiUri={       (universityId) =>
`https://localhost:7095/api/TheResultAppears?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TheResultAppears/${id}?updatedResultAppears=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TheResultAppears/${id}`}
        apiUriPost={`https://localhost:7095/api/TheResultAppears`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

TheResultAppears.displayName = "TheResultAppears";

TheResultAppears.propTypes = {};

export { TheResultAppears };