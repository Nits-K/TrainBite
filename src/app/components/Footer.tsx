const Footer = () => {
  return (
    <>
      <footer className=" bg-[#F3E0DD] py-4 px-4 w-full font-sans">
        <div className="grid w-full sm:w-full grid-cols-1 gap-2 sm:gap-6 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <h4 className="text-black">Company</h4>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/about-railkafe"
            >
              About Us
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/term-condition"
            >
              Term &amp; Conditions
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/cancellation-policy"
            >
              Cancellation &amp; Refund policy
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/shipping-policy"
            >
              Shipping policy
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/quality-assurance"
            >
              Quality Assurance
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/disclaimer"
            >
              Disclaimer
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/sitemap"
            >
              Sitemap
            </a>
          </div>
          <div className="flex flex-col items-start ">
            <h4 className="text-black">Help &amp; Support </h4>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              Track Order
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/offer"
            >
              Offers
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              {" "}
              Callback Request
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              Cancellation Request
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/feedback"
            >
              Feedback/Complaint
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/contactus"
            >
              Contact
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              Become A Partner
            </a>
          </div>
          <div className="flex flex-col items-start  ">
            <h4 className="text-black">Other Links </h4>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              Customer Reviews
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/pure-veg-food-in-train"
            >
              Pure Veg Food
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/non-veg-food-delivery-in-train"
            >
              Non Veg Food
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/jain-food-in-train"
            >
              Jain Food
            </a>
            <a
              className="text-black text-[15px] sm:text-[14px] mt-1 no-underline"
              href="/"
            >
              RailKafe Blog
            </a>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-black">Connect with us </h4>
            <a
              href="https://www.facebook.com/people/Rail-Kafe/100092477826268/?mibextid=ZbWKwL"
              className="text-black text-[15px] sm text-[15px]:sm:text-[14px] mt-1 no-underline flex items-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>{" "}
              Facebook
            </a>
            <a
              href="https://twitter.com/RailKafe"
              className="text-black text-[15px] sm text-[15px]:sm:text-[14px] mt-1 no-underline d-flex items-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>{" "}
              Twitter/X
            </a>
            <a
              href="https://www.instagram.com/railkafe/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
              className="text-black text-[15px] sm text-[15px]:sm:text-[14px] mt-1 no-underline d-flex items-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>{" "}
              Instagram
            </a>
            <a
              href="https://in.pinterest.com/railkafe/"
              className="text-black text-[15px] sm text-[15px]:sm:text-[14px] mt-1 no-underline d-flex items-center "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                className="mr-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
              </svg>{" "}
              Pinterest
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
