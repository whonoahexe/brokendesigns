import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
// components
import Footer from '../../components/Footer';

const explorations = () => {
    return (
        <>
            <Head>
                <title>Broken - Reel 2021</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Reel 2021" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Reel 2021" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/846914045?h=0fdddc5b61" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='lg-font-xl xs-font-lg fw-bold custom-text'>Explorations_AE</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-sub-text lg-font-xl xs-font-lg'>Experimenting with 3D in after effects.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
                <Footer />
            </div>
        </>
    );
}
 
export default explorations;