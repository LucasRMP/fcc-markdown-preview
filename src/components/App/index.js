import React, { useEffect, useState } from 'react';

import Input from '../Input';
import Menu from '../Menu';
import Preview from '../Preview';

import './styles.css';

function App() {
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(input);
  }, [input]);

  return (
    <div className='App'>
      <Input setInput={setInput} />
      <Menu />
      <Preview source={input} />
    </div>
  );
}

export default App;
