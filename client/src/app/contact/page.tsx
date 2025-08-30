'use client';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  if (typeof window !== "undefined")
    router.push('https://share-na2.hsforms.com/18bwXAlo4TrqFQnxcVBLYYA40bup4');
}

export default Contact
