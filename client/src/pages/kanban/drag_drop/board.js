import React,{Fragment, useState,useEffect} from 'react';

const Board = (props) => {

    const q1 = 1;
    const q2 = 2;
    const q3 = 3;
    const q4 = 4;

    const drop = e => {

        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const bID = props.id;

        console.log(props.sTheme);

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);

        if("board-2" == bID){
            changeQT(q2);
           
        }
        else if("board-3" == bID){
            changeQT(q3);
        }
        else if("board-4" == bID){
            changeQT(q4);
        }
        else if("board-1" == bID){
            changeQT(q1);
        }

        
    }

    const changeQT = async (qt) => {

        console.log(qt);

        try{

            const body = 
            {
                "qt": qt
            };
            //header - type of data
            //body - what is sending
            const response = await fetch(`http://localhost:5000/kanbanCard/2`,
                {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });
            console.log(response);
    
            window.location = "/kanban";

        }catch (err){
            console.log(err.message);
        }


    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            sTheme={props.sTheme}
        >
             {props.children}   
        </div>
    )

}

export default Board;