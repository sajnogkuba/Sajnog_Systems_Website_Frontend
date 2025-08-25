import { useState } from "react";
import { CircleDollarSign, Wrench, MapPinned, MessageSquareText, ShieldCheck } from "lucide-react";

const steps = [
    {
        icon: <MessageSquareText className="h-10 w-10 text-primary" />,
        title: "Konsultacja i analiza potrzeb",
        description: [
            "Kontaktujesz się z nami mailowo, telefonicznie lub przez formularz.",
            "Opowiadasz nam czego potrzebujesz.",
            "Umawiamy termin wizji lokalnej."
        ],
    },
    {
        icon: <MapPinned className="h-10 w-10 text-primary" />,
        title: "Wizja lokalna",
        description: [
            "Przyjeżdżamy na miejsce i oceniamy obiekt pod kątem montażu.",
            "Sprawdzamy, gdzie najlepiej zamontować kamery i czujniki.",
            "Omawiamy z Tobą szczegóły techniczne i możliwości systemu."
        ],
    },
    {
        icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
        title: "Indywidualna oferta i wycena",
        description: [
            "Tworzymy indywidualny projekt systemu",
            "Przedstawiamy szczegółową wycenę – bez ukrytych kosztów.",
            "Upewniamy się, że rozwiązanie będzie dopasowane do Twojego budżetu i oczekiwań.",
            "Gdy wszystko pasuje – ustalamy termin montażu."
        ],
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Montaż i konfiguracja",
        description: [
            "Przyjeżdżamy na montaż .",
            "Instalujemy elementy systemu.",
            "Konfigurujemy system tak, aby działał idealnie dla Twoich potrzeb.",
            "Testujemy sprzęt i upewniamy się, że wszystko działa bezbłędnie.",
        ],
    },
    {
        icon: <Wrench className="h-10 w-10 text-primary" />,
        title: "Wsparcie i serwis",
        description: [
            "Jeśli masz pytania – jesteśmy dostępni telefonicznie lub mailowo.",
            "W razie potrzeby możemy przeprowadzić zdalną diagnostykę.",
            "Zapewniamy serwis gwarancyjny i pogwarancyjny.",
            "Możesz zamówić dodatkowe usługi modernizacji lub rozbudowy systemu."
        ],
    },
];

const ProcessPage: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="justify-center bg-primary py-12 w-screen">
            <h2 className="mb-8 mt-12 text-center text-4xl font-bold text-white">
                Jak wygląda współpraca?
            </h2>

            <div className="flex flex-wrap justify-center">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        onClick={() => toggleCard(i)}
                        className="flex w-110 h-70 cursor-pointer m-4 flex-col items-center justify-center rounded-xl bg-white/90 p-4 shadow hover:outline hover:outline-4 hover:outline-accent hover:shadow-lg transition duration-500 ease-in-out shadow-lg"
                    >

                            <>
                                {step.icon}
                            </>

                        <p className="mt-4 text-center text-lg font-medium text-accent">
                            {step.title}
                        </p>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                openIndex === i ? "max-h-40 mt-4" : "max-h-0"
                            }`}
                        >
                            <ul className="list-disc list-inside text-sm text-gray-700 text-left">
                                {step.description.map((d, idx) => (
                                    <li key={idx}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessPage;
