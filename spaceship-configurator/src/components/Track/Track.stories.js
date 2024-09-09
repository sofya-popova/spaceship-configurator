import { Track } from ".";

export default {
  title: "Components/Track",
  component: Track,
  argTypes: {
    position: {
      options: ["fifty", "zero", "one-hundred"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    position: "fifty",
    scale: true,
    className: {},
    scaleText: "0",
    scaleText1: "100",
    thumbStateDefaultClassName: {},
  },
};
