import axios from "axios";
import { useNavigate } from "react-router-dom";


const Mentee = (e) => {

    let navigate = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault();
        axios({
            method : "get",
            url : "http://localhost:3001/mentee/logout",
            withCredentials : true
        })

        .then(res => {
            if(res.status == 201){
                navigate("/signin");
            }
        })

        .catch(err => console.log);
    }
    return (
        <div>
            This is the default mentee page

            <button onClick={handleLogout}>Log Out</button>
        </div>
    );
}


export default Mentee;