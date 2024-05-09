// hooks/useClickOutside.ts
import { RefObject, useEffect } from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {
        const listener = (event: Event) => {
            if (!ref.current || !event.target || !(event.target as Node).isConnected) return;
            if (ref.current.contains(event.target as Node)) return;

            handler();
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}

export default useClickOutside;
