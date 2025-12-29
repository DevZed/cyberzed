export const PAYMENT_METHODS = {
  STRIPE: 'stripe',
  PAYPAL: 'paypal',
  SHOPPY: 'shoppy',
  CRYPTO: 'crypto',
} as const;

export type PaymentMethod = typeof PAYMENT_METHODS[keyof typeof PAYMENT_METHODS];

export const PAYMENT_METHOD_LABELS = {
  [PAYMENT_METHODS.STRIPE]: 'Credit/Debit Card (Stripe)',
  [PAYMENT_METHODS.PAYPAL]: 'PayPal',
  [PAYMENT_METHODS.SHOPPY]: 'Shoppy.gg (Crypto & More)',
  [PAYMENT_METHODS.CRYPTO]: 'Cryptocurrency',
};

export const PAYMENT_METHOD_ICONS = {
  [PAYMENT_METHODS.STRIPE]: '💳',
  [PAYMENT_METHODS.PAYPAL]: '🅿️',
  [PAYMENT_METHODS.SHOPPY]: '🛒',
  [PAYMENT_METHODS.CRYPTO]: '₿',
};
