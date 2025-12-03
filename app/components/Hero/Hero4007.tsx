"use client";
import React from "react";
import Image from "next/image";

// Hero4007: LITEVIEW Team FV (main section + ロゴマルチスクロール)
// 1200px ブレークポイントを任意メディアクエリで再現。Tailwindユーティリティのみ使用。

// ロゴ画像列（001〜007を2回繰り返し）
const LOGO_FILES = [
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
  "Hero4007_Logo_1.png",
];

export default function Hero4007() {
  return (
    <section
      id="liteview-register"
      className="main pt-[67px] px-10 max-[1199px]:pb-0"
    >
      <div className="main__inner bg-[#f1f6f6] rounded-[40px] relative max-[1199px]:p-10 max-[1199px]:px-[25px] min-[1200px]:p-[140px] min-[1200px]:px-[65px]">
        {/* テキスト */}
        <div className="main__text max-w-[50%] max-[1199px]:max-w-full">
          <div className="main__text-cap text-[#717171] max-[1199px]:text-[14px] min-[1200px]:text-[16px] pb-4">
            社員の定着率アップと
            <br className="md:hidden block" />
            業務効率化の実現
          </div>
          <div className="main__text-main font-bold leading-[64px] min-[1200px]:text-[48px] max-[1199px]:text-[6vw] max-[1199px]:leading-snug pb-0 min-[1200px]:pb-12">
            低予算で
            <br />
            社内ポータルを即構築
            <br />
            <span className="block">
              <span className="relative inline-block">
                <span className="absolute left-1/2 -translate-x-1/2 lg:-top-5 text-[13px] min-[1200px]:text-[15px] font-bold tracking-[0.15em] text-gray-700 ">
                  ライトビュー チーム
                </span>
                <span className="block text-[2.5rem] min-[1200px]:text-[3rem] font-bold leading-tight pt-[10px] ">
                  LITEVIEW Team
                </span>
              </span>
            </span>
          </div>
          {/* ボタン */}
          <div className="main__text-btn hidden lg:block flex-col gap-4 min-[1200px]:flex-row min-[1200px]:gap-6">
            <a
              id="btn_document_top_fv"
              className="main__text-btn-contents inline-block font-bold text-white text-[16px] bg-[#23333b] border border-[#23333b] rounded-[104px] leading-none relative transition-all duration-300 px-9 pr-14 py-6 hover:bg-white hover:text-[#23333b]"
            >
              2025年12月上旬正式オープン予定
              <span className='absolute top-7 right-9 w-[6px] h-[11px] bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAQAAAApD0ySAAAAlklEQVR42p3TUQ2DQBCEYSRUAhKQgoNWAg7uHNw5AEfFARJWwt/0oWmyu9BJ5/lLNpvMDO9QMIw2XIXGJ09u58z45mC8YAKkggY3B40phz3AWTsNiwpLDhcVzpiDLYdTgGsORw4HqwZNZAqCrrywRXQPqGeInz9S/kOPiJojlqFVqCVNKLkymcj2iGJrdzfnMBjDqOfoBXZ22anA8GcmAAAAAElFTkSuQmCC")] bg-no-repeat bg-contain'></span>
            </a>
            <div>
              <a
                id="btn_document_top_fv_contact"
                href="https://team.liteview.jp/team/consulting"
                className="inline-block font-bold text-[#23333b] text-[16px] relative min-[1200px]:ml-10 mt-10"
              >
                無料相談のご予約
                <span className='absolute top-1 -right-5 w-[6px] h-[11px] bg-[url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAcCAQAAAApD0ySAAAAlklEQVR42p3TUQ2DQBCEYSRUAhKQgoNWAg7uHNw5AEfFARJWwt/0oWmyu9BJ5/lLNpvMDO9QMIw2XIXGJ09u58z45mC8YAKkggY3B40phz3AWTsNiwpLDhcVzpiDLYdTgGsORw4HqwZNZAqCrrywRXQPqGeInz9S/kOPiJojlqFVqCVNKLkymcj2iGJrdzfnMBjDqOfoBXZ22anA8GcmAAAAAElFTkSuQmCC")] bg-no-repeat bg-contain invert min-[1200px]:top-1 min-[1200px]:-right-6'></span>
              </a>
            </div>
          </div>
        </div>

        {/* 画像領域 */}
        <div className="main__image absolute top-0 bottom-0 right-0 text-right w-1/2 h-full rounded-r-[40px] overflow-hidden max-[1199px]:static max-[1199px]:w-full max-[1199px]:h-auto max-[1199px]:text-center">
          <div className="main__image-video w-full h-full overflow-hidden flex items-center justify-center">
            <Image
              src="/img/Hero4007_Background_1.png"
              alt=""
              width={680}
              height={600}
              className="max-w-full max-h-[600px]"
              priority
            />
          </div>
        </div>
      </div>

      {/* ロゴスライダー */}
      <section className="logo mx-auto py-8 text-center">
        <div className="overflow-hidden w-full">
          {/* アニメーション: CSS原本は 60s linear infinite moveSlideshow。Tailwind 任意 keyframe 未定義のため inline utilityで再現するため 'animate-[marquee_60s_linear_infinite]' を使用するには tailwind.config 拡張が必要。ここでは JS fallback で translateX を循環。 */}
          <Marquee duration={60000}>
            {Array(2)
              .fill(0)
              .flatMap(() => LOGO_FILES)
              .map((file, i) => (
                <div
                  key={i}
                  className="logo-image inline-block mx-[50px] max-[1199px]:mx-[20px]"
                >
                  <Image
                    src={`/img/${file}`} // liveteam/live_files/001.png〜007.png を public/img へコピー
                    alt=""
                    width={120}
                    height={40}
                    className="h-[40px] w-auto"
                  />
                </div>
              ))}
          </Marquee>
        </div>
      </section>
    </section>
  );
}

// シンプルな marquee コンポーネント (Tailwindクラス + requestAnimationFrame)
function Marquee({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start: number | null = null;
    const totalWidth = el.scrollWidth / 2; // 2回繰り返ししている前提
    function frame(timestamp: number) {
      if (!el) return;
      if (start == null) start = timestamp;
      const progress = ((timestamp - start) % duration) / duration;
      const translate = -totalWidth * progress;
      el.style.transform = `translateX(${translate}px)`;
      requestAnimationFrame(frame);
    }
    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, [duration]);
  return (
    <div ref={ref} className="flex w-max min-w-[200%] will-change-transform">
      {children}
    </div>
  );
}
