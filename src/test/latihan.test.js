import { render, screen, fireEvent } from "@testing-library/react";
import { Counter, Greeting, AlertButton } from "./latihan";
import "@testing-library/jest-dom";
import React from "react";

describe("Counter Component", () => {
  test("Counter Default Value must be 0", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    expect(countValue).toHaveTextContent("0");
  });

  test("Increment works when button clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("1");
  });

  test("Decrement works when button clicked", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    expect(countValue).toHaveTextContent("-1");
  });

  test("Reset the count using reset button", () => {
    render(<Counter />);
    const countValue = screen.getByTestId("counter-value");
    const incrementButton = screen.getByTestId("increment-button");
    const resetButton = screen.getByTestId("reset-button");

    fireEvent.click(incrementButton);
    expect(countValue).toHaveTextContent("1");
    fireEvent.click(resetButton);
    expect(countValue).toHaveTextContent("0");
  });
});

describe("Greeting Component", () => {
  test("Greeting component displays your name", () => {
    render(<Greeting name="Naufal" />);
    const greetingMessage = screen.getByTestId("greeting");
    expect(greetingMessage).toHaveTextContent("Hello, Naufal");
  });

  test("Greeting component displays your professor's name", () => {
    render(<Greeting name="Dr. John Doe" />);
    const greetingMessage = screen.getByTestId("greeting");
    expect(greetingMessage).toHaveTextContent("Hello, Dr. John Doe");
  });
});

describe("AlertButton Component", () => {
  test("Triggers alert with correct message when clicked", () => {
    window.alert = jest.fn();
    render(<AlertButton message="Test Alert Message" />);
    const alertButton = screen.getByTestId("alert-button");

    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith("Test Alert Message");
  });
});
