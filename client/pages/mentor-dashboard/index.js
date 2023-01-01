import axios from "axios";
import { useRouter } from "next/router";
import Table from "../../views/dashboard/Table";
import Trophy from "../../views/dashboard/Trophy";

import StatisticsCard from "../../views/dashboard/StatisticsCard";
import WeeklyOverview from "../../views/dashboard/WeeklyOverview";

import MentorNavbar from "../../components/ui/MentorNavbar";

const MentorDashBoard = (props) => {
  const router = useRouter();
  const handleLogOut = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:3001/mentor/logout",
      props.authToken,
      { withCredentials: true }
    );

    if (res.status === 201) {
      router.push("/");
    } else {
      console.log(res);
    }
  };
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <MentorNavbar />
      </div>

      <div className="flex flex-col col-span-4 p-20 space-y-10">
        <div className="flex space-x-10">
          <div className="w-1/2">
            <StatisticsCard />
          </div>
        </div>
        <div className="">
          <div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const cookie = context.req.cookies;

  try {
    const res = await axios.post(
      "http://localhost:3001/mentor/verify",
      cookie,
      { withCredentials: true }
    );
    if (res.status === 201) {
      return {
        props: {
          authToken: cookie,
        },
      };
    }
  } catch (err) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin-mentor",
      },
    };
  }
}

export default MentorDashBoard;
