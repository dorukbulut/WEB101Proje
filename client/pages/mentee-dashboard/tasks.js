import MenteeNavbar from "../../components/ui/MenteeNavbar";

const TasksPage = () => {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <MenteeNavbar />
      </div>
      <div class="col-span-4 flex items-center justify-center mt-28">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <b class="text-xl font-semibold my-2 text-black">
                Mobile Development
              </b>
              <div class="flex space-x-2 my-4 text-gray-400 text-sm">
                <p>Mentor Name</p>
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
                <p>1 Weeks Left</p>
              </div>
              <div class="border-t-2"></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <div class="flex space-x-2 my-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Go to Detail
                    </button>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                      Close Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2 text-black">
                Frontend Development
              </p>
              <div class="flex space-x-2 my-4 text-gray-400 text-sm"></div>
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
                <p>3 Weeks Left</p>
              </div>
              <div class="border-t-2 "></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <div class="flex space-x-2 my-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Go to Detail
                    </button>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                      Close Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2 text-black">
                Backend Development
              </p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>Mentor Name</p>
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
                <p>2 Days Left</p>
              </div>
              <div class="border-t-2 "></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <div class="flex space-x-2 my-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Go to Detail
                    </button>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                      Close Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div class="mt-8">
              <p class="text-xl font-semibold my-2 text-black">Data Science</p>
              <div class="flex space-x-2 text-gray-400 text-sm">
                <p>Mentor Name</p>
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
                <p>1 Month Left</p>
              </div>
              <div class="border-t-2 "></div>

              <div class="flex justify-between">
                <div class="my-2">
                  <div class="flex space-x-2 my-8">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Go to Detail
                    </button>
                    <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
                      Close Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TasksPage;
