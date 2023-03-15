import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {

  const isSHow = useSelector((state) => state.ui.showCartUI)

  return (
    <Layout>
      {isSHow && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
