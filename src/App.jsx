import styles from "./App.module.scss";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Layout from "./pages/layout";
import { LoginPage } from "./pages/login";
import { LevelsPage } from "./pages/programs/edit/levels";
import { HomePage } from "./pages/home";
import { EstimatesPage } from "./pages/programs/edit/estimates";
import { AcademicloadPage } from "./pages/programs/edit/academicload";
import { GeneralestimatesPage } from "./pages/programs/edit/generalestimates";
import { GraduationPage } from "./pages/programs/edit/graduation";
import { ManageUsersPage } from "./pages/superadmin/manageusers";
import { UpdateUsersPage } from "./pages/superadmin/manageusers/updateusers";
import { ManageUniPage } from "./pages/superadmin/manageuni";
import { ManageFacultyPage } from "./pages/admin/managefaculty";
import { UpdatefacultyPage } from "./pages/admin/managefaculty/updatefaculty";
import { ControlsPage } from "./pages/controls";
import { CoursesPage } from "./pages/programs/edit/courses";
import { GpaPage } from "./pages/programs/edit/gpa";
import { ControlPage } from "./pages/programs/edit/control";
import { RegisterPage } from "./pages/superadmin/register";
import Admin from "./middleware/Admin";
import SuperAdmin from "./middleware/SuperAdmin";
import User from "./middleware/User";
import { AddUniversity } from "./pages/superadmin/addUniversity";
import { UpdateUniversity } from "./pages/superadmin/updateUniversity";
import { useParams } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "../src/redux/store";
import { ProgramsComp } from "./components/studyPrograms";
// import { ManageLookUps } from "./pages/admin/managelookups";
import { LogFiles } from "./pages/superadmin/logFiles";
import {DataTable} from "./components/dataTable/index";
import {SummerFees} from "./pages/admin/managelockups/summerfees";
import {AbsenteeEstimateCalculation} from "./pages/admin/managelockups/absenteeEstimateCalculation";
import{TheAcademicDegree} from "./pages/admin/managelockups/academicDegree";
import {AllGrades} from "./pages/admin/managelockups/allGrades";
import {ReasonForBlockingAcademicResult} from "./pages/admin/managelockups/blockingAcademicResult";
import {BlockingProofOfRegistration} from "./pages/admin/managelockups/blockingProofOfRegistration";
import {ReasonForBlockingRegistration} from "./pages/admin/managelockups/blockingRegistration";
import {BurdenCalculation} from "./pages/admin/managelockups/burdenCalculation";
import {CourseRequirement} from "./pages/admin/managelockups/courseRequirement";
import {CourseType} from "./pages/admin/managelockups/courseType";
import {DivisionType} from "./pages/admin/managelockups/divisionType";
import {TypeOfFinancialStatementInTheProgram} from "./pages/admin/managelockups/financialStatement";
import {Hours} from "./pages/admin/managelockups/hours";
import {Levels} from "./pages/admin/managelockups/levels";
import {PassingTheElectiveGroupBasedOn} from "./pages/admin/managelockups/passingTheElectiveGroupBasedOn";
import{Prerequisites} from "./pages/admin/managelockups/prerequisites";
import {PreviousQualification} from "./pages/admin/managelockups/previousQualification";
import {TypeOfProgramFees}  from "./pages/admin/managelockups/programFees";
import {TheResultAppears} from "./pages/admin/managelockups/resultAppears";
import {SystemType} from "./pages/admin/managelockups/systemType";
// import {EquivalentGrade} from "./pages/admin/managelockups/equivalentGrade";
import{Semesters} from "./pages/admin/managelockups/semesters";
import {GradesDetails} from "./pages/admin/managelockups/gradesDetails";
import { ManagingHome } from "./pages/admin/managelockups/managing";



function App() {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
    <Suspense
      fallback={
        <CircularProgress
          size={20}
          sx={{
            color: "#fff",
          }}
        />
      }
    >
      <Routes>
      <Route path="/managehome" element={<ManagingHome />}/>
      <Route path="/summer" element={<SummerFees />}/>
      <Route path="/absentee" element={<AbsenteeEstimateCalculation />}/>
      <Route path="/degree" element={<TheAcademicDegree />}/>
      <Route path="/grades" element={<AllGrades />}/>
      <Route path="/blockresult" element={<ReasonForBlockingAcademicResult />}/>
      <Route path="/blockregister" element={<ReasonForBlockingRegistration />}/>
      <Route path="/blockproof" element={<BlockingProofOfRegistration />}/>
      <Route path="/burden" element={<BurdenCalculation />}/>
      <Route path="/courseReq" element={<CourseRequirement />}/>
      <Route path="/coursetype" element={<CourseType />}/>
      <Route path="/divisiontype" element={<DivisionType />}/>
      <Route path="/financialstatement" element={<TypeOfFinancialStatementInTheProgram />}/>
      <Route path="/hours" element={<Hours />}/>
      <Route path="/levels" element={<Levels />}/>
      <Route path="/passingelective" element={<PassingTheElectiveGroupBasedOn />}/>
      <Route path="/prerequisites" element={<Prerequisites />}/>
      <Route path="/prevqual" element={<PreviousQualification />}/>
      <Route path="/programfees" element={<TypeOfProgramFees />}/>
      <Route path="/bloresultappearckproof" element={<TheResultAppears />}/>
      <Route path="/systemtype" element={<SystemType />}/>
      {/* <Route path="/equivalent" element={<EquivalentGrade />}/> */}
      <Route path="/semesters" element={<Semesters />}/>
      <Route path="/gradesdetails" element={<GradesDetails />}/>
      <Route path="/programs" element={<ProgramsComp />}/>



    


      
        <Route element={<Layout />}>
        <Route path="/graduation" element={<GraduationPage />} />

          <Route path="/" element={<LoginPage />} />
          <Route element={<Admin />}>
            <Route path="/managefaculty" element={<ManageFacultyPage />} />

            {/* <Route path="/lookups" element={<ManageLookUps />}/> */}
            <Route path="/dataTable" element={<DataTable />}/>
            <Route path="/logFiles" element={<LogFiles />}/>



            <Route
              path="/updatefaculty/:id"
              element={<UpdateFacultyWrapper />}
            />
          </Route>
          <Route element={<SuperAdmin />}>
            <Route path="/manageuni" element={<ManageUniPage />} />
            <Route path="/addUniversity" element={<AddUniversity />} />
            <Route path="/manageusers" element={<ManageUsersPage />} />
            {/* <Route path="/updateusers/:id" element={<UpdateUsersPage />} /> */}

            <Route path="/updateusers/:id" element={<UpdateUsersWrapper />} />

            <Route path="/register" element={<RegisterPage />} />
            {/* Pass id to UpdateUniversity */}
            <Route
              path="/editUniversity/:id"
              element={<UpdateUniversityWrapper />}
            />
          </Route>
          <Route element={<User />}>
            <Route path="/control" element={<ControlPage />} />
            <Route path="/gpa" element={<GpaPage />} />
            <Route
              path="/Generalestimates"
              element={<GeneralestimatesPage />}
            />
            <Route path="/levels" element={<LevelsPage />} />
            <Route path="/estimates" element={<EstimatesPage />} />
            <Route path="/academicload" element={<AcademicloadPage />} />







            


            <Route path="/courses" element={<CoursesPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
    </Provider>
  );
}

// Wrapper component to extract id from route params
function UpdateUniversityWrapper() {
  let { id } = useParams(); // Get id from route params
  return <UpdateUniversity id={id} />;
}

function UpdateUsersWrapper() {
  let { id } = useParams();
  return <UpdateUsersPage id={id} />;
}
function UpdateFacultyWrapper() {
  let { id } = useParams();
  return <UpdatefacultyPage id={id} />;
}

export default App;

{
  /* <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/levels" element={<LevelsPage />} />
          <Route path="/estimates" element={<EstimatesPage />} />
          <Route path="/academicload" element={<AcademicloadPage />} />
          <Route path="/Generalestimates" element={<GeneralestimatesPage />} />
          <Route path="/graduation" element={<GraduationPage />} />
          <Route path="/manageusers" element={<ManageUsersPage />} />
          <Route path="/manageuni" element={<ManageUniPage />} />
          <Route path="/managefaculty" element={<ManageFacultyPage />} />
          <Route path="/controls" element={<ControlsPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/gpa" element={<GpaPage />} />
          <Route path="/control" element={<ControlPage />} />
        </Route>
        <Route path="/home" element={<HomePage />} />

        
      </Routes> */
}
