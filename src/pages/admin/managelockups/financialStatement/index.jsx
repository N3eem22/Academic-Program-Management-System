import React , {useEffect, useState }from  'react';
import { DataTable } from '../../../../components/dataTable';
import { getAuthUser } from "../../../../helpers/storage";

function TypeOfFinancialStatementInTheProgram() {
  // const universityId = 1;
    const nameOfLU= 'theType';
    const property = 'نوع البيان المالي للبرنامج';
    

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
`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfFinancialStatementInTheProgram/${id}?updatedFinancialStatementType=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfFinancialStatementInTheProgram/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram`}
        nameOfLU={nameOfLU}
        property= {property}/>}
       
    </div>
  );
}

TypeOfFinancialStatementInTheProgram.displayName = "TypeOfFinancialStatementInTheProgram";

TypeOfFinancialStatementInTheProgram.propTypes = {};

export { TypeOfFinancialStatementInTheProgram };