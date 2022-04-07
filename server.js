const express = require("express");
const cors = require("cors");
const pool = require("./db");
const PORT = 5000;

const app = express();

//middleware
app.use(cors());
//to pass data
app.use(express.json());



//-------------------------------Strategy API Start-----------------------------------------//

//get all Strategy
app.get("/strategy", async (req, res) => {

    try {
        const allStrategy = await pool.query(
            "SELECT * FROM strategy"
        );
        res.json(allStrategy.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get a Strategy
app.get("/strategy/:id", async (req, res) => {

    try {
        const {id} = req.params;
        const strategy = await pool.query(
            "SELECT * FROM strategy WHERE todo_id = $1", [id]
        );
        res.json(strategy.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})

//update a strategy
app.put("/strategy/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;

        const updateStrategy = await pool.query(
            "UPDATE strategy SET description = $1 WHERE strategy_id = $2", [description, id]
        );

        res.json("strategy updated");

    } catch (err) {
        console.log(err.message);
    }
})


// //-------------------------------Strategy API End-----------------------------------------//


// //-------------------------------Mission API Start-----------------------------------------//

//get all mission
app.get("/mission", async (req, res) => {

    try {
        const allMission = await pool.query(
            "SELECT *  FROM mission"
        );
        res.json(allMission.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get a mission
app.get("/mission/:id", async (req, res) => {

    try {
        const {id} = req.params;
        const mission = await pool.query(
            "SELECT * FROM mission WHERE mission_id = $1", [id]
        );
        res.json(mission.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})

//update a mission
app.put("/mission/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description,startDate,endDate} = req.body;

        const updateMission = await pool.query(
            "UPDATE mission SET description = $1, startDate = $2, endDate = $3 WHERE mission_id = $4",
            [description, startDate, endDate, id]
        );

        res.json("Mission updated");

    } catch (err) {
        console.log(err.message);
    }
})

// //-------------------------------Mission API End-----------------------------------------//


// //-------------------------------Vision API Start-----------------------------------------//

//get all Vision
app.get("/vision", async (req, res) => {

    try {
        const allVision = await pool.query(
            "SELECT *  FROM vision"
        );
        res.json(allVision.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get a Vision
app.get("/vision/:id", async (req, res) => {

    try {
        const {id} = req.params;
        const vision = await pool.query(
            "SELECT * FROM vision WHERE vision_id = $1", [id]
        );
        res.json(vision.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})

//update a Vision
app.put("/vision/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {description,startDate,endDate} = req.body;

        const updateVision = await pool.query(
            "UPDATE vision SET description = $1,startDate = $2,endDate = $3  WHERE vision_id = $4",
            [description, startDate, endDate, id]
        );

        res.json("vision updated");

    } catch (err) {
        console.log(err.message);
    }
})

// //-------------------------------Vision API End-----------------------------------------//


// //-------------------------------Strategy List API Start-----------------------------------------//
// create StrategyList
app.post("/strategyList", async (req, res) => {

    try {
        //assign the body data to the const
        const {name,description,startDate,endDate,status} = req.body;
        const newStrategyList = await pool.query(
            "INSERT INTO strategyList (name,description,startDate,endDate,status) VALUES($1,$2,$3,$4,$5) RETURNING *",
            [name,description,startDate,endDate,status]
        );

        //what to do with the response
        res.json(newStrategyList.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})


//get all StrategyList
app.get("/strategyList", async (req, res) => {

    try {
        const allStrategyList = await pool.query(
            "SELECT * FROM strategyList"
        );
        res.json(allStrategyList.rows);
    } catch (err) {
        console.log(err.message);
    }

});


//get all StrategyList''s id and name
app.get("/strategyList/name", async (req, res) => {

    try {
        const allStrategyList = await pool.query(
            "SELECT strategyList_id,name  FROM strategyList"
        );
        res.json(allStrategyList.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get a StrategyList
app.get("/strategyList/:id", async (req, res) => {

    try {
        const {id} = req.params;
        const strategyList = await pool.query(
            "SELECT * FROM strategyList WHERE strategyList_id = $1", [id]
        );
        res.json(strategyList.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})

//update a StrategyList
app.put("/strategyList/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {name,description,startDate,endDate,status} = req.body;

        const updateStrategyList = await pool.query(
            "UPDATE strategyList SET name = $1,description = $2,startDate = $3,endDate = $4,status = $5 WHERE strategyList_id = $6",
            [name, description, startDate, endDate, status, id]
        );

        res.json("strategyList Item updated");

    } catch (err) {
        console.log(err.message);
    }
})

//Delete a StrategyList
app.delete("/strategyList/:id", async (req, res) => {
    try {
        const {id} = req.params;

        const deleteStrategyList = await pool.query(
            "DELETE FROM strategyList WHERE strategyList_id = $1", [id]
        );

        res.json("strategyList Item DELETED");

    } catch (err) {
        console.log(err.message);
    }
})
//-------------------------------StrategyList API End-----------------------------------------//



//-------------------------------kanbanCard API-----------------------------------------//

//get all kanbanCards by the name
app.get("/kanbanCard/strategicTheme/:name", async (req, res) => {

    try {

        const {name} = req.params;

        const allStrategyList = await pool.query(
            "SELECT *  from kanbanCard inner join strategyList on kanbanCard.strategyListID = strategyList.strategyList_id where strategyList.name = $1", [name]
        );
        res.json(allStrategyList.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get all kanbanCards by the name and qt
app.get("/kanbanCard/strategicTheme/:name/:qt", async (req, res) => {

    try {

        const {name,qt} = req.params;

        const allStrategyList = await pool.query(
            "SELECT *  from kanbanCard inner join strategyList on kanbanCard.strategyListID = strategyList.strategyList_id where strategyList.name = $1, kanbanCard.qt = $2", [name,qt]
        );
        res.json(allStrategyList.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get all kanbanCards
app.get("/kanbanCard", async (req, res) => {

    try {

        const allStrategyList = await pool.query(
            "SELECT *  from kanbanCard "
        );
        res.json(allStrategyList.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//delete a kanbanCard
app.delete("/kanbanCard/:id", async (req, res) => {
    try {

        const {id} = req.params;

        const deleteKanbanCard = await pool.query(
            "DELETE FROM kanbanCard where kanbanCard_id = $1", [id]

        );
        res.json("kanbanCard Item DELETED");
    } catch (err) {
        console.log(err.message);
    }

});


//get a kanbanCards according to the Strategic theme ID
app.get("/kanbanCard/:id", async (req, res) => {

    try {

        const {id} = req.params;

        const kanbanCard = await pool.query(
            "SELECT *  FROM kanbanCard k where strategyListID = $1", [id]
        );
        res.json(kanbanCard.rows);
    } catch (err) {
        console.log(err.message);
    }

});

//get a kanbanCards according to the ID
app.get("/kanbanCard/card/:id", async (req, res) => {

    try {

        const {id} = req.params;

        const kanbanCard = await pool.query(
            "SELECT *  FROM kanbanCard k where kanbanCard_id = $1", [id]
        );
        res.json(kanbanCard.rows);
    } catch (err) {
        console.log(err.message);
    }

});


// create new kanbanCard
app.post("/kanbanCard", async (req, res) => {

    try {
        //assign the body data to the const
        const {title,priority,due,use,description,qt,strategyList_id,statuskc} = req.body;
        const newKanbanCard = await pool.query(
            "INSERT INTO kanbanCard (title,priority,due,use,description,qt,strategyListID,statuskc) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
            [title,priority,due,use,description,qt,strategyList_id,statuskc]
        );

        //what to do with the response
        res.json(newKanbanCard.rows[0]);
    } catch (err) {
        console.log(err.message);
    }

})


// Update kanbanCard
app.put("/kanbanCard/:id", async (req, res) => {

    try {

        const {id} = req.params;
        const {title,priority,due,use,description,qt,strategyList_id,statuskc} = req.body;

        const editKanbanCard = await pool.query(
            "UPDATE kanbanCard SET title = $1,priority = $2,due = $3,use = $4,description = $5,qt = $6,strategyListID = $7,statuskc = $8,  WHERE kanbanCard_id = $9",
            [title,priority,due,use,description,qt,strategyList_id,statuskc,id]
        );

        res.json("Card updated");
    } catch (err) {
        console.log(err.message);
    }

})

// Update the kanbanCard's quater
app.patch("/kanbanCard/:id", async (req, res) => {

    try {

        const {id} = req.params;
        const {qt} = req.body;

        const editKanbanCard = await pool.query(
            "UPDATE kanbanCard SET qt = $1 WHERE kanbanCard_id = $2",
            [qt,id]
        );

        res.json("Card updated");
    } catch (err) {
        console.log(err.message);
    }

})


//-------------------------------kanbanCard API End-----------------------------------------//


app.get('/', async (req, res) => {
    res.json("Pet P1")
})

app.listen(PORT, () => {
    console.log(`server has started on port ${PORT}`);
});