import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("running test for button component", () => {
    test("check disabled button", () => {
        render(<Button text="Disabled" disabled />);
        expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
    });
});