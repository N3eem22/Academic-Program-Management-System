import React from 'react';
import { DataTable } from '../../../../components/dataTable';

function TypeOfFinancialStatementInTheProgram() {
  const universityId = 1;
    const nameOfLU= 'theType';
    const property = 'نوع البيان المالي للبرنامج';
    

  return (
    <div className="App">
      <DataTable  apiUri={`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram?UniversityId=${universityId}`}
        apiUriPut = {(id,value) => `https://localhost:7095/api/TypeOfFinancialStatementInTheProgram/${id}?updatedFinancialStatementType=${value}`}
        apiUriDelete={(id) => `https://localhost:7095/api/TypeOfFinancialStatementInTheProgram/${id}`}
        apiUriPost={`https://localhost:7095/api/TypeOfFinancialStatementInTheProgram`}
        nameOfLU={nameOfLU}
        property= {property}/>
       
    </div>
  );
}

TypeOfFinancialStatementInTheProgram.displayName = "TypeOfFinancialStatementInTheProgram";

TypeOfFinancialStatementInTheProgram.propTypes = {};

export { TypeOfFinancialStatementInTheProgram };