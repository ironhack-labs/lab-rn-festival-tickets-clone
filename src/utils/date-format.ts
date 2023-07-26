export const formatDateLong = (isoDate: string): string =>
  new Date(isoDate)
    .toLocaleDateString('en', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
    .replace(/,/g, '');

export const formatDateTime = (isoDate: string): string =>
  new Date(isoDate)
    .toLocaleTimeString('en', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .toLowerCase();
