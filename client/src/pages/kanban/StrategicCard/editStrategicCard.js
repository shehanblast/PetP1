import React,{Fragment, useState,useEffect,Component} from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import swat from "sweetalert2";
import axios from 'axios';

const EditStrategicCard = () => {

    //submission status alerts
    const SubmissionAlert = () => {
        swat.fire({
            position: 'center',
            icon: 'success',
            title: 'Card Edited Successfully!',
            showConfirmButton: false,
            timer: 3000
        });
    }

    //submission status alerts
    const SubmissionFail = () => {
        swat.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
        })
    }

    //load card id via params
    const params = useParams();
    const id = params.id;

    const [description,setDescription] = useState('');
    const [due,setDue] = useState('');
    const [priority,setPriority] = useState('');
    const [qt,setQT] = useState('');
    const [statuskc,setStatuskc] = useState('');
    const [title,setTitle] = useState('');
    const [use,setUse] = useState('');
    const [editCard,setEditCard] = useState([]);
    const [strategyListId,setStrategyListId] = useState('');

    useEffect(() => {
        getStrategicCard(id);
    }, []);

    const getStrategicCard = async (id) => {

        console.log(id);

        try{

            const response = await fetch(`http://localhost:5000/kanbanCard/card/${id}`);
            const jsonData = await response.json();

            console.log(jsonData);
            setEditCard(jsonData);

        }catch(err){
            console.log(err.message);
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(title,due,use,description,priority,qt,strategyListId,statuskc);

        try{

            const body =
                {
                    "title": title,
                    "priority": priority,
                    "due": due,
                    "use": use,
                    "description": description,
                    "qt": qt,
                    "strategylistid": strategyListId,
                    "statuskc": statuskc
                };
            //header - type of data
            //body - what is sending
            const response = await fetch(`http://localhost:5000/kanbanCard/${id}`,
                {
                    method: "PUT",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                });

            console.log(response);

            SubmissionAlert();

            window.location = `/kanban`


        }catch(err){
            console.log(err.message);
            SubmissionFail();
        }
    }


    return(
        <div>
            <div className="container st1">
                <h1>Edit Kanban Card</h1>

                {editCard.map(stc => (  
                <form className="f2">
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                value={stc.description}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                value={stc.description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Due Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value=""
                                        onChange={e => setDue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">User</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={stc.use}
                                        onChange={e => setUse(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Status</label> <br/>
                                    <select id="cars" name="cars" onChange={e => setStatuskc(e.target.value)}>
                                        <option value="pending">Pending</option>
                                        <option value="done">Done</option>
                                        <option value="approved">Approved</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Quarter</label> <br/>
                                    <select id="cars" name="cars" onChange={e => setQT(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Priority</label> <br/>
                                    <select id="cars" name="cars" onChange={e => setPriority(e.target.value)}>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Strategic Theme</label> <br/>
                                    <select id="cars" name="cars" onChange={e => setStrategyListId(e.target.value)}>
                                        <option value={stc.strategylistid}>test theme</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary"  onClick={e => onSubmit(e)}>Edit</button>
                    </form> 
                ))}
            </div>
        <br/>
    </div>
    )
}

export default EditStrategicCard;

// const initialState = {

//     description: '',
//     due: '',
//     priority: 0,
//     qt:0,
//     statuskc:'',
//     title: '',
//     use:''

// }

// class EditStrategicCard extends Component {


//     constructor(props) {
//         super(props);
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = initialState;
//     }

//     componentDidMount() {

     
//         axios.get(`http://localhost:5000/kanbanCard/card/12`)
//             .then(response => {
//                 this.setState(
//                     {
//                         description: response.description
//                         // itemDescription: response.data.itemDescription,
//                         // itemAmount: response.data.itemAmount,
//                         // itemQTY: response.data.itemQTY,
//                         // itemImage: response.data.itemImage
//                     });
//             })
//             .catch(error => {
//                 alert(error.message)
//             })

//             console.log(this.description);

//     }


//     onChange(e) {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     navigateStore(e) {
//         window.location = `/`
//     }

//     onSubmit(e) {
//         this.setState({ isDisabled: false });
//         e.preventDefault();
//         // let store = {
//         //     itemName: this.state.itemName,
//         //     itemDescription: this.state.itemDescription,
//         //     itemAmount: this.state.itemAmount,
//         //     itemQTY: this.state.itemQTY,
//         //     itemImage: this.state.itemImage
//         // }

//         // console.log('DATA TO SEND', store);
//         // axios.put(`http://localhost:5001/store/${this.props.match.params.id}`, store)
//         //     .then(response => {
//         //         SubmissionAlert()

//         //     })

//         //     .catch(error => {
//         //         console.log(error.message);
//         //         let message = "Submission Error"
//         //         SubmissionFail(message);
//         //     })
//     }

//     render() {
//         return (
//             <>
//                     <div>
//                     <form className="f2">
//                         <div className="mb-3">
//                             <label className="form-label">Title</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={this.state.description}
                                
//                             />
//                         </div>
//                         {/* <div className="mb-3">
//                             <label className="form-label">Description</label>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 value={stc.description}
//                                 onChange={e => setDescription(e.target.value)}
//                             />
//                         </div>

//                         <div className="row">
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">Due Date</label>
//                                     <input
//                                         type="date"
//                                         className="form-control"
//                                         value=""
//                                         onChange={e => setDue(e.target.value)}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">User</label>
//                                     <input
//                                         type="text"
//                                         className="form-control"
//                                         value={stc.use}
//                                         onChange={e => setUse(e.target.value)}
//                                     />
//                                 </div>
//                             </div>
//                         </div> */}

//                         {/* <div className="row">
//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">Status</label> <br/>
//                                     <select id="cars" name="cars" onChange={e => setStatuskc(e.target.value)}>
//                                         <option value="pending">Pending</option>
//                                         <option value="done">Done</option>
//                                         <option value="approved">Approved</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">Quarter</label> <br/>
//                                     <select id="cars" name="cars" onChange={e => setQT(e.target.value)}>
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">Priority</label> <br/>
//                                     <select id="cars" name="cars" onChange={e => setPriority(e.target.value)}>
//                                         <option value="medium">Medium</option>
//                                         <option value="high">High</option>
//                                         <option value="low">Low</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="col-md-6">
//                                 <div className="mb-3">
//                                     <label className="form-label">Strategic Theme</label> <br/>
//                                     <select id="cars" name="cars" onChange={e => setStrategyListId(e.target.value)}>
//                                         <option value={stc.strategylistid}>test theme</option>
//                                     </select>
//                                 </div>
//                             </div>
//                         </div> */}
//                         {/* <button type="submit" className="btn btn-primary"  onClick={e => onSubmit(e)}> Add</button> */}
//                     </form> 
//                     </div>
//             </>
//         );
//     }
// }
// export default EditStrategicCard;