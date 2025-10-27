import { useEffect, useState } from "react";
import { useGlobalState } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
const DropDownItem = ({ index }) => {
  const { globalState, setGlobalState } = useGlobalState();
  
  const updateGlobalState = (fieldName, value) => {
    const temp = [...globalState];
    temp[index][fieldName] = value;
    setGlobalState(temp);
    console.log(globalState);
    
  };
  const[details , setDetails] = useState([]);
  useEffect(() => {
    const fetchGrades = axios.get(`https://localhost:7095/api/EquivalentGrade?${1}`).then((res)=>{console.log(res.data); setDetails(res.data) ;});
  }, []);
  
  return (
    <div>
      <p style={{ display: "inline" }}>{globalState[index].GradeName}</p>
      <input
        type="number"
        id="value"
        onChange={(e) => {
          updateGlobalState("value", e.target.value);
        }}
      ></input>

      <select
        id="equivalentGradeId"
        onChange={(e) => {
          updateGlobalState("equivalentGradeId", e.target.value);
        }}
      >
        <option value="">---</option>
        {details && details.map((detail, index) => (
        <option key={index} value={detail.id}> {detail.equivalentGrade}</option>
      ))}
      </select>

      <input
        type="text"
        id="yearValue"
        onChange={(e) => {
          updateGlobalState("yearValue", e.target.value);
        }}
      ></input>
      <button 
      className="btn btn-danger"
        onClick={() => {
          const temp = [...globalState];
          temp.splice(index, 1);
          setGlobalState(temp);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default DropDownItem;
