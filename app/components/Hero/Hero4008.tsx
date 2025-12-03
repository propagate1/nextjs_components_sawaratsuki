"use client";

import React from "react";
import Image from "next/image";

const Hero4008: React.FC = () => {
    return (
        <section id="top" className="w-full bg-white pt-[48px] pb-0 font-['Noto_Sans_JP',sans-serif] overflow-x-hidden">
            <div className="inner mx-auto max-w-[1200px] px-5 md:px-6 relative">
                {/* Hero Content */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
                    {/* Left Column - Text Content */}
                    <div className="textarea w-full md:w-[50%] md:max-w-[500px] mb-8 md:mb-0 md:flex md:flex-col md:justify-center">
                        {/* Title */}
                        <h1 className="catch text-[#474241] text-[32px] md:text-[36px] font-bold leading-[44px] md:leading-[56px] mb-10 md:mb-[24px] pt-0 md:pt-0 -mt-[10px] md:mt-0">
                            あらゆる<br className="md:hidden" />国税関係書類を<br />ぜ〜んぶ電子保存！
                        </h1>

                        {/* Description */}
                        <p className="p-base text-[14px] leading-[26px] md:leading-[24px] text-[rgba(71,66,65,0.8)] mb-10 md:mb-[30px]">
                            invox電子帳簿保存は、電子帳簿保存法の電子取引とスキャナ保存の要件に対応。あらゆる国税関係書類と電子取引情報を検索要件に必要な日付・金額・取引先を自動でデータ化して電子保存する、ずっと安心な低価格のクラウド文書管理システムです。
                        </p>

                        {/* Buttons */}
                        <ul className="buttons flex flex-col md:flex-row gap-3 mb-8 md:mb-8 list-none p-0 m-0">
                            <li className="common-btn h56 w-full md:w-[191px]">
                                <a
                                    href="https://invox.jp/storage/document-dl"
                                    className="flex items-center justify-center w-full h-[56px] bg-white text-[#474241] text-base font-bold rounded-[80px] border-2 border-[#A678D6] no-underline hover:bg-[#F3EFFF] transition-colors"
                                >
                                    資料ダウンロード
                                </a>
                            </li>
                            <li className="common-btn h56 w-full md:w-[191px]">
                                <a
                                    href="https://web.invox.jp/regist_e_storage"
                                    className="flex items-center justify-center w-full h-[56px] bg-[#A678D6] text-white text-base font-bold rounded-[80px] border-2 border-[#A678D6] no-underline hover:bg-[#8B5FC1] hover:border-[#8B5FC1] transition-colors"
                                >
                                    無料で試す
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column - Image Area */}
                    <div className="imagearea w-full md:w-[50%] md:max-w-[80%] h-auto relative mt-10 md:mt-0 
                    mb-10 md:mb-0 mx-auto md:mx-0 flex items-center justify-center">
                        <Image
                            src="/img/Hero4008_Background_1.png"
                            alt="invox電子帳簿保存のイラスト"
                            width={468}
                            height={312}
                            className="w-full h-auto pt-30"
                            priority
                        />
                    </div>
                </div>

                {/* Statistics Section - 下部に配置 */}
                <div className="mt-4 md:mt-6">
                    {/* モバイル用：上2つ、下1つ */}
                    <div className="md:hidden flex flex-col items-center gap-3">
                        {/* 上段：2つ横並び */}
                        <ul className="gekkeikan2 flex items-center justify-center gap-3 list-none p-0 m-0">
                            <li className="w-[150px] h-auto flex-shrink-0">
                                <Image
                                    src="/img/Hero4008_Stats_1.png"
                                    alt="シリーズ累計30,000社以上が利用 2024年11月時点"
                                    width={1024}
                                    height={1024}
                                    className="w-full h-auto object-contain"
                                />
                            </li>
                            <li className="w-[140px] h-auto flex-shrink-0">
                                <Image
                                    src="/img/Hero4008_Stats_2.png"
                                    alt="継続率 99.8%"
                                    width={1024}
                                    height={1024}
                                    className="w-full h-auto object-contain"
                                />
                            </li>
                        </ul>
                        {/* 下段：1つ中央 */}
                        <ul className="gekkeikan2 flex items-center justify-center list-none p-0 m-0">
                            <li className="w-[140px] h-auto flex-shrink-0">
                                <Image
                                    src="/img/Hero4008_Stats_3.png"
                                    alt="満足度 95.4%"
                                    width={1024}
                                    height={1024}
                                    className="w-full h-auto object-contain"
                                />
                            </li>
                        </ul>
                    </div>
                    {/* デスクトップ用：3つ横並び */}
                    <ul className="hidden md:flex items-center gap-4 list-none p-0 m-0">
                        <li className="w-[180px] h-auto flex-shrink-0">
                            <Image
                                src="/img/Hero4008_Stats_1.png"
                                alt="シリーズ累計30,000社以上が利用 2024年11月時点"
                                width={1024}
                                height={1024}
                                className="w-full h-auto object-contain"
                            />
                        </li>
                        <li className="w-[160px] h-auto flex-shrink-0">
                            <Image
                                src="/img/Hero4008_Stats_2.png"
                                alt="継続率 99.8%"
                                width={1024}
                                height={1024}
                                className="w-full h-auto object-contain"
                            />
                        </li>
                        <li className="w-[160px] h-auto flex-shrink-0">
                            <Image
                                src="/img/Hero4008_Stats_3.png"
                                alt="満足度 95.4%"
                                width={1024}
                                height={1024}
                                className="w-full h-auto object-contain"
                            />
                        </li>
                    </ul>

                    {/* Footnotes */}
                    <p className="caption text-[12px] leading-[20px] text-[rgba(71,66,65,0.8)] mt-4 md:mt-0 text-left">
                        ※1 継続率 <strong>99.8％</strong>：2024年1月〜2024年12月における有料プラン登録ユーザーの月次解約率の中央値 <br />
                        ※2 満足度 <strong>95.4％</strong>：有料プラン登録ユーザーを対象としたインターネット調査（2024年12月13日〜27日、有効回答数：548社）
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero4008;

