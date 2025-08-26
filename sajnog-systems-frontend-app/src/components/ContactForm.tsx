import { useState } from "react";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        let newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) {
            newErrors.name = "Imię i nazwisko jest wymagane";
        }
        if (!/^[0-9]{9}$/.test(formData.phone)) {
            newErrors.phone = "Podaj poprawny numer telefonu (9 cyfr)";
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Podaj poprawny adres email";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Napisz, w czym możemy pomóc";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Formularz poprawny, wysyłam dane:", formData);

            // TODO: fetch/axios do backendu

            // reset danych
            setFormData({
                name: "",
                phone: "",
                email: "",
                city: "",
                message: "",
            });
            setErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Imię i nazwisko */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-lg font-medium text-primary py-2"
                >
                    Imię i nazwisko
                </label>
                <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                )}
            </div>

            {/* Telefon */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-lg font-medium text-primary"
                >
                    Numer telefonu
                </label>
                <input
                    id="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                />
                {errors.phone && (
                    <p className="text-red-500 text-sm mb-2">{errors.phone}</p>
                )}
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-lg font-medium text-primary"
                >
                    Adres email
                </label>
                <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                )}
            </div>

            {/* Miasto */}
            <div>
                <label
                    htmlFor="city"
                    className="block text-lg font-medium text-primary"
                >
                    Miasto
                </label>
                <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                />
                {errors.city && (
                    <p className="text-red-500 text-sm mb-2">{errors.city}</p>
                )}
            </div>

            {/* Wiadomość */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-lg font-medium text-primary"
                >
                    W czym możemy pomóc?
                </label>
                <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white block w-full rounded-md px-4 py-2 shadow-md mb-1"
                />
                {errors.message && (
                    <p className="text-red-500 text-sm mb-2">{errors.message}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-accent px-4 py-2 text-white font-medium hover:bg-accent/80 transition"
            >
                Wyślij
            </button>
        </form>
    );
};

export default ContactForm;