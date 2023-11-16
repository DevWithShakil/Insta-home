import { useSelector } from 'react-redux';
import './App.css';
import Authentication from './Authentication/Authentication';
import Homepage from './Homepage';

function App() {
  const user = useSelector(state => state.data.user.user)
 
  return (
    <div className="app">
      {user ? (<Homepage/>):(<Authentication />)}

      
      
    </div>
  );
}

export default App;
