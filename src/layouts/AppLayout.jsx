import { Outlet} from 'react-router-dom';
import {useAuth} from  '../customHooks/useAuth' 
import AppHeader from '../components/header/AppHeader';
export default function AppLayout() {

  const {user, authLoading} = useAuth();
  console.log(user, authLoading);

  if (authLoading) {
    console.log("Está cargando");
    return <p>Cargando Aplicación</p>;
  }

  return(
    <>
      <AppHeader
        user={user}
      />

      <main>
        <Outlet/>
      </main>
    </>
  )
}