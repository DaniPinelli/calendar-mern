import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                Calendar App
            </span>

            <button className='btn btn-outline-danger' >
                <i className='fas fa-sign-out-alt'></i>}
                <span>  Sign Out</span>
            </button>

        </div>
    )
}

export default Navbar