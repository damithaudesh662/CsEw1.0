import FeatureCard from "./FeatureCard";

const FeaturesContainer = () => {
  return (
    <div className="grid grid-cols-1 mt-20 items-center justify-items-center">
      <div
        className="grid grid-cols-4 gap-2 items-center justify-center pl-8 pr-8 shadow-md"
        style={{
          backgroundColor: "#9FD1CD",
          borderRadius: "30px",
          width: "90%",
          height: "50vh",
        }}
      >
        <FeatureCard title={"Journal Space"}/>
        <FeatureCard title={"Mood Track"}/>
        <FeatureCard title={<span dangerouslySetInnerHTML={{__html: "External<br />Resources"}} />} />
        <FeatureCard title={"Chatbot"}/>
      </div>
    </div>
  );
};

export default FeaturesContainer;
