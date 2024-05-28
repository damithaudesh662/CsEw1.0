import Icon from "../Assets/images/meditating.png";
import YouTubeVideo from "../components/YouTubeVideo";

const VideoMedPage = () => {
  return (
    <div className="bg-blue-200 mx-4 my-4 pt-4 pl-4 pr-4 pb-4 rounded-xl">
      <div className="container flex items-center justify-between pl-4 pr-4 pt-4 gap-x-4">
        <img src={Icon} className="h-52 pl-16"></img>
        <p className="w-2/3 pr-36 text-right text-2xl">
          Welcome to our guided meditation oasis. Find peace, clarity, and calm
          with our soothing sessions. Start your journey to inner tranquility
          today.
        </p>
      </div>
      <div className="my-4">
        <YouTubeVideo videoId="inpok4MKVLM?si=g7mRb6qLWYF27sjK" />
        <YouTubeVideo videoId="-dHOWvFZa4M?si=uHn7JVDB8ChEI7GZ" />
        <YouTubeVideo videoId="vj0JDwQLof4?si=c28CyNmDdEag-QZ7" />
      </div>
    </div>
  );
};

export default VideoMedPage;
