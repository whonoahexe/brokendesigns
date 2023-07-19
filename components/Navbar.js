import {useRef} from 'react';
import Link from 'next/link';
// lottie
import Lottie from "lottie-react";
import Data from "../public/data.json";
// recoil
import { useRecoilState } from 'recoil';
import { sidebaseState } from "../atoms/triggerAtoms";

const Navbar = () => {

    const lottieRef = useRef();
    const lottieData = useRef();

    const homeRef = useRef();
    const workRef = useRef();
    const contactRef = useRef();

    const [active, setActive] = useRecoilState(sidebaseState);

    const handleClick = () => {
        if(lottieData.current.className == "sidebar") {
            lottieData.current.className = 'sidebar-toggled';
            lottieRef.current.setDirection(1);
            lottieRef.current.playSegments(1, 21, true);
            setActive(true);
        } else {
            lottieData.current.className = "sidebar";
            lottieRef.current.setDirection(-1);
            lottieRef.current.play();
            setActive(false);
        }
    }
    
    const closeFunc = () => {
        lottieData.current.className = "sidebar";
        lottieRef.current.setDirection(-1);
        lottieRef.current.play();
        setActive(false);
    }

    return (
        <>
            <div className="nav">

                <div className="nav-content">
                    <Link href="/"><img src="/vector.svg" alt="logo" className='custom-text font-lg pointer svg unselectable'/></Link>
                    <div className="display-f align-i-center">
                        <div className="nav-burger">
                            <div className="lottie" onClick={handleClick} >
                                <Lottie lottieRef={lottieRef} animationData={Data} loop={false} autoplay={false} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div ref={lottieData} className="sidebar">
                    <ul>
                        <li><Link href="/"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}><span ref={homeRef} className="transition-base">Home</span></a></Link></li>
                        <li><Link href="/work"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}><span ref={workRef} className="transition-base">Work</span></a></Link></li>
                        <li><Link href="/contact"><a className='lg-font-xl xs-font-lg custom-text unselectable' onClick={closeFunc}><span ref={contactRef} className="transition-base">Contact</span></a></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;