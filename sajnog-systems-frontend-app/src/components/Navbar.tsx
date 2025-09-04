import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b-8 border-accent bg-primary/90 text-on-primary backdrop-blur p-4">
            <nav className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 lg:px-8">
                {/* Brand / Logo */}
                <HashLink smooth to="/#home" className="mr-auto flex items-center gap-2">
                    <img src="/Logo-white.png" alt="Sajnóg-Systems Logo" className="h-18"></img>
                </HashLink>

                {/* Desktop links */}
                <div className="hidden lg:flex items-center gap-1">
                    <HashLink smooth to="/#home" className="px-3 py-2 text-white hover:text-accent">Home</HashLink>
                    <HashLink smooth to="/#about" className="px-3 py-2 text-white hover:text-accent">O Nas</HashLink>
                    <HashLink smooth to="/#process" className="px-3 py-2 text-white hover:text-accent">Proces</HashLink>
                    <HashLink smooth to="/#contact" className="px-3 py-2 text-white hover:text-accent">Kontakt</HashLink>
                    <HashLink smooth to="/#contact" className="px-3 py-2 bg-accent text-white rounded-lg hover:text-accent hover:bg-white transition-colors duration-300 ease-in-out">Umów darmową konsultację!</HashLink>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="lg:hidden p-2 rounded-md text-white hover:bg-primary/50"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-24 left-0 w-full lg:hidden bg-primary/90 backdrop-blur text-on-primary px-4 py-4 space-y-2">
                    <HashLink smooth to="/#home" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>Home</HashLink>
                    <HashLink smooth to="/#about" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>O Nas</HashLink>
                    <HashLink smooth to="/#process" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20" onClick={() => setIsOpen(false)}>Proces</HashLink>
                    <HashLink smooth to="/#contact" className="block px-3 py-2 text-white rounded-md hover:bg-accent/20 scroll-mt-30" onClick={() => setIsOpen(false)}>Kontakt</HashLink>
                    <HashLink smooth to="/#contactform" className="px-3 py-2 bg-accent text-white rounded-lg hover:text-accent hover:bg-white transition-colors duration-300 ease-in-out">Umów darmową konsultację!</HashLink>
                </div>
            )}
        </header>
    );
};

export default Navbar;
