import { useState, useEffect } from "react";
import DropDownItem from "./DropDownItem";
import { useGlobalState } from "./Context";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const DropDown = () => {
  const [tag, setTag] = useState("");
  const { globalState, setGlobalState } = useGlobalState();
  const [details, setDetails] = useState([]);
  
  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const res = await axios.get(`https://localhost:7095/api/GradesDetails?${1}`);
        console.log(res.data);
        setDetails(res.data);
      } catch (error) {
        console.error("Error fetching grades:", error);
      }
    };
    fetchGrades();
  }, []);

  return (
    <div className="mt-4 d-flex flex-column align-items-start">
      <div className="d-flex mb-4">
        <select
          value={tag}
          onChange={(e) => {
            setTag(parseInt(e.target.value));
            console.log(e.target.value);
          }}
          className="form-select me-3"
        >
          <option value="">-------</option>
          {details &&
            details.map((detail, index) => (
              <option key={index} value={detail.id} >
                {detail.theDetails} 
              </option>
            ))}
        </select>
        <button
          onClick={() => {
            if (tag !== "") {
              const temp = [...globalState];
              temp.push({
                tag: tag,
                GradeName : details[tag-1].theDetails
              });
              setGlobalState(temp);
              setTag("");
            } else {
              // alert("Please select a proper tag");
            }
          }}
          className="btn btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-plus-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </button>
      </div>
      <div className="d-flex flex-wrap">
        {globalState.map((item, index) => {
          return (
            <div key={index} className="mb-3 me-3">
              <DropDownItem index={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
