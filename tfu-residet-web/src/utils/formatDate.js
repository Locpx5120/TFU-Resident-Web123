import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';
import 'dayjs/locale/id';
// import i18n from 'i18next';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);

const languageToTimezone = {
  vi: 'Asia/Ho_Chi_Minh',
  en: 'America/New_York',
  id: 'Asia/Jakarta'
};

const languageToLocale = {
  vi: 'vi',
  en: 'en',
  id: 'id'
};

export function formatDate(date, format = 'L LTS') {
    //   const lang = i18n.language;
    const lang = 'vi';
  const timezone = languageToTimezone[lang] || 'UTC';
  const locale = languageToLocale[lang] || 'en';

  dayjs.locale(locale);

  let formattedDate = dayjs(date).tz(timezone);

  if (lang === 'vi') {
    format = format.replace('L', 'DD/MM/YYYY');
  } else if (lang === 'id') {
    format = format.replace('L', 'DD/MM/YYYY');
  }

  return formattedDate.format(format);
}

export function getCurrentDateTime(format = 'L LTS') {
  return formatDate(new Date(), format);
}