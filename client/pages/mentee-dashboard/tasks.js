import MenteeNavbar from "../../components/ui/MenteeNavbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Details from "../../components/forms/Details";

const TasksPage = ({authToken, data}) => {
  const [tasks, setTasks] = useState([]);
  console.log(data);
  useEffect(() => {
     axios({
        method : "POST",
        url : "http://localhost:3001/mentee/get-tasks",
        data :{
          mentee_id : data
        },
        withCredentials : true

      })
    .then(res => {
      if (res.status === 200) {
        console.log(res.data);
        setTasks(res.data);
      }
    })
    .catch(err => console.log(err));
  }, [data]);
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <MenteeNavbar />
      </div>
      <div class="col-span-4 flex items-center justify-center mt-28">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          
          {tasks.map(task => {
            return (<div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              
            </div>
            <div class="mt-8">
              <b class="text-xl font-semibold my-2 text-black">
                {task.taskName}
              </b>
              <div class="flex space-x-2 my-4 text-gray-400 text-sm">
                <p>{task.mentor.mentor_name +  " " + task.mentor.mentor_surname}</p>
              </div>
              <div class="flex space-x-2 text-gray-400 text-sm my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p>{`Due ${task.taskDueDay + "-" + task.taskDueMonth}` + "-" + task.taskDueYear}</p>
              </div>
              <div class="border-t-2"></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <div class="flex space-x-2 my-8">
                    <Details task={task} />
                    {
                      task.taskStatus === 0 ?  <button className={`bg-slate-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Assigned
                    </button> : ""

                    
                    }

{
                      task.taskStatus === 1 ?  <button className={`bg-yellow-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Review
                    </button> : ""

                    
                    }

{
                      task.taskStatus === 2 ?  <button className={`bg-red-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Rejected
                    </button> : ""

                    
                    }

{
                      task.taskStatus === 3 ?  <button className={`bg-green-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full`}>
                      Success
                    </button> : ""

                    
                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>)
          })}
          
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const cookie = context.req.cookies

  try{
      const res = await axios.post("http://localhost:3001/mentee/verify",cookie,{withCredentials:true})
      if (res.status === 201) {
          
          return {props : {
              authToken : cookie,
              data : res.data
          }}
      }
  }
  

  catch(err) {
       console.log(err);
      return {
          redirect : {
              permanent : false,
              destination :"/signin-mentee"
          }
      }
  }

}
export default TasksPage;
