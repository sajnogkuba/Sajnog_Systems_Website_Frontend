import ContactForm from "../components/ContactForm";
import { Mail, Phone, Warehouse } from "lucide-react";

const ContactPage: React.FC = () => {
    return (
        <div className="bg-additional py-12 px-4 w-screen">
            <div className="flex flex-wrap justify-center items-start gap-10 mt-12">

                {/* Lewa kolumna */}
                <div className="flex flex-col gap-10 w-full max-w-2xl my-auto">
                    <div className="rounded-lg bg-white/90 p-8 shadow-lg outline-accent outline-4">
                        <h2 className="mb-8 text-left text-4xl font-bold text-accent">
                            Masz pytania?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Służymy pomocą – skontaktuj się z nami, a chętnie odpowiemy na wszystkie
                            Twoje wątpliwości.{" "}
                            <span className="text-accent font-semibold">Wycena jest w pełni darmowa,</span>{" "}
                            więc nic nie ryzykujesz, a możesz tylko zyskać jasny obraz kosztów i
                            możliwości współpracy.
                        </p>
                    </div>
                    <div className="rounded-lg bg-white/90 p-8 shadow-lg outline-accent outline-4">
                        <h2 className="mb-8 text-left text-4xl font-bold text-accent">
                            Informacje kontaktowe
                        </h2>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                                    <Mail className="h-7 w-7 text-white"/>
                                </div>
                                <div>
                                    <p className="text-additional">Email</p>
                                    <a href="mailto:sajnog.systems@gmail.com">sajnog.systems@gmail.com</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                                    <Phone className="h-7 w-7 text-white"/>
                                </div>
                                <div>
                                    <p className="text-additional">Numer telefonu</p>
                                    <span>603-337-347, 697-540-093</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                                    <Warehouse className="h-7 w-7 text-white"/>
                                </div>
                                <div>
                                    <p className="text-additional">Adres</p>
                                    <span>05-205 Dobczyn, pow. wołomiński</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Prawa kolumna */}


                <div className="w-full max-w-2xl rounded-lg bg-white/90 p-8 shadow-lg outline-accent outline-4">
                    <section id="contactform" className="scroll-mt-30">
                        <h2 className="mb-4 text-left text-4xl font-bold text-accent">
                            Umów konsultację
                        </h2>
                        <ContactForm/>
                    </section>
                </div>
            </div>
        </div>
    )
        ;
};

export default ContactPage;
