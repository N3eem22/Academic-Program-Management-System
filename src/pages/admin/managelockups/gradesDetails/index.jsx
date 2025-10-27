import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function GradesDetails() {
  // const universityId = 1;
    const nameOfLU= 'theDetails';
    const property = 'الدرجات التفصيلية';
    

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
`https://localhost:7095/api/GradesDetails?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/GradesDetails/${id}?updatedTheDetails=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/GradesDetails/${id}`}
        apiUriPost={`https://localhost:7095/api/GradesDetails`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

GradesDetails.displayName = "GradesDetails";

GradesDetails.propTypes = {};

export { GradesDetails };