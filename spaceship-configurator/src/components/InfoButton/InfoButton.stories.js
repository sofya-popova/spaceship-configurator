import { InfoButton } from ".";

export default {
  title: "Components/InfoButton",
  component: InfoButton,
  argTypes: {
    stateProp: {
      options: ["active", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "active",
    invert: true,
    className: {},
  },
};
