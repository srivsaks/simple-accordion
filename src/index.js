import "./styles.css";
import Accordion from "./accordion";

const accordionEles = document.querySelectorAll("#accordion");
accordionEles.forEach((accordion) => {
  const accord = new Accordion(accordion);
  accord.init();
});
