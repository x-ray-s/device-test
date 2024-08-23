import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./ui/nav-links";

const inter = Inter({ subsets: ["latin"] });

// 为每个页面定义特定的元数据
const pageMetadata: { [key: string]: Metadata } = {
  '/': {
    title: "Home - Input Device Testing",
    description: "Test various input devices on your browser",
  },
  '/keyboard': {
    title: "Keyboard Test - Input Device Testing",
    description: "Test your keyboard input and functionality",
  },
  '/camera': {
    title: "Camera Test - Input Device Testing",
    description: "Test your camera and video input capabilities",
  },
  '/microphone': {
    title: "Microphone Test - Input Device Testing",
    description: "Test your microphone and audio input functionality",
  },
  '/audio': {
    title: "Audio Test - Input Device Testing",
    description: "Test your audio output and playback capabilities",
  },
};


// 动态生成metadata
export const generateMetadata = ({ pathname }: { pathname: string }): Metadata => {
  return pageMetadata[pathname] || {
    title: "Input Device Testing",
    description: "Test various input and output devices on your browser",
  };
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
