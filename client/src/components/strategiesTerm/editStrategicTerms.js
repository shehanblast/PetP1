import React,{useState}  from "react";

const EditTheme = ({st}) => {

    const [description,setDescription] = useState(st.description);
    const [endDate,setEndDate] = useState(st.enddate);
    const [name,setName] = useState(st.name);
    const [startdate,setStartDate] = useState(st.startDate);
    const [status,setStatus] = useState(st.status);
    const [strategylist_id,setStrategylist_id] = useState(st.strategyList_id);

    const changeBack = () => {
        setDescription(sta.description);
        setEndDate(sta.enddate);
        setName(sta.name);
        setStartDate(sta.startDate);
        setStatus(sta.status);
    }

    const updateStrategy = async (e) => {
        e.preventDefault();

        try{

            const body =
                {
                    "description": description,
                    "endDate":endDate,
                    "name": name,
                    "startDate":startDate,
                    "status":status,

                };
            //header - type of data
            //body - what is sending
            const response = await fetch(`http://localhost:5000/strategy/${st.strategy_id}`,
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
                       data-bs-target={`#id${est.strategyList_id}`}
            >
                Edit
            </button>

            <div className="modal" id={`#id${est.strategyList_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Edit Strategy</h4>
                            <
                                button type="button"
                                       className="btn-close"
                                       data-bs-dismiss="modal" ></button>
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Description</label>
                            <
                                input type="text"
                                      className="form-control"
                                      value={description}
                                      onChange={e => setDescription(e.target.value) }
                            />
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                            <
                                input type="text"
                                      className="form-control"
                                      value={name}
                                      onChange={e => setName(e.target.value) }
                            />
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Start Date</label>
                            <
                                input type="date"
                                      className="form-control"
                                      value={startdate}
                                      onChange={e => setEndDate(e.target.value)}
                            />
                        </div>

                        <div className="modal-body">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Due Date</label>
                            <
                                input type="date"
                                      className="form-control"
                                      value={endDate}
                                      onChange={e => setEndDate(e.target.value)}
                            />
                        </div>

                        <div className="modal-body">
                            <label className="form-label">Status</label>
                            <select id="cars" name="cars" onChange={e => setStatus(e.target.value)}>
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                                <option value="approved">Approved</option>
                            </select>
                        </div>

                        <div className="modal-footer">
                            <
                                button type="button"
                                       className="btn btn-warning"
                                       data-bs-dismiss="modal"
                                       onClick={ e => updateStrategy(e)}
                            >
                                Edit
                            </button>
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

export default EditTheme;