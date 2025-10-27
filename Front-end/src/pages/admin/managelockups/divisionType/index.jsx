import React, { useEffect, useState } from "react";
import { DataTable } from "../../../../components/dataTable";
import { getAuthUser } from "../../../../helpers/storage";

function DivisionType() {
  // const universityId = 1;
  const nameOfLU = "division_Type";
  const property = "نوع الشعبة";

  const authUser = getAuthUser();
  const [universityId, setuniversityId] = useState(null);

  useEffect(() => {
    setuniversityId(authUser.universityId);
  }, []);
  return (
    <div className="App">
      {universityId && (
        <DataTable
          universityId={universityId}
          apiUri={(universityId) =>
            `https://localhost:7095/api/DivisionType?UniversityId=${universityId}`
          }
          apiUriPut={(id, value) =>
            `https://localhost:7095/api/DivisionType/${id}?updatedDivisionType=${value}`
          }
          apiUriDelete={(id) => `https://localhost:7095/api/DivisionType/${id}`}
          apiUriPost={`https://localhost:7095/api/DivisionType`}
          nameOfLU={nameOfLU}
          property={property}
        />
      )}
    </div>
  );
}

DivisionType.displayName = "DivisionType";

DivisionType.propTypes = {};

export { DivisionType };
