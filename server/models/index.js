import Mentee from "./mentee.model";
import Mentor from "./mentor.model";

//Mentor-Mentee Association
Mentor.hasOne(Mentee, {
    foreignKey : 'MentorID'
});
Mentee.belongsTo(Mentor);

//