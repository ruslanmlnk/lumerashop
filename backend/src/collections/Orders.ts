import type { Access, CollectionConfig } from 'payload'

const isAdmin: Access = ({ req: { user } }) => (user as { role?: string } | null)?.role === 'admin'

export const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderId',
    defaultColumns: ['orderId', 'paymentStatus', 'provider', 'total', 'customerEmail', 'updatedAt'],
  },
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
    admin: isAdmin,
  },
  fields: [
    {
      name: 'orderId',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      label: 'Order ID',
    },
    {
      name: 'provider',
      type: 'select',
      required: true,
      label: 'Payment provider',
      options: [
        {
          label: 'Stripe',
          value: 'stripe',
        },
        {
          label: 'Global Payments',
          value: 'global-payments',
        },
      ],
    },
    {
      name: 'paymentStatus',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      label: 'Payment status',
      options: [
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Paid',
          value: 'paid',
        },
        {
          label: 'Failed',
          value: 'failed',
        },
        {
          label: 'Canceled',
          value: 'canceled',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'customerEmail',
          type: 'text',
          required: true,
          label: 'Customer email',
        },
        {
          name: 'customerPhone',
          type: 'text',
          label: 'Customer phone',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'customerFirstName',
          type: 'text',
          label: 'Customer first name',
        },
        {
          name: 'customerLastName',
          type: 'text',
          label: 'Customer last name',
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'currency',
          type: 'text',
          required: true,
          defaultValue: 'CZK',
          label: 'Currency',
        },
        {
          name: 'subtotal',
          type: 'number',
          required: true,
          label: 'Subtotal',
          min: 0,
        },
        {
          name: 'shippingTotal',
          type: 'number',
          required: true,
          label: 'Shipping total',
          min: 0,
        },
        {
          name: 'total',
          type: 'number',
          required: true,
          label: 'Order total',
          min: 0,
        },
      ],
    },
    {
      name: 'shippingAddress',
      type: 'group',
      label: 'Shipping address',
      fields: [
        {
          name: 'country',
          type: 'text',
          label: 'Country',
        },
        {
          name: 'address',
          type: 'text',
          label: 'Address',
        },
        {
          name: 'city',
          type: 'text',
          label: 'City',
        },
        {
          name: 'zip',
          type: 'text',
          label: 'ZIP',
        },
        {
          name: 'notes',
          type: 'textarea',
          label: 'Notes',
        },
      ],
    },
    {
      name: 'billing',
      type: 'group',
      label: 'Billing details',
      fields: [
        {
          name: 'sameAsShipping',
          type: 'checkbox',
          label: 'Same as shipping',
          defaultValue: true,
        },
        {
          name: 'isCompany',
          type: 'checkbox',
          label: 'Company purchase',
          defaultValue: false,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'firstName',
              type: 'text',
              label: 'First name',
            },
            {
              name: 'lastName',
              type: 'text',
              label: 'Last name',
            },
          ],
        },
        {
          name: 'address',
          type: 'text',
          label: 'Address',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'city',
              type: 'text',
              label: 'City',
            },
            {
              name: 'zip',
              type: 'text',
              label: 'ZIP',
            },
            {
              name: 'country',
              type: 'text',
              label: 'Country',
            },
          ],
        },
        {
          name: 'companyName',
          type: 'text',
          label: 'Company name',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'companyId',
              type: 'text',
              label: 'Company ID',
            },
            {
              name: 'vatId',
              type: 'text',
              label: 'VAT ID',
            },
          ],
        },
      ],
    },
    {
      name: 'shipping',
      type: 'group',
      label: 'Shipping method',
      fields: [
        {
          name: 'methodId',
          type: 'text',
          label: 'Method ID',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
        },
        {
          name: 'price',
          type: 'number',
          label: 'Price',
          min: 0,
        },
        {
          name: 'pickupCarrier',
          type: 'text',
          label: 'Pickup carrier',
        },
        {
          name: 'pickupPointId',
          type: 'text',
          label: 'Pickup point ID',
        },
        {
          name: 'pickupPointCode',
          type: 'text',
          label: 'Pickup point code',
        },
        {
          name: 'pickupPointName',
          type: 'text',
          label: 'Pickup point name',
        },
        {
          name: 'pickupPointAddress',
          type: 'textarea',
          label: 'Pickup point address',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      label: 'Order items',
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          label: 'Product',
        },
        {
          name: 'productSnapshotId',
          type: 'text',
          label: 'Product ID snapshot',
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Product slug',
        },
        {
          name: 'sku',
          type: 'text',
          label: 'SKU',
        },
        {
          name: 'variant',
          type: 'text',
          label: 'Variant',
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Product name',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'quantity',
              type: 'number',
              required: true,
              label: 'Quantity',
              min: 1,
            },
            {
              name: 'unitPrice',
              type: 'number',
              required: true,
              label: 'Unit price',
              min: 0,
            },
            {
              name: 'lineTotal',
              type: 'number',
              required: true,
              label: 'Line total',
              min: 0,
            },
          ],
        },
      ],
    },
    {
      name: 'providerData',
      type: 'group',
      label: 'Provider data',
      fields: [
        {
          name: 'stripeSessionId',
          type: 'text',
          label: 'Stripe session ID',
        },
        {
          name: 'stripePaymentIntentId',
          type: 'text',
          label: 'Stripe payment intent ID',
        },
        {
          name: 'globalTransactionId',
          type: 'text',
          label: 'Global Payments transaction ID',
        },
        {
          name: 'globalAuthCode',
          type: 'text',
          label: 'Global Payments auth code',
        },
        {
          name: 'lastEvent',
          type: 'text',
          label: 'Last payment event',
        },
        {
          name: 'lastError',
          type: 'textarea',
          label: 'Last payment error',
        },
        {
          name: 'providerResponse',
          type: 'textarea',
          label: 'Provider response payload',
        },
      ],
    },
    {
      name: 'purchaseCountRecorded',
      type: 'checkbox',
      label: 'Purchase count recorded',
      defaultValue: false,
    },
  ],
}
