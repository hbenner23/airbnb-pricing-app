import { useState } from 'react';

function App() {
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [guests, setGuests] = useState(4);
  const [locationScore, setLocationScore] = useState(8);
  const [hasParking, setHasParking] = useState(true);
  const [hasWifi, setHasWifi] = useState(true);
  const [price, setPrice] = useState(null);

  const calculatePrice = () => {
    const basePrice = 50;
    const priceEstimate =
      basePrice +
      bedrooms * 20 +
      bathrooms * 15 +
      guests * 5 +
      locationScore * 5 +
      (hasParking ? 10 : 0) +
      (hasWifi ? 10 : 0);
    setPrice(priceEstimate);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Airbnb Price Predictor</h1>
      <input type="number" value={bedrooms} onChange={e => setBedrooms(+e.target.value)} placeholder="Bedrooms" /><br /><br />
      <input type="number" value={bathrooms} onChange={e => setBathrooms(+e.target.value)} placeholder="Bathrooms" /><br /><br />
      <input type="number" value={guests} onChange={e => setGuests(+e.target.value)} placeholder="Guests" /><br /><br />
      <input type="number" value={locationScore} onChange={e => setLocationScore(+e.target.value)} placeholder="Location Score (1–10)" /><br /><br />
      <label><input type="checkbox" checked={hasParking} onChange={e => setHasParking(e.target.checked)} /> Has Parking</label><br />
      <label><input type="checkbox" checked={hasWifi} onChange={e => setHasWifi(e.target.checked)} /> Has WiFi</label><br /><br />
      <button onClick={calculatePrice}>Predict Price</button><br /><br />
      {price !== null && <h2>Predicted Nightly Price: ${price.toFixed(2)}</h2>}
    </div>
  );
}

export default App;
