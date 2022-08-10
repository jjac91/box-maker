import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (boxData) => {
    let newBox = { ...boxData, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const renderBoxes = boxes.map((box) => (
    <Box
      id={box.id}
      color={box.color}
      height={box.height}
      width={box.width}
      key={box.id}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes}
    </div>
  );
};

export default BoxList;
