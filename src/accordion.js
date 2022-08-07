class Accordion {
  constructor(accordionContainer) {
    this.accordionContainer = accordionContainer;
    this.trigger = accordionContainer.querySelector(".trigger");
    this.content = accordionContainer.querySelector(".content");
  }
  init() {
    this.trigger.addEventListener("click", (e) => {
      this.content.classList.toggle("hide");
      //this.trigger.classList.toggle("hide");
      /*if (this.content.classList.contains("hide")) {
        this.content.classList.toggle("expand");
        this.content.classList.remove("hide");
      } else {
        this.content.classList.add("hide");
        this.content.classList.remove("expand");
      }*/
    });
  }
}
export default Accordion;
