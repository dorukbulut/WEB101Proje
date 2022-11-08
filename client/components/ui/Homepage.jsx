

const Homepage= () => {
    return(
        <div className="flex items-center justify-center h-screen border-b border-dotted border-violet-500" style={{backgroundImage:"url('https://cdn.wallpapersafari.com/51/78/dltnIv.jpg')"}}>
            <div className="flex flex-col gap-10 align-items-center">
                <h1 className="animate-pulse text-5xl tracking-widest text-violet-600">Deneyim.NET</h1>
                <p className="text-xl italic tracking-widest text-center">Online Mentor -be ready.</p>
                <img className="block m-auto animate-bounce hover:cursor-pointer" src="https://www.svgrepo.com/show/62018/down-arrow.svg"  width="45" height="45" />
            </div>
            
        </div>
    );
}


export default Homepage;