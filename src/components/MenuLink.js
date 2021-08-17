import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import TitleContext from '../context/TitleContext';

export default function MenuLink({ label, to, activeOnlyWhenExact, children }) {
    return (
        <TitleContext.Consumer>
            {(value) => (
                <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
                    var active = 'menu-item'

                    if (match) {
                        active += ' active';
                    }
                    return (
                        <div className={active}>
                            {children}
                            <NavLink to={to} onClick={() => value.update(label)}>{label}</NavLink>
                        </div>
                    )
                }} />
            )}
        </TitleContext.Consumer>

    )
}
