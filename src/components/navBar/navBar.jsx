import React from 'react'
import { Link } from 'react-router-dom'
import classes from './navBar.module.css'

export default function NavBar() {
    return (
        <ul className={classes.nav__list}>
            <li>
                <Link className={classes.nav__item} to={`/`}>Main</Link>
                <Link className={classes.nav__item} to={`/usestate`}>useState</Link>
                <Link className={classes.nav__item} to={`/useeffect`}>useEffect</Link>
                <Link className={classes.nav__item} to={`/usememo`}>useMemo</Link>
            </li>
        </ul>
    )
}
