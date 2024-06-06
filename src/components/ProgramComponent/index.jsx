import React, { useState } from 'react';
import axios from 'axios';

const ProgramComponent = () => {
    const [search, setSearch] = useState("");
    const [programs, setPrograms] = useState([]);
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

    const handleProgramClick = (programId) => {
        // console.log(programId);
        setSelectedProgram(programId);
    };

    return (
        <div className="col-md-10">
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    aria-label="البرامج" 
                    className="form-control" 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <button 
                    className="btn btn-primary" 
                    style={{ borderRadius: '50px' }} 
                    type="button" 
                    onClick={handleSearch}
                >
                    <i className="fas fa-search rounded"></i> {/* FontAwesome search icon */}
                </button>
            </div>
            <div className="mb-3">
                {programs.map((program) => (
                    <div 
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
