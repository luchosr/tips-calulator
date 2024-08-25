import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import { menuItems } from './data/db';
import useOrder from './hooks/useOrder';

function App() {
  const { order, addItem, removeItem } = useOrder();
  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de propinas y consumo
        </h1>
      </header>
      <main className="max-w-7xl mx-auto mt-20 pt-20 grid md:grid-cols-2">
        <section className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10 b">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </section>

        <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <h2 className="font-black text-4xl">Consumo</h2>

          <OrderContents order={order} removeItem={removeItem} />
          <OrderTotals />
        </section>
      </main>
    </>
  );
}

export default App;
