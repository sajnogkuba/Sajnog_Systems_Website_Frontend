import {CircleDollarSign, Wrench, MapPinned, MessageSquareText, ShieldCheck} from "lucide-react";

const steps = [
    {
        icon: <MessageSquareText className="h-10 w-10 text-primary" />,
        title: "Konsultacja i analiza potrzeb",
    },
    {
        icon: <MapPinned className="h-10 w-10 text-primary" />,
        title: "Wizja lokalna i ustalenie szczegółów",
    },
    {
        icon: <CircleDollarSign className="h-10 w-10 text-primary" />,
        title: "Indywidualna oferta i wycena",
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Montaż i konfiguracja",
    },
    {
        icon: <Wrench className="h-10 w-10 text-primary" />,
        title: "Wsparcie i serwis",
    },
];

const ProcessPage: React.FC = () => {
    return (
        <div className="justify-center bg-primary">
            <h2 className="mb-10 text-center text-4xl font-bold text-white">
                Jak wygląda współpraca?
            </h2>

            <div className="flex flex-wrap justify-center">
                {steps.map((step, i) => (
                    <div key={i} className="flex w-84 h-52 m-4 flex-col items-center justify-center rounded-xl bg-gray-200 p-6 shadowhover:shadow-lg transition"
                    >
                        {step.icon}
                        <p className="mt-6 text-center text-xl font-medium text-accent">
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessPage;