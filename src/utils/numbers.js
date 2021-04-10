export const formatNumber = number =>
  new Intl.NumberFormat('en-US', { currency: 'USD' }).format(number)
