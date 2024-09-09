import { TrackBar } from ".";

export default {
  title: "Components/TrackBar",
  component: TrackBar,
  argTypes: {
    value: {
      options: ["filled", "empty"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    value: "filled",
    className: {},
    trackClassName: {},
  },
};
