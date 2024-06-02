import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function TheAcademicDegree() {
  const universityId = 1;
    const nameOfLU= 'AcademicDegreeName';
    const property = ' الدرجة العلمية  ';

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TheAcademicDegree?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TheAcademicDegree/${id}?updatedAcademicDegreeName=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TheAcademicDegree/${id}`}
        apiUriPost={`https://localhost:7095/api/TheAcademicDegree`}
        nameOfLU={nameOfLU}
        property={property}/>
    </div>
  );
}

TheAcademicDegree.displayName = "TheAcademicDegree";

TheAcademicDegree.propTypes = {};

export { TheAcademicDegree };