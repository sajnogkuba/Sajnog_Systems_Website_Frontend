import type React from "react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
        href={href}
        className="
        rounded-md px-3 py-2 text-m font-medium
        text-white/90
        underline underline-offset-2 decoration-1 decoration-transparent
        hover:decoration-white hover:underline-offset-4 hover:decoration-2
        transition-[text-underline-offset,text-decoration-thickness,text-decoration-color]
        duration-300 ease-in-out
    "
    >
        {children}
    </a>
);

const Navbar: React.FC = () => {
    return (
        <header
            className="sticky top-0 z-50 w-full border-b-8 border-white bg-primary/70 text-on-primary backdrop-blur"
        >
            <nav className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:h-16 sm:px-6 lg:px-8">
                {/* Brand / Logo */}
                <a href="/" className="mr-auto flex items-center gap-2">
                    <div className="h-12 w-7 rounded-md bg-on-primary/90" aria-hidden />
                    <span className="text-xl font-bold tracking-tight text-white">Sajnog Systems</span>
                </a>

                {/* Linki */}
                <div className="hidden items-center gap-1 md:flex">
                    <NavLink href="#contact">Kontakt</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;