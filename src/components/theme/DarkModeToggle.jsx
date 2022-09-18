import React from 'react';

import "./toggle.scss"

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
    const darkMode = useDarkMode(false);

    return (
        <div id="mode-toggler" className="dark-mode-toggle">

            <Toggle className="bg-gray-800" checked={darkMode.value} onChange={darkMode.toggle} />

        </div>
    );
};

export default DarkModeToggle;
