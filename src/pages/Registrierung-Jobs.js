import Image from 'next/image';
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-[#F1F1F1] p-4">
          <section className="relative max-w-[1300px] h-[800px] mx-auto mt-2 md:mt-[30px] lg:mb-[160px]">
                   {/* Logo Positioned on Top Left */}
                   <div className="absolute top-[5px] left-[5px] md:top-[20px] md:left-[67px] z-10">
                   <svg xmlns="http://www.w3.org/2000/svg" width="131" height="64" viewBox="0 0 131 64" fill="none">
                      <g clip-path="url(#clip0_654_1634)">
                        <path d="M106.921 8.59974C109.632 7.17242 112.814 6.46235 116.47 6.46235C118.679 6.46235 120.754 6.67752 122.719 7.11504C124.672 7.56332 127.394 8.51726 129.948 9.61824V2.81156C125.685 1.24078 121.174 0.458984 116.405 0.458984C111.636 0.458984 107.287 1.43803 103.592 3.39253C99.8893 5.3542 97.0271 8.10843 94.9981 11.6767C92.9799 15.2343 91.96 19.3549 91.96 24.0134C91.96 28.6719 92.9799 32.9611 94.9981 36.6118C97.0271 40.2626 99.8786 43.085 103.556 45.0897C107.23 47.0872 111.478 48.0878 116.276 48.0878C119.267 48.0878 121.982 47.8081 124.403 47.2666C126.116 46.8757 127.958 46.266 129.948 45.4268V38.4588C127.477 39.8215 125.215 40.7647 123.15 41.2883C121.074 41.8191 118.765 42.0809 116.211 42.0809C112.778 42.0809 109.722 41.3815 107.065 39.9686C104.4 38.5592 102.313 36.5043 100.816 33.8038C99.3183 31.0962 98.5714 27.8256 98.5714 24.0062C98.5714 20.4021 99.2824 17.282 100.712 14.6677C102.141 12.0533 104.22 10.0271 106.921 8.59616V8.59974Z" fill="#04436F"/>
                        <path d="M0 52.5598H4.5716C5.33653 52.5598 6.03682 52.714 6.66887 53.0189C7.30092 53.3237 7.80369 53.754 8.16999 54.3027C8.5363 54.855 8.71945 55.4718 8.71945 56.1604C8.71945 56.849 8.5363 57.4658 8.16999 58.0181C7.80369 58.5703 7.30451 58.9971 6.66887 59.3019C6.03682 59.6068 5.33653 59.761 4.5716 59.761H1.27847V63.8027H0V52.5598ZM4.34177 58.5488C5.27189 58.5488 6.01527 58.3372 6.57909 57.9105C7.14291 57.4837 7.42302 56.9028 7.42302 56.1604C7.42302 55.418 7.14291 54.8335 6.57909 54.4103C6.01527 53.9836 5.27189 53.772 4.34177 53.772H1.27847V58.5524H4.34177V58.5488Z" fill="#04436F"/>
                        <path d="M12.7667 55.644C13.3449 55.3105 14.0236 55.1455 14.7993 55.1455V56.2429C14.1673 56.2429 13.5999 56.3648 13.1043 56.6015C12.6087 56.8418 12.2208 57.1789 11.9407 57.6093C11.6606 58.0396 11.5242 58.5273 11.5242 59.0724V63.8027H10.296V55.3428H11.5242V56.996C11.7755 56.4294 12.1921 55.9775 12.7703 55.644H12.7667Z" fill="#04436F"/>
                        <path d="M16.1999 53.5569C16.0419 53.3919 15.9629 53.2018 15.9629 52.9831C15.9629 52.7643 16.0419 52.5778 16.1999 52.42C16.3579 52.2622 16.5518 52.1833 16.7817 52.1833C17.0115 52.1833 17.1875 52.2622 17.3455 52.42C17.5035 52.5778 17.5825 52.7679 17.5825 52.9831C17.5825 53.1983 17.5035 53.3919 17.3455 53.5569C17.1875 53.7218 16.9972 53.8007 16.7817 53.8007C16.5518 53.8007 16.3579 53.7183 16.1999 53.5569ZM16.1604 55.3428H17.3886V63.8028H16.1604V55.3428Z" fill="#04436F"/>
                        <path d="M30.2559 55.5616C30.7156 55.8413 31.0711 56.2286 31.3297 56.7235C31.5846 57.2184 31.7139 57.7851 31.7139 58.4162V63.8028H30.4857V58.5812C30.4857 57.8926 30.3026 57.3332 29.9363 56.8957C29.57 56.4581 29.1031 56.2394 28.5357 56.2394C27.857 56.2394 27.3075 56.4438 26.8802 56.8526C26.4528 57.2615 26.2409 57.7815 26.2409 58.4162V63.8028H25.0127V58.5812C25.0127 57.8926 24.8296 57.3332 24.4633 56.8957C24.097 56.4581 23.6301 56.2394 23.0627 56.2394C22.384 56.2394 21.8345 56.4438 21.4072 56.8526C20.9798 57.2615 20.7679 57.7815 20.7679 58.4162V63.8028H19.5397V55.3428H20.7679V56.5872C20.987 56.139 21.3102 55.7875 21.7447 55.5329C22.1757 55.2783 22.6713 55.1492 23.2279 55.1492C23.86 55.1492 24.4202 55.3106 24.9014 55.6333C25.3826 55.9561 25.7382 56.3936 25.968 56.9495C26.144 56.4044 26.4815 55.9668 26.9843 55.6405C27.4871 55.3141 28.0617 55.1492 28.7045 55.1492C29.2827 55.1492 29.8034 55.289 30.2631 55.5652L30.2559 55.5616Z" fill="#04436F"/>
                        <path d="M39.2124 62.6086C39.7187 62.4114 40.1066 62.1711 40.3687 61.8878L41.1229 62.6911C40.7638 63.0856 40.2574 63.4012 39.6074 63.6415C38.9574 63.8818 38.3253 64.0001 37.7148 64.0001C36.9607 64.0001 36.2568 63.81 35.5996 63.4263C34.9424 63.0462 34.4181 62.5118 34.0195 61.8304C33.6208 61.149 33.4197 60.3888 33.4197 59.546C33.4197 58.7032 33.6065 57.9788 33.9836 57.3046C34.3606 56.6268 34.867 56.0996 35.5062 55.7159C36.1455 55.3357 36.8422 55.1421 37.5963 55.1421C38.864 55.1421 39.8516 55.5832 40.5555 56.469C41.2593 57.3512 41.6113 58.5418 41.6113 60.0373H34.6803C34.7664 60.8765 35.0861 61.565 35.6391 62.0994C36.1921 62.6337 36.8781 62.9027 37.6969 62.9027C38.1996 62.9027 38.706 62.8059 39.2124 62.6086ZM35.6786 56.9854C35.1327 57.4803 34.8059 58.133 34.6946 58.9399H40.3975C40.3113 58.133 40.0312 57.4803 39.5607 56.9854C39.0903 56.4905 38.451 56.2395 37.643 56.2395C36.8781 56.2395 36.2209 56.4869 35.675 56.9854H35.6786Z" fill="#04436F"/>
                        <path d="M56.9709 52.5598V63.8027H55.6924V58.6815H49.0559V63.8027H47.7774V52.5598H49.0559V57.4694H55.6924V52.5598H56.9709Z" fill="#04436F"/>
                        <path d="M60.9356 63.394C60.2568 62.9888 59.7181 62.4473 59.3195 61.7659C58.9209 61.0845 58.7198 60.3493 58.7198 59.5639C58.7198 58.7785 58.9173 58.0469 59.3195 57.3691C59.7181 56.6913 60.2568 56.1534 60.9356 55.7482C61.6143 55.3429 62.3397 55.1421 63.1154 55.1421C63.8911 55.1421 64.6166 55.3429 65.2881 55.7482C65.9597 56.1534 66.4948 56.6913 66.8934 57.3691C67.292 58.0469 67.4931 58.7749 67.4931 59.5639C67.4931 60.3529 67.292 61.0845 66.8934 61.7659C66.4948 62.4473 65.9597 62.9924 65.2881 63.394C64.6166 63.7993 63.8911 64.0001 63.1154 64.0001C62.3397 64.0001 61.6143 63.7993 60.9356 63.394ZM64.6489 62.4437C65.1229 62.1388 65.5 61.73 65.7801 61.2244C66.0602 60.7187 66.1967 60.1628 66.1967 59.5639C66.1967 58.965 66.0566 58.4235 65.7801 57.9107C65.5 57.3978 65.1229 56.9926 64.6489 56.6913C64.1748 56.3901 63.6613 56.2395 63.1154 56.2395C62.5696 56.2395 62.0417 56.3901 61.5676 56.6913C61.0936 56.9926 60.7165 57.3978 60.4364 57.9107C60.1563 58.4235 60.0198 58.9758 60.0198 59.5639C60.0198 60.1521 60.1599 60.7187 60.4364 61.2244C60.7165 61.73 61.0936 62.1388 61.5676 62.4437C62.0417 62.7485 62.5588 62.9027 63.1154 62.9027C63.6721 62.9027 64.1712 62.7485 64.6489 62.4437Z" fill="#04436F"/>
                        <path d="M79.9151 55.5616C80.3748 55.8413 80.7303 56.2286 80.9889 56.7235C81.2439 57.2184 81.3732 57.7851 81.3732 58.4162V63.8028H80.145V58.5812C80.145 57.8926 79.9618 57.3332 79.5955 56.8957C79.2292 56.4581 78.7624 56.2394 78.1949 56.2394C77.5162 56.2394 76.9668 56.4438 76.5394 56.8526C76.112 57.2615 75.9002 57.7815 75.9002 58.4162V63.8028H74.672V58.5812C74.672 57.8926 74.4888 57.3332 74.1225 56.8957C73.7562 56.4581 73.2894 56.2394 72.7219 56.2394C72.0432 56.2394 71.4938 56.4438 71.0664 56.8526C70.639 57.2615 70.4272 57.7815 70.4272 58.4162V63.8028H69.199V55.3428H70.4272V56.5872C70.6462 56.139 70.9694 55.7875 71.404 55.5329C71.8349 55.2783 72.3305 55.1492 72.8871 55.1492C73.5192 55.1492 74.0794 55.3106 74.5606 55.6333C75.0419 55.9561 75.3974 56.3936 75.6272 56.9495C75.8032 56.4044 76.1408 55.9668 76.6435 55.6405C77.1463 55.3141 77.7209 55.1492 78.3637 55.1492C78.9419 55.1492 79.4626 55.289 79.9223 55.5652L79.9151 55.5616Z" fill="#04436F"/>
                        <path d="M88.8716 62.6086C89.378 62.4114 89.7658 62.1711 90.028 61.8878L90.7821 62.6911C90.423 63.0856 89.9166 63.4012 89.2666 63.6415C88.6166 63.8818 87.9846 64.0001 87.3741 64.0001C86.6199 64.0001 85.916 63.81 85.2588 63.4263C84.6017 63.0462 84.0773 62.5118 83.6787 61.8304C83.2801 61.149 83.079 60.3888 83.079 59.546C83.079 58.7032 83.2657 57.9788 83.6428 57.3046C84.0199 56.6268 84.5262 56.0996 85.1655 55.7159C85.8047 55.3357 86.5014 55.1421 87.2556 55.1421C88.5232 55.1421 89.5108 55.5832 90.2147 56.469C90.9186 57.3512 91.2705 58.5418 91.2705 60.0373H84.3395C84.4257 60.8765 84.7453 61.565 85.2983 62.0994C85.8514 62.6337 86.5373 62.9027 87.3561 62.9027C87.8589 62.9027 88.3652 62.8059 88.8716 62.6086ZM85.3414 56.9854C84.7956 57.4803 84.4688 58.133 84.3574 58.9399H90.0603C89.9741 58.133 89.694 57.4803 89.2235 56.9854C88.7531 56.4905 88.1139 56.2395 87.3058 56.2395C86.5409 56.2395 85.8837 56.4869 85.3379 56.9854H85.3414Z" fill="#04436F"/>
                        <path d="M99.9002 63.2073C99.0096 62.6766 98.3021 61.9665 97.7778 61.0699C97.2535 60.177 96.9913 59.2087 96.9913 58.1723C96.9913 57.1358 97.2535 56.1747 97.7778 55.2817C98.3021 54.3924 99.0096 53.6823 99.9002 53.1551C100.791 52.6243 101.743 52.3625 102.759 52.3625C103.524 52.3625 104.256 52.5132 104.957 52.8108C105.657 53.1121 106.275 53.5353 106.81 54.0804L105.941 54.9626C105.524 54.5143 105.043 54.1664 104.49 53.9154C103.937 53.6644 103.362 53.5388 102.762 53.5388C101.965 53.5388 101.225 53.7504 100.543 54.17C99.8607 54.5896 99.3148 55.1562 98.9055 55.8735C98.4961 56.5871 98.2914 57.3546 98.2914 58.1723C98.2914 58.9899 98.4961 59.7717 98.9055 60.4818C99.3148 61.1919 99.8607 61.7585 100.543 62.1853C101.225 62.612 101.965 62.8236 102.762 62.8236C103.362 62.8236 103.94 62.6981 104.49 62.4471C105.043 62.196 105.524 61.8482 105.941 61.3999L106.81 62.2821C106.275 62.8164 105.657 63.236 104.957 63.5409C104.256 63.8457 103.524 63.9999 102.759 63.9999C101.743 63.9999 100.791 63.7345 99.9002 63.2073Z" fill="#04436F"/>
                        <path d="M114.211 56.1031C114.796 56.7415 115.087 57.5914 115.087 58.6493V63.8063H113.859V62.4794C113.565 62.96 113.141 63.333 112.588 63.6019C112.035 63.8709 111.464 64.0036 110.875 64.0036C109.966 64.0036 109.226 63.7597 108.645 63.2684C108.067 62.7771 107.776 62.1244 107.776 61.3032C107.776 60.758 107.926 60.2703 108.225 59.84C108.526 59.4096 108.928 59.0761 109.438 58.843C109.945 58.6099 110.501 58.4915 111.101 58.4915C111.952 58.4915 112.872 58.6493 113.856 58.9649V58.6529C113.856 57.9644 113.68 57.3834 113.331 56.91C112.983 56.4366 112.39 56.1964 111.561 56.1964C111.177 56.1964 110.789 56.2645 110.39 56.4008C109.991 56.537 109.557 56.7271 109.086 56.9638L108.594 55.9668C109.686 55.4217 110.702 55.1492 111.643 55.1492C112.767 55.1492 113.622 55.4683 114.207 56.1067L114.211 56.1031ZM112.818 62.4543C113.36 62.1423 113.705 61.7084 113.859 61.1525V59.8579C113.03 59.6284 112.175 59.5136 111.302 59.5136C110.656 59.5136 110.11 59.6786 109.654 60.0049C109.201 60.3313 108.975 60.7473 108.975 61.2494C108.975 61.7514 109.173 62.1674 109.575 62.4687C109.973 62.7699 110.48 62.9205 111.09 62.9205C111.701 62.9205 112.279 62.7663 112.818 62.4543Z" fill="#04436F"/>
                        <path d="M119.856 55.644C120.435 55.3105 121.113 55.1455 121.889 55.1455V56.2429C121.257 56.2429 120.69 56.3648 120.194 56.6015C119.698 56.8418 119.311 57.1789 119.031 57.6093C118.75 58.0396 118.614 58.5273 118.614 59.0724V63.8027H117.386V55.3428H118.614V56.996C118.865 56.4294 119.282 55.9775 119.86 55.644H119.856Z" fill="#04436F"/>
                        <path d="M128.601 62.6086C129.107 62.4114 129.495 62.1711 129.757 61.8878L130.512 62.6911C130.152 63.0856 129.646 63.4012 128.996 63.6415C128.346 63.8818 127.714 64.0001 127.104 64.0001C126.349 64.0001 125.646 63.81 124.988 63.4263C124.331 63.0462 123.807 62.5118 123.408 61.8304C123.01 61.149 122.808 60.3888 122.808 59.546C122.808 58.7032 122.995 57.9788 123.372 57.3046C123.749 56.6268 124.256 56.0996 124.895 55.7159C125.534 55.3357 126.231 55.1421 126.985 55.1421C128.253 55.1421 129.24 55.5832 129.944 56.469C130.648 57.3512 131 58.5418 131 60.0373H124.069C124.155 60.8765 124.475 61.565 125.028 62.0994C125.581 62.6337 126.267 62.9027 127.086 62.9027C127.588 62.9027 128.095 62.8059 128.601 62.6086ZM125.067 56.9854C124.521 57.4803 124.195 58.133 124.083 58.9399H129.786C129.7 58.133 129.42 57.4803 128.949 56.9854C128.479 56.4905 127.84 56.2395 127.032 56.2395C126.267 56.2395 125.61 56.4869 125.064 56.9854H125.067Z" fill="#04436F"/>
                        <path d="M33.1253 7.26572C31.6852 4.93108 29.6921 3.13796 27.1316 1.88636C24.5674 0.624005 21.6155 0 18.2469 0H0.531494V47.0694H7.00285V30.6623H18.2433C21.6083 30.6623 24.5854 30.0383 27.1639 28.7867C29.7459 27.5244 31.7355 25.7528 33.1504 23.4361C34.5725 21.1301 35.2728 18.4297 35.2728 15.3383C35.2728 12.247 34.551 9.59319 33.1217 7.2693L33.1253 7.26572ZM19.3853 24.9638H7.00285V5.77026H19.3853C24.6967 5.77026 28.9882 10.0666 28.9882 15.3706C28.9882 20.6747 24.6967 24.9602 19.3853 24.9602V24.9638Z" fill="#04436F"/>
                        <path d="M76.8518 0V47.0694H83.3232V0H76.8518ZM42.7138 0V47.0694H49.1852V0H42.7138Z" fill="#04436F"/>
                        <path d="M88.9901 27.535L63.1837 17.0596C63.0759 17.0202 62.9574 17.0202 62.8533 17.0596L37.0469 27.535C36.8063 27.6247 36.6842 27.8901 36.7739 28.1303L37.7902 30.9168C37.88 31.1607 38.153 31.2862 38.3972 31.193L62.8569 23.5041C62.9646 23.4646 63.0831 23.4646 63.1873 23.5041L87.647 31.193C87.8912 31.2862 88.1641 31.1607 88.2539 30.9168L89.2702 28.1303C89.3564 27.8901 89.2343 27.6247 88.9973 27.535H88.9901Z" fill="#B99B5F"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_654_1634">
                          <rect width="131" height="64" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
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
                    className="mb-5 flex justify-start items-center w-[203px] px-2 py-1 text-[16px] font-[400] leading-[25.6px]  bg-custom-gradient"
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

                    <div className="flex gap-6 mt-[60px] max-w-[1280px]">
                            {/* Card 1 */}
                            <div
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat rounded-[20px] p-6 w-1/3 h-[390px]"
                                style={{ backgroundImage: "url('/images/1 3.png')" }}
                            >
                                <div className="flex justify-center items-center  mb-[40px] mt-[40px]">
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
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat rounded-[20px] p-6 w-1/3 h-[390px]"
                                style={{ backgroundImage: "url('/images/2 2.png')" }}
                            >
                                <div className="flex justify-center items-center mb-[40px] mt-[40px]">
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
                                className="flex flex-col justify-start items-start bg-cover bg-no-repeat rounded-[20px] p-6 w-1/3 h-[390px]"
                                style={{ backgroundImage: "url('/images/3 3.png')" }}
                            >
                                <div className="flex justify-center items-center mb-[40px] mt-[40px]">
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
  
