const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="w-screen bg-primary py-15">
            <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800 leading-relaxed bg-white rounded-xl outline-accent outline-4 shadow-5xl">
                <h1 className="text-3xl font-bold text-primary mb-6">
                    <span className="text-accent">Sajnóg-Systems</span> - Polityka prywatności
                </h1>

                <p className="mb-6">
                    Niniejsza Polityka prywatności określa zasady przetwarzania i
                    ochrony danych osobowych przekazanych przez Użytkowników w
                    związku z korzystaniem ze strony internetowej
                    <span className="font-semibold"> Sajnóg-Systems Jakub Sajnóg</span>.
                </p>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">1. Administrator danych</h2>
                    <p>
                        Administratorem danych osobowych jest{" "}
                        <span className="font-semibold">Sajnóg-Systems Jakub Sajnóg</span>, z
                        siedzibą w <span className="font-semibold">05-205 Dobczyn, ul. Krzywa 5</span>,
                        NIP: 1251766639, REGON: 528375607. Kontakt w sprawach
                        związanych z ochroną danych:{" "}
                        <span className="font-semibold">sajnog.systems@gmail.com</span>.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">2. Jakie dane zbieramy</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>imię i nazwisko,</li>
                        <li>numer telefonu,</li>
                        <li>adres e-mail,</li>
                        <li>miasto,</li>
                        <li>treść wiadomości przesłanej w formularzu.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">3. Cel przetwarzania danych</h2>
                    <p>Dane osobowe przetwarzane są w celu:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>udzielenia odpowiedzi na przesłane zapytanie,</li>
                        <li>prowadzenia korespondencji związanej z działalnością firmy,</li>
                        <li>archiwizacji korespondencji (maksymalnie przez 12 miesięcy).</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">4. Udostępnianie danych</h2>
                    <p>
                        Dane mogą być przekazywane podmiotom świadczącym usługi
                        hostingowe, obsługę poczty elektronicznej oraz IT, wyłącznie
                        w zakresie niezbędnym do realizacji usług. Dane nie są
                        przekazywane poza Europejski Obszar Gospodarczy (EOG).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">5. Czas przechowywania danych</h2>
                    <p>
                        Dane osobowe będą przechowywane przez okres niezbędny do
                        realizacji celu kontaktu, nie dłużej niż{" "}
                        <span className="font-semibold">12 miesięcy</span> od
                        zakończenia korespondencji.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">6. Prawa użytkownika</h2>
                    <p>Osobom, których dane dotyczą, przysługuje prawo do:</p>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>dostępu do swoich danych,</li>
                        <li>sprostowania danych,</li>
                        <li>usunięcia danych,</li>
                        <li>ograniczenia przetwarzania,</li>
                        <li>przenoszenia danych,</li>
                        <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                        <li>cofnięcia zgody w dowolnym momencie.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">7. Prawo do wniesienia skargi</h2>
                    <p>
                        W przypadku uznania, że przetwarzanie danych narusza przepisy
                        RODO, Użytkownik ma prawo złożyć skargę do Prezesa Urzędu
                        Ochrony Danych Osobowych (UODO).
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2 text-accent">8. Pliki cookies</h2>
                    <p>
                        Strona korzysta wyłącznie z plików cookies niezbędnych do jej prawidłowego działania. Nie są
                        stosowane cookies w celach marketingowych ani analitycznych.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-2 text-accent">9. Zmiany w polityce prywatności</h2>
                    <p>
                        Administrator zastrzega sobie prawo do wprowadzania zmian w
                        niniejszej polityce prywatności. Aktualna wersja dokumentu
                        zawsze dostępna jest na stronie internetowej.
                    </p>
                </section>

                <section className="mt-8">
                    <p className="text-sm text-gray-500">
                        Data ostatniej aktualizacji: 26.08.2025
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
