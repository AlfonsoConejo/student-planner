import { Outlet} from 'react-router-dom';
import { useAuth } from  '../customHooks/useAuth' 
import AppHeader from '../components/header/AppHeader';
import Sidebar from '../components/Sidebar'
export default function AppLayout() {

  const {user, setUser, authLoading} = useAuth();
  console.log(user, authLoading);

  if (authLoading) {
    console.log("Está cargando");
    return <p>Cargando Aplicación</p>;
  }

  return(
    <div className="min-h-dvh flex flex-col">
      <AppHeader
        user={user}
        setUser={setUser}
        authLoading={authLoading}
      />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex flex-col flex-1 text-white bg-gray-900 px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}