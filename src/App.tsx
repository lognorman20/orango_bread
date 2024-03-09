import './App.css';
import Container from '@mui/material/Container';
import ProductList from './Product/ProductList';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <ProductList />
      </Container>
    </div>
  );
}

export default App;
