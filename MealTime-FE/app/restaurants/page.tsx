'use client';

import { useEffect, useState } from 'react';

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/restaurants')
      .then(res => res.json())
      .then(data => setRestaurants(data.restaurants))
      .catch(err => console.error(err));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Restaurants</h1>
      <div>
        {restaurants.length === 0 ? (
          <p>Loading restaurants...</p>
        ) : (
          restaurants.map((r: any) => (
            <div key={r.id} style={{ padding: '1rem', border: '1px solid #ddd', margin: '1rem 0' }}>
              <h3>{r.name}</h3>
              <p>Cuisine: {r.cuisine}</p>
              <p>Rating: {r.rating} ⭐</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
