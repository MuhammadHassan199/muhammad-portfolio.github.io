import './index.scss'
import LogoS from '../../../assets/images/potrait6.jpg';

const Logo = () => {
    return (
        <div className='logo-container'>
            <img className="solid-logo" src={LogoS} alt="S"/>
        </div>
    )
}


export default Logo