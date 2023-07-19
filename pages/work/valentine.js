import Head from 'next/head'
import Image from 'next/image';

const valentine = () => {
    return (
        <>
            <Head>
                <title>Broken - Valentine</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Valentine" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Valentine" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/714803999?h=63406cbd03?autoplay=1&loop=1&autopause=0" width="1080" height="1080" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Valentine</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>{`An animation that I made for Valentine's Day.`}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I wanted to make something special for Valentine's Day. This year, I was completely consumed by my studies, and I had a math exam on February 14th. FML.`}</p>
                        <div className="mt-4">
                            <Image src="/img/valentine/styleframe.png" width={1920} height={1080} className="thumb-cover br-base" alt='two' />
                        </div>
                        <p className='custom-text font-xl fw-md mt-4'>Behind the scenes</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/comp-one.png" width={1920} height={1080} className="thumb-cover br-base" alt='one' />
                                <p className="custom-text fw-md">Create a composition with a resolution of 6000x1080.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/comp-one-pic.png" width={1920} height={1080} className="thumb-cover br-base" alt='two' />
                                <p className="custom-text fw-md">Using the shape tool, create a series of random rectangles.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/comp-two.png" width={1920} height={1080} className="thumb-cover br-base" alt='three' />
                                <p className="custom-text fw-md">Create another composition with a resolution of 1080x6000 and import the previous comp.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/comp-two-pic.png" width={1920} height={1080} className="thumb-cover br-base" alt='four' />
                                <p className="custom-text fw-md">Duplicate it multiple times and add fill effect. I recommend using four colors. Randomize.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/effects.png" width={1920} height={1080} className="thumb-cover br-base" alt='five' />
                                <p className="custom-text fw-md">Create a 1080x1080 comp and import the previous comp. Add motion tile and CC cylinder effect to make it look like a 3D tunnel.</p>
                            </div>
                            <div className="col-6-lg col-12-md">
                                <Image src="/img/valentine/final.png" width={1920} height={1080} className="thumb-cover br-base" alt='six' />
                                <p className="custom-text fw-md">{`Here's an example`}.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default valentine;