import React from 'react';
import {Link} from 'gatsby';
import {name, routes} from '../../constants/siteMeta';

const Header = () => {
    const links = Object.values(routes).map(route => {
        // Adding a / to the end of the links so that activeClassName parameter
        // would work correctly.
        const url = route.path === '/' ? route.path : `${route.path}/`;
        const link = { url };
        return (
        <li key={route.path} className="ml-5">
            <Link
             to={link.url}
             activeClassName="font-bold"
             className="transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-base"
             title={link.caption}
            >
            {route.name}
            </Link>
        </li>
        );
    });

    return (
        <header className="flex flex-row items-center px-6 sm:px-12 py-6" >
            <div className="mr-6">
                <div className="font-extrabold text-xl tracking-widest uppercase">
                    {name}
                </div>
            </div>
            <nav>
                <ul className="flex flex-row">
                {links}
                </ul>  
            </nav>
        </header>
    );
}

export default Header;