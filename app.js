// 元素选取
const cityInput = document.getElementById('cityInput');
const btn       = document.getElementById('getFortuneBtn');
const resultDiv = document.getElementById('result');
const forecastD = document.getElementById('forecast');
const fortuneD  = document.getElementById('fortune');

btn.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (!city) return alert('Please enter a city name.');

  resultDiv.classList.add('hidden');

  try {
    // 1. 地理编码：Open-Meteo Geocoding API  [oai_citation:6‡Open-Meteo](https://open-meteo.com/en/docs/geocoding-api?utm_source=chatgpt.com)
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );
    const geoData = await geoRes.json();
    if (!geoData.results?.length) throw new Error('City not found.');
    const { latitude, longitude } = geoData.results[0];

    // 2. 获取明日天气：Open-Meteo Forecast API  [oai_citation:7‡Open-Meteo](https://open-meteo.com/en/docs?utm_source=chatgpt.com)
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto`
    );
    const weatherData = await weatherRes.json();
    const daily = weatherData.daily;
    const high = daily.temperature_2m_max[1],
          low  = daily.temperature_2m_min[1],
          rain = daily.precipitation_probability_max[1];

    // 显示原始预报
    forecastD.textContent = 
      `Tomorrow in ${city}: High ${high}°C, Low ${low}°C, Rain chance ${rain}%`;

    // 3. Puter.js 调用 AI：puter.ai.chat  [oai_citation:8‡docs.puter.com](https://docs.puter.com/getting-started/)
    const prompt = `
Tomorrow in ${city}:
- High: ${high}°C
- Low: ${low}°C
- Rain chance: ${rain}%
Please give:
1) A one-sentence travel tip.
2) A one-sentence micro-fortune.
    `.trim();

    const aiResponse = await puter.ai.chat(prompt);
    fortuneD.textContent = aiResponse;

    resultDiv.classList.remove('hidden');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
});