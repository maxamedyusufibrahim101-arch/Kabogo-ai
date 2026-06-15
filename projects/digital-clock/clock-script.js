/**
 * Digital Clock - Main JavaScript
 * Real-time multi-timezone clock display
 */

// Time zones list with their details
const TIME_ZONES = {
  'America/New_York': { name: 'New York', country: 'USA', utcOffset: -5 },
  'America/Los_Angeles': { name: 'Los Angeles', country: 'USA', utcOffset: -8 },
  'America/Chicago': { name: 'Chicago', country: 'USA', utcOffset: -6 },
  'America/Denver': { name: 'Denver', country: 'USA', utcOffset: -7 },
  'Europe/London': { name: 'London', country: 'UK', utcOffset: 0 },
  'Europe/Paris': { name: 'Paris', country: 'France', utcOffset: 1 },
  'Europe/Berlin': { name: 'Berlin', country: 'Germany', utcOffset: 1 },
  'Europe/Madrid': { name: 'Madrid', country: 'Spain', utcOffset: 1 },
  'Europe/Rome': { name: 'Rome', country: 'Italy', utcOffset: 1 },
  'Europe/Amsterdam': { name: 'Amsterdam', country: 'Netherlands', utcOffset: 1 },
  'Europe/Moscow': { name: 'Moscow', country: 'Russia', utcOffset: 3 },
  'Asia/Dubai': { name: 'Dubai', country: 'UAE', utcOffset: 4 },
  'Asia/Bangkok': { name: 'Bangkok', country: 'Thailand', utcOffset: 7 },
  'Asia/Hong_Kong': { name: 'Hong Kong', country: 'Hong Kong', utcOffset: 8 },
  'Asia/Shanghai': { name: 'Shanghai', country: 'China', utcOffset: 8 },
  'Asia/Singapore': { name: 'Singapore', country: 'Singapore', utcOffset: 8 },
  'Asia/Tokyo': { name: 'Tokyo', country: 'Japan', utcOffset: 9 },
  'Asia/Seoul': { name: 'Seoul', country: 'South Korea', utcOffset: 9 },
  'Australia/Sydney': { name: 'Sydney', country: 'Australia', utcOffset: 10 },
  'Australia/Melbourne': { name: 'Melbourne', country: 'Australia', utcOffset: 10 },
  'Pacific/Auckland': { name: 'Auckland', country: 'New Zealand', utcOffset: 12 },
  'Africa/Cairo': { name: 'Cairo', country: 'Egypt', utcOffset: 2 },
  'Africa/Johannesburg': { name: 'Johannesburg', country: 'South Africa', utcOffset: 2 },
  'Africa/Lagos': { name: 'Lagos', country: 'Nigeria', utcOffset: 1 },
  'America/Mexico_City': { name: 'Mexico City', country: 'Mexico', utcOffset: -6 },
  'America/Toronto': { name: 'Toronto', country: 'Canada', utcOffset: -5 },
  'America/Vancouver': { name: 'Vancouver', country: 'Canada', utcOffset: -8 },
  'America/São_Paulo': { name: 'São Paulo', country: 'Brazil', utcOffset: -3 },
  'America/Buenos_Aires': { name: 'Buenos Aires', country: 'Argentina', utcOffset: -3 },
  'Asia/Kolkata': { name: 'Kolkata', country: 'India', utcOffset: 5.5 },
  'Asia/Karachi': { name: 'Karachi', country: 'Pakistan', utcOffset: 5 },
  'Asia/Jakarta': { name: 'Jakarta', country: 'Indonesia', utcOffset: 7 },
  'Asia/Manila': { name: 'Manila', country: 'Philippines', utcOffset: 8 },
  'Europe/Istanbul': { name: 'Istanbul', country: 'Turkey', utcOffset: 3 },
  'Africa/Nairobi': { name: 'Nairobi', country: 'Kenya', utcOffset: 3 },
};

// State
let selectedTimeZones = ['America/New_York', 'Europe/London', 'Asia/Tokyo'];
let currentFormat = '12';
let currentDateFormat = 'US';
let updateInterval = null;

/**
 * Initialize the application
 */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🕐 Digital Clock Application Started');
  initializeClocks();
  startClockUpdates();
  populateTimeZonesList();
});

/**
 * Initialize clocks display
 */
function initializeClocks() {
  updateClocks();
}

/**
 * Update all clocks
 */
function updateClocks() {
  const container = document.getElementById('clocksContainer');
  container.innerHTML = '';

  if (selectedTimeZones.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>No Time Zones Selected</h2>
        <p>Click "+ Add Time Zone" to get started</p>
      </div>
    `;
    return;
  }

  selectedTimeZones.forEach((tz, index) => {
    const clockCard = createClockCard(tz, index);
    container.appendChild(clockCard);
  });
}

/**
 * Create a clock card element
 */
function createClockCard(timezone, index) {
  const info = TIME_ZONES[timezone];
  const now = new Date();

  // Get time in the specified timezone
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: currentFormat === '12'
  });

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const card = document.createElement('div');
  card.className = `clock-card alt-${(index % 5) + 1}`;
  card.id = `clock-${timezone}`;

  // Get time string
  const timeParts = formatter.formatToParts(now);
  let timeString = '';
  let ampm = '';

  timeParts.forEach(part => {
    if (part.type === 'hour' || part.type === 'minute' || part.type === 'second') {
      timeString += part.value;
      if (part.type === 'minute') timeString += ':';
    }
    if (part.type === 'dayPeriod') {
      ampm = part.value;
    }
  });

  // Format time string based on format preference
  const timeDisplay = currentFormat === '12' 
    ? timeString 
    : new Date(now.toLocaleString('en-US', { timeZone: timezone })).toLocaleTimeString('en-GB', { hour12: false });

  // Get date
  const dateParts = dateFormatter.formatToParts(now);
  let dateString = '';
  dateParts.forEach((part, idx) => {
    if (part.type === 'month') {
      dateString += part.value;
    } else if (part.type === 'day') {
      dateString = part.value + '/' + dateString;
    } else if (part.type === 'year') {
      if (currentDateFormat === 'US') {
        dateString = dateString + '/' + part.value;
      } else if (currentDateFormat === 'EU') {
        dateString = dateString.split('/').reverse().join('/') + '/' + part.value;
      } else if (currentDateFormat === 'ISO') {
        dateString = part.value + '-' + dateString.replace(/\//g, '-');
      }
    }
  });

  // Calculate UTC offset
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  const offset = (tzDate - utcDate) / (1000 * 60 * 60);

  card.innerHTML = `
    <div class="clock-info">
      <div class="timezone-name">${info.name}</div>
      <div class="timezone-country">🌍 ${info.country}</div>
      <div class="digital-time">${timeDisplay}</div>
      ${currentFormat === '12' ? `<div class="am-pm">${ampm}</div>` : ''}
      <div class="date-display">${dateString}</div>
      <div class="offset-info">UTC ${offset > 0 ? '+' : ''}${offset}</div>
      <div class="clock-controls">
        <button class="btn-remove" onclick="removeTimeZone('${timezone}')">Remove</button>
      </div>
    </div>
  `;

  return card;
}

/**
 * Start updating clocks every second
 */
function startClockUpdates() {
  if (updateInterval) clearInterval(updateInterval);
  updateInterval = setInterval(updateClocks, 1000);
}

/**
 * Change time format (12/24 hour)
 */
function changeFormat(format) {
  currentFormat = format;
  console.log(`⏰ Time format changed to: ${format}-hour`);
  updateClocks();
}

/**
 * Change date format
 */
function changeDateFormat(format) {
  currentDateFormat = format;
  console.log(`📅 Date format changed to: ${format}`);
  updateClocks();
}

/**
 * Show add timezone modal
 */
function showAddTimeZone() {
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
  document.getElementById('searchInput').focus();
}

/**
 * Close modal
 */
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

/**
 * Close modal when clicking outside
 */
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

/**
 * Populate timezone list in modal
 */
function populateTimeZonesList() {
  const list = document.getElementById('timeZonesList');
  list.innerHTML = '';

  Object.keys(TIME_ZONES).forEach(tz => {
    const info = TIME_ZONES[tz];
    const isSelected = selectedTimeZones.includes(tz);

    const option = document.createElement('div');
    option.className = 'timezone-option';
    option.innerHTML = `${info.name} (${info.country})`;
    option.onclick = () => addTimeZone(tz);
    option.style.opacity = isSelected ? '0.5' : '1';
    option.style.cursor = isSelected ? 'not-allowed' : 'pointer';

    list.appendChild(option);
  });
}

/**
 * Filter timezones in modal
 */
function filterTimeZones() {
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();
  const list = document.getElementById('timeZonesList');

  list.innerHTML = '';

  Object.keys(TIME_ZONES).forEach(tz => {
    const info = TIME_ZONES[tz];
    const isSelected = selectedTimeZones.includes(tz);

    // Check if matches search
    if (info.name.toLowerCase().includes(query) || info.country.toLowerCase().includes(query)) {
      const option = document.createElement('div');
      option.className = 'timezone-option';
      option.innerHTML = `${info.name} (${info.country})`;
      option.onclick = () => addTimeZone(tz);
      option.style.opacity = isSelected ? '0.5' : '1';
      option.style.cursor = isSelected ? 'not-allowed' : 'pointer';

      list.appendChild(option);
    }
  });
}

/**
 * Add timezone to display
 */
function addTimeZone(tz) {
  if (!selectedTimeZones.includes(tz)) {
    selectedTimeZones.push(tz);
    console.log(`✅ Added timezone: ${TIME_ZONES[tz].name}`);
    updateClocks();
    populateTimeZonesList();
  }
}

/**
 * Remove timezone from display
 */
function removeTimeZone(tz) {
  selectedTimeZones = selectedTimeZones.filter(t => t !== tz);
  console.log(`❌ Removed timezone: ${TIME_ZONES[tz].name}`);
  updateClocks();
  populateTimeZonesList();
}

console.log('🕐 Digital Clock Application Loaded');
