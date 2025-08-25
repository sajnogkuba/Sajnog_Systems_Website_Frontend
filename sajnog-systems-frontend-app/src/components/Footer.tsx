import {Mail, Phone, Warehouse} from "lucide-react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary border-t-6 border-secondary text-secondary pt-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Główna sekcja w 4 kolumnach */}

                    <div className="flex flex-row gap-8">
                        {/* O Nas */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">O Nas</h3>
                            <p className="text-sm text-secondary/90">
                                Lorem ipsum quia dolor sit porro quisquam est qui amet consectetur adipisci,
                                sed quia duis aute irure dolor in reprehenderit dolore magna aliqua,
                                porro quisquan est qui nisi ut aliquid ex ea commodo.
                                Culpa quia officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        {/* Sekcje */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Sekcje</h3>
                            <ul className="list-disc pl-5 space-y-3 text-sm">
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#about">O nas</a>
                                </li>
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#process">Proces</a>
                                </li>
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#contact">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        {/* Oferta */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Oferta</h3>
                            <ul className="list-disc pl-5 space-y-3 text-sm">
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#cct">Systemy CCTV</a>
                                </li>
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#sswin">Systemy alarmowe</a>
                                </li>
                                <li className="hover:text-accent transition-colors duration-300 ease-in-out">
                                    <a href="#sswin">Systemy kontroli dostępu</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        {/* Kontakt */}
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">Kontakt</h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2">
                                    <Mail className="h-6 w-6"/>
                                    <a href="mailto:sajnog.systems@gmail.com">sajnog.systems@gmail.com</a>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Phone className="h-6 w-6"/>
                                    <span>603-337-347, 697-540-093</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Warehouse className="h-6 w-6"/>
                                    <span>05-205 Dobczyn, pow. wołomiński</span>
                                </li>
                            </ul>
                        </div>
                    </div>


                </div>


                {/* Dolny pasek */}
                <div
                    className="mt-10 pb-8 border-t border-on-surface/10 border-additional pt-6 flex flex-col items-center justify-between gap-4 text-xs sm:flex-row">
                    <p className='text-additional'>© 2025 Sajnóg-Systems. Wszelkie prawa zastrzeżone.</p>
                    <a href="/privacy" className="text-additional">Polityka prywatności</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;