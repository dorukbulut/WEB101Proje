import db from "../config/database.js";
import  Sequelize  from "sequelize"

const Enrollement = db.define(
    "enrollement",
    {
        enrollementId : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNul : false,
            primaryKey : true
        },

        enrollementStartHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollementStartDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollementStartMonth : {
            type : Sequelize.INTEGER,
            allowNul :false
        },
        
        enrollementStartYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        enrollementTimeZone : {
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