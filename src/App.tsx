import { Layout } from "./components/Layout";
import { ThemeProvider } from "./context/Theme";
import { RoutesProvider } from "./routes";

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <RoutesProvider />
      </Layout>
    </ThemeProvider>
  )
}