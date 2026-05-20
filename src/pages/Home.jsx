import {useAuth} from  '../customHooks/useAuth' 

export default function Home() {

    const {user, authLoading} = useAuth();
    console.log(user, authLoading);
    return (
        <>
        </>
    );
}