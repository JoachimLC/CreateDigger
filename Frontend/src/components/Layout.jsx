import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
