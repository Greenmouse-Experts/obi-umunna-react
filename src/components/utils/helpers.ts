

export const formatCurrency = (value: number ) =>
    new Intl.NumberFormat('en', { style: 'currency', currency: 'NGN' }).format(
      value
    ).replace('NGN', '₦');

    export const getBearerToken = () => {
      const token = localStorage.getItem('token')
      return `Bearer ${token}`
  }
  export const formatAsNgnMoney = (value: number | string) => {
    if (!value) return '';
    const val = Number(value);
    return `₦${val
      .toLocaleString('en-US')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
};
