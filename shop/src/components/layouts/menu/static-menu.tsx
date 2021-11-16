import Link from '@components/ui/link';
import { ROUTES } from '@lib/routes';
import { useTranslation } from 'next-i18next';

const headerLinks = [
  { href: ROUTES.HELP, label: 'nav-menu-faq' },
  { href: ROUTES.CONTACT, label: 'nav-menu-contact' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="font-normal text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
          >
            {t(label)}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
