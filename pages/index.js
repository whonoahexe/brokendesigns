import Head from 'next/head'
import Link from 'next/link'
import {useRef, useState, useEffect} from 'react'
// components
import Footer from '../components/Footer'
import IndexCard from '../components/projects/IndexCard'
// recoil
import { useRecoilState } from 'recoil';
import { projectState } from "../atoms/triggerAtoms";
// framer motion
import { motion } from 'framer-motion';
// notion
import { Client } from '@notionhq/client';

export default function Home({ results }) {

    const titleRef = useRef(null);
    const [workState, setWorkState] = useRecoilState(projectState);

    const clickOne = () => {
        setWorkState("motion");
    }
    const clickTwo = () => {
        setWorkState("graphic");
    }
    const clickThree = () => {
        setWorkState("web");
    }
    const projectClick = () => {
        setWorkState("motion");
    }

    useEffect(() => {
        const onScroll = () => {
            titleRef.current.style.transform = `translateX(-${window.pageYOffset}px)`
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Broken - Portfolio</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Portfolio" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Portfolio" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            {/* don't remove this empty div */}
            <div className='navbar-toggled navbar hidden'></div>
            
            <div>
                <div ref={titleRef} className='md-display-f xs-display-n justify-between mt-8'>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>..</p>
                    <p className='xl-font-xl-6 lg-font-xl-5 md-font-xl-4 custom-text font-f-code ls-0'>BROKEN.</p>
                </div>

                <div className='md-display-n xs-display-f justify-center mt-8'>
                    <p className='font-xl-2 custom-text font-f-code ls-0'>BROKEN</p>
                </div>

                <div className="container">
                    <div className='lg-display-b xs-display-n'>
                        <div className="row mt-200-px">
                            <div className="col-6-xl col-8-lg col-10-md">
                                <p className='custom-text font-lg'>{`Hello! I'm`} Broken. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg-display-n md-display-b xs-display-n'>
                        <div className="row mt-8">
                            <div className="col-6-xl col-8-lg col-10-md col-12-xs">
                                <p className='custom-text font-lg'>{`Hello! I'm`} Broken. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='display-f justify-center'>
                        <div className='md-display-n xs-display-b mt-4'>
                            <p className='custom-text font-md text-center'>{`Hello! I'm Broken.`}</p>
                            <p className='custom-text font-md pt-2 text-center'>Motion, Graphic, Web designer. Full Stack Developer.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='card black-bg custom-card-bg-gradient p-3 md-display-b xs-display-n'>
                            <div className="display-f lg-justify-start xs-justify-center">
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover'><span className='pointer unselectable' onClick={clickOne}>Motion design</span></p></Link>
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover ml-3'><span className='pointer unselectable' onClick={clickTwo}>Graphic design</span></p></Link>
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover ml-3'><span className='pointer unselectable' onClick={clickThree}>Web design</span></p></Link>
                            </div>
                        </div>
                    </div>

                    <motion.div initial="initial" animate="animate" className="row gap-2 mt-4">
                        <IndexCard link={"/work/reel2021"} cover={"https://lh3.googleusercontent.com/fife/AKsag4NOKZN6xzJlbCzYrFebabo6R1zcH06fQmMsEKiRo9wGXvVfR2rkUF0mFpgIe44by8Tl6nVmBmbexG36N8wmuRFro_EsXC3Mz6m6Coj-hUV739Qrjuof8AeNq-Jtw4vQMhdh1JrtohIS-QqGG6tXm2ayR3zrrMimLKqScS1LFohomHFjfE4PiO2FsQbFI_l8KH37SN8xDiDUqdSQDml_xXocopfKLz9ZWNWM6CtC5p0ot4Rsndv4RQWMn9jbjlkiuqbGSe7N9zGvndVfXwq4dINOEF2r8LIg47kbGLHLyeOliKOp4l2TC0XmVh55rrW8glx3m4crJBqMOb3rtpjFm-WQsRQTyMrw9PX4O7gKjgRYTSPgvUXkN_AypLYvnxSKrfQpW26YNnlJ9pFAGS6Jj2JBbvDwIJTgf8u3ArlIOeB_RGx-WBrARSOmqj5KBmKBnE3_svFvqe_fAUy3RizFZyd7jB0_W7IFwOm8iBP2eirHfgo2K0kRUURaMbU6RWERyHtep_RNKB2OlcQkNN7CgG8ia23pgC3acRM_YaDGwSQr6Cmo4MyfPVKe95SDgbYOHvYLy53FugH3GQp6jVnQ7B_uMFcXw377dHVAfP6yZC1gcYaDtQPg3TCLIYgD-0Bv9z4V898HQVSiGJSwkcA66Ae71Q_9RfyUEO3EuhVhkJi5fqmHYJ-kkKREC05v8ThIIdOlBcp9hGkeHn-QY7_srBTpw7GtUXNs2fhiujEvlr2UYPqfMd44lNpgRY1VP-z_9mduUq3PuKWEmJU5CjzhTrXn-_MXoJsIoxUejBTomy3OPwOVeOYZs5TXNdGgMTcZbAc6dXcXSCzrc_qP9hoSFQ-X6UDkLVnWvm-lHXpGGDFTDkg4jsPX8I73POsed-It_2NHdK_8yxf9PCsvbghfdYTmhYfAligsUa1kzZgaYRFrlYVlu05C_bWF2tg_aYlrDas_Gn_zyJbjXvOizvqlNqLMRtG3lvLjzHuDwBh17XxzLbY7DBrB22Qvbq9wxlTZEWnWNYeiFz3FiUIpxxbS8MpWnE2-rP2M6_-5WhhaMseh_QeavVop2LGyx5ZlymF-Cw5KHTDQE4PaLg22kt11I2ntKrkHgJEn-AnwnbBWBQ7IOEnXIqu9h-zlRSdjoShbLlRz_oHQgl1vHTA3p9yNYboAomak1efvLRcj2ffp6QttIhddYhtjCvaxXttITBXn_vLbxQlNEQYx9gkyQwdC7GBD5xl7KlX8Zt5g8of3Xgax8bSFKxNwPdUv15oF82L781NsBrZpWMAWVw-V1g8-fSXUeQF5lHEQ1P9X0kw18j2mR7xShEG8tPmPNNH-Y30IWWJxD5TlrTPZ-h_EhI13G1EHqvj6mAgChdrfv_OEPbwLS9Y-5mKYKjegDmSDSugBIlcZGDvYQ96gQxd9Ph7VApIVcqLbM7b988dQ8tUdoqYcxLJHErRk1zwobeakMRej2W_PsGWhgVqFeKZ_vfQD2x530gXVrvqDjfcWclh47CCYLPB-SnBiSx64piviHYIT9SLXKs2m004PM55Z-ur5AGK-73u5ouryuyQ9HQGApUzxU_XoDbnlVbGNbudqxyt0w3-RtZ9F4K1DQW_MsN95O6xudKSBwkn01H1IL5j_DT8=w3440-h1325"} title={"2021 Reel"} description={"A showcase of my motion design in 2021."} />
                        <IndexCard link={"/work/promo3d"} cover={"https://lh3.googleusercontent.com/fife/AKsag4MrgOWhUrnncE08FZoKfMgJtARvc7Vro68kRbpDIra8l1Dwtc6XcFGTb6xQXpY7T-NVCgrZ0DpVPCCvzksI3q52TUPBE0I0SgQm-iP3kwGF7bHIsO2Sose1sDXMdzxfmMkXsisNTCQLo1v6IY98__m_kUwULwQE2voL5pGOR2wG3_eoZgD6D7WUaoAFcVFDkgkeTcXTQ3EjpBk1ilOr6H8MT0u_IoRjQ2RlQFVIoTqcJaWj0dCwvUZRuc2v3qZBpOVB1cEOzj3W5DmJspeNW6oagbNQ9iAiPFOh-44ppZ5mSs1Dy3IqOMWatJJ6UYmfXBE31-MHcY5vE5t0fwcLOsrqmtAoiYd41NdgpJXDnC2FmujebYkZ66dC6_qW2ek3BKjYrmtOC88p9yJ6jGtE9CZb_2GUgh4_-Amv1vrT3VAA-PJHUptYYF-Xf2gTR1SrPbOEEoDjGZbfp8bcIZ5G86QlrpyZsei5U1w4WTz1GM1l_2VLGsRSFuXbRJhOTX-vKS1YHZ6MZH9lLnluiUz_rNdKSs_yONjrHjtRuyNrKrSNH_SBvc4vSoB2QWDxuZ6ODd-pv-OF7VIrULI36zIkopCYFzN5r6JgOjDNhzezP_8SXqO6NysPC3Q6z4HzKjBVLX6a9skDHZX08DybO9p78cGWwpGAt_dfyH4O1i17RIv4cpZ7s8SGOrGJly-XBZmaM4Z__vMxVGngIsbunJrjg2sIo141zSuK8iy9yiMdxsKt70gX1F-5w67rR75JgiRpCYbL_Q1NMo92H2frI9bZAV8SLRCK5Qf4J_yjuyCxuJDP5Xus0d-3cEb4G0X0Ocq8IdqQqRt2JrTg-JNipYz0gzTkDBHcR8TKZ94x5uJ_FrO3wpjU7RK13rMuNZ6VvzKHX6tZ3YuXcWNmemoi_BGBHpTHW54KWFPK-Q6xr1WeHM5UFpb_yImZirFwD1oOXx56DPUoCrhO7ygHuP48Rfd3qPyY04yEMbt8BD0uV9Y2zReOJPeDevoUc9uBLd35_H_Eo4nTAtv9nOOlT0UPNVeOEJSyMG6QhBHWqHIbbsuLTaMNpD4DBhN_dWe1XsE-6247lcMrZH0uQUZKM13QAlFcgwnydjYvayjcHqtKFFBBoHwPAfQViXA8l-WV2rprqFqvAMKNpkPJq8hwH05rtfLYbjL5bRpH-iUZRkKLbsKZyj2UhIFGreP0mwLAXkwN06VSZ6E-SZ0_Az2-Ai7rUYghy_M-QuHyW7Y2w6PUzFJQmjK_Yd5YjjKHnOjFg1GodtLX6POnqBaKWOEkK6IgIcmZikVjSejQjoqawEV-wwaroESSjQEohl43ZotW3xqaKZTsjzJOZm5x-XIX7BAXGAI3r1JAK89aQVt3J-bFUQGJZtldCiq-P4UWKyQFqF9AFhbe9TGubuITYa1DXPJFKZw1O-7BU0jNWrwsgGZVQq3HkjXqZP-VwRWrygwz-0tgGOHWOgqGyJAvv4JkSSmwrP1UpCeFpVVZiZTBEt6QQhlkhfWSS5HX3OhwNO_6BM3_GHBDYhAlg1-cJ3RmRLp0zx8C7r_ybfpFW2KU1GjliSf5fO4GF6OlOAi6jsBYungzc3NP1ewZAkLjdl7X0IjcGG7-FreEJtSfDdP3Omj7MpuGIKI=w3440-h1325"} title={"Self Promo"} description={"Basically, this video shows that I'm available for work."} />
                        <IndexCard link={"/work/dcoderz"} cover={"https://lh3.googleusercontent.com/fife/AKsag4OPEec807Z4cBqiBnHxebR1LCgujyzKEJbnkLpkUvtiU8jFsKSR-6p3G7uZfuoZEA20XLCV-ciY8yqiwSDPtvNH0FKeAp8Ilnr8HENJWdKOAteUnQHZSnut1pNmCEQP3sy0JRap1LhRJ6J-GMqy1y1utE10sEDY9OH7wAGxNkpPFBLuE-K5-a4jB8zoze-OLyrw4fj5JshL7mxcNI0gonn9lEt3tnuMT6UvI7CaFRaI5ANdbSGj0CyAWFRITZ-YFStzQIYQkebgkWs_8llEnS124ECOsHL602xmpQiOz-qprDjD0odzAx2yUoFuzcVC-Z_HdFWSejSUkRa-Em1hONwx9-hEpSNY_v1n64AvE2zbjfIT8po2crlEkvzjWGA9ZlCn_vkD09BKOojYK5lcP96wiZ1VVOtRFlkwDa9Y2CIXGa417bwrqvSiNF7yF81P4NzB5T6D8Y_DKSsexnD6fzg_myqMGjYmeCR3Pv441BSppnpBZwvrBk9hWml8yi0IaQprsgg2W9ZUn-7T__fTRqpHTxnREbcEKxXp4paMsUASmkF4KOgT1SsXFf7zDApbRbSme5OQm2ghxNz4rZlEQcLyUF7hxOYDGZcL4iaMaPtrKR5AiLGZ698qDEgRpPvxEieaHXOyhjKIXaCveN6A9JXdx5BatlptvZkZik-seU4hMP-TCOiYqEC-rnLQVVQmlBJIis_0xxXkTTCM6sG4v2oJiQu8iYTx5nIPAZUazNPP_9QtFQcNq_20yUKmoLQI5uk8vB6C5m8C8RZCP06WJ3K9Zx_Q-8ukfjS0rqWO5rGNt0ITNwVcNresfG3oE7L0_T1e40Py61hYz98qlNw8rRfgN8wzjYvgj_9CdJbabM7bswu4dpe1GjjiXv8xmSrrEJU5H7JCW6aOHHMhe49rYfq3KPjfqa7OMJU8TIDaIanv_YWBKpvxCbVvEKHjgg-nFksMp1K4qVhJgDJVBhNLShWiVCrl6Zvwjoet4J7E0P09wHilF-vnw07Ihu1WyVeSB-W1XF-kclvy8bY_n2lZWDJSew-qQ8pg_d3i24X5ChkyMoQmYAiqhwpD6NdDDnpkJN8-bH-Efl7bz90uAvLAH0xDF0saoqChmEpNvclzwXnEN0wTpnjbyE4463ZoRWc3XL_CZ0T25oQvs-yuiBEA32G4JgCVN0GAvT0oGsEtEPuJkZVT8H8B92h7K62-KtADJ1RESmey7Oprd63FTyfANLyOc8gnSWSD6ReOgA7PH38zaldgLfmHpRIE1XKLkfUvpwfAqPLPHbcDo4FQmJCgtykxBd_0tCbz6OD5hJDtE4Y2104WNGCYQ8QXlvFttI5asvShZfZq3Jyfs-J4SFUcSthY2rwUsRwJ8YZ0_p4chNuigudoeU6v8SUphjkYqg_-Brp5kXrhnEMGZIvEvLC-Q52yy6uEH1geQJn2poVzXpj9sDHVLogDlyEOwfLBkJpKVlCPwL7-OYiAhTzGQJNpHCQyYzEHqzaYr-EVTj1Y8mug4nmrL-RRVxYzOj6Z2kOx4tb1kl4r2_dQ5GF9EoSMUGksO7YwpN08NySFMYaJS2JKxf800wOerb2d04B09dJe2Rjb8ipDo1O1qbEbOfxCABWn37nrMCyJYQE6xuXHKxI=w3440-h1325"} title={"Team Dcoderz"} description={"Video profile for Team Dcoderz"} />
                        <IndexCard link={"/work/notifications"} cover={"https://lh3.googleusercontent.com/fife/AKsag4OgRAa-L4Fcn0RKD1Gr3JnxaRCMmyMXlfKWn699fJN5LiWWrbjTxnTe0Cf-RgofkA5U1oTYn0d_2f44Gt-2a3C0SQF7lLT2uv0DhySahjogAPdCmHZ-d4DTNYHMOIviQVpE11JVmOHNm3oX9RADDxGLDVxjd3D4nDYPxwJdqgiewCvrds_ZoiarpyNMa-bqoJvu8Z4DqiQgNZgxB2h_8XbbQKi0va8zkjvhGwG3oFqcKYWRo9phWWqURXIha2vSlAk3OxZnu5XdeH-4b6rgOBxNVxThXkTUH3gqqf5-vOvX__wRjV8CfMs3zwISSHRt1C1ekvvUzlr3QKlaHrkAoylvP48T1-HgRYWVYHaZRiSwY-ncaBwkeGN228BV6_Yptlj2fSPH2O7PnnXV4df9U3iAnxqa7wyrfYtLEwLpMFU9XSbJa_5sNV7Z-Jn9savDpzVB7L88F_ZfNV5poGhv53gTrCy1u2A2ATI-zbhI7terhI8EHP0597yPVmF3bcr3wnbkKESwMQDrec6TCYerYld-4jn5YEPfYEHjyPbY7Sx03VNncezpTV-UML0rLPyz4eCSnxku7ruDBOIgIYOiZ3KRZxg28zlHmnY_yxXaPYPZouChYQ3g5aqtKBKnq783AXfelrKDNBX9r0TcBCwvtvvwnI2xckYchflgBKmFxll3z-A7JORRKqrYy7jfanHzkpoXhxC_sU73neJBhWh7fHNxbEE2CxyHO40qPwKWJvH8XFJkQWyt9S47IVeHx9NHi2A4imKuJ9_TxWJYJ666QHjSR24_XgmlDKs71I2GhKr-2G8MXI1SeITwF4fU7biHer6rM2L0vyaABJdVCk_yqo_e1KTISAYFgLhRP7TV0S4sMVkUD5H6ni28o3Ge807CZame2EyhMEpcR1hjAifzKHV5nKWv-Z1P0D-Xd_FDGXo-pfZzBOdZesVSzTRLlKE2yIDTIx1VsEzxa9Uva1lBXtk-PXIqL6dfG98PwR4q3eI4FXrS-yuK9pH3RBTS1--uHDxb8HxZKqJqabX3FEpvhoBlb1QLlqU91DaN5tbV3pY0cwIiULwn_BGyjCAzsHAMM-STi_3-MtWF-NmpsaEZ52EWjmqtvY0jBxBMDjhfUQvO3e-2aHHz_VLTcRWsSgiQuvh-YYmYcYbMdbsMGJWF7W5jFBXPFOmo2JsurpKa5iW0IINycVjeZpyjo_PTFnO401CrbDONGF-je8PYz2MAbbClnEaY2rnqV-44fQ1HN19IP10bUs4324QFl3Miy0dRtK4WtSxW1726x95EvuDDDXOvPUAemLlC22ljDbuCgalVOQzmqy4yIz3NW1Ha7JGwpVk_uEfxx2nOiiGci5nPj6ypbiZWO4MSMen1XytN1jUNEoDwcY6Dh-yW-AZUX6g2ZnbQOEXlu0degbDYGDOEdqxYjU2sO9Ghv-pa3zlAR5YfIHc-D95cr0JxHZnkiYG9gbsGIRAlnvSbvvfbdf7BwiK3UfBB2KcJCOLk9meXX5l-gKIxvAj9SIEg2gznpjkKK7tI9T5uuMxJ2Bar3M7QvmBlWvrk2JVHmkTlQ7qv4WBB4ZCwkT8dDm1XV-HrzuZdIk9sBDJkoDx5Vw65TeVxGEevikKAfZzfXu5eGgoVeVs=w3440-h1325"} title={"Notifications"} description={"Turn on your notifications!!"} />
                        <div className='display-f justify-center m-auto mt-4'>
                            <Link href='/work'><button className='custom-btn-rounded custom-text pl-5 pr-5 pt-2 pb-2' onClick={projectClick}>View more</button></Link>
                        </div>
                    </motion.div>

                    <Footer />
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
            property: 'Index?',
            checkbox: {
                equals: true,
            },
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
        },
        revalidate: 1
    }
}