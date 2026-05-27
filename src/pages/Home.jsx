import {useAuth} from  '../customHooks/useAuth' 
import AppHeader from '../components/header/AppHeader';
import MateriasApp from '../components/MateriasApp';

export default function Home() {

    const {user, authLoading} = useAuth();
    console.log(user, authLoading);
    return (
        <>
        <AppHeader/>
        <MateriasApp/>
        </>
    );
}