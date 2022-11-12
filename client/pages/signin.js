import { Grid } from "@mui/material";
import LogInForm from "../components/forms/LoginForm";
import axios from "axios";
import { useRouter } from "next/router";
export default function SignInPage() {
  const router = useRouter();
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "87vh" }}
    >
      <Grid item md={6} xs={12}>
        <div class="lg:grid lg:place-items-center ">
          <div class="lg:w-full xl:max-w-screen-sm ">
            <div class="py-6 lg:bg-white flex justify-center lg:justify-center lg:px-6">
              <div class="cursor-pointer flex items-center">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div class="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                  Deneyim.NET
                </div>
              </div>
            </div>
            <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-5 xl:px-24 xl:max-w-2xl">
              <div class="mt-12">
                <div class="mt-10">
                  <button
                    onClick={(e) => router.push("/signin-mentee")}
                    class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                  >
                    Log In As Mentee
                  </button>
                </div>
              </div>
            </div>
            <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-10 xl:px-24 xl:max-w-2xl">
              <div class="mt-12">
                <div class="mt-10">
                  <button
                    onClick={(e) => router.push("/signin-mentor")}
                    class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                  >
                    Log In As Mentor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}