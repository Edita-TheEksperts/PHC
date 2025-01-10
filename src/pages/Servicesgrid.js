export default function ServicesGrid() {
    return (
        <div className="py-10 lg:py-20">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-[0.6rem] px-6">

                {/* Reusable Column Component */}
                {[
                    {
                        title: "Alltagsbegleitung und Besorgungen",
                        items: [
                            {
                                heading: "- Begleitung zu Terminen",
                                subItems: ["Arzt", "Physiotherapien", "Behördengänge", "Andere: Freitext"],
                            },
                            {
                                heading: "- Einkäufe erledigen",
                                subItems: ["Lebensmitteleinkäufe", "Apotheke", "Garteneinkäufe", "Kleidereinkäufe"],
                            },
                            { heading: "- Postgänge" },
                            { heading: "- Sonstige Begleitungen" },
                        ],
                    },
                    {
                        title: "Freizeit und soziale Aktivitäten",
                        items: [
                            { heading: "- Gesellschaft leisten" },
                            { heading: "- Gemeinsames Kochen" },
                            { heading: "- Biographiarbeit" },
                            { heading: "- Vorlesen" },
                            { heading: "- Kartenspiele" },
                            {
                                heading: "- Ausflüge und Reisebegleitung:",
                                subItems: ["Theaterbesuch", "Kinobesuch", "Konzertbesuch", "Sportanlass", "Urlaubsbegleitung"],
                            },
                        ],
                    },
                    {
                        title: "Gesundheitsfürsorge",
                        items: [
                            { heading: "- Körperliche Unterstützung" },
                            { heading: "- Nahrungsaufnahme" },
                            { heading: "- Grundpflegerische Tätigkeiten" },
                            { heading: "- Gesundheitsfördernde Aktivitäten" },
                            { heading: "- Geistige Unterstützung" },
                        ],
                    },
                    {
                        title: "Haushaltshilfe und Wohnpflege",
                        items: [
                            { heading: "- Hauswirtschaft" },
                            { heading: "- Balkon und Blumenpflege" },
                            { heading: "- Waschen / Bügeln" },
                            { heading: "- Kochen" },
                            { heading: "- Fenster Putzen" },
                            { heading: "- Bettwäsche wechseln" },
                            { heading: "- Aufräumen" },
                            { heading: "- Trennung / Entsorgung / Abfall" },
                            { heading: "- Abstauben" },
                            { heading: "- Staubsaugen" },
                            { heading: "- Boden wischen" },
                            { heading: "- Vorhänge reinigen" },
                        ],
                    },
                ].map((column, index) => (
                    <div key={index} className="rounded-lg flex flex-col h-full">
                        <div
                            className="text-white text-lg font-bold px-6 py-4 relative"
                            style={{
                                fontFamily: "Metropolis",
                                backgroundImage: "url('/1.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderTopLeftRadius: "20px",
                                borderTopRightRadius: "20px",
                                minHeight: "80px", // Vendos një lartësi minimale të njëjtë për të gjithë
                                display: "flex", // Për të qendruar tekstin në qendër
                                alignItems: "center", // Për qendrim vertikal

                            }}
                        >
                            {column.title}
                        </div>
                        <div
                            className="p-6 bg-[#FAFAFA] text-[#1C1B1D] text-[16px] leading-[24px] flex-grow min-h-[400px] rounded-[12px] "

                        >
                            <ul className="space-y-4">
                                {column.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="font-semibold text-[#B99B5F] text-[16px] leading-[24px]">{item.heading}</span>
                                        {item.subItems && (
                                            <ul className="pl-6 mt-2 space-y-1 text-[16px] leading-[24px]">
                                                {item.subItems.map((subItem, j) => (
                                                    <li key={j}>• {subItem}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
