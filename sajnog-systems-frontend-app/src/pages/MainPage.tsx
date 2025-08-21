const MainPage = () => {
    return (
        <div className='bg-mint-500'>
            <h1 className='text-3xl font-bold underline'>Witaj na stronie głównej!</h1>
            <p>To jest przykładowa strona główna Twojej aplikacji.</p>
            <p>Możesz tutaj umieścić dowolne informacje lub komponenty.</p>
            <button className="rounded-xl bg-main text-on-main px-4 py-2 hover:opacity-90">
                Kliknij
            </button>
        </div>
    );
}
export default MainPage;