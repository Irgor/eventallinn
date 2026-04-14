import Link from "next/link";


const Nav = () => {
    return (
        <nav className="w-10/12 h-16 m-auto mt-10 bg-black/10 rounded-xl backdrop-blur-xl border border-white/10 flex flex-row items-center justify-between px-8">
            <h1 className="text-2xl font-bold"><Link href="/">eventallinn</Link></h1>

            <div className="flex flex-row items-center gap-4">
                <Link className="text-white/80 hover:text-white transition-colors" href="/">Home</Link>
                <Link className="text-white/80 hover:text-white transition-colors" href="/events">Events</Link>
                <Link className="text-white/80 hover:text-white transition-colors" href="/about">About</Link>
            </div>
        </nav>
    );
};

export default Nav;