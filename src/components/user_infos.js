import userImage from '../images/tate.webp'

function UserInfo(){
    return (
        <div className='user-container'>
            <img className='user-image' src={ userImage } alt='Tate Image' width='280px'/>
            <div className='user-info'>
                <span className='user-name'>Andrew Tate</span>
                <span className='user-job'>Frontend Developer</span>
                <span className='user-site'>tate.website</span>

                <div className='user-buttons'>
                    <button className='mail-button'><i className="fa-solid fa-envelope"></i> Email </button>
                    <button className='linekin-button'><div className='linkedin-box'><i className="fa-brands fa-linkedin-in"></i></div>LinkedIn</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;