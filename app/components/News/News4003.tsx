"use client";

import Link from "next/link";

type NewsItem = {
    date: string; // 表示用: 2024.12.24
    dateTime: string; // datetime属性用: 2024-12-24
    title: string;
    href: string;
};

const items: NewsItem[] = [
    {
        date: "2024.12.24",
        dateTime: "2024-12-24",
        title:
            "「薩摩川内市ＳＤＧｓイノベーショントライアルサポート事業」を活用した実証実験の実施について",
        href: "https://www.kyocera.co.jp/newsroom/news/2024/002633.html"
    },
    {
        date: "2024.12.05",
        dateTime: "2024-12-05",
        title:
            "京セラの電子投開票システム「デジ選」が大阪府四條畷市市長選の電子投開票に採用",
        href: "https://www.kyocera.co.jp/newsroom/news/2024/002615.html"
    },
    {
        date: "2024.08.08",
        dateTime: "2024-08-08",
        title:
            "STEM(理系)領域の職場体験プログラム「Girls Meet STEM Career」に参画",
        href: "https://www.kyocera.co.jp/newsroom/news/2024/002511.html"
    },
    {
        date: "2024.06.28",
        dateTime: "2024-06-28",
        title:
            "薩摩川内市、京セラ㈱及び京セラコミュニケーションシステム㈱との包括連携協定の締結について",
        href: "https://www.kyocera.co.jp/newsroom/news/2024/002478.html"
    },
    {
        date: "2024.03.13",
        dateTime: "2024-03-13",
        title:
            "水をまもるために、まとうファッション 「TRUE BLUE TEXTILE」プロジェクト開始",
        href: "https://www.kyocera.co.jp/newsroom/news/2024/002410.html"
    }
];

export default function News4003() {
    return (
        <div className="bg-[#eaf0e5] w-full h-full">
            <section className="max-md:mt-[3.875rem]">
                <div className="mx-auto w-[calc(100%-1.875rem)] max-w-[73.125rem]">
                    {/* 見出し（.p-ttl_small .c-ttl_small 準拠） */}
                    <h2 className="relative flex mb-[1.25rem] max-md:mb-[0.625rem]
                     text-[1.5rem]
                     md:text-[2rem] tracking-[0.08em] text-[#21728c] font-bold">
                        お知らせ
                        {/* ::after 代替（ttl_icn.svg） */}
                        <span
                            className="w-[1.5rem] h-[1.5rem]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.061 62.271"><g fill="#81a528"><rect height="13.987" rx="5.202" width="13.987" /><path d="m63.139 5.238c-4.909-2.408-9.666-2.69-15.018-1.327-5.199 1.598-10.035 5.189-12.489 12.771-.649 2.004-1.02 4.218-.904 6.33.136 2.477-.56 4.002-2.273 5.762-1.423 1.461-3.259 2.576-5.252 3.045-2.139.503-4.371.074-6.519.734-3.995 1.228-7.71 3.987-9.596 9.813-1.856 5.735.059 12.422 4.619 16.263 8.487 7.148 20.294 3.328 23.385-7.566.182-.641.312-1.277.425-1.891 1.188-4.458 5.42-7.898 10.156-7.17 4.475.687 8.533.679 12.662-1.491 4.882-2.566 8.253-7.26 9.742-12.509 2.716-9.57-.914-18.826-8.941-22.763z" /><rect height="31.374" rx="11.708" width="31.374" x="9.692" y="30.896" /><rect height="39.294" rx="15.206" width="39.294" x="34.767" y="3.096" /></g></svg>
                        </span>
                    </h2>

                    {/* リストラッパー */}
                    <ul className="mb-[2.5rem] grid gap-y-[0.625rem] max-md:mb-[1.875rem]">
                        {items.map((it) => (
                            <li key={it.href} className="bg-white rounded-[1.25rem] tracking-[0.08em]">
                                <Link
                                    href={it.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="外部ウィンドウが開きます"
                                    className="group relative grid items-center rounded-[1.25rem]
                                    grid-cols-1 gap-y-[0.5625rem]
                                    py-[1.5625rem] pr-[3.75rem] pl-[1.25rem]
                                    md:grid-cols-[11.5rem_1fr] md:gap-y-0
                                    md:py-[1.75rem] md:pr-[6.75rem] md:pl-[1.75rem]
                                    transition-colors duration-500"
                                >
                                    {/* 左（日時） */}
                                    <span className="flex items-center gap-x-[0.625rem] max-md:gap-x-1">
                                        <time
                                            dateTime={it.dateTime}
                                            className="text-[0.75rem] md:text-[0.875rem] font-bold"
                                        >
                                            {it.date}
                                        </time>
                                    </span>
                                    {/* 右（本文） */}
                                    <p className="leading-[1.5]
                                     text-[1.125rem]
                                      max-md:text-[1rem]
                                       tracking-[0.01em]
                                        font-bold c-hover_txt
                                        wrap-words
                                 group-hover:text-[#5b821d] group-hover:underline transition-colors duration-300">{it.title}</p>
                                    {/* 右端アイコン（絶対配置） */}
                                    <span
                                        aria-hidden
                                        className="absolute top-1/2 -translate-y-1/2 right-[1.25rem] md:right-[1.875rem]
                                                    w-[1.4375rem] h-[1.4375rem] md:w-[1rem] md:h-[1rem]
                                                    bg-no-repeat bg-contain bg-[url('/img/News4001_Icon_1.svg')]"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* ボタン */}
                    <div className="relative w-full max-md:w-full">
                        <a
                            href="/smartcity/news/"
                            className="c-hover_scale group block mx-auto w-full max-w-[25rem] text-center text-white font-bold tracking-[0.08em]
                            bg-[#5b821d] rounded-[2rem] shadow-[0.03rem_0.438rem_0_0_#3a5d00]
                            text-[1.125rem] leading-[1.8666666667] py-[0.9375rem] px-[0.625rem]
                            max-md:text-[0.875rem] max-md:py-[0.5rem] max-md:px-[0.3125rem] max-md:shadow-[0.03rem_0.25rem_0_0_#3a5d00]
                            relative transition-transform duration-300 hover:scale-[1.05]"
                        >
                            <span className="c-hover_border group-hover:underline transition-colors duration-300">お知らせ一覧</span>
                            <svg
                                className="c-btn_middle_icn absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 41 41"
                                aria-hidden
                            >
                                <path
                                    fillRule="evenodd"
                                    fill="#ffffff"
                                    d="M40.311,20.372 C40.311,31.415 31.358,40.369 20.314,40.369 C9.271,40.369 0.317,31.415 0.317,20.372 C0.317,9.329 9.271,0.376 20.314,0.376 C31.358,0.376 40.311,9.329 40.311,20.372 Z"
                                ></path>
                                <path
                                    fillRule="evenodd"
                                    fill="#5B821D"
                                    d="M25.325,18.949 L19.263,13.367 C18.374,12.549 16.991,13.221 16.991,14.469 L16.991,26.547 C16.991,27.795 18.374,28.468 19.263,27.649 L25.325,22.067 C26.219,21.245 26.219,19.770 25.325,18.949 Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
