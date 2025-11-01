"use client";

import { section } from "framer-motion/client";
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
          md:block
        `}
      >
        {/* マスク*/}
        <div
          className="
            relative overflow-hidden
            [mask-repeat:no-repeat] [mask-position:100%_0%] [mask-size:cover]
            md:[mask-image:url('/img/Hero4000_BackgroundMask_1.svg')]
            max-md:[mask-image:url('/img/Hero4000_BackgroundMask_1.svg')]
            md:[mask-size:cover] md:[-webkit-mask-size:cover]
            md:[mask-position:right_top] md:[-webkit-mask-position:right_top]
            lg:[mask-size:cover] lg:[-webkit-mask-size:cover]
            lg:[mask-position:100%_0%] lg:[-webkit-mask-position:100%_0%]
            h-full
          "
        >
          {/* 背景画像（PC） */}
          <div className="hidden md:block relative w-full h-[58vw] h-[690px]">
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

        {/* テキスト*/}
        <div className="absolute inset-0">
          <div className="mx-auto max-w-[1200px] h-full px-3 md:px-8">
            <div
              className="absolute bottom-[18%] md:bottom-[80px] lg:bottom-[74px] text-white
              lg:left-[100px] md:left-[20px]
              max-md:left-5 max-md:right-5"
            >
              <h1
                className="
                  font-extrabold 
                  text-[40px] 
                  md:text-[64px]
                  lg:text-[78px] 
                  -skew-x-[12deg]
                  [font-feature-settings:'palt']
                "
              >
                企業に、絆を。
              </h1>

              <p
                className="text-[15px] pb-1 md:text-[14px] text-white/95 mt-[30px] font-b -skew-x-[12deg] ml-[60px]"
              >
                企業・団体のお客様の様々な課題やニーズに対し、
                <br className="hidden md:block" />
                JTBだからこそ提供できるサービスについてご紹介します。
              </p>

              {/* CTA */}
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
                    flex items-center justify-between
                  "
                >
                  資料請求する
                  <span className="relative ml-4 right-[-35px] inline-block h-2 w-2 rotate-[315deg] border-r-2 border-b-2 border-[#CC0000]" />
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
                    flex items-center justify-between
                  "
                >
                  まずは相談する
                  <span className="relative ml-4 right-[-28px] inline-block h-2 w-2 rotate-[315deg] border-r-2 border-b-2 border-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-label="メインビジュアル（SP）"
        className="block md:hidden w-full overflow-x-clip"
      >
        <div
          className="
          relative w-full
          bg-gradient-to-br from-[#001c7b] via-[#005ac8] to-[#00a7e1]
          h-[130vw] max-h-[690px]
          "
        >
          <div
            className="
            relative w-full h-full overflow-hidden
            [mask-repeat:no-repeat] [mask-position:100%_0%] [mask-size:cover]
            md:[mask-image:url('/img/Hero4000_BackgroundMask_1.svg')]
            max-md:[mask-image:url('/img/Hero4000_BackgroundMaskSp_1.svg')]

          "
          >
            <Image
              src="/img/Hero4000_Background_1.jpg"
              alt=""
              priority
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* テキスト */}
          <div className="pointer-events-none absolute inset-0">
            <div className="mx-auto h-full">
              <div className="absolute left-[30px] right-5 bottom-[-20px] text-white">
                {/* 見出し */}
                <h1
                  className="
                  font-extrabold leading-[1.1]
                  text-[12.5vw] tracking-[-0.01em]
                  [font-feature-settings:'palt']
                  -skew-x-12
                "
                >
                  企業に、絆を。
                </h1>

                {/* サマリ */}
                <p
                  className="
                  mt-3 text-[12px] leading-[1.8] text-white/95 font-medium
                  w-[68%]
                  my-6
                "
                >
                  企業・団体のお客様の様々な課題やニーズに対し、

                  JTBだからこそ提供できるサービスについてご紹介します。
                </p>

                {/* CTA */}
                <div className="pointer-events-auto mt-4 grid grid-cols-2 gap-3 tracking-[0.1em] ml-[-7px] md:ml-0">
                  <a
                    href="#"
                    className="
                    inline-flex items-center justify-center
                    rounded-[10px] bg-white text-[14px] font-bold text-[#111]
                    pl-[28px]
                    pr-[12px]
                    py-[21px]
                    md:w-[172px]
                    w-[160px]
                    shadow-[0_1px_2px_rgba(0,0,0,.12)]
                    active:translate-y-[1px] transition
                  "
                  >
                    <span>資料請求する</span>
                    <span className="ml-auto inline-block h-2 w-2 border-[#e60012] rotate-[-45deg] border-b-2 border-r-2" />
                  </a>

                  <a
                    href="#"
                    className="
                    inline-flex items-center justify-center
                    rounded-[10px] bg-[#e60012] text-[14px] font-semibold text-white
                    pl-[28px]
                    pr-[12px]
                    py-[21px]
                    
                    md:w-[172px]
                    w-[160px]
                    shadow-[0_1px_2px_rgba(0,0,0,.12)]
                    active:translate-y-[1px] transition
                  "
                  >
                    <span>まずは相談する</span>
                    <span className="ml-auto inline-block h-2 w-2 rotate-[-45deg] border-b-2 border-r-2 border-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
