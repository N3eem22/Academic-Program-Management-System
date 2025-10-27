import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function SystemType() {
  // const universityId = 1;
    const nameOfLU= 'systemName';
    const property = 'نوع النظام';
    
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);

  return (
    <div className="App">
         { universityId && 
   <DataTable      universityId ={universityId}
 apiUri={    (universityId) =>
`https://localhost:7095/api/SystemType?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/SystemType/${id}?updatedSystemName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/SystemType/${id}`}
        apiUriPost={`https://localhost:7095/api/SystemType`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

SystemType.displayName = "SystemType";

SystemType.propTypes = {};

export { SystemType };