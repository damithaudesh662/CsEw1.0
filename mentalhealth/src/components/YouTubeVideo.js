// when you click share on  a youtube video there's a option called embed use the link address after the embed/ as the videoID in this

const YouTubeVideo = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="relative pb-9/16 h-0 overflow-hidden max-w-full bg-black mt-4">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
