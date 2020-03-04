import React from 'react';

import Plans from './Plans.js';
import Sessions from './Sessions.js';

const Home = (props) => {
    return (
        <div>
            <Plans maxItems="3" />
            <Sessions />
        </div>);
}

export default Home;