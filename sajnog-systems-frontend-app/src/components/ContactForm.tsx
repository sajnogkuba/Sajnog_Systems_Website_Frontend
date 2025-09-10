import { useState } from "react";

const FORM_NAME = "contact";
const USE_AJAX = false; // ustaw na true, żeby wysyłać fetch’em i np. pokazać komunikat sukcesu

function encode(data: Record<string, string>) {
    return Object.keys(data)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
        .join("&");
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
        // honeypot:
        botField: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

    const validate = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = "Imię i nazwisko jest wymagane";
        if (!/^[0-9]{9}$/.test(formData.phone)) newErrors.phone = "Podaj poprawny numer telefonu (9 cyfr)";
        if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Podaj poprawny adres email";
        if (!formData.message.trim()) newErrors.message = "Napisz, w czym możemy pomóc";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, name, value } = e.target;
        // Netlify potrzebuje atrybutu "name", ale w Twoim kodzie używałeś "id".
        // Aktualizujemy obie ścieżki (id lub name) żeby było niezawodne.
        const key = name || id;
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            phone: "",
            email: "",
            city: "",
            message: "",
            botField: "",
        });
        setErrors({});
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        if (USE_AJAX) {
            e.preventDefault();
        }
        if (!validate()) {
            if (USE_AJAX) setStatus("idle");
            return;
        }

        if (!USE_AJAX) {
            // klasyczny submit – Netlify obsłuży i zrobi redirect na action="/thanks"
            return;
        }

        // AJAX
        try {
            setStatus("sending");
            const body = encode({
                "form-name": FORM_NAME,
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                city: formData.city,
                message: formData.message,
                "bot-field": formData.botField,
            });

            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });

            if (res.ok) {
                setStatus("ok");
                resetForm();
            } else {
                throw new Error("Netlify returned non-OK");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <>
            {/* Jeśli używasz AJAX, możesz wyświetlać status obok formularza */}
            {USE_AJAX && status === "ok" && (
                <div className="mb-4 rounded-md bg-green-100 p-3 text-green-800">
                    Dziękujemy! Formularz został wysłany.
                </div>
            )}
            {USE_AJAX && status === "error" && (
                <div className="mb-4 rounded-md bg-red-100 p-3 text-red-800">
                    Wystąpił błąd podczas wysyłania. Spróbuj ponownie.
                </div>
            )}

            <form
                name={FORM_NAME}
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                // Dla klasycznego submitu Netlify zrobi redirect na tę stronę:
                action="/thanks"
            >
                {/* wymagane przez Netlify przy klasycznym submitcie i/lub AJAX */}
                <input type="hidden" name="form-name" value={FORM_NAME} />

                {/* Honeypot — musi mieć EXACT tę samą nazwę co w atrybucie netlify-honeypot */}
                <p className="hidden">
                    <label>
                        Nie wypełniaj tego pola:{" "}
                        <input
                            name="bot-field"
                            value={formData.botField}
                            onChange={handleChange}
                            autoComplete="off"
                        />
                    </label>
                </p>

                {/* Imię i nazwisko */}
                <div>
                    <label htmlFor="name" className="block text-lg font-medium text-primary py-2">
                        Imię i nazwisko
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}
                </div>

                {/* Telefon */}
                <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-primary">
                        Numer telefonu
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                        inputMode="numeric"
                        pattern="[0-9]{9}"
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm mb-2">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-lg font-medium text-primary">
                        Adres email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}
                </div>

                {/* Miasto */}
                <div>
                    <label htmlFor="city" className="block text-lg font-medium text-primary">
                        Miasto
                    </label>
                    <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                    />
                    {errors.city && <p className="text-red-500 text-sm mb-2">{errors.city}</p>}
                </div>

                {/* Wiadomość */}
                <div>
                    <label htmlFor="message" className="block text-lg font-medium text-primary">
                        W czym możemy pomóc?
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-sm mb-2">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full rounded-md bg-accent px-4 py-2 text-white font-medium hover:bg-accent/80 transition disabled:opacity-60"
                    disabled={USE_AJAX && status === "sending"}
                >
                    {USE_AJAX && status === "sending" ? "Wysyłanie..." : "Wyślij"}
                </button>
            </form>
        </>
    );
};

export default ContactForm;
