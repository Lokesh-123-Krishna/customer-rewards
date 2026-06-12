import AppRoutes from './components/routes/AppRoutes';
import { CustomerProvider } from './components/context/CustomerContext';
import './components/styles/global.css';

function App() {
  return (
    <CustomerProvider>
      <AppRoutes />
    </CustomerProvider>
  );
}

export default App;