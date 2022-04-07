import Card from "./drag_drop/card";
import Board from "./drag_drop/board";
import React, {useEffect, useState} from 'react';
import './kanban.css'
import InnerCard from "./drag_drop/innerCard";
import InnerCard2 from "./drag_drop/innerCard2";
import InnerCard3 from "./drag_drop/innerCard3";
import InnerCard4 from "./drag_drop/innerCard4";
import Navbar from "../../components/navigation/navbar";


const Kanban = () => {

  const q1 = 1;
  const q2 = 2;
  const q3 = 3;
  const q4 = 4;

  const [strategicName,setStrategicName] = useState([]);
  const [UID,setUID] = useState(1);
  const [strategicCard,setStrategicCard] = useState([]);

  const id = 1;

  useEffect(() => {
      getStrategicName();
  }, []);

  const getStrategicName = async () => {

      try{

          const response = await fetch('http://localhost:5000/strategyList');
          const jsonData = await response.json();

          setStrategicName(jsonData);
          console.log("lol" + strategicName);

      }catch(err){
          console.log(err.message);
      }
  }

const NavigateToAdd = (sTheme,qt) => {
  window.location = `/strageticCard/${sTheme}/${qt}`;
}


  return(
          <>
          <Navbar/>
          <section id="k1">
              <div className="container">
                  <div className="row">
                      <h1>Kanban Board</h1>
                  </div>

              </div>
          </section>

          <div className="container">
            {strategicName.map((stN,index) => (
              <div class="card">
                <div class="card-body">
                  {stN.name}
                  <div className="flexbox" id={index}>
                    {/* {getStrategicCard(stN.name)} */}
                    <Board id="board-1" className="board" sTheme={stN.name}>
                      <div class="card k">
                        <div class="card-body">
                          {stN.name} 
                        </div>
                      </div>
                      <h5>Quater - 01</h5>
                      <Card id="card-1" className="card i" draggable="true">
                        <InnerCard name={stN.name} bID={id}/>
                      </Card>
                      <button className="btn btn-primary" onClick={() => NavigateToAdd(stN.strategylist_id,q1)}>Add New</button>
                    </Board>
                    <Board id="board-2" className="board" sTheme={stN.name}>
                      <div class="card k">
                        <div class="card-body">
                            {stN.name}
                          </div>
                        </div>
                        <h5>Quater - 02</h5>
                        <Card id="card-2" className="card i" draggable="true">
                          <InnerCard2 name={stN.name}/>
                        </Card>
                        <button className="btn btn-primary" onClick={() => NavigateToAdd(stN.strategylist_id,q2)}>Add New</button>
                    </Board>
                    <Board id="board-3" className="board" sTheme={stN.name}>
                      <div class="card k">
                        <div class="card-body">
                            {stN.name}
                          </div>
                        </div>
                        <h5>Quater - 03</h5>
                        <Card id="card-3" className="card i" draggable="true">
                          <InnerCard3 name={stN.name}/>
                        </Card>
                        <button className="btn btn-primary" onClick={() => NavigateToAdd(stN.strategylist_id,q3)}>Add New</button>
                    </Board>
                    <Board id="board-4" className="board" sTheme={stN.name}>
                      <div class="card k">
                        <div class="card-body">
                          {stN.name}
                          </div>
                        </div>
                        <h5>Quater - 04</h5>
                        <Card id="card-4" className="card i" draggable="true">
                          <InnerCard4 name={stN.name}/>
                        </Card>
                        <button className="btn btn-primary" onClick={() => NavigateToAdd(stN.strategylist_id,q4)}>Add New</button>
                    </Board>
                  </div>
              </div>
            </div>
            ))}
      </div>
    </>
  )

}

export default Kanban;
