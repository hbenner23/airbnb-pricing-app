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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Airbnb Price Predictor</h1>

        <div className="space-y-4">
          <input
            type="number"
            value={bedrooms}
            onChange={e => setBedrooms(+e.target.value)}
            placeholder="Bedrooms"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="number"
            value={bathrooms}
            onChange={e => setBathrooms(+e.target.value)}
            placeholder="Bathrooms"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="number"
            value={guests}
            onChange={e => setGuests(+e.target.value)}
            placeholder="Guests"
            className="w-full border border-gray-300 rounded-lg p-3"
          />
          <input
            type="number"
            value={locationScore}
            onChange={e => setLocationScore(+e.target.value)}
            placeholder="Location Score (1–10)"
            className="w-full border border-gray-300 rounded-lg p-3"
          />

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={e => setHasParking(e.target.checked)}
            />
            <span>Has Parking</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hasWifi}
              onChange={e => setHasWifi(e.target.checked)}
            />
            <span>Has WiFi</span>
          </label>

          <button
            onClick={calculatePrice}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg mt-2"
          >
            Predict Price
          </button>

          {price !== null && (
            <h2 className="text-center text-xl font-semibold mt-4">
              Predicted Nightly Price: ${price.toFixed(2)}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

