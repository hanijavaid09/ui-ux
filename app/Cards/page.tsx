import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-auto bg-[#F6F7F9] pt-[52px] px-4 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full h-[44px] mb-6">
        <h4 className="text-[#90A3BF] font-plus-jakarta text-[16px] font-semibold leading-[20.16px]">
          Popular Cars
        </h4><Link href="./RentCar">
  <h4 className="font-plus-jakarta text-[16px] font-semibold leading-[20.16px] text-center underline decoration-none">
    View All
  </h4>
</Link>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mb-8">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <h2 className="text-lg font-semibold text-black-900 p-4">Koenigsegg</h2>
            <p className="text-gray-500 p-4">Sports</p>
            <Image
              src={`/images/car${idx + 1}.png`}
              alt="Catalog Image"
              height={72}
              width={232}
              className="rounded-tl-[10px]"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 mt-2">
                <Image
                  src="/images/specs.png"
                  alt="Specs"
                  height={388}
                  width={304}
                  className="rounded-tl-[10px]"
                />
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-black-600">$99.99/=</span>
                <Link href="./Form">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
    Rent Now
  </button>
</Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations Section */}
      <div className="flex justify-between items-center w-full h-[44px] mb-6">
        <h4 className="text-[#90A3BF] font-plus-jakarta text-[16px] font-semibold leading-[20.16px]">
          Recommended Cars
        </h4>
        <Link href="./RentCar">
  <h4 className="font-plus-jakarta text-[16px] font-semibold leading-[20.16px] text-center underline decoration-none">
    View All
  </h4>
</Link>

      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mb-8">
        {[...Array(8)].map((_, idx) => (
          <div key={idx} className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
            <h2 className="text-lg font-semibold text-black-900 p-4">Koenigsegg</h2>
            <p className="text-gray-500 p-4">Sports</p>
            <Image
              src={`/images/car${idx + 4}.png`}
              alt="Catalog Image"
              height={72}
              width={232}
              className="rounded-tl-[10px]"
            />
            <div className="p-4">
              <p className="text-sm text-gray-600 mt-2">
                <Image
                  src="/images/specs.png"
                  alt="Specs"
                  height={388}
                  width={304}
                  className="rounded-tl-[10px]"
                />
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-semibold text-black-600">$99.99/=</span>
                <Link href="./Form">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
    Rent Now
  </button>
</Link>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <div className="w-full flex justify-center mt-10">
      <button className="text-[14px] sm:text-[16px] w-full sm:w-[116px] h-[36px] sm:h-[44px] font-semibold leading-[24px] tracking-[-0.02em] text-center font-plus-jakarta bg-transparent text-white border-none bg-blue-800 rounded-lg mb-6">
          Show more cars
        </button>
      </div>
    </div>
  )
}

export default Cards
