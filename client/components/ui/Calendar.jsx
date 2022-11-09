import Timer from "./Timer";
import { useRouter } from 'next/router'
const Calendar = () => {
    let router = useRouter();
    return (
        <div className="grid space-y-10 place-items-center h-full pb-28 gap-22 h-full bg-secondary-color border-b border-dotted border-violet-500 ">
            <h1 className="text-4xl text-violet-600 ">Calendar</h1>
            <div className="flex flex-col items-center space-y-20">
                <h3 className="text-2xl text-violet-500 italic">JOIN OUR NEXT PROGRAM</h3>
                <p className="text-lg">Expires in</p>
                <Timer />
            </div>
            
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <button onClick={() => router.push("/register")} className='bg-violet-400 p-2 w-32 rounded-md hover:bg-violet-600 mt-10'>JOIN NOW</button>
            </div>
            
        </div>
    );
    
}


export default Calendar;