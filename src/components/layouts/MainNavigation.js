import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavouritesContext from '../../store/favourites-context'
import classes from './MainNavigation.module.css'

export default function MainNavigation() {
    const favouritesCtx = useContext(FavouritesContext)

    const linkStyle = {color: '#fff', textDecoration: 'none'}

    return (
        <header className={classes.header}>
            <div id='title' className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link style={linkStyle} to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link style={linkStyle} to='/favourites'>
                            My Favourites
                            <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
                <div style={{clear: 'both'}}></div>
            </nav>
        </header>
    )
};
