"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Header4000() {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* 背景 */}
      <div
        className={`fixed inset-x-0 top-0 z-[100] transition-colors overflow-x-hidden
        ${sticky ? "shadow-[0_2px_12px_rgba(0,0,0,.15)]" : ""}`}
      >
        {/* PC側のHeader */}
        <div className="mx-auto w-full lg:flex justify-between mt-2 pr-5 hidden ">
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/img/Header4000_Logo_1.svg"
              alt="JTB 法人サービスサイト"
              width={88}
              height={36}
              priority
              className="select-none"
            />
          </Link>

          <div>
            <div className=" flex justify-end">
              <div className=" flex items-center gap-4 justify-between">
                <ul className="hidden xl:flex items-center gap-3 mr-[26px]">
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-black bg-white hover:text-white transition
                               border border-white rounded-full px-[13px] py-[4px] leading-none
                               backdrop-blur-[1px]"
                    >
                      企業・団体向け
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white hover:text-white transition
                               border border-white rounded-full px-[12px] py-[4px] leading-none
                               backdrop-blur-[1px]"
                    >
                      自治体・行政機関向け
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white hover:text-white transition
                               border border-white rounded-full px-[12px] py-[4px] leading-none
                               backdrop-blur-[1px]"
                    >
                      学校・教育機関向け
                    </Link>
                  </li>
                </ul>
                <ul className="flex items-center ml-auto">
                  <li className={`${"mr-[20px]"}`}>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white hover:text-white transition
                                py-1 leading-none
                               backdrop-blur-[1px]
                               text-left
                               leading-[1.15]
                               inline-block
                               "
                    >
                      よくあるご質問
                    </Link>
                  </li>
                  <li className={`${"mr-[20px]"}`}>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white hover:text-white transition
                                py-1 leading-none
                               backdrop-blur-[1px]
                               text-left
                               leading-[1.15]
                               inline-block
                               "
                    >
                      メルマガ登録
                    </Link>
                  </li>
                  <li className={`${"mr-[20px]"}`}>
                    <Link
                      href={"#"}
                      className="text-[12px] text-white hover:text-white transition
                                py-1 leading-none
                               backdrop-blur-[1px]
                               text-left
                               leading-[1.15]
                               inline-block
                               "
                    >
                      店舗一覧
                    </Link>
                  </li>
                  <li
                    className={`${"before:content-[''] before:inline-block before:w-[1px] before:h-[12px] before:bg-white before:mr-3 mx-[16px]"}`}
                  >
                    <Link
                      href="#"
                      className={
                        "text-[12px] text-white hover:text-white transition py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15] inline-block "
                      }
                    >
                      <span className="flex middle items-center">
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
                    className={
                      "text-[12px] text-white hover:text-white transition py-1 leading-none backdrop-blur-[1px] text-left leading-[1.15] inline-block "
                    }
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
            <div className="">
              <div className="mx-auto w-full px-4 ">
                <div className="my-3 flex items-center justify-end">
                  <nav className="hidden lg:flex">
                    <ul className="flex items-center gap-10 text-white">
                      <li>
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
                      <li>
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
                      <li>
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
                      <li>
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
                      <li>
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
                      <li>
                        <button
                          aria-label="検索"
                          className="w-9 h-9 border-white/60 grid place-content-center hover:bg-white/10 transition"
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
                      <div className="ml-auto hidden md:flex items-center gap-3">
                        <Link
                          href="#"
                          className="h-[44px] inline-flex items-center justify-center
                            border border-white/85 text-[14px] font-semibold w-[144px]
                           text-white hover:bg-white hover:text-[#0c2f86] transition"
                        >
                          お役立ち資料
                        </Link>
                        <Link
                          href="#"
                          className="h-[44px] inline-flex items-center justify-center
                            bg-[#cc0000] text-white text-[14px] font-semibold w-[144px]
                           hover:opacity-90 transition"
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
      </div>
    </>
  );
}
