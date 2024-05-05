import { activateAccount } from '@/services/auth.service';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const useEmailVerification = () => {
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [hash, setHash] = useState<string | null>(null);

    useEffect(() => {
        const hashParam = searchParams.get('hash');
        if (hashParam) {
            setHash(hashParam);
        }
    }, [searchParams]);

    useEffect(() => {
        const verifyEmail = async () => {
            if (hash) {
                try {
                    setLoading(true);
                    await activateAccount(hash);
                    setLoading(false);
                } catch (error) {
                    console.error("Error activating account:", error);
                    setLoading(false);
                }
            }
        };

        verifyEmail();
    }, [hash]);

    return { loading };
};

export default useEmailVerification;
