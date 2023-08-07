import React from "react";

const MyPage = ({ user }) => {
  return (
    <div>
      {user && user.name ? (
        <h1>{user.name}님 환영합니다.</h1>
      ) : (
        <h1>
          로그인을 해주세요.<button>Login</button>
        </h1>
      )}
      <div>
        <div>
          <label htmlFor="username">이름</label>
          <input type="text" id="username" value="Tom" readOnly />
        </div>
        <div data-testid="my-div" />
        <div>
          <label htmlFor="profile">자기소개</label>
          <textarea id="profile" />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
