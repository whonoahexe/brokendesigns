import Head from 'next/head'
// components
import Navbar from '../../components/Navbar';

const soon = () => {
    return (
        <>
            <Head>
                <title>Broken - Soon</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Soon" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Soon" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714804441?h=ad52aa6288" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Soon</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>{`Excitement for something incredible.`}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-xl fw-md'>Behind the scenes</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/soon/wireframe.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                                <p className='custom-sub-text fw-md'>wireframe</p>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/soon/intro.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                                <p className='custom-sub-text fw-md'>standard</p>
                            </div>
                        </div>
                        <video src="/img/soon/loop.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-2"></video>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default soon;