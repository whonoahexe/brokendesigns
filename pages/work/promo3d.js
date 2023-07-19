import Head from 'next/head'
import Image from 'next/image'
// compoenents
import Storyboard from '../../components/projects/Storyboard'

const promo3d = () => {
    return (
        <>
            <Head>
                <title>Broken - 3D Promo</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - 3D Promo" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - 3D Promo" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className="card player-bg display-f justify-center">
                    <div className="mt-8 pb-2 vimeo-container">
                        <div className="vimeo-player">
                            <iframe title="vimeo-player" src="https://player.vimeo.com/video/643488053?h=d1a27c5201" width="1152" height="648" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>

                <div className='work-container pb-4'>
                    <div className="row mt-6">
                        <div className="col-6-xs">
                            <p className='font-lg fw-bold custom-text'>Broken - Promo</p>
                        </div>
                        <div className="col-6-xs">
                            <p className='custom-text'>{`Basically, this video shows that I'm available for work.`}</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='custom-text font-lg'>{`I'd been bored for a long time and wanted to do more 3D exploration. Blender was lagging so badly on my PC that I had to resort to After Effects. I started it off by making my room in 3D.`}</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/selfpromo/room1.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/selfpromo/room2.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                            <div className="col-4-xl col-6-lg col-12-xs">
                                <Image src="/img/selfpromo/room3.jpg" width={1920} height={1080} className="thumb-cover br-base" alt='room' />
                            </div>
                        </div>
                        <p className='custom-text font-lg mt-2'>As I was a beginner in after effects 3D, It took me so long to finish a single frame.</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/selfpromo/match-cut-1.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/selfpromo/match-cut-2.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className='col-12-xs'>
                                <video src="/img/selfpromo/ui.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                        <p className='font-lg custom-text mt-2'>After I finished them, I felt a lack of imagination. I had lost motivation after working on this for three months and was going to abandon the project. However, several people advised me not to scrape it and to take a break instead. I took a break and after that I made a phone model.</p>
                        <div className="row gap-2 mt-2">
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/selfpromo/phone1.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                            <div className="col-6-xl col-12-xs">
                                <video src="/img/selfpromo/phone2.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='font-xl fw-md custom-text'>Storyboard</p>
                            <div className="row gap-2 mt-2">
                                <Storyboard frame={"F01"} image={"/img/selfpromo/storyboard/sf1.png"} description={`Start by introducing the client who is contacting me for a project. An animated phone enters the screen, showing the UI of Twitter.`} />
                                <Storyboard frame={"F02"} image={"/img/selfpromo/storyboard/sf2.png"} description={`Animate the phone moving upwards, so it would be clear to see the UI and the message.`} />
                                <Storyboard frame={"F03"} image={"/img/selfpromo/storyboard/sf3.png"} description={`Booting up the PC in my room, which is replicated in 3D, to start working on the project.`} />
                                <Storyboard frame={"F04"} image={"/img/selfpromo/storyboard/sf4.png"} description={`Open up After Effects in such a way that the 3D layers can be easily seen.`} />
                                <Storyboard frame={"F05"} image={"/img/selfpromo/storyboard/sf5.png"} description={`Adding some layers and adjusting the easing to liven up the project.`} />
                                <Storyboard frame={"F06"} image={"/img/selfpromo/storyboard/sf6.png"} description={`Ready to submit the completed product to the client through Twitter.`} />
                                <Storyboard frame={"F07"} image={"/img/selfpromo/storyboard/sf7.png"} description={`Make a transition out of the submit button as soon as I press enter.`} />
                                <Storyboard frame={"F08"} image={"/img/selfpromo/storyboard/sf8.png"} description={`A match cut using send button and the client is happy with the finished product.`} />
                                <Storyboard frame={"F09"} image={"/img/selfpromo/storyboard/sf9.png"} description={`End with the logo animation of “BROKEN”.`} />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <p className='font-xl fw-md custom-text'>Behind the scenes</p>
                            <div className="row gap-2 mt-2">
                                <div className="col-6-lg col-12-xs">
                                    <video src="/img/selfpromo/bts/wireframe 1.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                                </div>
                                <div className="col-6-lg col-12-xs">
                                    <video src="/img/selfpromo/bts/wireframe 2.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                                </div>
                                <div className="col-12-xs">
                                    <video src="/img/selfpromo/bts/wireframe 3.mp4" width="100%" preload muted="true" autoPlay loop className="thumb-cover br-base"></video>
                                </div>
                            </div>
                        </div>
                        <p className='custom-text font-lg mt-2'>This piece was a lot of fun to work on and quite satisfying.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default promo3d;