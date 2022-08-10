import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "50", width = "50", color = "blue") {
  const heightInput = boxList.getByLabelText("Height:");
  const widthInput = boxList.getByLabelText("Width:");
  const colorInput = boxList.getByLabelText("Color:");
  fireEvent.change(colorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box");
  fireEvent.click(button);
}
it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
  const boxList = render(<BoxList />);
  //No boxes created yet
  expect(boxList.queryByText("Remove this box")).not.toBeInTheDocument();

  addBox(boxList);

  const deleteButton = boxList.getByText("Remove this box");
  expect(deleteButton).toBeInTheDocument();
  console.log(deleteButton.previousSibling);
  expect(deleteButton.previousSibling).toHaveStyle(`
  background-color: blue;
  width: 50px;
  height: 50px;
  `);
});
it("can remove a box", function () {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const deleteButton = boxList.getByText("Remove this box");
  fireEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
});
