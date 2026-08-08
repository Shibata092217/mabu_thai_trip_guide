const travelDays = [
    {
        id: '8/21 (金)',
        title: 'バンコク到着・カオサン通り',
        items: [
            {
                label: 'Spot',
                title: '成田空港 第２ターミナル (09:15発)',
                image: 'https://t4.ftcdn.net/jpg/04/09/90/71/360_F_409907193_rhQmSzwrC2hvrUWHzRChAvI7XWRg9oMr.jpg',
                alt: 'Narita Airport',
                meta: [
                    { label: '集合時間', value: '07:00' },
                    { label: 'メモ', note: '14:00 ドムアン空港着予定' }
                ],
                links: [{ label: 'Googleマップ', href: 'https://www.google.com/maps/search/Narita+Airport' }]
            },
            {
                label: 'Spot',
                title: 'Casa 17 Hotel Bangkok',
                image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/692562613.jpg?k=0b8fb6a4f40130f8b9ee7ea294255a1981a92a98378175642ac05ddc0c7d869b&o=&hp=1',
                alt: 'Casa 17 Hotel Bangkok exterior',
                meta: [
                    { label: '到着時刻', value: '15:00' },
                    { label: 'メモ', note: '空港から車で50分' }
                ],
                links: [
                    {
                        label: 'Booking.com',
                        href: 'https://www.booking.com/hotel/th/casa-17.ja.html?chal_t=1786013086738&force_referer=https%3A%2F%2Fwww.google.com%2F'
                    },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Casa+17+Hotel+Bangkok' }
                ]
            },
            {
                label: 'Restaurant',
                title: 'カオサン通り',
                image: 'https://www.thailandtravel.or.jp/wp-content/uploads/2017/03/WEB_Bangkok-Khao-San-Road-211875DK.jpg',
                alt: 'Khao San Road street food area',
                meta: [
                    { label: '到着時刻', value: '19:00' },
                    { label: 'メモ', note: '夜飯' }
                ],
                links: [
                    { label: 'HP', href: 'https://www.thailandtravel.or.jp/khao-san-road/' },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Khao+San+Road+Bangkok' },

                ]
            },
            {
                label: 'Restaurant',
                title: 'choo choo hemp',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Be9FIqvSgiXjr9t1CSdUfyne7I9eWALD9aCQ9jSssQ&s=10',        alt: 'Khao San Road street food area',
                meta: [
                    { label: '到着時刻', value: '19:30' },
                    { label: 'メモ', note: '安物から高級品まで揃う品数の多さが魅力  <br />処方箋の取得や店内喫煙も可能' }
                ],
                links: [
                    { label: 'HP', href: 'https://runbkk.net/choo-choo-hemp-bangkok/' },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Choo+Choo+Hemp+Bangkok' }
                ]
            }
        ]
    },
    {
        id: '8/22 (土)',
        title: 'ワットポー・ナーナープラザ',
        items: [
            {
                label: 'Spot',
                title: 'ワットポー',
                image: 'https://img-cdn.guide.travel.co.jp/article/54/32113/8B1C08ECFE1C4270B8F9AE508B9E1DCB_LL.jpg',
                alt: 'Wat Arun temple in Bangkok',
                meta: [
                    { label: '到着時刻', value: '12:00' },
                    { label: 'メモ', note: '京都で言う清水寺' }
                ],
                links: [
                    { label: 'HP', href: 'https://www.thailandtravel.or.jp/wat-pho/' },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Wat+Pho+Bangkok' }
                ]
            },
            {
                label: 'Spot',
                title: 'ナーナープラザ',
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/18/e8/c3/relax-and-refresh-at.jpg?w=900&h=500&s=1',
                alt: 'Asiatique riverside night market',
                meta: [
                    { label: '到着時刻', value: '16:00' },
                    { label: 'メモ', note: '' }
                ],
                links: [{ label: 'Googleマップ', href: 'https://www.google.com/maps/search/Asiatique+Bangkok' }]
            }
        ]
    },
    {
        id: '8/23 (日)',
        title: 'ショッピング',
        items: [
            {
                label: 'shopping',
                title: 'チャトチャック ウィークエンドマーケット',
                image: 'https://images.trvl-media.com/place/6067869/8b5383f5-78ed-48fa-a843-cd98132aee42.jpg',
                alt: 'Chatuchak Weekend Market in Bangkok',
                meta: [
                    { label: '到着時刻', value: '13:00' },
                    { label: 'メモ', note: '古着市場 出店' }
                ],
                links: [
                    { label: 'HP', href: 'https://www.thailandtravel.or.jp/chatuchak-weekend-market/' },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Chatuchak+Weekend+Market+Bangkok' }
                ]
            },
            {
                label: 'Restaurant',
                title: 'カオサン通り',
                image: 'https://www.thailandtravel.or.jp/wp-content/uploads/2017/03/WEB_Bangkok-Khao-San-Road-211875DK.jpg',
                alt: 'Khao San Road street food area',
                meta: [
                    { label: '到着時刻', value: '17:00' },
                    { label: 'メモ', note: '夜飯' }
                ],
                links: [
                    { label: 'HP', href: 'https://www.thailandtravel.or.jp/khao-san-road/' },
                    { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Khao+San+Road+Bangkok' }
                ]
            }
        ]
    },
    {
        id: '8/24 (月)',
        title: 'アユタヤ',
        items: [
        {
            label: 'Spot',
            title: 'アユタヤ遺跡',
            image: 'https://www.jtb.co.jp/kaigai_guide/report/TH/assets_c/2015/02/344_top.jpg',
            alt: 'Ayutthaya Ruins',
            meta: [
            { label: '到着時刻', value: '12:00' },
            { label: 'メモ', note: '象乗り体験' }
            ],
            links: [
            { label: 'HP', href: 'https://www.thailandtravel.or.jp/roman-ayutthaya-sukhothai/' },
            { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Ayutthaya+Ruins' }
            ]
        },
        {
            label: 'Restaurant',
            title: 'カオサン通り',
            image: 'https://www.thailandtravel.or.jp/wp-content/uploads/2017/03/WEB_Bangkok-Khao-San-Road-211875DK.jpg',
            alt: 'Khao San Road street food area',
            meta: [
            { label: '到着時刻', value: '16:00' },
            { label: 'メモ', note: '夜飯' }
            ],
            links: [
            { label: 'HP', href: 'https://www.thailandtravel.or.jp/khao-san-road/' },
            { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Khao+San+Road+Bangkok' }
            ]
        }
        ]
    },
    {
        id: '8/25 (火)',
        title: '帰宅',
        items: [
        {
            label: 'Spot',
            title: 'バンコクドムアン空港 (11:15発)',
            image: 'https://www.thailandtravel.or.jp/wp-content/uploads/2023/07/S_DON_0008.jpg',
            alt: 'Don Mueang International Airport in Bangkok',
            meta: [
            { label: '到着時刻', value: '09:00' },
            { label: 'メモ', note: '２時間前を目安 <br />19:45 成田空港着' }
            ],
            links: [
            { label: 'HP', href: 'https://www.thailandtravel.or.jp/don-mueang-international-airport/' },
            { label: 'Googleマップ', href: 'https://www.google.com/maps/search/Don+Mueang+International+Airport+Bangkok' }
            ]
        }
        ]
    }
    ];

    /**
     * 旅行計画の各アイテムをHTMLとしてレンダリングする関数
     * @param {Object} item - 旅行計画のアイテムオブジェクト
     * @returns {string} - アイテムのHTMLマークアップ
     */
    function renderPlanItem(item) {
    const metaMarkup = item.meta
        .map((entry) => {
        const content = entry.note
            ? `<p class="meta-note">${entry.note}</p>`
            : `<span class="meta-value">${entry.value}</span>`;

        return `
            <div class="meta-row">
            <span class="meta-label">${entry.label}</span>
            ${content}
            </div>`;
        })
        .join('');

    const linkMarkup = item.links
        .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>`)
        .join('');

    return `
        <article class="plan-item">
        <div class="item-label">${item.label}</div>
        <h3>${item.title}</h3>
        <img src="${item.image}" alt="${item.alt}" />
        <div class="item-meta">${metaMarkup}</div>
        <div class="links">${linkMarkup}</div>
        </article>`;
    }

    /**
     * 旅行スケジュールをレンダリングする関数
     * @returns {void} 
     */
    function renderSchedule() {
    const root = document.getElementById('schedule-root');
    if (!root) return;

    root.innerHTML = travelDays
        .map((day) => `
        <section class="day-card" id="${day.id}">
            <div class="day-heading">
            <div>
                <p class="day-number">${day.id.toUpperCase()}</p>
                <h2>${day.title}</h2>
            </div>
            </div>
            <div class="item-grid">
            ${day.items.map(renderPlanItem).join('')}
            </div>
        </section>`)
        .join('');
    }

    renderSchedule();

    const API_URL = "https://api.frankfurter.dev/v2/rate/THB/JPY";

    let exchangeRate = null;


    /**
     * 為替レートを取得
     */
    async function getExchangeRate() {

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();

            console.log("為替レート:", data);

            exchangeRate = data.rate;

            // ポップアップにレートを表示
            document.getElementById("rate-info").textContent =
                `1 THB = ${exchangeRate.toFixed(2)} 円`;

        } catch (error) {

            console.error(
                "為替レートの取得に失敗しました",
                error
            );

            document.getElementById("rate-info").textContent =
                "為替レートを取得できませんでした";
        }
    }


    /**
     * THB → JPYに換算
     */
    function calculateExchange() {

        // 為替レートがまだ取得できていない場合
        if (exchangeRate === null) {

            document.getElementById("jpy-result").textContent =
                "レート取得中です";

            return;
        }

        // 入力されたタイバーツ
        const thb = Number(
            document.getElementById("thb-input").value
        );

        // 入力チェック
        if (isNaN(thb) || thb < 0) {

            document.getElementById("jpy-result").textContent =
                "-";

            return;
        }

        // THB → JPY
        const jpy = thb * exchangeRate;

        // 結果を表示
        document.getElementById("jpy-result").textContent =
            Math.round(jpy).toLocaleString();
    }


    /**
     * 為替計算ボタン
     */
    document
        .getElementById("exchange-button")
        .addEventListener("click", () => {

            document.getElementById("exchange-modal").style.display =
                "block";
        });


    /**
     * ポップアップを閉じる
     */
    document
        .getElementById("close-button")
        .addEventListener("click", () => {

            document.getElementById("exchange-modal").style.display =
                "none";
        });


    /**
     * 計算ボタン
     */
    document
        .getElementById("calculate-button")
        .addEventListener("click", calculateExchange);


    /**
     * ポップアップ外をクリックしたら閉じる
     */
    window.addEventListener("click", (event) => {

        const modal =
            document.getElementById("exchange-modal");

        if (event.target === modal) {

            modal.style.display = "none";
        }
    });


    /**
     * ページ読み込み時に為替レートを取得
     */
    getExchangeRate();