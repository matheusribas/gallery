import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Wrapper() {
  return (
    <div className="h-screen dark:bg-slate-900 bg-slate-100 flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  )
}