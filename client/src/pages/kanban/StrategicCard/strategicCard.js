import React, {useEffect, useState} from "react";
import { Navigate } from "react-router-dom";
import EditStrategicCard from "./editStrategicCard";

const StrategicCard = ({name}) => {

    const [strategicCard,setStrategicCard] = useState([]);

    useEffect(() => {
        getStrategicCard();
        deleteStrategicCard();
    }, []);

    const getStrategicCard = async () => {
        try{

            var  x = 'GPA';

            const response = await fetch(`http://localhost:5000/kanbanCard/strategicTheme/${name}`);
            const jsonData = await response.json();

            setStrategicCard(jsonData);
            console.log(jsonData);

        }catch(err){
            console.log(err.message);
        }
    }

    const deleteStrategicCard = async (id) => {

        console.log(id);

        try {

            const deleteTo = await fetch(`http://localhost:5000/kanbanCard/${id}`,
                {
                    method: "DELETE"
                });

            console.log(deleteTo);

            window.location = '/kanbanBoard';


        } catch (err) {
            console.log(err.message);
        }
    }

    const NavigateToAdd = (id) => {
        window.location = `/EditStrageticCard/${id}`;
    }

    //
    // var rebels = strategicCard.filter(function (st) {
    //     return st.qt === 2;
    // });

    return(
        <div>

            <section id="kb2">
               <div className="container">
                   <div className="row">
                       <div className="col-md-12">
                           {strategicCard.map(stc => (
                           <div className="card">
                               <div className="card-body">
                                   <h5>Strategic Theme : {stc.name}</h5>

                               </div>
                                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 1;
                            }).map(stc => (
                            <div className="card s2">
                                <div className="card-body">
                                    <h5 className="card-title">Q1</h5>
                                    <div className="card ss2">
                                        <div className="card-body">
                                            <h5 className="card-title">{stc.title}</h5> <hr/>
                                            <p className="card-text">{stc.description}</p>
                                            <p className="card-text">due</p>
                                            <p className="card-text">{stc.use}</p>
                                            <p className="card-text">{stc.statuskc}</p>
                                            <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success" onClick={() => NavigateToAdd(stc.kanbancard_id)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                            </div>
                            
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 2;
                            }).map(stc => (
                                <div className="card s3">
                                    <div className="card-body">
                                        <h5 className="card-title">Q2</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 3;
                            }).map(stc => (
                                <div className="card s4">
                                    <div className="card-body">
                                        <h5 className="card-title">Q3</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 4;
                            }).map(stc => (
                                <div className="card s5">
                                    <div className="card-body">
                                        <h5 className="card-title">Q4</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                           </div>
                           ))}
                       </div>
                   </div>
               </div>
            </section>

            <section id="kb2">
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 1;
                            }).map(stc => (
                            <div className="card s2">
                                <div className="card-body">
                                    <h5 className="card-title">Q1</h5>
                                    <div className="card ss2">
                                        <div className="card-body">
                                            <h5 className="card-title">{stc.title}</h5> <hr/>
                                            <p className="card-text">{stc.description}</p>
                                            <p className="card-text">due</p>
                                            <p className="card-text">{stc.use}</p>
                                            <p className="card-text">{stc.statuskc}</p>
                                            <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                            </div>
                            
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 2;
                            }).map(stc => (
                                <div className="card s3">
                                    <div className="card-body">
                                        <h5 className="card-title">Q2</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 3;
                            }).map(stc => (
                                <div className="card s4">
                                    <div className="card-body">
                                        <h5 className="card-title">Q3</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                        <div className="col-md-3">
                            {strategicCard.filter(function (p) {
                                return p.qt == 4;
                            }).map(stc => (
                                <div className="card s5">
                                    <div className="card-body">
                                        <h5 className="card-title">Q4</h5>
                                        <div className="card ss2">
                                            <div className="card-body">
                                                <h5 className="card-title">{stc.title}</h5> <hr/>
                                                <p className="card-text">{stc.description}</p>
                                                <p className="card-text">due</p>
                                                <p className="card-text">{stc.use}</p>
                                                <p className="card-text">{stc.statuskc}</p>
                                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-success">Edit</button>
                                <button className="btn btn-danger" onClick={() => deleteStrategicCard(stc.kanbancard_id)}>Delete</button>
                                </div>
                            ))}
                        </div>

                    </div>
                </div> */}
            </section>

            <br/>

        </div>
    )

}

export default StrategicCard;