import Link from 'next/link';

export default function NavBar() {
    return (
            <nav className="flex w-full items-center">
                <Link href="/" className="w-full h-full hover:bg-slate-400">
                    Page 1
                </Link>
                <Link href="/page2" className="w-full h-full hover:bg-slate-400">
                    Page 2
                </Link>
                <Link href="/page3" className="w-full h-full hover:bg-slate-400">
                    Page 3
                </Link>
            </nav>
    );
}