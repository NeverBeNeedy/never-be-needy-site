import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-charcoal p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <Image src="/logo.jpg" alt="Never Be Needy.com Logo" width={200} height={50} priority />
            </a>
          </Link>
          <div className="space-x-4">
            <Link href="/" legacyBehavior><a className="hover:text-red-500">Home</a></Link>
            <Link href="/about" legacyBehavior><a className="hover:text-red-500">About</a></Link>
            <Link href="/community" legacyBehavior><a className="hover:text-red-500">Community</a></Link>
            <Link href="/blog" legacyBehavior><a className="hover:text-red-500">Blog</a></Link> {/* Added Blog Link */}
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {children}
      </main>
      <footer className="bg-charcoal p-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Never Be Needy.com. All rights reserved.</p>
        <p>No pity. No panic. Just power.</p>
      </footer>
    </div>
  );
}

