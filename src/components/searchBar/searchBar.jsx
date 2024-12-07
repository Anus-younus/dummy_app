import React, { useEffect, useState } from 'react'
import './searchBar.scss'


const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  return (
    <div className='SearchBar'>
      <div className="type">
         <button className={`${query.type === "buy" ? "active": ""}`} onClick={() => setQuery((prev) => ({...prev, type: "buy"}))}>Buy</button>
         <button className={`${query.type === "rent" ? "active": ""}`} onClick={() => setQuery((prev) => ({...prev, type: "rent"}))}>Rent</button>
      </div>
      <form>
        <input type="text" name='location' placeholder='City Location' />
        <input
          type="number"
          name='minPrice'
          min={0} max={10000000}
          placeholder='Min Price'
        />
        <input
          type="number"
          name='maxPrice'
          min={0}
          max={10000000}
          placeholder='Max Price'
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar