// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <>
            <div className="row mt-6 mb-2">
                <div className="col-6-md col-12-xs">
                    <p className='custom-text lg-font-xl xs-font-lg md-text-left xs-text-center'><a href="mailto:broken.contact.1211@gmail.com" className='custom-text transition-base custom-sub-text-hover'><span className='pointer'>Send an email</span><span className="lg-font-lg xs-font-md custom-text pl-2 pointer"><FontAwesomeIcon icon={faLocationArrow} /></span></a></p>
                </div>
                <div className="col-6-md col-12-xs">
                    <div className="row ml-1 gap-1 md-display-f xs-display-n">
                        <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://twitter.com/TheBroken_XD' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Twitter</a></p></div>
                        <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://www.instagram.com/thebroken_xd/' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Instagram</a></p></div>
                        <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://discordapp.com/users/846291281746329601' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Discord</a></p></div>
                        <div className="col-6-xs"><p className='lg-font-lg xs-font-md lg-fw-reg xs-fw-md'><a href='https://github.com/TheBrokenXD' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Github</a></p></div>
                    </div>
                    <div className='xs-display-f md-display-n justify-between mt-3 pl-2 pr-2'>
                        <p className='font-md fw-md'><a href='https://twitter.com/TheBroken_XD' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Twitter</a></p>
                        <p className='font-md fw-md'><a href='https://www.instagram.com/thebroken_xd/' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Instagram</a></p>
                    </div>
                    <div className='xs-display-f md-display-n justify-between mt-2 mb-2 pl-2 pr-2'>
                        <p className='font-md fw-md'><a href='https://discordapp.com/users/846291281746329601' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Discord</a></p>
                        <p className='font-md fw-md'><a href='https://github.com/TheBrokenXD' target="_blank" rel="noreferrer" className='custom-sub-text transition-base custom-text-hover'>Github</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Footer;