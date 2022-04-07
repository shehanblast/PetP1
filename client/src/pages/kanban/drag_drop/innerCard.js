import React, {useEffect, useState} from 'react';

const InnerCard = (props) => {

    const [strategicCard,setStrategicCard] = useState([]);

    useEffect(() => {
        getStrategicCard();
    }, []);

    const getStrategicCard = async (e) => {
        try{

            const response = await fetch(`http://localhost:5000/kanbanCard/strategicTheme/${props.name}`);
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

            window.location = '/kanban';


        } catch (err) {
            console.log(err.message);
        }
    }

    const NavigateToAdd = (id) => {
        window.location = `/EditStrageticCard/${id}`;
    }


    return(
        <>
            {strategicCard.filter(function (p) {
                return p.qt == 1;
            }).map(stc => (
                <div>
                    <div className='inner'>
                        <div className='row'>
                            <div className='col-md-10'>
                                <h3>Title : {stc.title}</h3>
                            </div>
                            <div className='col-md-2'>
                                <button className='close' onClick={() => deleteStrategicCard(stc.kanbancard_id)}></button>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h3>Desc : {stc.description}</h3>
                            </div>   
                        </div>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h3>User : {stc.use}</h3>
                            </div>   
                            <div className='col-md-4 text-right'>
                                <span className={(stc.priority === "High") ? "rcorners1" : (stc.priority === "Medium") ? "rcorners2" : (stc.priority === "medium") ? "rcorners2" : "rcorners3"}>{stc.priority}</span>
                            </div>   
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <button className='btn btn-success' onClick={() => NavigateToAdd(stc.kanbancard_id)}>Edit</button>
                            </div>   
                        </div>
                    </div>
                </div>
            ))}
         </>
    )

}

export default InnerCard;