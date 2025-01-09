import Image from 'next/image';
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-[#F1F1F1] p-4">
        <section className="relative max-w-[1300px] h-[800px] mx-auto mt-2 md:mt-[30px] lg:mb-[150px]">
  {/* Logo Positioned on Top Left */}
  <div className="absolute top-[5px] left-[5px] md:top-[20px] md:left-[67px] z-10">
    <Image src="/images/logo.png" alt="PHC Logo" width={131} height={60} />
  </div>

  {/* Background Image */}
  <div className="absolute top-0 left-0 w-full h-full">
    <img
      src="/images/Landing Page 2 (1).png"
      alt="Hero Image"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Text Content */}
  <div
    className="absolute top-[30%] right-[5%] flex flex-col items-start text-[#F1F1F1]"
    style={{
      width: "587px",
      height: "449px",
      flexShrink: "0",
    }}
  >
    {/* Tagline */}
    <p
  className="mb-5 flex items-start px-[10px] py-[4px] text-[16px] font-normal leading-[25.6px] text-[#F1F1F1] font-metropolis"
  style={{
    display: "flex",
    padding: "4px 70px 4px 10px",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: "50px 0px 0px 50px",
    background: "linear-gradient(93deg, #B99B5F 0%, rgba(185, 155, 95, 0.00) 100%)",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "25.6px", // 160%
  }}
>
  Ab Frühsommer 2025 bringt die
</p>


   {/* Main Heading */}
<h2
  className="mb-1 font-metropolis font-[600] text-[#F1F1F1]"
  style={{
    fontSize: "65px", 
    fontWeight: "600",
    lineHeight: "52px", // 80%
  }}
>
  Stundenweise <br />
  Betreuung<br></br> durch
  Prime <br /> Home Care AG
</h2>


    {/* Subtitle */}
<p
  className="font-metropolis font-normal text-[#F1F1F1] mb-[20px]"
  style={{
    fontSize: "16px", // var(--font-size-16, 16px)
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "25.6px", // var(--line-height-25_6, 25.6px)
  }}
>
  Flexible Betreuung – Ihre Unterstützung, genau wann Sie sie brauchen!
</p>


    {/* Call-to-Action Button */}
    <button
      className="px-[20px] py-[10px] text-[18px] font-[500] leading-[21.6px] rounded-[50px] bg-[#B99B5F] lg:mt-[30px]"
    >
      Einfach, digital und individuell – Ihr Zuhause, unsere Fürsorge.
    </button>
  </div>
</section>

<section
  className="flex items-center gap-[60px] bg-white rounded-[20px] max-w-[1300px] mx-auto mt-[150px] mb-[150px]"
  style={{
    height: "630px",
  }}
>
  {/* Image Section */}
  <div className="flex-shrink-0">
    <img
      src="/images/sectionhome.png"
      alt="Prime Home Care AG"
      className="rounded-[20px] object-cover h-full w-auto"
      style={{
        height: "100%",
        width: "auto",
      }}
    />
  </div>

  {/* Text Section */}
  <div className="text-left">
    {/* Heading */}
    <h2
  className="text-[#B99B5F] font-metropolis font-semibold"
  style={{
    fontSize: "55px",
    lineHeight: "71.5px", // 130%
    fontStyle: "normal",
    display: "flex",
    height: "40px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    alignSelf: "stretch",
    marginBottom: "20px", // As per previous code
  }}
>
  Was macht uns besonders?
</h2>


    {/* Description */}
    <p
  className="text-[#B99B5F] font-metropolis font-normal"
  style={{
    fontSize: "20px", // Adjusted to 20px
    lineHeight: "31px", // 155%
    display: "flex",
    width: "804px",
    height: "135px",
    flexDirection: "column",
    justifyContent: "center",
    flexShrink: 0,
    fontStyle: "normal",
    color: "#B99B5F",
    marginBottom: "20px", // Added to match your previous margin-bottom style
  }}
>
  Prime Home Care AG – Betreuung neu gedacht. <br />
  Unsere volldigitale Online-Plattform bietet Ihnen genau die Unterstützung,
  die Sie brauchen – stundenweise, flexibel und in bester Qualität. Egal, ob
  Sie Entlastung im Alltag suchen, Unterstützung für Ihre Liebsten oder
  einfach mehr Freiraum – wir sind für Sie da.
</p>


    {/* Highlights */}
    <ul
  className="font-metropolis"
  style={{
    color: "#B99B5F",
    fontSize: "24px", 
    fontStyle: "normal",
    fontWeight: "400", 
    lineHeight: "46.8px", 
    listStyleType: "none", 
    padding: "0", 
    margin: "0", 
  }}
>
  <li
    style={{
      marginBottom: "30px", 
      borderLeft: "2px solid #B99B5F", 

    }}
  >
    <strong
      style={{
        color: "#B99B5F",
        fontWeight: "700",
        marginLeft: "20px" // Bold weight for strong text
      }}
    >
      Flexibilität:
    </strong>{" "}
    Stundenweise Betreuung nach Ihrem Zeitplan.
  </li>
  <li
    style={{
      marginBottom: "30px",
      borderLeft: "2px solid #B99B5F", 
      
    }}
  >
    <strong
      style={{
        color: "#B99B5F",
        fontWeight: "700",
        marginLeft: "20px" // Bold weight for strong text

      }}
    >
      Komfort:
    </strong>{" "}
    Einfach online buchen und anpassen.
  </li>
  <li 
   style={{
    borderLeft: "2px solid #B99B5F", 
    
  }}>
    <strong
      style={{
        color: "#B99B5F",
        fontWeight: "700",
        marginLeft: "20px",
      }}
    >
      Qualität:
    </strong>{" "}
    Geprüfte, erfahrene Betreuungspersonen.
  </li>
</ul>

  </div>
</section>

<section
  className="flex flex-col items-center gap-[60px] max-w-[1920px] px-[100px] mx-auto"
  style={{
    width: "1472px",
    height: "531px",
  }}
>
  {/* Title Section */}
  <div className="text-center">
    <h2
      className="text-[#B99B5F] font-metropolis text-[55px] font-[600] leading-[71.5px]"
      style={{
        marginBottom: "10px",
      }}
    >
      Wer profitiert davon?
    </h2>
    <p
      className="text-[#B99B5F] font-metropolis text-[24px] font-normal leading-[40px]"
    >
      Unsere Betreuung ist ideal für:
    </p>
  </div>

  {/* Cards Section */}
  <div className="flex justify-between gap-[40px] w-full">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center p-[10px] bg-white rounded-[20px] ">
      <img
        src="/images/Link.png"
        alt="Familien"
        className="w-[352px] h-[352px] object-cover rounded-[20px]"
      />
    
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center p-[10px] bg-white rounded-[20px] ">
      <img
        src="/images/Link (1).png"
        alt="Senioren"
        className="w-[352px] h-[352px] object-cover rounded-[20px]"
      />
     
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center p-[10px] bg-white rounded-[20px] ">
      <img
        src="/images/Link (2).png"
        alt="Berufstätige"
        className="w-[352px] h-[352px] object-cover rounded-[20px]"
      />
   
    </div>
  
  </div>
  <p
      className="text-[#B99B5F] font-metropolis text-[24px] font-normal leading-[40px]"
    >
    Wir bieten eine Lösung für jedes Bedürfnis – genau dann, wenn Sie sie brauchen. 
    </p>
</section>

<section
  className="flex justify-between items-center max-w-[1242px] mx-auto mt-[160px] mb-[150px]"
>
  {/* Left Side - Image */}
  <div className='mt-[100px]'>
    <img
      src="/images/backphc.png"
      alt="Working with senior"
      className="w-[586px] h-[657px] object-cover"
    />
  </div>

  {/* Right Side - Text Section */}
  <div className="flex flex-col w-[563px] text-left">
  <h2
  className="text-[#FAFAFA] w-[490px] font-metropolis text-[24px] font-bold leading-[24px] mb-[30px] flex flex-col items-start px-[10px] py-[4px] rounded-[50px] bg-gradient-to-r from-[#B99B5F] to-[#B99B5F] bg-opacity-[0.51]"
  style={{
    fontFamily: "Metropolis",
    lineHeight: "100%",
    background: "linear-gradient(100deg, #B99B5F 0%, rgba(185, 155, 95, 0.51) 100%)",
  }}
>
  In 3 einfachen Schritten zu Ihrer Betreuung:
</h2>


<h3
  className="text-[#B99B5F] font-metropolis text-[55px] font-semibold leading-[71.5px] mb-[30px]"
  style={{
    fontFamily: "Metropolis",
    fontSize: "55px",
    fontWeight: "600",
    lineHeight: "71.5px", // 130% line height
  }}
>
  So funktioniert's
</h3>


    <ul className="space-y-6 text-[#1C1B1D] font-metropolis text-[20px] font-normal leading-[31px]">
      <li>
        <strong className="text-[#B99B5F]">Wunschzeit eingeben:</strong> <br></br> Wählen Sie
        Datum, Uhrzeit, Dauer und Regelmäßigkeit online aus.
      </li>
      <li>
        <strong className="text-[#B99B5F]">Betreuungsperson auswählen:</strong> Wir
        organisieren eine auf Ihre Bedürfnisse abgestimmte Betreuungsperson.
      </li>
      <li>
        <strong className="text-[#B99B5F]">Betreuung genießen:</strong> Unser Team
        kümmert sich um den Rest – einfach, sicher und zuverlässig.
      </li>
    </ul>
    <p className="text-[#B99B5F] font-metropolis text-[24px] font-normal leading-[26px] mt-[40px]">
  Alles direkt über unsere benutzerfreundliche Plattform.
</p>
  </div>

</section>

<section className="flex justify-center items-center w-full mb-[150px]">
  <div className="flex justify-between items-center w-[1167px] h-[552px] rounded-[20px]">
    {/* Text Section */}
    <div className="flex flex-col items-start w-[50%] pr-[20px]">
      <h2
        className="text-[#B99B5F] font-metropolis text-[55px] font-semibold leading-[71.5px] mb-[20px]"
      >
        Unsere <br></br>Betreuungs­personen
      </h2>
      
      <div className="text-[#B99B5F] font-metropolis text-[20px] font-normal leading-[26px] space-y-[15px]">
        <div className='bg-white p-[20px] rounded-[20px]'>Vertrauen Sie den Profis.</div>
        <div className='bg-white p-[20px] rounded-[20px]'>Geprüft und qualifiziert.</div>
        <div className='bg-white p-[20px] rounded-[20px]'>Freundlich, erfahren und engagiert.</div>
        <div className='bg-white p-[20px] rounded-[20px]'>Flexibel und an Ihre Bedürfnisse angepasst.</div>
        <div className='bg-white p-[20px] rounded-[20px]'>Ihre Bedürfnisse und Zufriedenheit stehen für uns an erster Stelle.</div>
      </div>
    </div>

    {/* Image Section */}
  <div
  className="w-[42%] h-[552px] bg-lightgray rounded-[20px] max-w-[790px]"
  style={{
    backgroundImage: `url(/images/66501b5ca75a448031e5dcfa_hero-02.jpg.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "#f0f0f0", // Fallback background color
  }}
></div>

  </div>
</section>

<section>

</section>


            </div>
    );
  }
  