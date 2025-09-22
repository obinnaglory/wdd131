// scripts/place.js

// --- Footer dynamic fields ---
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// --- Static inputs for weather (assignment requires static values for now) ---
const temperatureC = 8;     // degrees Celsius (static)
const windKmh = 20;        // km/h (static)

document.getElementById('tempValue').textContent = temperatureC;
document.getElementById('windValue').textContent = windKmh;

// Wind chill function (one line) - metric form (temperature in °C, wind in km/h)
const calculateWindChill = (T, V) => 13.12 + 0.6215*T - 11.37*Math.pow(V,0.16) + 0.3965*T*Math.pow(V,0.16);

// Viability check (metric): Temperature <= 10°C AND wind speed > 4.8 km/h
const windChillEl = document.getElementById('windChill');
if (typeof temperatureC === 'number' && typeof windKmh === 'number' && temperatureC <= 10 && windKmh > 4.8) {
  // calculate and round to one decimal place for display
  const wc = Math.round(calculateWindChill(temperatureC, windKmh) * 10) / 10;
  windChillEl.textContent = `${wc} °C`;
} else {
  windChillEl.textContent = "N/A";
}
