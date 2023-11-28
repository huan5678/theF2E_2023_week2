import type {Metadata} from 'next';
import '@/app/globals.css';
import NavLink from '@/components/NavLink';

export const metadata: Metadata = {
  title: '2020 開票地圖',
  description: 'The F2E 2023 - Week 2 - 開票地圖',
};

const router = [
  {
    title: '第15任 總統副總統大選',
    pathname: '/',
  },
  {
    title: '第10任 立法委員選舉',
    pathname: '/legislator',
  },
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f5]">
        <header className="bg-primary">
          <div className="container pb-4 pt-7">
            <h2 className="font-bold leading-tight text-white">{metadata.title?.toString()}</h2>
          </div>
        </header>
        <nav className="container flex gap-5 pt-8 md:pt-10">
          {router.map((item, index) => {
            return <NavLink href={item.pathname} title={item.title} key={index} />;
          })}
        </nav>
        {children}
      </body>
    </html>
  );
}
