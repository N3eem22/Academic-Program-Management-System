
import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function Faculty() {
  // const universityId = 1;
    const nameOfLU= 'facultyName';
    const property = 'المعهد';
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);
  return (
    <div className="App">
         { universityId && 
 <DataTable     universityId ={universityId}
 apiUri={     (universityId) =>
`https://localhost:7095/api/Faculty${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Faculty/${id}?updatedFacultyName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Faculty?${id}`}
        apiUriPost={`https://localhost:7095/api/Faculty`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

Faculty.displayName = "Faculty";

Faculty.propTypes = {};

export { Faculty };