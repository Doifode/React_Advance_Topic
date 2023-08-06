import { render, screen } from '@testing-library/react';
import App from './App';

describe.skip("Checking for form", () => {
  test('renders learn react link', () => {
    render(<App />);

    const linkElement = screen.getByRole("checkbox");
    expect(linkElement).toBeInTheDocument();

    const combobox = screen.getByRole("combobox");
    expect(combobox).toBeInTheDocument();

    const inputBox = screen.getByRole("textbox", {
      name: "Name"
    });
    expect(inputBox).toBeInTheDocument();

    const Surname = screen.getByRole("textbox", {
      name: "Surname"
    });
    expect(Surname).toBeInTheDocument();

    const buttonss = screen.getByRole('button');
    expect(buttonss).toBeInTheDocument()


    const heading = screen.getByRole('heading', {
      name: "Apply For Job"
    });
    expect(heading).toBeInTheDocument()
    const headinglevel = screen.getByRole('heading', {
      level: 2
    })
    expect(headinglevel).toBeInTheDocument()

    const getByLabeltext = screen.getByLabelText("Name");
    expect(getByLabeltext).toBeInTheDocument()

    const getByplaceholders = screen.getByPlaceholderText("Please enter Name")
    expect(getByplaceholders).toBeInTheDocument()
    const getBytextonly = screen.getByText("Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus quisquam fugit iusto. Fugiat sequi, qui sapiente vitae ut, nemo repellendus ullam amet quasi quisquam molestias veniam atque reprehenderit enim.");
    expect(getBytextonly).toBeInTheDocument()

    const getBydisplayValue = screen.getByDisplayValue('yash');
    expect(getBydisplayValue).toBeInTheDocument()

    const altText = screen.getByAltText('imagePro');
    expect(altText).toBeInTheDocument()

    const getbytitle = screen.getByTitle('spanTag');
    expect(getbytitle).toBeInTheDocument()

    const dataidtest = screen.getByTestId('dataidtest');
    expect(dataidtest).toBeInTheDocument()
    


  })

})
