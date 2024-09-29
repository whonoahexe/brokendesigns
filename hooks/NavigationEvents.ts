'use client';
 
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import nProgress from 'nprogress';
 
export const NavigationEvents = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    nProgress.configure({ showSpinner: false });
    nProgress.start();
    
    useEffect(() => {
        nProgress.done();
    }, [pathname, searchParams]);

    return null;
}
