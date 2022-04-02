import React from 'react';

//components
import VisionComponent from "../components/vision/visionComponent";
import MissionComponent from "../components/mission/missionComponent";
import StrategiesComponent from "../components/strategies/strategiesComponent";
import Navbar from "../components/navigation/navbar";
import StrategiesTerms from '../components/strategiesTerm/strategiesTerms';

//CSS
import './about.css'

const About = () => {

    return(
        <div>
            <Navbar/>

            <section id="about1">
                <div className="container">
                    <div className="row">
                        <h1>About</h1>
                    </div>
                </div>
            </section>

            <br/>

            <section id="about2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card aboutCard">
                                <div className="card-body">
                                    <VisionComponent/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card aboutCard">
                                <div className="card-body">
                                    <MissionComponent/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card aboutCard">
                                <div className="card-body">
                                    <StrategiesComponent/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/>

            <section id="about2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <StrategiesTerms/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );

}

export default About;