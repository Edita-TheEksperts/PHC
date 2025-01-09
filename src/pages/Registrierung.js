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
    <div className="flex flex-col items-center text-center p-[10px]rounded-[20px] ">
      <img
        src="/images/Link.png"
        alt="Familien"
        className="w-[352px] h-[352px] object-cover rounded-[20px]"
      />
    
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center p-[10px] rounded-[20px] ">
      <img
        src="/images/Link (1).png"
        alt="Senioren"
        className="w-[352px] h-[352px] object-cover rounded-[20px]"
      />
     
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center p-[10px] rounded-[20px] ">
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

<section
  style={{
    display: "flex",
    marginBottom: "160px",
    width: "100%", // Ensures it stretches the full width of the screen
    maxWidth: "1167px", // Limits the width to 1280px on larger screens
    justifyContent: "center", // Centers the content horizontally
    alignItems: "center", // Centers the content vertically
    gap: "110px", // Maintains the gap between the left and right sections
    flexShrink: "0",
    textAlign: "center", // Centers the text in the right section
    margin: "0 auto", // Centers the section within the parent container
  }}
  className="relative flex justify-center items-center"
>
  {/* Left Section (Image) */}
  <div
    style={{
      width: "50%", // Adjust width for responsiveness
      minHeight: "100%", // Ensures the container takes full height
    }}
  >
    <img
      src="/images/Experience.png" // Replace with your image path
      alt="Warum Prime Home Care"
      style={{
        width: "100%", // Ensure the image takes the full width of the container
        height: "100%", // Ensure the image takes full height
        objectFit: "cover", // Ensures the image covers the container area without distortion
      }}
    />
  </div>

  {/* Right Section (Text) */}
  <div class="w-[60%] flex flex-col justify-start items-start text-left mb-[120px]">
  <h2
      style={{
        fontSize: "55px",
        fontWeight: "600",
        color: "#B99B5F",
        marginBottom: "16px",
        lineHeight: "71.5px",
      }}
    >
      Warum Prime Home Care AG?
    </h2>
    <p
      style={{
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "25.6px",
        color: "#B99B5F",
      }}
    >
      Wir sind die erste vollständig digitale Plattform in der Schweiz, die Betreuung so einfach und modern macht. Mit uns haben Sie die Kontrolle über Ihre Zeit – ohne Kompromisse bei Qualität und Sicherheit.
    </p>
    <p
      className="bg-[#B99B5F] px-[20px] py-[12px] rounded-[50px] inline-block"
      style={{
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "21.6px",
        marginTop: "20px",
        color: "white",
      }}
    >
      Ihre Zeit ist wertvoll. Lassen Sie uns helfen.
    </p>
  </div>
</section>


<section
  className="font-montserat rounded-[20px] max-w-[1290px] h-[360px] relative flex flex-col items-center justify-center bg-cover md:mb-[160px]"
  style={{
    backgroundImage: "url('/images/Gold Box 1.png')", 
    marginLeft: 'auto', 
    width:'1270px',
    backgroundRepeat: 'no-repeat', 
    marginRight: 'auto',
  }}
>
  {/* Main Heading */}
  <h1
    className="text-[#B99B5F] font-metropolis font-semibold text-[44px] leading-[52.8px] text-center"
    style={{
      fontWeight: "600",
    }}
  >
    Jetzt vormerken! 
  </h1>

  {/* Subheading */}
  <p
    className="text-[#B99B5F] font-metropolis text-[16px] leading-[25.6px] font-normal text-center mt-4"
    style={{
      fontWeight: "400",
    }}
  >
    Seien Sie unter den Ersten, die von unserer innovativen Betreuung profitieren. 
  </p>

  {/* Button */}
  <Link href="/Form-Page-1">
  <button
    className="mt-6 px-8 py-3 text-white font-metropolis text-[18px] font-medium leading-[21.6px] bg-[#B99B5F] rounded-full"
    style={{
      borderRadius: "50px",
    }}
  >
    Klicken Sie hier, um sich unverbindlich zu registrieren und über den Start informiert zu werden! 
  </button>
  </Link>

  {/* Footer Note */}
  <p
    className="text-[#B99B5F] font-metropolis text-[16px] italic font-normal leading-[25.6px] text-center mt-4 "
    style={{
      fontWeight: "400",
    }}
  >
(Frühbucher erhalten exklusive Angebote!) 
  </p>
</section>

<section className="mt-[160px] mb-[120px] flex flex-col justify-center items-center">
        {/* Main Content */}
        <div
            className="flex justify-between items-start w-[1238px] h-[193px] px-6"
            style={{
            color: "#B99B5F",
            fontFamily: "Metropolis",
            }}
        >
            {/* Left Section */}
            <div className="flex flex-col">
            <h1
                className="text-[#B99B5F] font-metropolis font-bold"
                style={{
                fontSize: "48px",
                lineHeight: "64.167%",
                }}
            >
                Prime Home Care AG
            </h1>
        
            <p
                className="text-[#B99B5F] font-metropolis"
                style={{
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "30.8px",
                }}
            >
                Zusammen Gutes bewirken.
            </p>

            <p
                className="text-[#B99B5F] font-metropolis italic mt-[80px] text-left"
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
            color: "#B99B5F",
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
        <Link href="www.phc.ch">
        <p
            className="font-normal"
            style={{
            fontSize: "24px",
            lineHeight: "30.8px", // 128.333%
            }}
        >
            www.phc.ch
        </p>
        </Link>
        </div>

                </div>
                </section>
            </div>
    );
  }
  
