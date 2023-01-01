import MenteeNavbar from "../../components/ui/MenteeNavbar";
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import axios from "axios";
import { useEffect, useState } from "react";

const MentorsPage = ({data}) => {
  
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <MenteeNavbar />
      </div>
      <div class=" col-span-4 font-sans h-auto flex flex-row  items-center flex space-x-4 mt-28">
        <div class="card w-96  bg-white  shadow-xl hover:shadow">
          <img
            class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div class="text-center mt-2 text-3xl font-medium text-black">
            {data.mentor.mentor_name + " " + data.mentor.mentor_surname} 
          </div>
          <div class="text-center mt-2 font-light text-sm text-black">
            {data.mentor.mentor_email}
          </div>

          <div class="text-center font-normal text-lg text-black">Facebook</div>
          <div class="px-6 text-center mt-2 font-light text-sm text-black">
            <p>{data.mentor.mentor_company + " " + data.mentor.mentor_expertise}</p>
          </div>
          <hr class="mt-8" />
          <div class="flex p-4">
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600 ">Rating: </span>
              4,8
            </div>
            <div class="w-0 border border-gray-300"></div>
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600">142</span> Followers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export async function getServerSideProps(context) {
  const cookie = context.req.cookies

  try{
      const res = await axios.post("http://localhost:3001/mentee/verify",cookie,{withCredentials:true})
      const res2 = await axios({
        method : "POST",
        url : "http://localhost:3001/mentee/get-mentors",
        data :{
          mentee_id : res.data
        },
        withCredentials : true

      });
      if (res.status === 201 && res2.status === 200) {
          
          return {props : {
              authToken : cookie,
              data : res2.data
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
export default MentorsPage;
