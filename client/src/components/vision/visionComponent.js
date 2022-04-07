import React,{useState,useEffect} from 'react';

//component
import EditVision from './editVision';

const VisionComponent = () => {

    const [vision,setVision] = useState([]);

    useEffect(() => {
        getVision();
    }, []);

    const getVision = async () => {
        try{

            const response = await fetch('http://localhost:5000/vision');
            const jsonData = await response.json();

            setVision(jsonData);
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
            <h2>Vision</h2>
            {vision.map((visionn,index) => (
                <div key={index}>
                    <h5>{visionn.description}</h5>
                    <h6>{setDate(visionn.enddate)}</h6>
                    <EditVision vis={visionn}/>
                </div>
            ))}
        </div>
    );

}

export default VisionComponent;