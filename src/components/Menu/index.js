import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

function Menu() {
  return (
    <div id='menu-container'>
      <span id='app-icon'>
        <FontAwesomeIcon id='first' icon={faMarkdown} color='#fff' size='3x' />
        <FontAwesomeIcon id='second' icon={faEye} color='#fff' size='3x' />
      </span>

      {/* Content */}

      <h1 id='company-icon'>RMP</h1>
    </div>
  );
}

export default Menu;
