export default function Product4014() {
    return (
        <div className="overflow-visible font-['Noto_Sans_JP',sans-serif]">
            <section className="relative overflow-visible mt-32">
                {/* 装飾的な背景要素 */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#7A6D35] opacity-20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#6B5D2A] opacity-20 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="relative w-full bg-gradient-to-br from-[#8B7C3A] via-[#6B5D2A] to-[#5A4E22]">
                    {/* 背景画像 - 左側 */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/3 bg-contain bg-left bg-no-repeat opacity-30"
                        style={{ backgroundImage: "url('/img/Product4014_Background_1.png')" }}
                    ></div>

                    {/* SPEC テキスト - 50%上に飛び出す */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:-translate-y-1/2 z-10">
                        <h2 className="text-[70px] md:text-[70px] lg:text-[130px] font-bold text-center text-[#C9B568] tracking-wider leading-none whitespace-nowrap">
                            SPEC
                        </h2>
                    </div>

                    {/* コンテンツエリア - SPECの下 */}
                    <div className="pt-20 md:pt-24 px-0">
                        {/* サブタイトル */}
                        <div className="text-center mb-16">
                            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
                                MAXHUB1台で、この機能をすべて搭載！
                            </h3>
                        </div>

                        {/* 3つのカード */}
                        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-8 gap-y-24 max-w-6xl mx-auto mb-16 mt-24 w-[70%] md:w-full">
                            {/* WEB会議 カード */}
                            <div className="relative group">
                                {/* アイコン円形エリア - 50%上に飛び出す */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-hover:opacity-40">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        {/* WEB会議アイコン */}
                                        <svg className="w-16 h-16 text-[#8B7C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 21h8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 17v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="6" y="7" width="4" height="3" rx="0.5" strokeWidth="1.5" />
                                            <rect x="14" y="7" width="4" height="3" rx="0.5" strokeWidth="1.5" />
                                            <rect x="6" y="11" width="4" height="3" rx="0.5" strokeWidth="1.5" />
                                            <rect x="14" y="11" width="4" height="3" rx="0.5" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#E8E4D8] rounded-2xl shadow-xl transition-all duration-300 group-hover:opacity-40 pt-20 px-[3px] pb-[3px]">
                                    <div className="px-6 pt-2 pb-4">
                                        {/* タイトル */}
                                        <h4 className="text-3xl font-bold text-[#3D3D3D] text-center">
                                            WEB会議
                                        </h4>
                                    </div>

                                    {/* 下部のボタン風要素 */}
                                    <div className="bg-[#9B8B4A] py-1 flex justify-center rounded-b-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* プレゼンテーション カード */}
                            <div className="relative group">
                                {/* アイコン円形エリア - 50%上に飛び出す */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-hover:opacity-40">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        {/* プレゼンテーションアイコン */}
                                        <svg className="w-16 h-16 text-[#8B7C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="3" y="4" width="18" height="12" rx="1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3 13h18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 16l-3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 16l3 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 8l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="7" cy="10" r="0.5" fill="currentColor" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#E8E4D8] rounded-2xl shadow-xl transition-all duration-300 group-hover:opacity-40 pt-20 px-[3px] pb-[3px]">
                                    <div className="px-6 pt-2 pb-4">
                                        {/* タイトル */}
                                        <h4 className="text-3xl font-bold text-[#3D3D3D] text-center">
                                            プレゼンテーション
                                        </h4>
                                    </div>

                                    {/* 下部のボタン風要素 */}
                                    <div className="bg-[#9B8B4A] py-1 flex justify-center rounded-b-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* ホワイトボード カード */}
                            <div className="relative group">
                                {/* アイコン円形エリア - 50%上に飛び出す */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group-hover:opacity-40">
                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                                        {/* ホワイトボードアイコン */}
                                        <svg className="w-16 h-16 text-[#8B7C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <rect x="3" y="3" width="18" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 7h6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7 11h10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M17 7v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 17l2 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14 17l-2 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="bg-[#E8E4D8] rounded-2xl shadow-xl transition-all duration-300 group-hover:opacity-40 pt-20 px-[3px] pb-[3px]">
                                    <div className="px-6 pt-2 pb-4">
                                        {/* タイトル */}
                                        <h4 className="text-3xl font-bold text-[#3D3D3D] text-center">
                                            ホワイトボード
                                        </h4>
                                    </div>

                                    {/* 下部のボタン風要素 */}
                                    <div className="bg-[#9B8B4A] py-1 flex justify-center rounded-b-xl">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 下部の説明文 - 黒30%透明度の背景 */}
                        <div className="max-w-6xl mx-auto pb-8 w-[70%] md:w-full">
                            <div className="bg-black/30 backdrop-blur-sm rounded-t-2xl px-8 py-10 shadow-xl">
                                <p className="text-center text-[#AC9E4C] text-2xl md:text-2xl leading-relaxed font-bold tracking-[0.1em]">
                                    従来製品よりもグレードアップ！充実した機能で、快適な会議をサポート。<br />
                                    WEBでもリアルでも、デジタル化以上の体験で、真のDXをご提供します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
