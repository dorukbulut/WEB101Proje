import { useEffect, useState } from "react"
import Mentee from "../components/DashBoard/Mentee"
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MenteePage = (e) => {
    const [isValid, setIsvalid] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios({
            method : "post",
            url :" http://localhost:3001/mentee/verify",
            withCredentials : true
        })

        .then(res => {
            if (res.status  === 201) {
                setIsvalid(true)
            }
        })

        .catch(err => {
            navigate("/signin");
        });
    },[])


    
    if (isValid) return <Mentee />;

    
}

export default MenteePage;