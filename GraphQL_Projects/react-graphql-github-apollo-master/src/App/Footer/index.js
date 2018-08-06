import React from 'react';

import Link from '../../Link';

import './style.css';

const Footer = () => (
  <div className="Footer">
    <div>
      <small>
        <span className="Footer-text">Built by</span>{' '}
        <Link
          className="Footer-link"
          href="https://www.linkedin.com/in/tarik-en-nakdi-88414131/"
        >
          Tarik En-Nakdi
        </Link>{' '}
        <span className="Footer-text">with &hearts;</span>
      </small>
    </div>
    <div>
      <small>
        <span className="Footer-text">
          React, GraphQL, Apollo
        </span>{' '}
        <Link
          className="Footer-link"
          href="https://www.linkedin.com/in/tarik-en-nakdi-88414131/"
        >
          Get updates
        </Link>{' '}
        <span className="Footer-text">
          github official page
        </span>{' '}
        <Link className="Footer-link" href="https://github.com">
          courses
        </Link>
        <span className="Footer-text">.</span>
      </small>
    </div>
  </div>
);

export default Footer;
