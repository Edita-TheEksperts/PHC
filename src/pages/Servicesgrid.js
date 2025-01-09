export default function ServicesGrid() {
    return (
        <div className="bg-[#F1F1F1] py-10 lg:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-6">
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
                    <div key={index} className="bg-white shadow-md rounded-lg">
                        <div
                            className="bg-[#B99B5F] text-white text-lg font-bold px-6 py-4 relative"
                            style={{
                                fontFamily: "Metropolis",
                                borderTopLeftRadius: "20px",
                                borderTopRightRadius: "20px",
                                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                            }}
                        >
                            {column.title}
                        </div>

                        <div className="p-6 text-[#1C1B1D] text-base leading-7">
                            <ul className="space-y-4">
                                {column.items.map((item, i) => (
                                    <li key={i}>
                                        <span className="font-semibold text-[#B99B5F]">{item.heading}</span>
                                        {item.subItems && (
                                            <ul className="pl-6 mt-2 space-y-1">
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
