import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footerl = () => {
  return (
    <>
      <footer className="flex flex-col w-full max-w-[1280px] p-[40px] gap-[40px] mt-[50px] mx-auto">
        <div className="flex flex-col w-full">
          {/* Logo and Description Section */}
          <div className="flex w-full sm:w-[1120px] items-start justify-between gap-3">
            <div className="flex flex-col sm:w-[500px] w-full sm:h-[51px]">
              <Image src={"/images/logo.png"} alt="Logo" height="80" width="80" />
              <p className="text-xs sm:text-sm font-roboto font-normal leading-[24px]">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full flex flex-wrap gap-4 sm:gap-2 justify-between py-[40px] mt-[40px]">
            <div className="w-full sm:w-[250px] h-auto sm:h-[225px]">
              {/* Empty div for spacing (you can add content here if necessary) */}
            </div>
            <div className="flex flex-col w-full sm:w-[250px] gap-[16px]">
              <p className="text-[16px] font-roboto leading-[24px] font-semibold">About</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">How it works</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Featured</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Partnership</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Business Relation</p>
            </div>

            <div className="flex flex-col w-full sm:w-[250px] gap-[16px]">
              <p className="text-[16px] font-roboto leading-[24px] font-semibold">Community</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Events</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Blog</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Podcast</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Invite a friend</p>
            </div>

            <div className="flex flex-col w-full sm:w-[250px] gap-[16px]">
              <p className="text-[16px] font-roboto leading-[24px] font-semibold">Social</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Discord</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Instagram</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Twitter</p>
              <p className="text-[14px] font-roboto leading-[21px] font-normal">Facebook</p>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="w-full sm:w-[1120px] border-t-[1px] border-solid border-[#000000] pt-[33px] mt-[50px]">
            <div className="flex justify-between items-center py-[10px] sm:px-[60px]">
              <p className="text-[14px] font-roboto leading-[21px]">©2022 MORENT. All rights reserved</p>
              <div className="flex gap-[24px]">
                <Link className="text-[14px] font-roboto leading-[21px] underline" href="#">Privacy Policy</Link>
                <Link className="text-[14px] font-roboto leading-[21px] underline" href="#">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footerl;
