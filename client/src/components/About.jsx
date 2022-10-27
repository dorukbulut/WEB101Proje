const About = () => {

    return(
        <div className="grid place-items-center p-12 gap-32 h-full">
            <h1 className="">About Us</h1>
            <div className="flex gap-12">
                <div className="">
                    <img className="h-40 w-45 float-left"src="http://cdn.onlinewebfonts.com/svg/img_461424.png"/>
                    <p>
                        This is some text about one of the services we provide.
                    </p>
                </div>

                <div className="">
                    <img className="h-40 w-45 float-left" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Learn_Icon-01.svg"/>
                    <p>
                        This is some text about one of the services we provide.
                    </p>
                </div> 

                <div className="">
                    <img className="h-40 -45 float-left"src="http://cdn.onlinewebfonts.com/svg/img_461424.png"/>
                    <p>
                        This is some text about one of the services we provide.
                    </p>
                </div>     
               
            </div>
            
        </div>
    );
};

export default About;