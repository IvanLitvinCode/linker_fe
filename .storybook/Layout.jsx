import * as React from 'react';
import '../src/index.css';
import 'neuicons';
import 'focus-visible';

const Layout = ({ children }) => {
  return <div className='px-2 py-10'>{children}</div>;
};

export default Layout;
