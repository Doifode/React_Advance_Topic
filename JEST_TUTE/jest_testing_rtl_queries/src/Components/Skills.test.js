import { render, screen } from "@testing-library/react"
import { Skills } from "./Skills"

describe("test for multipl elemts mpa", () => {
    const list = ['java', 'js', 'html', 'css']
    test.skip("check multiple items", () => {
        render(<Skills skills={list} />)
        const skillselss = screen.getAllByRole("listitem")
        expect(skillselss).toHaveLength(list.length)

        const buttonConndition = screen.getByRole('button', {
            name: "LogIn"
        });
        expect(buttonConndition).toBeInTheDocument();

        const buttonNot = screen.queryByRole('button', {
            name: "Logout"
        })
        expect(buttonNot).not.toBeInTheDocument()


    });
    test('watinng for logout', async () => {
        render(<Skills skills={list} />)
        const button = await screen.findByRole('button', {
            name: 'Logout'
        })
        expect(button).toBeInTheDocument()
        const data = screen.getByRole('button', { name: /logout/i })
        expect(data).toBeInTheDocument()
    })
})