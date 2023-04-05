import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

global.document.createRange = () => ({
  setStart: () => null,
  setEnd: () => null,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.IntersectionObserver = class IntersectionObserver {
  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return null;
  }

  unobserve() {
    return null;
  }
};

// const ResizeObserverMock = vi.fn(() => ({
//   observe: vi.fn(),
//   unobserve: vi.fn(),
//   disconnect: vi.fn(),
// }));

class ResizeObserverMock {
  observe = () => null;

  unobserve = () => null;

  disconnect = () => null;
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock);
