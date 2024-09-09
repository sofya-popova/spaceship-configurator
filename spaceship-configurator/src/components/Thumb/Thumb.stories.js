import { Thumb } from ".";

export default {
  title: "Components/Thumb",
  component: Thumb,
  argTypes: {
    state: {
      options: ["focus", "hover", "active", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "focus",
    className: {},
  },
};
