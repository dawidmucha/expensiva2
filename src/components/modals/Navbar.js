import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import store from '../../store/store'
import { logInUser, logOutUser } from '../../store/action'

const Navbar = () => {
    useEffect(() => {
        console.log('shoppe', store)
    }, [])

    return (
        <div>
            <div>welcome to navbar</div>

            <div>
                <Link to='/stats'>Stats</Link>
                <Link to='/'>Dashboard</Link>
                <Link to='/categories'>Categories</Link>


                { store.getState().isLoggedIn.toString() } 
                {
                store.getState().isLoggedIn ? 
                    <div onClick={() => store.dispatch(logOutUser())}>log out</div> :
                    <div onClick={() => store.dispatch(logInUser('dupa123'))}>log in</div>
                }
            </div>
        </div>
    )
}

export default Navbar //component doesnt update even though redux store has. most likely you have to use connect() and mapStateToProps