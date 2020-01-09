import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import { faEraser } from '@fortawesome/free-solid-svg-icons';

function Input({ setInput }) {
  const [text, setText] = useState(
    '# Header\n\n## Sub header\n\n[Repo](https://github.com/LucasRMP/fcc-markdown-preview)\n\n- List 1\n- List 2\n\n> Blockquote\n\n![image](http://placekitten.com/200/300)\n\n**Bolded text**\n\n'
  );

  useEffect(() => {
    setInput(text);
  }, [setInput, text]);

  return (
    <div className='input-container'>
      <textarea
        id='editor'
        value={text}
        onChange={e => setText(e.target.value)}
        spellCheck={false}
      />

      <button id='clear-btn' onClick={() => setText('')}>
        <FontAwesomeIcon icon={faEraser} size='2x' />
      </button>
    </div>
  );
}

export default Input;
