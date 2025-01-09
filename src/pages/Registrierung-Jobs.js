import Image from 'next/image';
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-[#F1F1F1] p-4">
          <section className="relative max-w-[1300px] h-[800px] mx-auto mt-2 md:mt-[30px] lg:mb-[160px]">
                   {/* Logo Positioned on Top Left */}
                   <div className="absolute top-[5px] left-[5px] md:top-[20px] md:left-[67px] z-10">
                     <Image src="/images/logo.png" alt="PHC Logo" width={131} height={60} />
                   </div>
       
                   {/* Background Image */}
                   <div className="absolute top-0 left-0 w-full h-full">
                   <img
                     src="/images/Background 1.png"
                     alt="Hero Image"
                     className="object-cover w-full h-full"
                   />
                 </div>
       
                 <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start ml-[40px]">
                    <div className="w-full md:w-[1069px] text-left font-metropolis px-5 text-[#F1F1F1]">
                    <p
                    className="mb-5 flex justify-start items-center w-[203px] px-2 py-1 text-[16px] font-[400] leading-[25.6px] border border-transparent bg-custom-gradient"
                    style={{
                        borderRadius: "50px 0px 0px 50px",
                    }}
                    >
                    Ab Frühsommer 2025
                    </p>

                        <h2 className="mb-1 text-[24px] lg:text-[65px] font-[600] leading-[32px] lg:leading-[52px]">
                        Werde Teil von <br />
                        Prime Home <br />Care AG
                        </h2>

                        <p className="text-[16px] font-[400] leading-[25.6px] lg:mb-[50px]">
                        "Betreuung mit Herz – Flexibel, digital, genau nach deinem Zeitplan!"
                        </p>

                        <Link href="/Form-Page-1">
                            <button
                                className="font-metropolis flex flex-col items-center text-center font-metropolis text-[18px] font-[500] leading-[21.6px] rounded-[50px] px-[20px] py-[12px] bg-primaryButton transition-all duration-0"
                            >
                                Gestalte deine Arbeit so individuell wie du bist.
                            </button>
                            </Link>
                    </div>
                </div>
                 </section>

                 <section className="flex flex-col items-center justify-center px-5 py-10  text-[#04436F]">
                    {/* Main heading */}
                    <p className="text-center font-metropolis text-[16px] font-[400] leading-[24px] mb-5 px-2 py-1 rounded-[50px_0px_0px_50px] bg-gradient-to-r from-[#B2EAFF] to-transparent">
                        Werde Teil von etwas Grossem.
                    </p>

                    {/* Subheading */}
                    <h1 className="text-center font-metropolis text-[55px] font-[600] leading-[71.5px] mb-8">
                        Deine Chance – Betreuung neu gedacht
                    </h1>

                    {/* Paragraph */}
                    <p className="lg:min-w-[1240px] text-center font-metropolis text-[24px] font-[400] leading-[40px] max-w-[800px]">
                        Prime Home Care AG ist die erste volldigitale Plattform in der Schweiz, die Betreuung und Technologie <br></br> verbindet. Als Betreuungsperson hilfst du Familien, Senioren und Menschen im Alltag – flexibel und genau <br></br> dann, wenn sie dich brauchen.
                    </p>

                    <div className="flex gap-6 mt-[60px]">
                            {/* Card 1 */}
                            <div
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat p-6 w-1/3"
                                style={{ backgroundImage: "url('/images/1 3.png')" }}
                            >
                                <div className="flex justify-center items-center rounded-full mb-[40px]">
                                {/* Replace with Icon */}
                                <img src="/images/phc-link1.png" alt="Flexibility Icon" className="w-[80px] h-[80px]" />
                                </div>
                                <h3 className="text-[28px] text-[#04436F] font-metropolis font-[600] leading-[33.6px] mb-4">
                                Flexibilität:
                                </h3>
                                <p className="text-[16px] text-[#04436F] font-metropolis font-normal leading-[25.6px]">
                                Plane deine Einsätze, wie es dir passt.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat p-6 w-1/3"
                                style={{ backgroundImage: "url('/images/2 2.png')" }}
                            >
                                <div className="flex justify-center items-center rounded-full  mb-[40px]">
                                {/* Replace with Icon */}
                                <img src="/images/phc-link2.png" alt="Flexibility Icon" className="w-[80px] h-[80px]" />
                                </div>
                                <h3 className="text-[28px] text-[#04436F] font-metropolis font-[600] leading-[33.6px] mb-4">
                                Fairer Verdienst:
                                </h3>
                                <p className="text-[16px] text-[#04436F] font-metropolis font-normal leading-[25.6px]">
                                Transparent und pünktlich.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat p-6 w-1/3"
                                style={{ backgroundImage: "url('/images/3 3.png')" }}
                            >
                                <div className="flex justify-center items-center rounded-full  mb-[40px]">
                                {/* Replace with Icon */}
                                <img src="/images/phc-link3.png" alt="Flexibility Icon" className="w-[80px] h-[80px]" />
                                </div>
                                <h3 className="text-[28px] text-[#04436F] font-metropolis font-[600] leading-[33.6px] mb-4">
                                Unterstützung:
                                </h3>
                                <p className="text-[16px] text-[#04436F] font-metropolis font-normal leading-[25.6px]">
                                Wir kümmern uns um die Organisation – du konzentrierst dich auf die Betreuung.
                                </p>
                            </div>
                            </div>


                    </section>

                    <section className="flex justify-center items-center gap-16 lg:mt-[160px]">
                    {/* Left Image */}
                    <div
                    className="w-[309.83px] h-[629px] flex-shrink-0 rounded-[20px]"
                    style={{
                        background: "url('/images/phc-image.png') lightgray 50% / cover no-repeat",
                    }}
                    >
                    </div>


                    {/* Right Content */}
                    <div className="flex flex-col gap-6 max-w-[600px]">
                        {/* Title */}
                        <h2 className="text-[#04436F] font-metropolis text-[55px] font-semibold leading-[61.5px]">
                        Wen suchen wir?
                    </h2>
                        {/* Subtitle */}
                        <p className="text-[#04436F] font-metropolis text-[24px] font-normal leading-[40px]">
                        Wir suchen engagierte Menschen, die Betreuung mit Leidenschaft und Herz leisten möchten.
                    </p>

                        {/* Points */}
                        <ul className="flex flex-col gap-6">
                        {/* Point 1 */}
                        <li className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div
                            className="flex justify-center items-center rounded-full"
                            style={{
                            backgroundColor: "#04436F",
                            width: "80px",
                            height: "80px",
                            padding: "15px",
                            }}
                        >
                            <img src="/images/phc-links2.png" alt="Empathisch Icon" className="w-[50px] h-[50px]" />
                        </div>

                        {/* Text Content */}
                        <div>
                            {/* Title */}
                            <h3 className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[34px]">
                            Empathisch und zuverlässig:
                            </h3>

                            {/* Description */}
                            <p className="text-[#04436F] font-metropolis text-[20px] font-normal leading-[30px]">
                            Deine Fürsorge macht den Unterschied.
                            </p>
                        </div>
                        </div>
                    </li>

                {/* Point 2 */}
                <li className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div
                            className="flex justify-center items-center rounded-full"
                            style={{
                            backgroundColor: "#04436F",
                            width: "80px",
                            height: "80px",
                            padding: "15px",
                            }}
                        >
                            <img src="/images/phc-links1.png" alt="Empathisch Icon" className="w-[50px] h-[50px]" />
                        </div>

                        {/* Text Content */}
                        <div>
                            {/* Title */}
                            <h3 className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[34px]">
                            Erfahren oder motiviert:
                            </h3>

                            {/* Description */}
                            <p className="text-[#04436F] font-metropolis text-[20px] font-normal leading-[30px]">
                            Ob Profi oder Quereinsteiger – wir bringen dich weiter. 
                            </p>
                        </div>
                        </div>
                    </li>
                {/* Point 3 */}
                <li className="flex items-start gap-4">
                    {/* Icon Container */}
                    <div className="flex items-center gap-4">
                        {/* Icon Container */}
                        <div
                            className="flex justify-center items-center rounded-full"
                            style={{
                            backgroundColor: "#04436F",
                            width: "80px",
                            height: "80px",
                            padding: "15px",
                            }}
                        >
                            <img src="/images/phc-links3.png" alt="Empathisch Icon" className="w-[50px] h-[50px]" />
                        </div>

                        {/* Text Content */}
                        <div>
                            {/* Title */}
                            <h3 className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[34px]">
                            Mobil und flexibel:
                            </h3>

                            {/* Description */}
                            <p className="text-[#04436F] font-metropolis text-[20px] font-normal leading-[30px]">
                            Du bestimmst, wann und wo du arbeitest.
                            </p>
                        </div>
                        </div>
                    </li>
                    </ul>

                    {/* Call to Action */}
                    <div
                className="flex flex-col items-start rounded-[50px_0px_0px_50px] p-[4px_70px_4px_10px]"
                style={{
                    background: "linear-gradient(93deg, #04436F 0%, rgba(0, 0, 0, 0.00) 100%)",
                }}
                >
                <p className="text-[#FAFCFF] font-metropolis text-[16px] font-[400] leading-[25.6px] whitespace-nowrap">
                    Du hast Freude daran, anderen zu helfen? Dann bist du bei uns genau richtig!
                </p>
                </div>


                </div>
                </section>
                 <section className=' mt-[160px] justify-center flex items-center'>
                <div
  className="flex flex-col justify-between items-center p-[24px_44px] w-[1244px] h-[649px] flex-shrink-0"
  style={{
    backgroundColor: "#04436F",
    borderRadius: "20px",
  }}
>
  {/* Title Section */}
  <div className="text-center">
    <h2 className="text-white font-metropolis text-[55px] font-[600] leading-[71.5px]">
      Warum Prime Home Care AG?
    </h2>
    <p className="text-white font-metropolis text-[24px] font-normal leading-[40px] mt-2 mb-6">
      Wir bieten dir mehr als nur einen Job:
    </p>
  </div>

  {/* Boxes Section */}
  <div className="grid grid-cols-2 gap-6 w-full mb-6">
    {/* Box 1 */}
    <div
      className="flex flex-col justify-center h-[166px] px-8 rounded-[20px]"
      style={{
        background: "rgba(255, 255, 255, 0.09)",
      }}
    >
      <h3 className="text-white font-metropolis text-[24px] font-semibold leading-[51.5px]">
        Flexibles Arbeiten:
      </h3>
      <p className="text-white font-metropolis text-[20px] font-normal leading-[40px]">
        Passe deine Einsätze an <br></br>deinen Alltag an.
      </p>
    </div>

    {/* Box 2 */}
    <div
      className="flex flex-col justify-center h-[166px] px-8 rounded-[20px]"
      style={{
        background: "rgba(255, 255, 255, 0.09)",
      }}
    >
      <h3 className="text-white font-metropolis text-[24px] font-semibold leading-[51.5px]">
        Sinnvolle Arbeit:
      </h3>
      <p className="text-white font-metropolis text-[20px] font-normal leading-[40px]">
        Du hilfst Menschen direkt und <br></br>persönlich.
      </p>
    </div>

    {/* Box 3 */}
    <div
      className="flex flex-col justify-center h-[166px] px-8 rounded-[20px]"
      style={{
        background: "rgba(255, 255, 255, 0.09)",
      }}
    >
      <h3 className="text-white font-metropolis text-[24px] font-semibold leading-[51.5px]">
        Digitale Plattform:
      </h3>
      <p className="text-white font-metropolis text-[20px] font-normal leading-[40px]">
        Einfaches Verwalten deiner <br></br> Einsätze über unsere App.
      </p>
    </div>

    {/* Box 4 */}
    <div
      className="flex flex-col justify-center h-[166px] px-8 rounded-[20px]"
      style={{
        background: "rgba(255, 255, 255, 0.09)",
      }}
    >
      <h3 className="text-white font-metropolis text-[24px] font-semibold leading-[51.5px]">
        Community:
      </h3>
      <p className="text-white font-metropolis text-[20px] font-normal leading-[40px] ">
        Austausch und Unterstützung <br></br>durch ein starkes Team.
      </p>
    </div>
  </div>

  {/* Bottom Section */}
  <div
  className="flex flex-col justify-center items-center gap-[10px] w-[998px] h-[72px] p-[10px] rounded-[20px] bg-white flex-shrink-0"
>
  <p className="text-[#04436F] text-center font-metropolis text-[24px] font-[600] leading-[71.5px]">
    Arbeiten mit Prime Home Care bedeutet, Freiheit und Erfüllung zu verbinden.
  </p>
</div>

</div>
</section>

<section className="flex justify-between items-center w-[1204px] mx-auto mb-[160px] mt-[160px]">
  {/* Left Content */}
  <div className="flex flex-col gap-4 max-w-[600px]">
    {/* Top Label */}
    <span
  className="text-[#04436F] text-[16px] font-metropolis font-normal leading-[24px] px-[10px] py-[4px]"
  style={{
    borderRadius: "50px 0px 0px 50px",
    background: "linear-gradient(100deg, #B2EAFF 0%, rgba(0, 0, 0, 0.00) 100%)",
  }}
>
  In wenigen Schritten zur Betreuungsperson:
</span>


    {/* Title */}
    <h2 className="text-[#04436F] font-metropolis text-[56px] font-[600] leading-[71.5px]">
      So einfach startest du
    </h2>

    {/* Steps */}
    <div className="flex flex-col gap-6">
      {/* Step 1 */}
      <div className="flex flex-col items-start gap-2">
        <span className="bg-[#04436F] text-white text-[14px] font-metropolis font-[400] leading-[21.6px] px-4 py-1 rounded-full">
          Online bewerben
        </span>
        <p className="text-[#04436F] text-[24px] font-metropolis font-[500] leading-[25.6px] ml-[20px]">
          Erstelle dein Profil in wenigen Minuten.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-start gap-2">
        <span className="bg-[#04436F] text-white text-[14px] font-metropolis leading-[21.6px] font-[400] px-4 py-1 rounded-full">
          Schulung
        </span>
        <p className="text-[#04436F] text-[24px] font-metropolis font-[500] leading-[25.6px] ml-[20px]">
          Wir machen dich fit für deine Einsätze.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-start gap-2">
        <span className="bg-[#04436F] text-white text-[14px] font-metropolis font-[400] leading-[21.6px] px-4 py-1 rounded-full">
          Einsätze starten
        </span>
        <p className="text-[#04436F] text-[24px] font-metropolis font-[500] leading-[25.6px] ml-[20px]">
          Wähle, wann und wo du arbeiten möchtest.
        </p>
      </div>
    </div>
  </div>

  {/* Right Image */}
  <div className="flex-shrink-0">
    <img
      src="/images/phc-elderly.png"
      alt="Assisting elderly person"
      className=" w-[539px] h-[400px]"
    />
  </div>
</section>
 
<section
  className="flex flex-col justify-center items-center gap-[62px] px-10 py-12 w-[1019px] mx-auto"
  style={{
    color: "#04436F",
    textAlign: "center",
  }}
>
  {/* Title */}
  <h2
    className="font-metropolis text-[55px] font-semibold leading-[71.5px]"
    style={{
      color: "#04436F",
    }}
  >
    Deine Vorteile auf einen Blick
  </h2>

  {/* Grid Section */}
  <div className="grid grid-cols-2 gap-y-[62px] gap-x-[62px] w-full">
    {/* Row 1 - Left */}
    <div className="flex items-center gap-[40px] w-[432px] flex-shrink-0">
  {/* Icon Container */}
  <div
    className="bg-[#04436F] flex justify-center items-center rounded-full flex-shrink-0"
    style={{
      width: "80px",
      height: "80px",
      padding: "15px",
    }}
  >
    <img src="/images/icon1-1.png" alt="Flexible Arbeitszeiten" className="w-[50px] h-[50px]" />
    </div>

  {/* Text */}
  <p
    className="text-[#04436F] font-metropolis font-semibold"
    style={{
      fontSize: "28px",
      lineHeight: "33.6px", // 120%
    }}
  >
    Flexible Arbeitszeiten.
  </p>
</div>

    {/* Row 1 - Right */}
    <div className="flex items-center gap-[40px] w-[432px] flex-shrink-0">
  {/* Icon Container */}
  <div
    className="bg-[#04436F] flex justify-center items-center rounded-full flex-shrink-0"
    style={{
      width: "80px",
      height: "80px",
      padding: "15px",
    }}
  >
    <img src="/images/icon1-2.png" alt="Flexible Arbeitszeiten" className="w-[50px] h-[50px]" />
    </div>

  {/* Text */}
  <p
    className="text-[#04436F] font-metropolis text-left font-semibold"
    style={{
      fontSize: "28px",
      lineHeight: "33.6px", 
      minWidth: "350px",// 120%
      
    }}
  >
    Faire Bezahlung und transparente Abrechnung. 
  </p>
</div>


    {/* Row 2 - Left */}
    <div className="flex items-center gap-[40px] w-[432px] flex-shrink-0">
  {/* Icon Container */}
  <div
    className="bg-[#04436F] flex justify-center items-center rounded-full flex-shrink-0"
    style={{
      width: "80px",
      height: "80px",
      padding: "15px",
    }}
  >
    <img src="/images/icon1-3.png" alt="Flexible Arbeitszeiten" className="w-[40px] h-[40px]" />
    </div>

  {/* Text */}
  <p
    className="text-[#04436F] font-metropolis font-semibold"
    style={{
      fontSize: "28px",
      lineHeight: "33.6px", // 120%
    }}
  >
    Einfache Organisation über unsere Plattform. 
  </p>
</div>


    {/* Row 2 - Right */}
    <div className="flex items-center gap-[40px] w-[432px] flex-shrink-0">
  {/* Icon Container */}
  <div
    className="bg-[#04436F] flex justify-center items-center rounded-full flex-shrink-0"
    style={{
      width: "80px",
      height: "80px",
      padding: "15px",
    }}
  >
    <img src="/images/icon1-4.png" alt="Flexible Arbeitszeiten" className="w-[50px] h-[50px]" />
  </div>

  {/* Text */}
  <p
    className="text-[#04436F] text-left font-metropolis font-semibold"
    style={{
      fontSize: "28px",
      lineHeight: "33.6px", 
      minWidth:"350 px",// 120%
    }}
  >
    Wertvolle Erfahrung in einem sinnvollen Beruf. 
  </p>
</div>

  </div>

  {/* Bottom Text */}
  <p
  className="text-[#343435] text-center font-metropolis font-[400]"
  style={{
    fontSize: "24px",
    lineHeight: "40px",
  }}
>
  Finde deine Balance zwischen Arbeit und Leben – mit Prime Home Care.
</p>

</section>

<section
  className="relative flex flex-col justify-center items-center mt-[160px] p-16"
  style={{
    backgroundImage: "url('/images/White box.png')", // Replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Main Heading */}
  <h1
    className="text-[#04436F] font-metropolis font-semibold text-[44px] leading-[52.8px] text-center"
    style={{
      fontWeight: "600",
    }}
  >
    Jetzt bewerben und ab Frühling 2025 loslegen!
  </h1>

  {/* Subheading */}
  <p
    className="text-[#04436F] font-metropolis text-[16px] leading-[25.6px] font-normal text-center mt-4"
    style={{
      fontWeight: "400",
    }}
  >
    Werde Teil unseres Teams und gestalte Betreuung neu.
  </p>

  {/* Button */}
  <button
    className="mt-6 px-8 py-3 text-white font-metropolis text-[18px] font-medium leading-[21.6px] bg-[#04436F] rounded-full"
    style={{
      borderRadius: "50px",
    }}
  >
    Hier klicken, um dein Profil zu erstellen und mehr zu erfahren!
  </button>

  {/* Footer Note */}
  <p
    className="text-[#04436F] font-metropolis text-[16px] italic font-normal leading-[25.6px] text-center mt-4"
    style={{
      fontWeight: "400",
    }}
  >
    (Die ersten 50 Bewerber erhalten eine kostenlose Schulung und Willkommensprämie!)
  </p>
</section>

        <section className="mt-[160px] mb-[120px] flex flex-col justify-center items-center">
        {/* Main Content */}
        <div
            className="flex justify-between items-start w-[1238px] h-[193px] px-6"
            style={{
            color: "#04436F",
            fontFamily: "Metropolis",
            }}
        >
            {/* Left Section */}
            <div className="flex flex-col">
            <h1
                className="text-[#04436F] font-metropolis font-bold"
                style={{
                fontSize: "48px",
                lineHeight: "64.167%",
                }}
            >
                Prime Home Care AG
            </h1>
        
            <p
                className="text-[#04436F] font-metropolis"
                style={{
                fontSize: "22px",
                fontStyle: "italic",
                fontWeight: "500",
                lineHeight: "30.8px",
                }}
            >
                Zusammen Gutes bewirken.
            </p>

            <p
                className="text-[#04436F] font-metropolis italic mt-[80px] text-left"
                style={{
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "30.8px",
                }}
            >
                Einfach. Flexibel. Digital.
            </p>
            </div>

            {/* Right Section */}
            <div
        className="flex flex-col mt-[25px] items-left text-left gap-4"
        style={{
            color: "#04436F",
            fontFamily: "Metropolis",
        }}
        >
        <h2
            className="font-bold"
            style={{
            fontSize: "24px",
            lineHeight: "30.8px", // 128.333%
            }}
        >
            Kontakt:
        </h2>
        <p
            className="font-normal"
            style={{
            fontSize: "24px",
            lineHeight: "30.8px", // 128.333%
            }}
        >
            jobs@phc.ch
        </p>
        <p
            className="font-normal"
            style={{
            fontSize: "24px",
            lineHeight: "30.8px", // 128.333%
            }}
        >
            www.phc.ch
        </p>
        </div>

                </div>
                </section>
            </div>
    );
  }
  