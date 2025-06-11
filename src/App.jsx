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
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Airbnb Price Predictor</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Number of Bedrooms</label>
            <input
              type="number"
              value={bedrooms}
              onChange={e => setBedrooms(+e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Bathrooms</label>
            <input
              type="number"
              value={bathrooms}
              onChange={e => setBathrooms(+e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              value={guests}
              onChange={e => setGuests(+e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location Score (1–10)</label>
            <input
              type="number"
              value={locationScore}
              onChange={e => setLocationScore(+e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3"
            />
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={hasParking}
                onChange={e => setHasParking(e.target.checked)}
                className="mr-2"
              />
              Has Parking
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={hasWifi}
                onChange={e => setHasWifi(e.target.checked)}
                className="mr-2"
              />
              Has WiFi
            </label>
          </div>

          <button
            onClick={calculatePrice}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
          >
            Predict Price
          </button>

          {price !== null && (
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold">
                Predicted Nightly Price: ${price.toFixed(2)}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Based on {bedrooms} bed(s), {bathrooms} bath(s), {guests} guest(s), location score of {locationScore}, parking: {hasParking ? 'yes' : 'no'}, WiFi: {hasWifi ? 'yes' : 'no'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

