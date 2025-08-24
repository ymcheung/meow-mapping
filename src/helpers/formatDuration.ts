const unit = {
  en: {
    minute: 'minute',
    hour: 'hour'
  },
  tw: {
    minute: '分鐘',
    hour: '小時'
  }
};

export default function formatDuration(minutes: number, locale: 'en' | 'tw') {
  const isEn = locale === 'en';

  if (minutes < 60) {
    return {
      duration: minutes,
      unit: `${unit[locale].minute}${isEn && minutes !== 1 ? 's' : ''}`
    };
  }

  // Convert to hours, rounding to 1 decimal place
  const hours = Number((minutes / 60).toFixed(1));

  return {
    duration: hours % 1 === 0 ? Math.round(hours) : hours,
    unit: `${unit[locale].hour}${isEn && hours !== 1 ? 's' : ''}`
  };
}
