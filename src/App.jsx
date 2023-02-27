import { useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import HorizontalAnimation from "./pages/HorizontalAnimation";
import "./App.css";

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    (function correctVhWindow() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    })();
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        tablet: { smooth: true },
        smartphone: { smooth: true },
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        <section data-scroll-section>
          <h1 data-scroll>Hey</h1>
          <p data-scroll>👋</p>
        </section>
        <section data-scroll-section>
          <h2 data-scroll data-scroll-speed="1">
            What's up?
          </h2>
          <p data-scroll data-scroll-speed="2">
            😬
          </p>
        </section>
        <HorizontalAnimation />
        <section data-scroll-section></section>
        <section data-scroll-section></section>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
