const team = {
    kuba: {
        name: "Jakub Sajnóg",
        description: "Współtwórca firmy i odpowiedzialny za jej zaplecze organizacyjne. Na co dzień zajmuje się finansami, formalnościami, kontaktem z klientami oraz konfiguracją sprzętu, który później trafia na realizacje. Od najmłodszych lat poznawał branżę u boku taty, a dziś wspólnie rozwijają rodzinny biznes, stawiając na rzetelność i partnerskie podejście do klienta. Poza działalnością w Sajnóg-Systems Kuba pracuje jako full-stack developer i studiuje informatykę, łącząc wiedzę technologiczną z doświadczeniem w branży zabezpieczeń.",
        image: "/images/team/kuba.png",
    },
    robert: {
        name: "Robert Sajnóg",
        description: "Ekspert instalacji i serce praktycznej strony firmy. Od ponad 20 lat projektuje i montuje systemy alarmowe, monitoringi i kontrolę dostępu, zawsze dopasowane do realnych potrzeb klientów. Robert słynie z nieszablonowego podejścia i ogromnej uwagi do szczegółów — dzięki temu potrafi zaplanować i zrealizować każdy projekt tak, aby działał niezawodnie przez lata. Jego doświadczenie i szeroka sieć kontaktów w branży sprawiają, że nawet najbardziej wymagające realizacje przebiegają sprawnie i skutecznie. To on stoi na czele ekip montażowych i odpowiada za to, by wszystko działało perfekcyjnie",
        image: "/images/team/robert.png",
    },
};

const AboutUsPage: React.FC = () => {
    return (
        <div className="py-8">
            <div className="mx-auto max-w-7xl px-6">
                <div className="bg-white w-full justify-items-center rounded-lg border-4 border-accent py-8 px-8">
                    <h1 className="text-5xl font-bold border-b-4 border-accent mb-4">
                        Poznajmy się!
                    </h1>

                    <p className="text-lg text-center">
                        Jesteśmy rodzinną firmą z okolic Warszawy. Od lat zajmujemy się
                        projektowaniem, montażem i konfiguracją{" "}
                        <span className="text-accent">systemów alarmowych (SSWiN)</span>,{" "}
                        <span className="text-accent">monitoringu wizyjnego (CCTV)</span> oraz{" "}
                        <span className="text-accent">kontroli dostępu</span>.
                        Do każdego zlecenia podchodzimy indywidualnie, dbając o to, by
                        rozwiązania były praktyczne, niezawodne i dopasowane do realnych potrzeb.
                    </p>


                    <h1 className="text-5xl font-bold border-b-4 border-accent mb-4 mt-8">
                        Nasz zespół
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 items-stretch">
                        <div className="flex flex-col items-center md:w-1/2 order-1">
                            <img
                                src={team.kuba.image}
                                alt={team.kuba.name}
                                loading="lazy"
                                className="w-full h-auto max-w-[800px] object-cover rounded-lg shadow-md"
                            />
                            <p className="mt-2 text-3xl text-accent font-semibold text-center">
                                {team.kuba.name}
                            </p>
                        </div>
                        <div className="flex items-center md:w-1/2 order-2">
                            <p className="text-lg leading-relaxed">{team.kuba.description}</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-stretch mt-8">
                        <div className="flex flex-col items-center md:w-1/2 order-1 md:order-2">
                            <img
                                src={team.robert.image}
                                alt={team.robert.name}
                                loading="lazy"
                                className="w-full h-auto max-w-[800px] object-cover rounded-lg shadow-md"
                            />
                            <p className="mt-2 text-3xl text-accent font-semibold text-center">
                                {team.robert.name}
                            </p>
                        </div>
                        <div className="flex items-center md:w-1/2 order-2 md:order-1">
                            <p className="text-lg leading-relaxed">{team.robert.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
