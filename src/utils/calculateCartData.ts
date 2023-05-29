import { IShop } from './localStorage';

const calculateCartData = (cartData: IShop) => {
  const productsCount = Object.keys(cartData)
    .map((mall) => Object.keys(cartData[mall]).length)
    .reduce((prev, cur) => prev + cur, 0);

  const selectedCount = Object.keys(cartData)
    .map((mall) =>
      Object.values(cartData[mall])
        .map((product) => (product.selected ? 1 : 0))
        .reduce((prev: number, cur: number) => prev + cur, 0)
    )
    .reduce((prev, cur) => prev + cur, 0);

  const optionPrice = Object.keys(cartData)
    .map((mall) => {
      return Object.keys(cartData[mall])
        .map((product) => {
          if (cartData[mall][product].selected) {
            return Object.values(cartData[mall][product].options)
              .map((item) => {
                return { originTotalPrice: item.originTotalPrice, totalPrice: item.totalPrice };
              })
              .reduce(
                (prev, cur) => {
                  return { originTotalPrice: prev.originTotalPrice + cur.originTotalPrice, totalPrice: prev.totalPrice + cur.totalPrice };
                },
                { originTotalPrice: 0, totalPrice: 0 }
              );
          }
          return { originTotalPrice: 0, totalPrice: 0 };
        })
        .reduce((prev, cur) => {
          return { originTotalPrice: prev.originTotalPrice + cur.originTotalPrice, totalPrice: prev.totalPrice + cur.totalPrice };
        });
    })
    .reduce(
      (prev, cur) => {
        return { originTotalPrice: prev.originTotalPrice + cur.originTotalPrice, totalPrice: prev.totalPrice + cur.totalPrice };
      },
      { originTotalPrice: 0, totalPrice: 0 }
    );

  if (productsCount === selectedCount && productsCount !== 0) {
    return { checked: true, count: selectedCount, optionPrice };
  }
  return { checked: false, count: selectedCount, optionPrice };
};

export default calculateCartData;
