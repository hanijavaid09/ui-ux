import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-auto mt-[124px] bg-[#F6F7F9]'>
      <div className='flex flex-col sm:flex-row sm:space-x-8'>
        {/* First Image */}
        <div className='w-full sm:w-[640px] h-[360px] mt-[32px] sm:ml-[64px] rounded-[10px]'>
          <Image
            src="/images/Ads 1.png"
            alt="ad 1"
            height={360}
            width={640}
            className="rounded-[10px]"
          />
        </div>

        {/* Second Image (Hidden on Small Screens) */}
        <div className='w-full sm:w-[640px] h-[360px] mt-[32px] sm:ml-[32px] rounded-[10px] sm:block hidden'>
          <Image
            src="/images/Ads 2.png"
            alt="ad 2"
            height={360}
            width={640}
            className="rounded-[10px]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* First Box */}
        <div className="w-full sm:w-[582px] h-auto mt-[44px] sm:ml-[64px] bg-white rounded-lg">
          <div className="pt-[24px] pl-[48px] gap-[8px] flex flex-col sm:flex-row">
            <Image
              src="/images/mark.png"
              alt="ad 2"
              height={16}
              width={16}
            />
            <h4 className="font-plus-jakarta font-semibold text-[16px] leading-[24px] tracking-[-0.02em]">
              Pick-Up
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start pt-[20px]">
            {/* Locations */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Locations
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your City
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
                <Image
                  src="/images/Line 2.png"
                  alt="line"
                  height={0}
                  width={2}
                  className="h-[50px] mb-6 ml-3"
                />
              </div>
            </div>

            {/* Date */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Date
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your Date
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
                <Image
                  src="/images/Line 2.png"
                  alt="line"
                  height={0}
                  width={2}
                  className="h-[50px] mb-6 ml-3"
                />
              </div>
            </div>

            {/* Time */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Time
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your Time
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Blue mark image in the middle */}
        <div className="w-[60px] h-[60px] mt-20 sm:mt-0 sm:mx-10">
          <Image
            src="/images/Switch.png"
            alt="switch"
            height={60}
            width={60}
          />
        </div>

        {/* Second Box */}
        <div className="w-full sm:w-[582px] h-auto mt-[44px] sm:ml-[64px] bg-white rounded-lg">
          <div className="pt-[24px] pl-[48px] gap-[8px] flex flex-col sm:flex-row">
            <Image
              src="/images/mark.png"
              alt="ad 2"
              height={16}
              width={16}
            />
            <h4 className="font-plus-jakarta font-semibold text-[16px] leading-[24px] tracking-[-0.02em]">
              Drop-off
            </h4>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start pt-[20px]">
            {/* Locations */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Locations
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your City
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
                <Image
                  src="/images/Line 2.png"
                  alt="line"
                  height={0}
                  width={2}
                  className="h-[50px] mb-6 ml-3"
                />
              </div>
            </div>

            {/* Date */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Date
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your Date
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
                <Image
                  src="/images/Line 2.png"
                  alt="line"
                  height={0}
                  width={2}
                  className="h-[50px] mb-6 ml-3"
                />
              </div>
            </div>

            {/* Time */}
            <div className="w-full sm:w-auto h-auto pl-[48px] gap-[24px]">
              <h4 className="font-plus-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.02em]">
                Time
              </h4>
              <div className="flex items-center gap-[8px] pt-4">
                <p className="font-plus-jakarta text-[12px] font-medium leading-[15.12px] tracking-[-0.02em] text-left text-[#90A3BF]">
                  Select Your Time
                </p>
                <Image src="/images/arrow.png" alt="arrow" height={14} width={14} />
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Hero
