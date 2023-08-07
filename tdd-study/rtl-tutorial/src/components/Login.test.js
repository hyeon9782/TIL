import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from "@testing-library/user-event";

describe("Login test", () => {
  test("처음에는 Login 버튼이 있다.", () => {
    render(<Login />);
    const btnEl = screen.getByRole("button");
    expect(btnEl).toHaveTextContent("Login");
  });
});

const user = userEvent.setup();

test("한 번 클릭하면 Logout 버튼이 된다.", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button");
  await user.click(btnEl);
  expect(btnEl).toHaveTextContent("Logout");
});

test("tab, sapce, enter 동작", async () => {
  render(<Login />);
  const btnEl = screen.getByRole("button");
  await user.tab(); // tab 누르기
  await user.keyboard(" "); // space 누르기
  await user.keyboard("{Enter}"); // enter 누르기
  expect(btnEl).toHaveTextContent("Logout");
});
