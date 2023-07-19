import Image from 'next/image';

const Web = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://broken-lazy-docs.vercel.app/" target="_blank" rel="noreferrer"><Image src="/img/thumbnail/web/lazyy.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer transition-base custom-misc-hover">Lazyycss.</span></p>
                    <p className="custom-sub-text ls-0">A design system for my UI designs.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://client-starpanel.vercel.app/" target="_blank" rel="noreferrer"><Image src="/img/thumbnail/web/starpanel.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer transition-base custom-misc-hover">Starpanel</span></p>
                    <p className="custom-sub-text ls-0">An SMM panel for a client.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <a href="https://allensmarketingbots.tech/" target="_blank" rel="noreferrer"><Image src="/img/thumbnail/web/allen.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></a>
                    <p className="custom-text font-lg fw-md pt-1"><span className="pointer transition-base custom-misc-hover">{`Allen's Bots`}</span></p>
                    <p className="custom-sub-text ls-0">An E-Commerce site for a client.</p>
                </div>
            </div>
        </>
    );
}
 
export default Web;