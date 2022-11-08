const About = () => {

    return(
    <section class="bg-secondary-color border-b border-dotted border-violet-500">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h1 className="text-4xl text-violet-600 mb-4">About Us</h1>
        
    </div>
    <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        
        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="text-2xl text-violet-500 italic">Online</h3>
                        <img className="h-40 w-45 block m-auto " src="https://cdn-icons-png.flaticon.com/512/2799/2799229.png"/>
                        <p>
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                        </p>
        </div>
        
        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="text-xl text-violet-500 italic ">Learn By Doing</h3>
                        <img className="h-40 w-45 block m-auto" src="https://upload.wikimedia.org/wikipedia/commons/6/66/Learn_Icon-01.svg"/>
                        <p>
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                        </p>
        </div>
        
        <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
        <h3 className="text-xl text-violet-500 italic ">Get Instant Feed-Back</h3>
                        <img className="h-40 -45 block m-auto"src="http://cdn.onlinewebfonts.com/svg/img_461424.png"/>
                        <p>
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
                            This is some text about one of the services we provide.
        </p>
        </div>
    </div>
    
</div>
</section>
    );
};

export default About;