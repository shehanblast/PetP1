import React, {useState,useEffect} from 'react';
import swat from "sweetalert2";

const AddStrategicTerm = () => {

    const SubmissionAlert = () => {
        swat.fire({
            position: 'center',
            icon: 'success',
            title: 'Term Added Successfully!',
            showConfirmButton: false,
            timer: 3000
        });
    }
    
    const SubmissionFail = () => {
        swat.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [status,setStatus] = useState('');

    useEffect(() => {
        onSubmit();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(name,description,startDate,endDate,status);

        try{

            const body = 
            {
                "name": name,
                "description": description,
                "startDate":startDate,
                "endDate":endDate,
                "status":status
            };
            //header - type of data
            //body - what is sending
            const response = await fetch('http://localhost:5000/strategyList',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            console.log(response);

            SubmissionAlert();

            window.location = `/about`


        }catch(err){
            console.log(err.message);
            SubmissionFail();
        }
    }

    return(
        <div>
            <div className="container st1">
                <h1>Create Strategic Term</h1>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
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
                    <div className="mb-3">
                        <label className="form-label">Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={startDate}
                            onChange={e => setStartDate(e.target.value) }

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">End Date</label>
                        <input
                            type="date"
                            className="form-control"
                            value={endDate}
                            onChange={e => setEndDate(e.target.value) }

                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Status</label> <br/>
                        <select id="cars" name="cars" onChange={e => setStatus(e.target.value)}>
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                            <option value="approved">Approved</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={e => onSubmit(e)}>Add</button>
                </form>
            </div>
            <br/>
        </div>

    )

}

export default AddStrategicTerm;