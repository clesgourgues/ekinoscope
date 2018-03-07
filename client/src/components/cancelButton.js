import React from "react";
import FaTimes from 'react-icons/lib/fa/times-circle'

const CancelButton = ({ reset }) => (
        <button onClick={reset}>
            <FaTimes size={16}/>
        </button>
);

export default CancelButton;