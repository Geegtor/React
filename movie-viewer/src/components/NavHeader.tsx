import * as React from "react"
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import { MovieList } from './pages/MovieList';
import { About } from './pages/About'
import "./NavHeader.css"

type Props = {
    params: string[]
}

export const NavHeader: React.FC<Props> = ({ params }) => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Main</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
                <hr></hr>
            </nav>
        </header>
        <body>
            <Switch>
                    <Route path={'/'} exact component={MovieList} />
                    <Route path={'/about'} exact component={About} />
            </Switch>
        </body>
        </>
    )
}