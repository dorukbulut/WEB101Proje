import MenteeNavbar from "../../components/ui/MenteeNavbar";
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import axios from "axios";

const MentorsPage = ({data}) => {
  console.log(data);
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
            Franco
          </div>
          <div class="text-center mt-2 font-light text-sm text-black">
            franco@gmail.com
          </div>

          <div class="text-center font-normal text-lg text-black">Facebook</div>
          <div class="px-6 text-center mt-2 font-light text-sm text-black">
            <p>Front end Developer at Facebook</p>
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
        <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <img
            class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div class="text-center mt-2 text-3xl font-medium text-black">
            Ajo Alex
          </div>
          <div class="text-center mt-2 font-light text-sm text-black">
            alex@gmail.com
          </div>
          <div class="text-center font-normal text-lg text-black">Amazon</div>
          <div class="px-6 text-center mt-2 font-light text-sm text-black">
            <p>Senior Sofware Engineer at Amazon</p>
          </div>
          <hr class="mt-8" />
          <div class="flex p-4">
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600">Rating: </span> 4,6
            </div>
            <div class="w-0 border border-gray-300 "></div>
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600">800</span> Followers
            </div>
          </div>
        </div>
        <div class="card w-96 mx-auto bg-white  shadow-xl hover:shadow">
          <img
            class="w-32 mx-auto rounded-full -mt-20 border-8 border-white"
            src="https://avatars.githubusercontent.com/u/67946056?v=4"
            alt=""
          />
          <div class="text-center mt-2 text-3xl font-medium text-black">
            Enes Zor
          </div>
          <div class="text-center mt-2 font-light text-sm text-black">
            enes@gmail.com
          </div>
          <div class="text-center font-normal text-lg text-black">GSU</div>
          <div class="px-6 text-center mt-2 font-light text-sm text-black">
            <p>GoalKeeper at GSU</p>
          </div>
          <hr class="mt-8" />
          <div class="flex p-4">
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600">Rating: </span> 5.0
            </div>
            <div class="w-0 border border-gray-300"></div>
            <div class="w-1/2 text-center text-black">
              <span class="font-bold text-green-600">2.0 k</span> Following
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
export default MentorsPage;
