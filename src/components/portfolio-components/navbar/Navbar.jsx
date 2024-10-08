import Popup from 'reactjs-popup';
import { useState } from 'react';
import { GrBeacon } from 'react-icons/gr';
import { AiOutlineMenu } from 'react-icons/ai';

import style from './style_navbar.module.css';

export function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const navigate = () => {
        setTimeout(() => {
            setShowMenu(false);
        }, 500);
    };

    return (
        <>
            <section className={style.mobileNavbar}>
                <aside className={style.navIconToggle}>
                    <AiOutlineMenu
                        size={40}
                        color="#1A1A1A"
                        cursor={'pointer'}
                        onClick={onClickShowMenu}
                    />

                    <GrBeacon size={40} color="rgb(110, 7, 243)" />
                </aside>

                <Popup
                    modal
                    nested
                    lockScroll
                    open={showMenu}
                    onClose={() => setShowMenu(false)}
                    overlayStyle={{
                        background: 'rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(5px)',
                    }}
                    position="center center"
                >
                    <nav className={style.subMenu}>
                        <a onClick={navigate} className={style.subMenuLinks} href="#about_me">
                            About me
                        </a>
                        <a onClick={navigate} className={style.subMenuLinks} href="#skills">
                            Skills
                        </a>
                        <a onClick={navigate} className={style.subMenuLinks} href="#projects">
                            Projects
                        </a>
                        <a onClick={navigate} className={style.subMenuLinks} href="#footer">
                            Contact
                        </a>
                    </nav>
                </Popup>
            </section>

            <section className={style.desktopNavbar}>
                <GrBeacon size={40} color="rgb(110, 7, 243)" />

                <nav className={style.desktopNavItems}>
                    <a className={style.desktopNavItemsLinks} href="#about_me">
                        About me
                    </a>
                    <a className={style.desktopNavItemsLinks} href="#skills">
                        Skills
                    </a>
                    <a className={style.desktopNavItemsLinks} href="#projects">
                        Projects
                    </a>
                    <a className={style.desktopNavItemsLinks} href="#footer">
                        Contact
                    </a>
                </nav>
            </section>
        </>
    );
}
