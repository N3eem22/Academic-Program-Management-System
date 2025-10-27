
import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function EquivalentGrade() {
  // const universityId = 1;
    const nameOfLU= 'equivalentGrade';
    const property = 'التقدير المكافئ';
    

    const authUser = getAuthUser();
    const [universityId, setuniversityId] = useState(null);
    
    useEffect(() => {
      setuniversityId(authUser.universityId)
    }, []);
  return (
    <div className="App">
     { universityId &&   <DataTable     universityId ={universityId}
 apiUri={  (universityId) =>
`https://localhost:7095/api/EquivalentGrade?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/EquivalentGrade/${id}?updatedEquivalentGrade=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/EquivalentGrade/${id}`}
        apiUriPost={`https://localhost:7095/api/EquivalentGrade`}
        nameOfLU={nameOfLU}
        property= {property}/>    }

       
    </div>
  );
}

EquivalentGrade.displayName = "EquivalentGrade";

EquivalentGrade.propTypes = {};

export { EquivalentGrade };