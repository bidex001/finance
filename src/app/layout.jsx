import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProvider from './context/userContext'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Commonwealth Global Grant",
  description: "Official Commonwealth Global Grant website",
  openGraph: {
    title: "Commonwealth Global Grant",
    description: "Scholarships and grant opportunities.",
    url: "https://commonwealthglobalgrant.org",
    siteName: "Commonwealth Global Grant",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body>
       <AppProvider>
        {children}
      </AppProvider>
     </body>
    </html>
  );
}
