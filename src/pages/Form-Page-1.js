import Link from "next/link";
import React, { useState } from 'react';


export default function FormPage01() {
  const [cv, setCv] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type === "application/pdf") {
      setCv(file);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setCv(file);
    } else {
      alert("Only PDF files are allowed.");
    }
  };

  const [region, setRegion] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Form validation handler
  const handleValidation = () => {
    if (region && name && emailRegex.test(email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };
  
  return (
    <div className=" bg-[#F1F1F1] flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <section className="md:block hidden md:flex justify-center items-center pt-[25px] md:pt-[25px]">
        <div className="absolute top-6 left-4 lg:left-[170px]">
          <Link href="/Registrierung-Jobs">
            <button
              className="text-white text-[16px] font-[400] inline-flex items-center px-4 py-2 mt-[25px] "
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
          <svg xmlns="http://www.w3.org/2000/svg" width="131" height="64" viewBox="0 0 131 64" fill="none">
            <g clip-path="url(#clip0_428_1830)">
              <path d="M106.921 8.59974C109.632 7.17242 112.814 6.46235 116.47 6.46235C118.679 6.46235 120.754 6.67752 122.719 7.11504C124.672 7.56332 127.394 8.51726 129.948 9.61824V2.81156C125.685 1.24078 121.174 0.458984 116.405 0.458984C111.636 0.458984 107.287 1.43803 103.592 3.39253C99.8893 5.3542 97.0271 8.10843 94.9981 11.6767C92.9799 15.2343 91.96 19.3549 91.96 24.0134C91.96 28.6719 92.9799 32.9611 94.9981 36.6118C97.0271 40.2626 99.8786 43.085 103.556 45.0897C107.23 47.0872 111.478 48.0878 116.276 48.0878C119.267 48.0878 121.982 47.8081 124.403 47.2666C126.116 46.8757 127.958 46.266 129.948 45.4268V38.4588C127.477 39.8215 125.215 40.7647 123.15 41.2883C121.074 41.8191 118.765 42.0809 116.211 42.0809C112.778 42.0809 109.722 41.3815 107.065 39.9686C104.4 38.5592 102.313 36.5043 100.816 33.8038C99.3183 31.0962 98.5714 27.8256 98.5714 24.0062C98.5714 20.4021 99.2824 17.282 100.712 14.6677C102.141 12.0533 104.22 10.0271 106.921 8.59616V8.59974Z" fill="#04436F" />
              <path d="M0 52.5598H4.5716C5.33653 52.5598 6.03682 52.714 6.66887 53.0189C7.30092 53.3237 7.80369 53.754 8.16999 54.3027C8.5363 54.855 8.71945 55.4718 8.71945 56.1604C8.71945 56.849 8.5363 57.4658 8.16999 58.0181C7.80369 58.5703 7.30451 58.9971 6.66887 59.3019C6.03682 59.6068 5.33653 59.761 4.5716 59.761H1.27847V63.8027H0V52.5598ZM4.34177 58.5488C5.27189 58.5488 6.01527 58.3372 6.57909 57.9105C7.14291 57.4837 7.42302 56.9028 7.42302 56.1604C7.42302 55.418 7.14291 54.8335 6.57909 54.4103C6.01527 53.9836 5.27189 53.772 4.34177 53.772H1.27847V58.5524H4.34177V58.5488Z" fill="#04436F" />
              <path d="M12.7666 55.644C13.3448 55.3105 14.0236 55.1455 14.7993 55.1455V56.2429C14.1672 56.2429 13.5998 56.3648 13.1042 56.6015C12.6086 56.8418 12.2208 57.1789 11.9407 57.6093C11.6606 58.0396 11.5241 58.5273 11.5241 59.0724V63.8027H10.2959V55.3428H11.5241V56.996C11.7755 56.4294 12.1921 55.9775 12.7702 55.644H12.7666Z" fill="#04436F" />
              <path d="M16.1999 53.5569C16.0419 53.3919 15.9629 53.2018 15.9629 52.9831C15.9629 52.7643 16.0419 52.5778 16.1999 52.42C16.3579 52.2622 16.5518 52.1833 16.7817 52.1833C17.0115 52.1833 17.1875 52.2622 17.3455 52.42C17.5035 52.5778 17.5825 52.7679 17.5825 52.9831C17.5825 53.1983 17.5035 53.3919 17.3455 53.5569C17.1875 53.7218 16.9972 53.8007 16.7817 53.8007C16.5518 53.8007 16.3579 53.7183 16.1999 53.5569ZM16.1604 55.3428H17.3886V63.8028H16.1604V55.3428Z" fill="#04436F" />
              <path d="M30.256 55.5616C30.7156 55.8413 31.0712 56.2286 31.3297 56.7235C31.5847 57.2184 31.714 57.7851 31.714 58.4162V63.8028H30.4858V58.5812C30.4858 57.8926 30.3026 57.3332 29.9363 56.8957C29.57 56.4581 29.1032 56.2394 28.5358 56.2394C27.857 56.2394 27.3076 56.4438 26.8802 56.8526C26.4529 57.2615 26.241 57.7815 26.241 58.4162V63.8028H25.0128V58.5812C25.0128 57.8926 24.8296 57.3332 24.4633 56.8957C24.097 56.4581 23.6302 56.2394 23.0628 56.2394C22.384 56.2394 21.8346 56.4438 21.4072 56.8526C20.9799 57.2615 20.768 57.7815 20.768 58.4162V63.8028H19.5398V55.3428H20.768V56.5872C20.9871 56.139 21.3103 55.7875 21.7448 55.5329C22.1757 55.2783 22.6713 55.1492 23.228 55.1492C23.86 55.1492 24.4202 55.3106 24.9015 55.6333C25.3827 55.9561 25.7382 56.3936 25.9681 56.9495C26.144 56.4044 26.4816 55.9668 26.9844 55.6405C27.4871 55.3141 28.0617 55.1492 28.7046 55.1492C29.2827 55.1492 29.8035 55.289 30.2631 55.5652L30.256 55.5616Z" fill="#04436F" />
              <path d="M39.2123 62.6086C39.7187 62.4114 40.1065 62.1711 40.3687 61.8878L41.1228 62.6911C40.7637 63.0856 40.2573 63.4012 39.6073 63.6415C38.9573 63.8818 38.3253 64.0001 37.7148 64.0001C36.9606 64.0001 36.2567 63.81 35.5995 63.4263C34.9423 63.0462 34.418 62.5118 34.0194 61.8304C33.6208 61.149 33.4197 60.3888 33.4197 59.546C33.4197 58.7032 33.6064 57.9788 33.9835 57.3046C34.3606 56.6268 34.8669 56.0996 35.5062 55.7159C36.1454 55.3357 36.8421 55.1421 37.5963 55.1421C38.8639 55.1421 39.8515 55.5832 40.5554 56.469C41.2593 57.3512 41.6112 58.5418 41.6112 60.0373H34.6802C34.7664 60.8765 35.086 61.565 35.639 62.0994C36.1921 62.6337 36.878 62.9027 37.6968 62.9027C38.1996 62.9027 38.7059 62.8059 39.2123 62.6086ZM35.6785 56.9854C35.1327 57.4803 34.8059 58.133 34.6946 58.9399H40.3974C40.3112 58.133 40.0311 57.4803 39.5606 56.9854C39.0902 56.4905 38.451 56.2395 37.6429 56.2395C36.878 56.2395 36.2208 56.4869 35.675 56.9854H35.6785Z" fill="#04436F" />
              <path d="M56.9708 52.5598V63.8027H55.6924V58.6815H49.0558V63.8027H47.7773V52.5598H49.0558V57.4694H55.6924V52.5598H56.9708Z" fill="#04436F" />
              <path d="M60.9355 63.394C60.2568 62.9888 59.7181 62.4473 59.3195 61.7659C58.9208 61.0845 58.7197 60.3493 58.7197 59.5639C58.7197 58.7785 58.9172 58.0469 59.3195 57.3691C59.7181 56.6913 60.2568 56.1534 60.9355 55.7482C61.6142 55.3429 62.3397 55.1421 63.1154 55.1421C63.8911 55.1421 64.6165 55.3429 65.288 55.7482C65.9596 56.1534 66.4947 56.6913 66.8933 57.3691C67.2919 58.0469 67.493 58.7749 67.493 59.5639C67.493 60.3529 67.2919 61.0845 66.8933 61.7659C66.4947 62.4473 65.9596 62.9924 65.288 63.394C64.6165 63.7993 63.8911 64.0001 63.1154 64.0001C62.3397 64.0001 61.6142 63.7993 60.9355 63.394ZM64.6488 62.4437C65.1228 62.1388 65.4999 61.73 65.78 61.2244C66.0602 60.7187 66.1966 60.1628 66.1966 59.5639C66.1966 58.965 66.0566 58.4235 65.78 57.9107C65.4999 57.3978 65.1228 56.9926 64.6488 56.6913C64.1748 56.3901 63.6612 56.2395 63.1154 56.2395C62.5695 56.2395 62.0416 56.3901 61.5676 56.6913C61.0935 56.9926 60.7164 57.3978 60.4363 57.9107C60.1562 58.4235 60.0197 58.9758 60.0197 59.5639C60.0197 60.1521 60.1598 60.7187 60.4363 61.2244C60.7164 61.73 61.0935 62.1388 61.5676 62.4437C62.0416 62.7485 62.5587 62.9027 63.1154 62.9027C63.672 62.9027 64.1712 62.7485 64.6488 62.4437Z" fill="#04436F" />
              <path d="M79.9151 55.5616C80.3748 55.8413 80.7303 56.2286 80.9889 56.7235C81.2439 57.2184 81.3732 57.7851 81.3732 58.4162V63.8028H80.145V58.5812C80.145 57.8926 79.9618 57.3332 79.5955 56.8957C79.2292 56.4581 78.7624 56.2394 78.1949 56.2394C77.5162 56.2394 76.9668 56.4438 76.5394 56.8526C76.112 57.2615 75.9002 57.7815 75.9002 58.4162V63.8028H74.672V58.5812C74.672 57.8926 74.4888 57.3332 74.1225 56.8957C73.7562 56.4581 73.2894 56.2394 72.7219 56.2394C72.0432 56.2394 71.4938 56.4438 71.0664 56.8526C70.639 57.2615 70.4272 57.7815 70.4272 58.4162V63.8028H69.199V55.3428H70.4272V56.5872C70.6462 56.139 70.9694 55.7875 71.404 55.5329C71.8349 55.2783 72.3305 55.1492 72.8871 55.1492C73.5192 55.1492 74.0794 55.3106 74.5606 55.6333C75.0419 55.9561 75.3974 56.3936 75.6272 56.9495C75.8032 56.4044 76.1408 55.9668 76.6435 55.6405C77.1463 55.3141 77.7209 55.1492 78.3637 55.1492C78.9419 55.1492 79.4626 55.289 79.9223 55.5652L79.9151 55.5616Z" fill="#04436F" />
              <path d="M88.8715 62.6086C89.3778 62.4114 89.7657 62.1711 90.0278 61.8878L90.782 62.6911C90.4229 63.0856 89.9165 63.4012 89.2665 63.6415C88.6165 63.8818 87.9844 64.0001 87.3739 64.0001C86.6198 64.0001 85.9159 63.81 85.2587 63.4263C84.6015 63.0462 84.0772 62.5118 83.6786 61.8304C83.28 61.149 83.0789 60.3888 83.0789 59.546C83.0789 58.7032 83.2656 57.9788 83.6427 57.3046C84.0198 56.6268 84.5261 56.0996 85.1653 55.7159C85.8046 55.3357 86.5013 55.1421 87.2554 55.1421C88.5231 55.1421 89.5107 55.5832 90.2146 56.469C90.9185 57.3512 91.2704 58.5418 91.2704 60.0373H84.3394C84.4256 60.8765 84.7452 61.565 85.2982 62.0994C85.8513 62.6337 86.5372 62.9027 87.356 62.9027C87.8588 62.9027 88.3651 62.8059 88.8715 62.6086ZM85.3413 56.9854C84.7955 57.4803 84.4687 58.133 84.3573 58.9399H90.0602C89.974 58.133 89.6939 57.4803 89.2234 56.9854C88.753 56.4905 88.1137 56.2395 87.3057 56.2395C86.5408 56.2395 85.8836 56.4869 85.3377 56.9854H85.3413Z" fill="#04436F" />
              <path d="M99.9001 63.2073C99.0095 62.6766 98.302 61.9665 97.7777 61.0699C97.2534 60.177 96.9912 59.2087 96.9912 58.1723C96.9912 57.1358 97.2534 56.1747 97.7777 55.2817C98.302 54.3924 99.0095 53.6823 99.9001 53.1551C100.791 52.6243 101.742 52.3625 102.759 52.3625C103.524 52.3625 104.256 52.5132 104.957 52.8108C105.657 53.1121 106.274 53.5353 106.81 54.0804L105.941 54.9626C105.524 54.5143 105.043 54.1664 104.49 53.9154C103.937 53.6644 103.362 53.5388 102.762 53.5388C101.965 53.5388 101.225 53.7504 100.543 54.17C99.8606 54.5896 99.3147 55.1562 98.9053 55.8735C98.4959 56.5871 98.2912 57.3546 98.2912 58.1723C98.2912 58.9899 98.4959 59.7717 98.9053 60.4818C99.3147 61.1919 99.8606 61.7585 100.543 62.1853C101.225 62.612 101.965 62.8236 102.762 62.8236C103.362 62.8236 103.94 62.6981 104.49 62.4471C105.043 62.196 105.524 61.8482 105.941 61.3999L106.81 62.2821C106.274 62.8164 105.657 63.236 104.957 63.5409C104.256 63.8457 103.524 63.9999 102.759 63.9999C101.742 63.9999 100.791 63.7345 99.9001 63.2073Z" fill="#04436F" />
              <path d="M114.211 56.1031C114.796 56.7415 115.087 57.5914 115.087 58.6493V63.8063H113.859V62.4794C113.565 62.96 113.141 63.333 112.588 63.6019C112.035 63.8709 111.464 64.0036 110.875 64.0036C109.966 64.0036 109.226 63.7597 108.645 63.2684C108.067 62.7771 107.776 62.1244 107.776 61.3032C107.776 60.758 107.926 60.2703 108.225 59.84C108.526 59.4096 108.928 59.0761 109.438 58.843C109.945 58.6099 110.501 58.4915 111.101 58.4915C111.952 58.4915 112.872 58.6493 113.856 58.9649V58.6529C113.856 57.9644 113.68 57.3834 113.331 56.91C112.983 56.4366 112.39 56.1964 111.561 56.1964C111.177 56.1964 110.789 56.2645 110.39 56.4008C109.991 56.537 109.557 56.7271 109.086 56.9638L108.594 55.9668C109.686 55.4217 110.702 55.1492 111.643 55.1492C112.767 55.1492 113.622 55.4683 114.207 56.1067L114.211 56.1031ZM112.818 62.4543C113.36 62.1423 113.705 61.7084 113.859 61.1525V59.8579C113.03 59.6284 112.175 59.5136 111.302 59.5136C110.656 59.5136 110.11 59.6786 109.654 60.0049C109.201 60.3313 108.975 60.7473 108.975 61.2494C108.975 61.7514 109.173 62.1674 109.575 62.4687C109.973 62.7699 110.48 62.9205 111.09 62.9205C111.701 62.9205 112.279 62.7663 112.818 62.4543Z" fill="#04436F" />
              <path d="M119.856 55.644C120.435 55.3105 121.113 55.1455 121.889 55.1455V56.2429C121.257 56.2429 120.69 56.3648 120.194 56.6015C119.698 56.8418 119.311 57.1789 119.031 57.6093C118.75 58.0396 118.614 58.5273 118.614 59.0724V63.8027H117.386V55.3428H118.614V56.996C118.865 56.4294 119.282 55.9775 119.86 55.644H119.856Z" fill="#04436F" />
              <path d="M128.601 62.6086C129.107 62.4114 129.495 62.1711 129.757 61.8878L130.511 62.6911C130.152 63.0856 129.646 63.4012 128.996 63.6415C128.346 63.8818 127.714 64.0001 127.103 64.0001C126.349 64.0001 125.645 63.81 124.988 63.4263C124.331 63.0462 123.807 62.5118 123.408 61.8304C123.009 61.149 122.808 60.3888 122.808 59.546C122.808 58.7032 122.995 57.9788 123.372 57.3046C123.749 56.6268 124.256 56.0996 124.895 55.7159C125.534 55.3357 126.231 55.1421 126.985 55.1421C128.253 55.1421 129.24 55.5832 129.944 56.469C130.648 57.3512 131 58.5418 131 60.0373H124.069C124.155 60.8765 124.475 61.565 125.028 62.0994C125.581 62.6337 126.267 62.9027 127.085 62.9027C127.588 62.9027 128.095 62.8059 128.601 62.6086ZM125.067 56.9854C124.521 57.4803 124.195 58.133 124.083 58.9399H129.786C129.7 58.133 129.42 57.4803 128.949 56.9854C128.479 56.4905 127.84 56.2395 127.032 56.2395C126.267 56.2395 125.609 56.4869 125.064 56.9854H125.067Z" fill="#04436F" />
              <path d="M33.1253 7.26572C31.6852 4.93108 29.6921 3.13796 27.1316 1.88636C24.5674 0.624005 21.6155 0 18.2469 0H0.531494V47.0694H7.00285V30.6623H18.2433C21.6083 30.6623 24.5854 30.0383 27.1639 28.7867C29.7459 27.5244 31.7355 25.7528 33.1504 23.4361C34.5725 21.1301 35.2728 18.4297 35.2728 15.3383C35.2728 12.247 34.551 9.59319 33.1217 7.2693L33.1253 7.26572ZM19.3853 24.9638H7.00285V5.77026H19.3853C24.6967 5.77026 28.9882 10.0666 28.9882 15.3706C28.9882 20.6747 24.6967 24.9602 19.3853 24.9602V24.9638Z" fill="#04436F" />
              <path d="M76.8519 0V47.0694H83.3232V0H76.8519ZM42.7139 0V47.0694H49.1852V0H42.7139Z" fill="#04436F" />
              <path d="M88.99 27.535L63.1836 17.0596C63.0759 17.0202 62.9574 17.0202 62.8532 17.0596L37.0468 27.535C36.8062 27.6247 36.6841 27.8901 36.7739 28.1303L37.7902 30.9168C37.88 31.1607 38.1529 31.2862 38.3971 31.193L62.8568 23.5041C62.9645 23.4646 63.083 23.4646 63.1872 23.5041L87.6469 31.193C87.8911 31.2862 88.164 31.1607 88.2538 30.9168L89.2701 28.1303C89.3563 27.8901 89.2342 27.6247 88.9972 27.535H88.99Z" fill="#B99B5F" />
            </g>
            <defs>
              <clipPath id="clip0_428_1830">
                <rect width="131" height="64" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>

      <section className='md:hidden block flex justify-center items-center '>
        <div className=" mt-0">
          <div className="mb-[100px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="131" height="64" viewBox="0 0 131 64" fill="none">
              <g clip-path="url(#clip0_428_1830)">
                <path d="M106.921 8.59974C109.632 7.17242 112.814 6.46235 116.47 6.46235C118.679 6.46235 120.754 6.67752 122.719 7.11504C124.672 7.56332 127.394 8.51726 129.948 9.61824V2.81156C125.685 1.24078 121.174 0.458984 116.405 0.458984C111.636 0.458984 107.287 1.43803 103.592 3.39253C99.8893 5.3542 97.0271 8.10843 94.9981 11.6767C92.9799 15.2343 91.96 19.3549 91.96 24.0134C91.96 28.6719 92.9799 32.9611 94.9981 36.6118C97.0271 40.2626 99.8786 43.085 103.556 45.0897C107.23 47.0872 111.478 48.0878 116.276 48.0878C119.267 48.0878 121.982 47.8081 124.403 47.2666C126.116 46.8757 127.958 46.266 129.948 45.4268V38.4588C127.477 39.8215 125.215 40.7647 123.15 41.2883C121.074 41.8191 118.765 42.0809 116.211 42.0809C112.778 42.0809 109.722 41.3815 107.065 39.9686C104.4 38.5592 102.313 36.5043 100.816 33.8038C99.3183 31.0962 98.5714 27.8256 98.5714 24.0062C98.5714 20.4021 99.2824 17.282 100.712 14.6677C102.141 12.0533 104.22 10.0271 106.921 8.59616V8.59974Z" fill="#04436F" />
                <path d="M0 52.5598H4.5716C5.33653 52.5598 6.03682 52.714 6.66887 53.0189C7.30092 53.3237 7.80369 53.754 8.16999 54.3027C8.5363 54.855 8.71945 55.4718 8.71945 56.1604C8.71945 56.849 8.5363 57.4658 8.16999 58.0181C7.80369 58.5703 7.30451 58.9971 6.66887 59.3019C6.03682 59.6068 5.33653 59.761 4.5716 59.761H1.27847V63.8027H0V52.5598ZM4.34177 58.5488C5.27189 58.5488 6.01527 58.3372 6.57909 57.9105C7.14291 57.4837 7.42302 56.9028 7.42302 56.1604C7.42302 55.418 7.14291 54.8335 6.57909 54.4103C6.01527 53.9836 5.27189 53.772 4.34177 53.772H1.27847V58.5524H4.34177V58.5488Z" fill="#04436F" />
                <path d="M12.7666 55.644C13.3448 55.3105 14.0236 55.1455 14.7993 55.1455V56.2429C14.1672 56.2429 13.5998 56.3648 13.1042 56.6015C12.6086 56.8418 12.2208 57.1789 11.9407 57.6093C11.6606 58.0396 11.5241 58.5273 11.5241 59.0724V63.8027H10.2959V55.3428H11.5241V56.996C11.7755 56.4294 12.1921 55.9775 12.7702 55.644H12.7666Z" fill="#04436F" />
                <path d="M16.1999 53.5569C16.0419 53.3919 15.9629 53.2018 15.9629 52.9831C15.9629 52.7643 16.0419 52.5778 16.1999 52.42C16.3579 52.2622 16.5518 52.1833 16.7817 52.1833C17.0115 52.1833 17.1875 52.2622 17.3455 52.42C17.5035 52.5778 17.5825 52.7679 17.5825 52.9831C17.5825 53.1983 17.5035 53.3919 17.3455 53.5569C17.1875 53.7218 16.9972 53.8007 16.7817 53.8007C16.5518 53.8007 16.3579 53.7183 16.1999 53.5569ZM16.1604 55.3428H17.3886V63.8028H16.1604V55.3428Z" fill="#04436F" />
                <path d="M30.256 55.5616C30.7156 55.8413 31.0712 56.2286 31.3297 56.7235C31.5847 57.2184 31.714 57.7851 31.714 58.4162V63.8028H30.4858V58.5812C30.4858 57.8926 30.3026 57.3332 29.9363 56.8957C29.57 56.4581 29.1032 56.2394 28.5358 56.2394C27.857 56.2394 27.3076 56.4438 26.8802 56.8526C26.4529 57.2615 26.241 57.7815 26.241 58.4162V63.8028H25.0128V58.5812C25.0128 57.8926 24.8296 57.3332 24.4633 56.8957C24.097 56.4581 23.6302 56.2394 23.0628 56.2394C22.384 56.2394 21.8346 56.4438 21.4072 56.8526C20.9799 57.2615 20.768 57.7815 20.768 58.4162V63.8028H19.5398V55.3428H20.768V56.5872C20.9871 56.139 21.3103 55.7875 21.7448 55.5329C22.1757 55.2783 22.6713 55.1492 23.228 55.1492C23.86 55.1492 24.4202 55.3106 24.9015 55.6333C25.3827 55.9561 25.7382 56.3936 25.9681 56.9495C26.144 56.4044 26.4816 55.9668 26.9844 55.6405C27.4871 55.3141 28.0617 55.1492 28.7046 55.1492C29.2827 55.1492 29.8035 55.289 30.2631 55.5652L30.256 55.5616Z" fill="#04436F" />
                <path d="M39.2123 62.6086C39.7187 62.4114 40.1065 62.1711 40.3687 61.8878L41.1228 62.6911C40.7637 63.0856 40.2573 63.4012 39.6073 63.6415C38.9573 63.8818 38.3253 64.0001 37.7148 64.0001C36.9606 64.0001 36.2567 63.81 35.5995 63.4263C34.9423 63.0462 34.418 62.5118 34.0194 61.8304C33.6208 61.149 33.4197 60.3888 33.4197 59.546C33.4197 58.7032 33.6064 57.9788 33.9835 57.3046C34.3606 56.6268 34.8669 56.0996 35.5062 55.7159C36.1454 55.3357 36.8421 55.1421 37.5963 55.1421C38.8639 55.1421 39.8515 55.5832 40.5554 56.469C41.2593 57.3512 41.6112 58.5418 41.6112 60.0373H34.6802C34.7664 60.8765 35.086 61.565 35.639 62.0994C36.1921 62.6337 36.878 62.9027 37.6968 62.9027C38.1996 62.9027 38.7059 62.8059 39.2123 62.6086ZM35.6785 56.9854C35.1327 57.4803 34.8059 58.133 34.6946 58.9399H40.3974C40.3112 58.133 40.0311 57.4803 39.5606 56.9854C39.0902 56.4905 38.451 56.2395 37.6429 56.2395C36.878 56.2395 36.2208 56.4869 35.675 56.9854H35.6785Z" fill="#04436F" />
                <path d="M56.9708 52.5598V63.8027H55.6924V58.6815H49.0558V63.8027H47.7773V52.5598H49.0558V57.4694H55.6924V52.5598H56.9708Z" fill="#04436F" />
                <path d="M60.9355 63.394C60.2568 62.9888 59.7181 62.4473 59.3195 61.7659C58.9208 61.0845 58.7197 60.3493 58.7197 59.5639C58.7197 58.7785 58.9172 58.0469 59.3195 57.3691C59.7181 56.6913 60.2568 56.1534 60.9355 55.7482C61.6142 55.3429 62.3397 55.1421 63.1154 55.1421C63.8911 55.1421 64.6165 55.3429 65.288 55.7482C65.9596 56.1534 66.4947 56.6913 66.8933 57.3691C67.2919 58.0469 67.493 58.7749 67.493 59.5639C67.493 60.3529 67.2919 61.0845 66.8933 61.7659C66.4947 62.4473 65.9596 62.9924 65.288 63.394C64.6165 63.7993 63.8911 64.0001 63.1154 64.0001C62.3397 64.0001 61.6142 63.7993 60.9355 63.394ZM64.6488 62.4437C65.1228 62.1388 65.4999 61.73 65.78 61.2244C66.0602 60.7187 66.1966 60.1628 66.1966 59.5639C66.1966 58.965 66.0566 58.4235 65.78 57.9107C65.4999 57.3978 65.1228 56.9926 64.6488 56.6913C64.1748 56.3901 63.6612 56.2395 63.1154 56.2395C62.5695 56.2395 62.0416 56.3901 61.5676 56.6913C61.0935 56.9926 60.7164 57.3978 60.4363 57.9107C60.1562 58.4235 60.0197 58.9758 60.0197 59.5639C60.0197 60.1521 60.1598 60.7187 60.4363 61.2244C60.7164 61.73 61.0935 62.1388 61.5676 62.4437C62.0416 62.7485 62.5587 62.9027 63.1154 62.9027C63.672 62.9027 64.1712 62.7485 64.6488 62.4437Z" fill="#04436F" />
                <path d="M79.9151 55.5616C80.3748 55.8413 80.7303 56.2286 80.9889 56.7235C81.2439 57.2184 81.3732 57.7851 81.3732 58.4162V63.8028H80.145V58.5812C80.145 57.8926 79.9618 57.3332 79.5955 56.8957C79.2292 56.4581 78.7624 56.2394 78.1949 56.2394C77.5162 56.2394 76.9668 56.4438 76.5394 56.8526C76.112 57.2615 75.9002 57.7815 75.9002 58.4162V63.8028H74.672V58.5812C74.672 57.8926 74.4888 57.3332 74.1225 56.8957C73.7562 56.4581 73.2894 56.2394 72.7219 56.2394C72.0432 56.2394 71.4938 56.4438 71.0664 56.8526C70.639 57.2615 70.4272 57.7815 70.4272 58.4162V63.8028H69.199V55.3428H70.4272V56.5872C70.6462 56.139 70.9694 55.7875 71.404 55.5329C71.8349 55.2783 72.3305 55.1492 72.8871 55.1492C73.5192 55.1492 74.0794 55.3106 74.5606 55.6333C75.0419 55.9561 75.3974 56.3936 75.6272 56.9495C75.8032 56.4044 76.1408 55.9668 76.6435 55.6405C77.1463 55.3141 77.7209 55.1492 78.3637 55.1492C78.9419 55.1492 79.4626 55.289 79.9223 55.5652L79.9151 55.5616Z" fill="#04436F" />
                <path d="M88.8715 62.6086C89.3778 62.4114 89.7657 62.1711 90.0278 61.8878L90.782 62.6911C90.4229 63.0856 89.9165 63.4012 89.2665 63.6415C88.6165 63.8818 87.9844 64.0001 87.3739 64.0001C86.6198 64.0001 85.9159 63.81 85.2587 63.4263C84.6015 63.0462 84.0772 62.5118 83.6786 61.8304C83.28 61.149 83.0789 60.3888 83.0789 59.546C83.0789 58.7032 83.2656 57.9788 83.6427 57.3046C84.0198 56.6268 84.5261 56.0996 85.1653 55.7159C85.8046 55.3357 86.5013 55.1421 87.2554 55.1421C88.5231 55.1421 89.5107 55.5832 90.2146 56.469C90.9185 57.3512 91.2704 58.5418 91.2704 60.0373H84.3394C84.4256 60.8765 84.7452 61.565 85.2982 62.0994C85.8513 62.6337 86.5372 62.9027 87.356 62.9027C87.8588 62.9027 88.3651 62.8059 88.8715 62.6086ZM85.3413 56.9854C84.7955 57.4803 84.4687 58.133 84.3573 58.9399H90.0602C89.974 58.133 89.6939 57.4803 89.2234 56.9854C88.753 56.4905 88.1137 56.2395 87.3057 56.2395C86.5408 56.2395 85.8836 56.4869 85.3377 56.9854H85.3413Z" fill="#04436F" />
                <path d="M99.9001 63.2073C99.0095 62.6766 98.302 61.9665 97.7777 61.0699C97.2534 60.177 96.9912 59.2087 96.9912 58.1723C96.9912 57.1358 97.2534 56.1747 97.7777 55.2817C98.302 54.3924 99.0095 53.6823 99.9001 53.1551C100.791 52.6243 101.742 52.3625 102.759 52.3625C103.524 52.3625 104.256 52.5132 104.957 52.8108C105.657 53.1121 106.274 53.5353 106.81 54.0804L105.941 54.9626C105.524 54.5143 105.043 54.1664 104.49 53.9154C103.937 53.6644 103.362 53.5388 102.762 53.5388C101.965 53.5388 101.225 53.7504 100.543 54.17C99.8606 54.5896 99.3147 55.1562 98.9053 55.8735C98.4959 56.5871 98.2912 57.3546 98.2912 58.1723C98.2912 58.9899 98.4959 59.7717 98.9053 60.4818C99.3147 61.1919 99.8606 61.7585 100.543 62.1853C101.225 62.612 101.965 62.8236 102.762 62.8236C103.362 62.8236 103.94 62.6981 104.49 62.4471C105.043 62.196 105.524 61.8482 105.941 61.3999L106.81 62.2821C106.274 62.8164 105.657 63.236 104.957 63.5409C104.256 63.8457 103.524 63.9999 102.759 63.9999C101.742 63.9999 100.791 63.7345 99.9001 63.2073Z" fill="#04436F" />
                <path d="M114.211 56.1031C114.796 56.7415 115.087 57.5914 115.087 58.6493V63.8063H113.859V62.4794C113.565 62.96 113.141 63.333 112.588 63.6019C112.035 63.8709 111.464 64.0036 110.875 64.0036C109.966 64.0036 109.226 63.7597 108.645 63.2684C108.067 62.7771 107.776 62.1244 107.776 61.3032C107.776 60.758 107.926 60.2703 108.225 59.84C108.526 59.4096 108.928 59.0761 109.438 58.843C109.945 58.6099 110.501 58.4915 111.101 58.4915C111.952 58.4915 112.872 58.6493 113.856 58.9649V58.6529C113.856 57.9644 113.68 57.3834 113.331 56.91C112.983 56.4366 112.39 56.1964 111.561 56.1964C111.177 56.1964 110.789 56.2645 110.39 56.4008C109.991 56.537 109.557 56.7271 109.086 56.9638L108.594 55.9668C109.686 55.4217 110.702 55.1492 111.643 55.1492C112.767 55.1492 113.622 55.4683 114.207 56.1067L114.211 56.1031ZM112.818 62.4543C113.36 62.1423 113.705 61.7084 113.859 61.1525V59.8579C113.03 59.6284 112.175 59.5136 111.302 59.5136C110.656 59.5136 110.11 59.6786 109.654 60.0049C109.201 60.3313 108.975 60.7473 108.975 61.2494C108.975 61.7514 109.173 62.1674 109.575 62.4687C109.973 62.7699 110.48 62.9205 111.09 62.9205C111.701 62.9205 112.279 62.7663 112.818 62.4543Z" fill="#04436F" />
                <path d="M119.856 55.644C120.435 55.3105 121.113 55.1455 121.889 55.1455V56.2429C121.257 56.2429 120.69 56.3648 120.194 56.6015C119.698 56.8418 119.311 57.1789 119.031 57.6093C118.75 58.0396 118.614 58.5273 118.614 59.0724V63.8027H117.386V55.3428H118.614V56.996C118.865 56.4294 119.282 55.9775 119.86 55.644H119.856Z" fill="#04436F" />
                <path d="M128.601 62.6086C129.107 62.4114 129.495 62.1711 129.757 61.8878L130.511 62.6911C130.152 63.0856 129.646 63.4012 128.996 63.6415C128.346 63.8818 127.714 64.0001 127.103 64.0001C126.349 64.0001 125.645 63.81 124.988 63.4263C124.331 63.0462 123.807 62.5118 123.408 61.8304C123.009 61.149 122.808 60.3888 122.808 59.546C122.808 58.7032 122.995 57.9788 123.372 57.3046C123.749 56.6268 124.256 56.0996 124.895 55.7159C125.534 55.3357 126.231 55.1421 126.985 55.1421C128.253 55.1421 129.24 55.5832 129.944 56.469C130.648 57.3512 131 58.5418 131 60.0373H124.069C124.155 60.8765 124.475 61.565 125.028 62.0994C125.581 62.6337 126.267 62.9027 127.085 62.9027C127.588 62.9027 128.095 62.8059 128.601 62.6086ZM125.067 56.9854C124.521 57.4803 124.195 58.133 124.083 58.9399H129.786C129.7 58.133 129.42 57.4803 128.949 56.9854C128.479 56.4905 127.84 56.2395 127.032 56.2395C126.267 56.2395 125.609 56.4869 125.064 56.9854H125.067Z" fill="#04436F" />
                <path d="M33.1253 7.26572C31.6852 4.93108 29.6921 3.13796 27.1316 1.88636C24.5674 0.624005 21.6155 0 18.2469 0H0.531494V47.0694H7.00285V30.6623H18.2433C21.6083 30.6623 24.5854 30.0383 27.1639 28.7867C29.7459 27.5244 31.7355 25.7528 33.1504 23.4361C34.5725 21.1301 35.2728 18.4297 35.2728 15.3383C35.2728 12.247 34.551 9.59319 33.1217 7.2693L33.1253 7.26572ZM19.3853 24.9638H7.00285V5.77026H19.3853C24.6967 5.77026 28.9882 10.0666 28.9882 15.3706C28.9882 20.6747 24.6967 24.9602 19.3853 24.9602V24.9638Z" fill="#04436F" />
                <path d="M76.8519 0V47.0694H83.3232V0H76.8519ZM42.7139 0V47.0694H49.1852V0H42.7139Z" fill="#04436F" />
                <path d="M88.99 27.535L63.1836 17.0596C63.0759 17.0202 62.9574 17.0202 62.8532 17.0596L37.0468 27.535C36.8062 27.6247 36.6841 27.8901 36.7739 28.1303L37.7902 30.9168C37.88 31.1607 38.1529 31.2862 38.3971 31.193L62.8568 23.5041C62.9645 23.4646 63.083 23.4646 63.1872 23.5041L87.6469 31.193C87.8911 31.2862 88.164 31.1607 88.2538 30.9168L89.2701 28.1303C89.3563 27.8901 89.2342 27.6247 88.9972 27.535H88.99Z" fill="#B99B5F" />
              </g>
              <defs>
                <clipPath id="clip0_428_1830">
                  <rect width="131" height="64" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="mb-[16px] flex justify-center">
            <Link href="/Registrierung-Jobs">
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

      
      {/* Heading */}
      <h1
  className="md:block hidden text-[#04436F] font-metropolis font-[600] md:font-[700] text-[24px] md:text-[48px] leading-[32px] md:leading-[55.2px] text-center lg:mt-[200px] mb-[16px] md:mb-[40px]"
  style={{
    letterSpacing: "-0.96px", // Adjusted letter spacing
  }}
>
  Wählen Sie die gewünschte Region <br />
  und geben Sie Ihren Namen und Email an
</h1>

<h1
  className="md:hidden block text-[#04436F] font-metropolis font-[600] md:font-[700] text-[24px] md:text-[48px] leading-[32px] md:leading-[55.2px] text-center lg:mt-[200px] mb-[16px] md:mb-[40px]"
  style={{
    letterSpacing: "-0.96px", // Adjusted letter spacing
  }}
>
  Wählen Sie die gewünschte  <br /> Region
  und geben Sie Ihren  <br /> Namen und Email an
</h1>


<div
  className="flex flex-col md:flex-row justify-between items-center gap-[11px] w-full md:w-[1109px] h-auto"
  style={{ opacity: 1 }}
>
  {/* Region */}
  <div
    className="flex justify-between items-center w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white"
    style={{
      border: "1px solid #B7B6BA",
      borderRadius: "8px",
    }}
  >
    <select
  className="w-full bg-transparent text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal"
  required
  value={region}
  onChange={(e) => {
    setRegion(e.target.value);
    handleValidation();
  }}
>
  <option value="" disabled selected>
    Region
  </option>
  <option>Kanton Aargau</option>
  <option>Kanton Appenzell Ausserrhoden</option>
  <option>Kanton Appenzell Innerrhoden</option>
  <option>Kanton Basel-Landschaft</option>
  <option>Kanton Basel-Stadt</option>
  <option>Kanton Bern</option>
  <option>Kanton Freiburg</option>
  <option>Kanton Genf</option>
  <option>Kanton Glarus</option>
  <option>Kanton Graubünden</option>
  <option>Kanton Jura</option>
  <option>Kanton Luzern</option>
  <option>Kanton Neuenburg</option>
  <option>Kanton Nidwalden</option>
  <option>Kanton Obwalden</option>
  <option>Kanton Schaffhausen</option>
  <option>Kanton Schwyz</option>
  <option>Kanton Solothurn</option>
  <option>Kanton St. Gallen</option>
  <option>Kanton Tessin</option>
  <option>Kanton Thurgau</option>
  <option>Kanton Uri</option>
  <option>Kanton Waadt</option>
  <option>Kanton Wallis</option>
  <option>Kanton Zug</option>
  <option>Kanton Zürich</option>
</select>

  </div>

  {/* Name */}
  <input
  type="text"
  placeholder="Name"
  required
  className="w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal placeholder-[#1C1B1D]"
  style={{
    border: "1px solid #B7B6BA",
    borderRadius: "8px",
  }}
  value={name}
  onChange={(e) => {
    setName(e.target.value);
    handleValidation();
  }}
/>


  {/* E-Mail */}
  <input
    type="email"
    placeholder="E-Mail"
    required
    className="w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal placeholder-[#1C1B1D]"
    style={{
      border: "1px solid #B7B6BA",
      borderRadius: "8px",
    }}
    value={email}
    onChange={(e) => {
      setEmail(e.target.value);
      handleValidation();
    }}
  />

<div
      className="flex flex-col justify-between items-start w-[271px] h-[75px] px-[13px] py-[17px] border rounded-lg bg-white"
      style={{
        border: "1px solid #B7B6BA",
        borderRadius: "8px",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="text-[#1C1B1D] font-metropolis text-[18px] leading-[26px] font-normal">
        CV hochladen
      </p>
      <span className="text-[#1C1B1D] font-metropolis text-[10px] leading-[20px] font-normal">
        Optional
      </span>

      <input
        type="file"
        accept=".pdf"
        onChange={handleChange}
        style={{ display: 'none' }}
        id="cv-upload"
      />
      <label htmlFor="cv-upload" className="cursor-pointer">
        {cv ? (
          <p className="text-[#1C1B1D] font-metropolis text-[14px] leading-[22px]">
            {cv.name}
          </p>
        ) : (
          <p >
            
          </p>
        )}
      </label>
    </div>
</div>

      {/* Submit Button */}
      <Link href={isFormValid ? "/Form-Page-2" : "#"}>
  <button
    type="button"
    disabled={!isFormValid}

    className={`${
      isFormValid
        ? "bg-[#04436F] text-[#F5F5F5]"
        : "bg-gray-400 text-gray-200"
    } font-metropolis font-[700] text-[24px] md:text-[36px] leading-[21.6px] rounded-[8px] md:rounded-full mt-[50px]`}
    style={{
      display: "inline-flex",
      padding: "18px 50px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      lineHeight: "21.6px", // Explicit line height
      cursor: isFormValid ? "pointer" : "not-allowed",

    }}
  >
    Weiter geht's!
  </button>
</Link>


    </div>
  );
}
