import { rest } from 'msw';
import { product, categoryGroups, mainBanners } from './data';

const handlers = [
  rest.get('/product', (req, res, ctx) => {
    const productType = req.url.searchParams.get('category');
    return res(ctx.status(200), ctx.json(product));
  }),

  rest.get('/categoryList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoryGroups));
  }),
];

export default handlers;
