import Head from 'next/head'
import Image from 'next/image'

const fabiconv2 = () => {
    return (
        <>
            <Head>
                <title>Broken - Fabicon V2</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Fabicon V2" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Fabicon V2" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714804769?h=ab587a2bc6" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Fabicon V2</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>My second entry for Fabicon.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>My first Fabicon submission left me unsatisfied. So I decided to create a second submission. This time, I decided to attempt 3D for the first time. I utilized the cinema 4d renderer that comes with after effects.</p>
                        <video src="/img/fabiconv2/opening.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-4"></video>
                        <p className='custom-text font-lg mt-2'>{`This was one of my very first designs. I just wanted it to look good. I didn't think about the smoothness. That was a major oversight on my part, and the sequences were out of rhythm.`}</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-lg col-12-xs">
                                <Image src="/img/fabiconv2/cam-right.png" width={1920} height={1080} className="thumb-cover br-base" alt='camera-right' />
                            </div>
                            <div className="col-6-lg col-12-xs">
                                <Image src="/img/fabiconv2/cam-left.png" width={1920} height={1080} className="thumb-cover br-base" alt='camera-left' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default fabiconv2;