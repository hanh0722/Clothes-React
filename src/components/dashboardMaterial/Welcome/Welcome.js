import React from 'react';
import {Link} from 'react-router-dom';
const WelcomeAdmin = ({onName}) =>{
    return(
        <div className='greeting'>
            <p>Welcome Back {onName}!</p>
            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything</p>
            <Link to='/dashboard/admin/blog'><button>Go Now</button></Link>
        </div>
    )
}
export default WelcomeAdmin;