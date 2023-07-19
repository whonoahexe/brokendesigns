import Link from 'next/link';
import Image from 'next/image';

const Animation = () => {
    return (
        <>
            <div className="row gap-2 mt-2">
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/reel2021"><Image src="/img/thumbnail/motion/reel.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/reel2021"><span className='pointer transition-base custom-misc-hover'>2021 Reel</span></Link></p>
                    <p className="custom-sub-text ls-0">A showcase of my motion design in 2021.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/promo3d"><Image src="/img/thumbnail/motion/3d-promo.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/promo3d"><span className='pointer transition-base custom-misc-hover'>3d Promo</span></Link></p>
                    <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/dcoderz"><Image src="/img/thumbnail/motion/dcoderz.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer transition-base custom-misc-hover'>Team Dcoderz</span></Link></p>
                    <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/notifications"><Image src="/img/thumbnail/motion/noti.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer transition-base custom-misc-hover'>Notifications</span></Link></p>
                    <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/valentine"><Image src="/img/thumbnail/motion/valentine.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/valentine"><span className='pointer transition-base custom-misc-hover'>Valentine</span></Link></p>
                    <p className="custom-sub-text ls-0">{`A little gif I made for valentine's day.`}</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/soon"><Image src="/img/thumbnail/motion/soon.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/soon"><span className='pointer transition-base custom-misc-hover'>Soon</span></Link></p>
                    <p className="custom-sub-text ls-0">Idk i just did something.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv2"><Image src="/img/thumbnail/motion/fabicon-v2.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv2"><span className='pointer transition-base custom-misc-hover'>Fabicon V2</span></Link></p>
                    <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/fabiconv1"><Image src="/img/thumbnail/motion/fabicon-v1.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv1"><span className='pointer transition-base custom-misc-hover'>Fabicon V1</span></Link></p>
                    <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/vincenzo"><Image src="/img/thumbnail/motion/vincenzo.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/vincenzo"><span className='pointer transition-base custom-misc-hover'>Vincenzo</span></Link></p>
                    <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                </div>
                <div className="col-4-xl col-6-lg col-12-xs">
                    <Link href="/work/jayanth"><Image src="/img/thumbnail/motion/jayanth.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                    <p className='custom-text font-lg fw-md pt-1'><Link href="/work/jayanth"><span className='pointer transition-base custom-misc-hover'>Jayanth</span></Link></p>
                    <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                </div>
            </div>
        </>
    );
}
 
export default Animation;