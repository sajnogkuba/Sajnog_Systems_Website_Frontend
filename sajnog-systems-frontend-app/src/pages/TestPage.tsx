const TestPage: React.FC = () => {
        return (
            <section id="onas" aria-labelledby="about-title" className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 to-white" />

                <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 lg:py-24">
                    {/* Nagłówek i opis firmy */}
                    <header className="mb-10 text-center">
                        <h2 id="about-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Sajnóg-Systems — systemy alarmowe i monitoring dla domów i firm
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Rodzinne przedsiębiorstwo ojciec–syn z Warszawy. Projektujemy, montujemy i konfigurujemy
                            SSWiN (alarmy), CCTV (monitoring wizyjny) oraz Kontrolę Dostępu. Pracujemy prosto i rzetelnie —
                            bez naciągania, z naciskiem na dobór sprzętu do faktycznych potrzeb.
                        </p>
                    </header>

                    {/* Szybkie fakty / zakres */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            { t: "Zakres usług", d: "SSWiN · CCTV · Kontrola dostępu" },
                            { t: "Obszar", d: "Warszawa i okolice · realizacje w całej Polsce" },
                            { t: "Gwarancja", d: "2 lata zgodnie z prawem" },
                            { t: "Kontakt", d: "Odpowiadamy do 24 h" },
                        ].map((item) => (
                            <div key={item.t} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-900">{item.t}</h3>
                                <p className="mt-2 text-sm text-gray-600">{item.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* Marki / technologie */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
                        {["Dahua", "Hikvision", "Satel", "Bosch"].map((brand) => (
                            <span key={brand} className="rounded-full border border-gray-200 bg-white px-3 py-1 shadow-sm">
              {brand}
            </span>
                        ))}
                    </div>

                    {/* Krótsza wersja opisu (do SEO/hero) */}
                    <p className="mx-auto mt-8 max-w-3xl text-center text-gray-700">
                        Montujemy od mieszkań i domów po biura, hale i magazyny. Każdy projekt rozważamy indywidualnie,
                        a jeśli potrzebujesz stałego monitoringu interwencyjnego — koordynujemy podłączenie z zaprzyjaźnioną agencją.
                    </p>

                    {/* Zespół */}
                    <div className="mt-14">
                        <h3 className="text-2xl font-semibold text-gray-900">Zespół</h3>

                        {/* Kuba */}
                        <article className="mt-6 grid items-center gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-[auto,1fr]">
                            <img
                                src="/images/team/kuba.jpg" // TODO: podmień na rzeczywiste zdjęcie
                                alt="Kuba Sajnóg — zdjęcie portretowe"
                                className="h-28 w-28 rounded-2xl object-cover ring-1 ring-gray-200"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">Kuba Sajnóg</h4>
                                <p className="text-sm text-gray-500">Prezes / operacje i finanse · konfiguracja sprzętu</p>
                                <p className="mt-2 text-sm text-gray-700">
                                    Odpowiadam za sprawy formalne, wyceny, faktury i finanse firmy, tworzę także naszą stronę i materiały.
                                    Studiuję informatykę, więc naturalnie zajmuję się też konfiguracją urządzeń i integracjami.
                                    Sporadycznie biorę udział w montażach — na co dzień pracuję również jako programista, a rozwój rodzinnego
                                    biznesu to mój priorytet długoterminowy.
                                </p>
                            </div>
                        </article>

                        {/* Robert */}
                        <article className="mt-6 grid items-center gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:grid-cols-[auto,1fr]">
                            <img
                                src="/images/team/robert.jpg" // TODO: podmień na rzeczywiste zdjęcie
                                alt="Robert Sajnóg — zdjęcie portretowe"
                                className="h-28 w-28 rounded-2xl object-cover ring-1 ring-gray-200"
                                loading="lazy"
                            />
                            <div>
                                <h4 className="text-xl font-semibold text-gray-900">Robert Sajnóg</h4>
                                <p className="text-sm text-gray-500">Ekspert instalacji · projektowanie systemów</p>
                                <p className="mt-2 text-sm text-gray-700">
                                    Ponad 20 lat doświadczenia w branży zabezpieczeń. Projektuje i montuje instalacje alarmowe,
                                    monitoring wizyjny i kontrolę dostępu — doradzi, co ma sens i jak najlepiej rozmieścić elementy,
                                    by uzyskać realne bezpieczeństwo. Prywatnie pasjonat hodowli gołębi ozdobnych, mąż i ojciec.
                                </p>
                            </div>
                        </article>
                    </div>

                    {/* CTA */}
                    <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gray-900 p-6 text-white sm:flex-row">
                        <div>
                            <h3 className="text-lg font-semibold">Masz pytania lub chcesz wycenę?</h3>
                            <p className="text-sm text-gray-300">Skontaktuj się — odpowiemy maksymalnie w 24 godziny.</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <a href="#contact" className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">
                                Formularz kontaktowy
                            </a>
                            <a href="tel:+48111222333" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                                Zadzwoń
                            </a>
                            <a href="mailto:kontakt@szajnog-systems.pl" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20">
                                Napisz e‑mail
                            </a>
                        </div>
                    </div>
                </div>

                {/* SEO: JSON-LD (bez ryzykownych deklaracji certyfikatów) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Sajnóg-Systems",
                            url: "https://twojadomena.pl",
                            description:
                                "Systemy alarmowe (SSWiN), monitoring CCTV i kontrola dostępu — Warszawa i cała Polska. Rodzinne przedsiębiorstwo ojciec–syn.",
                            areaServed: ["Warszawa", "Polska"],
                            keywords: ["SSWiN", "CCTV", "Kontrola dostępu", "Systemy alarmowe", "Monitoring"],
                            brand: ["Dahua", "Hikvision", "Satel", "Bosch"],
                            contactPoint: [{
                                "@type": "ContactPoint",
                                contactType: "customer support",
                                email: "kontakt@szajnog-systems.pl",
                                telephone: "+48 111 222 333",
                                availableLanguage: ["pl"],
                            }],
                        }),
                    }}
                />
            </section>
        );
}

export default TestPage;