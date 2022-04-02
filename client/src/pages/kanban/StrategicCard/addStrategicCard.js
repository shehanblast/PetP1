import React,{useEffect,useState} from "react";
import swat from "sweetalert2";
import Navbar from "../../../components/navigation/navbar";

const AddStrategicCard = () => {

    //submission status alerts
    const SubmissionAlert = () => {
        swat.fire({
            position: 'center',
            icon: 'success',
            title: 'Card Added Successfully!',
            showConfirmButton: false,
            timer: 3000
        });
    }

    //submission status alerts
    const SubmissionFail = () => {
        swat.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }

    const [title,setTitle] = useState('');
    const [priority,setPriority] = useState('');
    const [due,setDue] = useState('');
    const [use,setUse] = useState('');
    const [qt,setQT] = useState('');
    const [strategyListId,setStrategyListId] = useState('');
    const [statuskc,setStatusskc] = useState('');
    const [description,setDescription] = useState([]);
    const [themes,setThemes] = useState([]);

    useEffect(() => {
        onSubmit();
    }, []);

    //fetch stategic themes from the get request and load them into theme
    const getStrategicThemes = async () => {
        try{

            let theme;
            let data = [];

            const response = await fetch(`http://localhost:5000/strategyList/name`);
            const jsonData = await response.json();

            setThemes(jsonData);

            const options = [
                themes.map(stcc => {
                    theme = {
                        value: stcc.strategylist_id,
                        label: stcc.name
                    }
                    data.push(theme);
                })
            ]

            console.log(themes);


        }catch(err){
            console.log(err.message);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(title,due,use,description,priority,qt,strategyListId,statuskc);

        try{

            const body =
                {
                    "title": title,
                    "priority": priority,
                    "due": due,
                    "use": use,
                    "description": description,
                    "qt": qt,
                    "strategylistid": strategyListId,
                    "statuskc": statuskc
                };
            //header - type of data
            //body - what is sending
            const response = await fetch('http://localhost:5000/kanbanCard',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            console.log(response);

            SubmissionAlert();

            window.location = `/kanbanBoard`


        }catch(err){
            console.log(err.message);
            SubmissionFail();
        }

        SubmissionAlert();

    }

    return(
        <div>
            <Navbar/>
            <div className="container st1">
                <h1>Create Strategic Card</h1>

                <form className="f2">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={e => setDescription(e.target.value) }

                        />
                    </div>

                    <div className="row">

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Due Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={due}
                                    onChange={e => setDue(e.target.value) }

                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">User</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={use}
                                    onChange={e => setUse(e.target.value) }

                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Status</label> <br/>
                                <select id="cars" name="cars" onChange={e => setStatusskc(e.target.value)}>
                                    <option value="pending">Pending</option>
                                    <option value="done">Done</option>
                                    <option value="approved">Approved</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Quarter</label> <br/>
                                <select id="cars" name="cars" onChange={e => setQT(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Priority</label> <br/>
                                <select id="cars" name="cars" onChange={e => setPriority(e.target.value)}>
                                    <option value="medium">Medium</option>
                                    <option value="high">High</option>
                                    <option value="low">Low</option>
                                </select>
                            </div>
                        </div>

                        {/* <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label">Strategic Theme</label> <br/>
                                <select id="cars" name="cars" onChange={e => setStrategyListId(e.target.value)}>
                                    <option value="1">GPA</option>
                                    <option value="2">Soft skills</option>
                                    <option value="3">Leadership</option>
                                    <option value="4">test theme</option>
                                </select>
                            </div>
                        </div> */}

                        <div className="col-md-6">
                           <div className="mb-3">
                               <label className="form-label">Strategic Theme</label> 
                               <br/>
                               <select
                                    options={themes}
                                    className="basic-multi-select"
                                    onChange={e => setStrategyListId(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Add</button>
                </form>
            </div>
            <br/>
        </div>

    )

}

export default AddStrategicCard;