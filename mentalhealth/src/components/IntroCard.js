
const IntroCard = () => {
    return (
      <div className="grid grid-cols-1 mt-20 items-center justify-items-center">
        <div className="grid grid-cols-1 justify-items-center items-center shadow-md" style={{backgroundColor: '#9FD1CD', borderRadius:"30px", width:"50%", height: "50vh"}}>
            <img src="/path/to/your/gif.gif" alt="Animated GIF" />
            <button className="text-black px-4 py-2 shadow-md" style={{ backgroundColor: '#FFDC5F', borderRadius: '30px', width:"50%",fontFamily:"Raleway", fontWeight:"600"}}>
          Get Started
        </button>
        </div>
      </div>
    );
  };
  
  export default IntroCard;