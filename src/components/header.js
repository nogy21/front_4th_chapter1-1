import { userStore } from "../store/userStore";

const loginLink = () => `
<a id="login-link" href="/login" data-link>로그인</a>`;

const logoutLink = () => {
  return `
<a id="logout" href="${window.location.hash ? "#/login" : "/login"}" class="text-gray-600">로그아웃</a>`;
};

export const Header = () => {
  const isLoggedIn = userStore.isLoggedIn();
  return `
    <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>
    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li><a href="/" class="text-${isLoggedIn ? "blue" : "black"}-600 ${isLoggedIn && "font-bold"}">홈</a></li>
        <li><a href="/profile" class="text-${isLoggedIn ? "blue" : "black"}-600 ${isLoggedIn && "font-bold"}">프로필</a></li>
        <li>${isLoggedIn ? logoutLink() : loginLink()}</li>
      </ul>
    </nav>
  `;
};
