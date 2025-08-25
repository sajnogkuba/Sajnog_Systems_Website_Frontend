const ContactForm: React.FC = () => {
    return (
        <form>
            <div>
                <label htmlFor="name" className="block text-lg font-medium text-black-700 py-2">
                    Imię i nazwisko
                </label>
                <input
                    id="name"
                    type="text"
                    className="bg-white mt-1 block w-full rounded-md px-4 py-2 shadow-md mb-4"
                />
            </div>

            <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                    Numer telefonu
                </label>
                <input
                    id="name"
                    type="text"
                    className="bg-white mt-1 block w-full rounded-md px-4 py-2 shadow-md mb-4"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Adres email
                </label>
                <input
                    id="email"
                    type="email"
                    className="bg-white mt-1 block w-full rounded-md px-4 py-2 shadow-md mb-4"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                    Miasto
                </label>
                <input
                    id="email"
                    type="email"
                    className="bg-white mt-1 block w-full rounded-md px-4 py-2 shadow-md mb-4"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                    W czym możemy pomóc?
                </label>
                <textarea
                    id="message"
                    rows={6}
                    className="bg-white mt-1 block w-full rounded-md px-4 py-2 shadow-md mb-4"
                />
            </div>

            <button
                type="submit"
                className="w-full rounded-md bg-accent px-4 py-2 text-white font-medium hover:bg-accent/80 transition"
            >
                Wyślij
            </button>
        </form>

    );
}

export default ContactForm;