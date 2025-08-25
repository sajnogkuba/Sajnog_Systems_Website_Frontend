import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b-8 border-secondary bg-primary/70 text-on-primary backdrop-blur">
            <nav className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <HashLink smooth to="/#home" className="mr-auto flex items-center gap-2">
                    <div className="h-12 w-7 rounded-md bg-on-primary/90" aria-hidden />
                    <span className="text-xl font-bold tracking-tight text-secondary hover:text-accent transition-colors duration-300 ease-in-out">
            Sajnog-Systems
          </span>
                </HashLink>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-1">
                    <HashLink smooth to="/#home" className="px-3 py-2 text-white hover:text-accent">Home</HashLink>
                    <HashLink smooth to="/#about" className="px-3 py-2 text-white hover:text-accent">O Nas</HashLink>
                    <HashLink smooth to="/#process" className="px-3 py-2 text-white hover:text-accent">Proces</HashLink>
                    <HashLink smooth to="/#contact" className="px-3 py-2 text-white hover:text-accent">Kontakt</HashLink>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-md text-white hover:bg-primary/50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-14 left-0 w-full md:hidden bg-primary/90 backdrop-blur text-on-primary px-4 py-4 space-y-2">
                    <HashLink smooth to="/#home" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>Home</HashLink>
                    <HashLink smooth to="/#about" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>O Nas</HashLink>
                    <HashLink smooth to="/#process" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>Proces</HashLink>
                    <HashLink smooth to="/#contact" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>Kontakt</HashLink>
                </div>
            )}
        </header>
    );
};

export default Navbar;
