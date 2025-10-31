"use client";

import Image from "next/image";
import { useEffect } from "react";

function useSetVh() {
  useEffect(() => {
    const set = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);
}

export default function Hero4000() {
  useSetVh();

  return (
    <section>
      {/* マスク＆背景レイヤー */}
      <div
        aria-label="メインビジュアル"
        className={`
          relative w-full
          md:portrait:h-[calc(var(--vh,1vh)*100)]
          md:portrait:max-h-[690px]
          bg-gradient-to-br from-[#001c7b] via-[#005ac8] to-[#00a7e1]
          hidden
          lg:block
        `}
      >
        {/* マスク*/}
        <div
          className="
            relative overflow-hidden
            [mask-repeat:no-repeat] [mask-position:100%_0%] [mask-size:cover]
            md:[mask-image:url('/img/Hero4000_BackgroundMask_1.svg')]
            max-md:[mask-image:url('/img/Hero4000_BackgroundMask_1.svg')]
          "
        >
          {/* 背景画像（PC） */}
          <div className="hidden md:block relative w-full h-[58vw] max-h-[690px]">
            <Image
              src="/img/Hero4000_Background_1.jpg"
              alt=""
              priority
              fill
              className="object-cover object-center"
              sizes="(min-width:1024px) 100vw, 100vw"
            />
          </div>

          {/* 背景画像（SP） */}
          <div className="md:hidden relative w-full h-[120vw]">
            <Image
              src="/img/Hero4000_Background_1.jpg"
              alt=""
              priority
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        </div>

        {/* テキスト */}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-[1200px] h-full px-3 md:px-8">
            <div
              className="absolute bottom-[18%] md:bottom-[80px] text-white
              md:left-[100px]
              max-md:left-5 max-md:right-5"
            >
              <h1
                className="
                  font-extrabold 
                  text-[40px] 
                  md:text-[78px] 
                  transform-[skewX(-12deg)]
                  [font-feature-settings:'palt']
                "
              >
                企業に、絆を。
              </h1>

              <p
                className="mt-4 text-[15px] md:text-[14px] text-white/95 ml-15 mt-[30px] font-semibold transform-[skewX(-12deg)]
"
              >
                企業・団体のお客様の様々な課題やニーズに対し、
                <br className="hidden md:block" />
                JTBだからこそ提供できるサービスについてご紹介します。
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="
                    h-[60px] w-[250px] px-6 inline-flex items-center justify-center
                    bg-white text-[#000000]
                    rounded-[10px]
                    text-[14px] font-bold
                    tracking-[0.1em]
                    hover:opacity-95 transition
                    shadow-[0_1px_2px_rgba(0,0,0,.12)]
                  "
                >
                  資料請求する
                </a>
                <a
                  href="#"
                  className="
                    h-[60px] w-[250px] px-6 inline-flex items-center justify-center
                    bg-[#e60012] text-white
                    rounded-[10px]
                    tracking-[0.1em]
                    text-[14px] font-semibold
                    hover:opacity-90 transition
                    shadow-[0_1px_2px_rgba(0,0,0,.12)]
                  "
                >
                  まずは相談する
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
