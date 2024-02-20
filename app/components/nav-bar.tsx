'use client'

import React from 'react'
import Link from 'next/link'

const NavBar = () => {
    const [isActive, setIsActive] = React.useState('home');
    const handleClick = (buttonName: string) => {
        setIsActive(buttonName);
    }
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
       <li><Link href="/" className={isActive === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>Home</Link></li>
       <li><Link href="/cards" className={isActive === 'cards' ? 'active' : ''} onClick={() => handleClick('cards')}>Cards</Link></li>
    </ul>
  )
}

export default NavBar