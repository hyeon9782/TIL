import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미지가 잘 나온다!", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo");
  // expect에 있는 el이 Document에 있는지
  expect(logoEl).toBeInTheDocument();
});

test("로고 이미지가 안 나온다!", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo1");
  // expect에 있는 el이 Document에 있는지
  expect(logoEl).not.toBeInTheDocument();
});
