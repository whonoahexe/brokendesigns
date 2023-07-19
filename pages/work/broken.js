import Head from 'next/head'
import Image from 'next/image'
import {useRef, useState, useEffect} from 'react'
// animation
import Logo from '../../public/logo.json';
import Lottie from "lottie-react";

const Broken = () => {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const titleRef = useRef(null);

    useEffect(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        const onScroll = () => {
            titleRef.current.style.transform = `translateX(-${window.pageYOffset}px)`
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Broken - Branding</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Branding" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Branding" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div className="lottie-container">
                <Lottie animationData={Logo} loop={true} autoplay={true} width={width} height={height} />
            </div>
            <div className='mt-6'>
                <div ref={titleRef} className='md-display-f xs-display-n justify-between mt-6'>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>.</p>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>BROKEN.</p>
                </div>
                <div className='work-container pb-4'>
                    <p className='custom-text font-xl font-f-code text-uppercase mt-6'>who am I?</p>
                    <p className='custom-text font-lg mt-2'>{`Noah here. An 18-year-old motion, graphic, and web designer. I like perfecting things by devoting more time to them.`}</p>
                    <div className='mt-4'>
                        <p className='custom-text font-lg font-f-code'>{`I basically love the idea of a consistent system and a sense of control. This is one of the reasons why I took branding a little bit seriously.`}</p>
                        <div className='mt-4'>
                            <p className='custom-text fw-md font-lg font-f-code'>{`I did some research and came up with these briefings.`}</p>
                            <p className='custom-sub-text font-lg font-f-code mt-2'>{`1. How can I develop a flexible identity that reflects the breadth of my personality as well as the depth of my work?`}</p>
                            <p className='custom-sub-text font-lg font-f-code mt-2'>{`2. How can I make my branding consistent through out my entire work-around?`}</p>
                            <p className='custom-sub-text font-lg font-f-code mt-2'>{`3. How can this bring a new perception of my capabilities?`}</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <p className='custom-text lg-font-xl-2 xs-font-xl fw-bold font-f-code'>Exploration Process</p>
                        <div className='mt-4'>
                            <p className='custom-text font-xl fw-md font-f-code'>Color palette</p>
                            <p className='custom-text font-lg font-f-code mt-4'>{`Looking at colors, I wanted to see how I utilized them on my work, and I used a lot of them. That didn't help much. So I came up with some base colors.`}</p>
                            <div className='mt-4'>
                                <Image src="/img/broken/palette.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='custom-text font-xl fw-md font-f-code'>Logo breakdown</p>
                            <p className='custom-text font-lg font-f-code mt-4'>{`This logo sends the message that I'm "OK" on the exterior but "broken" on the inside. As a visual depiction of the brand name Broken, the logo has broken parts represented by strips. The only thing that makes me happy is my work which completely changes my mind after a deep depression. Flow is a state when one is fully immersed in activities. The struggle between each and every night. Dark Themed to indicate depression.`}</p>
                        </div>
                        <div className='mt-4'>
                            <Image src="/img/broken/logo.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                            <p className='custom-text font-lg font-f-code mt-4'>{`This visual identity conveys chaos and uncertainty to further explain the sensation "BROKEN.”`}</p>
                            <video src="/img/broken/banner.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-4"></video>
                        </div>
                        <div className='mt-4'>
                            <p className='custom-text font-xl fw-md font-f-code'>Website</p>
                            <p className='custom-text font-lg font-f-code mt-4'>{`Every artist must've gone through this question at least once in their life. Do I need a website? For me, The answer was YES. By this I can take control of the way I show my work to the client as I want.`}</p>
                            <div className='mt-4'>
                                <Image src="/img/broken/landing.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p className='custom-text font-xl fw-md font-f-code'>Type</p>
                            <p className='custom-text font-lg font-f-code mt-4'>{`I chose Product sans, because it is a professional typeface and used by Google.`}</p>
                            <div className='mt-4'>
                                <Image src="/img/broken/typo.png" width={1920} height={500} className="thumb-cover br-base" alt='branding' />
                            </div>
                            <p className='custom-text font-lg font-f-code mt-4'>{`In the end, I had gotten myself a brand that really feels like me and by me.`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Broken;