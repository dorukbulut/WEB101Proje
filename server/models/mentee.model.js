import Sequelize from 'sequelize';
import db from "../config/database.js";


const Mentee = db.define(
    "mentee",
    {
        mentee_id : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNull : false,
            primaryKey : true
        },

        mentee_name : {
            type : Sequelize.STRING,
            allowNull : false
        },

        mentee_surname : {
            type : Sequelize.STRING,
            allowNull : false
        },

        mentee_email : {
            type : Sequelize.STRING,
            allowNull : false,
            unique : {msg : "user email is unique"}
        },

        mentee_phone: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: { msg: "user phone number is unique" },
		},

        mentee_password : {
            type : Sequelize.STRING,
            allowNull : false
        }
    },
    {
        indexes : [{unique : true, fields : ["mentee_email", "mentee_phone"]}],
        timestamps : false,
        tablename : "mentees"
    }
)
await Mentee.sync({ alter: true }) 
export default Mentee;