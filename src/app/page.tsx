import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Device Testing Tools
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Easily test your keyboard, camera, microphone, and audio devices
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        {[
          { href: "/keyboard", title: "Keyboard Test", description: "Check keyboard key responses", icon: "⌨️" },
          { href: "/camera", title: "Camera Test", description: "Verify camera functionality", icon: "📷" },
          { href: "/microphone", title: "Microphone Test", description: "Test audio input quality", icon: "🎙️" },
          { href: "/audio", title: "Audio Test", description: "Check speaker output", icon: "🔊" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
            <span className="mt-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform inline-block">
              Start Test →
            </span>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        <p>© 2024 Device Testing Tools. All rights reserved.</p>
      </footer>
    </main>
  );
}