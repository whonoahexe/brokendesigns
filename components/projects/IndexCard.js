import Link from 'next/link';
import Image from 'next/image';
// framer motion
import { motion } from 'framer-motion';

export default function ProjectCard({ link, cover, title, description }) {

    const easing = [0.77, 0, 0.18, 1];
    
    // variants
    const fadeInUp = {
        initial: {
            y: 60,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: easing
            }
        }
    }

    return (
        <motion.div variants={fadeInUp} className="col-6-lg col-12-xs">
            <Link href={link}><Image src={cover} width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
            <p className='custom-text font-lg fw-md pt-1'><Link href={link}><span className='pointer transition-base custom-misc-hover'>{title}</span></Link></p>
            <p className="custom-sub-text ls-0">{description}</p>
        </motion.div>
    );
}