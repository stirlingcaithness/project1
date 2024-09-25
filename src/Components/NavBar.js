import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [navbar, setNavbar] = useState(false);


    // const changeBackground = () => {
    //     if(window.scrollY >= 60) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false)
    //     }
    // }
    
    // useEffect(() => {
    //     window.addEventListener("scroll", changeBackground);
    // }, [])

    useEffect(() => {
		const changeHeader = () => {
			if (window.scrollY >= 40) {
				setNavbar(true);
			} else {
				setNavbar(false);
			}
		};
		window.addEventListener('scroll', changeHeader);
		return () => {
			window.removeEventListener('scroll', changeHeader);
		};
	}, []);


    return ( 
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            {/* <h1>Project1</h1> */}
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/character'>Character</Link>
                <Link to='/anime'>Anime</Link>
                <Link to='/amv'>AMV</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;