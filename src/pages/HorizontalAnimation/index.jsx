import { useLayoutEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import css from "./horizontalAnimation.module.scss";

const HorizontalAnimation = () => {
  const horizontalSectionRef = useRef(null);
  const horizontalContainerRef = useRef(null);

  const { scroll } = useLocomotiveScroll();

  useLayoutEffect(() => {
    const element = horizontalSectionRef?.current;
    const scrollingElement = horizontalContainerRef?.current;

    function changesElementHeight() {
      element.style.height = scrollingElement.scrollWidth + "px";
      scroll?.update();
    }

    setTimeout(() => {
      changesElementHeight();
    }, 1000);

    return () => {
      delete changesElementHeight();
    };
  }, [scroll]);

  return (
    <section data-scroll-section className={css.horizontalSection} id="fixed-elements" ref={horizontalSectionRef}>
      <div data-scroll data-scroll-sticky data-scroll-target="#fixed-elements" className={css.horizontalContainer} ref={horizontalContainerRef}>
        <div
          className={css.horizontalBlock}
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="7"
          data-scroll-target="#fixed-elements"
        >
          <h2>horizontal section</h2>
          <h2>horizontal section</h2>
          <h2>horizontal section</h2>
        </div>
      </div>
    </section>
  );
};

export default HorizontalAnimation;
