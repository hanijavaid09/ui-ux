const Reviews = () => {
    const reviews = [
      { name: "Alex Stanton", rating: 5, comment: "Great car!", date: "7 Aug 2023" },
      { name: "Skylar Dias", rating: 4, comment: "Loved the ride!", date: "15 Aug 2023" },
    ];
  
    return (
      <div className="p-4 mt-6 bg-gray-50 rounded">
        <h2 className="text-lg font-bold mb-4">Reviews</h2>
        {reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
            <p>{review.comment}</p>
            <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
          </div>
        ))}
        <button className="mt-4 text-blue-600">Show All</button>
      </div>
    );
  };
  
  export default Reviews;
  