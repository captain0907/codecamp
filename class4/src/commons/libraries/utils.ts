export const getDate = (date) => {
  if (!date || typeof date !== 'string') return '';

  const value = new Date(date);
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  return `${yyyy}.${mm}.${dd}`;
};
