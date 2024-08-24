import React, { useEffect, useState } from 'react';

const Toaster = () => {
    const [toasts, setToasts] = useState([]);

    const handleToster = () => {
        setToasts(prevToasts => [
            ...prevToasts,
            { visible: true, id: Date.now() }
        ]);
    };

    const handleClose = (id) => {
        setToasts(prevToasts =>
            prevToasts.map(toast =>
                toast.id === id ? { ...toast, visible: false } : toast
            )
        );
    };

    useEffect(() => {
        // Set up timers for each visible toast
        const timers = toasts
            .filter(toast => toast.visible) // Only set timers for visible toasts
            .map(toast =>
                setTimeout(() => {
                    handleClose(toast.id);
                }, 3000)
            );

        // Cleanup function to clear timers when component unmounts or toasts change
        return () => timers.forEach(clearTimeout);
    }, [toasts]);

    return (
        <div className="relative">
            {toasts
                .filter(toast => toast.visible) // Only render visible toasts
                .map((toast, index) => (
                    <div
                        key={toast.id}
                        className="bg-green-600 text-white p-2 mb-2 absolute"
                        style={{ top: `${index * 60}px`, right: '0' }}
                    >
                        Hello I am Toaster
                    </div>
                ))}
            
            <button
                onClick={handleToster}
                className="bg-red-600 m-1 p-1 text-white"
            >
                Show Toaster
            </button>
        </div>
    );
};

export default Toaster;
