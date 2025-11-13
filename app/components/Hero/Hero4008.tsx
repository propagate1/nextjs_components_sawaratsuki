"use client";

import React from "react";
import Image from "next/image";

const Hero4008: React.FC = () => {
    return (
        <section className="w-full bg-white pt-[100px] pb-[32px]">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start px-6">
                <div className="w-full md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left">
                    <h1 className="mt-20 font-bold text-[#474241] text-[32px] md:text-[36px] leading-tight mb-4 tracking-wide">
                        あらゆる国税関係書類を<br className="sm:hidden md:block" />ぜ〜んぶ電子保存！
                    </h1>
                    <p className="text-[13px] leading-[28px] text-[#474241] mb-6 max-w-[420px]">
                        invox電子帳簿保存は、電子帳簿保存法の電子取引とスキャン保存の要件に対応。あらゆる国税関係書類と電子取引情報を検索要件に必要な日付・金額・取引先を自動でデータ化して電子保存する、ずっと安心な低価格のクラウド文書管理システムです。
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mb-8">
                        <a href="#" className="px-6 py-6 h-[45px] flex items-center 
                        justify-center rounded-full border-2 border-[#A678D6] 
                        text-[#474241] bg-white font-bold text-sm hover:bg-[#F3EFFF] 
                        transition whitespace-nowrap">資料ダウンロード <span className="ml-2 text-base">→</span></a>
                        <a href="#" className="px-6 py-6 h-[45px] flex items-center 
                        justify-center rounded-full bg-[#A678D6] text-white font-bold 
                        text-sm hover:bg-[#8B5FC1] transition whitespace-nowrap">無料で試す <span className="ml-2 text-base">→</span></a>
                    </div>
                    <div className="flex flex-row justify-center md:justify-start gap-6 mb-1">
                        <div className="flex flex-col items-center">
                            <Image src="/img/Hero4008_Background_2.png" alt="ユーカリ葉" width={24} height={24} className="mb-1" />
                            <p className="text-[#474241] text-xs mt-1">シリーズ累計</p>
                            <p className="text-[22px] font-bold text-[#474241] leading-none">30,000<span className="text-base">社</span></p>
                            <p className="text-[#474241] text-xs mt-1">社以上が利用</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src="/img/Hero4008_Background_2.png" alt="ユーカリ葉" width={24} height={24} className="mb-1" />
                            <p className="text-[#474241] text-xs mt-1">継続率</p>
                            <p className="text-[22px] font-bold text-[#474241] leading-none">99.8<span className="text-base">%</span></p>
                        </div>
                        {/* 満足度ブロックを左右ユーカリで囲む */}
                        <div className="flex flex-row items-center gap-1">
                            <Image src="/img/Hero4008_Background_2.png" alt="ユーカリ葉左" width={24} height={24} className="mb-1 rotate-180" />
                            <div className="flex flex-col items-center">
                                <p className="text-[#474241] text-xs mt-1">満足度</p>
                                <p className="text-[22px] font-bold text-[#474241] leading-none">95.4<span className="text-base">%</span></p>
                            </div>
                            <Image src="/img/Hero4008_Background_2.png" alt="ユーカリ葉右" width={24} height={24} className="mb-1" />
                        </div>
                    </div>

                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0">
                    <Image src="/img/Hero4008_Background_1.png" alt="illustration" width={900} height={420} className="w-full max-w-[700px] h-auto" />
                </div>
            </div>
            <div className="text-[11px] text-[#474241] opacity-80 mt-2 max-w-[1200px] mx-auto ">
                ※1 継続率 99.8%：2024年1月〜2024年12月における有料プラン登録ユーザーの月次解約率の中央値<br />
                ※2 満足度 95.4%：有料プラン登録ユーザーを対象としたインターネット調査（2024年12月13日〜27日、有効回答数：548社）
            </div>
        </section>
    );
};

export default Hero4008;

