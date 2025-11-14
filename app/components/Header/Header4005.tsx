"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Header4005() {
    const [open, setOpen] = useState(false);
    const mobileBarRef = useRef<HTMLDivElement>(null);
    const [barH, setBarH] = useState(50);

    useEffect(() => {
        const measure = () => setBarH(mobileBarRef.current?.offsetHeight ?? 50);
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    return (
        <header className="w-full bg-white">
            {/* 上の関連リンク（PCのみ表示） */}
            <div className="hidden md:block">
                <div className="flex justify-center bg-[#f6f7f8]">
                    <div className="flex w-full max-w-[73.625rem] justify-between px-5 py-1.5">
                        <div className="flex text-[#9e9e9e] text-[13px] mr-auto">
                            <Link className="pr-4" href="#">法人向け</Link>
                            <Link className="pr-4" href="#">学習塾向け</Link>
                            <Link className="pr-0" href="#">学校向け</Link>
                        </div>
                        <div className="flex text-[#9e9e9e] text-[13px]">
                            <Link className="pr-4" href="#">英和和英辞典</Link>
                            <Link className="pr-4" href="#">英語例文</Link>
                            <Link className="pr-4" href="#">英語類語</Link>
                            <Link className="pr-4" href="#">共起表現</Link>
                            <Link className="pr-4" href="#">英単語帳</Link>
                            <Link className="pr-4" href="#">英語力診断</Link>
                            <Link className="pr-4" href="#">英語翻訳</Link>
                            <Link className="pr-4" href="#">オンライン英会話</Link>
                            <Link className="pr-4" href="#">スピーキングテスト</Link>
                            <Link className="pr-0" href="#">英語の質問箱</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* メインヘッダー（PC） */}
            <div className="sticky top-0 z-[60] hidden lg:flex justify-center bg-white">
                <div className="header__container flex w-full max-w-[73.625rem] items-center justify-between px-5 h-[7.5rem]">
                    <div className="flex items-center">
                        <Link href="/" className="mr-16">
                            <Image
                                className="h-auto w-auto"
                                alt="Weblio英会話"
                                src="/img/Hero4005_Logo_1.png"
                                width={120}
                                height={24}
                                priority
                            />
                        </Link>
                        {/* メインナビ */}
                        <nav className="hidden lg:flex items-center text-[#494549]">
                            <Link className="relative pr-4 text-[15px] hover:text-[#ff6e4a]
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2"
                                href="/">TOP</Link>
                            <div className="relative pr-4 text-[14px] cursor-pointer group ml-4
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2">
                                <span className="header__menu-item group-hover:text-[#ff6e4a]">初めての方へ</span>
                                {/* ドロップダウン（ホバーで表示） */}
                                <div className="absolute left-[-1rem] top-6 hidden group-hover:block pt-4 min-w-[11.5rem]">
                                    <div className="rounded-sm bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-2">
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">はじめに</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">特徴</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">使い方</Link>
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            <Link className="relative pr-4 text-[15px] hover:text-[#ff6e4a] ml-4 
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2" href="/plans">料金プラン</Link>
                            <div className="relative pr-4 text-[14px] cursor-pointer group ml-4
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2">
                                <span className="header__menu-item group-hover:text-[#ff6e4a]">レッスン予約</span>
                                <div className="absolute left-[-1rem] top-6 hidden group-hover:block pt-4 min-w-[11.5rem]">
                                    <div className="rounded-sm bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-2">
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">今日の予約</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">今週の予約</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative pr-4 text-[15px] cursor-pointer group ml-4
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2">
                                <span className="group-hover:text-[#ff6e4a]">講師</span>
                                <div className="absolute left-[-1rem] top-6 hidden group-hover:block pt-4 min-w-[11.5rem]">
                                    <div className="rounded-sm bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-2">
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">講師一覧</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">お気に入り</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative pr-4 text-[15px] cursor-pointer group ml-4
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2">
                                <span className="group-hover:text-[#ff6e4a]">教材</span>
                                <div className="absolute left-[-1rem] top-6 hidden group-hover:block pt-4 min-w-[11.5rem]">
                                    <div className="rounded-sm bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-2">
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">教材一覧</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">レベル別</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative pr-4 text-[15px] cursor-pointer group ml-4
                                after:content-[''] after:absolute after:top-1/2 after:right-0 after:w-px after:h-[10px] after:bg-[#c8c8c8] after:-translate-y-1/2">
                                <span className="group-hover:text-[#ff6e4a]">ヘルプ</span>
                                <div className="absolute left-[-1rem] top-6 hidden group-hover:block pt-4 min-w-[11.5rem]">
                                    <div className="rounded-sm bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-2">
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">FAQ</Link>
                                        <Link href="#" className="block h-10 leading-10 px-3 hover:text-[#ff6e4a]">お問い合わせ</Link>
                                    </div>
                                </div>
                            </div>
                            <Link className="text-[14px] hover:text-[#ff6e4a] ml-4" href="https://eikaiwa.weblio.jp/column/">英会話コラム</Link>
                        </nav>
                    </div>

                    <div className="flex items-center">
                        <Link href="/login" className="flex items-center mr-4  hover:text-[#ff6e4a]">
                            <Image
                                // hover:#ff6e4a
                                className="mr-2"
                                src="/img/Hero4005_Icon_1.svg"
                                alt="login"
                                width={24}
                                height={24}
                            />
                            <span className="text-[14px]">ログイン</span>
                        </Link>
                        <Link href="/register" className="text-[14px]">無料体験レッスン</Link>
                    </div>
                </div>
            </div>

            {/* メインヘッダー（SP/MD）*/}
            <div
                ref={mobileBarRef}
                className="lg:hidden flex justify-between items-center px-5 h-[3.125rem] bg-white sticky top-0 z-[60]"
            >
                <Link href="/" className="mr-4">
                    <Image
                        className="h-4 w-auto"
                        src="/img/Hero4005_Logo_1.png"
                        alt="Weblio英会話"
                        width={96}
                        height={16}
                        priority
                    />
                </Link>
                <div className="flex items-center h-full">
                    {/* ログイン */}
                    <a className="mr-4 text-center" href="/login">
                        <Image
                            src="/img/Hero4005_Icon_1.svg"
                            alt="login"
                            className="mx-auto"
                            width={24}
                            height={24}
                        />
                        <div className="whitespace-nowrap text-[10px]">ログイン</div>
                    </a>

                    {/* 無料体験レッスン（オレンジボタン） */}
                    <a
                        className="flex items-center justify-center mr-4 w-[4.375rem] h-full text-white bg-[#ff6e4a] shadow-[2px_2px_10px_rgba(0,0,0,0.1)]"
                        href="/register"
                    >
                        <div className="text-center font-bold text-[12px] leading-tight">
                            無料体験<br />レッスン
                        </div>
                    </a>

                    {/* メニュー切替 */}
                    <button
                        className="text-center w-9"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
                    >
                        {open ? (
                            <div className="js-opened">
                                <Image src="/img/Hero4005_Icon_3.svg" alt="close" className="mx-auto" width={24} height={24} />
                                <div className="flex justify-center whitespace-nowrap header__menu__text text-[10px]">閉じる</div>
                            </div>
                        ) : (
                            <div className="js-closed">
                                <Image
                                    src="/img/Hero4005_Icon_2.svg"
                                    alt="menu"
                                    className="mx-auto"
                                    width={24}
                                    height={24}
                                />
                                <div className="flex justify-center whitespace-nowrap header__menu__text text-[10px]">メニュー</div>
                            </div>
                        )}
                    </button>
                </div>
            </div>

            {/* ドロワー（SP/MD） */}
            <div
                aria-hidden={!open}
                className={`fixed left-0 right-0 z-[55] top-[3.125rem] transition-[height] duration-300 ease-out md:hidden ${open ? "h-[calc(100vh-3.125rem)]" : "h-0"}`}
            >
                <button className={`absolute inset-0 bg-black/40 ${open ? "pointer-events-auto" : "pointer-events-none"}`} onClick={() => setOpen(false)} aria-label="オーバーレイを閉じる" />
                <aside className={`absolute inset-0 bg-white h-full overflow-y-auto`}>
                    <nav className="px-4 py-4">
                        <ul className="divide-y divide-white/100 rounded-lg ">
                            <li>
                                <Link href="/" className="block px-4 py-3 text-[14px] font-bold">Weblio英会話TOP</Link>
                            </li>
                            <li>
                                <button className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold">
                                    初めての方へ
                                    <span className="inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#ff6e4a]" />
                                </button>
                            </li>
                            <li>
                                <Link href="/plans" className="block px-4 py-3 text-[14px] font-bold">料金プラン</Link>
                            </li>
                            <li>
                                <button className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold">
                                    レッスン予約
                                    <span className="inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#ff6e4a]" />
                                </button>
                            </li>
                            <li>
                                <button className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold">
                                    講師
                                    <span className="inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#ff6e4a]" />
                                </button>
                            </li>
                            <li>
                                <button className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold">
                                    教材
                                    <span className="inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#ff6e4a]" />
                                </button>
                            </li>
                            <li>
                                <button className="w-full flex items-center justify-between px-4 py-3 text-[14px] font-bold">
                                    ヘルプ
                                    <span className="inline-block h-2 w-2 rotate-45 border-b-2 border-r-2 border-[#ff6e4a]" />
                                </button>
                            </li>
                            <li>
                                <Link href="https://eikaiwa.weblio.jp/column/" className="block px-4 py-3 text-[14px] font-bold">英会話コラム</Link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </header>
    );
}
