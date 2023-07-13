import React, { useEffect } from 'react';

function PreventURLMatch() {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            // Check if the current URL is different from the original URL
            if (window.location.href !== window.location.origin ) {
                event.preventDefault(); // Cancel the unload event
                event.returnValue = ''; // For older browsers
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <></>);
}

export default PreventURLMatch;
