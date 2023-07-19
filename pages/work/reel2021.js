import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
// components
import Footer from '../../components/Footer';

const reel2021 = () => {
    return (
        <>
            <Head>
                <title>Broken - Reel 2021</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Reel 2021" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Reel 2021" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/661701340?h=66450442bc" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='lg-font-xl xs-font-lg fw-bold custom-text'>2021 Reel</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-sub-text lg-font-xl xs-font-lg'>A showcase of my motion design in 2021.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text lg-font-lg xs-font-md'>{`Here's my most recent reel, which features some of my favorite work from the previous year. Some of these animations may be seen below.`}</p>
                        <div className="row mt-4 align-i-center">
                            <div className="col-6-xs">
                                <p className='font-xl fw-bold custom-text'>From The Start</p>
                            </div>
                            <div className="col-6-xs">
                                <p className='custom-sub-text lg-font-lg xs-font-md'>{`I began working on this reel in late December. I didn't have much time to complete it since I was preoccupied with my studies. I just had a few days to get started, and I wanted to make a big impression right away at the beginning.`}</p>
                                <p className='custom-sub-text pt-3 lg-font-lg xs-font-md'>{`Music Used: Batshit - Sofi Tukker`}</p>
                            </div>
                        </div>
                        
                        <div>
                            <video src="/img/2021reel/intro.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-4"></video>
                        </div>
                        <p className='custom-text font-lg mt-2'>Some of the projects were left out since they are not portfolio-worthy.</p>
                    </div>
                    <div className="row gap-2 mt-2">
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/selfpromo"><Image src="/img/thumbnail/motion/3d-promo.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/selfpromo"><span className='pointer custom-misc-hover'>3d Promo</span></Link></p>
                            <p className="custom-sub-text ls-0">A 3d Promo created within After effects.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/dcoderz"><Image src="/img/thumbnail/motion/dcoderz.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/dcoderz"><span className='pointer custom-misc-hover'>Team Dcoderz</span></Link></p>
                            <p className="custom-sub-text ls-0">Video profile for Team Dcoderz</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/notifications"><Image src="/img/thumbnail/motion/noti.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/notifications"><span className='pointer custom-misc-hover'>Notifications</span></Link></p>
                            <p className="custom-sub-text ls-0">Turn on your notifications!!</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/fabiconv2"><Image src="/img/thumbnail/motion/fabicon-v2.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv2"><span className='pointer custom-misc-hover'>Fabicon V2</span></Link></p>
                            <p className="custom-sub-text ls-0">My second entry for Fabicon contest.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/fabiconv1"><Image src="/img/thumbnail/motion/fabicon-v1.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/fabiconv1"><span className='pointer custom-misc-hover'>Fabicon V1</span></Link></p>
                            <p className="custom-sub-text ls-0">My first entry for Fabicon contest.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/vincenzo"><Image src="/img/thumbnail/motion/vincenzo.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/vincenzo"><span className='pointer custom-misc-hover'>Vincenzo</span></Link></p>
                            <p className="custom-sub-text ls-0">A stream package for Vincenzo.</p>
                        </div>
                        <div className="col-4-xl col-6-lg col-12-xs">
                            <Link href="/work/jayanth"><Image src="/img/thumbnail/motion/jayanth.png" width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
                            <p className='custom-text font-lg fw-md pt-1'><Link href="/work/jayanth"><span className='pointer custom-misc-hover'>Jayanth</span></Link></p>
                            <p className="custom-sub-text ls-0">Promo for client Jayanth.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <Footer />
            </div>
        </>
    );
}
 
export default reel2021;