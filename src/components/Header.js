import Logo from 'media/trampo-logo.png';

function Header() {
    return (
        <div className='header'>
            <img src={Logo} className='header--logo'></img>
            <p>@tramponomade</p>
        </div>
    )
}

export default Header