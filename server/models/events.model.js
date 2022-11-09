import db from "../config/database.js"
import Sequelize, { UUIDV4 }  from "sequelize"

const Event = db.define(
    "events",
    {
        event_id : {
            type : Sequelize.UUID,
            defaultValue : UUIDV4,
            allowNul : false,
            primaryKey : true
        },

        event_name : {
            type : Sequelize.STRING,
            allowNul : false
        },

        event_about : {
            type : Sequelize.STRING,
            allowNul : false
        },

        event_quota : {
            type : Sequelize.INTEGER,
            allowNul : true
        },

        event_startHour : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        event_startDay : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        event_startMonth : {
            type : Sequelize.INTEGER,
            allowNul :false
        },
        
        event_startYear : {
            type : Sequelize.INTEGER,
            allowNul : false
        },

        event_timeZone : {
            type : Sequelize.STRING,
            allowNul : false
        },

        event_meetingLink : {
            type : Sequelize.STRING,
            allowNul : false
        },



    },

    {
        indexes : [{unique : true, fields :  ["event_meetingLink"]}],
        timestamps : false,
        tablename  : "events"  
    }
)


await Event.sync({alter : true})

export default Event;