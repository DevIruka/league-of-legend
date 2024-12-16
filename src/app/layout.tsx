import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers/RQProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "리그 오브 레전드 정보 앱",
  description: "롤 데이터를 제공해줍니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-row justify-around bg-gray-800 text-white py-4 fixed top-0 w-full z-10">
          <Link href={"/"}>홈</Link>
          <Link href={"/champions"}>챔피언 목록</Link>
          <Link href={"/items"}>아이템 목록</Link>
          <Link href={"/rotation"}>챔피언 로테이션</Link>
        </header>
        <Providers>{children}</Providers>
        <footer className="bg-gray-800 p-4 mt-8 w-full text-sky-50">
          This project is not endorsed by Riot Games and does not reflect the
          views or opinions of Riot Games or anyone officially involved in
          producing or managing Riot Games properties. Riot Games and all
          associated properties are trademarks or registered trademarks of Riot
          Games, Inc.
        </footer>
      </body>
    </html>
  );
}
