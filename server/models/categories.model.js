import db from "../config/database.js";
import Sequelize  from "sequelize";


const Category  = db.define(
    "category",
    {
        category_id : {
            type : Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull : false,
            primaryKey : true 
        },

        category_name : {
            type : Sequelize.STRING,
            allowNull : false
        }
    },

    {
        timestamps : false,
        tablename : "categories"
    }
)

export default Category;