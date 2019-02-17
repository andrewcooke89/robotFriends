import React from "react";

const DeleteRobot = () => {
  const styles = {
    padding: "5px",
    marginLeft: "10px",
    borderRadius: "5px",
    height: "50px"
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Robot Name"
        className="pa3 ba b--greeb bg-lightest-blue"
      />
      <button className="bg-lightest-blue" style={styles}>
        Delete Robot
      </button>
    </div>
  );
};

export default DeleteRobot;
