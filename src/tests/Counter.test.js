// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  //render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  //render(<Counter />);
  const countShow = screen.getByTestId("count"); 
  expect(countShow.textContent).toBe("0"); 


});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
    //render(<Counter />);
    const countShow1 = screen.getByTestId("count"); 
    const increment = screen.getByText("+"); 
    fireEvent.click(increment); 
    expect(countShow1.textContent).toBe("1"); 
  });

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    //render(<Counter />);
    const countShow2 = screen.getByTestId("count"); 
    const decrement = screen.getByText("-"); 
    fireEvent.click(decrement); 
    expect(countShow2.textContent).toBe("-1"); 
});
