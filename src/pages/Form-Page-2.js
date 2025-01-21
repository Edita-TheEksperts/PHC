import Link from "next/link";
import { useState } from "react";
  

export default function FormPage02() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    setIsSubmitted(true); // Update the state to show the thank-you message
  };
  return (
    <div className="bg-[#F1F1F1] flex flex-col items-center justify-start p-4">
      {/* Back Button and Logo */}
      <section className="lg:block hidden lg:flex justify-center items-center pt-[25px] md:pt-[25px]">
        <div className="absolute top-6 left-4 lg:left-[170px]">
          <Link href="/Form-Page-1">
            <button
              className="text-[#003588] text-[16px] font-[400] inline-flex items-center px-4 py-2 mt-[40px] "
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

      <section className='lg:hidden block flex justify-center items-center '>
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
          <Link href="/Form-Page-1">
            <button
              className="text-[#003588] text-[16px] leading-[24px] font-[400] inline-flex items-center px-4 py-2 mt-[40px] "
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
        </div>
      </section>

      {/* Heading */}
      <h1
        className="lg:block hidden text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[48px] leading-[32px] lg:leading-[55.2px] text-center lg:mb-10 lg:mt-[110px]"
        style={{
          letterSpacing: "-0.96px", 
        }}
      >
        Vielen Dank! <br />
        Wir melden uns so schnell wie möglich
      </h1>
      <h1
        className="lg:hidden block text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[48px] leading-[32px] lg:leading-[55.2px] text-center lg:mb-10 lg:mt-[80px]"
        style={{
          letterSpacing: "-0.96px", 
        }}
      >
        Vielen Dank! <br />
        Wir melden uns so<br /> schnell wie möglich
      </h1>

      {/* Section */}
      <section className="lg:block hidden lg:flex flex-col gap-[40px] w-full max-w-[1234px] mb-[160px]">
        {/* Two Divs Side by Side */}
        <div className="flex gap-[40px]">
          {/* Left Box */}
          <div className="flex flex-col gap-[4px] w-[50%] p-[2px]">
            <h2
              className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[51.5px] ml-[4px]"
              style={{
                lineHeight: "297.917%",
              }}
            >
              Was wir bieten
            </h2>
            <div className=" bg-white rounded-lg lg:w-[548px] lg:h-[200px]">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[20px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Wir bieten dir eine abwechslungsreiche Teilzeitbeschäftigung auf Stundenlohnbasis. Du profitierst von viel Flexibilität, einem innovativen Unternehmen mit modernen Strukturen, fortschrittlichen Anstellungsbedingungen, Unterstützung durch unser Backoffice und einem angenehmen Arbeitsklima. Dein Arbeitsort befindet sich immer in der Nähe deines Wohnortes.            </p>
            </div>
          </div>

          {/* Right Box */}
          <div className="flex flex-col gap-[4px] w-[50%] p-[2px]">
            <h2
              className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[51.5px] ml-[4px]"
              style={{
                lineHeight: "297.917%",
              }}
            >
              Was bringst du mit
            </h2>
            <div className=" bg-white rounded-lg lg:w-[548px] lg:h-[200px]">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[20px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
            Als engagierte Persönlichkeit arbeitest du selbstständig und effizient und setzt die Firmenphilosophie konsequent um. Deine Fachkenntnisse ermöglichen es dir, auf die Bedürfnisse der Kunden einzugehen. Gute Deutschkenntnisse sind zwingend erforderlich. Ein eigenes Fahrzeug ist von Vorteil, aber keine Bedingung.
            </p>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col justify-center items-center gap-[4px] lg:w-[548px] lg:h-[200px] p-[2px] mx-auto">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-semibold leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "297.917%",
            }}
          >
           Dein Aufgabenbereich
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[20px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Du betreust fest zugewiesene Privatkunden in deiner Region. Je nach Bedarf kann dein Arbeitsvolumen zwischen ca. 20 % und 100 % liegen. Die Betreuung der Kunden erfolgt in einem regelmässigen Rhythmus.            </p>
          </div>
        </div>
      </section>

      <section className="lg:hidden block mt-[50px] ">

      <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto ">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
            Was wir bieten
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Wir bieten dir eine abwechslungsreiche Teilzeitbeschäftigung auf<br></br> Stundenlohnbasis. Du profitierst von viel Flexibilität, einem innovativen<br></br> Unternehmen mit modernen Strukturen, fortschrittlichen Anstellungsbedingungen, Unterstützung durch unser Backoffice<br></br> und einem angenehmen Arbeitsklima.<br></br> Dein Arbeitsort befindet sich immer in der Nähe deines Wohnortes.            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto mt-[35px]">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
            Was bringst du mit
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Als engagierte Persönlichkeit arbeitest du selbstständig und effizient und setzt die Firmenphilosophie konsequent um. Deine Fachkenntnisse ermöglichen es dir, auf die Bedürfnisse der Kunden einzugehen. Gute Deutschkenntnisse sind zwingend erforderlich. Ein eigenes Fahrzeug ist von Vorteil, aber keine Bedingung.            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-[381px] p-[2px] mx-auto mt-[35px]">
          <h2
            className="text-[#04436F] font-metropolis text-[24px] font-[400] leading-[51.5px] ml-[4px] self-start"
            style={{
              lineHeight: "50px",
            }}
          >
           Dein Aufgabenbereich
          </h2>
          <div className="bg-white rounded-lg">
            <p
              className="text-[#04436F] font-metropolis text-[16px] font-light leading-[26px] p-[16px]"
              style={{
                lineHeight: "162.5%",
              }}
            >
Du betreust fest zugewiesene Privatkunden in deiner Region. Je nach Bedarf kann dein Arbeitsvolumen zwischen ca. 20 % und 100 % liegen. Die Betreuung der Kunden erfolgt in einem regelmässigen Rhythmus.</p>
          </div>
        </div>

      </section>

      {/* Footer Section */}
      <div className="flex flex-col items-center mt-[160px] gap-4">
        <h1
          className="text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[55px] leading-[55.2px] text-center"
          style={{
            letterSpacing: "-0.96px",
          }}
        >
          Hast du noch Fragen?
        </h1>
        <input
          type="text"
          placeholder="Deine Fragen eintippen"
          className="flex flex-col items-start self-stretch text-center border-[1px] rounded-[20px] border-[#B7B6BA6A] p-[20px] placeholder:text-[#04436F] text-[#04436F] font-metropolis text-[20px] font-light leading-[26px] w-full lg:w-[826px] bg-transparent focus:outline-none"
          />

<div className="container flex justify-center items-center">
      {!isSubmitted ? (
        <button
          type="button"
          className="bg-[#04436F] text-[#F5F5F5] font-metropolis font-bold text-[24px] lg:text-[32px] leading-[21.6px] rounded-[8px] lg:rounded-full px-8 py-4 mb-[150px]"
          onClick={handleClick} // Trigger state change on click
        >
          Senden
        </button>
      ) : (
        <p className="text-[#04436F] font-metropolis font-[600] lg:font-[700] text-[24px] lg:text-[50px] leading-[26.2px] lg:leading-[50.2px] text-center">
          Vielen Dank - Wir melden uns so schnell wie möglich!
        </p>
      )}
    </div>
      </div>
    </div>
  );
}
