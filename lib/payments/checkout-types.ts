export type CheckoutProvider = 'stripe' | 'global-payments';

export type CheckoutItemInput = {
    id?: number | string;
    name?: string;
    price?: number;
    quantity?: number;
};

export type CheckoutLineItem = {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
    lineTotal: number;
};

export type CheckoutTotals = {
    subtotal: number;
    total: number;
    currency: string;
};

export type CheckoutPayload = {
    provider: CheckoutProvider;
    items: CheckoutItemInput[];
    customer?: {
        email: string;
        phone: string;
        firstName: string;
        lastName: string;
        address: string;
        city: string;
        zip: string;
        country: string;
        notes?: string;
    };
};
