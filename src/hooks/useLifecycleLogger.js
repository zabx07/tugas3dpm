import { useEffect } from 'react';

const useLifecycleLogger = (componentName) => {
    useEffect(() => {
        console.log(`${componentName} mounted`);
        return () => {
            console.log(`${componentName} unmounted`);
        };
    }, [componentName]);
};

export default useLifecycleLogger;