'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Navigation() {
    const pathname = usePathname();
    const showNavigation = pathname !== '/';

    return showNavigation && (
        <nav className="w-full bg-gray-100 text-gray-800 p-4 shadow-md dark:bg-gray-800 dark:text-gray-100">
            <ul className="flex justify-center space-x-4">
                {[
                    { href: '/', label: 'Home' },
                    { href: '/keyboard', label: 'Keyboard' },
                    { href: '/camera', label: 'Camera' },
                    { href: '/microphone', label: 'Microphone' },
                    { href: '/audio', label: 'Audio' },
                ].map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`hover:text-gray-600 ${pathname === href ? 'font-bold text-blue-600' : ''
                                }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}