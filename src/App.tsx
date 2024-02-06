import { ThemeProvider } from "@/components/theme-provider"
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from "./components/Header"
import Component from "@/components/component.tsx";

function App() {
  return (
  <ParallaxProvider>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header/>
      <Component/>
    </ThemeProvider>
  </ParallaxProvider>
  )
}

export default App
