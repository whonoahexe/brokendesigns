import Link from 'next/link';
import Image from 'next/image';

const Graphic = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/broken"><Image src="/img/thumbnail/graphic/brand.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className="custom-text font-lg fw-md pt-1"><Link href="/work/broken"><span className="pointer transition-base custom-misc-hover">Broken - Brand</span></Link></p>
                    <p className="custom-sub-text ls-0">Brand Identity for myself.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/noah"><Image src="/img/thumbnail/graphic/noah.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className="custom-text font-lg fw-md pt-1"><Link href="/work/noah"><span className="pointer transition-base custom-misc-hover">Noah - Identity</span></Link></p>
                    <p className="custom-sub-text ls-0">Personal Identity for myself.</p>
                </div>
            </div>
        </>
    );
}
 
export default Graphic;