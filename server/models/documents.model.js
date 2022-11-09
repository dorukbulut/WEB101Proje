import db from "../config/database.js";
import Sequelize  from "sequelize";

const Document = db.define(
    "document",
    {
        document_id  : {
            type : Sequelize.UUID,
            defaultValue : Sequelize.UUIDV4,
            allowNull : false,
            primaryKey : true
        },
        document_content: {
            type : Sequelize.BLOB('long'),
            allowNull : true
        }
    },

    {
        timestamps : false,
        tablename : "documents"
    }
)

export default Document;