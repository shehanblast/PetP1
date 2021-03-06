import React,{Fragment, useState} from 'react';

const EditMission = ({Editmission}) => {

    const [descriptionMission,setDescriptionMission] = useState(Editmission.description);
    const [endDateMission,setEndDateMission] = useState(Editmission.enddate);

    console.log(descriptionMission);

    const changeBack = () => {
        setDescriptionMission(Editmission.description);
        setEndDateMission(Editmission.endDate);
    }

    const updateMission = async (e) => {
        e.preventDefault();

        try{

            const body =
                {
                    "description": descriptionMission,
                    "startDate":'2022-01-01',
                    "endDate":endDateMission,
                };
            //header - type of data
            //body - what is sending
            const response = await fetch(`http://localhost:5000/mission/${Editmission.mission_id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
            console.log(response);

            window.location = "/";

        }catch (err){
            console.log(err.message);
        }

    }

    return(
        <div>
            <
                button type="button"
                       className="btn btn-warning"
                       data-bs-toggle="modal"
                       data-bs-target={`#id${Editmission.mission_id}`}
            >
                Edit
            </button>

            <div className="modal" id={`id${Editmission.mission_id}`} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Mission</h4>
                            <
                                button type="button"
                                       className="btn-close"
                                       data-bs-dismiss="modal"
                            >
                            </button>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Vision</label>
                            <
                                input type="text"
                                      className="form-control"
                                      value={descriptionMission}
                                      onChange={e => setDescriptionMission(e.target.value) }/>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Due Date</label>
                            <
                                input type="date"
                                      className="form-control"
                                      value={endDateMission}
                                      onChange={e => setEndDateMission(e.target.value) }/>
                        </div>

                        <div className="modal-footer">
                            <
                                button type="button"
                                       className="btn btn-warning"
                                       data-bs-dismiss="modal"
                                       onClick={ e => updateMission(e)}
                            >
                                Edit
                            </button>
                            <
                                button type="button"
                                       className="btn btn-danger"
                                       data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default EditMission;