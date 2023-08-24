import React from "react";
import ImageCard from "./ImageCard";
import "./ProjectCard.css";
import imgdata from "./imgdata";

const ncard = (val) => {
  return (
    <ImageCard
      Key={val.id}
      title={val.title}
      imgsrc={val.imgsrc}
      desc={val.desc}
    />
  );
};
const ProjectCard = () => {
  return (
    <div className="ProjectCard">
      {imgdata.map((val, index) => (
        <div key={val.id} className="col-md-3">
          {ncard(val)}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
