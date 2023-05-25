import { rest } from 'msw';
import {
  product,
  categoryGroups,
  mainBanners,
  recommedStores,
  reviewBestTalkeDeals,
  specialCard,
  hotKeyword,
} from './data';

const handlers = [
  rest.get('/product', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    return res(ctx.status(200), ctx.json(product.data.products[page]));
  }),

  rest.get('/categoryList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(categoryGroups));
  }),

  rest.get('/middleCategory', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { path: '/', title: '전체', categoryId: 0 },
        { path: '/home/food', title: '식품', categoryId: 1 },
        { path: '/home/life', title: '생활', categoryId: 2 },
        { path: 'home/digital', title: '디지털', categoryId: 3 },
        { path: '/home/beauty', title: '뷰티 · 패션', categoryId: 4 },
      ])
    );
  }),

  rest.get('/mainBanners', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mainBanners));
  }),

  rest.get('/recommendStores', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(recommedStores));
  }),

  rest.get('/specialCard', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(specialCard));
  }),

  rest.get('/reviewBestDeal', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    return res(ctx.status(200), ctx.json(reviewBestTalkeDeals.data.slice(page * 2, page * 2 + 2)));
  }),

  rest.get('/search', (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    const matched = [];
    if (query) {
      product.data.products.forEach((page) => {
        page.forEach((item) => {
          if (item.productName.includes(query)) {
            matched.push({ keyword: item.productName, path: `detail/?productId=${item.productId}` });
          }
        });
      });
    }
    return res(ctx.status(200), ctx.json(matched));
  }),
  rest.get('/search/hotkeywords', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(hotKeyword));
  }),

  rest.get('/detail', (req, res, ctx) => {
    const target = req.url.searchParm.get('productId');
  }),
];

export default handlers;
