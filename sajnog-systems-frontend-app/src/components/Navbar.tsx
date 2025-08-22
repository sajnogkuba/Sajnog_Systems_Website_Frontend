import type React from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="
        rounded-md px-3 py-2 text-m font-medium
        text-secondary/90
        hover:text-accent
        transition-[text-underline-offset,text-decoration-thickness,text-decoration-color text-color]
        duration-300 ease-in-out
    "
    >
        {children}
    </a>
);

const Navbar: React.FC = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b-8 border-secondary bg-primary/70 text-on-primary backdrop-blur"
        >
            <nav className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <a href="#home" className="mr-auto flex items-center gap-2">
                    <div className="h-12 w-7 rounded-md bg-on-primary/90" aria-hidden />
                    <span className="text-xl font-bold tracking-tight text-secondary hover:text-accent transition-text-color duration-300 ease-in-out">
                        Sajnog-Systems
                    </span>
                </a>

                {/* Linki */}
                <div className="hidden items-center gap-1 md:flex">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">O Nas</NavLink>
                    <NavLink href="#process">Proces</NavLink>
                    <NavLink href="#contact">Kontakt</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;