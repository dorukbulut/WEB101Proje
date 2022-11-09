import Sequelize from "sequelize";
import db from "../config/database.js";


const Task = db.define(
    "task",
    {
        task_id : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNul : false,
            primaryKey : true
        },
        
        task_name : {
            type : Sequelize.STRING,
            allowNul : false,
            
        },

        task_summary: {
            type : Sequelize.STRING,
            allowNul : false
        },

        task_dueHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        task_dueDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        task_dueMonth : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        task_dueYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },
        
        task_dueTimeZone : {
            type : Sequelize.STRING,
            allowNul : false
        },

        task_Status : {
            type: Sequelize.SMALLINT,
            allowNul : false
        },

        task_answerLink : {
            type : Sequelize.STRING,
            allowNul : true
        },
    },

    {
        timestamps : false,
        tablename : "tasks"
    }
);

export default Task;