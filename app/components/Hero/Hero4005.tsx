"use client";

import Link from "next/link";

export default function Hero4005() {

    return (
        <section className="w-full">
            {/* SP/MD: md:hidden */}
            <div className="md:hidden">
                <div className="relative w-full h-[calc(100vh-5rem)] overflow-x-hidden mb-[60px]
                                bg-[url('/img/Hero4005_Background_3.svg'),_url('/img/Hero4005_Background_2.svg'),_url('/img/Hero4005_Background_1.png')]
                                 bg-no-repeat [background-position:left_bottom,_right_bottom,left_bottom]
                                    [background-size:140px_auto,_140px_auto,_auto_100%]">
                    {/* SCROLL（右下・90度回転） */}
                    <div className="absolute bottom-0 right-0 mr-8 
                    rotate-90 origin-bottom-right flex items-center justify-end relative">
                        <div className="pr-[3.75rem] text-[10px] font-bold tracking-[0.2em] mr-10">SCROLL</div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[3.75rem] h-[2px] bg-[#1b161c] animate-pulse" />
                    </div>

                    {/* 右側テキストグラデーション帯 */}
                    <div className="">
                        <div className="absolute top-0 left-0 right-0 px-4 h-[calc(100vh-5rem)] flex flex-col justify-center overflow-y-auto">
                            <div className="pt-4 pb-8">
                                {/* 見出し - 上ライン（ピンクの下線） */}
                                <div className="mb-3 relative inline-block">
                                    <p className="relative z-[2] text-[18px] sm:text-[20px] font-bold tracking-wider text-black">
                                        英会話は<br />より低価格、高品質へ
                                    </p>
                                    <div className="absolute bottom-1 left-0 z-[1] w-full h-1 bg-[#ffe1da]" />
                                </div>
                                {/* タイトル */}
                                <div className="mb-6">
                                    <h1 className="text-[36px] sm:text-[42px] font-bold tracking-wider leading-tight">
                                        Weblio英会話
                                    </h1>
                                </div>
                                {/* 説明文 */}
                                <div className="mb-8">
                                    <p className="text-[11px] sm:text-[12px] leading-relaxed text-[#1b161c]">
                                        毎日高品質なオンライン英会話ができる<br />
                                        新しい自分のためのオンライン英会話
                                    </p>
                                </div>
                                {/* CTAボタン（左黒 + 右オレンジ） */}
                                <Link href="/register" className="group inline-block w-full max-w-[21.5rem]">
                                    <div className="w-full h-[4rem] sm:h-[5rem] flex">
                                        <div className="flex-1 flex items-center pl-4 sm:pl-5 bg-[#1b161c] transition-colors group-hover:bg-[#686669]">
                                            <div>
                                                <p className="text-[9px] sm:text-[10px] font-bold tracking-wider leading-none text-white/40 ">初回限定</p>
                                                <p className="text-[11px] sm:text-[12px] font-bold tracking-wider leading-none text-white">無料体験レッスン</p>
                                            </div>
                                        </div>
                                        <div className="w-[4rem] sm:w-[5rem] bg-[#ff6e4a] flex items-center justify-center transition-colors group-hover:bg-[#f89279]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                aria-hidden="true"
                                                className="block sm:w-[30px] sm:h-[30px]"
                                            >
                                                <path
                                                    d="M11.25 4.25a.75.75 0 0 0-1.06 1.06L13.19 8.31H3.5a.75.75 0 0 0 0 1.5h9.69l-2.99 2.99a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5Z"
                                                    fill="#1B161C"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* PC（>=md） */}
            <div className="hidden md:block">
                <div className="relative w-full min-h-[calc(100vh-5rem)] overflow-x-hidden mb-[100px]
                bg-[url('/img/Hero4005_Background_3.svg'),_url('/img/Hero4005_Background_2.svg'),_url('/img/Hero4005_Background_1.png')]
                [background-size:228px_342px,_570px_228px,_100%_auto]
                 bg-no-repeat [background-position:-50px_bottom,_right_bottom,right_7.125rem_bottom_0rem]
                ">
                    {/* SCROLL（右下・90度回転） */}
                    <div className="absolute bottom-0 right-0 mr-8 rotate-90 origin-bottom-right flex items-center justify-end">
                        <div className="pr-[3.75rem] text-[10px] font-bold tracking-[0.2em] mr-10">SCROLL</div>
                        <div className="absolute w-[3.75rem] h-[2px] bg-[#1b161c] animate-pulse" />
                    </div>

                    {/* テキスト帯（絶対配置） */}
                    <div className="absolute top-0 inset-0 flex items-center justify-end">
                        <div className="w-full max-w-[73.625rem] mx-auto">
                            <div className="absolute right-[17%] top-[0%] w-fit pt-[30px] pl-[24px]">
                                {/* 見出し - 上ライン */}
                                <div className=" relative inline-block">
                                    <p className="relative z-[2] text-[24px] text-black font-bold tracking-wider leading-normal">
                                        英会話は<br />より低価格、高品質へ
                                    </p>
                                    <div className="absolute bottom-1 left-0 z-[1] w-full h-1 bg-[#ffe1da]" />
                                </div>

                                {/* タイトル：lgで1行、md~lgで改行版を表示 */}
                                <div className="hidden lg:block">
                                    <h1 className="text-[66px] font-bold leading-snug tracking-wider whitespace-nowrap">
                                        Weblio英会話
                                    </h1>
                                </div>
                                <div className=" lg:hidden">
                                    <h1 className="text-[66px] font-bold leading-tight tracking-wider whitespace-nowrap">
                                        Weblio<br />英会話
                                    </h1>
                                </div>

                                {/* 説明文 */}
                                <div className="mb-5">
                                    <p className="text-[12px] text-[#1b161c] leading-7">
                                        毎日高品質なオンライン英会話ができる<br />新しい自分のためのオンライン英会話
                                    </p>
                                </div>

                                {/* CTA */}
                                <Link href="/register" className="group inline-block">
                                    <div className="w-[24rem] h-[5rem] flex">
                                        <div className="flex-1 flex items-center pl-[30px] bg-[#1b161c] transition-colors group-hover:bg-[#686669]">
                                            <div>
                                                <p className="text-[12px] font-bold tracking-wider leading-normal text-white/40 mb-1">初回限定</p>
                                                <p className="text-[16px] font-bold tracking-wider leading-normal text-white">無料体験レッスン</p>
                                            </div>
                                        </div>
                                        <div className="w-[5rem] bg-[#ff6e4a] flex items-center justify-center transition-colors group-hover:bg-[#f89279]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="30"
                                                height="30"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                aria-hidden="true"
                                                className="block"
                                            >
                                                <path
                                                    d="M11.25 4.25a.75.75 0 0 0-1.06 1.06L13.19 8.31H3.5a.75.75 0 0 0 0 1.5h9.69l-2.99 2.99a.75.75 0 1 0 1.06 1.06l4.5-4.5a.75.75 0 0 0 0-1.06l-4.5-4.5Z"
                                                    fill="#1B161C"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
