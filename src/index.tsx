import React from 'react';
import { render } from 'react-dom';

import Dashboard from './components/organisms/Dashboard';
import { generateRandomList } from './utils/dashboardList';

import './index.css';

render(<Dashboard items={generateRandomList(5)} />, document.getElementById('root'));
