import { formatCurrency } from '../helpers';
import type { OrderItem } from '../types';

type OrderContentsProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? (
          <p className="text-center">La orden está vacía</p>
        ) : (
          order.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p>
                Cantidad: {item.quantity} -
                {formatCurrency(item.price * item.quantity)}
              </p>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
