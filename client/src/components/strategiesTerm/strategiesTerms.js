import React, {useState,useEffect} from 'react';

//components
import AddStrategicTerm from './addStrategicTerms';
import EditStrategicTerm from './editStrategicTerms';

const StrategiesTerms = () =>{

    const [strategicTerms,setStrategicTerms] = useState([]);

    useEffect(() => {
        getStrategicTerms();
        deleteStrategicTerms();
    }, []);

    const getStrategicTerms = async () => {
        try{

            const response = await fetch('http://localhost:5000/strategyList');
            const jsonData = await response.json();

            setStrategicTerms(jsonData);
            console.log(jsonData);

        }catch(err){
            console.log(err.message);
        }
    }

    const deleteStrategicTerms = async (id) => {

        console.log(id);

        try {

            const deleteTo = await fetch(`http://localhost:5000/strategyList/${id}`,
                {
                    method: "DELETE"
                });

            console.log(deleteTo);

            window.location = '/';


        } catch (err) {
            console.log(err.message);
        }
    }


    const naviagateNewST = () => {
        window.location = `/strageticTerm`
    }

    const setDate = (e) => {

        var date = new Date(e);
        var date_str = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/')
        console.log(date_str);
        return  date_str;
    }

    return(
        <div>
            <h2>Strategic Themes</h2>
            {strategicTerms.map(st => (
                <div className="card s1">
                    <div className="card-body">
                        <h5 className="card-title">{st.name}</h5>
                        <p className="card-text">{st.description} <br/>
                            {setDate(st.startdate)} <br/>
                            {setDate(st.enddate)}  <br/>
                            {st.status} </p>
                        <a href="#" className="btn btn-primary">Edit</a>&nbsp;
                        {/* <EditStrategicTerm mis={st}/> */}
                        <button onClick={() => deleteStrategicTerms(st.strategylist_id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            ))}
            <br/>
            <button className='btn btn-success' onClick={() => naviagateNewST()}>Add new</button><br/>
        </div>
    )

}

export default StrategiesTerms;