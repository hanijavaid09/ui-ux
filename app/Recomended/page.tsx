const RecommendedCars = () => {
    const cars = [
      { name: "Koenigsegg", price: "$99.00/day", image: "/images/car6.png" },
      { name: "Nissan GT-R", price: "$80.00/day", image: "/images/car5.png" },
      { name: "Rolls Royce", price: "$96.00/day", image: "/images/car4.png" },
    ];
  
    return (
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Recommended Cars</h2>
        <div className="grid grid-cols-3 gap-4">
          {cars.map((car, index) => (
            <div key={index} className="border p-4 rounded">
              <img src={car.image} alt={car.name} className="w-full rounded mb-2" />
              <h3 className="font-bold">{car.name}</h3>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RecommendedCars;
  