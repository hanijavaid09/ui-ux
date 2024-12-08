const FilterSidebar = () => {
    return (
      <aside className="w-1/4 p-4 bg-gray-50">
        <h2 className="text-lg font-bold mb-4">Type</h2>
        <div>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <div key={type} className="mb-2">
              <label>
                <input type="checkbox" className="mr-2" />
                {type}
              </label>
            </div>
          ))}
        </div>
        {/* Add more filters */}
      </aside>
    );
  };
  
  export default FilterSidebar;
  