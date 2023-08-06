import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("checking for the mouse event", () => {
  test('mouse event', () => {
    render(<App />);
    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument()
  })
  test('click', async () => {
     render(<App />);
    const click = screen.getByRole('button', {
      name: "Increment"
    })
    await userEvent.click(click);
    const count = screen.getByRole("heading");
    expect(count).toHaveTextContent("2")
  })
})
