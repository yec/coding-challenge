import React, { lazy, Suspense } from 'react';

const Front = lazy(() => import('./Front'));

function Logo() {
  return <div style={{
    display: 'flex',
    fontSize: 60,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  }}>
    <div>StreamCo</div>
  </div>
}

function App() {
  return (
    <Suspense fallback={<Logo />}>
      <Front />
    </Suspense>
  );
}

export default App;
