import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
    title: "Arun/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    disabled: false,
    text: "Primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    disabled: false,
    text: "Secondary"
};

export const Disabled = Template.bind({});
Disabled.args = {
    primary: false,
    disabled: true,
    text: "Disabled"
};

export const Small = Template.bind({});
Small.args = {
    primary: true,
    disabled: false,
    text: "Small",
    size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
    primary: true,
    disabled: false,
    text: "Medium",
    size: "medium",
};

export const Large = Template.bind({});
Large.args = {
    primary: true,
    disabled: false,
    text: "Large",
    size: "large",
};