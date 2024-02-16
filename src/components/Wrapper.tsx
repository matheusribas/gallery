import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Wrapper() {
  return (
    <div className="min-h-screen font-nunito dark:bg-slate-900 bg-slate-100 dark:text-slate-100 text-slate-900">
      <Header />
      <main className="w-full max-w-[90rem] mx-auto">
        <Outlet />
      </main>
    </div>
  )
}