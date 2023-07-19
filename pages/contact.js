import Head from 'next/head'
import Link from 'next/link';
import { useState, useRef } from "react";

const Contact = () => {

    const toastRef = useRef();

    const [details, setDetails] = useState({
        email: '',
        subject: '',
        message: ''
    });

    const submitForm = (e) => {
        if (details.email === '' || details.subject === '' || details.message === '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if (details.email.indexOf('@') === -1) {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please enter a valid email";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            e.preventDefault();
            toastRef.current.className = "toast custom-color-bg";
            toastRef.current.children[0].innerHTML = "Message sent successfully";
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-color-bg"
            }, 2000)

            const text = `Hillow Hillow! You got a new client! Yay! ${details.email} says ${details.subject}. Message: ${details.message}, Date: ${new Date().toLocaleDateString()}, Time: ${new Date().toLocaleTimeString()}`;
            
            const url = "https://api.telegram.org/bot5577721582:AAFJRI9RgGZc0wym9iuNW6lPKwUpR22zK8U/sendMessage?chat_id=@broken_jarvis&text=" + text;
            fetch(url).then(res => res.json())
        }
    }

    return (
        <>
            <Head>
                <title>Broken - Contact</title>
                <meta name="description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <link rel="canonical" href="https://brokendesigns.studio/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Broken - Contact" />
                <meta property="og:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta property="og:url" content="https://brokendesigns.studio/" />
                <meta property="og:site_name" content="Broken" />
                <meta name="twitter:title" content="Broken - Contact" />
                <meta name="twitter:description" content="Hey! I'm Broken. A passionate self-taught motion, graphic, web designer." />
                <meta name="twitter:url" content="https://brokendesigns.studio/" />
                <meta name="twitter:site" content="@TheBroken_XD" />
                <meta name="twitter:creator" content="@TheBroken_XD" />
            </Head>

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md custom-text'>Error! please check your code</p>
            </div>

            <div>
                <div className="row justify-center align-i-center h-screen">
                    <div className="col-11-xs">

                        <div className='card custom-card-bg-gradient justify-between br-md md-p-3 xs-p-2 md-mt-0 xs-mt-8'>
                            <div className="row">

                                <div className="col-9-xl col-12-xs column justify-center form-border-right">
                                    <form>
                                        <div className="row gap-1">
                                            <div className="col-6-md col-12-xs">
                                                <div className="column">
                                                    <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                                    <input type="email" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Enter your email' id='email' onChange={ (e) => { setDetails({ ...details, email: e.target.value }) } }/>
                                                </div>
                                            </div>
                                            <div className="col-6-md col-12-xs">
                                                <div className="column">
                                                    <label className='custom-sub-text fw-md' htmlFor="subject">Subject</label>
                                                    <input type="text" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base' placeholder='Brief your subject' id='subject' onChange={ (e) => { setDetails({ ...details, subject: e.target.value }) } }/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column mt-2">
                                            <label className='custom-sub-text fw-md'>Message</label>
                                            <input type="text" required className='mt-1 input-t custom-card-bg custom-sub-text shadow-base h-137-px' onChange={ (e) => { setDetails({ ...details, message: e.target.value }) } }/>
                                        </div>
                                        <div className="md-display-f xs-display-b justify-between align-i-center mt-3">
                                            <p className="md-font-lg xs-font-md md-text-left xs-text-center custom-sub-text">I will reach out to you soon!</p>
                                            <div className='md-display-b xs-display-f justify-center'>
                                                <button className="custom-btn-rounded custom-text pl-6 pr-6 pt-2 pb-2 md-mt-0 xs-mt-2" onClick={submitForm}>Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3-xs column align-i-end justify-center xl-display-f xs-display-n">
                                    <p className='font-xl fw-bold custom-text'>Contact</p>
                                    <p className='custom-sub-text pt-2 display-f align-i-center'>See my work <Link href="/work"><button className='custom-btn-rounded ml-2 shadow-base custom-text'>Work</button></Link></p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Contact;