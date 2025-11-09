"use client";

import Link from "next/link";

type Plan = {
    rank?: string; // 人気NO.x
    name: string;
    type: "monthly" | "daily";
    lessonsLabelTop: string; // 毎月/毎日 (ラベル内)
    lessonsText: string; // 4レッスン など（改行後）
    price: string; // 2,930 等（カンマ区切り）
    pricePer: string; // 円/月
    discount?: string; // 割引額 表示値（---円 など）
    perLesson: string; // 1レッスンあたり
    perDay: string; // 1日のレッスン可能数
    reserve: string; // 1度の予約可能数
    isBest?: boolean; // 枠の強調（オレンジ）
};

const plans: Plan[] = [
    {
        name: "お試しプラン",
        type: "monthly",
        lessonsLabelTop: "毎月",
        lessonsText: "4レッスン",
        price: "2,930",
        pricePer: "円/月",
        discount: "---円",
        perLesson: "733円",
        perDay: "1回",
        reserve: "2回",
        isBest: false
    },
    {
        rank: "人気NO.2",
        name: "お手軽プラン",
        type: "monthly",
        lessonsLabelTop: "毎月",
        lessonsText: "8レッスン",
        price: "4,800",
        pricePer: "円/月",
        discount: "---円",
        perLesson: "600円",
        perDay: "1回",
        reserve: "2回",
        isBest: true
    },
    {
        rank: "人気NO.1",
        name: "毎日レッスンプラン",
        type: "daily",
        lessonsLabelTop: "毎日",
        lessonsText: "1レッスン",
        price: "6,980",
        pricePer: "円/月",
        discount: "-4,606円",
        perLesson: "225円",
        perDay: "1回",
        reserve: "2回",
        isBest: true
    },
    {
        name: "基本プラン",
        type: "daily",
        lessonsLabelTop: "毎日",
        lessonsText: "2レッスン",
        price: "11,930",
        pricePer: "円/月",
        discount: "---円",
        perLesson: "192円",
        perDay: "2回",
        reserve: "4回",
        isBest: false
    }
];

function NameBar({ type, name }: { type: Plan["type"]; name: string }) {
    const bg = type === "monthly" ? "#3b8bc5" : "#7557f6";
    return (
        <div
            className="flex items-center justify-center w-full h-[1.5rem] xl:h-[1.875rem]"
            style={{ backgroundColor: bg }}
        >
            <span className="text-[0.625rem] xl:text-[0.75rem] leading-[0.875rem] xl:leading-[1.0862rem] tracking-[0.02em] text-white">
                {name}
            </span>
        </div>
    );
}

function CountBar({ type, lessonsLabelTop, lessonsText }: Pick<Plan, "type" | "lessonsLabelTop" | "lessonsText">) {
    const bg = type === "monthly" ? "bg-[#227aba]" : "bg-[#6845ff]";
    const labelColor = type === "monthly" ? "#227aba" : "#6845ff";
    return (
        <div className={["flex w-[36%] lg:w-full items-center justify-center py-[0.625rem] xl:py-[1.0625rem] text-center md:min-h-[100px]", bg].join(" ")}>
            <p className="text-[0.75rem] xl:text-[1rem] font-bold leading-[1.0862rem] xl:leading-[1.4481rem] tracking-[0.05em] text-white">
                <span
                    className="inline-block w-[3.5rem] xl:w-full text-[0.7rem] xl:text-[0.9rem] font-bold tracking-[0.05em] bg-white rounded-[2rem]"
                    style={{ color: labelColor, border: `1px solid ${labelColor}` }}
                >
                    {lessonsLabelTop}
                </span>
                <br />
                {lessonsText}
            </p>
        </div>
    );
}

function PriceBar({ price, pricePer }: { price: string; pricePer: string }) {
    // SP/MD用の価格表示（PCではラベル列と整合のため別行）
    return (
        <div className="w-[64%] p-[0.625rem] text-center bg-white xl:w-full xl:p-0 xl:bg-inherit flex flex-col items-center justify-center xl:h-auto lg:hidden">
            <div className="w-full">
                <p className="inline text-[1.5rem] font-bold leading-[2.1719rem] text-[#1b161c]">
                    {price}
                    <span className="inline text-[0.625rem] font-bold leading-[0.905rem] text-[#1b161c] ml-[0.125rem]">{pricePer}</span>
                </p>
            </div>
        </div>
    );
}

function PriceValueRow({ price, pricePer }: { price: string; pricePer: string }) {
    // PC(lg以上) で左ラベル「料金」と並ぶ値行
    return (
        <div className="hidden lg:flex bg-white py-[0.375rem] justify-center items-center text-center lg:min-h-[6.25rem]">
            <p className="inline text-[1.75rem] font-bold leading-[2.45rem] tracking-[0.09em] text-[#1b161c]">
                {price}
                <span className="inline text-[0.75rem] font-bold leading-[1.05rem] tracking-[0.09em] text-[#1b161c] ml-[0.125rem]">{pricePer}</span>
            </p>
        </div>
    );
}

function Row({ value, bg }: { value: string; bg: "white" | "purple" }) {
    const bgContent = bg === "white" ? "bg-white" : "bg-[#e4deff]";
    return (
        <div className={["flex", bgContent, "py-[0.375rem] justify-center items-center text-center lg:min-h-[2.5rem]"].join(" ")}>
            <p className="text-[0.75rem] xl:text-[0.875rem] font-normal leading-[1.0862rem] xl:leading-[1.225rem] tracking-[0.02em] xl:tracking-[0.05em] text-[#1b161c]">
                {value}
            </p>
        </div>
    );
}

function DiscountRow({ plan }: { plan: Plan }) {
    return (
        <div className="flex bg-[#e4deff] py-[0.375rem] justify-center items-center text-center md:h-[4rem] lg:h-[3rem]">
            <p className="text-[0.75rem] xl:text-[0.875rem] font-normal leading-[1.0862rem] xl:leading-[1.225rem] tracking-[0.02em] xl:tracking-[0.05em] text-[#1b161c]">
                {plan.discount ?? ""}
            </p>
        </div>
    );
}

function LabelColumn() {
    return (
        <div className="hidden lg:flex flex-col min-w-[15rem]">
            {/* 上部の高さ合わせ: 人気ラベル(1.875rem) + プラン名バー(1.5rem) + レッスン数行(min-h:100px) */}
            <div className="h-[1.875rem]" />
            <div className="h-[1.90rem]" />
            <div className="min-h-[100px]" />
            {/* 料金 row 高さ: 2.5rem */}
            <div className="flex bg-white items-center justify-start pl-[0.75rem] min-h-[6.25rem] py-[0.375rem]">
                <p className="text-center w-full text-[0.625rem] font-bold leading-[0.905rem] tracking-[0.05em] text-[#1b161c]">料金</p>
            </div>
            {/* 半年申込の割引額 row 高さ: 2.5rem */}
            <div className="flex bg-[#e4deff] items-center justify-start pl-[0.75rem] min-h-[3rem] py-[0.375rem]">
                <p className="text-center w-full text-[0.625rem] font-bold leading-[0.905rem] tracking-[0.05em] text-[#1b161c]">半年申込の割引額</p>
            </div>
            {/* 1レッスンあたり row 高さ: 2.5rem */}
            <div className="flex bg-white items-center justify-start pl-[0.75rem] min-h-[2.5rem] py-[0.375rem]">
                <p className="text-center w-full text-[0.625rem] font-bold leading-[0.905rem] tracking-[0.05em] text-[#1b161c]">1レッスンあたり</p>
            </div>
            {/* 1日のレッスン可能数 row 高さ: 2.5rem */}
            <div className="flex bg-[#e4deff] items-center justify-start pl-[0.75rem] min-h-[2.5rem] py-[0.375rem]">
                <p className="text-center w-full text-[0.625rem] font-bold leading-[0.905rem] tracking-[0.05em] text-[#1b161c]">1日のレッスン可能数</p>
            </div>
            {/* 1度の予約可能数 row 高さ: 2.5rem */}
            <div className="flex bg-white items-center justify-start pl-[0.75rem] min-h-[2.5rem] py-[0.375rem]">
                <p className="text-center w-full text-[0.625rem] font-bold leading-[0.905rem] tracking-[0.05em] text-[#1b161c]">1度の予約可能数</p>
            </div>
        </div>
    );
}

export default function Price4003() {
    return (
        <div className="w-full h-full bg-[#f6f7f8]">
            <section className="flex justify-center">
                <div className="w-full max-w-[73.625rem] bg-[#f6f7f8] pt-[100px] pb-[100px] px-[20px]">
                    {/* サブタイトル */}
                    <div className="flex items-center">
                        <div className="w-[0.625rem] h-[0.625rem] bg-[#c6c5c6] rounded-full mr-[20px]" />
                        <div className="text-[14px] font-bold tracking-widest text-[#c6c5c6]">Price &amp; Plan</div>
                    </div>

                    {/* 見出し */}
                    <div className="mb-5">
                        <h2 className="text-[32px] font-bold pl-[30px] tracking-[0.09em] leading-[2.8963rem]">オンライン英会話の料金プラン</h2>
                    </div>

                    {/* 説明文 */}
                    <div className="mb-[60px] pl-[30px] md:max-w-[48.125rem]">
                        <p className="text-[14px] leading-[1.4875rem] text-[#494549]">
                            Weblio英会話はレッスンの品質が高いのにレッスンの値段を安く抑えています。費用面で英語学習を諦めていた人にも取り組みやすい価格設定になっています。
                            1レッスンの料金は190円台からとなっています。
                            激安の理由は、システムの開発・講師の採用・管理をすべて自社で行っているからです。業界最安値級で受講いただく事も可能です。
                        </p>
                    </div>

                    {/* プラン一覧 */}
                    <div className="mb-[60px]">
                        <div className="w-full md:flex md:flex-wrap md:justify-between lg:flex-nowrap lg:items-stretch">
                            {/* ラベル列 (PCのみ) */}
                            <LabelColumn />
                            {plans.map((plan, idx) => {
                                const isMonthly = plan.type === "monthly";
                                const countBg = isMonthly ? "#227aba" : "#6845ff";
                                const nameBg = isMonthly ? "#3b8bc5" : "#7557f6";
                                const bestBorder = plan.isBest ? "border-[#ff6e4a]" : "border-transparent";
                                const cardMarginLeft = "xl:ml-[0.25rem]";
                                return (
                                    <div
                                        key={plan.name + idx}
                                        className={[
                                            "relative flex-1 mb-[0.625rem] md:min-w-[20rem] xl:min-w-[9.9rem] xl:mb-0 flex flex-col",
                                            cardMarginLeft,
                                            plan.isBest ? "border-2" : "",
                                            bestBorder
                                        ].join(" ")}
                                    >
                                        {/* best用 左上三角（SP〜MD） */}
                                        {plan.isBest ? (
                                            <span className="absolute top-0 left-0 w-0 h-0 xl:hidden" aria-hidden>
                                                <span className="block border-b-[1rem] border-b-transparent border-l-[1rem] border-l-[#ff6e4a]" />
                                            </span>
                                        ) : null}
                                        {plan.isBest ? (
                                            <span className="hidden lg:block absolute top-0 left-0 w-0 h-0 border-l-[1rem] border-l-[#ff6e4a] border-b-[1rem] border-b-transparent" aria-hidden />
                                        ) : null}

                                        {/* 上: 人気ラベル */}
                                        <div className="flex items-center justify-center h-[1.875rem]">
                                            <p className="text-[0.625rem] font-bold leading-[1.2669rem] text-[#ff6e4a]">{plan.rank}</p>
                                        </div>

                                        {/* プラン名バー */}
                                        <div className={"w-full " + (nameBg === "#3b8bc5" ? "bg-[#3b8bc5]" : "bg-[#7557f6]")}>
                                            <NameBar type={plan.type} name={plan.name} />
                                        </div>

                                        {/* レッスン数（左） + 料金（SP/MDのみ右） */}
                                        <div className="flex w-full xl:block">
                                            <CountBar type={plan.type} lessonsLabelTop={plan.lessonsLabelTop} lessonsText={plan.lessonsText} />
                                            <PriceBar price={plan.price} pricePer={plan.pricePer} />
                                        </div>

                                        {/* 料金（PC行） */}
                                        <PriceValueRow price={plan.price} pricePer={plan.pricePer} />

                                        {/* 割引 */}
                                        <DiscountRow plan={plan} />

                                        {/* 1レッスンあたり */}
                                        <Row value={plan.perLesson} bg="white" />

                                        {/* 1日のレッスン可能数 */}
                                        <Row value={plan.perDay} bg="purple" />

                                        {/* 1度の予約可能数 */}
                                        <Row value={plan.reserve} bg="white" />

                                        {/* 各プラン下の「申し込む」ボタンはスクショに無いため非表示 */}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* 下部CTA */}
                    <div className="flex justify-center">
                        <Link href="/register" className="inline-block">
                            <button type="button" className="min-w-[11.625rem] md:min-w-[18.75rem] px-[0.9063rem] py-[1.0469rem] md:px-[2.5rem] md:py-[1.875rem] text-[0.75rem] md:text-[1rem] font-bold leading-[1.0862rem] md:leading-[1.4rem] tracking-[0.05em] md:tracking-[0.09em] text-white bg-[#ff6e4a] shadow-[4px_4px_30px_rgba(0,0,0,0.1)] transition-colors duration-200 hover:bg-[#f89279]" id="confirm-button">
                                <div>無料体験レッスン</div>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* styled-jsxのカスタム@mediaは撤去。lg以上はTailwindで制御。 */}
        </div>
    );
}
