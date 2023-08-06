import { render, screen } from '@testing-library/react';
import App from './App';

xit('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* 

Test function takes the three arguments as following
first  = The test name used to identify the test 
second = The  second  argument supposed to be function  that return the expected output

*/