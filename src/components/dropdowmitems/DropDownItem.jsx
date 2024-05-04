import { useGlobalState } from "./Context";
import "bootstrap/dist/css/bootstrap.min.css"

const DropDownItem = ({ index }) => {
  const { globalState, setGlobalState } = useGlobalState();
  const updateGlobalState = (fieldName, value) => {
    const temp = [...globalState];
    temp[index][fieldName] = value;
    setGlobalState(temp);
  };
  return (
    <div>
      <p style={{ display: "inline" }}>{globalState[index].tag}</p>
      <input
        type="text"
        id="input1"
        onChange={(e) => {
          updateGlobalState("input1", e.target.value);
        }}
      ></input>

      <select
        id="input2"
        onChange={(e) => {
          updateGlobalState("input2", e.target.value);
        }}
      >
        <option value="">---</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <input
        type="text"
        id="input3"
        onChange={(e) => {
          updateGlobalState("input3", e.target.value);
        }}
      ></input>
      <button
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
