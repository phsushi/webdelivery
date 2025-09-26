import {useState, useRef, useEffect} from 'react';
import logo from "../assets/icons/icone_branco.png"
import { Link } from "react-router-dom";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-[#206138] relative">
            <div className="flex justify-between items-center h-20 px-4 md:px-8 lg:px-20">
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-10 text-white text-base xl:text-lg">
                    <img src={logo} alt="Logo" className='w-10 xl:w-12' />
                    
                    <Link to="/" className="hover:underline font-bold"> Home</Link>
                    
                    <div className="relative" ref={dropdownRef}>
                        <button 
                            onClick={toggleDropdown}
                            className="cursor-pointer font-bold hover:underline flex items-center">
                            Menu
                            <svg className={`ml-1 w-4 h-4 transform transition-transform
                             ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" 
                                      strokeLinejoin="round" 
                                      strokeWidth={2} d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-40 bg-[#206138] rounded-md shadow-lg z-50">
                                <div className="py-1">
                                    <a href="/Hamburgueres" className="font-bold block px-4 py-2 text-sm text-white hover:underline">
                                        Hamburgueres
                                    </a>
                                    <a href="/Pratos variados" className="font-bold block px-4 py-2 text-sm text-white hover:underline">
                                        Pratos variados
                                    </a>
                                    <a href="/Vegano" className="font-bold block px-4 py-2 text-sm text-white hover:underline">
                                        Vegano
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                    
                    <Link to="/combos" className="font-bold hover:underline">Combos</Link>
                </nav>

                <div className="lg:hidden flex items-center">
                    <img src={logo} alt="Logo" className='w-10' />
                </div>

                <div className="hidden lg:flex items-center space-x-4">
                    <button className="text-white font-bold hover:underline cursor-pointer">
                        Entrar
                    </button>
                    <button className="text-black bg-white py-2 px-4 xl:px-6 rounded-full 
                    hover:scale-105 font-bold transition-transform cursor-pointer text-sm xl:text-base">
                        Criar Conta
                    </button>
                </div>

                <button 
                    onClick={toggleMobileMenu}
                    className="lg:hidden text-white p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden bg-[#206138] border-t border-green-400">
                    <nav className="px-4 py-4 space-y-3">
                        <a href="/Home" className="block text-white font-bold hover:underline">Home</a>
                        
                        <div>
                            <button 
                                onClick={toggleDropdown}
                                className="w-full text-left text-white font-bold hover:underline flex items-center justify-between cursor-pointer">
                                Menu
                                <svg className={`w-4 h-4 transform transition-transform
                                 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" 
                                          strokeLinejoin="round" 
                                          strokeWidth={2} d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="mt-2 pl-4 space-y-2">
                                    <a href="/Hamburgueres" className="block text-white font-bold hover:underline">
                                        Hamburgueres
                                    </a>
                                    <a href="/Pratos variados" className="block text-white font-bold hover:underline">
                                        Pratos variados
                                    </a>
                                    <a href="/Vegano" className="block text-white font-bold hover:underline">
                                        Vegano
                                    </a>
                                </div>
                            )}
                        </div>
                        
                        <Link to="/combos" className="block text-white font-bold hover:underline">Combos</Link>
                        
                        <div className="pt-4 space-y-3 border-t border-green-400">
                            <button className="block text-white font-bold hover:underline cursor-pointer">
                                Entrar
                            </button>
                            <button className="block text-black bg-white py-2 px-6 rounded-full 
                            font-bold transition-transform hover:scale-105 transition-transform cursor-pointer">
                                Criar Conta
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;