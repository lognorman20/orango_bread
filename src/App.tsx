import './App.css';
import ProductList from './Product/ProductList';
import Lead from './Lead';
import AboutUs from './AboutUs';

import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <Container maxWidth="xl">
        <Lead />
        <ProductList />
        <AboutUs />
      </Container>
    </div>
  );
}

export default App;
