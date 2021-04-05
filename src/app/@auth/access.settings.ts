export const authSettings = {
  guest: {},
  supplier: {
    parent: 'guest',
    view: ['orders'],
    edit: ['orders'],
  },
  restaurant: {
    parent: 'guest',
    view: ['orders', 'products'],
    edit: ['orders'],
  },
};
