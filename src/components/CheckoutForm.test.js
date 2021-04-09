import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstName = screen.getByLabelText("First Name:");
    userEvent.type(firstName, "Ryan");

    const lastName = screen.getByLabelText("Last Name:");
    userEvent.type(lastName, "Ishimaru");

    const address = screen.getByLabelText("Address:");
    userEvent.type(address, "123 Address");

    const city = screen.getByLabelText("City:");
    userEvent.type(city, "Torrance");

    const zip = screen.getByLabelText("Zip:");
    userEvent.type(zip, "90505");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const success = screen.queryByText(/Plants have been ordered./i);
    expect(success).toBeInTheDocument();
});
