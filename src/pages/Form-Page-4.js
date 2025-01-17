import React, { useState } from 'react';
import Link from "next/link";


const FormPage4 = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    setIsSubmitted(true); // Update the state to show the thank-you message
  };

    const [question, setQuestion] = useState('');
    const [openFAQ, setOpenFAQ] = useState(null); // Track the open FAQ
  
    const handleInputChange = (e) => {
      setQuestion(e.target.value);
    };
  
    const toggleFAQ = (index) => {
      // Toggle the FAQ visibility by checking if it's already open
      if (openFAQ === index) {
        setOpenFAQ(null); // Close if it's already open
      } else {
        setOpenFAQ(index); // Open the clicked FAQ
      }
    };
  
    const faqData = [
      {
        question: 'Stundenweise Seniorenbetreuung: Was bedeutet das?',
        answer: 'Stundenweise Seniorenbetreuung bezieht sich auf eine Art von Pflege- und Unterstützungsdienst, bei dem Betreuungspersonen für eine bestimmte Anzahl von Stunden pro Tag oder Woche bei hilfsbedürftigen Menschen zu Hause im Einsatz sind. - Flexible Einsatzzeiten Die Betreuung erfolgt nicht rund um die Uhr, sondern für eine im Voraus festgelegte Anzahl von Stunden, die je nach Bedarf variieren kann. Dies kann täglich, mehrmals pro Woche oder auch nur gelegentlich sein. - Individuell angepasste Unterstützung Die Betreuungsleistungen werden auf die individuellen Bedürfnisse zugeschnitten. Dazu können Aufgaben wie Unterstützung bei der Körperpflege, Haushaltsarbeiten, Begleitung zu Arztterminen oder einfach Gesellschaft leisten gehören. - Entlastung für Angehörige Stundenweise Betreuung kann Angehörigen eine dringend benötigte Pause bieten und sie unterstützen, wenn sie selbst Verpflichtungen haben. Es ermöglicht Familienmitgliedern, ihre eigenen Aufgaben und Freizeitaktivitäten zu bewältigen, während sie wissen, dass ihr Familienmitglied bestens versorgt ist. - Erhaltung der Selbstständigkeit Diese Art der stundenweisen Betreuung hilft Senioren, so lange wie möglich in ihrer vertrauten Umgebung zu bleiben. Sie erhalten die Unterstützung, die sie benötigen, ohne vollständig auf Fremdpflege angewiesen zu sein. - Soziale Interaktion Stundenweise Betreuungsmitarbeiter bieten nicht nur praktische Hilfe im eigenen Zuhause, sondern auch soziale Interaktionen, die für das emotionale Wohlbefinden sehr wichtig ist. Gemeinsame Aktivitäten wie Gespräche, Spaziergänge oder Spiele können Einsamkeit und Isolation reduzieren. Insgesamt bietet die stundenweise Seniorenbetreuung eine flexible und bedarfsgerechte Lösung für Menschen und ihre Familien, um Unterstützung und Entlastung im Alltag zu erhalten.'
      },
      {
        question: 'Besteht die Option, das Betreuungspersonal selbst zu wählen?',
        answer: 'Leider nein, aber wir legen sehr grossen Wert darauf, die passenden Mitarbeiter für Ihre Bedürfnisse zu finden. Unser Ziel ist es, Ihnen eine Betreuungskraft zur Seite zu stellen, die optimal auf Ihre individuellen Anforderungen und Wünsche abgestimmt ist. Wir achten dabei sorgfältig auf Qualifikationen, Erfahrungen und persönliche Eigenschaften, um eine vertrauensvolle und harmonische Betreuung sicherzustellen.'
      },
      {
        question: 'Können die Betreuungszeiten individuell und bedarfsorientiert festgelegt werden?',
        answer: 'Ja, die Betreuungszeiten können online angepasst und ausgewählt werden. Wir benötigen dabei eine Vorlaufzeit von 7 Tagen, um sicherzustellen, dass wir die bestmögliche stundenweise Betreuung für Sie organisieren können. Unsere flexible Planung ermöglicht es Ihnen, die Betreuung nach Ihren individuellen Bedürfnissen zu gestalten und Änderungen rechtzeitig vorzunehmen.'
      },
      {
        question: 'Wann ist eine stundenweise Betreuung ratsam und für wen ist sie besonders geeignet?',
        answer: 'Eine stundenweise Betreuung ist ratsam, wenn nur zeitweise Unterstützung benötigt wird, zum Beispiel bei der Entlastung von pflegenden Angehörigen oder bei speziellen Aufgaben wie Arztbesuche, Gesellschaft leisten oder Haushaltshilfe. Sie ist besonders geeignet für Senioren, die noch weitgehend selbstständig sind, aber gelegentlich Hilfe und/oder Gesellschaft brauchen.'
      },
      {
        question: 'Wann reicht eine stundenweise Betreuung nicht mehr aus?',
        answer: 'Eine stundenweise Betreuung reicht nicht mehr aus, wenn ein Senior umfassendere und kontinuierlichere Unterstützung benötigt, wie bei schwerwiegenden gesundheitlichen Einschränkungen, fortgeschrittener Demenz oder wenn rund um die Uhr Pflege erforderlich ist. In solchen Fällen ist eine intensivere Betreuung und allenfalls auch Pflege notwendig. Wir verfügen über ein grosses Netzwerk von Spitex-Partnern sowie 24 Stunden Betreuungs-Partnern, um auch in solchen Situationen die passende Unterstützung für Sie sicherzustellen.'
      }
    ];

  return (
    <div className="bg-[#F1F1F1] text-[#B99B5F] min-h-screen p-4 md:p-0">
      {/* Section 1: Logo and Zuruk */}
      <section className="md:block hidden md:flex justify-center items-center pt-[60px] md:pt-[60px]">
      <div className="absolute top-6 left-4 lg:left-[170px]">
        <Link href="/Form-page-3">
          <button
            className="text-white text-[16px] font-[400] inline-flex items-center px-4 py-2 mt-[40px] "
            style={{
              fontFamily: "Metropolis",
              background: "linear-gradient(93deg, #B2EAFF 0%, #A9B4B9 50%, rgba(0, 0, 0, 0.00) 100%)",
              borderRadius: "var(--opacity-50, 50px) 0px 0px var(--opacity-50, 50px)",
              padding: "6px 12px",
            }}
          >
            &larr; Zurück
          </button>
        </Link>
      </div>
      <div className="mb-10 flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="79" viewBox="0 0 160 79" fill="none">
                  <g clip-path="url(#clip0_883_682)">
                    <path d="M130.59 10.5036C133.902 8.76029 137.788 7.89302 142.253 7.89302C144.951 7.89302 147.486 8.15583 149.885 8.6902C152.271 9.23772 155.596 10.4028 158.715 11.7475V3.43404C153.508 1.51554 147.999 0.560669 142.174 0.560669C136.349 0.560669 131.038 1.75645 126.524 4.14362C122.002 6.53956 118.506 9.9035 116.028 14.2617C113.563 18.6068 112.317 23.6396 112.317 29.3294C112.317 35.0192 113.563 40.2579 116.028 44.7168C118.506 49.1758 121.989 52.623 126.48 55.0715C130.968 57.5112 136.156 58.7333 142.016 58.7333C145.67 58.7333 148.986 58.3916 151.942 57.7302C154.035 57.2528 156.285 56.5082 158.715 55.4832V46.9726C155.697 48.6371 152.934 49.789 150.412 50.4285C147.876 51.0768 145.056 51.3965 141.937 51.3965C137.744 51.3965 134.012 50.5424 130.766 48.8166C127.511 47.0952 124.963 44.5854 123.134 41.2872C121.305 37.9802 120.392 33.9855 120.392 29.3207C120.392 24.9186 121.261 21.1079 123.007 17.9148C124.752 14.7217 127.292 12.2469 130.59 10.4992V10.5036Z" fill="#04436F"/>
                    <path d="M0 64.1953H5.58364C6.5179 64.1953 7.37321 64.3836 8.14518 64.7559C8.91716 65.1282 9.53123 65.6538 9.97862 66.324C10.426 66.9985 10.6497 67.7519 10.6497 68.5929C10.6497 69.4339 10.426 70.1873 9.97862 70.8618C9.53123 71.5364 8.92154 72.0576 8.14518 72.4299C7.37321 72.8022 6.5179 72.9906 5.58364 72.9906H1.56149V77.927H0V64.1953ZM5.30292 71.5101C6.43895 71.5101 7.34689 71.2517 8.03553 70.7304C8.72416 70.2092 9.06629 69.4996 9.06629 68.5929C9.06629 67.6862 8.72416 66.9723 8.03553 66.4554C7.34689 65.9342 6.43895 65.6757 5.30292 65.6757H1.56149V71.5145H5.30292V71.5101Z" fill="#04436F"/>
                    <path d="M15.5929 67.9622C16.2991 67.5548 17.1281 67.3533 18.0755 67.3533V68.6937C17.3035 68.6937 16.6105 68.8426 16.0052 69.1317C15.3999 69.4251 14.9262 69.8369 14.5841 70.3625C14.242 70.8881 14.0753 71.4838 14.0753 72.1496V77.927H12.5752V67.5942H14.0753V69.6135C14.3823 68.9214 14.8911 68.3695 15.5973 67.9622H15.5929Z" fill="#04436F"/>
                    <path d="M19.7861 65.4129C19.5931 65.2115 19.4966 64.9793 19.4966 64.7121C19.4966 64.4449 19.5931 64.2172 19.7861 64.0244C19.9791 63.8317 20.2159 63.7354 20.4966 63.7354C20.7774 63.7354 20.9923 63.8317 21.1853 64.0244C21.3783 64.2172 21.4748 64.4493 21.4748 64.7121C21.4748 64.9749 21.3783 65.2115 21.1853 65.4129C20.9923 65.6144 20.7598 65.7108 20.4966 65.7108C20.2159 65.7108 19.9791 65.6101 19.7861 65.4129ZM19.7378 67.5943H21.2379V77.927H19.7378V67.5943Z" fill="#04436F"/>
                    <path d="M36.9537 67.8614C37.5151 68.2031 37.9493 68.6761 38.2651 69.2806C38.5766 69.8851 38.7345 70.5771 38.7345 71.348V77.927H37.2344V71.5495C37.2344 70.7085 37.0107 70.0252 36.5633 69.4909C36.1159 68.9565 35.5457 68.6893 34.8527 68.6893C34.0237 68.6893 33.3526 68.939 32.8306 69.4383C32.3087 69.9376 32.0499 70.5727 32.0499 71.348V77.927H30.5498V71.5495C30.5498 70.7085 30.3261 70.0252 29.8787 69.4909C29.4313 68.9565 28.8611 68.6893 28.1681 68.6893C27.3391 68.6893 26.668 68.939 26.1461 69.4383C25.6241 69.9376 25.3653 70.5727 25.3653 71.348V77.927H23.8652V67.5943H25.3653V69.1142C25.6329 68.5666 26.0276 68.1374 26.5584 67.8264C27.0847 67.5154 27.69 67.3577 28.3699 67.3577C29.1418 67.3577 29.8261 67.5548 30.4138 67.949C31.0016 68.3433 31.4358 68.8776 31.7165 69.5566C31.9315 68.8908 32.3438 68.3564 32.9578 67.9578C33.5719 67.5592 34.2737 67.3577 35.0588 67.3577C35.765 67.3577 36.401 67.5286 36.9624 67.8658L36.9537 67.8614Z" fill="#04436F"/>
                    <path d="M47.8928 76.4684C48.5113 76.2275 48.985 75.934 49.3052 75.588L50.2263 76.5691C49.7877 77.0509 49.1692 77.4364 48.3753 77.7299C47.5814 78.0233 46.8094 78.1679 46.0638 78.1679C45.1427 78.1679 44.283 77.9357 43.4803 77.4671C42.6776 77.0028 42.0372 76.3501 41.5504 75.5179C41.0635 74.6857 40.8179 73.7571 40.8179 72.7277C40.8179 71.6984 41.046 70.8136 41.5065 69.9902C41.9671 69.1623 42.5855 68.5184 43.3663 68.0498C44.147 67.5855 44.9979 67.3489 45.919 67.3489C47.4674 67.3489 48.6736 67.8877 49.5333 68.9696C50.393 70.0471 50.8228 71.5013 50.8228 73.3278H42.3574C42.4627 74.3528 42.8531 75.1938 43.5285 75.8464C44.204 76.499 45.0418 76.8276 46.0418 76.8276C46.6559 76.8276 47.2744 76.7093 47.8928 76.4684ZM43.5768 69.6003C42.9101 70.2048 42.5109 71.002 42.375 71.9875H49.3403C49.235 71.002 48.8929 70.2048 48.3183 69.6003C47.7437 68.9959 46.9629 68.6893 45.976 68.6893C45.0418 68.6893 44.2391 68.9915 43.5724 69.6003H43.5768Z" fill="#04436F"/>
                    <path d="M69.5827 64.1953V77.927H68.0212V71.6721H59.9155V77.927H58.354V64.1953H59.9155V70.1917H68.0212V64.1953H69.5827Z" fill="#04436F"/>
                    <path d="M74.425 77.4276C73.596 76.9327 72.9381 76.2713 72.4512 75.4391C71.9644 74.6068 71.7188 73.7089 71.7188 72.7496C71.7188 71.7904 71.96 70.8969 72.4512 70.069C72.9381 69.2412 73.596 68.5841 74.425 68.0892C75.254 67.5942 76.14 67.3489 77.0875 67.3489C78.0349 67.3489 78.9209 67.5942 79.7411 68.0892C80.5613 68.5841 81.2149 69.2412 81.7018 70.069C82.1886 70.8969 82.4343 71.786 82.4343 72.7496C82.4343 73.7133 82.1886 74.6068 81.7018 75.4391C81.2149 76.2713 80.5613 76.9371 79.7411 77.4276C78.9209 77.9226 78.0349 78.1679 77.0875 78.1679C76.14 78.1679 75.254 77.9226 74.425 77.4276ZM78.9604 76.2669C79.5394 75.8946 79.9999 75.3953 80.342 74.7777C80.6842 74.1601 80.8508 73.4811 80.8508 72.7496C80.8508 72.0182 80.6798 71.3568 80.342 70.7304C79.9999 70.104 79.5394 69.6091 78.9604 69.2412C78.3814 68.8732 77.7542 68.6893 77.0875 68.6893C76.4208 68.6893 75.776 68.8732 75.197 69.2412C74.618 69.6091 74.1575 70.104 73.8154 70.7304C73.4732 71.3568 73.3066 72.0313 73.3066 72.7496C73.3066 73.468 73.4776 74.1601 73.8154 74.7777C74.1575 75.3953 74.618 75.8946 75.197 76.2669C75.776 76.6392 76.4076 76.8276 77.0875 76.8276C77.7673 76.8276 78.377 76.6392 78.9604 76.2669Z" fill="#04436F"/>
                    <path d="M97.606 67.8614C98.1674 68.2031 98.6017 68.6761 98.9175 69.2806C99.2289 69.8851 99.3868 70.5771 99.3868 71.348V77.927H97.8867V71.5495C97.8867 70.7085 97.663 70.0252 97.2156 69.4909C96.7682 68.9565 96.198 68.6893 95.505 68.6893C94.676 68.6893 94.0049 68.939 93.483 69.4383C92.961 69.9376 92.7022 70.5727 92.7022 71.348V77.927H91.2022V71.5495C91.2022 70.7085 90.9785 70.0252 90.5311 69.4909C90.0837 68.9565 89.5135 68.6893 88.8204 68.6893C87.9915 68.6893 87.3204 68.939 86.7984 69.4383C86.2764 69.9376 86.0177 70.5727 86.0177 71.348V77.927H84.5176V67.5943H86.0177V69.1142C86.2852 68.5666 86.68 68.1374 87.2107 67.8264C87.7371 67.5154 88.3424 67.3577 89.0222 67.3577C89.7942 67.3577 90.4784 67.5548 91.0662 67.949C91.6539 68.3433 92.0882 68.8776 92.3689 69.5566C92.5838 68.8908 92.9961 68.3564 93.6102 67.9578C94.2242 67.5592 94.926 67.3577 95.7112 67.3577C96.4174 67.3577 97.0534 67.5286 97.6148 67.8658L97.606 67.8614Z" fill="#04436F"/>
                    <path d="M108.546 76.4684C109.164 76.2275 109.638 75.934 109.958 75.588L110.879 76.5691C110.44 77.0509 109.822 77.4364 109.028 77.7299C108.234 78.0233 107.462 78.1679 106.717 78.1679C105.796 78.1679 104.936 77.9357 104.133 77.4671C103.33 77.0028 102.69 76.3501 102.203 75.5179C101.716 74.6857 101.471 73.7571 101.471 72.7277C101.471 71.6984 101.699 70.8136 102.159 69.9902C102.62 69.1623 103.238 68.5184 104.019 68.0498C104.8 67.5855 105.651 67.3489 106.572 67.3489C108.12 67.3489 109.326 67.8877 110.186 68.9696C111.046 70.0471 111.476 71.5013 111.476 73.3278H103.01C103.116 74.3528 103.506 75.1938 104.181 75.8464C104.857 76.499 105.695 76.8276 106.695 76.8276C107.309 76.8276 107.927 76.7093 108.546 76.4684ZM104.234 69.6003C103.567 70.2048 103.168 71.002 103.032 71.9875H109.997C109.892 71.002 109.55 70.2048 108.976 69.6003C108.401 68.9959 107.62 68.6893 106.633 68.6893C105.699 68.6893 104.896 68.9915 104.23 69.6003H104.234Z" fill="#04436F"/>
                    <path d="M122.015 77.1999C120.927 76.5516 120.063 75.6844 119.423 74.5893C118.783 73.4987 118.462 72.316 118.462 71.0502C118.462 69.7843 118.783 68.6104 119.423 67.5198C120.063 66.4335 120.927 65.5662 122.015 64.9224C123.103 64.2741 124.265 63.9543 125.507 63.9543C126.441 63.9543 127.336 64.1383 128.191 64.5019C129.046 64.8698 129.801 65.3867 130.454 66.0524L129.393 67.1299C128.884 66.5824 128.296 66.1576 127.621 65.8509C126.945 65.5443 126.244 65.391 125.511 65.391C124.537 65.391 123.634 65.6495 122.8 66.1619C121.967 66.6744 121.3 67.3665 120.8 68.2425C120.3 69.1142 120.05 70.0515 120.05 71.0502C120.05 72.0488 120.3 73.0037 120.8 73.871C121.3 74.7382 121.967 75.4303 122.8 75.9515C123.634 76.4728 124.537 76.7312 125.511 76.7312C126.244 76.7312 126.95 76.5779 127.621 76.2713C128.296 75.9647 128.884 75.5398 129.393 74.9923L130.454 76.0698C129.801 76.7224 129.046 77.2349 128.191 77.6072C127.336 77.9795 126.441 78.1679 125.507 78.1679C124.265 78.1679 123.103 77.8438 122.015 77.1999Z" fill="#04436F"/>
                    <path d="M139.494 68.5228C140.209 69.3025 140.565 70.3406 140.565 71.6327V77.9314H139.065V76.3107C138.705 76.8977 138.187 77.3532 137.512 77.6817C136.836 78.0102 136.139 78.1723 135.42 78.1723C134.31 78.1723 133.406 77.8744 132.696 77.2744C131.99 76.6743 131.634 75.8771 131.634 74.874C131.634 74.2083 131.818 73.6126 132.183 73.0869C132.551 72.5613 133.042 72.154 133.665 71.8693C134.284 71.5846 134.963 71.44 135.696 71.44C136.735 71.44 137.858 71.6327 139.06 72.0182V71.6371C139.06 70.7961 138.845 70.0866 138.42 69.5084C137.994 68.9302 137.271 68.6367 136.257 68.6367C135.788 68.6367 135.314 68.72 134.827 68.8864C134.341 69.0528 133.81 69.285 133.235 69.5741L132.634 68.3564C133.968 67.6906 135.209 67.3577 136.358 67.3577C137.731 67.3577 138.775 67.7476 139.49 68.5272L139.494 68.5228ZM137.793 76.2801C138.455 75.899 138.876 75.369 139.065 74.6901V73.1089C138.051 72.8285 137.007 72.6884 135.942 72.6884C135.152 72.6884 134.485 72.8898 133.928 73.2884C133.376 73.687 133.099 74.1951 133.099 74.8083C133.099 75.4216 133.341 75.9297 133.832 76.2976C134.319 76.6655 134.937 76.8495 135.683 76.8495C136.428 76.8495 137.135 76.6611 137.793 76.2801Z" fill="#04436F"/>
                    <path d="M146.39 67.9622C147.096 67.5548 147.925 67.3533 148.872 67.3533V68.6937C148.1 68.6937 147.407 68.8426 146.802 69.1317C146.197 69.4251 145.723 69.8369 145.381 70.3625C145.039 70.8881 144.872 71.4838 144.872 72.1496V77.927H143.372V67.5942H144.872V69.6135C145.179 68.9214 145.688 68.3695 146.394 67.9622H146.39Z" fill="#04436F"/>
                    <path d="M157.07 76.4684C157.689 76.2275 158.162 75.934 158.482 75.588L159.404 76.5691C158.965 77.0509 158.346 77.4364 157.553 77.7299C156.759 78.0233 155.987 78.1679 155.241 78.1679C154.32 78.1679 153.46 77.9357 152.658 77.4671C151.855 77.0028 151.214 76.3501 150.728 75.5179C150.241 74.6857 149.995 73.7571 149.995 72.7277C149.995 71.6984 150.223 70.8136 150.684 69.9902C151.144 69.1623 151.763 68.5184 152.544 68.0498C153.324 67.5855 154.175 67.3489 155.096 67.3489C156.645 67.3489 157.851 67.8877 158.711 68.9696C159.57 70.0471 160 71.5013 160 73.3278H151.535C151.64 74.3528 152.03 75.1938 152.706 75.8464C153.381 76.499 154.219 76.8276 155.219 76.8276C155.833 76.8276 156.452 76.7093 157.07 76.4684ZM152.754 69.6003C152.087 70.2048 151.688 71.002 151.552 71.9875H158.518C158.412 71.002 158.07 70.2048 157.496 69.6003C156.921 68.9959 156.14 68.6893 155.153 68.6893C154.219 68.6893 153.416 68.9915 152.75 69.6003H152.754Z" fill="#04436F"/>
                    <path d="M40.4581 8.87416C38.6993 6.02269 36.2649 3.83262 33.1375 2.30395C30.0058 0.762144 26.4003 0 22.2861 0H0.648926V57.4893H8.55287V37.4502H22.2817C26.3916 37.4502 30.0277 36.688 33.177 35.1594C36.3307 33.6176 38.7607 31.4538 40.4888 28.6242C42.2258 25.8078 43.0811 22.5095 43.0811 18.7338C43.0811 14.9582 42.1994 11.7169 40.4537 8.87854L40.4581 8.87416ZM23.6765 30.4901H8.55287V7.04764H23.6765C30.1637 7.04764 35.4052 12.295 35.4052 18.7733C35.4052 25.2515 30.1637 30.4858 23.6765 30.4858V30.4901Z" fill="#04436F"/>
                    <path d="M93.8647 0V57.4893H101.769V0H93.8647ZM52.1694 0V57.4893H60.0734V0H52.1694Z" fill="#04436F"/>
                    <path d="M108.69 33.6307L77.1706 20.8363C77.039 20.7881 76.8943 20.7881 76.7671 20.8363L45.2478 33.6307C44.9539 33.7402 44.8048 34.0643 44.9144 34.3578L46.1557 37.7612C46.2654 38.059 46.5987 38.2123 46.897 38.0984L76.7714 28.7074C76.903 28.6592 77.0478 28.6592 77.175 28.7074L107.049 38.0984C107.348 38.2123 107.681 38.059 107.791 37.7612L109.032 34.3578C109.137 34.0643 108.988 33.7402 108.699 33.6307H108.69Z" fill="#B99B5F"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_883_682">
                      <rect width="160" height="78.1679" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                </div>
      </section>

      <section className='md:hidden block flex justify-center items-center '>
      <div className=" mt-0">
        <div className="mb-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" width="131" height="64" viewBox="0 0 131 64" fill="none">
  <g clip-path="url(#clip0_597_1010)">
    <path d="M106.921 8.5998C109.632 7.17248 112.814 6.46241 116.47 6.46241C118.679 6.46241 120.754 6.67758 122.719 7.1151C124.672 7.56338 127.394 8.51732 129.948 9.6183V2.81162C125.685 1.24085 121.174 0.459045 116.405 0.459045C111.636 0.459045 107.287 1.43809 103.592 3.39259C99.8893 5.35426 97.0271 8.10849 94.9981 11.6768C92.9799 15.2343 91.96 19.3549 91.96 24.0135C91.96 28.672 92.9799 32.9611 94.9981 36.6119C97.0271 40.2627 99.8786 43.0851 103.556 45.0898C107.23 47.0873 111.478 48.0879 116.276 48.0879C119.267 48.0879 121.982 47.8081 124.403 47.2666C126.116 46.8757 127.958 46.2661 129.948 45.4269V38.4588C127.477 39.8216 125.215 40.7648 123.15 41.2884C121.074 41.8191 118.765 42.0809 116.211 42.0809C112.778 42.0809 109.722 41.3816 107.065 39.9686C104.4 38.5592 102.313 36.5043 100.816 33.8039C99.3183 31.0963 98.5714 27.8256 98.5714 24.0063C98.5714 20.4021 99.2824 17.2821 100.712 14.6677C102.141 12.0534 104.22 10.0271 106.921 8.59622V8.5998Z" fill="#04436F"/>
    <path d="M0 52.5599H4.5716C5.33653 52.5599 6.03682 52.7141 6.66887 53.019C7.30092 53.3238 7.80369 53.7542 8.16999 54.3028C8.5363 54.8551 8.71945 55.472 8.71945 56.1605C8.71945 56.8491 8.5363 57.4659 8.16999 58.0182C7.80369 58.5705 7.30451 58.9972 6.66887 59.3021C6.03682 59.6069 5.33653 59.7611 4.5716 59.7611H1.27847V63.8028H0V52.5599ZM4.34177 58.549C5.27189 58.549 6.01527 58.3374 6.57909 57.9106C7.14291 57.4838 7.42302 56.9029 7.42302 56.1605C7.42302 55.4182 7.14291 54.8336 6.57909 54.4104C6.01527 53.9837 5.27189 53.7721 4.34177 53.7721H1.27847V58.5525H4.34177V58.549Z" fill="#04436F"/>
    <path d="M12.7666 55.6441C13.3448 55.3105 14.0236 55.1456 14.7993 55.1456V56.243C14.1672 56.243 13.5998 56.3649 13.1042 56.6016C12.6086 56.8419 12.2208 57.179 11.9407 57.6093C11.6606 58.0397 11.5241 58.5274 11.5241 59.0725V63.8027H10.2959V55.3428H11.5241V56.9961C11.7755 56.4294 12.1921 55.9776 12.7702 55.6441H12.7666Z" fill="#04436F"/>
    <path d="M16.1999 53.5569C16.0419 53.3919 15.9629 53.2018 15.9629 52.9831C15.9629 52.7643 16.0419 52.5778 16.1999 52.42C16.3579 52.2622 16.5518 52.1833 16.7817 52.1833C17.0115 52.1833 17.1875 52.2622 17.3455 52.42C17.5035 52.5778 17.5825 52.7679 17.5825 52.9831C17.5825 53.1983 17.5035 53.3919 17.3455 53.5569C17.1875 53.7218 16.9972 53.8007 16.7817 53.8007C16.5518 53.8007 16.3579 53.7183 16.1999 53.5569ZM16.1604 55.3428H17.3886V63.8028H16.1604V55.3428Z" fill="#04436F"/>
    <path d="M30.2557 55.5616C30.7154 55.8413 31.0709 56.2286 31.3295 56.7235C31.5845 57.2184 31.7137 57.7851 31.7137 58.4162V63.8028H30.4855V58.5812C30.4855 57.8926 30.3024 57.3332 29.9361 56.8957C29.5698 56.4581 29.1029 56.2394 28.5355 56.2394C27.8568 56.2394 27.3073 56.4438 26.88 56.8526C26.4526 57.2615 26.2407 57.7815 26.2407 58.4162V63.8028H25.0125V58.5812C25.0125 57.8926 24.8294 57.3332 24.4631 56.8957C24.0968 56.4581 23.6299 56.2394 23.0625 56.2394C22.3838 56.2394 21.8343 56.4438 21.407 56.8526C20.9796 57.2615 20.7677 57.7815 20.7677 58.4162V63.8028H19.5396V55.3428H20.7677V56.5872C20.9868 56.139 21.31 55.7875 21.7446 55.5329C22.1755 55.2783 22.6711 55.1492 23.2277 55.1492C23.8598 55.1492 24.42 55.3106 24.9012 55.6333C25.3824 55.9561 25.738 56.3936 25.9678 56.9495C26.1438 56.4044 26.4814 55.9668 26.9841 55.6405C27.4869 55.3141 28.0615 55.1492 28.7043 55.1492C29.2825 55.1492 29.8032 55.289 30.2629 55.5652L30.2557 55.5616Z" fill="#04436F"/>
    <path d="M39.2125 62.6085C39.7189 62.4113 40.1067 62.171 40.3689 61.8877L41.1231 62.691C40.7639 63.0855 40.2576 63.4011 39.6076 63.6414C38.9576 63.8816 38.3255 64 37.715 64C36.9609 64 36.257 63.8099 35.5998 63.4262C34.9426 63.046 34.4183 62.5117 34.0197 61.8303C33.621 61.1489 33.4199 60.3886 33.4199 59.5459C33.4199 58.7031 33.6067 57.9787 33.9837 57.3045C34.3608 56.6267 34.8672 56.0995 35.5064 55.7158C36.1456 55.3356 36.8423 55.142 37.5965 55.142C38.8642 55.142 39.8518 55.5831 40.5556 56.4689C41.2595 57.3511 41.6115 58.5417 41.6115 60.0372H34.6804C34.7666 60.8764 35.0862 61.5649 35.6393 62.0993C36.1923 62.6336 36.8783 62.9026 37.697 62.9026C38.1998 62.9026 38.7062 62.8058 39.2125 62.6085ZM35.6788 56.9853C35.1329 57.4802 34.8061 58.1329 34.6948 58.9398H40.3976C40.3114 58.1329 40.0313 57.4802 39.5609 56.9853C39.0904 56.4904 38.4512 56.2394 37.6432 56.2394C36.8783 56.2394 36.2211 56.4868 35.6752 56.9853H35.6788Z" fill="#04436F"/>
    <path d="M56.9708 52.5599V63.8028H55.6924V58.6816H49.0558V63.8028H47.7773V52.5599H49.0558V57.4695H55.6924V52.5599H56.9708Z" fill="#04436F"/>
    <path d="M60.9355 63.3939C60.2568 62.9887 59.7181 62.4471 59.3195 61.7657C58.9208 61.0844 58.7197 60.3492 58.7197 59.5638C58.7197 58.7784 58.9172 58.0468 59.3195 57.369C59.7181 56.6912 60.2568 56.1533 60.9355 55.748C61.6142 55.3428 62.3397 55.142 63.1154 55.142C63.8911 55.142 64.6165 55.3428 65.288 55.748C65.9596 56.1533 66.4947 56.6912 66.8933 57.369C67.2919 58.0468 67.493 58.7748 67.493 59.5638C67.493 60.3528 67.2919 61.0844 66.8933 61.7657C66.4947 62.4471 65.9596 62.9922 65.288 63.3939C64.6165 63.7991 63.8911 64 63.1154 64C62.3397 64 61.6142 63.7991 60.9355 63.3939ZM64.6488 62.4435C65.1228 62.1387 65.4999 61.7299 65.78 61.2242C66.0602 60.7186 66.1966 60.1627 66.1966 59.5638C66.1966 58.9649 66.0566 58.4234 65.78 57.9105C65.4999 57.3977 65.1228 56.9925 64.6488 56.6912C64.1748 56.39 63.6612 56.2394 63.1154 56.2394C62.5695 56.2394 62.0416 56.39 61.5676 56.6912C61.0935 56.9925 60.7164 57.3977 60.4363 57.9105C60.1562 58.4234 60.0197 58.9757 60.0197 59.5638C60.0197 60.1519 60.1598 60.7186 60.4363 61.2242C60.7164 61.7299 61.0935 62.1387 61.5676 62.4435C62.0416 62.7484 62.5587 62.9026 63.1154 62.9026C63.672 62.9026 64.1712 62.7484 64.6488 62.4435Z" fill="#04436F"/>
    <path d="M79.9149 55.5616C80.3746 55.8413 80.7301 56.2286 80.9887 56.7235C81.2436 57.2184 81.3729 57.7851 81.3729 58.4162V63.8028H80.1447V58.5812C80.1447 57.8926 79.9616 57.3332 79.5953 56.8957C79.229 56.4581 78.7621 56.2394 78.1947 56.2394C77.516 56.2394 76.9665 56.4438 76.5392 56.8526C76.1118 57.2615 75.8999 57.7815 75.8999 58.4162V63.8028H74.6717V58.5812C74.6717 57.8926 74.4886 57.3332 74.1223 56.8957C73.756 56.4581 73.2891 56.2394 72.7217 56.2394C72.043 56.2394 71.4935 56.4438 71.0662 56.8526C70.6388 57.2615 70.4269 57.7815 70.4269 58.4162V63.8028H69.1987V55.3428H70.4269V56.5872C70.646 56.139 70.9692 55.7875 71.4037 55.5329C71.8347 55.2783 72.3303 55.1492 72.8869 55.1492C73.519 55.1492 74.0792 55.3106 74.5604 55.6333C75.0416 55.9561 75.3971 56.3936 75.627 56.9495C75.803 56.4044 76.1405 55.9668 76.6433 55.6405C77.1461 55.3141 77.7207 55.1492 78.3635 55.1492C78.9417 55.1492 79.4624 55.289 79.9221 55.5652L79.9149 55.5616Z" fill="#04436F"/>
    <path d="M88.8717 62.6085C89.3781 62.4113 89.7659 62.171 90.0281 61.8877L90.7822 62.691C90.4231 63.0855 89.9168 63.4011 89.2668 63.6414C88.6167 63.8816 87.9847 64 87.3742 64C86.62 64 85.9162 63.8099 85.259 63.4262C84.6018 63.046 84.0775 62.5117 83.6788 61.8303C83.2802 61.1489 83.0791 60.3886 83.0791 59.5459C83.0791 58.7031 83.2658 57.9787 83.6429 57.3045C84.02 56.6267 84.5264 56.0995 85.1656 55.7158C85.8048 55.3356 86.5015 55.142 87.2557 55.142C88.5234 55.142 89.511 55.5831 90.2148 56.4689C90.9187 57.3511 91.2706 58.5417 91.2706 60.0372H84.3396C84.4258 60.8764 84.7454 61.5649 85.2985 62.0993C85.8515 62.6336 86.5374 62.9026 87.3562 62.9026C87.859 62.9026 88.3654 62.8058 88.8717 62.6085ZM85.3416 56.9853C84.7957 57.4802 84.4689 58.1329 84.3576 58.9398H90.0604C89.9742 58.1329 89.6941 57.4802 89.2237 56.9853C88.7532 56.4904 88.114 56.2394 87.306 56.2394C86.541 56.2394 85.8838 56.4868 85.338 56.9853H85.3416Z" fill="#04436F"/>
    <path d="M99.9001 63.2075C99.0095 62.6767 98.302 61.9666 97.7777 61.0701C97.2534 60.1771 96.9912 59.2088 96.9912 58.1724C96.9912 57.136 97.2534 56.1748 97.7777 55.2819C98.302 54.3925 99.0095 53.6824 99.9001 53.1552C100.791 52.6245 101.742 52.3627 102.759 52.3627C103.524 52.3627 104.256 52.5133 104.957 52.811C105.657 53.1122 106.274 53.5354 106.81 54.0805L105.941 54.9627C105.524 54.5144 105.043 54.1665 104.49 53.9155C103.937 53.6645 103.362 53.539 102.762 53.539C101.965 53.539 101.225 53.7505 100.543 54.1701C99.8606 54.5897 99.3147 55.1564 98.9053 55.8736C98.4959 56.5873 98.2912 57.3547 98.2912 58.1724C98.2912 58.99 98.4959 59.7718 98.9053 60.4819C99.3147 61.192 99.8606 61.7586 100.543 62.1854C101.225 62.6121 101.965 62.8237 102.762 62.8237C103.362 62.8237 103.94 62.6982 104.49 62.4472C105.043 62.1961 105.524 61.8483 105.941 61.4L106.81 62.2822C106.274 62.8166 105.657 63.2361 104.957 63.541C104.256 63.8458 103.524 64 102.759 64C101.742 64 100.791 63.7346 99.9001 63.2075Z" fill="#04436F"/>
    <path d="M114.211 56.1031C114.797 56.7415 115.088 57.5914 115.088 58.6493V63.8063H113.859V62.4794C113.565 62.96 113.141 63.333 112.588 63.6019C112.035 63.8709 111.464 64.0036 110.875 64.0036C109.967 64.0036 109.227 63.7597 108.645 63.2684C108.067 62.7771 107.776 62.1244 107.776 61.3032C107.776 60.758 107.927 60.2703 108.225 59.84C108.526 59.4096 108.929 59.0761 109.439 58.843C109.945 58.6099 110.502 58.4915 111.101 58.4915C111.952 58.4915 112.872 58.6493 113.856 58.9649V58.6529C113.856 57.9644 113.68 57.3834 113.331 56.91C112.983 56.4366 112.391 56.1964 111.561 56.1964C111.177 56.1964 110.789 56.2645 110.39 56.4008C109.992 56.537 109.557 56.7271 109.087 56.9638L108.595 55.9668C109.686 55.4217 110.703 55.1492 111.644 55.1492C112.768 55.1492 113.622 55.4683 114.208 56.1067L114.211 56.1031ZM112.818 62.4543C113.36 62.1423 113.705 61.7084 113.859 61.1525V59.8579C113.03 59.6284 112.175 59.5136 111.302 59.5136C110.656 59.5136 110.11 59.6786 109.654 60.0049C109.202 60.3313 108.975 60.7473 108.975 61.2494C108.975 61.7514 109.173 62.1674 109.575 62.4687C109.974 62.7699 110.48 62.9205 111.091 62.9205C111.701 62.9205 112.279 62.7663 112.818 62.4543Z" fill="#04436F"/>
    <path d="M119.856 55.6441C120.435 55.3105 121.113 55.1456 121.889 55.1456V56.243C121.257 56.243 120.69 56.3649 120.194 56.6016C119.698 56.8419 119.311 57.179 119.031 57.6093C118.75 58.0397 118.614 58.5274 118.614 59.0725V63.8027H117.386V55.3428H118.614V56.9961C118.865 56.4294 119.282 55.9776 119.86 55.6441H119.856Z" fill="#04436F"/>
    <path d="M128.601 62.6085C129.108 62.4113 129.495 62.171 129.758 61.8877L130.512 62.691C130.153 63.0855 129.646 63.4011 128.996 63.6414C128.346 63.8816 127.714 64 127.104 64C126.35 64 125.646 63.8099 124.988 63.4262C124.331 63.046 123.807 62.5117 123.408 61.8303C123.01 61.1489 122.809 60.3886 122.809 59.5459C122.809 58.7031 122.995 57.9787 123.372 57.3045C123.749 56.6267 124.256 56.0995 124.895 55.7158C125.534 55.3356 126.231 55.142 126.985 55.142C128.253 55.142 129.24 55.5831 129.944 56.4689C130.648 57.3511 131 58.5417 131 60.0372H124.069C124.155 60.8764 124.475 61.5649 125.028 62.0993C125.581 62.6336 126.267 62.9026 127.086 62.9026C127.588 62.9026 128.095 62.8058 128.601 62.6085ZM125.067 56.9853C124.522 57.4802 124.195 58.1329 124.083 58.9398H129.786C129.7 58.1329 129.42 57.4802 128.95 56.9853C128.479 56.4904 127.84 56.2394 127.032 56.2394C126.267 56.2394 125.61 56.4868 125.064 56.9853H125.067Z" fill="#04436F"/>
    <path d="M33.1255 7.26572C31.6854 4.93108 29.6923 3.13796 27.1318 1.88636C24.5677 0.624005 21.6157 0 18.2472 0H0.531738V47.0694H7.00309V30.6623H18.2436C21.6085 30.6623 24.5856 30.0383 27.1641 28.7867C29.7462 27.5244 31.7357 25.7528 33.1507 23.4361C34.5728 21.1301 35.2731 18.4297 35.2731 15.3383C35.2731 12.247 34.5512 9.59319 33.1219 7.2693L33.1255 7.26572ZM19.3856 24.9638H7.00309V5.77026H19.3856C24.697 5.77026 28.9884 10.0666 28.9884 15.3706C28.9884 20.6747 24.697 24.9602 19.3856 24.9602V24.9638Z" fill="#04436F"/>
    <path d="M76.8519 0V47.0694H83.3232V0H76.8519ZM42.7139 0V47.0694H49.1852V0H42.7139Z" fill="#04436F"/>
    <path d="M88.9902 27.5351L63.1838 17.0597C63.0761 17.0203 62.9576 17.0203 62.8535 17.0597L37.047 27.5351C36.8064 27.6248 36.6843 27.8902 36.7741 28.1305L37.7904 30.917C37.8802 31.1608 38.1531 31.2863 38.3973 31.1931L62.857 23.5042C62.9648 23.4648 63.0833 23.4648 63.1874 23.5042L87.6471 31.1931C87.8913 31.2863 88.1643 31.1608 88.2541 30.917L89.2704 28.1305C89.3566 27.8902 89.2345 27.6248 88.9974 27.5351H88.9902Z" fill="#B99B5F"/>
  </g>
  <defs>
    <clipPath id="clip0_597_1010">
      <rect width="131" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>

        <div className="mb-[16px] flex justify-center">
        <Link href="/Form-page-3">
      <p
  className="inline-flex items-center justify-center flex-col px-4 py-2"
  style={{
    color: "white",
    fontFamily: "Metropolis",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px", // 150%
    background: "#B99B5F",
    borderRadius: "var(--opacity-50, 50px) 50px 50px var(--opacity-50, 50px)",
    padding: "6px 12px",
  }}
>
  &larr; Zurück
</p>

    </Link>
        </div>
      </div>
      </section>
      

      <section className="flex flex-col justify-center items-center md:pt-[100px] text-center">
  <p
    className="text-[#B99B5F] font-metropolis md:font-bold md:text-[48px] md:leading-[55.2px] md:tracking-[-0.96px] text-[32px] leading-[40px] font-semibold tracking-[-0.96px]"
  >
    Vielen Dank
  </p>
  <p
    className="text-[#B99B5F] font-metropolis md:font-bold md:text-[48px] md:leading-[55.2px] md:tracking-[-0.96px] text-[32px] leading-[40px] font-semibold tracking-[-0.96px]"
  >
    Wir melden uns so schnell wie möglich
  </p>
</section>


      {/* Section 2: FAQ */}
      <section className="mt-[50px] mb-[160px]">
      <h2
  className="text-center mb-8 text-[#B99B5F] font-metropolis font-semibold text-[55px] leading-[71.5px] "
>
  FAQ
</h2>
<div className="space-y-4 max-w-[790px] mx-auto">
          {/* Render FAQ items dynamically */}
          {faqData.map((faq, index) => (
            <div key={index} className="border-b p-[20px] rounded-[20px] bg-white flex flex-col items-start">
              <div className="flex justify-between w-full items-center">
                <p className="font-semibold text-[#B99B5F] text-[20px] leading-[26px]">
                  {faq.question}
                </p>
                <span
                  className="text-[#B99B5F] font-semibold text-[20px] leading-[26px] cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  {openFAQ === index ? '-' : '+'}
                </span>
              </div>
              {/* Show the corresponding answer only if the FAQ is open */}
              {openFAQ === index && (
                <p className="text-[#B99B5F] font-light text-[16px] leading-[26px] pt-[16px]">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </section>

      {/* Section 3: Thank You and Input for Message */}
      <section className="text-center mb-[160px]">
      <h2 className="text-[#B99B5F] text-center font-metropolis text-[24px] md:text-[55px] font-semibold leading-[71.5px] md:mb-4">
            Haben Sie noch weitere Fragen?
                </h2>
                <input
                type="text"
                value={question}
                onChange={handleInputChange}
                placeholder="Hier Ihre Fragen eintippen"
                className="text-center focus:outline-none text-[#B99B5F] w-full md:w-[890px] px-4 py-4 border rounded-[20px] mb-4 placeholder:text-[#B99B5F] placeholder:font-metropolis placeholder:text-[20px] placeholder:font-light placeholder:leading-[26px]"
                />

        <br />
   <div className="md:min-w-[1280px] flex justify-center items-center">
      {!isSubmitted ? (
        <button
          type="button"
          className="bg-[#B99B5F] text-[#F5F5F5] font-metropolis font-bold text-[24px] md:text-[20px] leading-[21.6px] rounded-[8px] md:rounded-full px-8 py-4"
          onClick={handleClick} // Trigger state change on click
        >
          Senden
        </button>
      ) : (
        <p className="text-[ #B99B5F] font-metropolis font-[600] md:font-[700] text-[24px] md:text-[50px] leading-[26.2px] md:leading-[50.2px] text-center">
          Vielen Dank - Wir melden uns so schnell wie möglich!
        </p>
      )}
    </div>

      </section>
    </div>
  );
};

export default FormPage4;
