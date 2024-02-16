import { Routes, Route } from "react-router-dom";

import { SortProvider } from "./context/Sort";
import { Wrapper } from "./components/Wrapper";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Albums } from "./pages/Albums";

export function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
          <Route index element={
            <SortProvider>
              <Home />
            </SortProvider>
          } />
        <Route path="favorites" element={<Favorites />} />
        <Route path="albums" element={<Albums />} />
      </Route>
    </Routes>
  )
}