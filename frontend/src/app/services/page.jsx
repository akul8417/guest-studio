import React from 'react'

const page = () => {
  return (
    <div>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-12 rounded-2xl shadow-2xl max-w-7xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3"
          alt="Hotel Exterior"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
        <div className="relative z-10 text-center text-white px-4 py-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-yellow-400">Welcome to Our Hotel & Resort</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 font-light drop-shadow-md">
            Discover luxury, comfort, and unforgettable experiences in the heart of paradise. Your dream stay starts here.
          </p>
        

        </div>
        
      </section>
      
      <section>
        <div className=''>
          <h1 className='text-3xl text-center md:text-2xl font-bold mb-6 pt-2'>Accommodations & Amenities</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white rounded-lg shadow-md p-4'>
              <h2 className='text-xl font-semibold mb-2'> Room Services</h2>
              <p className='text-gray-600'>Food and beverage delivery to guest rooms, 24/7. including breakfast, lunch, dinner, snacks, and drinks</p>
            <h1 className='text-2xl font-bold'>In-Room Amenities:</h1>
            <ul className='list-disc list-inside'>
              <li>Complimentary Wi-Fi</li>
              <li>Flat-screen TV</li>
              <li>Mini-bar</li>
              <li>Coffee maker</li>
              <li>Room service menu</li>
            </ul>
            <h1 className='text-2xl font-bold'>Spa Services:</h1>
            <ol className='list-disc list-inside'>
              <li>Relaxing massages</li>
              <li>Facial treatments</li>
            </ol>
            <ol className='list-disc list-inside'>
              <h1 className='text-2xl font-bold'>Dining & Food Services</h1>
              <li>Restaurants & Bars:, On-site dining options for guests and the public</li> 
              <li className=''>Private Dining: The ability to arrange meals or events in private spaces.  </li>
             
              <li>Special dietary menus available</li>
              <li>Vegetarian options</li>
              <li>Gluten-free options</li>
              <li>Allergy-friendly options</li>
            </ol>
            </div>
            <div className='bg-white rounded-lg shadow-md p-4'>
              <h2 className='text-xl font-semibold mb-2'>Guest & Convenience Services</h2>
              <ol className='list-disc list-inside'>
                <li>Laundry Service: Cleaning and pressing of guest clothes.</li>
                <li>Airport Shuttle Service: Transportation to and from the airport.</li>
                <li>Concierge Services: Assistance with booking tours, transportation, or other local activities.</li>
                <li>Valet Parking: Convenient parking service for guests.</li>
                <li>Free Wi-Fi: Internet access available throughout the hotel property.</li>
              </ol>


              <p className='text-xl font-bold'>Technology-Enabled Services </p>
              <ol className='list-disc list-inside'>
               <li>Online Ordering: Using apps or online platforms to order room service or other hotel services.</li>
               <li>Contactless Service Options: Services that minimize physical interaction between staff and guests.</li>
               
              </ol>
              <h1 className='text-2xl font-bold'>Swiming Pool</h1>

            </div>
          </div>
          <div className='text-center mt-8'>
            <a href="#" className='text-yellow-400 hover:underline'>View All Accommodations</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page