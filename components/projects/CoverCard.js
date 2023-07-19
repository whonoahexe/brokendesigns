import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ link, cover, title, description }) {
    return (
        <div className="col-4-xl col-6-lg col-12-xs">
            <Link href={link}><Image src={cover} width={1080} height={1080} className="thumb-cover br-base" alt='cover' /></Link>
            <p className='custom-text font-lg fw-md pt-1'><Link href={link}><span className='pointer transition-base custom-misc-hover'>{title}</span></Link></p>
            <p className="custom-sub-text ls-0">{description}</p>
        </div>
    );
}