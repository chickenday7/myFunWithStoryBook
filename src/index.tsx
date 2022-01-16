import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {AccordionContainer} from "./Accordion /AccordionContainer";
import {MySelect} from "./Select/MySelect";

ReactDOM.render(
  <React.StrictMode>
    <AccordionContainer/>
      <MySelect />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
