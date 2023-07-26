export const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    })
    .replace(/,/g, '');
};

export const getTimeFromDate = (date: Date): string => {
  return date
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .toLowerCase();
};
