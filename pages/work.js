import Head from 'next/head'
import { useEffect, useRef, useState } from "react";
// components
import Motion from "../components/showcase/Motion";
import Graphic from "../components/showcase/Graphic";
import Web from "../components/showcase/Web";
// recoiljs
import { useRecoilValue } from "recoil";
import { projectState } from "../atoms/triggerAtoms";
// framer motion
import { AnimatePresence, motion } from 'framer-motion';
// notion
import { Client } from '@notionhq/client';

export default function Work({ results }) {

    const selectRef = useRef();
    
    const animation = useRef();
    const graphic = useRef();
    const web = useRef();

    const textOne = useRef();
    const textTwo = useRef();
    const textThree = useRef();

    const [presence, setPresence] = useState();

    const filterMotion = (e) => {
        animation.current.classList.remove('hidden');
        graphic.current.classList.add('hidden');
        web.current.classList.add('hidden');
        textOne.current.style.color = '#c4c6d0';
        textTwo.current.style.color = '#ffffff';
        textThree.current.style.color = '#ffffff';
        setPresence('motion');
    }

    const filterGraphic = (e) => {
        animation.current.classList.add('hidden');
        web.current.classList.add('hidden');
        graphic.current.classList.remove('hidden');
        textOne.current.style.color = '#ffffff';
        textTwo.current.style.color = '#c4c6d0';
        textThree.current.style.color = '#ffffff';
        setPresence('graphic');
    }

    const filterWeb = (e) => {
        animation.current.classList.add('hidden');
        graphic.current.classList.add('hidden');
        web.current.classList.remove('hidden');
        textOne.current.style.color = '#ffffff';
        textTwo.current.style.color = '#ffffff';
        textThree.current.style.color = '#c4c6d0';
        setPresence('web');
    }

    const selectChange = (e) => {
        if(e.target.value === '1') {
            filterMotion();
        } else if(e.target.value === '2') {
            filterGraphic();
        } else if(e.target.value === '3') {
            filterWeb();
        }
    }

    const design = useRecoilValue(projectState);

    useEffect(() => {
        if(design === 'motion') {
            filterMotion();
            setPresence('motion');
        } else if (design === 'graphic') {
            filterGraphic();
            setPresence('graphic');
        } else {
            filterWeb();
            setPresence('web');
        }
    }, [design]);

    // variants

    const variants = {
        initial: {
            x: '50px',
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.17, 0.84, 0.44, 1]
            }
        },
        exit: {
            x: '-50px',
            opacity: 0,
            transition: {
                duration: 0.5,
                ease: [0.17, 0.84, 0.44, 1]
            }
        }
    }

    return (
        <>
            <Head>
                <title>Broken - Work</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Work" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Work" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div>
                <div className='container'>

                    <div className='card black-bg custom-card-bg-gradient md-p-3 xs-p-1 mt-8'>
                        <div className="md-display-f xs-display-n">
                            <motion.p whileHover={{ opacity: 0.7, transition: { duration: 0.2 } }} className='font-lg custom-text custom-misc-hover'><span ref={textOne} className='pointer unselectable' onClick={filterMotion}>Motion design</span></motion.p>
                            <motion.p whileHover={{ opacity: 0.7, transition: { duration: 0.2 } }} className='font-lg custom-text custom-misc-hover ml-3'><span ref={textTwo} className='pointer unselectable' onClick={filterGraphic}>Graphic design</span></motion.p>
                            <motion.p whileHover={{ opacity: 0.7, transition: { duration: 0.2 } }} className='font-lg custom-text custom-misc-hover ml-3'><span ref={textThree} className='pointer unselectable' onClick={filterWeb}>Web design</span></motion.p>
                        </div>
                        <div className='md-display-n xs-display-f justify-center'>
                            <form>
                                <select ref={selectRef} required className="input-t custom-card-bg custom-sub-text shadow-base" id="category" onChange={selectChange}>
                                    <option value="1">Motion design</option>
                                    <option value="2">Graphic design</option>
                                    <option value="3">Web design</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    
                    <AnimatePresence exitBeforeEnter>
                        <motion.div animate={ presence == "motion" ? "animate" : "initial" } exit="exit" variants={variants} ref={animation} className='motion'>
                            <p className='custom-text font-xl fw-md mt-4'>Motion design</p>
                            <div className='row gap-2 mt-2'>
                                <Motion />
                            </div>
                        </motion.div>

                        <motion.div animate={ presence == "graphic" ? "animate" : "initial" } exit="exit" variants={variants} ref={graphic} className='graphic hidden'>
                            <p className='custom-text font-xl fw-md mt-4'>Graphic design</p>
                            <div className='row gap-2 mt-2'>
                                <Graphic />
                            </div>
                        </motion.div>

                        <motion.div animate={ presence == "web" ? "animate" : "initial" } exit="exit" variants={variants} ref={web} className='web hidden'>
                            <p className='custom-text font-xl fw-md mt-4'>Web design</p>
                            <div className='row gap-2 mt-2'>
                                <Web />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        filter: {
            property: 'Status',
            status: {
                equals: 'Completed'
            }
        },
        sorts: [
            {
                property: 'S.No',
                direction: 'ascending',
            },
        ]
    });
    return {
        props: {
            results: response.results,
        }
    }
}