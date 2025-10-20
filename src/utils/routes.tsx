
interface Route {
    title: string;
    href: string;
  }

export const routes: Route[] = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Menu',
      href: '/menu',
    },
    {
      title: 'Reservation',
      href: '/reservations',
    },
    {
        title: 'Order Online',
        href: '/order',
      },
      {
        title: 'Login',
        href: '/login',
      },
  ];