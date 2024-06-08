import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";



const ProgramComponent = ({onProgramId}) => {
    const [search, setSearch] = useState("");
    const [programs, setPrograms] = useState([]);
    const [reload, setReload] = useState(0);
    const [selectedProgram, setSelectedProgram] = useState(null);

    const handleSearch = () => {
        axios.get(`https://localhost:7095/api/Programs/search?search=${search}&facultyId=${1}`)
            .then((resp) => {
                console.log(resp);
                setPrograms(resp.data);
            })
            .catch((err) => {
                setPrograms([]);
                console.log(err);
            });
    };

    const handleProgramAdd= (programId) => {
        // console.log(programId);
        setSelectedProgram(programId);
    };

    const handleAdd= () => {
        axios.post(`https://localhost:7095/api/Programs` , {
        ProgramNameInArabic : search,
        ProgramNameInEnglish : "omnia",
        FacultyId: 1 ,
        })
            .then((resp) => {
                console.log(resp );
                handleSearch();
                setSearch("");

            })
            .catch((err) => {
                console.log(err);
            });
    };
  
    useEffect(() => {
       
      }, [reload]);
      const navigate = useNavigate();

    const handleProgramClick = (programId) => {
        setSelectedProgram(programId);
        onProgramId(programId);
        // ProgramId(ProgramId);
        navigate(`/programs/:${programId}`);



    };

    return (
        <div className="col-md-12">
            <div className="input-group mb-3">
                <div className="col-md-8">
                <input 
                    type="text" 
                    aria-label="البرامج" 
                    className="form-control" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                />
                </div>
                <div className='col-md-4 '>
                <button 
                    className="btn btn-primary" 
                    style={{ borderRadius: '50px' , width : "25px"   }} 
                    type="button" 
                    onClick={handleSearch}
                >
                    <i className="fas fa-search rounded"></i> 
          
                </button>
                <button 
                    className="btn btn-success " 
                    style={{ borderRadius: '50px' , width : "25px" }} 
                    type="button" 
                    onClick={handleAdd}
                >
                    <i className="fas fa-plus  "></i>
                </button>
                </div>
            </div>
            <div className="mb-4  ">
                {programs.map((program) => (
                    <div className="mb-4 border shadow-sm p-3  bg-body-tertiary rounded"
                  
                        key={program.id} 
                        onClick={() => handleProgramClick(program.id)}
                    >
                        {program.programNameInArabic}
                    </div>
                ))}
            </div>
        </div>
    );
};


ProgramComponent.displayName = "ProgramComponent";
ProgramComponent.propTypes = {};

export { ProgramComponent };
