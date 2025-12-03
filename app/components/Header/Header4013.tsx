"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header4013() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "ホーム" },
    { id: "こだわり", label: "こだわり" },
    { id: "products", label: "お品書き◎" },
    { id: "party", label: "宴会・コース" },
    { id: "yamagata", label: "山形の日本酒" },
    { id: "空間", label: "空間" },
    { id: "こんな時に", label: "こんな時に" },
    { id: "info", label: "店舗情報" },
  ];

  return (
    <>
      {/* PC用ヘッダー */}
      <nav className="items-start justify-center gap-3 font-serif hidden md:flex">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`
              flex items-center justify-center px-1
              text-[#3d2817] hover:opacity-70 transition-all duration-300
              ${activeMenu === item.id ? "opacity-70" : ""}
            `}
            onClick={() => setActiveMenu(item.id)}
          >
            {/* 縦書きテキスト */}
            <span
              className="text-[16px] tracking-wide whitespace-pre-line text-center leading-tight font-[family-name:var(--font-noto-serif-jp)]"
              style={{ writingMode: "vertical-rl" }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* モバイル用フッターヘッダー */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#351401] z-[60]">
        <div className="grid grid-cols-3 text-white">
          {/* TEL */}
          <a href="tel:023-625-3336" className="flex flex-col items-center justify-center py-4 hover:bg-[#351401] transition-colors">
            <svg
              className="w-6 h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span className="text-xs">TEL</span>
          </a>

          {/* MAP */}
          <a href="#map" className="flex flex-col items-center justify-center py-4 hover:bg-[#351401] transition-colors">
            <svg
              className="w-6 h-6 mb-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-xs">MAP</span>
          </a>

          {/* MENU / CLOSE */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`flex flex-col items-center justify-center py-4 transition-colors ${
              menuOpen ? 'bg-[#D9BC9A]' : 'hover:bg-[#351401]'
            }`}
          >
            {menuOpen ? (
              <>
                <svg
                  className="w-6 h-6 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-xs">CLOSE</span>
              </>
            ) : (
              <>
                <svg
                  className="w-6 h-6 mb-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="text-xs">MENU</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニューオーバーレイ */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/90 z-[55] flex flex-col transition-opacity duration-300 ease-in-out">
          {/* 上部メニューエリア */}
          <div className="flex-1 flex flex-col items-center justify-start text-white font-[family-name:var(--font-noto-serif-jp)] px-8 pt-20 pb-8 overflow-y-auto">
            {/* ヘッダーメニュー */}
            <nav className="flex flex-row flex-wrap items-start justify-center gap-6 mb-6">
              <a href="#home" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>ホーム</a>
              <a href="#こだわり" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>こだわり</a>
              <a href="#空間" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>空間</a>
              <a href="#yamagata" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>山形の日本酒</a>
              <a href="#party" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>宴会・コース</a>
              <a href="#products" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>お品書き◎</a>
              <a href="#こんな時に" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>こんな時に</a>
              <a href="#info" className="text-lg tracking-wider hover:opacity-70 transition-opacity" style={{ writingMode: "vertical-rl" }} onClick={() => setMenuOpen(false)}>店舗情報</a>
            </nav>

            {/* 地図 / 新着情報 */}
            <div className="inline-flex border border-white mt-4">
              <button className="px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                地図
              </button>
              <div className="w-px bg-white transform rotate-12 my-1"></div>
              <button className="px-6 py-2 text-sm hover:bg-white hover:text-black transition-colors">
                新着情報
              </button>
            </div>

            {/* Instagram と LINE */}
            <div className="flex items-center gap-6 mt-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  className="w-12 h-12"
                  fill="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div className="text-white">
                <Image src="/img/Hero4013_Background_3.png" alt="LINE" width={111} height={37} className="invert" />
              </div>
            </div>
          </div>

          {/* 下部画像エリア */}
          <div className="relative w-full h-64 mb-16">
            <Image 
              src="/img/Hero4013_Background_4.png" 
              alt="店舗画像" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
}

