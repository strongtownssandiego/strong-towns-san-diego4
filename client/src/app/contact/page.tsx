'use client';

import { useRouter } from 'next/navigation';

const Contact = () => {
  const router = useRouter();
  if (typeof window !== "undefined")  // avoid dev mode error in log from double-invoking
    router.push("https://strongtownssandiego.fillout.com/contact");
}

export default Contact
