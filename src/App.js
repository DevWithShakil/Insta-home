import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Authentication from './Authentication/Authentication';
import Homepage from './Homepage';
import { useEffect } from 'react';
import { auth } from "./firebase";
import { loginUser, setLoading } from './features/userSlice';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { // Use => instead of =
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);

  return (
    <div className="app">
      {user ? <Homepage /> : <Authentication />}
    </div>
  );
}

export default App;
