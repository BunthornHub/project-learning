import React from "react";
import Button from "@atoms/Button/Button";
import { action } from "@storybook/addon-actions";
import { FiThumbsUp } from "react-icons/fi";
import { FaExchangeAlt } from "react-icons/fa";

export default {
  title: "components/atoms/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
    disabled: { control: "boolean" },
    className: { control: "text" },
    icon: { control: "text" },
    onClick: { action: "clicked" },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Click Me",
  onClick: action("button-click"),
  type: "button",
  disabled: false,
  className: "",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Like",
  onClick: action("button-click"),
  type: "button",
  disabled: false,
  className: "",
  icon: <FiThumbsUp />,
};

export const ChangeBg = Template.bind({});
ChangeBg.args = {
  label: "Change Bg",
  onClick: action("button-click"),
  type: "button",
  disabled: false,
  className: [
    "bg-blue-500 text-white",
    "bg-green-500 text-black",
    "bg-red-500 text-white",
    "bg-yellow-500 text-gray-900",
    "p-[100px]",
  ],
  icon: <FaExchangeAlt />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  onClick: action("button-click"),
  type: "button",
  disabled: true,
  className: "",
};
