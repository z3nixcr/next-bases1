import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from ".."

const links = [
    { text: 'About',    path: '/about'      },
    { text: 'Pricing',  path: '/pricing'    },
    { text: 'Contact',  path: '/contact'    }
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800/30 p-2 m-2 rounded">
            <Link href={'/'} className="flex items-center">
                <HomeIcon className="mr-2" />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {
                links.map(({text, path}) => (
                    <ActiveLink key={path} {...{text, path}} />
                ))
            }

        </nav>
    )
}