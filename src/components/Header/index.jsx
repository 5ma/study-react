import classes from 'src/components/Header/Header.module.css';
import Link from 'next/link';

const NAV_ITEMS = [
  {
    href: '/',
    label: 'Index',
  },
  {
    href: '/about',
    label: 'About',
  },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link href={item.href} className={classes.anchor} key={item.href}>
            {item.label}
          </Link>
        );
      })}
    </header>
  );
};
