import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function SummerFees() {
  // const universityId = 1;
    const nameOfLU= 'theTypeOfSummerFees';
    const property = 'رسوم المقرر الصيفي';
        

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
`https://localhost:7095/api/TypeOfSummerFees?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfSummerFees/${id}?updatedTypeOfSummerFees=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfSummerFees/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfSummerFees`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

SummerFees.displayName = "SummerFees";

SummerFees.propTypes = {};

export { SummerFees };