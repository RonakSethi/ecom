import base from './base';

export const CreateOrder = data => base.post('/checkout', data);