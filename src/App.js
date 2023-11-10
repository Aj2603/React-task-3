import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33'];

  return (
    <div>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;