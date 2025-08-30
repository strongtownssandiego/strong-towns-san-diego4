'use client';
import { useRouter } from 'next/navigation';

const Newsletter = () => {
    const router = useRouter();
    if (typeof window !== "undefined")  // avoid dev mode error in log from double-invoking
        router.push("https://strongtownssandiego.fillout.com/newsletter");
}

export default Newsletter
