import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function Semesters() {
  // const universityId = 1;
    const nameOfLU= 'semesters';
    const property = 'الفصل الدراسي';
    
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);

  return (
    <div className="App">
       { universityId && 
   <DataTable     universityId ={universityId}
 apiUri={      (universityId) =>
`https://localhost:7095/api/Semesters?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/Semesters/${id}?updatedSemester=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/Semesters/${id}`}
        apiUriPost={`https://localhost:7095/api/Semesters`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

Semesters.displayName = "Semesters";

Semesters.propTypes = {};

export { Semesters };