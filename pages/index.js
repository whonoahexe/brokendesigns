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

export default function Home() {

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
                                <p className='custom-text font-lg'>{`Hello! I'm`} Noah. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg-display-n md-display-b xs-display-n'>
                        <div className="row mt-8">
                            <div className="col-6-xl col-8-lg col-10-md col-12-xs">
                                <p className='custom-text font-lg'>{`Hello! I'm`} Noah. Motion {`&`} graphic designer, UI/UX designer and a full stack web developer.</p>
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
                        <div className='card black-bg custom-card-bg-gradient p-6 md-display-b xs-display-n'>
                            <div className="display-f lg-justify-start xs-justify-center">
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover'><span className='pointer unselectable' onClick={clickOne}>Motion design</span></p></Link>
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover ml-3'><span className='pointer unselectable' onClick={clickTwo}>Graphic design</span></p></Link>
                                <Link href="/work"><p className='font-lg custom-text transition-base custom-misc-hover ml-3'><span className='pointer unselectable' onClick={clickThree}>Web design</span></p></Link>
                            </div>
                        </div>
                    </div>

                    <motion.div initial="initial" animate="animate" className="row gap-2 mt-4">
                        <IndexCard link={"/work/reel2022"} cover={"https://lh3.googleusercontent.com/fife/AK0iWDwUbsVC-O0tH4cjkLyjevFdYv1XbBjcvXz16s9zZsIvxnwmpHCMpBGDLejHbBG3eDWOqIupmcCmyq6O1PvxCohxEk5tj2JP9NXdEvSfJ2v_f2OuxcpS_IhQWZD1Tc4TCuV5cPmiW6c33rHb1aA496omN-G26YkMvstC-mAmLlZnb1k8V-rmyCVZYL9-V-TKMKRg0Yi40FAT3kpXQ2o_y3d-osQ2P1GVRGaOn6xQWNym9zcrM7VmWMwAdigfbVV-u9G65wMYf5YO92jlSSnkyXpo_YQJ-d-Lhc0tnFSG-1LazkeI9B0fgVgww4ffsE8BJQQAn6WxavzQvRfxS8z126qRG4EYe6A2dIa7WfCJfellY1IldyQeabUMXQPsczNglq44ULcJ8l0rjG3KtD6nMKLwQHD8sBU7YITwBXpOIQ9RnJG09iIHC5sRMlIq6MDG6UUT-UH_ohv-QOd1ZxbxAea6L-GTHB1XMOUKO9PnjnWaLFB583EyW_Fp6MQeOq3qgtRmccwxKNYELtDyi-UAB_33e07rTeNGYMdMB0SR4_98cwDJqUNwrgD8uSUZRiYQ3YSbDhR1vhUgCbJ2VJ6D0GkBqnOlK3RTf2nreGiq7DGZZSncoTMAh3Fj_IU5zuehhOZpQh7SYs9uD7RWezsQOB4feX4SiRQhGc3V-YEoIM31UDgVoJZ6uuwA5qMThfUHvmz4WaiznCP1e7Sb0J-Vxo193YM8uu06_tFtoEdd1iV__u1FLHIQQgMEUWvDSWlhlvHcaqLJDX5pNIEW3pSx2UM3QKEN-DfSVEmsh072qaFOyagtmSNajRujGFU1h5ZaYo0f_sA6u9Z-F0VFVPo4eJa3EAmLPf0Dg1FT4YBcah9MKABM3PcxG9pdPmm_RGPJg2y5B_kUD1Md2vocm7T4pjb3bnLLIcmPBJKcbOsqfg0L70rg5MFxc7YyrmpasB1gpHgFBoO-fJogR0UrsScEBAF0STMu5414sTUszVcVOHKfMJ8StOk0qjRjWopYFQ_8PSFgiX4zJnvEdq7aPUDuN5sIRq6zgvjWPBjqKK1TAhrpdRIImA3kd0G0biB7SziaeCsDhL7cdcuG3luqenvVKKpDu5yDD54HCFbmFJ2RkFwlkv1D_lYbjx2gupoPmMbSP0cGyvoG3jb3GQ3vC2JT7Q4_5TyQPRY3XT70uyf0X_tSoA807nMsOUI66Kr8cvn09gDDsEeR-bvLukFTnYOtLjsA6sQwRxLdsbZM4oOHSZWVuq4SlnB8pUGvtyQBVvYdC-3FRXboWK1b8VIqvGUUG92WZWpQfQIWnKqk_uTIrxPmfPw5N2BnKq2250wQvF7xhENfki68sbIOXdHQqNFDDQd-SmmLDHA2Phki3U9FZ23XncAdo42Uff27DORtT24vDWMPAQmuNWMr3D0IzO-7O9IJGfjznzABcu7vbNdi85ZlmuC9i4RO4h5rF6x7tZtmEwBT5kZ3zmjjJDheBRm4naH2BgjdZFoukumLPwoA1SChQIeRdV3by9WjRXlvG0zEN95wsrlsDBu2r7M2wVSR1ppo49GawejX5y1e6MpRr-tQkCDmeULJhR4cfZF4TUJKmOWlHQUeeAItq5hZBRhFztUqjY3WIw=w3440-h1325"} title={"2022 Reel"} description={"A showcase of my motion design in 2022."} />
                        <IndexCard link={"/work/explorations"} cover={"https://lh3.googleusercontent.com/fife/AKsag4P5e2zpAx088MxVNjxXcDc6m5adRNyqegxljcvioWuY0HAVTb-M0Pqfw41Cd9seEL3unkTR3HOd-MrBBV9dr1__OrZsHPH9a3E44YqAt-bbUh13L00m8xox-YqjyuKTZ5BJPmdBE09Kp5QRf_QcUY9vH7Ew6_EcIlf1PJInNfgnYelOYNMPlcxl8XNr31UsGaazrUXwL2akaSrlTaxcnYMaeQjF4gAU1PlCiNJ9EAMx5kXmcGIFpCmezIDAJZJvXJQWL-1j3zov907m_vW0LIx1tPi6RpofAF_NtrsnPnpjz9qhBN9GrZWdVTkFGNbt5afsWxCVjHo8-lTcJh1Qj2QXWJN54mjpCzpyPsnR0agwo1wMpmc8txnz-wEJeJmurb5Apuh-CGRQnY0wcyRDzn9GwhOcmF_5Qsl5Vy5EihM8bzp1-6-NWn0cjlQZZSelDrHPzivOJnX5nXm12FbOKPkGQKrOfWWs0R_7K-pFVYJhza64OvPQGhJv-gCRL3X8_bgURRkbWvYRC_wmtTO-sv4kRa7XqXx14S5BIf_V2bK9293CZ_0ws_LVnNy1KkqR0Ah9jjHwderEwJwA8wzbjgvOPEioXzAwMuXVjcil7SGqrQiXKiMbkdYzEQJEYWEycTDDJcn_DovI1hmxhbAkg30HtibMHH5LU23pZjesMQNTt1AGe5iJNYyzNmfLttzUIdRodY8d7J27SpUzQGUWbymuh1DELZsZ-a73tFHYOvoi1YlZqkFwV05lKLStQicMobHbDvSbpytZy5f05intx1bpV55F3L4iADuO4xhlxc0jqFRdzpwy28mpSQb2cJFpy3s8u5uvC0l_ynxC5KMKHMDZYERDXZwVfaqQYnIOUIfDfat5hB-1pAueu8Z9-9P1HJB92ZLcBYD-QW3KmlOSBQR6qV8GoaY7gfLAoIgtsqs0KLk-THnw3BMQjTOicMur2mcfOI3_yj3UXv68F6VqadftgRS1KB9Gce2j9KLyIW3GAI6V-BpbRYpaH5VvZAJXWmW8h0WY9CC8UVAQnhOdudVv1iWr3rafAfs2tAjz4LAo9ZFQka9HypNooHKvJBmxmmUVytPkf3hQVxslb9nN-4i5rb97_ucqdMq_Oef1PTv4ZUt9AHNlhxaWrbgHhUS1QPDf4aQN2b7fpd_tkIaJDhFOSPXvWJq5R17KwETKPQspWIWVOR6nBU2tBT-ZsD2FKVL_ZZOzLChNxOG97HVTYhfNYfEG6D4pMeDOAU1P436F-VfJMv2KHN52-a01BQMq-FfO5-F_NP7fjB_OYrZaTFbz5zzO3w8dYGQ5LdYJ2h51OmW6MjjZ3mqkAXoTjBBUIqw98k4YfkRkNsdeOD2yoeu-R2SkE0mxWdJfG6YFjVkEQe4CUd6JQJPR-Vr4DmhgkZ-YMaXg0ZhA_-qdqC4JepY1ZMsGqlaEPeD3yNBHmkXSq3Im3G6z7hPsdB5MjSGXemsbXVtGackD9XoyVe27KY5fDAgxyjGceVe6XJV6ebrcmuPnbEGqviEu802y_54ZFemgGKWOfAqQMEteKDQ00Bf_YKLBzcGXR9dtaQTkvxxSVHO3Ewj3G18QM4Fwrn31iO4DF73VGFZpDq4u7FxeZAcj-xOYZAfTYvuKNbfg6EU=w3440-h1325"} title={"Explorations_AE"} description={"Experimenting with 3D in after effects."} />
                        <IndexCard link={"/work/ios"} cover={"/img/thumbnail/motion/ios.png"} title={"IOS 16"} description={"An academic assignment."} />
                        <IndexCard link={"/work/reel2021"} cover={"https://lh3.googleusercontent.com/fife/AKsag4NOKZN6xzJlbCzYrFebabo6R1zcH06fQmMsEKiRo9wGXvVfR2rkUF0mFpgIe44by8Tl6nVmBmbexG36N8wmuRFro_EsXC3Mz6m6Coj-hUV739Qrjuof8AeNq-Jtw4vQMhdh1JrtohIS-QqGG6tXm2ayR3zrrMimLKqScS1LFohomHFjfE4PiO2FsQbFI_l8KH37SN8xDiDUqdSQDml_xXocopfKLz9ZWNWM6CtC5p0ot4Rsndv4RQWMn9jbjlkiuqbGSe7N9zGvndVfXwq4dINOEF2r8LIg47kbGLHLyeOliKOp4l2TC0XmVh55rrW8glx3m4crJBqMOb3rtpjFm-WQsRQTyMrw9PX4O7gKjgRYTSPgvUXkN_AypLYvnxSKrfQpW26YNnlJ9pFAGS6Jj2JBbvDwIJTgf8u3ArlIOeB_RGx-WBrARSOmqj5KBmKBnE3_svFvqe_fAUy3RizFZyd7jB0_W7IFwOm8iBP2eirHfgo2K0kRUURaMbU6RWERyHtep_RNKB2OlcQkNN7CgG8ia23pgC3acRM_YaDGwSQr6Cmo4MyfPVKe95SDgbYOHvYLy53FugH3GQp6jVnQ7B_uMFcXw377dHVAfP6yZC1gcYaDtQPg3TCLIYgD-0Bv9z4V898HQVSiGJSwkcA66Ae71Q_9RfyUEO3EuhVhkJi5fqmHYJ-kkKREC05v8ThIIdOlBcp9hGkeHn-QY7_srBTpw7GtUXNs2fhiujEvlr2UYPqfMd44lNpgRY1VP-z_9mduUq3PuKWEmJU5CjzhTrXn-_MXoJsIoxUejBTomy3OPwOVeOYZs5TXNdGgMTcZbAc6dXcXSCzrc_qP9hoSFQ-X6UDkLVnWvm-lHXpGGDFTDkg4jsPX8I73POsed-It_2NHdK_8yxf9PCsvbghfdYTmhYfAligsUa1kzZgaYRFrlYVlu05C_bWF2tg_aYlrDas_Gn_zyJbjXvOizvqlNqLMRtG3lvLjzHuDwBh17XxzLbY7DBrB22Qvbq9wxlTZEWnWNYeiFz3FiUIpxxbS8MpWnE2-rP2M6_-5WhhaMseh_QeavVop2LGyx5ZlymF-Cw5KHTDQE4PaLg22kt11I2ntKrkHgJEn-AnwnbBWBQ7IOEnXIqu9h-zlRSdjoShbLlRz_oHQgl1vHTA3p9yNYboAomak1efvLRcj2ffp6QttIhddYhtjCvaxXttITBXn_vLbxQlNEQYx9gkyQwdC7GBD5xl7KlX8Zt5g8of3Xgax8bSFKxNwPdUv15oF82L781NsBrZpWMAWVw-V1g8-fSXUeQF5lHEQ1P9X0kw18j2mR7xShEG8tPmPNNH-Y30IWWJxD5TlrTPZ-h_EhI13G1EHqvj6mAgChdrfv_OEPbwLS9Y-5mKYKjegDmSDSugBIlcZGDvYQ96gQxd9Ph7VApIVcqLbM7b988dQ8tUdoqYcxLJHErRk1zwobeakMRej2W_PsGWhgVqFeKZ_vfQD2x530gXVrvqDjfcWclh47CCYLPB-SnBiSx64piviHYIT9SLXKs2m004PM55Z-ur5AGK-73u5ouryuyQ9HQGApUzxU_XoDbnlVbGNbudqxyt0w3-RtZ9F4K1DQW_MsN95O6xudKSBwkn01H1IL5j_DT8=w3440-h1325"} title={"2021 Reel"} description={"A showcase of my motion design in 2021."} />
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