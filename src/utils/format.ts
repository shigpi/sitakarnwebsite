/**
 * Format Utilities
 * Pure functions for formatting dates, phone numbers, and currencies.
 */

/**
 * Format a date string into a readable format.
 * @example formatDate('2024-03-15') => 'March 15, 2024'
 */
export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  }).format(date);
}

/**
 * Format a date to a short format.
 * @example formatDateShort('2024-03-15') => 'Mar 15, 2024'
 */
export function formatDateShort(dateString: string): string {
  return formatDate(dateString, { year: 'numeric', month: 'short', day: 'numeric' });
}

/**
 * Format a Thai phone number.
 * @example formatPhone('0212345678') => '02 123 45678'
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 9) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{4})/, '$1 $2 $3');
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '$1 $2 $3');
  }
  return phone;
}

/**
 * Format a number with thousands separator.
 * @example formatNumber(1234567) => '1,234,567'
 */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}

/**
 * Format currency in Thai Baht.
 * @example formatCurrency(50000) => '฿50,000'
 */
export function formatCurrency(value: number, currency = 'THB'): string {
  return new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Truncate text to a given length.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Convert minutes to reading time label.
 * @example formatReadingTime(5) => '5 min read'
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

/**
 * Generate initials from a full name.
 * @example getInitials('Somchai Raksa') => 'SR'
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
