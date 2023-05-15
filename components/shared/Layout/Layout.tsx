import { Footer, Navbar } from 'components';
import { LayoutProps } from './types';
import React from 'react';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
