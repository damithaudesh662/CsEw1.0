const FeatureCard = (props) => {
  return (
    <div
      className="grid grid-cols-1 shadow-md justify-items-center items-center"
      style={{
        height: "80%",
        backgroundColor: "#D6EADF",
        borderRadius: "30px",
      }}
    >
      <p className="text-2xl self-start mt-10" style={{ fontFamily: "Bree Serif" }}>
        {props.title}
      </p>
      <img className="object-contain h-28 mb-8" src={props.img}  alt="Animated GIF" />
    </div>
  );
};

export default FeatureCard;
