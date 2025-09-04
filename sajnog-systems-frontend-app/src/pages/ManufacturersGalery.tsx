const ManufacturersGalery: React.FC = () => {
    const brands = [
        { name: "Hikvision", logo: "/images/logos/hikvision.png" },
        { name: "Roger", logo: "/images/logos/roger.png" },
        { name: "Dahua", logo: "/images/logos/dahua.png" },
        { name: "Satel", logo: "/images/logos/satel.png" },
        { name: "BCS", logo: "/images/logos/bcs.jpg" },
        { name: "Unv", logo: "/images/logos/unv.png" },
        { name: "Imou", logo: "/images/logos/imou.png" },
        { name: "Bosch", logo: "/images/logos/bosch.png" },
        { name: "Hikvision", logo: "/images/logos/hikvision.png" },
        { name: "Roger", logo: "/images/logos/roger.png" },
        { name: "Dahua", logo: "/images/logos/dahua.png" },
        { name: "Satel", logo: "/images/logos/satel.png" },
        { name: "BCS", logo: "/images/logos/bcs.jpg" },
        { name: "Unv", logo: "/images/logos/unv.png" },
        { name: "Imou", logo: "/images/logos/imou.png" },
        { name: "Bosch", logo: "/images/logos/bosch.png" },
        { name: "Hikvision", logo: "/images/logos/hikvision.png" },
        { name: "Roger", logo: "/images/logos/roger.png" },
        { name: "Dahua", logo: "/images/logos/dahua.png" },
        { name: "Satel", logo: "/images/logos/satel.png" },
        { name: "BCS", logo: "/images/logos/bcs.jpg" },
        { name: "Unv", logo: "/images/logos/unv.png" },
        { name: "Imou", logo: "/images/logos/imou.png" },
        { name: "Bosch", logo: "/images/logos/bosch.png" },
        { name: "Hikvision", logo: "/images/logos/hikvision.png" },
        { name: "Roger", logo: "/images/logos/roger.png" },
        { name: "Dahua", logo: "/images/logos/dahua.png" },
        { name: "Satel", logo: "/images/logos/satel.png" },
        { name: "BCS", logo: "/images/logos/bcs.jpg" },
        { name: "Unv", logo: "/images/logos/unv.png" },
        { name: "Imou", logo: "/images/logos/imou.png" },
        { name: "Bosch", logo: "/images/logos/bosch.png" },
    ];


    return (
        <div className="flex flex-col justify-center text-on-primary w-screen">
            <h2 className="text-2xl px-12 font-bold text-white inline-block mb-2">Sprzęt, na którym pracujemy</h2>
            <div className="relative w-full overflow-hidden">
                <div className="flex w-max animate-scroll border-t-4 border-b-4 border-accent bg-white py-4">
                    {brands.concat(brands).map((brand, i) => (
                        <div key={i} className="flex items-center justify-center mx-12">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-16 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManufacturersGalery;