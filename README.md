# TravelFortune ✨

A poetic web-based mini app that divines your travel tip and micro-fortune based on tomorrow’s weather.

This project uses:
- 🌐 [Open-Meteo](https://open-meteo.com/) for free weather forecast and geocoding
- 🤖 [Puter.ai](https://puter.com/) as a free, no-auth-required AI API
- 🎨 A clean, modern design inspired by Klein Blue and minimalist scroll aesthetics
- 🧠 Fully front-end: no backend, no API keys, runs from a static folder

---

## 💡 How It Works

1. You type in a city name.
2. The app:
   - Uses Open-Meteo to fetch the city's coordinates
   - Gets the **forecast for tomorrow** (high/low temperature + rain chance)
3. It builds a prompt like this:
   ```
   Tomorrow in Kyoto:
   - High: 23°C
   - Low: 14°C
   - Rain chance: 60%
   Please give:
   1) A one-sentence travel tip.
   2) A one-sentence micro-fortune.
   ```
4. It sends the prompt to **Puter.ai**, which replies like a gentle oracle.
5. The fortune is displayed on an animated scroll.

---

## 📁 File Structure

```
/project-root
├── index.html         ← Main UI & app container
├── style.css          ← Design: Klein blue + scroll effects
├── app.js             ← Geocoding, Weather API, Puter chat call
├── Novecento_sans_wide_Medium.ttf ← Font (place in same folder)
```

---

## 🚀 Usage

1. **Clone or download this repo**  
2. Make sure `Novecento_sans_wide_Medium.ttf` is in the same directory  
3. Open `index.html` directly in your browser, or use a local server like:  
   ```bash
   npx serve .
   ```

No build steps, no backend, no secrets — just HTML, CSS, JS, and a free AI.

---

## 🌈 Credits

- Weather data by [Open-Meteo](https://open-meteo.com/)
- AI fortune engine by [Puter](https://puter.com/)
- Typography by [Novecento Sans Wide](https://typography.synthview.com/)

---

## 🧙 Inspiration

Inspired by the idea that small rituals can turn plain information into magic.  
Let the weather speak to your spirit — or at least give you a good excuse to carry an umbrella.
