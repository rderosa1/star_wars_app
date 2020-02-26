import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    return (
            <nav>
                <ul className = "nav-links">

                    <Link to = "/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to = "/allCharacters">
                        <li>All Characters</li>
                    </Link>


                    <Link to = "/planets">
                        <li>All Planets</li>
                    </Link>

                </ul>

            </nav>
    )

}