import React, {useState,useEffect} from 'react';

//componets
import EditMission from './editMission';

const MissionComponent = () => {

    const [mission,setMission] = useState([]);

    useEffect(() => {
        getMission();
    }, []);

    const getMission = async () => {
        try{

            const response = await fetch('http://localhost:5000/mission');
            const jsonData = await response.json();

            setMission(jsonData);
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

            <h2>Mission</h2>
                {mission.map(missionn => (
                    <div key={missionn.mission_id}>
                        <h5>{missionn.description}</h5>
                        <h6>{setDate(missionn.enddate)}</h6>
                        <EditMission Editmission={missionn}/>
                    </div>
                ))}
        </div>
    );

}

export default MissionComponent;