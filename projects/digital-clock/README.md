# 🕐 Digital Clock - Multiple Time Zones

A beautiful, real-time digital clock application that displays the current time across multiple time zones simultaneously.

## 🎯 Features

✅ **Multi-Timezone Display** - View multiple time zones at once  
✅ **Real-time Updates** - Seconds update live every second  
✅ **12/24 Hour Format** - Toggle between AM/PM and 24-hour format  
✅ **Multiple Date Formats** - US (MM/DD/YYYY), EU (DD/MM/YYYY), ISO (YYYY-MM-DD)  
✅ **35+ Time Zones** - Coverage across all major cities worldwide  
✅ **Search Functionality** - Quickly find and add time zones  
✅ **UTC Offset Display** - Shows offset from UTC  
✅ **Responsive Design** - Works on desktop, tablet, and mobile  
✅ **Beautiful UI** - Gradient cards with modern design  

## 🚀 Quick Start

### 1. Open the Application

```bash
# Simply open index.html in your browser
# Or access via local server:
python -m http.server 8000
# Then visit: http://localhost:8000/projects/digital-clock/index.html
```

### 2. Add Time Zones

- Click the **"+ Add Time Zone"** button
- Search for your desired city or country
- Click to add (can add multiple)

### 3. Customize Display

- **Time Format**: Switch between 12-hour (AM/PM) and 24-hour format
- **Date Format**: Choose US, EU, or ISO date format
- **Remove Zones**: Click the "Remove" button on any clock card

## 📋 Supported Time Zones

### North America
- 🗽 America/New_York (New York)
- 🌳 America/Los_Angeles (Los Angeles)
- 🏙️ America/Chicago (Chicago)
- 🏔️ America/Denver (Denver)
- 🍁 America/Toronto (Toronto)
- 🍁 America/Vancouver (Vancouver)
- 🇲🇽 America/Mexico_City (Mexico City)

### South America
- 🇧🇷 America/São_Paulo (São Paulo)
- 🇦🇷 America/Buenos_Aires (Buenos Aires)

### Europe
- 🇬🇧 Europe/London (London)
- 🇫🇷 Europe/Paris (Paris)
- 🇩🇪 Europe/Berlin (Berlin)
- 🇪🇸 Europe/Madrid (Madrid)
- 🇮🇹 Europe/Rome (Rome)
- 🇳🇱 Europe/Amsterdam (Amsterdam)
- 🇷🇺 Europe/Moscow (Moscow)
- 🇹🇷 Europe/Istanbul (Istanbul)

### Middle East & Africa
- 🇦🇪 Asia/Dubai (Dubai)
- 🇪🇬 Africa/Cairo (Cairo)
- 🇳🇬 Africa/Lagos (Lagos)
- 🇿🇦 Africa/Johannesburg (Johannesburg)
- 🇰🇪 Africa/Nairobi (Nairobi)

### Asia
- 🇹🇭 Asia/Bangkok (Bangkok)
- 🇭🇰 Asia/Hong_Kong (Hong Kong)
- 🇨🇳 Asia/Shanghai (Shanghai)
- 🇸🇬 Asia/Singapore (Singapore)
- 🇯🇵 Asia/Tokyo (Tokyo)
- 🇰🇷 Asia/Seoul (Seoul)
- 🇮🇳 Asia/Kolkata (Kolkata)
- 🇵🇰 Asia/Karachi (Karachi)
- 🇮🇩 Asia/Jakarta (Jakarta)
- 🇵🇭 Asia/Manila (Manila)

### Australia & Pacific
- 🇦🇺 Australia/Sydney (Sydney)
- 🇦🇺 Australia/Melbourne (Melbourne)
- 🇳🇿 Pacific/Auckland (Auckland)

## 🛠️ File Structure

```
projects/digital-clock/
├── index.html          # Main HTML interface
├── clock-style.css     # Comprehensive styling
├── clock-script.js     # Core functionality
└── README.md          # This file
```

## 💻 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox
- **Vanilla JavaScript** - No dependencies required
- **Intl API** - Native timezone handling

## 🎨 Design Features

### Color Gradients
- Purple to Pink gradient (default)
- Pink to Red gradient (alt-1)
- Blue to Cyan gradient (alt-2)
- Green to Turquoise gradient (alt-3)
- Orange to Yellow gradient (alt-4)
- Cyan to Purple gradient (alt-5)

### Animations
- Card hover effects with elevation
- Smooth fade-in transitions
- Modal slide-in animation
- Typing cursor effect on time display

## 📱 Responsive Breakpoints

- **Desktop**: Full grid layout (3+ columns)
- **Tablet**: 2 columns
- **Mobile**: 1 column (full width)

## 🔧 How It Works

### Real-time Updates
```javascript
// Updates every second
setInterval(() => {
  // Recalculate time for each timezone
  // Update display
}, 1000);
```

### Timezone Conversion
Uses native JavaScript `Intl.DateTimeFormat` API:
```javascript
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Tokyo',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
```

### UTC Offset Calculation
```javascript
const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
const offset = (tzDate - utcDate) / (1000 * 60 * 60);
```

## 🎓 Learning Resources

This project demonstrates:
- ✅ DOM manipulation with vanilla JavaScript
- ✅ CSS Grid and Flexbox layouts
- ✅ Intl API for internationalization
- ✅ Modal dialogs and event handling
- ✅ Responsive web design
- ✅ Real-time updates with intervals
- ✅ Local storage considerations (future enhancement)

## 🚀 Future Enhancements

- 📍 Save favorite timezones to localStorage
- 🔔 Set alarms for specific timezones
- 🌙 Dark mode toggle
- 📊 World map with timezone visualization
- ⏱️ Countdown timer to events in different zones
- 🎵 Audio notifications
- 📱 PWA (Progressive Web App) support

## 📝 Usage Examples

### Default Display
The clock starts with 3 default timezones:
- 🗽 New York (USA)
- 🇬🇧 London (UK)
- 🇯🇵 Tokyo (Japan)

### Adding New Zones
1. Click "+ Add Time Zone"
2. Type city name or country (e.g., "Dubai", "Sydney")
3. Click the result
4. Clock appears immediately

### Removing Zones
Click "Remove" button on any clock card

### Changing Formats
- Select "24-Hour" for HH:MM:SS format
- Select "YYYY-MM-DD" for ISO date format

## 🤝 Contributing

Feel free to enhance this project:
- Add more time zones
- Create additional features
- Improve UI/UX
- Fix bugs

## 📄 License

MIT License - Feel free to use and modify

---

**Created with ❤️ | Last Updated: June 15, 2026**
