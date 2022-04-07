import React,{useState} from 'react';

const EditVision = ({vis}) => {

    const [description,setDescription] = useState(vis.description);
    const [endDate,setEndDate] = useState(vis.enddate);

    console.log(description);

    const changeBack = () => {
        setDescription(vis.description);
        setEndDate(vis.endDate);
    }

    const updateVision = async (e) => {
        e.preventDefault();

        try{

            const body =
                {
                    "description": description,
                    "startDate":"2022-01-01",
                    "endDate":endDate,
                };
            //header - type of data
            //body - what is sending
            const response = await fetch(`http://localhost:5000/vision/${vis.vision_id}`,
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
                       data-bs-target={`#id${vis.vision_id}`}
            >
                Edit
            </button>

            <div className="modal" id={`id${vis.vision_id}`} onClick={() => changeBack()}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Vision</h4>
                            <
                                button type="button"
                                       className="btn-close"
                                       data-bs-dismiss="modal"
                            ></button>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Vision</label>
                            <
                                input type="text"
                                      className="form-control"
                                      value={description}
                                      onChange={e => setDescription(e.target.value) }/>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Due Date</label>
                            <
                                input type="date"
                                      className="form-control"
                                      value={endDate}
                                      onChange={e => setEndDate(e.target.value) }/>
                        </div>

                        <div className="modal-footer">
                            <
                                button type="button"
                                       className="btn btn-warning"
                                       data-bs-dismiss="modal"
                                       onClick={ e => updateVision(e)}
                            >
                                Edit</button>
                            <
                                button type="button"
                                       className="btn btn-danger"
                                       data-bs-dismiss="modal"
                                       onClick={() => changeBack()}
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

export default EditVision;