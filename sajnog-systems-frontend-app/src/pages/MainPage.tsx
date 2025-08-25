import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import ProcessPage from "./ProcessPage";
import AboutUsPage from "./AboutUsPage";

const MainPage = () => {
    return (
        <div className='bg-white'>
            <section id="home" className="h-screen flex items-center justify-center">
                <HomePage/>
            </section>
            <section id="about" className="h-screen flex items-center justify-center">
                <AboutUsPage/>
            </section>
            <section id="process" className="flex items-start justify-center">
                <ProcessPage/>
            </section>
            <section id="contact" className="flex items-start justify-center">
                <ContactPage/>
            </section>
        </div>
    );
}
export default MainPage;