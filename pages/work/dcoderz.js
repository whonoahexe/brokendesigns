import Head from 'next/head'
import Image from 'next/image'

const dcoderz = () => {
    return (
        <>
            <Head>
                <title>Broken - Team Dcoderz</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Team Dcoderz" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Team Dcoderz" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714801821?h=179d1a625e?autoplay=1&loop=1" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Team Dcoderz</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>A simple video profile for Dcoderz</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`When the admin of Team Dcoderz reached out to me, I had just installed saber plugin. Even though it's rather old, I decided to give it a go.`}</p>
                        <div className='mt-4'>
                            <video src="/img/dcoderz/saber.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                        </div>
                        <p className='custom-text font-xl fw-md mt-4'>Behind the scenes</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <Image src="/img/dcoderz/1.png" width={1920} height={1080} className="thumb-cover br-base" alt='overlay' />
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <Image src="/img/dcoderz/2.png" width={1920} height={1080} className="thumb-cover br-base" alt='watermark' />
                            </div>
                            <div className='col-6-xl col-12-xs'>
                                <Image src="/img/dcoderz/3.png" width={1920} height={1080} className="thumb-cover br-base" alt='logo' />
                            </div>
                            <div className='col-6-xl col-12-xs'>
                                <Image src="/img/dcoderz/4.png" width={1920} height={1080} className="thumb-cover br-base" alt='final' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default dcoderz;