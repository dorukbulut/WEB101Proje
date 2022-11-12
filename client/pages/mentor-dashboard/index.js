import axios from "axios";
import {useRouter} from "next/router";



const MentorDashBoard = (props) => {
    const router = useRouter();
    const handleLogOut = async (e) => {
        e.preventDefault();

        const res = await axios.post("http://localhost:3001/mentor/logout",props.authToken,{withCredentials: true});

        if(res.status === 201) {
            router.push("/");
        }

        else {
            console.log(res)
        }
    }
    return (
        <div>
            this is the mentor dashboard
        </div>
    );
}

export async function getServerSideProps(context) {
    const cookie = context.req.cookies

    try{
        const res = await axios.post("http://localhost:3001/mentor/verify",cookie,{withCredentials:true})
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
                destination :"/signin-mentor"
            }
        }
    }

}


export default MentorDashBoard;
