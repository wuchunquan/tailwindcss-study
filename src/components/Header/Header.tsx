import "./Header.css"
import {Link, Router, useHref, useLocation, useMatch} from "react-router-dom";
import React, {useContext, useState} from "react";

function ALink({name, to, locationPathname}: { name: string, to: string, locationPathname: string }) {

    // return <a style={{color:locationPathname==href?"red":"inherit"}} href={href}>{name}</a>
    return <Link style={{color: locationPathname == to ? "var(--color-title-red)" : "inherit"}} to={to}>{name}</Link>
}

export default function Header({style}:{style?:React.CSSProperties }) {
    const location = useLocation()
    const locationPathname = location.pathname
    return (<header className="font-bold m-0 flex flex-row bg-gray-600 border-b-4 border-b-gray-500">
        <h1 className="md:text-3xl mx-2 md:mx-4 flex flex-row  justify-center items-center">
            <span className="text-blue-200 hover:text-blue-300">新</span>
            <span className="ml-1 text-red-400 hover:text-red-200">视感</span>
        </h1>
        <nav className="header-nav">
            <ul>
                <li><ALink name="首页" to="/" locationPathname={locationPathname}></ALink>
                </li>
                <li><ALink name="文档" to="/docs" locationPathname={locationPathname}></ALink>
                </li>
                <li><ALink name="案例" to="/examples" locationPathname={locationPathname}></ALink>
                </li>
                <li><ALink name="新闻" to="/news" locationPathname={locationPathname}></ALink>
                </li>
                <li><ALink name="关于" to="/about" locationPathname={locationPathname}></ALink>
                </li>
            </ul>
        </nav>
    </header>)
}