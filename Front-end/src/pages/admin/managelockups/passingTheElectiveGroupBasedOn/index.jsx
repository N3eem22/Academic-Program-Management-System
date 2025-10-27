import React , {useEffect, useState }from  'react';
import { DataTable } from "../../../../components/dataTable";
import { getAuthUser } from "../../../../helpers/storage";

function PassingTheElectiveGroupBasedOn() {
  // const universityId = 1;
  const nameOfLU = "passingTheElectiveGroup";
  const property = "اجتياز المجموعة الاختيارية بناءا علي";

  const authUser = getAuthUser();
  const [universityId, setuniversityId] = useState(null);

  useEffect(() => {
    setuniversityId(authUser.universityId);
  }, []);

  return (
    <div className="App">
      { universityId && 
  <DataTable
        universityId={universityId}
        apiUri={     (universityId) =>
`https://localhost:7095/api/PassingTheElectiveGroupBasedOn?UniversityId=${universityId}`}
        apiUriPut={(id, value) =>
          `https://localhost:7095/api/PassingTheElectiveGroupBasedOn/${id}?updatedPassingTheElectiveGroup=${value}`
        }
        apiUriDelete={(id) =>
          `https://localhost:7095/api/PassingTheElectiveGroupBasedOn/${id}`
        }
        apiUriPost={`https://localhost:7095/api/PassingTheElectiveGroupBasedOn`}
        nameOfLU={nameOfLU}
        property={property}
      />}
    </div>
  );
}

PassingTheElectiveGroupBasedOn.displayName = "PassingTheElectiveGroupBasedOn";

PassingTheElectiveGroupBasedOn.propTypes = {};

export { PassingTheElectiveGroupBasedOn };
