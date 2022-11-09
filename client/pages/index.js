import Navbar from "../components/ui/Navbar";
import About from "../components/ui/About";
import Homepage from "../components/ui/Homepage";
import Calendar from "../components/ui/Calendar";
import Pricing from "../components/ui/Pricing";
import Footer from "../components/ui/Footer";


const index = () => {
    return(
        <div className="h-full w-full bg-cover " >
            <Navbar />
            <Homepage />
            <About />
            <Calendar />
            <Pricing />
            <Footer />
        </div>
    )
}

export default index;
