import Link from "next/link";

const CarDetails = () => {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-2">Nissan GT-R</h1>
        <p className="text-sm text-gray-600">Sports car with the best design and acceleration.</p>
        <div className="flex gap-4 mt-4">
          <img src="/images/car1.png" alt="Car 1" className="w-1/3 rounded" />
          <img src="/images/car2.png" alt="Car 2" className="w-1/3 rounded" />
          <img src="/images/car3.png" alt="Car 3" className="w-1/3 rounded" />
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Price: $80.00/day</h3>
          <Link href="./Form">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
    Rent Now
  </button>
</Link>
        </div>
      </div>
    );
  };
  
  export default CarDetails;
  