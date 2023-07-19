import Head from 'next/head'
import Image from 'next/image'

const fabiconv1 = () => {
    return (
        <>
            <Head>
                <title>Broken - Fabicon V1</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Fabicon V1" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Fabicon V1" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714805366?h=a25c70b809" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Fabicon V1</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>My first entry for Fabicon.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>This is my very first project. This one took me a long time to complete, despite my excitement about making it. I thought low fps would be a good fit for this project.</p>
                        <div className='mt-4'>
                            <Image src="/img/fabiconv1/cover.png" width={1920} height={1080} className="thumb-cover br-base mt-2" alt='cover' />
                        </div>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-lg col-12-xs">
                                <video src="/img/fabiconv1/ball-one.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-2"></video>
                            </div>
                            <div className="col-6-lg col-12-xs">
                                <video src="/img/fabiconv1/ball-two.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-2"></video>
                            </div>
                        </div>
                        <video src="/img/fabiconv1/terminal.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base mt-2"></video>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default fabiconv1;