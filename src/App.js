import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import './App.scss';
import { CartProvider } from './Context/CartContext';
import { useLoginContext } from './Context/LoginContext';
import { SearchProvider } from './Context/SearchContext';
import AppRouter from './router/AppRouter';


const App = () => {
  //En app hay gran parte de la logica. Movi el loginProvider a index.js (cometi sacrilegio) para poder usarlo en app. Sino tira error
  const {user, setUser} = useLoginContext()
  console.log(user)
  //Hacemos un useEffect para obtener el usuario con la sesion activa, seteandolo con el useState de LoginContext
  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged
    (userAuth => {
      const user = {
        uid: userAuth.uid,
        email: userAuth.email
      }
      //Con el if chequeamos si el usuario ya incio sesion, y lo seteamos
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    //Utilizamos cleanup function para evitar memory leaks
    return unsubscribe()
  }, [])

  return (
      <CartProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </CartProvider>
  );
}

export default App;
