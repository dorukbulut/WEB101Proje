import db from "../config/database.js"
import Sequelize, { UUIDV4 }  from "sequelize"

const Event = db.define(
    "events",
    {
        eventId : {
            type : Sequelize.UUID,
            defaultValue : UUIDV4,
            allowNul : false,
            primaryKey : true
        },

        eventName : {
            type : Sequelize.STRING,
            allowNul : false
        },

        eventAbout : {
            type : Sequelize.STRING,
            allowNul : false
        },

        eventQuota : {
            type : Sequelize.INTEGER,
            allowNul : true
        },

        eventStartHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        eventStartDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        eventStartMonth : {
            type : Sequelize.INTEGER,
            allowNul :false
        },
        
        eventStartYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        eventTimeZone : {
            type : Sequelize.STRING,
            allowNul : false
        },

        eventMeetingLink : {
            type : Sequelize.STRING,
            allowNul : false
        },



    },

    {
        indexes : [{unique : true, fields :  ["eventMeetingLink"]}],
        timestamps : false,
        tablename  : "events"  
    }
)


export default Event;