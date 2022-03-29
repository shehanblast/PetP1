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

            {/*<section id="kb2">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-12">*/}
            {/*                <div className="card">*/}
            {/*                    <div className="card-body">*/}
            {/*                       Stragetic Term 1*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/*<section id="kb2">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-md-3">*/}
            {/*                <StrategicCard/>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

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