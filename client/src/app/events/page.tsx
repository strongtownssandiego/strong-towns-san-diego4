'use client';
import { useRouter } from 'next/navigation';

const Events = () => {
  const router = useRouter();
  if (typeof window !== "undefined")  // avoid dev mode error in log from double-invoking
    router.push("https://www.meetup.com/strong-town-san-diego/?eventOrigin=your_groups");
}

export default Events