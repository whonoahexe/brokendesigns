import Head from 'next/head'
import Image from 'next/image'

const noah = () => {
    return (
        <>
            <Head>
                <title>Broken - Stream Package for Vincenzo</title>
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

            <div className='work-container'>
                <p className='custom-text font-xl-4 font-f-code ls-0 mt-8'>NOAH</p>
                <p className='custom-text font-lg'>Personal branding. Reflects my original personality.</p>
                <div className="row gap-2 mt-2">
                    <div className="col-4-xl col-6-lg col-12-xs">
                        <Image src="/img/noah/without-noise.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='without-noise' />
                    </div>
                    <div className="col-4-xl col-6-lg col-12-xs">
                        <Image src="/img/noah/banner.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='banner' />
                    </div>
                    <div className="col-4-xl col-6-lg col-12-xs">
                        <Image src="/img/noah/with-noise.jpg" width={1080} height={1080} className="thumb-cover br-base" alt='with-noise' />
                    </div>
                </div>
                <div className='mt-4'>
                    <p className='custom-text font-xl fw-md font-f-code'>Color palette</p>
                    <div className='mt-4 mb-4'>
                        <Image src="/img/noah/palette.png" width={1920} height={1080} className="thumb-cover br-base" alt='branding' />
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default noah;