import Mentor from "./mentor.model.js";
import Mentee from "./mentee.model.js";
import Event from "./events.model.js";
import Task from "./tasks.model.js"
import Enrollement from "./enrollements.model.js";
import Document from "./documents.model.js";
import Category from "./categories.model.js";

//Associations

//Mentor-Mentee
Mentor.hasOne(Mentee, {
    foreignKey : {
        name : "MentorID"
    }
});

Mentee.belongsTo(Mentor, {
    foreignKey : {
        name : "MentorID"
    }
})


//Mentor-Event

Mentor.hasMany(Event, {
    foreignKey : {
        name : "MentorID"
    }
});

Event.belongsTo(Mentor, {
    foreignKey : {
        name : "MentorID"
    }
})


//Mentor-Task
Mentor.hasMany(Task, {
    foreignKey : {
        name : "MentorID"
    }
});

Task.belongsTo(Mentor, {
    foreignKey : {
        name : "MentorID"
    }
})

//Mentee-Task
Mentee.hasOne(Task, {
    foreignKey : {
        name : "MenteeID",
    } 
});
Task.belongsTo(Mentee, {
    foreignKey : {
        name : "MenteeID",
    } 
})
//Task-Document




//Enrollement-Mentee

Mentee.hasMany(Enrollement, {
    foreignKey : {
        name : "MenteeID"
    }
});


//Enrollement-Event
Event.hasMany(Enrollement, {
    foreignKey : {
        name : "EventID"
    }
});





export default {Mentor, Mentee, Event, Task, Enrollement};


