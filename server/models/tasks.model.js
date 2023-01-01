import Sequelize from "sequelize";
import db from "../config/database.js";


const Task = db.define(
    "task",
    {
        taskId : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNul : false,
            primaryKey : true
        },
        
        taskName : {
            type : Sequelize.STRING,
            allowNul : false,
            
        },

        taskSummary: {
            type : Sequelize.STRING,
            allowNul : false
        },

        taskDueHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        taskDueDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        taskDueMonth : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        taskDueYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },
        
        taskDueTimeZone : {
            type : Sequelize.STRING,
            allowNul : false
        },

        taskStatus : {
            type: Sequelize.SMALLINT,
            allowNul : false
        },

        taskAnswerLink : {
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