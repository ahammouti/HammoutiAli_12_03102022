import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className="links">
                <Link className='home__user' to={"/user/12"}>Karl</Link>
                <Link className='home__user' to={"/user/18"}>Cecillia</Link>
            </div>
        </div>
    )
}
export default Home