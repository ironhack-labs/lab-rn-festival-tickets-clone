export const formatPrice = (price: number): string => {
  return Number(price).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
  });
};
