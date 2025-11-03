"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Header4000() {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const mobileBarRef = useRef<HTMLDivElement>(null);
  const [barH, setBarH] = useState(56);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const measure = () => setBarH(mobileBarRef.current?.offsetHeight ?? 56);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty("--mobile-bar-h", barH + "px");
  }, [barH]);
  return (
    <>
      {/* 背景 */}
      <div
        className={`fixed inset-x-0 top-0 z-[100] transition-colors overflow-x-hidden
        ${sticky ? "shadow-[0_2px_12px_rgba(0,0,0,.15)]" : ""}`}
      >
        {/* PC側のHeader */}
        <div
          className="relative overflow-hidden group mx-auto w-full lg:flex justify-between pt-2 pr-5 hidden
                 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r
                 before:from-[#001c7b] before:via-[#005ac8] before:to-[#00a7e1]
                 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100
                 before:pointer-events-none "
        >
          {" "}
          <Link href="/" className="shrink-0 flex items-center z-[100]">
            <Image
              src="/img/Header4000_Logo_1.png"
              alt="JTB 法人サービスサイト"
              width={100}
              height={50}
              priority
              className="select-none h-auto w-full ml-7"
            />
          </Link>
          <div className="w-full">
            <div className=" flex justify-end">
              <div className=" flex items-center gap-4 justify-between">
                {/* 上段（PC） */}
                <ul className="hidden xl:flex items-center gap-3 mr-[26px]">
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-[#0c2f86] bg-white
                               border border-white rounded-full px-[13px] py-[4px] leading-none
                               backdrop-blur-[1px]"
                    >
                      企業・団体向け
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white transition
                               border border-white rounded-full px-[12px] py-[4px] leading-none
                               backdrop-blur-[1px]
                               hover:bg-white hover:text-[#001C7B] transition
                               "
                    >
                      自治体・行政機関向け
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white transition
                              border border-white rounded-full px-[12px] py-[4px] leading-none
                              backdrop-blur-[1px]
                              hover:bg-white hover:text-[#001C7B] transition
"
                    >
                      学校・教育機関向け
                    </Link>
                  </li>
                </ul>
                <ul className="flex items-center ml-auto">
                  <li className="mr-[20px]">
                    <Link
                      href={"#"}
                      className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100"
                    >
                      よくあるご質問
                    </Link>
                  </li>
                  <li className="mr-[20px]">
                    <Link
                      href={"#"}
                      className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100"
                    >
                      メルマガ登録
                    </Link>
                  </li>
                  <li className={`${"mr-[20px]"}`}>
                    <Link
                      href={"#"}
                      className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100"
                    >
                      店舗一覧
                    </Link>
                  </li>
                  <li
                    className="before:content-[''] before:inline-block before:w-[1px] before:h-[12px] before:bg-white before:mr-3 mx-[16px]"
                  >
                    <Link
                      href="#"
                      className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100"
                    >
                      <span className="flex items-center">
                        個人旅行はこちら
                        <Image
                          src="/img/Header4000_Icon_1.svg"
                          alt=""
                          width={15}
                          height={15}
                          priority
                          className="select-none color-white ml-[3px]"
                        />
                      </span>
                    </Link>
                  </li>
                  <Link
                    href="#"
                    className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100"
                  >
                    <span className="flex middle items-center">
                      For overseas
                      <br />
                      customers
                      <Image
                        src="/img/Header4000_Icon_1.svg"
                        alt=""
                        width={15}
                        height={15}
                        priority
                        className="select-none color-white ml-[3px]"
                      />
                    </span>
                  </Link>
                </ul>
              </div>
            </div>

            {/* 下段 */}
            <div className="z-100">
              <div className="mx-auto w-full px-4 ">
                <div className="my-3 flex items-center justify-end">
                  <nav className="hidden lg:flex">
                    <ul className="flex items-center text-white">
                      <li className="mr-[25px]">
                        <Link
                          href={"#"}
                          className="relative py-2 text-[16px] 
                                   after:absolute after:left-0 after:right-0 after:-bottom-2
                                   after:h-[3px] after:bg-white after:scale-x-0 after:origin-right
                                   hover:after:origin-left hover:after:scale-x-100 after:transition-transform"
                        >
                          JTBだからできること
                        </Link>
                      </li>
                      <li className="mr-[25px]">
                        <Link
                          href={"#"}
                          className="relative py-2 text-[16px] 
                                   after:absolute after:left-0 after:right-0 after:-bottom-2
                                   after:h-[3px] after:bg-white after:scale-x-0 after:origin-right
                                   hover:after:origin-left hover:after:scale-x-100 after:transition-transform"
                        >
                          サービス
                        </Link>
                      </li>
                      <li className="mr-[25px]">
                        <Link
                          href={"#"}
                          className="relative py-2 text-[16px] 
                                   after:absolute after:left-0 after:right-0 after:-bottom-2
                                   after:h-[3px] after:bg-white after:scale-x-0 after:origin-right
                                   hover:after:origin-left hover:after:scale-x-100 after:transition-transform"
                        >
                          事例
                        </Link>
                      </li>
                      <li className="mr-[25px]">
                        <Link
                          href={"#"}
                          className="relative py-2 text-[16px] 
                                   after:absolute after:left-0 after:right-0 after:-bottom-2
                                   after:h-[3px] after:bg-white after:scale-x-0 after:origin-right
                                   hover:after:origin-left hover:after:scale-x-100 after:transition-transform"
                        >
                          イベント・セミナー
                        </Link>
                      </li>
                      <li className="mr-[25px]">
                        <Link
                          href={"#"}
                          className="relative py-2 text-[16px] 
                                   after:absolute after:left-0 after:right-0 after:-bottom-2
                                   after:h-[3px] after:bg-white after:scale-x-0 after:origin-right
                                   hover:after:origin-left hover:after:scale-x-100 after:transition-transform"
                        >
                          WEBマガジン
                        </Link>
                      </li>
                      <li
                        className="relative inline-block text-[12px] text-white hover:text-white transition
                      py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15]
                      after:content-[''] after:absolute after:left-0 after:-bottom-[1px]
                      after:h-[1px] after:w-full after:bg-[currentColor]
                      after:transition-transform after:duration-300
                      after:scale-x-0 after:origin-right
                      hover:after:origin-left hover:after:scale-x-100 z-100"
                      >
                        <button
                          aria-label="検索"
                          className="w-9 h-9 border-white/60 grid place-content-center transition"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            width="25"
                            height="25"
                            fill="none"
                            className="stroke-white"
                          >
                            <circle cx="11" cy="11" r="7" strokeWidth="2" />
                            <path
                              d="M20 20L17 17"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </li>
                      {/* 右上（PC） */}
                      <div className="ml-auto hidden md:flex items-center gap-3 z-100">
                        <Link
                          href="#"
                          className="h-[44px] inline-flex items-center justify-center
                            border border-white/85 text-[14px] font-semibold w-[144px]
                           text-white "
                        >
                          お役立ち資料
                        </Link>
                        <Link
                          href="#"
                          className="h-[44px] inline-flex items-center justify-center
                            bg-[#cc0000] text-white text-[14px] font-semibold w-[144px]
                           hover:opacity-90 transition
                           hover:bg-white hover:text-[#cc0000]
                           "
                        >
                          お問い合わせ
                        </Link>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* モバイルメニュー（ドロワー） */}
        <div
          ref={mobileBarRef}
          className="lg:hidden flex items-center gap-4 w-full justify-between bg-gradient-to-r from-[#001c7b] via-[#005ac8] to-[#00a7e1] z-[1400] h-[67px]"
        >
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/img/Header4000_Logo_1.png"
              alt="JTB 法人サービスサイト"
              width={100}
              height={50}
              priority
              className="select-none h-auto w-full"
            />
          </Link>
          <div className="icons flex p-4">
            <Link href="#" aria-label="メール" className="p-1 px-2">
              <Image
                src="/img/Header4000_Icon_2.svg"
                alt=""
                width={40}
                height={40}
                className=""
              />
            </Link>
            <Link href="#" aria-label="検索" className="p-1 px-2">
              <Image
                src="/img/Header4000_Icon_3.svg"
                alt=""
                width={40}
                height={40}
                className=""
              />
            </Link>
            <button
              aria-label={open ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="relative hover:bg-white/10"
            >
              <span className="sr-only">{open ? "閉じる" : "メニュー"}</span>
              {!open ? (
                <>
                  <span className="relative left-1/2 top-0 block h-[2px] w-12 -translate-x-1/2 -translate-y-2 bg-white" />
                  <span className="relative left-1/2 top-[calc(50% - 1px)] block h-[2px] w-12 -translate-x-1/2 bg-white" />
                  <span className="relative left-1/2 bottom-0 block h-[2px] w-12 -translate-x-1/2 translate-y-2 bg-white" />
                </>
              ) : (
                <>
                  <span className="relative left-1/2 top-0 block h-[2px] w-12 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                  <span className="relative left-1/2 top-[-2px] block h-[2px] w-12 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
                </>
              )}
            </button>
          </div>
        </div>

        <div
          aria-hidden={!open}
          className={`
    fixed left-0 right-0 z-[120]
    top-[var(--mobile-bar-h)]
    overflow-hidden
    transition-[height] duration-300 ease-out
    ${open ? "h-[calc(100vh-var(--mobile-bar-h))]" : "h-0"}
  `}
        >
          {" "}
          {/* 背景オーバーレイ */}
          <button
            aria-label="メニューを閉じる"
            onClick={() => setOpen(false)}
            className={`
      absolute inset-0 bg-black/40
      transition-opacity duration-200
      ${open ? "pointer-events-auto" : "pointer-events-none"}
    `}
          />
          <aside
            role="dialog"
            aria-modal="true"
            className={`
      absolute inset-0 bg-white text-[#0c2f86]
      shadow-[0_8px_24px_rgba(0,0,0,.2)]
      flex flex-col
      h-full
      transition-opacity duration-200 ease-out
    `}
          >
            {/* 本文 */}
            <div className="flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] w-[calc(100%-10px)] mx-auto">
              <nav className="px-3 py-4">
                <div className="rounded-[4px] bg-gradient-to-r from-[#0a318e] via-[#0c3ba6] to-[#0c77d6] px-4 py-[15px] text-white text-[14px] font-bold mb-2">
                  企業・団体向け
                </div>

                {/* メインリスト */}
                <ul className="bg-white rounded-[8px] overflow-hidden mb-3">
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-2 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      サービス
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-4 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                        w-full
                      "
                    >
                      サービス・ソリューションから探す
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                    <Link href="#" aria-label="探す" className="p-1 px-2">
                      <Image
                        src="/img/Header4000_Icon_4.svg"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                      />
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                        w-full
                      "
                    >
                      課題・目的から探す
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                    <Link href="#" aria-label="探す" className="p-1 px-2">
                      <Image
                        src="/img/Header4000_Icon_4.svg"
                        alt=""
                        width={20}
                        height={20}
                        className=""
                      />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      事例
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      イベント・セミナー
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      WEBマガジン
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      お知らせ
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      href={"#"}
                      className="
                        flex items-center justify-between
                        px-4 py-3 text-[13px] text-black font-semibold
                        hover:bg-[#f4f7ff]
                      "
                    >
                      資料ダウンロード
                      <span className="ml-4 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-current" />
                    </Link>
                  </li>
                </ul>

                {/* グラデブロック（自治体/学校） */}
                <div className="space-y-0.5 mb-3">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-full rounded-[4px] px-4 py-4 text-left text-white text-[15px] font-bold flex justify-between items-center font-black
                      bg-gradient-to-r from-[#0b7a2f] to-[#9bcf24]"
                    >
                      <span>自治体・行政機関向け</span>
                      <span className="float-right mt-1 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-white" />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="w-full rounded-[4px] px-4 py-4 text-left text-white text-[15px] font-bold flex justify-between items-center
                      bg-gradient-to-r from-[#ff7a00] to-[#ffd000]                      "
                    >
                      <span>学校・教育機関向け</span>
                      <span className="float-right mt-1 inline-block h-1.5 w-1.5 rotate-[315deg] border-r-2 border-b-2 border-white" />
                    </button>
                  </div>
                </div>

                {/* サブ */}
                <div className="rounded-[8px] bg-[#f3f3f5] p-2 mb-6">
                  <ul className="divide-y divide-black/10">
                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px]"
                      >
                        よくあるご質問
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px]"
                      >
                        メルマガ登録
                      </Link>
                    </li>

                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px]"
                      >
                        店舗一覧
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px] flex justify-between items-center"
                      >
                        <span>オンライン商談</span>
                        <Image
                          src="/img/Header4000_Icon_5.svg"
                          alt=""
                          width={17}
                          height={17}
                          className=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px] flex justify-between items-center"
                      >
                        <span>個人旅行はこちら</span>
                        <Image
                          src="/img/Header4000_Icon_5.svg"
                          alt=""
                          width={17}
                          height={17}
                          className=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block px-[10px] py-[15px] text-[13px] text-black hover:bg-white rounded-[6px] flex justify-between items-center"
                      >
                        <span>For overseas customers</span>
                        <Image
                          src="/img/Header4000_Icon_5.svg"
                          alt=""
                          width={17}
                          height={17}
                          className=""
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
