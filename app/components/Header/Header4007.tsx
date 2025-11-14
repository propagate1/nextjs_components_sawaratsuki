"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Header4007: LITEVIEW Team ヘッダー再現
// 要件: Tailwindのみ / 画像は liveteam の logo.png を使用 / メニューは HTML 構造を忠実再現
// ブレークポイント: 元CSSは 1200px を境界。Tailwind 任意メディアクエリで再現 (min-[1200px], max-[1199px])。

const MENU_ITEMS: {
  label: string;
  href: string;
  external?: boolean;
  ruby?: { base: string; rt: string };
}[] = [
  { label: "機能", href: "javascript:void(0)" },
  { label: "事例", href: "javascript:void(0)" },
  { label: "料金", href: "javascript:void(0)" },
  {
      label: "無料オンライン相談",
    href: "https://team.liteview.jp/team/consulting",
  },
  {
      label: "リファラル採用",
    href: "https://refer.liteview.jp/",
    external: true,
    ruby: { base: "リファラル採用", rt: "LITEVIEWRefer" },
},
  {
      label: "新規事業MVP",
    href: "https://frontier.liteview.jp/",
    external: true,
    ruby: { base: "新規事業MVP", rt: "LITEVIEWFrontier" },
},
{ label: "お問い合わせ", href: "javascript:void(0)" },
{ label: "お役立ち資料", href: "javascript:void(0)" },
];

// スクロールロック（モバイルメニュー展開時）
function useScrollLock(active: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [active]);
}

export default function Header4007() {
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  return (
    <header
      id="ltv-corp-biz_header"
      className="w-full max-[1199px]:fixed max-[1199px]:top-0 max-[1199px]:left-0 bg-white z-[99999]"
    >
      <div className="header__inner max-[1199px]:p-4 min-[1200px]:px-8 flex items-center justify-between gap-8">
        {/* 上部 左: ロゴ + メニュー */}
        <div className="header__top inline-block align-middle whitespace-nowrap min-[1200px]:font-[0] w-auto max-[1199px]:w-[40%] flex items-end">
          <a
            href="https://team.liteview.jp/team"
            aria-current="page"
            className="header__top-image inline-block align-middle pr-0 min-[1200px]:pr-8"
          >
            <Image
              src="/img/Hero4007_Logo_1.png" // liveteam/live_files/logo.png を public/img へコピー
              alt="LITEVIEW"
              width={130}
              height={40}
              className="min-[1200px]:w-[130px] max-[1199px]:w-[104px] min-[1200px]:-mb-5"
              priority
            />
          </a>
          {/* デスクトップメニュー */}
          <nav className="header__top-menu horizontal-menu max-[1199px]:hidden inline-block align-middle whitespace-nowrap">
            {MENU_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`inline-block text-[14px] font-bold pr-4 last:pr-0 align-bottom relative ${
                  item.ruby ? "pt-3" : "pt-7"
                }`}
                style={{ verticalAlign: "bottom" }}
              >
                {item.ruby ? (
                  <span className="block relative">
                    <span className="absolute left-1/2 -translate-x-1/2 -top-3 min-[1200px]:-top-4 text-[10px] min-[1200px]:text-[11px] font-normal text-gray-500 leading-none whitespace-nowrap">
                      {item.ruby.rt}
                    </span>
                    <span className="block text-[14px] min-[1200px]:text-[15px] font-bold leading-tight">
                      {item.ruby.base}
                    </span>
                  </span>
                ) : (
                  <span className="block text-[14px] min-[1200px]:text-[15px] font-bold leading-tight">
                    {item.label}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* 右側 ボタン群（PC表示） */}
        <div className="header__bottom inline-block align-middle text-right ml-auto whitespace-nowrap max-[1199px]:hidden">
          <a
            id="btn_support_header"
            href="https://team.liteview.jp/team/contact"
            className="inline-block font-bold text-[14px] bg-[#f1f6f6] rounded-[104px] transition-all duration-300 px-[27px] py-4 text-[#23333b] hover:text-white hover:bg-[#23333b] relative mt-[1.75rem] align-bottom"
          >
            <span className="block text-[14px] min-[1200px]:text-[15px] font-bold leading-tight">
              お問い合わせ
            </span>
          </a>
          {/* 2つ目ボタン (元HTMLでは存在しないので省略) */}
        </div>

        {/* ハンバーガー (SP) */}
        <div className="header__hamberger sp max-[1199px]:absolute max-[1199px]:top-2 max-[1199px]:right-4 z-[999999999999] min-[1200px]:hidden">
          <a
            id="btn_support_header"
            href="https://team.liteview.jp/team/contact"
            className="inline-block font-bold text-[14px] bg-[#f1f6f6] rounded-[104px] transition-all duration-300 px-[27px] py-4 text-[#23333b] hover:text-white hover:bg-[#23333b] relative align-bottom"
          >
            <span className="block text-[14px] min-[1200px]:text-[15px] font-bold leading-tight">
              お問い合わせ
            </span>
          </a>
          <button
            aria-label="メニューを開閉"
            onClick={() => setOpen((o) => !o)}
            className={`openbtn1 relative bg-white w-[50px] h-[50px] rounded-[5px] ${
              open ? "active" : ""
            }`}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`absolute left-[14px] h-[3px] rounded-[2px] bg-[#23333b] transition-all duration-300 ${
                  i === 0
                    ? open
                      ? "top-[18px] left-[18px] translate-y-[6px] -rotate-45 w-[30%]"
                      : "top-[15px] w-[52%]"
                    : i === 1
                    ? open
                      ? "opacity-0 top-[23px] w-[52%]"
                      : "top-[23px] w-[52%]"
                    : open
                    ? "top-[30px] left-[18px] -translate-y-[6px] rotate-45 w-[30%]"
                    : "top-[31px] w-[52%]"
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* モバイル: 展開メニュー */}
      <div
        className={`header__top-menu vertical-menu max-[1199px]:block fixed left-0 bg-white w-full transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        } top-[66px] z-[9999] min-[1200px]:hidden`}
      >
        {MENU_ITEMS.map((item, idx) => (
          <a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            className={`block text-[16px] font-bold py-5 px-4 text-center ${
              idx === MENU_ITEMS.length - 1 ? "pb-10" : ""
            }`}
          >
            {item.ruby ? (
              <ruby>
                {item.ruby.base}{" "}
                <rt className="text-[60%] tracking-[2px]">
                  {item.ruby.rt}
                </rt>
              </ruby>
            ) : (
              item.label
            )}
          </a>
        ))}
      </div>

      {/* モバイル: 下部 CV ボタン */}
      <a
        id="btn_document_top_fv_sp"
        href="https://team.liteview.jp/team/document"
        className="header__bottom-cv max-[1199px]:text-center max-[1199px]:w-[90%] max-[1199px]:fixed max-[1199px]:bottom-5 max-[1199px]:left-1/2 max-[1199px]:-translate-x-1/2 font-bold text-white text-[16px] bg-[#23333b] py-6 px-4 rounded-[104px] box-border z-[999999] min-[1200px]:hidden"
      >
        資料をダウンロード
        <span className='absolute top-7 right-9 w-[6px] h-[11px] bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAQAAAApD0ySAAAAlklEQVR42p3TUQ2DQBCEYSRUAhKQgoNWAg7uHNw5AEfFARJWwt/0oWmyu9BJ5/lLNpvMDO9QMIw2XIXGJ09u58z45mC8YAKkggY3B40phz3AWTsNiwpLDhcVzpiDLYdTgGsORw4HqwZNZAqCrrywRXQPqGeInz9S/kOPiJojlqFVqCVNKLkymcj2iGJrdzfnMBjDqOfoBXZ22anA8GcmAAAAAElFTkSuQmCC")] bg-no-repeat bg-contain'></span>
      </a>
    </header>
  );
}
