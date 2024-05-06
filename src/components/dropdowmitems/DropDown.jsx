import { useState } from "react";
import DropDownItem from "./DropDownItem";
import { useGlobalState } from "./Context";
const DropDown = () => {
  const [tag, setTag] = useState("");
  const { globalState, setGlobalState } = useGlobalState();
  return (
    <div>
      <select
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
          console.log(e.target.value);
        }}
      >
        <option value="option1">Option 1</option>
        <option value="option2"> Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <button
        onClick={() => {
          if (tag !== "") {
            const temp = [...globalState];
            temp.push({
              tag: tag,
              input1: "",
              input2: "",
              input3: "",
            });
            setGlobalState(temp);
            setTag("");
          } else { 
            alert('selected a proper tag'); 
          }
        }}
      >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>   </button>
        <button onClick={() => { 
            console.log(globalState); 
        }}>
            view state in console
        </button>
      {globalState.map((item, index) => {
        return <DropDownItem key={index} index={index} />;
      })}
    </div>
  );
};

export default DropDown;
