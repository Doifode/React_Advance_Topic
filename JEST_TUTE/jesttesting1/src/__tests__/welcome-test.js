// import { render, screen } from "@testing-library/react";
// import { Welcome } from "./Welcome";
// test("welcome component", () => {
//     render(<Welcome />)
//     const text = screen.getByText(/welcome/i);
//     expect(text).toBeInTheDocument()
// })

// import { render, screen } from "@testing-library/react"
// import { Welcome } from "./Welcome"

// test("Test for welcome component", () => {
//     render(<Welcome />)
//     const text = screen.getByText("Welcome");
//     expect(text).toBeInTheDocument()
// })
// test.skip('For name Yash', () => {
//     render(<Welcome name="yash" />)
//     const text = screen.getByText(/welcome yash/i);
//     expect(text).toBeInTheDocument()
// })
// test.only('For name Yash only', () => {
//     render(<Welcome name="yash" />)
//     const text = screen.getByText(/welcome yash/i);
//     expect(text).toBeInTheDocument()
// })

import { render, screen } from "@testing-library/react";
import { Welcome } from "../Components/Welcome";
describe("Welcome", () => {

    test('welcome group', () => {
        render(<Welcome />)
        const text = screen.getByText(/Welcome/i);
        expect(text).toBeInTheDocument();
    })

    // describe("Child", () => {
    //     test('welcome group', () => {
    //         render(<Welcome/>)
    //         const text = screen.getByText("Welcome yash");
    //         expect(text).toBeInTheDocument();
    //     })
    // })
})
