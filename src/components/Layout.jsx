import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout({ loaded }) {
  return (
    <div>
      <Header />
      {!loaded ? <p>로딩 중...</p> : <Outlet />}
    </div>
  );
}
