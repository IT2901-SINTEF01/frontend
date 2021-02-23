import React from 'react';
import { render } from 'react-dom';

import Dashboard from './components/organisms/Dashboard';
import { generateRandomList } from './stories/Dashboard.stories';

import './index.css';

render(<Dashboard items={generateRandomList(5)} />, document.getElementById('root'));
