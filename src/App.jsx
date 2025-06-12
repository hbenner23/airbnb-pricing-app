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
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Box */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-md p-10 rounded-2xl w-full max-w-4xl text-white">
        <h1 className="text-4xl font-bold text-center mb-6">Airbnb Price Predictor</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Number of Bedrooms</label>
            <input
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(Math.floor(+e.target.value))}
              min="0"
              max="8"
              step="1"
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Bathrooms</label>
            <input
              type="number"
              value={bathrooms}
              onChange={(e) => setBathrooms(Math.round(+e.target.value * 2) / 2)}
              min="0"
              max="8"
              step="0.5"
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(Math.floor(+e.target.value))}
              min="0"
              max="15"
              step="1"
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location Score (1–10)</label>
            <input
              type="number"
              value={locationScore}
              onChange={(e) => setLocationScore(+e.target.value)}
              min="0"
              max="10"
              step="0.1"
              className="w-full border border-gray-300 rounded-lg p-3 text-black"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={(e) => setHasParking(e.target.checked)}
              className="w-5 h-5"
            />
            <label>Has Parking</label>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={hasWifi}
              onChange={(e) => setHasWifi(e.target.checked)}
              className="w-5 h-5"
            />
            <label>Has WiFi</label>
          </div>
        </div>

        <button
          onClick={calculatePrice}
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Predict Price
        </button>

        {price !== null && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold">
              Predicted Nightly Price: ${price.toFixed(2)}
            </h2>
            <p className="text-sm mt-1">
              Based on {bedrooms} bed(s), {bathrooms} bath(s), {guests} guest(s),
              location score of {locationScore}, parking: {hasParking ? 'yes' : 'no'},
              WiFi: {hasWifi ? 'yes' : 'no'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;