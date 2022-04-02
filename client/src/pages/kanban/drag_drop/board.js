import React,{Fragment, useState,useEffect} from 'react';

const Board = (props) => {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appenedChild(card);
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
        >
             {props.children}   
        </div>
    )

}

export default Board;