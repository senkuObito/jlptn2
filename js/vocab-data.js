/**
 * JLPT N2 Master - Vocabulary Data
 * Comprehensive collection of core JLPT N2 vocabulary with readings, parts of speech, definitions, and realistic example sentences.
 */

const VOCAB_DATA = [
  {
    id: "v001",
    word: "傾向",
    reading: "けいこう",
    romaji: "keikou",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Tendency, trend, inclination",
    example: {
      ja: "最近の若者は本を読まない傾向があると言われている。",
      en: "It is said that young people nowadays have a tendency not to read books."
    },
    collocation: "傾向がある (have a tendency to), 傾向が見られる"
  },
  {
    id: "v002",
    word: "及ぼす",
    reading: "およぼす",
    romaji: "oyobosu",
    pos: "verb",
    posLabel: "Verb (動詞 - 他動詞)",
    meaning: "To exert, to cause, to exercise, to influence",
    example: {
      ja: "台風は大雨をもたらし、農作物に甚大な被害を及ぼした。",
      en: "The typhoon brought heavy rain and caused immense damage to agricultural crops."
    },
    collocation: "影響を及ぼす (exert an influence), 被害を及ぼす"
  },
  {
    id: "v003",
    word: "適切",
    reading: "てきせつ",
    romaji: "tekisetsu",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Appropriate, suitable, fitting, proper",
    example: {
      ja: "状況に応じて適切な判断を下すことがリーダーに求められる。",
      en: "A leader is required to make appropriate judgments depending on the situation."
    },
    collocation: "適切な処置 (proper treatment), 適切な対応"
  },
  {
    id: "v004",
    word: "次第に",
    reading: "しだいに",
    romaji: "shidaini",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Gradually, little by little, by degrees",
    example: {
      ja: "春が近づき、日中の気温も次第に暖かくなってきた。",
      en: "With spring approaching, daytime temperatures have also gradually grown warmer."
    },
    collocation: "次第に悪化する, 次第に明らかになる"
  },
  {
    id: "v005",
    word: "妥協",
    reading: "だきょう",
    romaji: "dakyou",
    pos: "noun",
    posLabel: "Noun (名詞 / する動詞)",
    meaning: "Compromise, giving in",
    example: {
      ja: "両国は長時間の交渉の末、ついに妥協案に合意した。",
      en: "After lengthy negotiations, both nations finally agreed on a compromise proposal."
    },
    collocation: "妥協する (to compromise), 妥協案 (compromise plan)"
  },
  {
    id: "v006",
    word: "深刻",
    reading: "しんこく",
    romaji: "shinkoku",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Serious, severe, grave, acute",
    example: {
      ja: "少子高齢化は労働力不足という深刻な問題を引き起こしている。",
      en: "The declining birthrate and aging population are causing serious labor shortage problems."
    },
    collocation: "深刻な影響, 深刻に受け止める"
  },
  {
    id: "v007",
    word: "維持",
    reading: "いじ",
    romaji: "iji",
    pos: "noun",
    posLabel: "Noun (名詞 / する動詞)",
    meaning: "Maintenance, preservation, keeping up",
    example: {
      ja: "健康を維持するためには、規則正しい食生活が欠かせない。",
      en: "To maintain good health, a regular and well-balanced diet is indispensable."
    },
    collocation: "現状維持 (maintaining status quo), 体重を維持する"
  },
  {
    id: "v008",
    word: "抱える",
    reading: "かかえる",
    romaji: "kakaeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 他動詞)",
    meaning: "To hold in one's arms; to have (problems, debts, burdens)",
    example: {
      ja: "現代人は誰もが何らかの悩みやストレスを抱えている。",
      en: "Every modern person carries some kind of worries or stress."
    },
    collocation: "問題を抱える (to face/bear problems), 借金を抱える"
  },
  {
    id: "v009",
    word: "冷静",
    reading: "れいせい",
    romaji: "reisei",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Calm, composed, cool-headed",
    example: {
      ja: "緊急事態が発生したときは、まず冷静になって安全を確認しよう。",
      en: "When an emergency occurs, first remain calm and confirm safety."
    },
    collocation: "冷静沈着 (calm and collected), 冷静さを失う"
  },
  {
    id: "v010",
    word: "相次ぐ",
    reading: "あいつぐ",
    romaji: "aitsugu",
    pos: "verb",
    posLabel: "Verb (動詞 - 自動詞)",
    meaning: "To follow in succession, to occur one after another",
    example: {
      ja: "大雪の影響で電車の運休や遅延が相次ぎ、通勤客が混乱した。",
      en: "Due to heavy snow, train cancellations and delays occurred one after another, causing chaos for commuters."
    },
    collocation: "事故が相次ぐ, 不祥事が相次ぐ"
  },
  {
    id: "v011",
    word: "曖昧",
    reading: "あいまい",
    romaji: "aimai",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Vague, ambiguous, indistinct, noncommittal",
    example: {
      ja: "曖昧な返事をせず、参加できるかどうかはっきり伝えてください。",
      en: "Please do not give an ambiguous answer; clarify whether you can attend or not."
    },
    collocation: "曖昧な態度, 曖昧な表現"
  },
  {
    id: "v012",
    word: "把握",
    reading: "はあく",
    romaji: "haaku",
    pos: "noun",
    posLabel: "Noun (名詞 / する動詞)",
    meaning: "Grasp, comprehension, understanding, catching",
    example: {
      ja: "まずはプロジェクト全体の進捗状況を正確に把握することが重要だ。",
      en: "First, it is crucial to accurately grasp the progress of the entire project."
    },
    collocation: "実態を把握する (grasp actual state), 状況把握"
  },
  {
    id: "v013",
    word: "促す",
    reading: "うながす",
    romaji: "unagasu",
    pos: "verb",
    posLabel: "Verb (動詞 - 他動詞)",
    meaning: "To urge, to prompt, to stimulate, to encourage",
    example: {
      ja: "市役所は住民に対して、早めの防災グッズの準備を促している。",
      en: "The city hall is urging residents to prepare disaster prevention supplies early."
    },
    collocation: "注意を促す (call attention to), 成長を促す"
  },
  {
    id: "v014",
    word: "率直",
    reading: "そっちょく",
    romaji: "sottyoku",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Frank, candid, straightforward, outspoken",
    example: {
      ja: "新しい提案について、皆様の率直なご意見をお聞かせください。",
      en: "Regarding the new proposal, please share your candid opinions with us."
    },
    collocation: "率直に言うと (to be frank), 率直な感想"
  },
  {
    id: "v015",
    word: "普及",
    reading: "ふきゅう",
    romaji: "fukyuu",
    pos: "noun",
    posLabel: "Noun (名詞 / する動詞)",
    meaning: "Spread, popularization, dissemination",
    example: {
      ja: "スマートフォンの普及によって、誰もが即座に情報を得られるようになった。",
      en: "With the popularization of smartphones, anyone can now obtain information instantaneously."
    },
    collocation: "急速に普及する, 普及率 (diffusion rate)"
  },
  {
    id: "v016",
    word: "怪しい",
    reading: "あやしい",
    romaji: "ayashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Suspicious, dubious, doubtful, fishy",
    example: {
      ja: "深夜に建物の周りをうろついている怪しい人物を通報した。",
      en: "I reported a suspicious person prowling around the building late at night."
    },
    collocation: "怪しい行動, 天気が怪しい (weather looks threatening)"
  },
  {
    id: "v017",
    word: "案の定",
    reading: "あんのじょう",
    romaji: "annojou",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Sure enough, as expected, just as one feared",
    example: {
      ja: "傘を持たずに出かけたら、案の定途中で土砂降りの雨に降られた。",
      en: "When I went out without an umbrella, sure enough, I was caught in a downpour midway."
    },
    collocation: "案の定失敗した, 案の定遅刻した"
  },
  {
    id: "v018",
    word: "したがって",
    reading: "したがって",
    romaji: "shitagatte",
    pos: "conjunction",
    posLabel: "Conjunction (接続詞)",
    meaning: "Therefore, consequently, accordingly",
    example: {
      ja: "明日は全国的に大雨の予報です。したがって、屋外イベントは延期とします。",
      en: "Heavy rain is forecast nationwide tomorrow. Therefore, outdoor events will be postponed."
    },
    collocation: "したがって〜となる"
  },
  {
    id: "v019",
    word: "悔やむ",
    reading: "くやむ",
    romaji: "kuyamu",
    pos: "verb",
    posLabel: "Verb (動詞 - 他動詞)",
    meaning: "To regret, to repent, to mourn",
    example: {
      ja: "試験前にもっと真剣に勉強しておけばよかったと今更悔やんでいる。",
      en: "I regret it now, wishing I had studied more seriously before the exam."
    },
    collocation: "過去を悔やむ (regret the past), 悔やんでも始まらない"
  },
  {
    id: "v020",
    word: "配慮",
    reading: "はいりょ",
    romaji: "hairyo",
    pos: "noun",
    posLabel: "Noun (名詞 / する動詞)",
    meaning: "Consideration, thoughtfulness, care for others",
    example: {
      ja: "高齢者や障がい者への配慮が行き届いたバリアフリーの施設が増えている。",
      en: "Barrier-free facilities that are thoroughly considerate of the elderly and disabled are increasing."
    },
    collocation: "配慮に欠ける (lack consideration), 細やかな配慮"
  },
  {
    id: "v021",
    word: "乏しい",
    reading: "とぼしい",
    romaji: "toboshii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Scarce, poor, lacking, scanty",
    example: {
      ja: "日本は天然資源に乏しいため、多くの原材料を海外から輸入している。",
      en: "Because Japan is poor in natural resources, it imports many raw materials from abroad."
    },
    collocation: "経験が乏しい (lack experience), 資金に乏しい"
  },
  {
    id: "v022",
    word: "めっきり",
    reading: "めっきり",
    romaji: "mekkiri",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Remarkably, noticeably, considerably",
    example: {
      ja: "十月に入ってから、朝晩はめっきり冷え込むようになった。",
      en: "Since October began, mornings and evenings have grown noticeably chilly."
    },
    collocation: "めっきり寒くなる, めっきり減る"
  },
  {
    id: "v023",
    word: "見当",
    reading: "けんとう",
    romaji: "kentou",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Estimate, aim, clue, approximate direction",
    example: {
      ja: "無くした財布がどこにあるのか、まったく見当がつかない。",
      en: "I have no clue whatsoever where my lost wallet could be."
    },
    collocation: "見当がつく (have an inkling/clue), 見当違い (wrong guess)"
  },
  {
    id: "v024",
    word: "要するに",
    reading: "ようするに",
    romaji: "yousuruni",
    pos: "conjunction",
    posLabel: "Conjunction (接続詞)",
    meaning: "In short, in a word, to put it simply",
    example: {
      ja: "様々な意見が出ましたが、要するに我々の予算が足りないということです。",
      en: "Various opinions were voiced, but in short, our budget is simply insufficient."
    },
    collocation: "要するに〜ということだ"
  },
  {
    id: "v025",
    word: "引き受ける",
    reading: "ひきうける",
    romaji: "hikiukeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To undertake, take on, accept (responsibility)",
    example: {
      ja: "先輩の頼みだったので、責任を持ってその幹事を引き受けた。",
      en: "Since it was my senior's request, I took on the role of organizer with responsibility."
    },
    collocation: "仕事を引き受ける, 責任を引き受ける"
  },
  {
    id: "v026",
    word: "曖昧",
    reading: "あいまい",
    romaji: "aimai",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Vague, ambiguous, unclear",
    example: {
      ja: "契約書に曖昧な表現があると、後でトラブルの原因になる。",
      en: "Having ambiguous expressions in a contract will cause trouble later."
    },
    collocation: "曖昧な態度 (indecisive attitude), 曖昧な返事"
  },
  {
    id: "v027",
    word: "相変わらず",
    reading: "あいかわらず",
    romaji: "aikawarazu",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "As ever, as usual, still",
    example: {
      ja: "久しぶりに故郷へ帰ったが、駅前は相変わらず賑やかだった。",
      en: "I returned to my hometown after a long time, and the area around the station was bustling as always."
    },
    collocation: "相変わらずお元気で (doing well as usual)"
  },
  {
    id: "v028",
    word: "惜しい",
    reading: "おしい",
    romaji: "oshii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Regrettable, close (almost), precious, too good to waste",
    example: {
      ja: "あと1点足りずに合格を逃したのは、本当に惜しかった。",
      en: "Missing the passing score by just one point was truly regrettable."
    },
    collocation: "時間が惜しい (time is precious), 惜しい試合"
  },
  {
    id: "v029",
    word: "契機",
    reading: "けいき",
    romaji: "keiki",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Opportunity, turning point, momentum, chance",
    example: {
      ja: "日本への留学を契機に、異文化交流に強い関心を持つようになった。",
      en: "Taking my study abroad in Japan as an opportunity, I developed a strong interest in cross-cultural exchange."
    },
    collocation: "〜を契機として (taking ~ as a turning point), 契機をつかむ"
  },
  {
    id: "v030",
    word: "思い付く",
    reading: "おもいつく",
    romaji: "omoitsuku",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To think of, hit upon, recall",
    example: {
      ja: "散歩をしている最中に、新しいアプリのアイデアを思い付いた。",
      en: "While taking a walk, I hit upon an idea for a new mobile application."
    },
    collocation: "アイデアを思い付く, いい案を思い付く"
  },
  {
    id: "v031",
    word: "慎重",
    reading: "しんちょう",
    romaji: "shinchou",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Careful, cautious, discreet, prudent",
    example: {
      ja: "新規事業への参入には、慎重な検討が求められている。",
      en: "Entering a new business sector demands prudent deliberation."
    },
    collocation: "慎重に検討する, 慎重な姿勢 (cautious posture)"
  },
  {
    id: "v032",
    word: "著しい",
    reading: "いちじるしい",
    romaji: "ichijirushii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Remarkable, striking, notable, considerable",
    example: {
      ja: "人工知能の技術は、ここ数年で著しい進歩を遂げている。",
      en: "Artificial intelligence technology has made remarkable progress in the last few years."
    },
    collocation: "著しい変化, 著しい進歩 (striking progress)"
  },
  {
    id: "v033",
    word: "果たす",
    reading: "はたす",
    romaji: "hatasu",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To accomplish, fulfill, carry out, achieve",
    example: {
      ja: "一人ひとりが自分の役割を果たすことで、チームの勝利につながる。",
      en: "Each individual fulfilling their own role leads to the team's victory."
    },
    collocation: "役割を果たす (play/fulfill a role), 約束を果たす"
  },
  {
    id: "v034",
    word: "深刻",
    reading: "しんこく",
    romaji: "shinkoku",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Serious, grave, severe",
    example: {
      ja: "地方では若者の流出により、少子高齢化が深刻な問題となっている。",
      en: "In rural regions, the outflow of youth has made aging and depopulation a grave issue."
    },
    collocation: "深刻な被害, 深刻に受け止める"
  },
  {
    id: "v035",
    word: "およそ",
    reading: "およそ",
    romaji: "oyoso",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Approximately, about, roughly; generally",
    example: {
      ja: "成田空港から都心までは、電車でおよそ1時間かかる。",
      en: "From Narita Airport to the city center takes approximately one hour by train."
    },
    collocation: "およそ〜パーセント, およその見当"
  },
  {
    id: "v036",
    word: "見解",
    reading: "けんかい",
    romaji: "kenkai",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Opinion, point of view, perspective, interpretation",
    example: {
      ja: "その事件に関する政府の公式見解が発表された。",
      en: "The government's official point of view regarding the incident was released."
    },
    collocation: "見解を述べる (state one's view), 見解が分かれる"
  },
  {
    id: "v037",
    word: "乗り越える",
    reading: "のりこえる",
    romaji: "norikoeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To overcome, get through, surmount",
    example: {
      ja: "多くの困難を乗り越えて、プロジェクトを成功に導いた。",
      en: "Overcoming many difficulties, we guided the project to success."
    },
    collocation: "壁を乗り越える, 危機を乗り越える"
  },
  {
    id: "v038",
    word: "厄介",
    reading: "やっかい",
    romaji: "yakkai",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Troublesome, burdensome, nuisance",
    example: {
      ja: "ウイルスの駆除には予想以上に時間がかかり、厄介な作業だった。",
      en: "Eradicating the virus took longer than expected and was troublesome work."
    },
    collocation: "厄介な問題, 厄介になる (depend on someone)"
  },
  {
    id: "v039",
    word: "頼もしい",
    reading: "たのもしい",
    romaji: "tanomoshii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Reliable, dependable, trustworthy, promising",
    example: {
      ja: "新入社員の鈴木さんは、仕事の呑み込みが早くて実に頼もしい。",
      en: "The new recruit Suzuki learns fast on the job and is truly dependable."
    },
    collocation: "頼もしい味方 (dependable ally), 頼もしく感じる"
  },
  {
    id: "v040",
    word: "根拠",
    reading: "こんきょ",
    romaji: "konkyo",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Basis, foundation, grounds, justification",
    example: {
      ja: "客観的な根拠を示さなければ、誰もその主張を信用しないだろう。",
      en: "Unless you provide objective evidence/grounds, no one will believe that assertion."
    },
    collocation: "根拠のない噂 (groundless rumor), 根拠を示す"
  },
  {
    id: "v041",
    word: "促す",
    reading: "うながす",
    romaji: "unagasu",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To urge, prompt, stimulate, encourage",
    example: {
      ja: "市役所は住民に対し、早めの避難を促すアナウンスを流した。",
      en: "The city office broadcast an announcement urging residents to evacuate early."
    },
    collocation: "注意を促す (call attention to), 成長を促す"
  },
  {
    id: "v042",
    word: "極めて",
    reading: "きわめて",
    romaji: "kiwamete",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Extremely, exceedingly, exceptionally",
    example: {
      ja: "この問題の解決は、我が社の将来にとって極めて重要である。",
      en: "Resolving this problem is exceedingly important for the future of our company."
    },
    collocation: "極めて稀 (extremely rare), 極めて重要"
  },
  {
    id: "v043",
    word: "柔軟",
    reading: "じゅうなん",
    romaji: "juunan",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Flexible, lithe, pliable, adaptable",
    example: {
      ja: "予期せぬトラブルには、柔軟な対応を取ることが肝心だ。",
      en: "In the face of unexpected trouble, taking a flexible response is essential."
    },
    collocation: "柔軟な発想 (flexible thinking), 柔軟に対応する"
  },
  {
    id: "v044",
    word: "険しい",
    reading: "けわしい",
    romaji: "kewashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Steep, precipitous, grim, severe (expression)",
    example: {
      ja: "険しい山道を登りきった先に、息をのむような絶景が広がっていた。",
      en: "Beyond climbing the steep mountain path, a breathtaking panorama unfolded."
    },
    collocation: "険しい表情 (grim expression), 険しい道のり"
  },
  {
    id: "v045",
    word: "配慮",
    reading: "はいりょ",
    romaji: "hairyo",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Consideration, thought, solicitude, care",
    example: {
      ja: "高齢者や障害者への配慮が行き届いたバリアフリー設計を採用した。",
      en: "We adopted a barrier-free design that thoroughly considers elderly and disabled persons."
    },
    collocation: "環境への配慮 (consideration for the environment), 配慮が行き届く"
  },
  {
    id: "v046",
    word: "抱える",
    reading: "かかえる",
    romaji: "kakaeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To hold in arms, carry; to face / bear (problems, debt)",
    example: {
      ja: "現代人は多くのストレスや悩みを抱えながら生活している。",
      en: "Modern people live their lives bearing great amounts of stress and worry."
    },
    collocation: "問題を抱える, 借金を抱える, 頭を抱える (be at a loss)"
  },
  {
    id: "v047",
    word: "果たして",
    reading: "はたして",
    romaji: "hatashite",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Really? Truly? Just as thought; indeed",
    example: {
      ja: "これほど巨額の投資をして、果たして十分な利益が得られるのだろうか。",
      en: "Making such a massive investment, can we really obtain sufficient profit?"
    },
    collocation: "果たして本当か (is it really true?), 果たして〜だろうか"
  },
  {
    id: "v048",
    word: "的確",
    reading: "てきかく",
    romaji: "tekikaku",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Precise, accurate, exact, to the point",
    example: {
      ja: "先輩の的確な助言のおかげで、短時間でエラーの原因を突き止められた。",
      en: "Thanks to my senior's precise advice, I tracked down the cause of the error in a short time."
    },
    collocation: "的確な指示 (precise directions), 的確に捉える"
  },
  {
    id: "v049",
    word: "煩わしい",
    reading: "わずらわしい",
    romaji: "wazurawashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Troublesome, cumbersome, annoying, vexing",
    example: {
      ja: "オンライン申請なら、役所へ行く煩わしい手続きを省くことができる。",
      en: "With online application, one can omit the cumbersome procedure of going to the public office."
    },
    collocation: "煩わしい人間関係, 煩わしい手続き"
  },
  {
    id: "v050",
    word: "措置",
    reading: "そち",
    romaji: "sochi",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Measure, step, action",
    example: {
      ja: "不正アクセスが発覚したため、直ちにセキュリティ強化の措置を講じた。",
      en: "Because unauthorized access was detected, we immediately took measures to strengthen security."
    },
    collocation: "措置を講じる (take measures), 緊急措置 (emergency measures)"
  },
  {
    id: "v051",
    word: "補う",
    reading: "おぎなう",
    romaji: "oginau",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To compensate for, supplement, make up for",
    example: {
      ja: "平日の睡眠不足を週末に補おうとしても、完全には回復しない。",
      en: "Even if you try to make up for weekday sleep deprivation on weekends, you won't fully recover."
    },
    collocation: "欠点を補う (offset flaws), 不足を補う"
  },
  {
    id: "v052",
    word: "徐々に",
    reading: "じょじょに",
    romaji: "jojoni",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Gradually, slowly, step by step",
    example: {
      ja: "リハビリを続けた結果、足の痛みは徐々に和らいできた。",
      en: "As a result of continuing rehabilitation, the leg pain gradually eased."
    },
    collocation: "徐々に回復する, 徐々に増える"
  },
  {
    id: "v053",
    word: "巧み",
    reading: "たくみ",
    romaji: "takumi",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Skillful, clever, adroit, dexterous",
    example: {
      ja: "詐欺グループは巧みな話術を使って高齢者を騙していた。",
      en: "The fraud syndicate tricked senior citizens using skillful storytelling."
    },
    collocation: "巧みな技 (skillful technique), 巧みに操る"
  },
  {
    id: "v054",
    word: "視野",
    reading: "しや",
    romaji: "shiya",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Field of vision, view; outlook, perspective",
    example: {
      ja: "海外で生活したことで視野が広がり、物事を多角的に見られるようになった。",
      en: "Living abroad broadened my perspective and enabled me to see things from multifaceted angles."
    },
    collocation: "視野を広げる (broaden perspective), 視野に入れる (take into view)"
  },
  {
    id: "v055",
    word: "怠る",
    reading: "おこたる",
    romaji: "okotaru",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To neglect, be remiss in, fail to do",
    example: {
      ja: "準備運動を怠ると、思わぬ大怪我につながる恐れがある。",
      en: "If you neglect warm-up exercises, there is a danger it could lead to unexpected serious injury."
    },
    collocation: "注意を怠る (relax vigilance), 努力を怠る"
  },
  {
    id: "v056",
    word: "辛うじて",
    reading: "かろうじて",
    romaji: "karoujite",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Barely, narrowly, by the skin of one's teeth",
    example: {
      ja: "発車ベルが鳴り響く中、辛うじて最終電車に飛び乗ることができた。",
      en: "As the departure bell chimed, I barely managed to hop onto the last train."
    },
    collocation: "辛うじて間に合う, 辛うじて合格する"
  },
  {
    id: "v057",
    word: "謙虚",
    reading: "けんきょ",
    romaji: "kenkyo",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Modest, humble, unassuming",
    example: {
      ja: "成功しても奢ることなく、常に謙虚な姿勢を保つことが大切だ。",
      en: "Even if you succeed, without being arrogant, maintaining a humble attitude is vital."
    },
    collocation: "謙虚な態度 (humble attitude), 謙虚に受け止める"
  },
  {
    id: "v058",
    word: "慌ただしい",
    reading: "あわただしい",
    romaji: "awatadashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Busy, hectic, bustling, rushed",
    example: {
      ja: "引越し前日の夜は荷造りに追われ、非常に慌ただしい一日だった。",
      en: "The night before moving was occupied with packing and was an extremely hectic day."
    },
    collocation: "慌ただしい毎日 (hectic daily life), 慌ただしく立ち去る"
  },
  {
    id: "v059",
    word: "格差",
    reading: "かくさ",
    romaji: "kakusa",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Disparity, gap, difference, inequality",
    example: {
      ja: "都市部と地方における経済的な格差を是正することが急務である。",
      en: "Correcting the economic disparity between urban and rural areas is an urgent matter."
    },
    collocation: "貧富の格差 (wealth gap), 世代間格差"
  },
  {
    id: "v060",
    word: "問い合わせる",
    reading: "といあわせる",
    romaji: "toiawaseru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To inquire, ask for information",
    example: {
      ja: "商品の配送状況について、カスタマーサポートにメールで問い合わせた。",
      en: "I inquired via email with customer support regarding the product's delivery status."
    },
    collocation: "詳細を問い合わせる, 電話で問い合わせる"
  },
  {
    id: "v061",
    word: "なおさら",
    reading: "なおさら",
    romaji: "naosara",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "All the more, still less, even more so",
    example: {
      ja: "彼が来ないとなると、計画の進行はなおさら難しくなる。",
      en: "If he is not coming, proceeding with the plan becomes all the more difficult."
    },
    collocation: "なおさら〜だ"
  },
  {
    id: "v062",
    word: "妥協",
    reading: "だきょう",
    romaji: "dakyou",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Compromise, giving in",
    example: {
      ja: "労使双方が粘り強く交渉を重ねた結果、双方が納得できる妥協点を見出した。",
      en: "As a result of persistent negotiation between labor and management, they found a compromise point agreeable to both."
    },
    collocation: "妥協案 (compromise proposal), 妥協を許さない"
  },
  {
    id: "v063",
    word: "幼い",
    reading: "おさない",
    romaji: "osanai",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Very young, childish, juvenile, immature",
    example: {
      ja: "彼は幼い頃から絵を描くのが好きで、将来は画家を志していた。",
      en: "Since he was very young he loved drawing pictures, and aspired to become a painter in the future."
    },
    collocation: "幼い子ども, 幼い考え (childish thinking)"
  },
  {
    id: "v064",
    word: "目処",
    reading: "めど",
    romaji: "medo",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Prospect, outlook, target, sight",
    example: {
      ja: "資金調達に目処が立ったため、新工場の建設を正式に着工することにした。",
      en: "Because prospects for fundraising were established, we decided to officially start construction on the new factory."
    },
    collocation: "目処が立つ (outlook becomes clear), 目処をつける"
  },
  {
    id: "v065",
    word: "招く",
    reading: "まねく",
    romaji: "maneku",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To invite; to incur, bring upon oneself, cause",
    example: {
      ja: "曖昧な説明を続けたことが、顧客からの激しい不信感を招いてしまった。",
      en: "Continuing with vague explanations ended up incurring intense distrust from customers."
    },
    collocation: "誤解を招く (cause misunderstanding), 混乱を招く"
  },
  {
    id: "v066",
    word: "一概に",
    reading: "いちがいに",
    romaji: "ichigaini",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Unconditionally, sweeps (usually with negative: can't say categorically)",
    example: {
      ja: "値段が高いものが全て高品質だとは、一概には言えない。",
      en: "One cannot say categorically that everything with a high price is high quality."
    },
    collocation: "一概には言えない (cannot be said unconditionally)"
  },
  {
    id: "v067",
    word: "旺盛",
    reading: "おうせい",
    romaji: "ousei",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Vigorous, energetic, hearty, lively",
    example: {
      ja: "好奇心旺盛な子どもたちは、何事にも目を輝かせて挑戦する。",
      en: "Children full of vigorous curiosity take on everything with sparkling eyes."
    },
    collocation: "食欲旺盛 (hearty appetite), 好奇心旺盛"
  },
  {
    id: "v068",
    word: "したがって",
    reading: "したがって",
    romaji: "shitagatte",
    pos: "conjunction",
    posLabel: "Conjunction (接続詞)",
    meaning: "Therefore, consequently, accordingly",
    example: {
      ja: "明日は全国的な大雪が予想されます。したがって、外出は極力控えてください。",
      en: "Heavy snow nationwide is forecasted tomorrow. Therefore, please refrain from going out as much as possible."
    },
    collocation: "したがって〜となる"
  },
  {
    id: "v069",
    word: "捉える",
    reading: "とらえる",
    romaji: "toraeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To capture, perceive, grasp, understand",
    example: {
      ja: "時代の変化を前向きに捉え、新しいビジネスチャンスを創出すべきだ。",
      en: "We should perceive changes of the era positively and generate new business opportunities."
    },
    collocation: "特徴を捉える, 心を捉える (captivate hearts)"
  },
  {
    id: "v070",
    word: "甚だしい",
    reading: "はなはだしい",
    romaji: "hanahadashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Extreme, excessive, glaring, outrageous",
    example: {
      ja: "事実無根の報道によって、当社の名誉毀損の被害は甚だしい。",
      en: "Due to groundless reports, the defamation damage suffered by our firm is extreme."
    },
    collocation: "甚だしい迷惑 (outrageous nuisance), 時代錯誤も甚だしい"
  },
  {
    id: "v071",
    word: "立ち寄る",
    reading: "たちよる",
    romaji: "tachiyoru",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To drop by, stop off, visit on the way",
    example: {
      ja: "仕事帰りに駅前の書店に立ち寄って、最新の雑誌を買った。",
      en: "On my way home from work, I dropped by the bookstore in front of the station and bought the newest magazine."
    },
    collocation: "コンビニに立ち寄る, ついでに立ち寄る"
  },
  {
    id: "v072",
    word: "巧妙",
    reading: "こうみょう",
    romaji: "koumyou",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Ingenious, clever, skillful, crafty",
    example: {
      ja: "その手品師は巧妙な手さばきで観客を魅了した。",
      en: "The magician fascinated the audience with ingenious sleight of hand."
    },
    collocation: "巧妙な手口 (crafty trick/modus operandi), 巧妙に仕組む"
  },
  {
    id: "v073",
    word: "ひたすら",
    reading: "ひたすら",
    romaji: "hitasura",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Intently, single-mindedly, solely, doing nothing but",
    example: {
      ja: "試験前夜は、ひたすら単語カードをめくって暗記に励んだ。",
      en: "The night before the exam, I spent the time doing nothing but flipping flashcards and memorizing."
    },
    collocation: "ひたすら待つ (wait intently), ひたすら努力する"
  },
  {
    id: "v074",
    word: "過半数",
    reading: "かはんすう",
    romaji: "kahansuu",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Majority, more than half",
    example: {
      ja: "賛成票が過半数に達しなかったため、法案の可決は見送られた。",
      en: "Because votes in favor did not reach a majority, passing the bill was put on hold."
    },
    collocation: "過半数を占める (account for a majority), 過半数を超える"
  },
  {
    id: "v075",
    word: "打ち消す",
    reading: "うちけす",
    romaji: "uchikesu",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To deny, negate, contradict, drown out",
    example: {
      ja: "激しい雷鳴が、二人の会話の声をかき消して打ち消した。",
      en: "The violent thunderclap drowned out and negated the voices of their conversation."
    },
    collocation: "噂を打ち消す (deny rumors), 否定して打ち消す"
  },
  {
    id: "v076",
    word: "手短",
    reading: "てみじか",
    romaji: "temijika",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Brief, concise, short and to the point",
    example: {
      ja: "時間が押しているので、要点だけを手短に報告してください。",
      en: "Since time is pressing, please report only key points briefly."
    },
    collocation: "手短に話す (speak briefly), 手短な説明"
  },
  {
    id: "v077",
    word: "荒い",
    reading: "あらい",
    romaji: "arai",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Rough, wild, harsh, coarse, violent",
    example: {
      ja: "台風の接近により海は波が荒く、全てのフェリーが欠航となった。",
      en: "With the typhoon approaching the sea waves were rough, and all ferries were canceled."
    },
    collocation: "息が荒い (breathing heavily), 気性が荒い, 金遣いが荒い"
  },
  {
    id: "v078",
    word: "意図",
    reading: "いと",
    romaji: "ito",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Intention, aim, purpose, design",
    example: {
      ja: "作者がこの作品に込めた真の意図を読み解くのは容易ではない。",
      en: "Deciphering the true intent the creator put into this work is not easy."
    },
    collocation: "意図的に (intentionally), 意図を汲み取る"
  },
  {
    id: "v079",
    word: "差し引く",
    reading: "さしひく",
    romaji: "sashihiku",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To deduct, take away, balance out",
    example: {
      ja: "給与から税金や社会保険料を差し引いた金額が手取りとなる。",
      en: "The amount after deducting taxes and social insurance from gross pay becomes net take-home pay."
    },
    collocation: "給料から差し引く, 差し引きゼロ (net zero)"
  },
  {
    id: "v080",
    word: "一段と",
    reading: "いちだんと",
    romaji: "ichidanto",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Greater, further, much more, all the more",
    example: {
      ja: "冷え込みが強まり、今朝の富士山は一段と美しく澄んで見えた。",
      en: "The cold intensified, and Mount Fuji appeared all the more beautifully clear this morning."
    },
    collocation: "一段と厳しくなる, 一段と向上する"
  },
  {
    id: "v081",
    word: "露骨",
    reading: "ろこつ",
    romaji: "rokotsu",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Blatant, explicit, undisguised, overt",
    example: {
      ja: "あからさまに不快感を顔に出すような露骨な態度は慎むべきだ。",
      en: "One should refrain from blatant attitudes such as openly displaying displeasure on one's face."
    },
    collocation: "露骨な嫌悪感 (undisguised distaste), 露骨に嫌がる"
  },
  {
    id: "v082",
    word: "鈍い",
    reading: "にぶい",
    romaji: "nibui",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Dull, blunt, slow, sluggish, dim",
    example: {
      ja: "切れ味の鈍い包丁を使うと、怪我の原因になりやすい。",
      en: "Using a dull kitchen knife easily leads to injury."
    },
    collocation: "反応が鈍い (slow reaction), 鈍い痛み (dull ache)"
  },
  {
    id: "v083",
    word: "枠組み",
    reading: "わくぐみ",
    romaji: "wakugumi",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Framework, schema, outline, structure",
    example: {
      ja: "環境保護に関する国際的な枠組みに、多くの国が合意した。",
      en: "Many nations agreed to the international framework regarding environmental protection."
    },
    collocation: "枠組みを作る, 協定の枠組み"
  },
  {
    id: "v084",
    word: "雇う",
    reading: "やとう",
    romaji: "yatou",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To employ, hire",
    example: {
      ja: "業務拡大に伴い、語学が堪能なスタッフを新たに5名雇い入れた。",
      en: "Accompanying business expansion, we hired 5 new staff members proficient in foreign languages."
    },
    collocation: "従業員を雇う, 運転手を雇う"
  },
  {
    id: "v085",
    word: "おそらく",
    reading: "おそらく",
    romaji: "osoraku",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Probably, likely, in all likelihood",
    example: {
      ja: "この調子で進めば、おそらく夕方までには全ての作業が終わるだろう。",
      en: "If we proceed at this pace, in all likelihood all tasks will finish by evening."
    },
    collocation: "おそらく〜だろう (likely will ...)"
  },
  {
    id: "v086",
    word: "密接",
    reading: "みっせつ",
    romaji: "missetsu",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Close, intimate, closely related",
    example: {
      ja: "食生活と生活習慣病の発症には、極めて密接な関係がある。",
      en: "There is an exceedingly close connection between diet and the onset of lifestyle diseases."
    },
    collocation: "密接に関係している, 密接な連携"
  },
  {
    id: "v087",
    word: "振り返る",
    reading: "ふりかえる",
    romaji: "furikaeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To look back, turn around; to reflect upon",
    example: {
      ja: "今年一年の自分の行動を振り返り、来年の目標を具体的に立てた。",
      en: "Reflecting back on my own actions over this past year, I set concrete goals for next year."
    },
    collocation: "過去を振り返る (reflect on the past), 後ろを振り返る"
  },
  {
    id: "v088",
    word: "効率",
    reading: "こうりつ",
    romaji: "kouritsu",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Efficiency, efficacy, performance",
    example: {
      ja: "新しいツールの導入により、書類作成の作業効率が大幅に向上した。",
      en: "By adopting the new tool, document creation work efficiency increased significantly."
    },
    collocation: "業務効率化 (streamlining operations), 効率が良い / 悪い"
  },
  {
    id: "v089",
    word: "めったに",
    reading: "めったに",
    romaji: "mettani",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Rarely, seldom (with negative)",
    example: {
      ja: "東京の平野部では、大雪が積もることはめったにありません。",
      en: "In the flatlands of Tokyo, heavy snowfall seldom accumulates."
    },
    collocation: "めったに〜ない (seldom ...)"
  },
  {
    id: "v090",
    word: "煙たい",
    reading: "けむたい",
    romaji: "kemutai",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Smoky; uncomfortable to be around, awkward (person)",
    example: {
      ja: "口うるさい上司の存在を、周りの若手社員は煙たく感じていた。",
      en: "Younger employees around felt awkward and restrained around the overly critical boss."
    },
    collocation: "煙たがられる (be avoided / felt awkward around)"
  },
  {
    id: "v091",
    word: "蓄える",
    reading: "たくわえる",
    romaji: "takuwaeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To store, save up, amass, build up (knowledge, energy)",
    example: {
      ja: "大会本番に向けて、十分な睡眠を取って体力を蓄えておく必要がある。",
      en: "Heading toward the actual tournament, it is necessary to get sufficient sleep and build up stamina."
    },
    collocation: "知識を蓄える (amass knowledge), 貯金を蓄える, 髭を蓄える"
  },
  {
    id: "v092",
    word: "兆候",
    reading: "ちょうこう",
    romaji: "choukou",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Sign, symptom, omen, indication",
    example: {
      ja: "景気回復の確かな兆候が、様々な経済データから見え始めている。",
      en: "Clear signs of economic recovery are beginning to show from various economic data."
    },
    collocation: "回復の兆候, 異常の兆候"
  },
  {
    id: "v093",
    word: "思わず",
    reading: "おもわず",
    romaji: "omowazu",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Involuntarily, unintentionally, spontaneously",
    example: {
      ja: "あまりのおかしさに、厳粛な会議中にもかかわらず思わず吹き出してしまった。",
      en: "Because it was so hilarious, despite being in a solemn meeting I spontaneously burst out laughing."
    },
    collocation: "思わず笑ってしまう, 思わず声をあげる"
  },
  {
    id: "v094",
    word: "迅速",
    reading: "じんそく",
    romaji: "jinsoku",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Quick, fast, swift, prompt, speedy",
    example: {
      ja: "災害発生時における迅速な情報提供が、多くの命を救う鍵となる。",
      en: "Prompt provision of information during disasters is the key to saving many lives."
    },
    collocation: "迅速な対応 (swift response), 迅速に処理する"
  },
  {
    id: "v095",
    word: "避ける",
    reading: "さける",
    romaji: "sakeru",
    pos: "verb",
    posLabel: "Verb (動詞 - 一段)",
    meaning: "To avoid, dodge, shun, ward off",
    example: {
      ja: "通勤ラッシュを避けるため、毎朝6時半の電車に乗るようにしている。",
      en: "To avoid the commuter rush, I make it a habit to ride the 6:30 AM train every morning."
    },
    collocation: "混雑を避ける, 責任を避ける"
  },
  {
    id: "v096",
    word: "意欲",
    reading: "いよく",
    romaji: "iyoku",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Will, desire, ambition, motivation, eagerness",
    example: {
      ja: "失敗を恐れず果敢に挑戦する意欲のある若手社員を積極的に採用したい。",
      en: "We want to proactively recruit young employees who have the drive and motivation to take on challenges without fearing failure."
    },
    collocation: "学習意欲 (eagerness to learn), 意欲が湧く, 働く意欲"
  },
  {
    id: "v097",
    word: "かえって",
    reading: "かえって",
    romaji: "kaette",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "On the contrary, rather, all the more instead",
    example: {
      ja: "親切心で手伝ったつもりが、かえって相手の邪魔になってしまった。",
      en: "Intending to help out of kindness, it rather ended up getting in the other person's way."
    },
    collocation: "かえって悪化する (get worse on the contrary)"
  },
  {
    id: "v098",
    word: "卑しい",
    reading: "いやしい",
    romaji: "iyashii",
    pos: "adjective-i",
    posLabel: "I-Adjective (い形容詞)",
    meaning: "Greedy, vulgar, mean, ignoble, humble",
    example: {
      ja: "自分だけの金儲けのために他人を陥れるのは、極めて卑しい行為だ。",
      en: "Entrapping others merely for one's own profit is an exceedingly despicable act."
    },
    collocation: "卑しい心, 食べ物に卑しい (gluttonous/greedy for food)"
  },
  {
    id: "v099",
    word: "割り込む",
    reading: "わりこむ",
    romaji: "warikomu",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To cut in, butt in (line, conversation), wedge between",
    example: {
      ja: "他人が真剣に話している最中に、横から強引に割り込むのはマナー違反だ。",
      en: "Forcefully cutting in from the side while others are in serious conversation is a breach of manners."
    },
    collocation: "列に割り込む (cut into a line), 話に割り込む"
  },
  {
    id: "v100",
    word: "是非",
    reading: "ぜひ",
    romaji: "zehi",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Pros and cons, right and wrong; certainly, by all means",
    example: {
      ja: "市民投票を実施して、新庁舎建設計画の是非を問うことになった。",
      en: "A civic referendum will be held to question the rightness or wrongness (pros and cons) of the new city hall building plan."
    },
    collocation: "是非を問う (ask right or wrong), 是非とも (by all means)"
  },
  {
    id: "v101",
    word: "平穏",
    reading: "へいおん",
    romaji: "heion",
    pos: "adjective-na",
    posLabel: "Na-Adjective (な形容詞)",
    meaning: "Peaceful, calm, tranquil, quiet",
    example: {
      ja: "定年退職を迎えた後は、自然豊かな田舎で平穏な生活を送りたい。",
      en: "After reaching retirement age, I wish to lead a tranquil life in the nature-rich countryside."
    },
    collocation: "平穏無事 (safe and peaceful), 平穏な日々"
  },
  {
    id: "v102",
    word: "直ちに",
    reading: "ただちに",
    romaji: "tadachini",
    pos: "adverb",
    posLabel: "Adverb (副詞)",
    meaning: "Immediately, right away, directly",
    example: {
      ja: "警報が発令された場合は、直ちに安全な高台へ避難してください。",
      en: "When an alarm is issued, please immediately evacuate to safe high ground."
    },
    collocation: "直ちに出発する, 直ちに取りかかる"
  },
  {
    id: "v103",
    word: "乗り出す",
    reading: "のりだす",
    romaji: "noridasu",
    pos: "verb",
    posLabel: "Verb (動詞 - 五段)",
    meaning: "To embark on, launch into; lean forward",
    example: {
      ja: "警察は事態を重く見て、事件の本格的な捜査に乗り出した。",
      en: "Viewing the situation gravely, police embarked on a full-scale criminal investigation."
    },
    collocation: "捜査に乗り出す (embark on investigation), 調査に乗り出す"
  },
  {
    id: "v104",
    word: "反面",
    reading: "はんめん",
    romaji: "hanmen",
    pos: "conjunction",
    posLabel: "Conjunction (接続詞)",
    meaning: "On the other hand, conversely, while ...",
    example: {
      ja: "リモートワークは自由な時間が増える反面、自己管理がより難しくなる。",
      en: "While remote work increases free time, on the other hand self-management becomes more difficult."
    },
    collocation: "〜反面 (on the other hand)"
  },
  {
    id: "v105",
    word: "概要",
    reading: "がいよう",
    romaji: "gaiyou",
    pos: "noun",
    posLabel: "Noun (名詞)",
    meaning: "Outline, summary, synopsis, overview",
    example: {
      ja: "本日のプレゼンテーションでは、新プロジェクトの概要についてご説明いたします。",
      en: "In today's presentation, I will explain the overview of the new project."
    },
    collocation: "概要を把握する (grasp the outline), 計画の概要"
  }
];

if (typeof window !== "undefined") {
  window.vocabData = VOCAB_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { VOCAB_DATA };
}
