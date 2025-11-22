"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header4008: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 w-full bg-white z-[999] h-[53px] font-['Noto_Sans_JP',sans-serif]">
                <div className="relative mx-auto flex items-center justify-between h-[53px] max-w-[1440px] px-6">
                    {/* Logo */}
                    <h1 className="p-logo flex items-center pl-0 md:pl-6">
                        <a href="https://invox.jp/storage/" className="flex items-center">
                            <Image
                                src="/img/Header4008_Logo_1.png"
                                alt="クラウド文書管理システム invox電子帳簿保存"
                                width={192}
                                height={25}
                                priority
                                className="w-[192px] h-[24.8125px]"
                            />
                        </a>
                    </h1>

                    {/* Menu Button (SP) */}
                    <button
                        id="js-menu-button"
                        className="absolute right-0 top-0 w-[75px] h-[53px] flex items-center justify-center text-[#333] text-base leading-[53px] bg-transparent border-0 cursor-pointer md:hidden"
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={menuOpen}
                        aria-controls="js-global-nav"
                        aria-label="メニューを開閉"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="sr-only">メニューを開閉</span>
                        <span className="text-2xl">☰</span>
                    </button>

                    {/* Navigation Links (PC) - 中央に直接表示 */}
                    <nav className="hidden md:flex items-center flex-1 justify-center" aria-label="グローバルナビゲーション">
                        <ul id="js-global-nav" className="flex items-center gap-6 md:gap-8 list-none p-0 m-0">
                            <li>
                                <a href="#plan" className="text-[#474241] text-sm font-medium no-underline hover:opacity-70 transition-opacity">
                                    料金
                                </a>
                            </li>
                            <li>
                                <a href="#seminar" className="text-[#474241] text-sm font-medium no-underline hover:opacity-70 transition-opacity">
                                    セミナー情報
                                </a>
                            </li>
                            <li>
                                <a href="/consultation" className="text-[#474241] text-sm font-medium no-underline hover:opacity-70 transition-opacity">
                                    個別相談会（デモ）を予約
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side - Login Link and Buttons */}
                    <div className="hidden md:flex items-center gap-3 md:gap-4">
                        <a
                            href="https://web.invox.jp/"
                            className="text-[#474241] text-sm font-medium no-underline hover:opacity-70 transition-opacity"
                        >
                            ログイン
                        </a>
                        <a
                            href="https://invox.jp/storage/document-dl"
                            className="px-4 h-[32px] md:h-[36px] flex items-center justify-center rounded-full border-2 border-[#A678D6] text-[#474241] bg-white font-semibold text-xs md:text-sm hover:bg-[#F3EFFF] transition-colors no-underline whitespace-nowrap"
                        >
                            資料ダウンロード
                        </a>
                        <a
                            href="https://web.invox.jp/regist_e_storage"
                            className="px-4 h-[32px] md:h-[36px] flex items-center justify-center rounded-full bg-[#A678D6] text-white font-bold text-xs md:text-sm hover:bg-[#8B5FC1] transition-colors no-underline whitespace-nowrap"
                        >
                            無料で試す
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay (SP) */}
            {menuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 md:hidden z-[997]"
                        onClick={() => setMenuOpen(false)}
                    />

                    {/* Mobile Menu - Dark Background */}
                    <div
                        id="js-global-nav"
                        className="fixed top-0 left-0 right-0 bottom-0 bg-[#333333] md:hidden z-[998] overflow-y-auto"
                        aria-label="モバイルナビゲーション"
                    >
                        {/* Header in Mobile Menu - White Background */}
                        <div className="flex items-center justify-between h-[53px] px-4 bg-white">
                            <h1 className="p-logo flex items-center">
                                <a href="https://invox.jp/storage/" className="flex items-center">
                                    <Image
                                        src="/img/Header4008_Logo_1.png"
                                        alt="クラウド文書管理システム invox電子帳簿保存"
                                        width={192}
                                        height={25}
                                        className="w-[192px] h-[24.8125px]"
                                    />
                                </a>
                            </h1>
                            <button
                                className="w-[53px] h-[53px] flex items-center justify-center text-[#333] text-base bg-transparent border-0 cursor-pointer"
                                type="button"
                                aria-label="メニューを閉じる"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className="text-2xl">☰</span>
                            </button>
                        </div>

                        {/* Navigation Links - White Text on Dark Background */}
                        <nav className="py-8">
                            <ul className="flex flex-col list-none p-0 m-0">
                                <li className="px-4 py-3">
                                    <a
                                        href="#plan"
                                        className="block text-white text-base font-normal no-underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        料金
                                    </a>
                                </li>
                                <li className="px-4 py-3">
                                    <a
                                        href="#seminar"
                                        className="block text-white text-base font-normal no-underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        セミナー情報
                                    </a>
                                </li>
                                <li className="px-4 py-3">
                                    <a
                                        href="/consultation"
                                        className="block text-white text-base font-normal no-underline"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        個別相談会（デモ）を予約
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        {/* Bottom Buttons - Fixed at Bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-[#333333] p-4">
                            <div className="flex flex-col gap-3">
                                {/* 無料で試す - Purple Button */}
                                <a
                                    href="https://web.invox.jp/regist_e_storage"
                                    className="w-full h-[52px] flex items-center justify-center rounded-full bg-[#A678D6] text-white font-bold text-base hover:bg-[#8B5FC1] transition-colors no-underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    無料で試す
                                </a>

                                {/* 資料ダウンロード - White Button */}
                                <a
                                    href="https://invox.jp/storage/document-dl"
                                    className="w-full h-[52px] flex items-center justify-center rounded-full border-2 border-white text-white bg-transparent font-bold text-base hover:bg-white/10 transition-colors no-underline"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    資料ダウンロード
                                </a>

                                {/* ログイン - Text Link */}
                                <a
                                    href="https://web.invox.jp/"
                                    className="w-full h-[52px] flex items-center justify-center text-white text-base font-normal no-underline hover:opacity-70 transition-opacity"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    ログイン
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Header4008;

