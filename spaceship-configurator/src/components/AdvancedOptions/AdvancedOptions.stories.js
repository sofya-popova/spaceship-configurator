import { AdvancedOptions } from ".";

export default {
  title: "Components/AdvancedOptions",
  component: AdvancedOptions,
  argTypes: {
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected",
    mobile: true,
    className: {},
    polygon: "/img/polygon-3-8.svg",
    img: "/img/polygon-3-8.svg",
    polygon1: "/img/polygon-3-11.svg",
    text: "Air conditioning",
    text1: "Cloth seats",
    text2: "FM radio",
  },
};
