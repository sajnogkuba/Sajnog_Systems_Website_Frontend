import ManufacturersGalery from "./ManufacturersGalery";

const HomePage: React.FC = () => {
    return (
        <div className="bg-primary py-12 pb-0 w-full px-8 justify-items-center">
            <h1 className="text-4xl font-bold">
                <span className="text-accent">Sajnóg-Systems</span>
                <span className="text-white"> – Twoje bezpieczeństwo</span>
            </h1>
            <h2 className="text-2xl font-bold text-white mt-2">
                Nowoczesne systemy alarmowe i monitoring dla domu i firmy
            </h2>
            <h3 className="text-xl font-semi-bold text-white mt-2">
                Chroń to, co najważniejsze! Instalujemy nowoczesne{" "}
                <span className="text-accent">systemy alarmowe </span> i{" "}
                <span className="text-accent">systemy CCTV </span> dopasowane do Twoich
                potrzeb.
            </h3>

            <div className="flex flex-col lg:flex-row gap-6 p-12 w-full mx-auto">
                <div className="bg-white/90 flex-1 p-12 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-primary mt-2 border-b-4 border-accent inline-block">
                        Co nas wyróżnia?
                    </h2>
                    <ul className="list-disc list-inside marker:text-accent space-y-2 mt-2">
                        <li><span className="text-accent">Doświadczenie</span> - od ponad 20 lat zakładamy systemy zabezpieczeń.</li>
                        <li><span className="text-accent">Najlepszy sprzęt</span> - pracujemy tylko na sprzęcie sprawdzonych producentów.</li>
                        <li><span className="text-accent">Indywidualne podejście</span> - każdy projekt dopasowujemy do Twoich potrzeb.</li>
                        <li><span className="text-accent">Szybki montaż</span> - instalacja w krótkim czasie, bez zbędnych opóźnień.</li>
                        <li><span className="text-accent">Wsparcie</span> - po instalacji służymy pomocą.</li>
                    </ul>
                </div>
                <div className="bg-white/90 flex-1 p-12 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-primary mt-2 border-b-4 border-accent inline-block">
                        Gdzie możemy pomóc?
                    </h2>
                    <ul className="list-disc list-inside marker:text-accent space-y-2 mt-2">
                        <li><span className="text-accent">Domy jednorodzinne</span> - zabezpiecz swój dom, ogród oraz
                            rodzinę.
                        </li>
                        <li><span className="text-accent">Firmy i biura</span> - pełne zabezpieczenie Twojego biznesu.
                        </li>
                        <li><span className="text-accent">Sklepy i galerie handlowe</span> - kontrola nad ruchem
                            klientów i bezpieczeństwem.
                        </li>
                        <li><span className="text-accent">Magazyny i hale produkcyjne</span> - bezpieczeństwo
                            pracowników i towarów.
                        </li>
                        <li><span className="text-accent">Szkoły i instytucje</span> - bezpieczeństwo uczniów i
                            pracowników.
                        </li>
                        <li><span className="text-accent">Wszystko co potrzebujesz chronić</span> - masz nietypowy obiekt? Odezwij się!
                        </li>
                    </ul>
                </div>
            </div>
            <ManufacturersGalery />
        </div>
    );
};

export default HomePage;
