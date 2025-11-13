"use client";

import React from "react";
import Image from "next/image";

const Header4008: React.FC = () => {
    return (
        <header className="w-full bg-white fixed top-0 left-0 right-0 z-50 ">
            <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[64px] px-6">
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <Image src="/img/Header4008_Logo_1.png" alt="invox電子帳簿保存" width={32} height={32} priority />
                        <span className="ml-2 text-base font-bold text-[#474241] tracking-wide">invox電子帳簿保存</span>
                    </a>
                </div>
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex space-x-8 text-[#474241] text-sm font-medium">
                        <li><a href="#">料金</a></li>
                        <li><a href="#">セミナー情報</a></li>
                        <li><a href="#">個別相談会（デモ）を予約</a></li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-3">
                    <button className="text-[#474241] text-sm font-medium">ログイン</button>
                    <a href="#" className="px-5 h-[36px] flex items-center rounded-full border-2 border-[#A678D6] text-black bg-white font-semibold text-sm hover:bg-[#F3EFFF] transition">資料ダウンロード</a>
                    <a href="#" className="px-5 h-[36px] flex items-center rounded-full bg-[#A678D6] text-white font-bold text-sm hover:bg-[#8B5FC1] transition">無料で試す</a>
                </div>
            </div>
        </header>
    );
};

export default Header4008;

