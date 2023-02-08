import React, { Suspense, useState } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '~react-pages';

import logo from './logo.svg';

function App() {
  return (
    <div className="w-full min-h-screen bg-light dark:bg-dark root row">
      <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

export default App;
