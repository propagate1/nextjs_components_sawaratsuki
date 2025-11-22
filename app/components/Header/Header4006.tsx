"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

// Product-Header.html を参照し、クラス単位の指定を Tailwind で移植。
// PC 版レイアウトを忠実に再現するため、原 HTML 構造を保持しつつ display:none の要素も配置。

export default function Header4006() {
    const [spOpen, setSpOpen] = useState(false);
    const [spActive, setSpActive] = useState<string | null>("nav01"); // SP サービス展開中ID
    const [showFixHead, setShowFixHead] = useState(false); // 固定ヘッダー (PC)
    const [activeSub, setActiveSub] = useState<string | null>(null); // PC サブナビ ID

    useEffect(() => {
        const updateFixHead = () => {
            const bodyHasFixed = typeof document !== "undefined" && document.body.classList.contains("fixed");
            if (bodyHasFixed) {
                setShowFixHead(true);
                return;
            }
            setShowFixHead(window.scrollY > 150);
        };
        updateFixHead();
        window.addEventListener("scroll", updateFixHead, { passive: true });
        window.addEventListener("resize", updateFixHead);
        return () => {
            window.removeEventListener("scroll", updateFixHead);
            window.removeEventListener("resize", updateFixHead);
        };
    }, []);
    // PC サブナビ表示/非表示制御: hover と focus の両方で開く。離脱時は閉じる。
    const openSub = useCallback((id: string) => setActiveSub(id), []);
    const closeSub = useCallback(() => setActiveSub(null), []);

    // ESC キーでサブナビを閉じる
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeSub();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [closeSub]);

    return (
        <>
            {/* header-sp.html ではオーバーレイ未使用のため削除 */}

            <header
                id="comhead"
                className="absolute left-1/2 top-0 w-full -ml-[50%] p-0 z-[102] font-['Noto_Sans_JP',sans-serif] text-[62.5%]"
                onMouseLeave={closeSub}
            >
                <div className="inner relative mx-auto flex items-stretch max-w-[1150px] justify-between bg-white h-[44px] lg:h-auto">
                    <p className="logo flex w-[202px] items-center justify-center px-[10px] lg:border-r lg:border-[#e2e2e2]">
                        <Link href="/" className="block h-[42px] w-[141px] mt-[3px] mx-auto text-[#333] text-[18px] leading-[42px] text-center no-underline">
                            オフィスコム
                        </Link>
                    </p>

                    <div className="head_l ml-auto box-border pr-[12px] text-[#333] w-full lg:w-auto lg:ml-auto lg:pt-[17px]">
                        <p className="tel ml-auto mb-[16px] hidden lg:table px-[10px] text-left">
                            <span className="inline-block rounded-[3px] border-2 border-[#d1322e] px-[6px] py-[4px] text-[12px] font-bold leading-none text-[#d1322e] align-top">全国対応</span>
                            <a
                                href="tel:0120535121"
                                className="ml-0 mt-[5px] inline-block pl-[10px] align-top text-[24px] font-bold leading-none text-[#333] no-underline"
                            >
                                0120-535-121
                            </a>
                            <small className="mt-[4px] block pl-[74px] text-[10px] leading-none text-[#333]">受付時間:10:00~17:00 (土・日・祝日除く)</small>
                        </p>

                        {/* PC ナビ (lg以上) */}
                        <nav className="hidden lg:block" aria-label="グローバルナビゲーション">
                            <ul className="flex w-full list-none p-0 text-[14px] leading-[1.4] text-[#333]" role="menubar">
                                <li className="nav01 ml-0" role="none">
                                    <Link
                                        href="/service/"
                                        role="menuitem"
                                        aria-haspopup="true"
                                        aria-expanded={activeSub === "sn01"}
                                        onMouseEnter={() => openSub("sn01")}
                                        onFocus={() => openSub("sn01")}
                                        className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                    >
                                        サービスから探す
                                    </Link>
                                </li>
                                {/* 課題から探す: サブナビ無し */}
                                <li className="ml-[3px]" role="none">
                                    <Link
                                        href="/solution/"
                                        role="menuitem"
                                        aria-haspopup="false"
                                        aria-expanded={false}
                                        className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                    >
                                        課題から探す
                                    </Link>
                                </li>
                                <li className="nav02 ml-[3px]" role="none">
                                    <Link
                                        href="/case/cate_all.html"
                                        role="menuitem"
                                        aria-haspopup="true"
                                        aria-expanded={activeSub === "sn03"}
                                        onMouseEnter={() => openSub("sn03")}
                                        onFocus={() => openSub("sn03")}
                                        className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                    >
                                        施工事例集
                                    </Link>
                                </li>
                                <li className="nav03 ml-[3px]" role="none">
                                    <Link
                                        href="/case/cate_interview.html"
                                        role="menuitem"
                                        aria-haspopup="false"
                                        aria-expanded={false}
                                        className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                    >
                                        お客様の声
                                    </Link>
                                </li>
                                <li className="nav04 ml-[3px]" role="none">
                                    <Link
                                        href="/company/"
                                        role="menuitem"
                                        aria-haspopup="true"
                                        aria-expanded={activeSub === "sn04"}
                                        onMouseEnter={() => openSub("sn04")}
                                        onFocus={() => openSub("sn04")}
                                        className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                    >
                                        会社案内
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        {/* SP ナビ (header-sp.html 構造) */}

                    </div>

                    {/* 右側ブロック (PC:表示, SP:DOM保持) */}
                    <div className="head_r relative w-[200px] lg:w-[420px] text-[62%]">
                        {/* SP: 右側の赤帯（4セル） */}
                        <ul className="flex h-full list-none p-0 lg:hidden">
                            <li className="w-[50px] h-[44px] flex flex-col items-center justify-center text-[6px] leading-tight">
                                <Link href="/service/3dsimulator.html" className="flex flex-col items-center justify-center w-[50px] h-[44px] text-black no-underline">
                                    <span className="block">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="40px" fill="#D1322E"><path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 150.89v297.44ZM480-518l256.33-149L480-815.33 223-667l257 149ZM153.33-256q-15.83-9.28-24.58-24.48-8.75-15.19-8.75-33.19v-332.66q0-18 8.75-33.19 8.75-15.2 24.58-24.48l293.34-169q15.88-9 33.44-9 17.56 0 33.22 9l293.34 169q15.83 9.28 24.58 24.48 8.75 15.19 8.75 33.19v332.66q0 18-8.75 33.19-8.75 15.2-24.58 24.48L513.33-87q-15.88 9-33.44 9-17.56 0-33.22-9L153.33-256ZM480-480Z" /></svg>
                                    </span>
                                    <span className="mt-[2px] text-center">3D<br />シミュレータ</span>
                                </Link>
                            </li>
                            <li className="w-[50px] h-[44px] flex flex-col items-center justify-center text-[6px] leading-tight border-l border-black/10">
                                <Link href="/showroom/" className="flex flex-col items-center justify-center w-[50px] h-[44px] text-black no-underline">
                                    <span className="block">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="40px" fill="#D1322E"><path d="M80-120v-720h393.33v163.33H880V-120H80Zm66.67-66.67h260v-96.66h-260v96.66Zm0-163.33h260v-96.67h-260V-350Zm0-163.33h260V-610h-260v96.67Zm0-163.34h260v-96.66h-260v96.66Zm326.66 490h340V-610h-340v423.33Zm80-260v-66.66h163.34v66.66H553.33Zm0 163.34V-350h163.34v66.67H553.33Z" /></svg>
                                    </span>
                                    <span className="mt-[2px]">オフィス見学<br />ショールーム</span>
                                </Link>
                            </li>
                            <li className="w-[50px] h-[44px] flex flex-col items-center justify-center text-[6px] leading-tight border-l border-black/10">
                                <Link href="/catalog/" className="flex flex-col items-center justify-center w-[50px] h-[44px] text-black no-underline">
                                    <span className="block">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#D1322E"><path d="M288-288h288v-72H288v72Zm0-156h384v-72H288v72Zm0-156h384v-72H288v72Zm-72 456q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" /></svg>
                                    </span>
                                    <span className="mt-[2px]">カタログ</span>
                                </Link>
                            </li>
                            <li className="w-[50px] h-[44px] flex flex-col items-center justify-center text-[6px] leading-tight border-l border-black/10">
                                <button
                                    type="button"
                                    aria-label="メニューを開閉"
                                    onClick={() => setSpOpen(v => !v)}
                                    className="flex flex-col items-center justify-center w-[50px] h-[44px] text-black"
                                >
                                    <span className="block w-[16px] h-[2px] bg-[#D1322E] mb-[3px]" />
                                    <span className="block w-[16px] h-[2px] bg-[#D1322E] mb-[3px]" />
                                    <span className="block w-[16px] h-[2px] bg-[#D1322E]" />
                                    <span className="mt-[2px]">メニュー</span>
                                </button>
                            </li>
                        </ul>

                        {/* PC: 右側の大きな赤帯（4セル） */}
                        <ul className="hidden h-full list-none p-0 lg:flex bg-[#D1322E]">
                            <li className="simulator w-1/4 text-center">
                                <Link
                                    href="/service/3dsimulator.html"
                                    className="block h-full px-[10%] text-[12px] font-bold leading-[1.25] text-white no-underline bg-[url('/img/ico_simulator.png')] bg-[position:50%_20px] bg-no-repeat"
                                >
                                    <span className="block w-[80%] h-auto mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff"><path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 150.89v297.44ZM480-518l256.33-149L480-815.33 223-667l257 149ZM153.33-256q-15.83-9.28-24.58-24.48-8.75-15.19-8.75-33.19v-332.66q0-18 8.75-33.19 8.75-15.2 24.58-24.48l293.34-169q15.88-9 33.44-9 17.56 0 33.22 9l293.34 169q15.83 9.28 24.58 24.48 8.75 15.19 8.75 33.19v332.66q0 18-8.75 33.19-8.75 15.2-24.58 24.48L513.33-87q-15.88 9-33.44 9-17.56 0-33.22-9L153.33-256ZM480-480Z" /></svg>
                                    </span>
                                    <span className="mt-[2px] text-center text-white">3D<br />シミュレータ</span>
                                </Link>
                            </li>
                            <li
                                className="showroom w-1/4 text-center"
                                onMouseEnter={() => openSub("sn06")}
                                onFocus={() => openSub("sn06")}
                            >
                                <Link
                                    href="/showroom.html"
                                    className="block h-full px-[10%] text-[12px] font-bold leading-[1.25] text-white no-underline bg-[url('/img/ico_simulator.png')] bg-[position:50%_20px] bg-no-repeat"
                                >
                                    <span className="block w-[80%] h-auto mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff"><path d="M80-120v-720h393.33v163.33H880V-120H80Zm66.67-66.67h260v-96.66h-260v96.66Zm0-163.33h260v-96.67h-260V-350Zm0-163.33h260V-610h-260v96.67Zm0-163.34h260v-96.66h-260v96.66Zm326.66 490h340V-610h-340v423.33Zm80-260v-66.66h163.34v66.66H553.33Zm0 163.34V-350h163.34v66.67H553.33Z" /></svg>
                                    </span>
                                    <span className="mt-[2px] text-center text-white">オフィス見学<br />ショールーム</span>
                                </Link>
                                {/* showroom subnav (head_r配下に配置) */}
                            </li>
                            <li className="catalog w-1/4 text-center">
                                <Link
                                    href="/catalog/"
                                    className="block h-full px-[10%] text-[12px] font-bold leading-[1.25] text-white no-underline bg-[url('/img/ico_simulator.png')] bg-[position:50%_20px] bg-no-repeat"
                                >
                                    <span className="block w-[80%] h-auto mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff"><path d="M288-288h288v-72H288v72Zm0-156h384v-72H288v72Zm0-156h384v-72H288v72Zm-72 456q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" /></svg>
                                    </span>
                                    <span className="pt-[10px] text-center text-white">カタログ請求</span>
                                </Link>
                            </li>
                            <li className="contact relative w-1/4 bg-[#333] text-center">
                                <Link
                                    href="/catalog/"
                                    className="block h-full px-[10%] text-[12px] font-bold leading-[1.25] text-white no-underline bg-[url('/img/ico_simulator.png')] bg-[position:50%_20px] bg-no-repeat"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                                    <span className="pt-[10px] text-center text-white">お問い合わせ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* SP: 下段バー（お問い合わせ + TEL） 常時表示 */}
                <div className="lg:hidden w-full bg-[#e5e5e5]">
                    <div className="mx-auto max-w-[1150px]">
                        <div className="flex">
                            <Link href="/mail/mail.html" className="flex h-[42px] flex-1 items-center justify-center gap-2 bg-[#333] text-white no-underline">
                                {/* orange dot */}
                                <span className="inline-block h-[8px] w-[8px] rounded-full bg-[#ff961b]" />
                                {/* envelope icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
                                    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5 7.3 5.3L18.8 6H4.2Zm15.3 2.1-7.6 5.5a1 1 0 0 1-1.2 0L3.1 8.1V17.5c0 .55.45 1 1 1h15.8c.55 0 1-.45 1-1V8.1Z" />
                                </svg>
                                <span className="text-[13px]">お問い合わせ</span>
                            </Link>
                            <Link href="tel:0120535121" className="flex h-[42px] flex-1 items-center justify-center gap-2 bg-[#d1322e] text-white no-underline">
                                <span className="rounded-[3px] bg-white text-[#D1322E] px-[6px] py-[2px] text-[10px]">全国対応</span>
                                <span className="text-[12px] font-bold tracking-wide">0120-535-121</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SP: メニュー押下時のオーバーレイナビ（ヘッダー下・全幅） */}
                <div className={`${spOpen ? 'block' : 'hidden'} lg:hidden relative z-[101]`}>
                    {/* 背景の半透明レイヤー（ヘッダー2段分の下から） */}
                    <div
                        className="fixed left-0 right-0 bottom-0 top-[92px] bg-black/30"
                        onClick={() => setSpOpen(false)}
                        aria-hidden="true"
                    />
                    <nav
                        className="fixed left-0 right-0 bottom-0 top-[92px] bg-white overflow-y-auto"
                        aria-label="SPオーバーレイナビゲーション"
                    >
                        <ul className="list-none m-0 p-0 text-[14px] leading-[1.4] text-[#333]">
                            {/* サービスから探す（アコーディオン） */}
                            <li className="nav01">
                                <button
                                    type="button"
                                    className="w-full text-left px-4 py-3 font-medium relative pr-10 border-b border-[#ededed]"
                                    aria-expanded={spActive === 'nav01'}
                                    onClick={() => setSpActive(spActive === 'nav01' ? null : 'nav01')}
                                >
                                    サービスから探す
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </button>
                                <ul className={`${spActive === 'nav01' ? 'block' : 'hidden'} m-0 p-0 list-none bg-[#f7f7f7]`}>
                                    {[
                                        { href: '/service/office_furniture.html', label: 'オフィス家具' },
                                        { href: '/service/layout.html', label: 'オフィスレイアウト' },
                                        { href: '/service/relocation.html', label: 'オフィス移転' },
                                        { href: '/service/partition.html', label: '施工型パーテーション' },
                                        { href: '/service/lowpartition/pspartition.html', label: 'PSパーテーション' },
                                        { href: '/service/renovation.html', label: '内装工事' },
                                        { href: '/service/sign.html', label: 'サイン工事' },
                                        { href: '/service/oafloor.html', label: 'OAフロア・床工事' },
                                        { href: '/service/tilecarpet.html', label: 'タイルカーペット' },
                                        { href: '/service/electrical.html', label: '電気・照明工事' },
                                        { href: '/service/security.html', label: '防犯セキュリティ' },
                                        { href: '/service/phone_choose.html', label: 'ビジネスフォン・回線工事、クラウドPBX' },
                                        { href: '/service/callrecording.html', label: '通話録音・迷惑電話防止システム' },
                                        { href: '/service/copy.html', label: '複合機・コピー機' },
                                        { href: '/service/workbooth.html', label: '個室ブース' },
                                        { href: '/service/smoking_scandinavia.html', label: '喫煙・分煙ブース' },
                                        { href: '/service/maxhub.html', label: 'MAXHUB' },
                                        { href: '/service/waterserver.html', label: 'オフィス・法人向けウォーターサーバー' },
                                        { href: '/service/coating.html', label: 'オフィスまるごと抗菌コーティング' },
                                        { href: '/service/subsidy.html', label: '助成金・補助金の申請サポート' },
                                        { href: '/service/tax_counsellor.html', label: '税理士紹介' },
                                        { href: '/service/office_brokerage.html', label: 'オフィス紹介' },
                                        { href: '/service/restoration.html', label: '原状回復・原状復帰' },
                                        { href: '/partner.html', label: '協力業者募集' }
                                    ].map(item => (
                                        <li key={item.href} className="border-t border-[#ededed]">
                                            <Link href={item.href} className="relative block px-6 py-3 text-[13px] leading-[1.4] text-[#333]">{item.label}
                                                <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* 単独リンク */}
                            <li className="border-b border-[#ededed]">
                                <Link href="/solution/" className="relative block px-4 py-3">課題から探す
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </Link></li>
                            <li className="border-b border-[#ededed]">
                                <Link href="/case/cate_all.html" className="relative block px-4 py-3">施工事例集
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </Link></li>
                            <li className="border-b border-[#ededed]">
                                <Link href="/case/cate_interview.html" className="relative block px-4 py-3">お客様の声
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </Link></li>
                            <li className="border-b border-[#ededed]">
                                <Link href="/case/cate_beforeafter.html" className="relative block px-4 py-3">ビフォーアフター
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </Link></li>
                            <li className="border-b border-[#ededed]">
                                <Link href="/company/" className="relative block px-4 py-3">会社案内
                                    <span className={`absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 border-r-2 border-b-2 border-[#D1322E] transition-transform rotate-310`}></span>
                                </Link></li>
                        </ul>
                    </nav>
                </div>

                {/* ===== Global Sub Navigation blocks (full width) ===== */}
                {/* sn01: オフィスサービス */}
                <div
                    className={`sub_nav sn01 ${activeSub === "sn01" ? "block" : "hidden"} absolute left-0 top-full w-full bg-[#ededed] pt-[30px] pb-[10px] z-[120] text-left`}
                    onMouseLeave={closeSub}
                >
                    <div className="inner mx-auto max-w-[1100px]">
                        {/* in_l */}
                        <div className="in_l float-left w-[32%] max-w-[500px] px-[0] pl-[3.9%] pr-[3%] box-border">
                            <p className="cat_tit m-0 mb-[10px] text-[2.4rem] font-bold w-full">
                                オフィスサービス
                                <span className="block text-[1.4rem] text-[#d1322e]">SERVICE</span>
                            </p>
                            <p className="btn list m-0 mb-[10px]">
                                <Link href="/service/" className="overimg block w-[80%] border border-[#333] bg-[#333] text-center text-white no-underline px-[10px] py-[5px]">
                                    <span className="inline-block pr-[15px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:right_50%]">一覧へ</span>
                                </Link>
                            </p>
                            <p className="btn faq m-0">
                                <Link href="/service/faq.html" className="overimg block w-[80%] border border-[#333] text-center text-[#333] no-underline px-[10px] py-[5px]">
                                    <span className="inline-block pl-[20px] bg-[url('/img/ico_faq.png')] bg-no-repeat bg-[position:0_50%]">よくあるご質問</span>
                                </Link>
                            </p>
                        </div>
                        {/* in_r */}
                        <div className="in_r float-left w-[72%] max-w-[800px]">
                            <div className="list bnr text-[0]">
                                <ul className="m-0 p-0 list-none">
                                    {[
                                        { href: '/service/office_furniture.html', img: '/common/img/thumb_smenu_svc16.jpg', alt: 'オフィス家具', label: 'オフィス家具' },
                                        { href: '/service/layout.html', img: '/common/img/thumb_smenu_svc01.jpg', alt: 'オフィスレイアウト', label: 'オフィスレイアウト' },
                                        { href: '/service/relocation.html', img: '/common/img/thumb_smenu_svc02.jpg', alt: 'オフィス移転', label: 'オフィス移転' },
                                        { href: '/service/partition.html', img: '/common/img/thumb_smenu_svc03.jpg', alt: '施工型パーテーション', label: '施工型パーテーション' },
                                        { href: '/service/lowpartition/pspartition.html', img: '/common/img/thumb_smenu_svc27.jpg', alt: 'PSパーテーション', label: 'PSパーテーション' },
                                        { href: '/service/renovation.html', img: '/common/img/thumb_smenu_svc04.jpg', alt: '内装工事', label: '内装工事' },
                                        { href: '/service/sign.html', img: '/common/img/thumb_smenu_svc25.jpg', alt: 'サイン工事', label: 'サイン工事' },
                                        { href: '/service/oafloor.html', img: '/common/img/thumb_smenu_svc08.jpg', alt: 'OAフロア・床工事', label: 'OAフロア・床工事' },
                                        { href: '/service/tilecarpet.html', img: '/common/img/thumb_smenu_svc09.jpg', alt: 'タイルカーペット', label: 'タイルカーペット' },
                                        { href: '/service/electrical.html', img: '/common/img/thumb_smenu_svc11.jpg', alt: '電気・照明工事', label: '電気・照明工事' },
                                        { href: '/service/security.html', img: '/common/img/thumb_smenu_svc07.jpg', alt: '防犯セキュリティ', label: '防犯セキュリティ' },
                                        { href: '/service/phone_choose.html', img: '/common/img/thumb_smenu_svc22.jpg', alt: 'ビジネスフォン・回線工事、クラウドフォン', label: 'ビジネスフォン・回線工事、クラウドフォン' },
                                        { href: '/service/callrecording.html', img: '/common/img/thumb_smenu_svc10.jpg', alt: '通話録音・迷惑電話防止システム', label: '通話録音・迷惑電話防止システム' },
                                        { href: '/service/copy.html', img: '/common/img/thumb_smenu_svc05.jpg', alt: '複合機・コピー機', label: '複合機・コピー機' },
                                        { href: '/service/workbooth.html', img: '/common/img/thumb_smenu_svc24.jpg', alt: '個室ブース', label: '個室ブース' },
                                        { href: '/service/smoking_scandinavia.html', img: '/common/img/thumb_smenu_svc12.jpg', alt: '喫煙ブース', label: '喫煙・分煙ブース' },
                                        { href: '/service/maxhub.html', img: '/common/img/thumb_smenu_svc26.jpg', alt: 'MAXHUB', label: 'MAXHUB' },
                                        { href: '/service/waterserver.html', img: '/common/img/thumb_smenu_svc23.jpg', alt: 'オフィス・法人向けウォーターサーバー', label: 'オフィス・法人向けウォーターサーバー' },
                                        { href: '/service/coating.html', img: '/common/img/thumb_smenu_svc17.jpg', alt: 'オフィスまるごと抗菌コーティング', label: 'オフィスまるごと抗菌コーティング' },
                                        { href: '/service/subsidy.html', img: '/common/img/thumb_smenu_svc21.jpg', alt: '助成金・補助金の申請サポート', label: '助成金・補助金の申請サポート' },
                                        { href: '/service/tax_counsellor.html', img: '/common/img/thumb_smenu_svc15.jpg', alt: '税理士紹介', label: '税理士紹介' },
                                        { href: '/service/office_brokerage.html', img: '/common/img/thumb_smenu_svc18.jpg', alt: 'オフィス紹介', label: 'オフィス紹介' },
                                        { href: '/service/restoration.html', img: '/common/img/thumb_smenu_svc13.jpg', alt: '原状回復・原状復帰', label: '原状回復・原状復帰' },
                                        { href: '/partner.html', img: '/common/img/thumb_smenu_svc20.jpg', alt: '協力業者募集', label: '協力業者募集' }
                                    ].map((item) => (
                                        <li
                                            key={item.href}
                                            className="inline-block align-top w-[21.3%] mb-[30px] mr-[3.15%]"
                                        >
                                            <Link href={item.href} className="block text-[#333] no-underline">
                                                <div className="relative w-full pt-[39.13%] bg-[#e5e5e5]" aria-hidden="true" />
                                                <p className="mt-[3px] pl-[12px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:0_.5em] text-[13px] leading-[1.3]">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="after:table after:clear-both after:content-['']" />
                    </div>
                </div>

                {/* sn02 削除: サブナビ無し */}

                {/* sn03 placeholder */}
                <div
                    className={`sub_nav sn03 ${activeSub === "sn03" ? "block" : "hidden"} absolute left-0 top-full w-full bg-[#ededed] pt-[30px] pb-[10px] z-[120] text-left`}
                    onMouseLeave={closeSub}
                >
                    <div className="inner mx-auto max-w-[1100px]">
                        {/* in_l: 施工事例集 */}
                        <div className="in_l float-left w-[18.1%] max-w-[275px] px-[0] pl-[3.9%] pr-[3%] box-border">
                            <p className="cat_tit m-0 mb-[10px] text-[2.4rem] font-bold">
                                施工事例集
                                <span className="block text-[1.4rem] text-[#d1322e]">CASE</span>
                            </p>
                            <p className="btn list m-0 mb-[10px]">
                                <Link href="/case/cate_all.html" className="overimg block w-[80%] border border-[#333] bg-[#333] text-center text-white no-underline px-[10px] py-[5px]"><span className="inline-block pr-[15px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:right_50%]">全ての施工事例</span></Link>
                            </p>
                            <p className="btn list m-0">
                                <Link href="/case/cate_beforeafter.html" className="overimg block w-[80%] border border-[#333] bg-[#333] text-center text-white no-underline px-[10px] py-[5px]"><span className="inline-block pr-[15px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:right_50%]">ビフォーアフター</span></Link>
                            </p>
                        </div>
                        {/* in_r: list.bnr 2段構成 */}
                        <div className="in_r float-left w-[75%] max-w-[825px]">
                            <div className="list bnr text-[0]">
                                <ul className="m-0 p-0 list-none">
                                    {[
                                        { href: '/case/cate_entrance.html', label: 'エントランス' },
                                        { href: '/case/cate_meeting.html', label: '会議スペース' },
                                        { href: '/case/cate_work.html', label: 'ワークスペース' },
                                        { href: '/case/cate_partition.html', label: 'パーテーション' }
                                    ].map((item) => (
                                        <li key={item.href} className="inline-block align-top w-[21.3%] mb-[30px] mr-[3.15%]">
                                            <Link href={item.href} className="block text-[#333] no-underline">
                                                {/* 176x70 -> 39.77% */}
                                                <div className="relative w-full pt-[39.77%] bg-[#e5e5e5]" aria-hidden="true" />
                                                <p className="mt-[3px] pl-[12px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:0_.5em] text-[13px] leading-[1.3]">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <ul className="m-0 p-0 list-none">
                                    {[
                                        { href: '/case/cate_partition.html#aluminum', label: 'アルミパーテーション' },
                                        { href: '/case/cate_partition.html#steel', label: 'スチールパーテーション' },
                                        { href: '/case/cate_partition.html#glass', label: 'ガラスパーテーション' },
                                        { href: '/case/cate_partition.html#wall', label: '造作壁' }
                                    ].map((item) => (
                                        <li key={item.href} className="inline-block align-top w-[21.3%] mb-[30px] mr-[3.15%]">
                                            <Link href={item.href} className="block text-[#333] no-underline">
                                                <div className="relative w-full pt-[39.77%] bg-[#e5e5e5]" aria-hidden="true" />
                                                <p className="mt-[3px] pl-[12px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:0_.5em] text-[13px] leading-[1.3]">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="after:table after:clear-both after:content-['']" />
                    </div>
                </div>

                {/* sn04: 会社案内 */}
                <div
                    className={`sub_nav sn04 ${activeSub === "sn04" ? "block" : "hidden"} absolute left-0 top-full w-full bg-[#ededed] pt-[30px] pb-[10px] z-[120] text-left`}
                    onMouseLeave={closeSub}
                >
                    <div className="inner mx-auto max-w-[1100px]">
                        <div className="in_l float-left w-[18.1%] max-w-[275px] px-[0] pl-[3.9%] pr-[3%] box-border">
                            <p className="cat_tit m-0 mb-[10px] text-[2.4rem] font-bold">
                                会社案内
                                <span className="block text-[1.4rem] text-[#d1322e]">COMPANY</span>
                            </p>
                            <p className="btn list m-0 mb-[10px]">
                                <Link href="/company/" className="overimg block w-[80%] border border-[#333] bg-[#333] text-center text-white no-underline px-[10px] py-[5px]">
                                    <span className="inline-block pr-[15px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:right_50%]">一覧へ</span>
                                </Link>
                            </p>
                        </div>
                        <div className="in_r float-left w-[75%] max-w-[825px]">
                            <div className="list txt">
                                <ul className="m-0 p-0 list-none">
                                    {[
                                        { href: '/company/greeting.html', label: '社長挨拶' },
                                        { href: '/company/profile.html', label: '経営理念・会社概要' },
                                        { href: '/company/history.html', label: '会社沿革' },
                                        { href: '/company/media.html', label: 'メディア履歴' },
                                        { href: '/company/performance.html', label: '取引実績' },
                                        { href: '/company/activity.html', label: '環境・社会活動' },
                                        { href: '/company/declaration-of-health.html', label: '健康経営宣⾔' },
                                        { href: '/company/parsonal.html', label: '個人情報の取り扱いについて', target: '_blank' },
                                        { href: '/recruit/', label: '求人情報', target: '_blank' },
                                        { href: '/partner.html', label: '協力業者募集', target: '_blank' },
                                        { href: '/company/group.html', label: 'グループ構成図' }
                                    ].map((item) => (
                                        <li key={item.href} className="inline-block align-top w-[29%] mb-[20px] mr-[3.15%]">
                                            <Link href={item.href} target={item.target ?? undefined} className="block text-[#333] no-underline">
                                                <p className="m-0 pl-[12px] bg-[url('/img/arw.png')] bg-no-repeat bg-[position:0_.6em] text-[16px] leading-[1.3]">{item.label}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="after:table after:clear-both after:content-['']" />
                    </div>
                </div>
                <div
                    className={`sub_nav sn06 ${activeSub === "sn06" ? "block" : "hidden"} absolute left-0 top-full w-full bg-[#ededed] pt-[30px] pb-[10px] z-[120] text-left`}
                    onMouseLeave={closeSub}
                >
                    <div className="inner mx-auto max-w-[1100px]">
                        <div
                            className={`sub_nav sn06 ${activeSub === 'sn06' ? 'block' : 'hidden'} absolute left-0 top-full w-full h-[256.5px] pt-[30px] pb-[60px] my-0 bg-[#ededed] z-[120] text-left`}
                            onMouseLeave={closeSub}
                        >
                            <div className="inner mx-auto max-w-[1100px]">
                                <ul className="m-0 p-0 list-none flex gap-[3%]">
                                    <li className="w-[48.5%]">
                                        <div className="mb-[15px]">
                                            <p className="m-0 mb-[6px] text-[16px] font-bold">オフィス見学はこんな方にお勧めです。</p>
                                            <p className="m-0 text-[13px] leading-relaxed">・個室ブースの見学・体験をご希望の方</p>
                                            <p className="m-0 text-[13px] leading-relaxed">
                                                ・実際にオフィスコムの社員が働いている現場を通じて、<br className="hidden sm:inline" />
                                                &emsp;レイアウトやソリューションを見学・体感したい方
                                            </p>
                                            <p className="m-0 text-[14px] text-[#cf004]">(※東京本社ではオフィス家具の販売は行っていません。)</p>
                                        </div>
                                        <Link href="/showroom/liveoffice.html" className="block no-underline text-[#333]">
                                            <Image
                                                src="/common/img/thumb_smenu_showroom01.jpg"
                                                alt="オフィス見学"
                                                width={200}
                                                height={120}
                                                className="block w-[200px] h-auto"
                                            />
                                            <p className="m-0 mt-[6px] text-[13px] leading-[1.3]">
                                                オフィス見学<br />
                                                <small className="text-[11px] text-[#666]">※東京本社・市ヶ谷ライブショールーム</small>
                                            </p>
                                        </Link>
                                    </li>
                                    <li className="w-[48.5%]">
                                        <div className="mb-[15px]">
                                            <p className="m-0 mb-[6px] text-[16px] font-bold">ショールームはこんな方にお勧めです。</p>
                                            <p className="m-0 text-[13px] leading-relaxed">・実際のオフィス家具を見て試してから検討・購入したい方</p>
                                            <p className="m-0 text-[13px] leading-relaxed">・オフィス移転やオフィスのリニューアル工事をご相談したい方</p>
                                            <p className="m-0 text-[13px] leading-relaxed">・ビジネスフォンや複合機、LAN・ネットワーク工事をご相談したい方</p>
                                            <p className="m-0 text-[14px] text-[#c400f]">(※個室ブースは東京本社で見学・体験できます。)</p>
                                        </div>
                                        <Link href="/showroom/" className="block no-underline text-[#333]">
                                            <Image
                                                src="/common/img/thumb_smenu_showroom02.jpg"
                                                alt="ショールーム"
                                                width={200}
                                                height={120}
                                                className="block w-[200px] h-auto"
                                            />
                                            <p className="m-0 mt-[6px] text-[13px] leading-[1.3]">
                                                ショールーム<br />
                                                <small className="text-[11px] text-[#666]">※全国11拠点、1営業所</small>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            {showFixHead && (
                <div className="fix_head fixed left-0 top-0 z-[1001] w-full border-b border-[#d9d9d9] bg-white hidden lg:block">
                    <div className="inner mx-auto flex max-w-[1150px] justify-between">
                        <p className="fix_logo flex items-center border-r border-[#e2e2e2]">
                            <Link href="/" className="block w-[118px] text-[#333] no-underline">
                                オフィスコム
                            </Link>
                        </p>
                        <ul className="mr-[3px] flex list-none self-end pb-[6px] text-center text-[14px] leading-none text-[#333]">
                            <li className="nav01 inline-block">
                                <Link
                                    href="/service/"
                                    className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                >
                                    サービスから探す
                                </Link>
                            </li>
                            <li className="inline-block">
                                <Link
                                    href="/solution/"
                                    className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                >
                                    課題から探す
                                </Link>
                            </li>
                            <li className="nav02 inline-block">
                                <Link
                                    href="/case/cate_all.html"
                                    className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                >
                                    施工事例集
                                </Link>
                            </li>
                            <li className="nav03 inline-block">
                                <Link
                                    href="/case/cate_interview.html"
                                    className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                >
                                    お客様の声
                                </Link>
                            </li>
                            <li className="nav04 inline-block">
                                <Link
                                    href="/company/"
                                    className="block border-b-[3px] border-white px-[10px] pb-[13px] text-[#333] hover:border-[#d1322e] hover:no-underline"
                                >
                                    会社案内
                                </Link>
                            </li>
                        </ul>
                        <div className="fix_head_r w-[48%] max-w-[528px] bg-[#d1322e]">
                            <ul className="flex flex-wrap list-none p-0 text-white">
                                <li className="simulator w-1/4">
                                    <Link
                                        href="/service/3dsimulator.html"
                                        className="flex items-center justify-center border-l border-[#c4000f] first:border-l-0 text-[12px] font-bold leading-[1.25] text-white no-underline"
                                    >
                                        <span className="flex h-[61px] items-center bg-[url('/img/ico_simulator.png')] bg-[length:18px_auto] bg-[position:0_50%] bg-no-repeat pl-[30px] text-left">
                                            3Dシミュレーター
                                        </span>
                                    </Link>
                                </li>
                                <li className="showroom w-1/4">
                                    <Link
                                        href="/showroom/"
                                        className="flex items-center justify-center border-l border-[#c4000f] text-[12px] font-bold leading-[1.25] text-white no-underline"
                                    >
                                        <span className="flex h-[61px] items-center bg-[url('/img/ico_showroom_s.png')] bg-[position:0_50%] bg-no-repeat pl-[30px] text-left">
                                            オフィス見学ショールーム
                                        </span>
                                    </Link>
                                </li>
                                <li className="catalog w-1/4">
                                    <Link
                                        href="/catalog/"
                                        className="flex items-center justify-center border-l border-[#c4000f] text-[12px] font-bold leading-[1.25] text-white no-underline"
                                    >
                                        <span className="flex h-[61px] items-center bg-[url('/img/ico_catalog_s.png')] bg-[position:0_50%] bg-no-repeat pl-[24px] text-left">
                                            カタログ請求
                                        </span>
                                    </Link>
                                </li>
                                <li className="contact w-1/4 bg-[#333]">
                                    <Link
                                        href="/mail/mail.html"
                                        className="flex items-center justify-center border-l border-[#c4000f] text-[12px] font-bold leading-[1.25] text-white no-underline"
                                    >
                                        <span className="relative flex h-[61px] items-center bg-[url('/img/ico_contact_s.png')] bg-[position:0_50%] bg-no-repeat pl-[30px] text-left after:absolute after:left-[22px] after:top-[16px] after:block after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#ff961b]">
                                            お問い合わせ
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
