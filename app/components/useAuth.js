import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const useAuth = () => {

    const { push } = useRouter();

    useEffect(() => {
        const login = localStorage.getItem('login');
        if (!login) {
            push('/login');
        }
    }, []);
};

export default useAuth;
