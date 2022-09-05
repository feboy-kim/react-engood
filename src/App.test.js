import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe("app test", () => {
  // const navigate = jest.fn()
  test('renders learn react link', () => {
    // const mockedNavigate = jest.fn()
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'),
    //   useNavigate: () => mockedNavigate
    // }))
    render(<BrowserRouter><App /></BrowserRouter>);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
})