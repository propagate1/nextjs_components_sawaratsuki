"use client";

import { Doppio_One } from "next/font/google";

const doppioOne = Doppio_One({
    weight: "400",
    subsets: ["latin"],
});

// MAXHUB ヒーロー (Product-Hero.html を忠実トレース)
// 参照CSS: maxhub.css / sp_maxhub.css
// 注意: 画像パスは /public/img/maxhub 配下を前提。未配置の場合は追加してください。
export default function Hero4006() {
    return (
        <section
            aria-label="MAXHUB ヒーロー"
            className="relative z-0 text-left text-[62.5%] pt-[90px] pb-[120%] md:pt-[90px] md:pb-[100%] lg:pt-0 lg:pb-0 lg:h-[770px] overflow-hidden"
        >
            {/* 背景画像（右側・全体の背景） */}
            <div 
                className="absolute inset-0 z-0 hidden lg:block bg-cover bg-center bg-no-repeat left-[40%]"
                style={{ backgroundImage: "url('/img/Hero4006_Background_3.png')" }}
            />
            
            {/* 灰色の斜めカット背景（左側） */}
            <div 
                className="absolute top-0 left-0 h-full w-[60%] bg-[#E2E2E2] z-10 hidden lg:block"
                style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
            />
            
            {/* モバイル用背景画像（下部） */}
            <div 
                className="absolute -bottom-30 left-0 right-0 h-[35%] z-0 lg:hidden bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('/img/Hero4006_Background_3.png')", backgroundPosition: "center 30%" }}
            />
            
            {/* モバイル用灰色背景（上部・斜めカット） */}
            <div 
                className="absolute top-0 left-0 right-0 h-[90%] bg-[#E2E2E2] z-10 lg:hidden"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
            />

            <div className="relative mx-auto px-[5%] lg:px-0 w-full lg:w-[1100px] lg:pt-[125px] z-20">

                <div className="content w-full lg:w-[580px]">
                    <div className="catch_area">
                        {/* タイトル */}
                        <h1 className={`main_txt mb-[25px] lg:mb-[40px] text-[4.5em] lg:text-[8rem] tracking-[0.02em] leading-none text-[#333] ${doppioOne.className}`}>
                            MAXHUB
                        </h1>

                        {/* キャッチ */}
                        <p
                            className="catch relative z-0 inline-block w-[240px] lg:w-[308px] text-center text-[#AC9E4C]
                text-[2.0em] lg:text-[2.6em] leading-[1.5] mb-[15px] lg:mb-[25px]
                px-[5px] pt-[5px] pb-[2px] lg:pt-0"
                        >
                            <span
                                className="absolute inset-0 -z-10 bg-[#111]
                  [transform:skewX(-10deg)]
                  before:hidden"
                                aria-hidden
                            />
                            実物を体感できる！
                        </p>

                        {/* サブテキスト */}
                        <p className="sub_txt inline-block text-[#222] font-bold tracking-[0.05em]
              text-[2.0em] lg:text-[3.6em] leading-[1.6] pb-[10px] lg:pb-[20px]">
                            全国9拠点のショールームで
                            <br />
                            無料デモ体験受付中！
                        </p>

                        <p className="sub_txt_s font-medium text-[1.4em] lg:text-[1.6em] leading-[1.8] mb-5 lg:mb-[30px]">
                            実際に見て体験した上で検討する事が可能なので
                            <br className="hidden lg:inline" />
                            お気軽にご来場ください。
                        </p>

                        {/* ボタン */}
                        <p className="btn mb-5 lg:mb-[40px]">
                            <a
                                href="#contact-mail"
                                className="inline-block text-white font-bold text-center leading-[1.6]
                  rounded-[10px] shadow-[0_15px_30px_rgba(0,0,0,0.18)]
                  text-[1.8em] lg:text-[2.5em]
                  py-[20px] pl-[40px] lg:pl-[90px] lg:pr-[50px]
                  w-full lg:w-auto
                  bg-[url('/img/maxhub/ico_mail.png'),linear-gradient(90deg,#716A3E_0%,#3C3609_100%)]
                  bg-no-repeat bg-[position:10px_center,0_0] lg:bg-[position:50px_center,0_0]
                  bg-[length:30px_auto,auto_auto]"
                            >
                                体験ご希望の方はこちら
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
