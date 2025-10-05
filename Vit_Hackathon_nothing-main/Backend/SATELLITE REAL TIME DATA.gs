function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index")
    .setTitle("SATELLITE REAL-TIME DATA")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getWeather(lat, lon) {
  var apiKey = "d64057806b5af0a4bf4707d5aa3f7985"; // Replace with your OpenWeatherMap API key
  var url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&units=metric&lang=en&appid=" +
    apiKey;

  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());

  // Mirchi-specific suggestions
  var suggestions = [];

  var temp = data.main.temp;
  var humidity = data.main.humidity;
  var weatherDesc = data.weather[0].description.toLowerCase();

  // Temperature-based
  if (temp > 35)
    suggestions.push(
      "🔥 High temperature: Water Mirchi plants frequently and provide shade if possible."
    );
  if (temp < 18)
    suggestions.push(
      "❄️ Low temperature: Protect seedlings, as chillies are sensitive to cold."
    );

  // Humidity-based
  if (humidity < 40)
    suggestions.push(
      "💧 Low humidity: Spray water to maintain soil moisture and reduce stress."
    );
  if (humidity > 85)
    suggestions.push(
      "💦 High humidity: Check for fungal diseases (like leaf spot) and use proper drainage."
    );

  // Rain / Weather-based
  if (weatherDesc.includes("rain"))
    suggestions.push(
      "🌧 Rain expected: Protect fruits from excess water and avoid waterlogging."
    );
  else
    suggestions.push(
      "☀️ Dry weather: Schedule irrigation to keep soil evenly moist."
    );

  // General Mirchi crop care
  suggestions.push("🌱 Fertilize with NPK according to soil test results.");
  suggestions.push("🛡 Check for pests like aphids and mites regularly.");

  // Rain alert
  var rainAlert = weatherDesc.includes("rain")
    ? "🌧 Rain expected soon!"
    : "☀️ No rain expected";

  return {
    name: data.name,
    main: data.main,
    weather: data.weather,
    rainAlert: rainAlert,
    suggestions: suggestions,
  };
}
