import React, {useEffect, useState} from 'react';

//component
import StrategicCard from "./StrategicCard/strategicCard";
import Navbar from "../../components/navigation/navbar";

const KanbanBoard = () => {

    const [strategicName,setStrategicName] = useState([]);

    useEffect(() => {
        getStrategicName();
    }, []);

    const getStrategicName = async () => {
        try{

            const response = await fetch('http://localhost:5000/strategyList');
            const jsonData = await response.json();

            setStrategicName(jsonData);
            console.log(jsonData);

        }catch(err){
            console.log(err.message);
        }
    }

    return(
        <div>

            <Navbar/>
            <section id="k1">
                <div className="container">
                    <div className="row">
                        <h1>Kanban Board</h1>
                    </div>

                </div>
            </section>

            <br/>


            {strategicName.map(stN => (
                <StrategicCard name={stN.name}/>
            ))}


            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <a href="/strageticCard">
                                <div className="card scAdd">
                                    <div className="card-body">
                                        <h5>Add New</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <br/>

        </div>
    )

}

export default KanbanBoard;