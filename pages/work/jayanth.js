import Head from 'next/head'
import Image from 'next/image'

const jayanth = () => {
    return (
        <>
            <Head>
                <title>Broken - Jayanth Hedge Kageri</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Jayanth Hedge Kageri" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Jayanth Hedge Kageri" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714806007?h=bfcc63fc40" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Jayanth Kageri</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A promo for a client.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>He wanted a straightforward advertisement that would convey both his brand and his coding abilities. He granted me complete creative freedom over the design, soundtrack, and animation.</p>
                        <p className='custom-text font-xl fw-md mt-4'>Design Approach</p>
                        <p className='custom-text font-lg mt-2'>Throughout the animation, I aimed to give it a design that was intricate and edgy.</p>
                        <div className="row gap-2 mt-4">
                            <div className="col-6-xl col-12-xs">
                                <Image src="/img/jayanth/tag.png" width={1920} height={1080} className="thumb-cover br-base" alt='tag' />
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/jayanth/complex.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/jayanth/grid.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/jayanth/decoding.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default jayanth;