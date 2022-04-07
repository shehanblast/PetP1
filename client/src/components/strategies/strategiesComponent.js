import React,{useEffect,useState} from 'react';

//components
import EditStrategy from './editStrategy';

//css
import '../common.css'

const StrategiesComponent = () => {

    const [startegy,setStartegy] = useState([]);

    useEffect(() => {
        getStartegy();
    }, []);

    const getStartegy = async () => {
        try{

            const response = await fetch('http://localhost:5000/strategy');
            const jsonData = await response.json();

            setStartegy(jsonData);
            console.log(jsonData);

        }catch(err){
            console.log(err.message);
        }
    }

    const setDate = (e) => {

        var date = new Date(e);
        var date_str = [date.getFullYear(), date.getMonth()+1, date.getDate()].join('/')
        console.log(date_str);
        return  date_str;
    }

    return(
        <div>
            <h2>Strategies</h2>
            {startegy.map((startegies,index) => (
                <div key={index}>
                    <h5>{startegies.description}</h5>
                    <h6>{setDate(startegies.enddates)}</h6>
                    <EditStrategy sta={startegies}/>
                </div>
            ))}
        </div>
    );

}

export default StrategiesComponent;