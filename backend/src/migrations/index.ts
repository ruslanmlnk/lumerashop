import * as migration_20260309_021148_add_orders from './20260309_021148_add_orders';

export const migrations = [
  {
    up: migration_20260309_021148_add_orders.up,
    down: migration_20260309_021148_add_orders.down,
    name: '20260309_021148_add_orders'
  },
];
