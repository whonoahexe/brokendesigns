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
                        <IndexCard link={"/work/reel2022"} cover={"https://lh3.googleusercontent.com/fife/AKsag4O75dKaGETOSYeGYlnKgVQv_w_17g2aZ9oGLquB59aF7VsbUAaio6TvVv5PcVuvF9wE4U-Z2HmTZDk8Ytjz40J0lVGTDX73T7p-XW9rnB68P0TBJJhgaDKW3bsnOIn7qlkFXlgW8Dh_emzJOBmmJFnlNnRp6PMK-MqVqmKdcQ5dPpbqe8LY3YCo5TRtdK_H8i__iVWrlNtc0fx6jgqilqnqOqEo3D6N-KQ4y2M5WerXQLdWaNFUFuzeWi-EVno5TwOMHjD046W3Sr3Qa7Ald662YDj-IiKV0EZV3U3Fd-QHnYVMS44oiZ4WYEOj_C_PzM33qxMc5t7l9uChEqpBu-1TMVxvx04Pqhejib3FdvuwuUJjfTmxPvQyFgVoE8ozIAiFCYZ5Wuca5sfVfNuWcOZvl0h9VFLAWLEgQjXdXtwz8oFk9R3bv17e3XB6tIPzrCEAUxHa6apwxEAK404P2U1LTyIls8g5VQt6OnrhuXtJqzdCeZF7s0y2dNIkMyuBLG_jcEx3ADSvUEv4RoLC5bQzfzLKmYS3VrdSpbonggfYCTtAKOCq-wigV4u_bkQ4zuSD9eELnbXOYPmCwszSIgaxj7iQzSyDhBpk0uXRkv5k7zGFtWRG7zV8z4wahwUvB9RySRERwVEzePSeZTYngW6pVmj8YhpFxuERrhIE6fkr6iYKHufvSNoPNmdmJNeNtC6QKDOiz-H5CPI-MH79HceOh2j0y7U49wwVEY6iLOppP1NwZCEAf-xtr1wWtVvTJqKgTRTG1Wc9czOrewWEaO-8z1BVrQtihCX4Tl3EUxF1XQKOfMEUppHKcK8gibcVHnN9uZorTcD3_E3z2rF1bx-AhySDqvJG6CUXmpjlOy6tDF_ulnnZr6m_lZjXV3Jw_lJH_jTekIXv_XoSXLp54wBUTfjRFlF24g0pZj70vPSlxKYjcHjrGTeaIQZNxRjN5aYLGXCYzNTSMRtqxozKgC4UdETXn8xHMvCHpPYMCnsaZwolMMr6f1ASZCxQYPuzhLMO32O1EstEAP5G9_PPCwFhB0LuHOV8RJpWAwt54lpHKBcewtG89i5wHhbbhTV68912doaMqJYMmi-T3puqPHL5OYMUl8DQoi8Z7ijxoEM6uRtej3EF9547qyDtWLPjJt_69d4n1f-9_9FGqi9VcYPXboDkaBASnJVyb-BR40ouq5f9mvIUwgpVUcuGnMkAyzQOodqA-w1IrMDA_vQZQonTRpvnfLyYfxE-IJd9GWsn4hKDuamf9r5z4Wb4OTCZqQtbjXXCkPkLCD35J6ZrW2gDZ_j0_dr_CmODWlkKFiUfotGnJgBruj4nEIb3o38LN_j7KVnLWX-vRPIrZ0CVG5KQJrqXQf_DeFoiNCJtLLHN5FeXHqCJKs0TL3II3Y7TJ-YXgtRP40yl_htFW_XzsHT0I9VUy0SB_EEtc3ZfXqmKOEm0GskZMLpyYtV0rTKGQ20tp7NTwDLlI0_InjP2NC00-lvXBcisEo9QzTXhku4mWaPFXDtJV6kgdh8G_OLJkVx3omgDlbSd8Tg7GaHFeUPWaa8tMwDcdHl6NZ6Czc0zSoAwRV76gVAVgMlVG6hHXNWOqZbDfZB4DFJH-BIesDicH6Dmif431ExiKnvFxA8=w3440-h1325"} title={"2022 Reel"} description={"A showcase of my motion design in 2022."} />
                        <IndexCard link={"/work/explorations"} cover={"https://lh3.googleusercontent.com/fife/AKsag4P5e2zpAx088MxVNjxXcDc6m5adRNyqegxljcvioWuY0HAVTb-M0Pqfw41Cd9seEL3unkTR3HOd-MrBBV9dr1__OrZsHPH9a3E44YqAt-bbUh13L00m8xox-YqjyuKTZ5BJPmdBE09Kp5QRf_QcUY9vH7Ew6_EcIlf1PJInNfgnYelOYNMPlcxl8XNr31UsGaazrUXwL2akaSrlTaxcnYMaeQjF4gAU1PlCiNJ9EAMx5kXmcGIFpCmezIDAJZJvXJQWL-1j3zov907m_vW0LIx1tPi6RpofAF_NtrsnPnpjz9qhBN9GrZWdVTkFGNbt5afsWxCVjHo8-lTcJh1Qj2QXWJN54mjpCzpyPsnR0agwo1wMpmc8txnz-wEJeJmurb5Apuh-CGRQnY0wcyRDzn9GwhOcmF_5Qsl5Vy5EihM8bzp1-6-NWn0cjlQZZSelDrHPzivOJnX5nXm12FbOKPkGQKrOfWWs0R_7K-pFVYJhza64OvPQGhJv-gCRL3X8_bgURRkbWvYRC_wmtTO-sv4kRa7XqXx14S5BIf_V2bK9293CZ_0ws_LVnNy1KkqR0Ah9jjHwderEwJwA8wzbjgvOPEioXzAwMuXVjcil7SGqrQiXKiMbkdYzEQJEYWEycTDDJcn_DovI1hmxhbAkg30HtibMHH5LU23pZjesMQNTt1AGe5iJNYyzNmfLttzUIdRodY8d7J27SpUzQGUWbymuh1DELZsZ-a73tFHYOvoi1YlZqkFwV05lKLStQicMobHbDvSbpytZy5f05intx1bpV55F3L4iADuO4xhlxc0jqFRdzpwy28mpSQb2cJFpy3s8u5uvC0l_ynxC5KMKHMDZYERDXZwVfaqQYnIOUIfDfat5hB-1pAueu8Z9-9P1HJB92ZLcBYD-QW3KmlOSBQR6qV8GoaY7gfLAoIgtsqs0KLk-THnw3BMQjTOicMur2mcfOI3_yj3UXv68F6VqadftgRS1KB9Gce2j9KLyIW3GAI6V-BpbRYpaH5VvZAJXWmW8h0WY9CC8UVAQnhOdudVv1iWr3rafAfs2tAjz4LAo9ZFQka9HypNooHKvJBmxmmUVytPkf3hQVxslb9nN-4i5rb97_ucqdMq_Oef1PTv4ZUt9AHNlhxaWrbgHhUS1QPDf4aQN2b7fpd_tkIaJDhFOSPXvWJq5R17KwETKPQspWIWVOR6nBU2tBT-ZsD2FKVL_ZZOzLChNxOG97HVTYhfNYfEG6D4pMeDOAU1P436F-VfJMv2KHN52-a01BQMq-FfO5-F_NP7fjB_OYrZaTFbz5zzO3w8dYGQ5LdYJ2h51OmW6MjjZ3mqkAXoTjBBUIqw98k4YfkRkNsdeOD2yoeu-R2SkE0mxWdJfG6YFjVkEQe4CUd6JQJPR-Vr4DmhgkZ-YMaXg0ZhA_-qdqC4JepY1ZMsGqlaEPeD3yNBHmkXSq3Im3G6z7hPsdB5MjSGXemsbXVtGackD9XoyVe27KY5fDAgxyjGceVe6XJV6ebrcmuPnbEGqviEu802y_54ZFemgGKWOfAqQMEteKDQ00Bf_YKLBzcGXR9dtaQTkvxxSVHO3Ewj3G18QM4Fwrn31iO4DF73VGFZpDq4u7FxeZAcj-xOYZAfTYvuKNbfg6EU=w3440-h1325"} title={"Explorations_AE"} description={"Experimenting with 3D in after effects."} />
                        <IndexCard link={"/work/reel2021"} cover={"https://lh3.googleusercontent.com/fife/AKsag4NOKZN6xzJlbCzYrFebabo6R1zcH06fQmMsEKiRo9wGXvVfR2rkUF0mFpgIe44by8Tl6nVmBmbexG36N8wmuRFro_EsXC3Mz6m6Coj-hUV739Qrjuof8AeNq-Jtw4vQMhdh1JrtohIS-QqGG6tXm2ayR3zrrMimLKqScS1LFohomHFjfE4PiO2FsQbFI_l8KH37SN8xDiDUqdSQDml_xXocopfKLz9ZWNWM6CtC5p0ot4Rsndv4RQWMn9jbjlkiuqbGSe7N9zGvndVfXwq4dINOEF2r8LIg47kbGLHLyeOliKOp4l2TC0XmVh55rrW8glx3m4crJBqMOb3rtpjFm-WQsRQTyMrw9PX4O7gKjgRYTSPgvUXkN_AypLYvnxSKrfQpW26YNnlJ9pFAGS6Jj2JBbvDwIJTgf8u3ArlIOeB_RGx-WBrARSOmqj5KBmKBnE3_svFvqe_fAUy3RizFZyd7jB0_W7IFwOm8iBP2eirHfgo2K0kRUURaMbU6RWERyHtep_RNKB2OlcQkNN7CgG8ia23pgC3acRM_YaDGwSQr6Cmo4MyfPVKe95SDgbYOHvYLy53FugH3GQp6jVnQ7B_uMFcXw377dHVAfP6yZC1gcYaDtQPg3TCLIYgD-0Bv9z4V898HQVSiGJSwkcA66Ae71Q_9RfyUEO3EuhVhkJi5fqmHYJ-kkKREC05v8ThIIdOlBcp9hGkeHn-QY7_srBTpw7GtUXNs2fhiujEvlr2UYPqfMd44lNpgRY1VP-z_9mduUq3PuKWEmJU5CjzhTrXn-_MXoJsIoxUejBTomy3OPwOVeOYZs5TXNdGgMTcZbAc6dXcXSCzrc_qP9hoSFQ-X6UDkLVnWvm-lHXpGGDFTDkg4jsPX8I73POsed-It_2NHdK_8yxf9PCsvbghfdYTmhYfAligsUa1kzZgaYRFrlYVlu05C_bWF2tg_aYlrDas_Gn_zyJbjXvOizvqlNqLMRtG3lvLjzHuDwBh17XxzLbY7DBrB22Qvbq9wxlTZEWnWNYeiFz3FiUIpxxbS8MpWnE2-rP2M6_-5WhhaMseh_QeavVop2LGyx5ZlymF-Cw5KHTDQE4PaLg22kt11I2ntKrkHgJEn-AnwnbBWBQ7IOEnXIqu9h-zlRSdjoShbLlRz_oHQgl1vHTA3p9yNYboAomak1efvLRcj2ffp6QttIhddYhtjCvaxXttITBXn_vLbxQlNEQYx9gkyQwdC7GBD5xl7KlX8Zt5g8of3Xgax8bSFKxNwPdUv15oF82L781NsBrZpWMAWVw-V1g8-fSXUeQF5lHEQ1P9X0kw18j2mR7xShEG8tPmPNNH-Y30IWWJxD5TlrTPZ-h_EhI13G1EHqvj6mAgChdrfv_OEPbwLS9Y-5mKYKjegDmSDSugBIlcZGDvYQ96gQxd9Ph7VApIVcqLbM7b988dQ8tUdoqYcxLJHErRk1zwobeakMRej2W_PsGWhgVqFeKZ_vfQD2x530gXVrvqDjfcWclh47CCYLPB-SnBiSx64piviHYIT9SLXKs2m004PM55Z-ur5AGK-73u5ouryuyQ9HQGApUzxU_XoDbnlVbGNbudqxyt0w3-RtZ9F4K1DQW_MsN95O6xudKSBwkn01H1IL5j_DT8=w3440-h1325"} title={"2021 Reel"} description={"A showcase of my motion design in 2021."} />
                        <IndexCard link={"/work/promo3d"} cover={"https://lh3.googleusercontent.com/fife/AKsag4MrgOWhUrnncE08FZoKfMgJtARvc7Vro68kRbpDIra8l1Dwtc6XcFGTb6xQXpY7T-NVCgrZ0DpVPCCvzksI3q52TUPBE0I0SgQm-iP3kwGF7bHIsO2Sose1sDXMdzxfmMkXsisNTCQLo1v6IY98__m_kUwULwQE2voL5pGOR2wG3_eoZgD6D7WUaoAFcVFDkgkeTcXTQ3EjpBk1ilOr6H8MT0u_IoRjQ2RlQFVIoTqcJaWj0dCwvUZRuc2v3qZBpOVB1cEOzj3W5DmJspeNW6oagbNQ9iAiPFOh-44ppZ5mSs1Dy3IqOMWatJJ6UYmfXBE31-MHcY5vE5t0fwcLOsrqmtAoiYd41NdgpJXDnC2FmujebYkZ66dC6_qW2ek3BKjYrmtOC88p9yJ6jGtE9CZb_2GUgh4_-Amv1vrT3VAA-PJHUptYYF-Xf2gTR1SrPbOEEoDjGZbfp8bcIZ5G86QlrpyZsei5U1w4WTz1GM1l_2VLGsRSFuXbRJhOTX-vKS1YHZ6MZH9lLnluiUz_rNdKSs_yONjrHjtRuyNrKrSNH_SBvc4vSoB2QWDxuZ6ODd-pv-OF7VIrULI36zIkopCYFzN5r6JgOjDNhzezP_8SXqO6NysPC3Q6z4HzKjBVLX6a9skDHZX08DybO9p78cGWwpGAt_dfyH4O1i17RIv4cpZ7s8SGOrGJly-XBZmaM4Z__vMxVGngIsbunJrjg2sIo141zSuK8iy9yiMdxsKt70gX1F-5w67rR75JgiRpCYbL_Q1NMo92H2frI9bZAV8SLRCK5Qf4J_yjuyCxuJDP5Xus0d-3cEb4G0X0Ocq8IdqQqRt2JrTg-JNipYz0gzTkDBHcR8TKZ94x5uJ_FrO3wpjU7RK13rMuNZ6VvzKHX6tZ3YuXcWNmemoi_BGBHpTHW54KWFPK-Q6xr1WeHM5UFpb_yImZirFwD1oOXx56DPUoCrhO7ygHuP48Rfd3qPyY04yEMbt8BD0uV9Y2zReOJPeDevoUc9uBLd35_H_Eo4nTAtv9nOOlT0UPNVeOEJSyMG6QhBHWqHIbbsuLTaMNpD4DBhN_dWe1XsE-6247lcMrZH0uQUZKM13QAlFcgwnydjYvayjcHqtKFFBBoHwPAfQViXA8l-WV2rprqFqvAMKNpkPJq8hwH05rtfLYbjL5bRpH-iUZRkKLbsKZyj2UhIFGreP0mwLAXkwN06VSZ6E-SZ0_Az2-Ai7rUYghy_M-QuHyW7Y2w6PUzFJQmjK_Yd5YjjKHnOjFg1GodtLX6POnqBaKWOEkK6IgIcmZikVjSejQjoqawEV-wwaroESSjQEohl43ZotW3xqaKZTsjzJOZm5x-XIX7BAXGAI3r1JAK89aQVt3J-bFUQGJZtldCiq-P4UWKyQFqF9AFhbe9TGubuITYa1DXPJFKZw1O-7BU0jNWrwsgGZVQq3HkjXqZP-VwRWrygwz-0tgGOHWOgqGyJAvv4JkSSmwrP1UpCeFpVVZiZTBEt6QQhlkhfWSS5HX3OhwNO_6BM3_GHBDYhAlg1-cJ3RmRLp0zx8C7r_ybfpFW2KU1GjliSf5fO4GF6OlOAi6jsBYungzc3NP1ewZAkLjdl7X0IjcGG7-FreEJtSfDdP3Omj7MpuGIKI=w3440-h1325"} title={"Self Promo"} description={"Basically, this video shows that I'm available for work."} />
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