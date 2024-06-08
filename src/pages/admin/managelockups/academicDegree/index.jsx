import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function TheAcademicDegree() {
  // const universityId = 1;
    const nameOfLU= 'AcademicDegreeName';
    const property = ' الدرجة العلمية  ';

const authUser = getAuthUser();
const [universityId, setuniversityId] = useState(null);

useEffect(() => {
  setuniversityId(authUser.universityId)
}, []);

  return (
    <div className="App">
   { universityId &&    <DataTable universityId ={universityId} 
 apiUri={   (universityId) =>
`https://localhost:7095/api/TheAcademicDegree?UniversityId=${universityId}`} 
        apiUriPut = {(id,value) => `https://localhost:7095/api/TheAcademicDegree/${id}?updatedAcademicDegreeName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TheAcademicDegree/${id}`}
        apiUriPost={`https://localhost:7095/api/TheAcademicDegree`}
        nameOfLU={nameOfLU}
        property={property}/> }
    </div>
  );
}

TheAcademicDegree.displayName = "TheAcademicDegree";

TheAcademicDegree.propTypes = {};

export { TheAcademicDegree };