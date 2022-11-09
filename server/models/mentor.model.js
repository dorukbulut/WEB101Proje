import Sequelize from 'sequelize';
import db from "../config/database.js";


const Mentor = db.define(
    "mentor",
    {
        mentor_id : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNull : false,
            primaryKey : true
        },

        mentor_name : {
            type: Sequelize.STRING,
            allowNull : false,
        },

        mentor_surname : {
            type : Sequelize.STRING,
            allowNull : false
        },

        mentor_email : {
            type : Sequelize.STRING,
            allowNull : false,
            unique : {msg : "user email is unique"}
        },

        mentor_phone: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: { msg: "user phone number is unique" },
		},

        mentor_password : {
            type : Sequelize.STRING,
            allowNull : false
        },

        mentor_expertise : {
            type : Sequelize.STRING,
            allowNull : false,
        },

        mentor_company : {
            type : Sequelize.STRING,
            allowNull : false,
        }

    },
    {
        indexes : [{unique : true, fields : ["mentor_email", "mentor_phone"]}],
        timestamps : false,
        tablename : "mentors"
    }
)


export default Mentor;