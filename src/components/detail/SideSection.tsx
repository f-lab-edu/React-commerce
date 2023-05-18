import IProductOptions from '@interfaces/Options';
import React, { useContext } from 'react';
import { ProductDispatchContext, ProductOptionsContext } from 'src/context/ProductOptionsContext';
import OptionSelect from './OptionSelect';

const SideSection = () => {
  const optionData = useContext(ProductOptionsContext);
  const dispatch = useContext(ProductDispatchContext);
  if (optionData === null) return null;
  return (
    <div style={{ flex: 1 }}>
      <div>
        {optionData.options?.names.map((e, index) => (
          <OptionSelect level={index} key={e} />
        ))}
      </div>
      {Object.entries(optionData.products).map(([id, payload]) => (
        <div key={id}>
          {payload.value}
          <br />
          {payload.options.join(' ')}
          <br />
          <button
            type="button"
            onClick={() => {
              payload.count > 1 &&
                dispatch?.dispatch({
                  type: 'UPDATE_PRODUCT',
                  id,
                  payload: {
                    ...payload,
                    count: payload.count - 1,
                    totalPrice: payload.totalPrice - payload.singlePrice,
                  },
                });
            }}
          >
            -
          </button>
          {payload.count}
          <button
            type="button"
            onClick={() => {
              dispatch?.dispatch({
                type: 'UPDATE_PRODUCT',
                id,
                payload: { ...payload, count: payload.count + 1, totalPrice: payload.totalPrice + payload.singlePrice },
              });
            }}
          >
            +
          </button>
          <br />
          {`${payload.totalPrice.toLocaleString('ko-KR')}원`}
        </div>
      ))}
    </div>
  );
};

export default SideSection;
