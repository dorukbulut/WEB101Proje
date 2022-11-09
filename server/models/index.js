import Mentee from "./mentee.model";
import Mentor from "./mentor.model";
import Events from "./events.model";

//Mentor-Mentee Association
Mentor.hasOne(Mentee, {
    foreignKey : 'MentorID'
});
Mentee.belongsTo(Mentor);

//Mentor-Event Association
Mentor.hasOne(Event, {
    foreignKey : "MentorID",
})
Event.belongsTo(Mentor)