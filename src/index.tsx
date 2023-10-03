import React, {ReactElement} from 'react';
import {createRoot, Root} from 'react-dom/client';
import App from "./App";
let root:HTMLElement = document.getElementById('root') as HTMLElement;
const element:Root = createRoot(root);
element.render(<App/>)