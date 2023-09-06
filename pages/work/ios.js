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
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Oy-jG832zQM?si=UcZqgqZ79Ikj7c0E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='lg-font-xl xs-font-lg fw-bold custom-text'>IOS 15 - Academic Project</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-sub-text lg-font-xl xs-font-lg'>A brand advertisement assignment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default jayanth;