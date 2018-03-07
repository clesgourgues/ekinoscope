import React from 'react';
import { greatstyles } from './great_style.js';

const Great = ({ text }) => (
    <div style={greatstyles}>
        {text}
    </div>
);


export default Great