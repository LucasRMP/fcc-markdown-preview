import React from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.css';

function Preview({ source }) {
  return (
    <div className='preview-container'>
      <div id='preview'>
        <ReactMarkdown source={source} escapeHtml={false} />
      </div>
    </div>
  );
}

export default Preview;
