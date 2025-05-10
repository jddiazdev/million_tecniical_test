import {render} from '@testing-library/react-native';
import App from '../src/App';

jest.mock('../src/navigation', () => {
  return () => <></>;
});

describe('App', () => {
  it('renders without crashing', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toBeTruthy();
  });
});
