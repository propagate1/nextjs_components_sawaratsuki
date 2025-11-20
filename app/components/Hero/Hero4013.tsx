"use client";

import React from "react";
import Image from "next/image";
import Header4013 from "../Header/Header4013";

export default function Hero4013() {
  return (
    <section className="relative w-full h-screen bg-[#d4b896] overflow-hidden font-serif">
      {/* 背景画像 - 料理2つ */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/img/Hero4013_Background_1.png"
          alt="料理"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 中央ロゴ */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2  w-[400px] h-[400px]">
        <Image
          src="/img/Hero4013_Background_2.png"
          alt="串@中仲ロゴ"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* 左上のテキスト情報 - PC表示 */}
      <div className="hidden md:block absolute top-22 left-30 text-[#3d2817] space-y-1 text-xs font-[family-name:var(--font-noto-serif-jp)]">
        <p className="leading-relaxed">
          山形市・山形駅の居酒屋「創食厨房なかなか」一人飲み・宴会に串
        </p>
        <p>
          揚げ・串焼き・もつ煮が人気
        </p>
        
        {/* Instagram と LINE */}
        <div className="flex items-start gap-2 mt-5">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div className="flex flex-col font-sans ml-5">
            <Image src="/img/Hero4013_Background_3.png" alt="LINE" width={111} height={37} />
          </div>
        </div>

        {/* 地図 / 新着情報 ボタン */}
        <div className="inline-flex border border-[#3d2817] mt-5">
          <button className="px-4 py-1 text-[11px] hover:bg-[#3d2817] hover:text-white transition-colors">
            地図
          </button>
          <div className="w-px bg-[#3d2817] transform rotate-12 my-1"></div>
          <button className="px-4 py-1 text-[11px] hover:bg-[#3d2817] hover:text-white transition-colors">
            新着情報
          </button>
        </div>
      </div>

      {/* モバイル - 左上の縦書きテキスト */}
      <div className="md:hidden absolute top-6 left-6 text-[#3d2817] font-[family-name:var(--font-noto-serif-jp)]">
        <div className="flex flex-col text-xs leading-relaxed" style={{ writingMode: "vertical-rl" }}>
          <p>山形市・山形駅の居酒屋「創食厨房なかなか」一人飲み・宴会に串</p>
          <p>揚げ・串焼き・もつ煮が人気</p>
        </div>
      </div>

      {/* 右上のご予約・お問い合わせ - PC表示 */}
      <div className="hidden md:block absolute top-20 right-40 text-[#3d2817] min-w-[300px]">
        <div className="border-t border-b border-[#3d2817] py-3 mb-4 text-center px-3">
          <p className="text-[14px] tracking-[0.2em] font-[family-name:var(--font-noto-serif-jp)] font-bold">ご予約・お問い合わせ</p>
          <a
            href="tel:023-625-3336"
            className="text-[24px] font-bold tracking-[0.1em] hover:opacity-70 transition-opacity flex items-center justify-center gap-2 font-[family-name:var(--font-noto-serif-jp)] tabular-nums"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>023-625-3336</span>
          </a>
        </div>
        
        {/* ヘッダーメニューをここに配置 */}
        <Header4013 />
      </div>

      {/* 下部のスクロールインジケーター（オプション） - PC */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#3d2817]">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-xs tracking-widest">SCROLL</p>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* モバイル用ヘッダー（固定フッター） */}
      <div className="md:hidden">
        <Header4013 />
      </div>
    </section>
  );
}

