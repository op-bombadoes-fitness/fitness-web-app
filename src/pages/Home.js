import React from 'react';

import Plans from './Plans.js';
import Sessions from './Sessions.js';
import ContainerSeparator from '../components/ContainerSeparator.js';

const Home = (props) => {
    return (
        <div>
            <Plans maxItems="3" />
            <ContainerSeparator />
            <Sessions />
        </div>);
}

export default Home;