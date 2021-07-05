import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='nav'>
    <ul className="links">
    <li className="link_element"><Link href="/">Home</Link></li>
    <li className="link_element"><Link href="/register">Register</Link></li>
    </ul>
        </div>
    )
}

export default Navbar
