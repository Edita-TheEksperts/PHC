import Image from 'next/image';
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-[#F1F1F1] p-4">
        <section className="relative max-w-[1300px] h-[800px] mx-auto mt-2 md:mt-[30px] lg:mb-[160px]">
  {/* Logo Positioned on Top Left */}
  <div className="absolute top-[5px] left-[5px] md:top-[20px] md:left-[67px] z-10">
  <svg xmlns="http://www.w3.org/2000/svg" width="131" height="64" viewBox="0 0 131 64" fill="none">
  <g clip-path="url(#clip0_431_1657)">
    <path d="M106.921 8.59974C109.632 7.17242 112.814 6.46235 116.47 6.46235C118.679 6.46235 120.754 6.67752 122.719 7.11504C124.672 7.56332 127.394 8.51726 129.948 9.61824V2.81156C125.685 1.24078 121.174 0.458984 116.405 0.458984C111.636 0.458984 107.287 1.43803 103.592 3.39253C99.8893 5.3542 97.0271 8.10843 94.9981 11.6767C92.9799 15.2343 91.96 19.3549 91.96 24.0134C91.96 28.6719 92.9799 32.9611 94.9981 36.6118C97.0271 40.2626 99.8786 43.085 103.556 45.0897C107.23 47.0872 111.478 48.0878 116.276 48.0878C119.267 48.0878 121.982 47.8081 124.403 47.2666C126.116 46.8757 127.958 46.266 129.948 45.4268V38.4588C127.477 39.8215 125.215 40.7647 123.15 41.2883C121.074 41.8191 118.765 42.0809 116.211 42.0809C112.778 42.0809 109.722 41.3815 107.065 39.9686C104.4 38.5592 102.313 36.5043 100.816 33.8038C99.3183 31.0962 98.5714 27.8256 98.5714 24.0062C98.5714 20.4021 99.2824 17.282 100.712 14.6677C102.141 12.0533 104.22 10.0271 106.921 8.59616V8.59974Z" fill="#04436F"/>
    <path d="M0 52.5598H4.5716C5.33653 52.5598 6.03682 52.714 6.66887 53.0189C7.30092 53.3237 7.80369 53.754 8.16999 54.3027C8.5363 54.855 8.71945 55.4718 8.71945 56.1604C8.71945 56.849 8.5363 57.4658 8.16999 58.0181C7.80369 58.5703 7.30451 58.9971 6.66887 59.3019C6.03682 59.6068 5.33653 59.761 4.5716 59.761H1.27847V63.8027H0V52.5598ZM4.34177 58.5488C5.27189 58.5488 6.01527 58.3372 6.57909 57.9105C7.14291 57.4837 7.42302 56.9028 7.42302 56.1604C7.42302 55.418 7.14291 54.8335 6.57909 54.4103C6.01527 53.9836 5.27189 53.772 4.34177 53.772H1.27847V58.5524H4.34177V58.5488Z" fill="#04436F"/>
    <path d="M12.7666 55.644C13.3448 55.3105 14.0236 55.1455 14.7993 55.1455V56.2429C14.1672 56.2429 13.5998 56.3648 13.1042 56.6015C12.6086 56.8418 12.2208 57.1789 11.9407 57.6093C11.6606 58.0396 11.5241 58.5273 11.5241 59.0724V63.8027H10.2959V55.3428H11.5241V56.996C11.7755 56.4294 12.1921 55.9775 12.7702 55.644H12.7666Z" fill="#04436F"/>
    <path d="M16.1999 53.5569C16.0419 53.3919 15.9629 53.2018 15.9629 52.9831C15.9629 52.7643 16.0419 52.5778 16.1999 52.42C16.3579 52.2622 16.5518 52.1833 16.7817 52.1833C17.0115 52.1833 17.1875 52.2622 17.3455 52.42C17.5035 52.5778 17.5825 52.7679 17.5825 52.9831C17.5825 53.1983 17.5035 53.3919 17.3455 53.5569C17.1875 53.7218 16.9972 53.8007 16.7817 53.8007C16.5518 53.8007 16.3579 53.7183 16.1999 53.5569ZM16.1604 55.3428H17.3886V63.8028H16.1604V55.3428Z" fill="#04436F"/>
    <path d="M30.2557 55.5616C30.7154 55.8413 31.0709 56.2286 31.3295 56.7235C31.5845 57.2184 31.7137 57.7851 31.7137 58.4162V63.8028H30.4855V58.5812C30.4855 57.8926 30.3024 57.3332 29.9361 56.8957C29.5698 56.4581 29.1029 56.2394 28.5355 56.2394C27.8568 56.2394 27.3073 56.4438 26.88 56.8526C26.4526 57.2615 26.2407 57.7815 26.2407 58.4162V63.8028H25.0125V58.5812C25.0125 57.8926 24.8294 57.3332 24.4631 56.8957C24.0968 56.4581 23.6299 56.2394 23.0625 56.2394C22.3838 56.2394 21.8343 56.4438 21.407 56.8526C20.9796 57.2615 20.7677 57.7815 20.7677 58.4162V63.8028H19.5396V55.3428H20.7677V56.5872C20.9868 56.139 21.31 55.7875 21.7446 55.5329C22.1755 55.2783 22.6711 55.1492 23.2277 55.1492C23.8598 55.1492 24.42 55.3106 24.9012 55.6333C25.3824 55.9561 25.738 56.3936 25.9678 56.9495C26.1438 56.4044 26.4814 55.9668 26.9841 55.6405C27.4869 55.3141 28.0615 55.1492 28.7043 55.1492C29.2825 55.1492 29.8032 55.289 30.2629 55.5652L30.2557 55.5616Z" fill="#04436F"/>
    <path d="M39.2125 62.6086C39.7189 62.4114 40.1067 62.1711 40.3689 61.8878L41.1231 62.6911C40.7639 63.0856 40.2576 63.4012 39.6076 63.6415C38.9576 63.8818 38.3255 64.0001 37.715 64.0001C36.9609 64.0001 36.257 63.81 35.5998 63.4263C34.9426 63.0462 34.4183 62.5118 34.0197 61.8304C33.621 61.149 33.4199 60.3888 33.4199 59.546C33.4199 58.7032 33.6067 57.9788 33.9837 57.3046C34.3608 56.6268 34.8672 56.0996 35.5064 55.7159C36.1456 55.3357 36.8423 55.1421 37.5965 55.1421C38.8642 55.1421 39.8518 55.5832 40.5556 56.469C41.2595 57.3512 41.6115 58.5418 41.6115 60.0373H34.6804C34.7666 60.8765 35.0862 61.565 35.6393 62.0994C36.1923 62.6337 36.8783 62.9027 37.697 62.9027C38.1998 62.9027 38.7062 62.8059 39.2125 62.6086ZM35.6788 56.9854C35.1329 57.4803 34.8061 58.133 34.6948 58.9399H40.3976C40.3114 58.133 40.0313 57.4803 39.5609 56.9854C39.0904 56.4905 38.4512 56.2395 37.6432 56.2395C36.8783 56.2395 36.2211 56.4869 35.6752 56.9854H35.6788Z" fill="#04436F"/>
    <path d="M56.9708 52.5598V63.8027H55.6924V58.6815H49.0558V63.8027H47.7773V52.5598H49.0558V57.4694H55.6924V52.5598H56.9708Z" fill="#04436F"/>
    <path d="M60.9355 63.394C60.2568 62.9888 59.7181 62.4473 59.3195 61.7659C58.9208 61.0845 58.7197 60.3493 58.7197 59.5639C58.7197 58.7785 58.9172 58.0469 59.3195 57.3691C59.7181 56.6913 60.2568 56.1534 60.9355 55.7482C61.6142 55.3429 62.3397 55.1421 63.1154 55.1421C63.8911 55.1421 64.6165 55.3429 65.288 55.7482C65.9596 56.1534 66.4947 56.6913 66.8933 57.3691C67.2919 58.0469 67.493 58.7749 67.493 59.5639C67.493 60.3529 67.2919 61.0845 66.8933 61.7659C66.4947 62.4473 65.9596 62.9924 65.288 63.394C64.6165 63.7993 63.8911 64.0001 63.1154 64.0001C62.3397 64.0001 61.6142 63.7993 60.9355 63.394ZM64.6488 62.4437C65.1228 62.1388 65.4999 61.73 65.78 61.2244C66.0602 60.7187 66.1966 60.1628 66.1966 59.5639C66.1966 58.965 66.0566 58.4235 65.78 57.9107C65.4999 57.3978 65.1228 56.9926 64.6488 56.6913C64.1748 56.3901 63.6612 56.2395 63.1154 56.2395C62.5695 56.2395 62.0416 56.3901 61.5676 56.6913C61.0935 56.9926 60.7164 57.3978 60.4363 57.9107C60.1562 58.4235 60.0197 58.9758 60.0197 59.5639C60.0197 60.1521 60.1598 60.7187 60.4363 61.2244C60.7164 61.73 61.0935 62.1388 61.5676 62.4437C62.0416 62.7485 62.5587 62.9027 63.1154 62.9027C63.672 62.9027 64.1712 62.7485 64.6488 62.4437Z" fill="#04436F"/>
    <path d="M79.9149 55.5616C80.3746 55.8413 80.7301 56.2286 80.9887 56.7235C81.2436 57.2184 81.3729 57.7851 81.3729 58.4162V63.8028H80.1447V58.5812C80.1447 57.8926 79.9616 57.3332 79.5953 56.8957C79.229 56.4581 78.7621 56.2394 78.1947 56.2394C77.516 56.2394 76.9665 56.4438 76.5392 56.8526C76.1118 57.2615 75.8999 57.7815 75.8999 58.4162V63.8028H74.6717V58.5812C74.6717 57.8926 74.4886 57.3332 74.1223 56.8957C73.756 56.4581 73.2891 56.2394 72.7217 56.2394C72.043 56.2394 71.4935 56.4438 71.0662 56.8526C70.6388 57.2615 70.4269 57.7815 70.4269 58.4162V63.8028H69.1987V55.3428H70.4269V56.5872C70.646 56.139 70.9692 55.7875 71.4037 55.5329C71.8347 55.2783 72.3303 55.1492 72.8869 55.1492C73.519 55.1492 74.0792 55.3106 74.5604 55.6333C75.0416 55.9561 75.3971 56.3936 75.627 56.9495C75.803 56.4044 76.1405 55.9668 76.6433 55.6405C77.1461 55.3141 77.7207 55.1492 78.3635 55.1492C78.9417 55.1492 79.4624 55.289 79.9221 55.5652L79.9149 55.5616Z" fill="#04436F"/>
    <path d="M88.8717 62.6086C89.3781 62.4114 89.7659 62.1711 90.0281 61.8878L90.7822 62.6911C90.4231 63.0856 89.9168 63.4012 89.2668 63.6415C88.6167 63.8818 87.9847 64.0001 87.3742 64.0001C86.62 64.0001 85.9162 63.81 85.259 63.4263C84.6018 63.0462 84.0775 62.5118 83.6788 61.8304C83.2802 61.149 83.0791 60.3888 83.0791 59.546C83.0791 58.7032 83.2658 57.9788 83.6429 57.3046C84.02 56.6268 84.5264 56.0996 85.1656 55.7159C85.8048 55.3357 86.5015 55.1421 87.2557 55.1421C88.5234 55.1421 89.511 55.5832 90.2148 56.469C90.9187 57.3512 91.2706 58.5418 91.2706 60.0373H84.3396C84.4258 60.8765 84.7454 61.565 85.2985 62.0994C85.8515 62.6337 86.5374 62.9027 87.3562 62.9027C87.859 62.9027 88.3654 62.8059 88.8717 62.6086ZM85.3416 56.9854C84.7957 57.4803 84.4689 58.133 84.3576 58.9399H90.0604C89.9742 58.133 89.6941 57.4803 89.2237 56.9854C88.7532 56.4905 88.114 56.2395 87.306 56.2395C86.541 56.2395 85.8838 56.4869 85.338 56.9854H85.3416Z" fill="#04436F"/>
    <path d="M99.9001 63.2073C99.0095 62.6766 98.302 61.9665 97.7777 61.0699C97.2534 60.177 96.9912 59.2087 96.9912 58.1723C96.9912 57.1358 97.2534 56.1747 97.7777 55.2817C98.302 54.3924 99.0095 53.6823 99.9001 53.1551C100.791 52.6243 101.742 52.3625 102.759 52.3625C103.524 52.3625 104.256 52.5132 104.957 52.8108C105.657 53.1121 106.274 53.5353 106.81 54.0804L105.941 54.9626C105.524 54.5143 105.043 54.1664 104.49 53.9154C103.937 53.6644 103.362 53.5388 102.762 53.5388C101.965 53.5388 101.225 53.7504 100.543 54.17C99.8606 54.5896 99.3147 55.1562 98.9053 55.8735C98.4959 56.5871 98.2912 57.3546 98.2912 58.1723C98.2912 58.9899 98.4959 59.7717 98.9053 60.4818C99.3147 61.1919 99.8606 61.7585 100.543 62.1853C101.225 62.612 101.965 62.8236 102.762 62.8236C103.362 62.8236 103.94 62.6981 104.49 62.4471C105.043 62.196 105.524 61.8482 105.941 61.3999L106.81 62.2821C106.274 62.8164 105.657 63.236 104.957 63.5409C104.256 63.8457 103.524 63.9999 102.759 63.9999C101.742 63.9999 100.791 63.7345 99.9001 63.2073Z" fill="#04436F"/>
    <path d="M114.211 56.1031C114.797 56.7415 115.088 57.5914 115.088 58.6493V63.8063H113.859V62.4794C113.565 62.96 113.141 63.333 112.588 63.6019C112.035 63.8709 111.464 64.0036 110.875 64.0036C109.967 64.0036 109.227 63.7597 108.645 63.2684C108.067 62.7771 107.776 62.1244 107.776 61.3032C107.776 60.758 107.927 60.2703 108.225 59.84C108.526 59.4096 108.929 59.0761 109.439 58.843C109.945 58.6099 110.502 58.4915 111.101 58.4915C111.952 58.4915 112.872 58.6493 113.856 58.9649V58.6529C113.856 57.9644 113.68 57.3834 113.331 56.91C112.983 56.4366 112.391 56.1964 111.561 56.1964C111.177 56.1964 110.789 56.2645 110.39 56.4008C109.992 56.537 109.557 56.7271 109.087 56.9638L108.595 55.9668C109.686 55.4217 110.703 55.1492 111.644 55.1492C112.768 55.1492 113.622 55.4683 114.208 56.1067L114.211 56.1031ZM112.818 62.4543C113.36 62.1423 113.705 61.7084 113.859 61.1525V59.8579C113.03 59.6284 112.175 59.5136 111.302 59.5136C110.656 59.5136 110.11 59.6786 109.654 60.0049C109.202 60.3313 108.975 60.7473 108.975 61.2494C108.975 61.7514 109.173 62.1674 109.575 62.4687C109.974 62.7699 110.48 62.9205 111.091 62.9205C111.701 62.9205 112.279 62.7663 112.818 62.4543Z" fill="#04436F"/>
    <path d="M119.856 55.644C120.435 55.3105 121.113 55.1455 121.889 55.1455V56.2429C121.257 56.2429 120.69 56.3648 120.194 56.6015C119.698 56.8418 119.311 57.1789 119.031 57.6093C118.75 58.0396 118.614 58.5273 118.614 59.0724V63.8027H117.386V55.3428H118.614V56.996C118.865 56.4294 119.282 55.9775 119.86 55.644H119.856Z" fill="#04436F"/>
    <path d="M128.601 62.6086C129.108 62.4114 129.495 62.1711 129.758 61.8878L130.512 62.6911C130.153 63.0856 129.646 63.4012 128.996 63.6415C128.346 63.8818 127.714 64.0001 127.104 64.0001C126.35 64.0001 125.646 63.81 124.988 63.4263C124.331 63.0462 123.807 62.5118 123.408 61.8304C123.01 61.149 122.809 60.3888 122.809 59.546C122.809 58.7032 122.995 57.9788 123.372 57.3046C123.749 56.6268 124.256 56.0996 124.895 55.7159C125.534 55.3357 126.231 55.1421 126.985 55.1421C128.253 55.1421 129.24 55.5832 129.944 56.469C130.648 57.3512 131 58.5418 131 60.0373H124.069C124.155 60.8765 124.475 61.565 125.028 62.0994C125.581 62.6337 126.267 62.9027 127.086 62.9027C127.588 62.9027 128.095 62.8059 128.601 62.6086ZM125.067 56.9854C124.522 57.4803 124.195 58.133 124.083 58.9399H129.786C129.7 58.133 129.42 57.4803 128.95 56.9854C128.479 56.4905 127.84 56.2395 127.032 56.2395C126.267 56.2395 125.61 56.4869 125.064 56.9854H125.067Z" fill="#04436F"/>
    <path d="M33.1255 7.26572C31.6854 4.93108 29.6923 3.13796 27.1318 1.88636C24.5677 0.624005 21.6157 0 18.2472 0H0.531738V47.0694H7.00309V30.6623H18.2436C21.6085 30.6623 24.5856 30.0383 27.1641 28.7867C29.7462 27.5244 31.7357 25.7528 33.1507 23.4361C34.5728 21.1301 35.2731 18.4297 35.2731 15.3383C35.2731 12.247 34.5512 9.59319 33.1219 7.2693L33.1255 7.26572ZM19.3856 24.9638H7.00309V5.77026H19.3856C24.697 5.77026 28.9884 10.0666 28.9884 15.3706C28.9884 20.6747 24.697 24.9602 19.3856 24.9602V24.9638Z" fill="#04436F"/>
    <path d="M76.8519 0V47.0694H83.3232V0H76.8519ZM42.7139 0V47.0694H49.1852V0H42.7139Z" fill="#04436F"/>
    <path d="M88.9902 27.535L63.1838 17.0596C63.0761 17.0202 62.9576 17.0202 62.8535 17.0596L37.047 27.535C36.8064 27.6247 36.6843 27.8901 36.7741 28.1303L37.7904 30.9168C37.8802 31.1607 38.1531 31.2862 38.3973 31.193L62.857 23.5041C62.9648 23.4646 63.0833 23.4646 63.1874 23.5041L87.6471 31.193C87.8913 31.2862 88.1643 31.1607 88.2541 30.9168L89.2704 28.1303C89.3566 27.8901 89.2345 27.6247 88.9974 27.535H88.9902Z" fill="#B99B5F"/>
  </g>
  <defs>
    <clipPath id="clip0_431_1657">
      <rect width="131" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
  className="flex items-center gap-[60px] bg-white rounded-[20px] max-w-[1300px] mx-auto mt-[160px] mb-[160px]"
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
  className="flex justify-between items-center max-w-[1242px] mx-auto mt-[160px] mb-[160px]"
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
  <div className="flex flex-col w-[563px] text-left mt-[100px]">
  <h2
  className="text-[#FAFAFA] w-[499px] font-metropolis text-[22px] font-bold leading-[24px] mb-[30px] flex flex-col items-start px-[10px] py-[4px] rounded-[50px] bg-gradient-to-r from-[#B99B5F] to-[#B99B5F] bg-opacity-[0.51]"
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
        <strong className="text-white bg-[#B99B5F] rounded-[50px] px-[20px] py-[10px]">Wunschzeit eingeben:</strong> <br></br> <p className='mt-2 ml-4 text-[#B99B5F]'>Wählen Sie
        Datum, Uhrzeit, Dauer und Regelmäßigkeit online aus.</p>
      </li>
      <li>
        <strong className="text-white bg-[#B99B5F] rounded-[50px] px-[20px] py-[10px]">Betreuungsperson auswählen:</strong> <br></br> <p className='mt-2 ml-4 text-[#B99B5F]'>Wir organisieren eine auf Ihre Bedürfnisse abgestimmte Betreuungsperson.</p>
      </li>
      <li>
        <strong className="text-white bg-[#B99B5F] rounded-[50px] px-[20px] py-[10px]">Betreuung geniessen:</strong> <br></br> <p className='mt-2 ml-4 text-[#B99B5F]'>Unser Team kümmert sich um den Rest – einfach, sicher und zuverlässig.</p>
      </li>
    </ul>
    <p className="text-[#B99B5F] font-metropolis text-[24px] font-normal leading-[26px] mt-[40px] ml-2">
  Alles direkt über unsere benutzerfreundliche Plattform.
</p>
  </div>

</section>

<section className="flex justify-center items-center w-full mb-[160px]">
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
      src="/images/Experience (1).png" // Replace with your image path
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
  className="font-montserat rounded-[20px] max-w-[1290px] h-[360px] relative flex flex-col items-center justify-center bg-cover mt-[100px] md:mb-[160px]"
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
    className="text-[#B99B5F] font-metropolis text-[16px] font-normal leading-[25.6px] text-center mt-4 "
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
                className="text-[#B99B5F] font-metropolis mt-[80px] text-left"
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
  
