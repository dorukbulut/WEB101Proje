import db from "../config/database.js";
import  Sequelize  from "sequelize"

const Enrollement = db.define(
    "enrollement",
    {
        enrollement_id : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNul : false,
            primaryKey : true
        },

        enrollement_startHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollement_startDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollement_startMonth : {
            type : Sequelize.INTEGER,
            allowNul :false
        },
        
        enrollement_startYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollement_timeZone : {
            type : Sequelize.STRING,
            allowNul : false
        },
    },

    {
        timestamps : false,
        tablename : "enrollements"
    }
);

export default Enrollement;