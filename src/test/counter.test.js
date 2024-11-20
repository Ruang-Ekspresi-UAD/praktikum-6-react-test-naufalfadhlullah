import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./counter";
import Display from "./display";

describe("Counter Component", () => {
  test("Counter Default Value must be 0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    expect(countValue).toHaveTextContent("0");
  });

  test("Increment works when button clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("1");
  });

  test("Decrement works when button clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("count-value");
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent("-1");
  });

  test("Display has correct value (display.js)", () => {
    render(<Display value={5} />);
    const displayValue = screen.getByTestId("display-value");
    expect(displayValue).toHaveTextContent("Value: 5");
  });
});
