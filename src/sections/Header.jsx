// import { useLocation } from 'react-router-dom';

import { brainwave } from '../assets';
import MenuSvg from '../assets/svg/MenuSvg';
import { navigation } from '../constants';
import Button from '../components/Button';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
// import Button from '../components';

import { HamburgerMenu } from './design/Header';

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        setOpenNavigation(false);
        enablePageScroll();
    };

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50 border-b border-neutral-gray500 lg:border-l-neutral-almostBlack/90 lg:backdrop-blur-sm
              ${
                  openNavigation
                      ? 'bg-neutral-almostBlack'
                      : 'bg-neutral-almostBlack/90 backdrop-blur-sm'
              }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a href="#hero" className="block w-48 xl:mr-8">
                    <img
                        src={brainwave}
                        alt="Brainwave"
                        width={190}
                        height={40}
                    />
                </a>

                <nav
                    className={` ${openNavigation ? 'flex' : 'hidden'}
                    fixed top-[5rem] left-0 right-0 bottom-0 lg:static bg-neutral-almostBlack lg:bg-transparent lg:flex lg:mx-auto `}
                >
                    <div className="relative z-2 flex-center flex-col lg:flex-row m-auto">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase text-white transition-colors hover:text-accent-vibrantPurple lg:hover:text-white
                                  px-6 py-6 lg:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5  xl:px-12
                                  ${item.onlyMobile ? 'lg:hidden' : ''}
                                  ${
                                      item.url === pathname.hash
                                          ? 'z-2 lg:text-neutral-white'
                                          : 'lg:text-neutral-white/50'
                                  }
                                  `}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <a
                    href="#signup"
                    className="button hidden lg:block mr-8 text-neutral-white/50 transition-colors hover:text-neutral-white  "
                >
                    New account
                </a>

                <Button className="hidden lg:inline-flex" href="#login">
                    Sign in
                </Button>

                <Button
                    className="ml-auto lg:hidden"
                    px="px-3"
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
};

export default Header;
