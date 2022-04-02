-- Here list all the queries that used for the DB handling
CREATE DATABASE petp1;

CREATE TABLE strategy(
    strategy_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    endDateS date
);

ALTER TABLE strategy
ADD endDateS date;

INSERT INTO strategy VALUES (1,'TESTStrategy','12-07-2008');

CREATE TABLE vision(
     vision_id SERIAL PRIMARY KEY,
     description VARCHAR(255),
     startDate date,
     endDate date
);

INSERT INTO vision VALUES (1,'TESTV','12-07-2008','12-07-2008');

CREATE TABLE mission(
    mission_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    startDate date,
    endDate date
);

INSERT INTO mission VALUES (1,'TEST','12-07-2008');

CREATE TABLE strategyList(
    strategyList_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    startDate date,
    endDate date,
    status VARCHAR(255)
);

CREATE TABLE kanbanCard(
    kanbanCard_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    priority VARCHAR(255),
    due date,
    use VARCHAR(255),
    description VARCHAR(255),
    qt int,
    strategyListID int,
    statuskc VARCHAR(255),
    FOREIGN KEY (strategyListID) REFERENCES strategyList(strategyList_id)
);

drop table kanbanCard;

INSERT INTO kanbanCard VALUES (1,'testK','medium','12-07-2008','kasun','test kanban card',1,1,'pending');
INSERT INTO kanbanCard VALUES (2,'build CRUD','High','12-07-2008','Nimal','Complete CRUD',2,2,'approved');
INSERT INTO kanbanCard VALUES (3,'PERN Application','Medium','12-07-2008','Nimal','Build application',3,3,'pending');
INSERT INTO kanbanCard VALUES (4,'Kanban Board','Low','12-07-2008','Binuka','Create Application',4,1,'approved');Nimi Grow
INSERT INTO kanbanCard VALUES (5,'Kanban Board','Low','12-07-2008','Binuka','Create Application',4,3,'pending');

INSERT INTO kanbanCard VALUES (6,'card','medium','01-04-2022','kamal','test kanban card',1,7,'pending');

ALTER TABLE kanbanCard
ADD statuskc VARCHAR(255);

select *
from kanbanCard
inner join strategyList
on kanbanCard.strategyListID = strategyList.strategyList_id
where strategyList.name = 'test';

ALTER TABLE kanbanCard
ALTER status statusK VARCHAR(255);

ALTER TABLE kanbanCard
DROP COLUMN status;

DELETE FROM kanbanCard WHERE kanbanCard_id = 1;