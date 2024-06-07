import React, { useEffect, useState, Fragment, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createContext, useContext } from "react";
import axios from "axios";
import { AddGraduation } from "./AddGraduation";
import { GetGraduation } from "./GetGraduation";
const GlobalStateContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "Get":
      return { ...state, status: "Get" };
    case "Update":
      return { ...state, status: "Update" };
    case "Open":
      return { ...state, status: "Open" };
    case "Close":
      return { ...state, status: "Close" };
    case "Add":
      return { ...state, status: "Add" };
    default:
      return state;
  }
}
const GraduationPage = () => {
  const initialState = {
    status: '',
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialStates = {
  }
  const [globalState, setGlobalState] = useState(initialStates);


  const [graduation, setgraduation] = useState({
    programId: 48,
    studyYears: null,
    value: null,
    rate: false,
    ratio: false,
    compulsoryCourses: null,
    summerTraining: null,
    verifyPaymentOfFees: true,
    makeSureToPassTheOptionalGroups: 0,
    passingMilitaryEducation: null,
    successInEveryCourse: null,
    determineTheRankBasedOn: null,
    rateBase: null,
    comparingCumulativeAverageForEachYear: false,
    theMinimumGradeForTheCourseId: null,
    levelsTobePassed: [],
    semestersTobePssed: [],
    averageValues: [{ value: 0, yearValue: 0, graduationId: 0, equivalentGradeId: 1, allGradesId: 3 }]
  });
  useEffect(() => {
    console.log(globalState);
    console.log(globalState.State);

    dispatch({ type: `${globalState.State}` })
    if (globalState.State === "Get") {
      const fetchData = axios.get(`https://localhost:7095/api/Graduation/48`)
        .then((res) => {
          console.log(res.data);
          setgraduation(res.data)


        }
        )
        .catch(
          (err) => {
            console.log(err);

          });


    }
    //console.log(globalState);
  }, [globalState]);
  useEffect(() => {
    console.log(state.status);


    //console.log(globalState);
  }, [state]);
  useEffect(() => {
    // console.log(data.improvingCourses);
    // console.log(data.changingCourses);  
    // console.log(typeof data.maximumNumberOfAdditionsToFailedCoursesWithoutSuccess);
    const fetchData = axios.get(`https://localhost:7095/api/Graduation/48`)
      .then((res) => {
        console.log(res.data);
        setgraduation(res.data)
        setGlobalState({ ...globalState, State: "Get" })
        dispatch({ type: 'Get' });

      }
      )
      .catch(
        (err) => {
          console.log(err);
          dispatch({ type: 'Add' });
          console.log(state.status)
        });


    //console.log(globalState);
  }, []);



  return (
    <Fragment>
      <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
        {
          (state && (state.status === "Add" || state.status === "Update")) &&
          <AddGraduation data={graduation} />
        }
        {
          (state && (state.status === "Get")) &&

          <GetGraduation data={graduation} />
        }
      </GlobalStateContext.Provider>
    </Fragment>
  );
};
export const useGlobalState = () => useContext(GlobalStateContext);

GraduationPage.displayName = "GraduationPage";

GraduationPage.propTypes = {};

export { GraduationPage };
