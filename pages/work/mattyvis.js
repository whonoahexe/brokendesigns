import Head from "next/head";
import Image from "next/image";

const mattyvis = () => {
    return (
        <>
            <Head>
                <title>Broken - RMatty Visuals</title>
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
                        <Image src={"/img/mattyvisuals/render.png"} width={"1200"} height={"1200"} alt="render" />
                    </div>
                </div>

                <div className="work-container">
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-md custom-text font-xl'>Matty Visuals</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text font-xl'>A logo for Matty to represent his brand.</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="custom-text font-xl fw-md">Research Process</p>
                        <p className="custom-sub-text mt-2 mb-2 mb-2">{`When I opened Pinterest to get some inspiration, there were only concept arts on my feed. I saw one abstract typography, and then I decided to go with that kind of abstract art style.`}</p>
                        <Image src="/img/mattyvisuals/breakdown/pinterest.png" width={2560} height={1033} className="thumb-cover br-base" alt='pinterest' />
                    </div>

                    <div className="mt-6">
                        <p className="custom-text font-xl fw-md mb-2">Mood Board</p>
                        <p className="custom-sub-text mt-2 mb-2 fw-md mb-2">I started with simple typography. Played with some shapes using pencil and paper.</p>
                        <div className="row gap-2 justify-around">
                            <div className="col-5-xs">
                                <Image src="/img/mattyvisuals/breakdown/typography.png" width={564} height={376} className="thumb-cover br-base" alt='typography' />
                            </div>
                            <div className="col-5-xs">
                                <Image src="/img/mattyvisuals/breakdown/paper.jpg" width={564} height={376} className="thumb-cover br-base" alt='typography' />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 row gap-2 justify-center">
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/1.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/2.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/3.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/4.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/5.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/6.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/7.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                        <div className="col-4-xs">
                            <Image src="/img/mattyvisuals/breakdown/8.png" width={1200} height={1200} className="thumb-cover br-base" alt='typography' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default mattyvis;