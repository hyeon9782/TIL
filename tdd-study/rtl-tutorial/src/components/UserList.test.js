import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];

  test("잠시 후 제목이 나타납니다.", async () => {
    render(<UserList users={users} />);
    // screen.debug();
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 2000, // 몇 초까지 기다릴 것인지
      }
    );
    // screen.debug();
    expect(titleEl).toBeInTheDocument();
  });

  test("ul 이 있다.", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={users} />);
    const ulEls = screen.getAllByRole("listitem");
    expect(ulEls).toHaveLength(3);
  });
});
