import Image from 'next/image';
import React from 'react';
import Header from '../components/header';
import Footerl from '../components/footer';

const Form = () => {
  return (
    <div>
        <Header/>
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-blue-600 text-xl font-bold">MORENT</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Help</span>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-3 gap-8">
        {/* Left Section */}
        <section className="col-span-2 space-y-8">
          {/* Billing Info */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Billing Info</h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Town/City
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your town or city"
                />
              </div>
            </form>
          </div>

          {/* Rental Info */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Rental Info</h2>
            <form className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pick-Up Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Drop-Off Date
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </form>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
            <form className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Credit Card</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>PayPal</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Bitcoin</span>
                </label>
              </div>
            </form>
          </div>
        </section>

        {/* Right Section */}
        <aside className="bg-white p-6 shadow-md rounded-lg space-y-4">
          <h2 className="text-lg font-bold">Rental Summary</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
            <Image
                  src="/images/car1.png"
                  alt="Specs"
                  height={388}
                  width={304}
                  className="rounded-tl-[10px]"
                />
              <span>Nissan GT - R</span>
              <span className="text-gray-500">$80.00</span>
            </div>
            <div className="flex items-center justify-between font-bold">
              <span>Total Rental Price</span>
              <span>$80.00</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
    <Footerl/>
    </div>
  );
};

export default Form;
