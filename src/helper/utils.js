import { createAnimation } from "@ionic/vue";

const customPopAnimation = (baseEl, opts) => {
  return createAnimation()
    .addElement(baseEl)
    .duration(200)
    .easing("ease-out")
    .fromTo("opacity", "1", "0")
    .fromTo("transform", "scale(1)", "scale(0.8)");
};

export { customPopAnimation };
