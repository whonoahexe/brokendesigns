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

            <div className='mt-6'>
                <div className="container mt-6">
                    <div className="display-f justify-between align-i-center mb-2 mt-6">
                        <p className='custom-text font-lg'>Note: This is a work in progress! Here's the figma preview if you're interested - <a href="https://www.figma.com/file/OWmIe511OUZMb0wN5anDf9/.anshika_portfolio?type=design&node-id=554%3A930&mode=design&t=MoWDdeh6bbDkEGes-1" className='custom-color'>Link</a></p>
                        <a href="https://client-anshika.vercel.app/" target="_blank" rel="noreferrer"><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2'>Web Preview</button></a>
                    </div>
                    <div className="row gap-2 mt-2">
                        <div className="col-6-xl col-12-xs">
                            <Image src="/img/anshika/index.png" width={1920} height={1080} className="thumb-cover br-base" alt='index' />
                        </div>
                        <div className="col-6-xl col-12-xs">
                            <Image src="/img/anshika/portfolio.png" width={1920} height={1080} className="thumb-cover br-base" alt='work' />
                        </div>
                        <div className='col-6-xl col-12-xs'>
                            <Image src="/img/anshika/human.png" width={1920} height={1080} className="thumb-cover br-base" alt='human' />
                        </div>
                        <div className='col-6-xl col-12-xs'>
                            <Image src="/img/anshika/contact.png" width={1920} height={1080} className="thumb-cover br-base" alt='contact' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default dcoderz;