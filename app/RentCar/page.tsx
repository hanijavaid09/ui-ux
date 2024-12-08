
import React from 'react'
import FilterSidebar from '../Filter/page'
import CarDetails from '../Detail/page'
import Reviews from '../Rewiev/page'
import RecommendedCars from '../Recomended/page'

const Page = () => {
  return (
    <div>
      <div className="flex">
      <FilterSidebar />
      <main className="flex-1 p-4">
        <CarDetails />
        <Reviews />
        <RecommendedCars />
      </main>
    </div>
    </div>
  )
}

export default Page
