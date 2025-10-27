import React, { useEffect, useState } from "react";
import { DataTable } from "../../../../components/dataTable";
import { getAuthUser } from "../../../../helpers/storage";

function BurdenCalculation() {
  // const universityId = 1;
  const nameOfLU = "burdenCalculationAS";
  const property = "حساب العبء";

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
            `https://localhost:7095/api/BurdenCalculation?UniversityId=${universityId}`
          }
          apiUriPut={(id, value) =>
            `https://localhost:7095/api/BurdenCalculation${id}?updatedBurdenCalculationAS=${value}`
          }
          apiUriDelete={(id) =>
            `https://localhost:7095/api/BurdenCalculation/${id}`
          }
          apiUriPost={`https://localhost:7095/api/BurdenCalculation`}
          nameOfLU={nameOfLU}
          property={property}
        />
      )}
    </div>
  );
}

BurdenCalculation.displayName = "BurdenCalculation";

BurdenCalculation.propTypes = {};

export { BurdenCalculation };
