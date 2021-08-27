import './App.css';
import Child from './child';
import {TransactionProvider} from './transContext';

const App = () => {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}

export default App;