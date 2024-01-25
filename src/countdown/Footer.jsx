import FacebookLogo from '/icon-facebook.svg'
import PintrestLogo from '/icon-pinterest.svg'
import InstagramLogo from '/icon-instagram.svg'

const Footer = () => {
    return(
        <footer className='flex gap-5 justify-center items-center footer-bg h-[220px] w-full absolute bottom-0'>
            {/* Facebook Logo */}
            <img src={FacebookLogo}/>

            {/* Pinterest Logo */}
            <img src={PintrestLogo}/>

            {/* Instagram Logo */}
            <img src={InstagramLogo}/>
        </footer>
    )
}

export default Footer