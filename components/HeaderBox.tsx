import React from "react";

type Props = {};

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="heaader-box-title">
        {title}
        {type === "greeting" && (
          <span className="text-bankgradient">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">
        Access and manage your transactions efficiently
      </p>
    </div>
  );
};

export default HeaderBox;
