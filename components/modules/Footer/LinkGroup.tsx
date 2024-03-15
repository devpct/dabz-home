import Link from 'next/link';

const LinkGroup = ({ title, links }) => (
  <div>
    <p className="text-[18px] font-bold tracking-wide text-[#000929]">
      {title}
    </p>
    <ul className="mt-8 space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="transition-colors duration-300 hover:text-deep-purple-accent-400">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkGroup;
