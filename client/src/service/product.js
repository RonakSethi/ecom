import base from './base';

export const getProducts = data => base.get('/products', data);