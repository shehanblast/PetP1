

//***********************************************************//









  //This component not completed yet









//********************************************************* */
// import React from "react";
// import { DndContext, DropTarget, DragSource } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
// import update from "immutability-helper";

// const tasks = [
//   { _id: 1, title: "First Task", status: "backlog" },
//   { _id: 2, title: "Second Task", status: "backlog" },
//   { _id: 3, title: "Third Task", status: "backlog" },
//   { _id: 4, title: "Fourth Task", status: "new" },
//   { _id: 5, title: "Fifth Task", status: "new" },
//   { _id: 6, title: "Sixth Task", status: "going" },
//   { _id: 7, title: "Seventh Task", status: "review" },
//   { _id: 8, title: "Eighth Task", status: "review" },
//   { _id: 9, title: "Ninth Task", status: "done" },
//   { _id: 10, title: "Tenth Task", status: "done" },
// ];

// const labels = ["backlog", "new", "going", "review", "done"];
// const labelsMap = {
//   backlog: "Backlog",
//   new: "To Do",
//   going: "In Progress",
//   review: "Review",
//   done: "Done",
// };

// const classes = {
//   board: {
//     display: "flex",
//     margin: "0 auto",
//     width: "90vw",
//     fontFamily: 'Arial, "Helvetica Neue", sans-serif',
//   },
//   column: {
//     minWidth: 200,
//     width: "18vw",
//     height: "80vh",
//     margin: "0 auto",
//     backgroundColor: "#566573",
//   },
//   columnHead: {
//     textAlign: "center",
//     padding: 10,
//     fontSize: "1.2em",
//     backgroundColor: "#7F8C8D",
//     color: "white",
//   },
//   item: {
//     padding: 10,
//     margin: 10,
//     fontSize: "0.8em",
//     cursor: "pointer",
//     backgroundColor: "white",
//   },
// };

// class Kanban extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       tasks,
//     };
//   }
//   update = (id, status) => {
//     const { tasks } = this.state;
//     const task = tasks.find((task) => task._id === id);
//     // console.log("task", task);
//     task.status = status;
//     const taskIndex = tasks.indexOf(task);
//     const newTasks = update(tasks, {
//       [taskIndex]: { $set: task },
//     });
//     console.log("newTask", newTasks);
//     this.setState({ tasks: newTasks });
//   };

//   render() {
//     const { tasks } = this.state;
//     return (
//       <main>
//         <header className="header">Example Kanban Board </header>
//         <section style={classes.board}>
//           {labels.map((channel) => (
//             <KanbanColumn status={channel}>
//               <div style={classes.column}>
//                 <div style={classes.columnHead}>{labelsMap[channel]}</div>
//                 <div>
//                   {tasks
//                     .filter((item) => item.status === channel)
//                     .map((item) => (
//                       <KanbanItem id={item._id} onDrop={this.update}>
//                         <div style={classes.item}>{item.title}</div>
//                       </KanbanItem>
//                     ))}
//                 </div>
//               </div>
//             </KanbanColumn>
//           ))}
        
//         </section>
//       </main>
//     );
//   }
// }

// export default Kanban;

// // Column

// const boxTarget = {
//   drop(props) {
//     return { name: props.status };
//   },
// };

// class KanbanColumn extends React.Component {
//   render() {
//     return this.props.connectDropTarget(<div>{this.props.children}</div>);
//   }
// }

// KanbanColumn = DropTarget("kanbanItem", boxTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// }))(KanbanColumn);

// // Item

// const boxSource = {
//   beginDrag(props) {
//     return {
//       name: props.id,
//     };
//   },

//   endDrag(props, monitor) {
//     const item = monitor.getItem();
//     const dropResult = monitor.getDropResult();
//     if (dropResult) {
//       props.onDrop(monitor.getItem().name, dropResult.name);
//     }
//   },
// };

// class KanbanItem extends React.Component {
//   render() {
//     return this.props.connectDragSource(<div>{this.props.children}</div>);
//   }
// }

// KanbanItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging(),
// }))(KanbanItem);

// import React, { useState } from "react";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import {v4} from "uuid";

// const itemsFromBackend = [
//   { id: v4(), content: "First task" },
//   { id: v4(), content: "Second task" },
//   { id: v4(), content: "Third task" },
//   { id: v4(), content: "Fourth task" },
//   { id: v4(), content: "Fifth task" }
// ];

// const columnsFromBackend = {
//   [v4()]: {
//     name: "Requested",
//     items: itemsFromBackend
//   },
//   [v4()]: {
//     name: "To do",
//     items: []
//   },
//   [v4()]: {
//     name: "In Progress",
//     items: []
//   },
//   [v4()]: {
//     name: "Done",
//     items: []
//   }
// };

// const onDragEnd = (result, columns, setColumns) => {
//   if (!result.destination) return;
//   const { source, destination } = result;

//   if (source.droppableId !== destination.droppableId) {
//     const sourceColumn = columns[source.droppableId];
//     const destColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destItems = [...destColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems
//       },
//       [destination.droppableId]: {
//         ...destColumn,
//         items: destItems
//       }
//     });
//   } else {
//     const column = columns[source.droppableId];
//     const copiedItems = [...column.items];
//     const [removed] = copiedItems.splice(source.index, 1);
//     copiedItems.splice(destination.index, 0, removed);
//     setColumns({
//       ...columns,
//       [source.droppableId]: {
//         ...column,
//         items: copiedItems
//       }
//     });
//   }
// };

// const Kanban = () => {
//   const [columns, setColumns] = useState(columnsFromBackend);
//   return (
//     <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
//       <DragDropContext
//         onDragEnd={result => onDragEnd(result, columns, setColumns)}
//       >
//         {Object.entries(columns).map(([columnId, column], index) => {
//           return (
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center"
//               }}
//               key={columnId}
//             >
//               <h2>{column.name}</h2>
//               <div style={{ margin: 8 }}>
//                 <Droppable droppableId={columnId} key={columnId}>
//                   {(provided, snapshot) => {
//                     return (
//                       <div
//                         {...provided.droppableProps}
//                         ref={provided.innerRef}
//                         style={{
//                           background: snapshot.isDraggingOver
//                             ? "lightblue"
//                             : "lightgrey",
//                           padding: 4,
//                           width: 250,
//                           minHeight: 500
//                         }}
//                       >
//                         {column.items.map((item, index) => {
//                           return (
//                             <Draggable
//                               key={item.id}
//                               draggableId={item.id}
//                               index={index}
//                             >
//                               {(provided, snapshot) => {
//                                 return (
//                                   <div
//                                     ref={provided.innerRef}
//                                     {...provided.draggableProps}
//                                     {...provided.dragHandleProps}
//                                     style={{
//                                       userSelect: "none",
//                                       padding: 16,
//                                       margin: "0 0 8px 0",
//                                       minHeight: "50px",
//                                       backgroundColor: snapshot.isDragging
//                                         ? "#263B4A"
//                                         : "#456C86",
//                                       color: "white",
//                                       ...provided.draggableProps.style
//                                     }}
//                                   >
//                                     {item.content}
//                                   </div>
//                                 );
//                               }}
//                             </Draggable>
//                           );
//                         })}
//                         {provided.placeholder}
//                       </div>
//                     );
//                   }}
//                 </Droppable>
//               </div>
//             </div>
//           );
//         })}
//       </DragDropContext>
//     </div>
//   );
// }

// export default Kanban;

import Card from "./drag_drop/card";
import Board from "./drag_drop/board";
import './kanban.css'

const Kanban = () => {

  return(
    <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card 1</p>
          </Card>
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card 2</p>
          </Card>
        </Board>
        {/* <Board id="board-3" className="board">
          <Card id="card-3" className="card" draggable="true">
            <p>Card 3</p>
          </Card>
        </Board> */}
    </main>
  )

}

export default Kanban;