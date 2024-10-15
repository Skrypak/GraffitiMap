import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full h-12 flex items-center">
            <div className='w-1/12 h-full flex items-center justify-center'>
                Logo (placeholder)
            </div>
            <div className='w-full h-full flex justify-evenly items-center'>
                <Link href="/" className="w-1/6 flex items-center justify-center h-full hover:bg-slate-400 transition-all">
                    Main
                </Link>
                <Link href="/map" className="w-1/6 flex items-center justify-center h-full hover:bg-slate-400 transition-all">
                    Map
                </Link>
                <Link href="/about" className="w-1/6 flex items-center justify-center h-full hover:bg-slate-400 transition-all">
                    About Us
                </Link>
                
            </div>
        </nav>
    );
}