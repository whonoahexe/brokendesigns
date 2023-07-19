import Head from 'next/head'
import Image from 'next/image'

const vincenzo = () => {
    return (
        <>
            <Head>
                <title>Broken - Stream Package for Vincenzo</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Vincenzo" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Vincenzo" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714805569?h=c4425210e9" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Vincezo Stream Package</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A fan made stream package for Vincenzo.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I, personally, am a big fan of Vincenzo and his gameplay. I used to watch his streams on Youtube, but when he switched over to Twitch, he didn't use any stream assets.`}</p>
                        <p className='custom-text font-lg mt-2'>Vincenzo:</p>
                        <div className="display-f justify-center mt-2">
                            <button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'><a href="https://www.youtube.com/c/Vincenzo74/" target="_blank" rel="noreferrer" className='custom-color'><span className='custom-text'>Click here</span></a></button>
                        </div>
                        <p className='custom-text font-lg mt-4'>The idea was to use the colors red and black as a representation of his brand.</p>
                        <div className='mt-4'>
                            <Image src="/img/vincenzo/branding.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                        </div>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/vincenzo/text-animation.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/vincenzo/break.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                        <p className='custom-text font-lg mt-2'>Watch the full version here:</p>
                        <div className="display-f justify-center mt-2">
                            <button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'><a href="https://youtu.be/LaqfrhkjPP0" target="_blank" rel="noreferrer" className='custom-color'><span className='custom-text'>Click here</span></a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default vincenzo;