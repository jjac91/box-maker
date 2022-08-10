import React from "react";

const Box = ({ id, color, height, width, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: `${color}`,
        }}
      />
      <button onClick={remove}>Remove this box</button>
    </div>
  );
};

export default Box;
