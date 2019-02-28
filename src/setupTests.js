// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from 'enzyme-adapter-react-16';

// Configure Enzyme.
configure({ adapter: new Adapter() });

// Setup global mocks.

// Mock window.matchMedia() method.
global.matchMedia = global.matchMedia || jest.fn().mockImplementation(query => ({
  matches: true,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
