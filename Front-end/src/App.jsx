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
import { ControlsPage } from "./pages/admin/managelockups/controls";
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
import { store } from "../src/redux/store";
import { ProgramsComp } from "./components/studyPrograms";
import { AdminLookUpsPage } from "../src/pages/admin/AdminLookUps/index";
// import { ManageLookUps } from "./pages/admin/managelookups";
import { LogFiles } from "./pages/superadmin/logFiles";
import { DataTable } from "./components/dataTable/index";
import { SummerFees } from "./pages/admin/managelockups/summerfees";
import { TheAcademicDegree } from "./pages/admin/managelockups/academicDegree";
import { AllGrades } from "./pages/admin/managelockups/allGrades";
import { ReasonForBlockingAcademicResult } from "./pages/admin/managelockups/blockingAcademicResult";
import { BlockingProofOfRegistration } from "./pages/admin/managelockups/blockingProofOfRegistration";
import { ReasonForBlockingRegistration } from "./pages/admin/managelockups/blockingRegistration";
import { BurdenCalculation } from "./pages/admin/managelockups/burdenCalculation";
import { CourseType } from "./pages/admin/managelockups/courseType";
import { DivisionType } from "./pages/admin/managelockups/divisionType";
import { TypeOfFinancialStatementInTheProgram } from "./pages/admin/managelockups/financialStatement";
import { Hours } from "./pages/admin/managelockups/hours";
import { Levels } from "./pages/admin/managelockups/levels";
import { PassingTheElectiveGroupBasedOn } from "./pages/admin/managelockups/passingTheElectiveGroupBasedOn";
import { Prerequisites } from "./pages/admin/managelockups/prerequisites";
import { PreviousQualification } from "./pages/admin/managelockups/previousQualification";
import { TypeOfProgramFees } from "./pages/admin/managelockups/programFees";
import { TheResultAppears } from "./pages/admin/managelockups/resultAppears";
import { SystemType } from "./pages/admin/managelockups/systemType";
import { HomeUserPage } from "./pages/programs/home";
import { Faculty } from "./pages/admin/managelockups/faculty";
import { EditTheStudentLevel } from "./pages/admin/managelockups/editTheStudentLevel";
import { Semesters } from "./pages/admin/managelockups/semesters";
import { GradesDetails } from "./pages/admin/managelockups/gradesDetails";
import { EquivalentGrade } from "./pages/admin/managelockups/equivalentGrade";
import { Addfaculty } from "./pages/admin/managefaculty/addfaculty";


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
          <Route path="/" element={<LoginPage />} />

          <Route element={<Layout />}>
            <Route element={<Admin />}>
              <Route path="/AdminLookUps" element={<AdminLookUpsPage />} />
              <Route path="/managefaculty" element={<ManageFacultyPage />} />
              <Route path="/updatefaculty/:id"  element={<UpdateFacultyWrapper />}  />
              <Route path="/dataTable" element={<DataTable />} />

       
              <Route
                path="/updatefaculty/:id"
                element={<UpdateFacultyWrapper />}
              />

              <Route path="/updatefaculty/:id"element={<UpdateFacultyWrapper />}    />

              <Route path="/summer" element={<SummerFees />} />
      
              <Route path="/degree" element={<TheAcademicDegree />} />
              <Route path="/grades" element={<AllGrades />} />
              <Route path="/blockresult" element={<ReasonForBlockingAcademicResult />} />
              <Route path="/blockregister" element={<ReasonForBlockingRegistration />} />
              <Route path="/blockproof" element={<BlockingProofOfRegistration />}/>
              <Route path="/burden" element={<BurdenCalculation />} />
              <Route path="/coursetype" element={<CourseType />} />
              <Route path="/divisiontype" element={<DivisionType />} />
              <Route path="/financialstatement" element={<TypeOfFinancialStatementInTheProgram />}  />
              <Route path="/hours" element={<Hours />} />
              <Route path="/levels" element={<Levels />} />
              <Route path="/passingelective" element={<PassingTheElectiveGroupBasedOn />} />
              <Route path="/prerequisites" element={<Prerequisites />} />
              <Route path="/prevqual" element={<PreviousQualification />} />
              <Route path="/programfees" element={<TypeOfProgramFees />} />
              <Route path="/bloresultappearckproof"element={<TheResultAppears />} />
              <Route path="/systemtype" element={<SystemType />} />
              <Route path="/faculty" element={<Faculty />}/>
              <Route path="/studentlevel" element={<EditTheStudentLevel />}/>
              <Route path="/semesters" element={<Semesters />}/>
              <Route path="/gradesdetails" element={<GradesDetails />}/>
              <Route path="/equivalent" element={<EquivalentGrade />}/>
              <Route path="/controls" element={<ControlsPage />} />
              <Route path="/addfaculty" element={<Addfaculty/>} />

            </Route>

            <Route element={<SuperAdmin />}>
              <Route path="/manageuni" element={<ManageUniPage />} />
              <Route path="/addUniversity" element={<AddUniversity />} />
              <Route path="/manageusers" element={<ManageUsersPage />} />
              <Route path="/updateusers/:id" element={<UpdateUsersWrapper />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/logFiles" element={<LogFiles />} />

              <Route
                path="/editUniversity/:id"
                element={<UpdateUniversityWrapper />}
              />

            </Route>
            <Route element={<User />}>
              <Route path="/control/:id" element={<ControlPage />} />
              <Route path="/homeuser" element={<HomeUserPage />} />
              <Route
                path="/Generalestimates/:id"
                element={<GeneralestimatesPage />}
              />
              <Route path="/programs/:id" element={<ProgramsComp />} />
              <Route path="/Levelsuser/:id" element={<LevelsPage />} />
              <Route path="/estimates/:id" element={<EstimatesPage />} />
              <Route path="/academicload/:id" element={<AcademicloadPage />} />
              <Route path="/courses/:id" element={<CoursesPage />} />
              <Route path="/gpa/:id" element={<GpaPage />} />
              <Route path="/graduation/:id" element={<GraduationPage />} />







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