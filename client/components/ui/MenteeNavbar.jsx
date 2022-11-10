export default function MenteeNavbar(){
    return(
        <nav className="h-full fixed left-0 top-0 bg-main-color">
            <div className="flex flex-col p-20 gap-y-36">
                <div>
                    <img></img>
                    <p className="text-2xl">Deneyim.NET</p>
                </div>

                <div>
                    <ul className="flex flex-col space-y-10 text-xl">
                        <li>Dashboard</li>
                        <li>Tasks</li>
                        <li>Mentors</li>
                        <li>Events</li>
                        
                    </ul>
                </div>

                <div>
                    <p className="text-base">Settings</p>
                </div>
            </div>
            
        </nav>
    )
}
