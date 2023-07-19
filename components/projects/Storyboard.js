import Image from 'next/image';

export default function ProjectCard({ frame, image, description }) {
    return (
        <div className="col-4-lg col-12-xs">
            <p className='custom-text font-lg'>{frame}</p>
            <div className="mt-2">
                <Image src={image} width={1920} height={1080} className="thumb-cover br-base" alt='styleframe' />
            </div>
            <p className='custom-text mt-2'>{description}</p>
        </div>
    );
}