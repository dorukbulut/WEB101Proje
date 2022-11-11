import axios from "axios";
import {useRouter} from "next/router";
import MenteeNavbar from "../../components/ui/MenteeNavbar";
import EventsPreview from "../../components/ui/MenteeEventsPreview";
import TasksPreview from "../../components/ui/MentorTasksPreview";
import MentorPreview from "../../components/ui/MenteeMentorPreview";

const MenteeDashBoard = (props) => {
    const router = useRouter();
    const handleLogOut = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:3001/mentee/logout",props.authToken,{withCredentials: true});

        if(res.status === 201) {
            router.push("/");
        }

        else {
            console.log(res)
        }
    }
    return (
        <div className="grid grid-cols-6 gap-4 bg-main-color h-screen">
            <div className=" col-span-1 ">
                <MenteeNavbar />
            </div>
            
            <div className="col-span-5 p-10 flex flex-col">
                <div className="flex">
                    <MentorPreview />
                    <TasksPreview />
                </div>
            
                <div>
                    <EventsPreview />
                </div>
               
                
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const cookie = context.req.cookies

    try{
        const res = await axios.post("http://localhost:3001/mentee/verify",cookie,{withCredentials:true})
        if (res.status === 201) {
            return {props : {
                authToken : cookie
            }}
        }
    }
    

    catch(err) {
        return {
            redirect : {
                permanent : false,
                destination :"/signin"
            }
        }
    }

}


export default MenteeDashBoard;