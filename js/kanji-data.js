/**
 * JLPT N2 Master - Kanji Data
 * Comprehensive collection of core JLPT N2 kanji with readings, meanings, stroke counts, radicals, and example compounds.
 */

const KANJI_DATA = [
  {
    id: "k001",
    kanji: "憲",
    on: "ケン",
    kun: "-",
    meaning: "Constitution, fundamental law",
    strokes: 16,
    radical: "心",
    radicalName: "こころ (Heart)",
    level: "N2",
    compounds: [
      { word: "憲法", reading: "けんぽう", meaning: "Constitution" },
      { word: "違憲", reading: "いけん", meaning: "Unconstitutionality" },
      { word: "合憲", reading: "ごうけん", meaning: "Constitutional" }
    ],
    hint: "Think of an official seal over heart and eye: the supreme legal code."
  },
  {
    id: "k002",
    kanji: "政",
    on: "セイ, ショウ",
    kun: "まつりごと",
    meaning: "Politics, government, rule",
    strokes: 9,
    radical: "攵",
    radicalName: "ぼくづくり (Fold, strike)",
    level: "N2",
    compounds: [
      { word: "政治", reading: "せいじ", meaning: "Politics, government" },
      { word: "政策", reading: "せいさく", meaning: "Political policy" },
      { word: "政府", reading: "せいふ", meaning: "Government" }
    ],
    hint: "Correct rules enforced by action lead to good politics."
  },
  {
    id: "k003",
    kanji: "党",
    on: "トウ",
    kun: "なかま, むら",
    meaning: "Party, faction, clique",
    strokes: 10,
    radical: "儿",
    radicalName: "ひとあし (Human legs)",
    level: "N2",
    compounds: [
      { word: "政党", reading: "せいとう", meaning: "Political party" },
      { word: "与党", reading: "よとう", meaning: "Ruling party" },
      { word: "野党", reading: "やとう", meaning: "Opposition party" }
    ],
    hint: "A banner above a group of people moving together as a faction."
  },
  {
    id: "k004",
    kanji: "警",
    on: "ケイ",
    kun: "いまし.める",
    meaning: "Admonish, warn, guard",
    strokes: 19,
    radical: "言",
    radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "警察", reading: "けいさつ", meaning: "Police" },
      { word: "警告", reading: "けいこく", meaning: "Warning, alert" },
      { word: "警備", reading: "けいび", meaning: "Defense, security guard" }
    ],
    hint: "Urgent spoken words of respect and warning."
  },
  {
    id: "k005",
    kanji: "察",
    on: "サツ",
    kun: "-",
    meaning: "Guess, presume, inspect, discern",
    strokes: 14,
    radical: "宀",
    radicalName: "うかんむり (Roof)",
    level: "N2",
    compounds: [
      { word: "観察", reading: "かんさつ", meaning: "Observation" },
      { word: "警察署", reading: "けいさつしょ", meaning: "Police station" },
      { word: "推察", reading: "すいさつ", meaning: "Infer, guess sympatheticly" }
    ],
    hint: "Examining an altar under a roof carefully to discern truths."
  },
  {
    id: "k006",
    kanji: "署",
    on: "ショ",
    kun: "-",
    meaning: "Government office, signature",
    strokes: 13,
    radical: "罒",
    radicalName: "あみがしら (Net)",
    level: "N2",
    compounds: [
      { word: "消防署", reading: "しょうぼうしょ", meaning: "Fire station" },
      { word: "署名", reading: "しょめい", meaning: "Signature, autograph" },
      { word: "部署", reading: "ぶしょ", meaning: "Department, station" }
    ],
    hint: "People gathered under a net to sign administrative orders."
  },
  {
    id: "k007",
    kanji: "域",
    on: "イキ",
    kun: "-",
    meaning: "Zone, region, territory, limits",
    strokes: 11,
    radical: "土",
    radicalName: "つち (Earth/Soil)",
    level: "N2",
    compounds: [
      { word: "地域", reading: "ちいき", meaning: "Area, region, locality" },
      { word: "領域", reading: "りょういき", meaning: "Territory, domain, realm" },
      { word: "流域", reading: "りゅういき", meaning: "River basin" }
    ],
    hint: "Earth bordered by halberds marking off a secure zone."
  },
  {
    id: "k008",
    kanji: "象",
    on: "ショウ, ゾウ",
    kun: "かたど.る",
    meaning: "Elephant, pattern, image, shape",
    strokes: 12,
    radical: "豕",
    radicalName: "いのこ (Pig/Boar)",
    level: "N2",
    compounds: [
      { word: "対象", reading: "たいしょう", meaning: "Target, subject" },
      { word: "現象", reading: "げんしょう", meaning: "Phenomenon" },
      { word: "印象", reading: "いんしょう", meaning: "Impression" }
    ],
    hint: "Pictograph of an elephant; hence a grand figure or image."
  },
  {
    id: "k009",
    kanji: "損",
    on: "ソン",
    kun: "そこ.なう, そこ.ねる",
    meaning: "Damage, loss, disadvantage, hurt",
    strokes: 13,
    radical: "扌",
    radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "損害", reading: "そんがい", meaning: "Damage, injury, loss" },
      { word: "損失", reading: "そんしつ", meaning: "Loss (financial/material)" },
      { word: "破損", reading: "はそん", meaning: "Breakage, damage" }
    ],
    hint: "A hand dropping precious goods causes financial loss."
  },
  {
    id: "k010",
    kanji: "依",
    on: "イ, エ",
    kun: "よ.る",
    meaning: "Reliant, depend on, obey",
    strokes: 8,
    radical: "亻",
    radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "依頼", reading: "いらい", meaning: "Request, commission" },
      { word: "依然", reading: "いぜん", meaning: "Still, as yet" },
      { word: "依存", reading: "いそん / いぞん", meaning: "Dependence, reliance" }
    ],
    hint: "A person wrapped in garments leans on someone for warmth."
  },
  {
    id: "k011",
    kanji: "頼",
    on: "ライ",
    kun: "たの.む, たよ.る",
    meaning: "Trust, request, rely on",
    strokes: 16,
    radical: "頁",
    radicalName: "おおがい (Big shell / Head)",
    level: "N2",
    compounds: [
      { word: "信頼", reading: "しんらい", meaning: "Trust, confidence" },
      { word: "頼もしい", reading: "たのもしい", meaning: "Reliable, dependable" },
      { word: "頼る", reading: "たよる", meaning: "To rely on, to turn to" }
    ],
    hint: "Turning your head towards someone you trust in difficult times."
  },
  {
    id: "k012",
    kanji: "複",
    on: "フク",
    kun: "-",
    meaning: "Duplicate, double, compound, multiple",
    strokes: 14,
    radical: "衤",
    radicalName: "ころもへん (Clothing)",
    level: "N2",
    compounds: [
      { word: "複雑", reading: "ふくざつ", meaning: "Complex, complicated" },
      { word: "複数", reading: "ふくすう", meaning: "Plural, multiple" },
      { word: "複製", reading: "ふくせい", meaning: "Reproduction, duplication" }
    ],
    hint: "Clothing folded in multiple layers repeatedly."
  },
  {
    id: "k013",
    kanji: "雑",
    on: "ザツ, ゾウ",
    kun: "まじ.える, まじ.る",
    meaning: "Miscellaneous, mixed, rough",
    strokes: 14,
    radical: "隹",
    radicalName: "ふるとり (Small bird)",
    level: "N2",
    compounds: [
      { word: "雑誌", reading: "ざっし", meaning: "Magazine" },
      { word: "混雑", reading: "こんざつ", meaning: "Congestion, crowding" },
      { word: "雑談", reading: "ざつだん", meaning: "Chitchat, idle talk" }
    ],
    hint: "Various birds of assorted plumage perching together."
  },
  {
    id: "k014",
    kanji: "普",
    on: "フ",
    kun: "あまね.く",
    meaning: "Universal, wide, general, ordinary",
    strokes: 12,
    radical: "日",
    radicalName: "ひ (Sun)",
    level: "N2",
    compounds: [
      { word: "普及", reading: "ふきゅう", meaning: "Spread, popularization" },
      { word: "普通", reading: "ふつう", meaning: "Ordinary, normal, usual" },
      { word: "普遍的", reading: "ふへんてき", meaning: "Universal, omnipresent" }
    ],
    hint: "Sun shining universally across all lines and rows."
  },
  {
    id: "k015",
    kanji: "及",
    on: "キュウ",
    kun: "およ.ぶ, およ.ぼす",
    meaning: "Reach out, exert, equal, extend",
    strokes: 3,
    radical: "又",
    radicalName: "また (Again, right hand)",
    level: "N2",
    compounds: [
      { word: "追及", reading: "ついきゅう", meaning: "Investigation, questioning" },
      { word: "及第", reading: "きゅうだい", meaning: "Passing an exam" },
      { word: "言及", reading: "げんきゅう", meaning: "Reference, mention" }
    ],
    hint: "A hand stretching forward to touch someone in front."
  },
  {
    id: "k016",
    kanji: "貿",
    on: "ボウ",
    kun: "-",
    meaning: "Trade, exchange, barter",
    strokes: 12,
    radical: "貝",
    radicalName: "かい (Shell / Money)",
    level: "N2",
    compounds: [
      { word: "貿易", reading: "ぼうえき", meaning: "Foreign trade" },
      { word: "貿易商", reading: "ぼうえきしょう", meaning: "Trader, merchant" },
      { word: "密貿易", reading: "みつぼうえき", meaning: "Smuggling" }
    ],
    hint: "Exchanging cowrie shells for merchandise across borders."
  },
  {
    id: "k017",
    kanji: "易",
    on: "エキ, イ",
    kun: "やさ.しい",
    meaning: "Easy, simple, fortune-telling, change",
    strokes: 8,
    radical: "日",
    radicalName: "ひ (Sun)",
    level: "N2",
    compounds: [
      { word: "難易度", reading: "なんいど", meaning: "Difficulty level" },
      { word: "安易", reading: "あんい", meaning: "Easy-going, simplistic" },
      { word: "容易", reading: "ようい", meaning: "Simple, plain, easy" }
    ],
    hint: "A chameleon changing skin colors with total ease under the sun."
  },
  {
    id: "k018",
    kanji: "企",
    on: "キ",
    kun: "くわだ.てる",
    meaning: "Undertake, scheme, plan, attempt",
    strokes: 6,
    radical: "人",
    radicalName: "ひと (Person)",
    level: "N2",
    compounds: [
      { word: "企業", reading: "きぎょう", meaning: "Enterprise, business, firm" },
      { word: "企画", reading: "きかく", meaning: "Planning, proposal, project" },
      { word: "企てる", reading: "くわだてる", meaning: "To plot, attempt, undertake" }
    ],
    hint: "A person standing on tiptoe to look into the future and plan ahead."
  },
  {
    id: "k019",
    kanji: "雇",
    on: "コ",
    kun: "やと.う",
    meaning: "Employ, hire",
    strokes: 12,
    radical: "隹",
    radicalName: "ふるとり (Bird)",
    level: "N2",
    compounds: [
      { word: "雇用", reading: "こよう", meaning: "Employment, hiring" },
      { word: "解雇", reading: "かいこ", meaning: "Dismissal, discharge, firing" },
      { word: "雇い主", reading: "やといぬし", meaning: "Employer" }
    ],
    hint: "A door opening to shelter birds: hiring hands into the house."
  },
  {
    id: "k020",
    kanji: "替",
    on: "タイ",
    kun: "か.える, か.わる",
    meaning: "Exchange, substitute, replace",
    strokes: 12,
    radical: "日",
    radicalName: "ひ (Sun)",
    level: "N2",
    compounds: [
      { word: "為替", reading: "かわせ", meaning: "Currency exchange, money order" },
      { word: "両替", reading: "りょうがえ", meaning: "Money exchange" },
      { word: "着替え", reading: "きがえ", meaning: "Change of clothes" }
    ],
    hint: "Two people facing each other under the sun to exchange items."
  },
  {
    id: "k021",
    kanji: "資",
    on: "シ",
    kun: "-",
    meaning: "Assets, resources, capital, funds",
    strokes: 13,
    radical: "貝",
    radicalName: "かい (Shell / Money)",
    level: "N2",
    compounds: [
      { word: "資源", reading: "しげん", meaning: "Resources" },
      { word: "資格", reading: "しかく", meaning: "Qualification, license" },
      { word: "資料", reading: "しりょう", meaning: "Materials, data, documents" }
    ],
    hint: "Secondary accumulated shells forming liquid capital."
  },
  {
    id: "k022",
    kanji: "源",
    on: "ゲン",
    kun: "みなもと",
    meaning: "Source, origin, spring",
    strokes: 13,
    radical: "氵",
    radicalName: "さんずい (Water)",
    level: "N2",
    compounds: [
      { word: "電源", reading: "でんげん", meaning: "Power supply, electrical power" },
      { word: "起源", reading: "きげん", meaning: "Origin, beginning, genesis" },
      { word: "語源", reading: "ごげん", meaning: "Word origin, etymology" }
    ],
    hint: "Water flowing forth from a high rocky plateau spring."
  },
  {
    id: "k023",
    kanji: "講",
    on: "コウ",
    kun: "-",
    meaning: "Lecture, study, club, association",
    strokes: 17,
    radical: "言",
    radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "講師", reading: "こうし", meaning: "Lecturer, instructor" },
      { word: "講義", reading: "こうぎ", meaning: "Academic lecture" },
      { word: "休講", reading: "きゅうこう", meaning: "Cancelled lecture" }
    ],
    hint: "Constructing words in an organized structure to give a lecture."
  },
  {
    id: "k024",
    kanji: "師",
    on: "シ",
    kun: "-",
    meaning: "Expert, teacher, master, army",
    strokes: 10,
    radical: "巾",
    radicalName: "はば (Cloth/Towel)",
    level: "N2",
    compounds: [
      { word: "医師", reading: "いし", meaning: "Doctor, physician" },
      { word: "教師", reading: "きょうし", meaning: "Teacher, instructor" },
      { word: "恩師", reading: "おんし", meaning: "One's respected former teacher" }
    ],
    hint: "A commander holding a battle banner instructing troops."
  },
  {
    id: "k025",
    kanji: "任",
    on: "ニン",
    kun: "まか.せる, まか.す",
    meaning: "Responsibility, duty, entrust to",
    strokes: 6,
    radical: "亻",
    radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "責任", reading: "せきにん", meaning: "Responsibility, duty" },
      { word: "担任", reading: "たんにん", meaning: "In charge (e.g. homeroom teacher)" },
      { word: "辞任", reading: "じにん", meaning: "Resignation" }
    ],
    hint: "A dependable person carrying a heavy pole load."
  },
  {
    id: "k026",
    kanji: "務",
    on: "ム",
    kun: "つと.める",
    meaning: "Duty, task, service, business",
    strokes: 11,
    radical: "力",
    radicalName: "ちから (Power)",
    level: "N2",
    compounds: [
      { word: "勤務", reading: "きんむ", meaning: "Service, work, duty" },
      { word: "義務", reading: "ぎむ", meaning: "Duty, obligation" },
      { word: "事務", reading: "じむ", meaning: "Clerical work, office business" }
    ],
    hint: "Spear-armed workers putting in physical strength on duty."
  },
  {
    id: "k027",
    kanji: "底",
    on: "テイ",
    kun: "そこ",
    meaning: "Bottom, base, sole, depth",
    strokes: 8,
    radical: "广",
    radicalName: "まだれ (Dotted cliff / Roof)",
    level: "N2",
    compounds: [
      { word: "徹底的", reading: "てっていてき", meaning: "Thorough, exhaustive" },
      { word: "海底", reading: "かいてい", meaning: "Seabed, ocean floor" },
      { word: "心底", reading: "しんそこ", meaning: "From the bottom of one's heart" }
    ],
    hint: "Reaching the absolute bottom point of an underground shelter."
  },
  {
    id: "k028",
    kanji: "略",
    on: "リャク",
    kun: "ほぼ, おか.す",
    meaning: "Abbreviation, omission, outline, strategy",
    strokes: 11,
    radical: "田",
    radicalName: "た (Rice field)",
    level: "N2",
    compounds: [
      { word: "省略", reading: "しょうりゃく", meaning: "Omission, abbreviation" },
      { word: "戦略", reading: "せんりゃく", meaning: "Strategy, tactics" },
      { word: "略歴", reading: "りゃくれき", meaning: "Brief personal history, CV" }
    ],
    hint: "Drawing rough boundary marks across fields as an outlined plan."
  },
  {
    id: "k029", kanji: "額", on: "ガク", kun: "ひたい",
    meaning: "Amount, forehead, framed picture", strokes: 18,
    radical: "頁", radicalName: "おおがい (Head)",
    level: "N2",
    compounds: [
      { word: "金額", reading: "きんがく", meaning: "Amount of money" },
      { word: "総額", reading: "そうがく", meaning: "Total amount" },
      { word: "額縁", reading: "がくぶち", meaning: "Picture frame" }
    ],
    hint: "A guest's forehead — and the amount they pay."
  },
  {
    id: "k030", kanji: "際", on: "サイ", kun: "きわ",
    meaning: "Occasion, edge, verge, international", strokes: 14,
    radical: "阝", radicalName: "こざとへん (Mound)",
    level: "N2",
    compounds: [
      { word: "国際", reading: "こくさい", meaning: "International" },
      { word: "実際", reading: "じっさい", meaning: "Actually, in fact" },
      { word: "交際", reading: "こうさい", meaning: "Social relations, dating" }
    ],
    hint: "At the edge of a mound, nations meet on occasion."
  },
  {
    id: "k031", kanji: "認", on: "ニン", kun: "みと.める",
    meaning: "Acknowledge, recognize, approve", strokes: 14,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "確認", reading: "かくにん", meaning: "Confirmation, verification" },
      { word: "認める", reading: "みとめる", meaning: "To recognize, admit" },
      { word: "承認", reading: "しょうにん", meaning: "Approval, authorization" }
    ],
    hint: "Using words to identify and acknowledge a person."
  },
  {
    id: "k032", kanji: "届", on: "トドケ", kun: "とど.ける, とど.く",
    meaning: "Deliver, reach, notify, report", strokes: 8,
    radical: "尸", radicalName: "しかばね (Body/Corpse)",
    level: "N2",
    compounds: [
      { word: "届ける", reading: "とどける", meaning: "To deliver, to submit" },
      { word: "届く", reading: "とどく", meaning: "To reach, to arrive" },
      { word: "届出", reading: "とどけで", meaning: "Notification, report" }
    ],
    hint: "A body reaching out from its shelter to deliver something."
  },
  {
    id: "k033", kanji: "捜", on: "ソウ", kun: "さが.す",
    meaning: "Search, look for, locate", strokes: 10,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "捜査", reading: "そうさ", meaning: "Investigation, search" },
      { word: "捜索", reading: "そうさく", meaning: "Search, hunt for" },
      { word: "家宅捜索", reading: "かたくそうさく", meaning: "House search" }
    ],
    hint: "A hand reaching between tight spaces searching for something."
  },
  {
    id: "k034", kanji: "環", on: "カン", kun: "わ, たまき",
    meaning: "Ring, circle, link, wheel, environment", strokes: 17,
    radical: "王", radicalName: "たまへん (Jewel)",
    level: "N2",
    compounds: [
      { word: "環境", reading: "かんきょう", meaning: "Environment, surroundings" },
      { word: "循環", reading: "じゅんかん", meaning: "Circulation, cycle" },
      { word: "一環", reading: "いっかん", meaning: "Part of, link in a chain" }
    ],
    hint: "A jewel forming a ring — an unbroken circle or environment."
  },
  {
    id: "k035", kanji: "境", on: "キョウ, ケイ", kun: "さかい",
    meaning: "Boundary, border, region", strokes: 14,
    radical: "土", radicalName: "つち (Earth)",
    level: "N2",
    compounds: [
      { word: "環境", reading: "かんきょう", meaning: "Environment" },
      { word: "国境", reading: "こっきょう", meaning: "National border" },
      { word: "境界", reading: "きょうかい", meaning: "Boundary, border" }
    ],
    hint: "Earth marked by an official standing at the border."
  },
  {
    id: "k036", kanji: "汚", on: "オ", kun: "よご.す, けが.す, きたな.い",
    meaning: "Dirty, pollute, contaminate", strokes: 6,
    radical: "氵", radicalName: "さんずい (Water)",
    level: "N2",
    compounds: [
      { word: "汚染", reading: "おせん", meaning: "Pollution, contamination" },
      { word: "汚い", reading: "きたない", meaning: "Dirty, filthy" },
      { word: "汚れ", reading: "よごれ", meaning: "Dirt, stain" }
    ],
    hint: "Water contaminated and dirty."
  },
  {
    id: "k037", kanji: "染", on: "セン", kun: "そ.める, し.みる",
    meaning: "Dye, color, paint, stain, infect", strokes: 9,
    radical: "木", radicalName: "き (Tree)",
    level: "N2",
    compounds: [
      { word: "感染", reading: "かんせん", meaning: "Infection, contagion" },
      { word: "染める", reading: "そめる", meaning: "To dye, to color" },
      { word: "汚染", reading: "おせん", meaning: "Pollution" }
    ],
    hint: "Water and tree combined to dye cloth with natural colors."
  },
  {
    id: "k038", kanji: "腰", on: "ヨウ", kun: "こし",
    meaning: "Waist, hips, loins", strokes: 13,
    radical: "月", radicalName: "にくづき (Flesh/Body)",
    level: "N2",
    compounds: [
      { word: "腰痛", reading: "ようつう", meaning: "Back pain, lumbago" },
      { word: "腰掛ける", reading: "こしかける", meaning: "To sit down" },
      { word: "弱腰", reading: "よわごし", meaning: "Weak-kneed, timid" }
    ],
    hint: "The body part that is crucial — the waist supporting everything."
  },
  {
    id: "k039", kanji: "肩", on: "ケン", kun: "かた",
    meaning: "Shoulder", strokes: 8,
    radical: "月", radicalName: "にくづき (Flesh/Body)",
    level: "N2",
    compounds: [
      { word: "肩書き", reading: "かたがき", meaning: "Title, official position" },
      { word: "肩こり", reading: "かたこり", meaning: "Stiff shoulders" },
      { word: "肩車", reading: "かたぐるま", meaning: "Piggyback, shoulder ride" }
    ],
    hint: "The door of the body — shoulders open to carry loads."
  },
  {
    id: "k040", kanji: "胸", on: "キョウ", kun: "むね, むな",
    meaning: "Chest, breast, heart, feelings", strokes: 10,
    radical: "月", radicalName: "にくづき (Flesh/Body)",
    level: "N2",
    compounds: [
      { word: "胸騒ぎ", reading: "むなさわぎ", meaning: "Uneasiness, anxiety" },
      { word: "度胸", reading: "どきょう", meaning: "Courage, nerve" },
      { word: "胸囲", reading: "きょうい", meaning: "Chest measurement" }
    ],
    hint: "The body area that holds the heart and feelings."
  },
  {
    id: "k041", kanji: "腹", on: "フク", kun: "はら",
    meaning: "Abdomen, belly, stomach", strokes: 13,
    radical: "月", radicalName: "にくづき (Flesh/Body)",
    level: "N2",
    compounds: [
      { word: "腹痛", reading: "ふくつう", meaning: "Stomachache" },
      { word: "空腹", reading: "くうふく", meaning: "Hunger, empty stomach" },
      { word: "腹立つ", reading: "はらだつ", meaning: "To get angry" }
    ],
    hint: "The body part that doubles and repeats its hunger."
  },
  {
    id: "k042", kanji: "株", on: "カブ", kun: "かぶ",
    meaning: "Stock, shares, stump, counter for small plants", strokes: 10,
    radical: "木", radicalName: "き (Tree)",
    level: "N2",
    compounds: [
      { word: "株式", reading: "かぶしき", meaning: "Stock, shares" },
      { word: "株主", reading: "かぶぬし", meaning: "Stockholder" },
      { word: "株価", reading: "かぶか", meaning: "Stock price" }
    ],
    hint: "A tree stump remaining — the root stock of ownership."
  },
  {
    id: "k043", kanji: "税", on: "ゼイ", kun: "-",
    meaning: "Tax, duty", strokes: 12,
    radical: "禾", radicalName: "のぎへん (Grain)",
    level: "N2",
    compounds: [
      { word: "税金", reading: "ぜいきん", meaning: "Tax, taxation" },
      { word: "消費税", reading: "しょうひぜい", meaning: "Consumption tax" },
      { word: "免税", reading: "めんぜい", meaning: "Tax exemption" }
    ],
    hint: "Taking a portion of grain harvest — taxation."
  },
  {
    id: "k044", kanji: "預", on: "ヨ", kun: "あず.ける, あず.かる",
    meaning: "Deposit, entrust, leave in care", strokes: 13,
    radical: "頁", radicalName: "おおがい (Head)",
    level: "N2",
    compounds: [
      { word: "預金", reading: "よきん", meaning: "Deposit, bank savings" },
      { word: "預ける", reading: "あずける", meaning: "To deposit, to entrust" },
      { word: "預かる", reading: "あずかる", meaning: "To take charge of" }
    ],
    hint: "Preparing your head (deciding) to entrust something beforehand."
  },
  {
    id: "k045", kanji: "融", on: "ユウ", kun: "と.ける",
    meaning: "Dissolve, melt, finance", strokes: 16,
    radical: "鬲", radicalName: "かなえ (Tripod/Cauldron)",
    level: "N2",
    compounds: [
      { word: "金融", reading: "きんゆう", meaning: "Finance, banking" },
      { word: "融資", reading: "ゆうし", meaning: "Financing, loan" },
      { word: "融通", reading: "ゆうずう", meaning: "Flexibility, accommodation" }
    ],
    hint: "A cauldron melting materials — financial matters flowing."
  },
  {
    id: "k046", kanji: "規", on: "キ", kun: "-",
    meaning: "Standard, measure, regulation", strokes: 11,
    radical: "見", radicalName: "みる (See)",
    level: "N2",
    compounds: [
      { word: "規則", reading: "きそく", meaning: "Rules, regulations" },
      { word: "規模", reading: "きぼ", meaning: "Scale, scope" },
      { word: "正規", reading: "せいき", meaning: "Regular, formal" }
    ],
    hint: "Seeing and measuring with a ruler to set standards."
  },
  {
    id: "k047", kanji: "則", on: "ソク", kun: "のっと.る",
    meaning: "Rule, law, follow, be based on", strokes: 9,
    radical: "刂", radicalName: "りっとう (Knife)",
    level: "N2",
    compounds: [
      { word: "規則", reading: "きそく", meaning: "Rules, regulations" },
      { word: "法則", reading: "ほうそく", meaning: "Law, principle" },
      { word: "原則", reading: "げんそく", meaning: "Fundamental principle" }
    ],
    hint: "A shell and a blade — following carved rules."
  },
  {
    id: "k048", kanji: "測", on: "ソク", kun: "はか.る",
    meaning: "Measure, fathom, survey, conjecture", strokes: 12,
    radical: "氵", radicalName: "さんずい (Water)",
    level: "N2",
    compounds: [
      { word: "観測", reading: "かんそく", meaning: "Observation, measurement" },
      { word: "予測", reading: "よそく", meaning: "Prediction, forecast" },
      { word: "測定", reading: "そくてい", meaning: "Measurement" }
    ],
    hint: "Water measured according to rules for surveying."
  },
  {
    id: "k049", kanji: "制", on: "セイ", kun: "-",
    meaning: "System, law, rule, control, govern", strokes: 8,
    radical: "刂", radicalName: "りっとう (Knife)",
    level: "N2",
    compounds: [
      { word: "制度", reading: "せいど", meaning: "System, institution" },
      { word: "制限", reading: "せいげん", meaning: "Restriction, limitation" },
      { word: "強制", reading: "きょうせい", meaning: "Compulsion, coercion" }
    ],
    hint: "Cutting with a knife to control and create systems."
  },
  {
    id: "k050", kanji: "評", on: "ヒョウ", kun: "-",
    meaning: "Evaluate, criticize, comment", strokes: 12,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "評価", reading: "ひょうか", meaning: "Evaluation, assessment" },
      { word: "批評", reading: "ひひょう", meaning: "Criticism, review" },
      { word: "好評", reading: "こうひょう", meaning: "Favorable reception" }
    ],
    hint: "Words spoken evenly and equally — fair evaluation."
  },
  {
    id: "k051", kanji: "価", on: "カ", kun: "あたい",
    meaning: "Value, price, worth", strokes: 8,
    radical: "亻", radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "価格", reading: "かかく", meaning: "Price, cost" },
      { word: "価値", reading: "かち", meaning: "Value, worth" },
      { word: "物価", reading: "ぶっか", meaning: "Commodity prices" }
    ],
    hint: "A person standing alongside goods determining their value."
  },
  {
    id: "k052", kanji: "演", on: "エン", kun: "-",
    meaning: "Perform, play, act, render", strokes: 14,
    radical: "氵", radicalName: "さんずい (Water)",
    level: "N2",
    compounds: [
      { word: "演説", reading: "えんぜつ", meaning: "Speech, address" },
      { word: "演技", reading: "えんぎ", meaning: "Acting, performance" },
      { word: "出演", reading: "しゅつえん", meaning: "Appearance on stage/TV" }
    ],
    hint: "Water flowing like a performance on stage."
  },
  {
    id: "k053", kanji: "劇", on: "ゲキ", kun: "-",
    meaning: "Drama, play, theater", strokes: 15,
    radical: "刂", radicalName: "りっとう (Knife)",
    level: "N2",
    compounds: [
      { word: "演劇", reading: "えんげき", meaning: "Theatrical performance" },
      { word: "劇場", reading: "げきじょう", meaning: "Theater" },
      { word: "悲劇", reading: "ひげき", meaning: "Tragedy" }
    ],
    hint: "Sharp drama cut with a blade — intense theater."
  },
  {
    id: "k054", kanji: "舞", on: "ブ", kun: "ま.う, まい",
    meaning: "Dance, flit, circle, wheel", strokes: 15,
    radical: "舛", radicalName: "まいあし (Legs apart)",
    level: "N2",
    compounds: [
      { word: "舞台", reading: "ぶたい", meaning: "Stage, theater" },
      { word: "歌舞伎", reading: "かぶき", meaning: "Kabuki theater" },
      { word: "見舞い", reading: "みまい", meaning: "Sympathy visit" }
    ],
    hint: "Legs apart, whirling in a graceful dance."
  },
  {
    id: "k055", kanji: "修", on: "シュウ, シュ", kun: "おさ.める, おさ.まる",
    meaning: "Discipline, conduct, master, study", strokes: 10,
    radical: "亻", radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "修理", reading: "しゅうり", meaning: "Repair, mending" },
      { word: "研修", reading: "けんしゅう", meaning: "Training" },
      { word: "修了", reading: "しゅうりょう", meaning: "Completion (of a course)" }
    ],
    hint: "A person refining and polishing their skills."
  },
  {
    id: "k056", kanji: "典", on: "テン", kun: "-",
    meaning: "Code, ceremony, law, rule, classic", strokes: 8,
    radical: "八", radicalName: "はち (Eight)",
    level: "N2",
    compounds: [
      { word: "辞典", reading: "じてん", meaning: "Dictionary" },
      { word: "古典", reading: "こてん", meaning: "Classic, classical work" },
      { word: "典型的", reading: "てんけいてき", meaning: "Typical, archetypal" }
    ],
    hint: "Books placed on a ceremonial stand as classic references."
  },
  {
    id: "k057", kanji: "伝", on: "デン", kun: "つた.える, つた.わる",
    meaning: "Transmit, go along, walk along, follow", strokes: 6,
    radical: "亻", radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "伝統", reading: "でんとう", meaning: "Tradition" },
      { word: "伝える", reading: "つたえる", meaning: "To convey, to report" },
      { word: "宣伝", reading: "せんでん", meaning: "Propaganda, advertising" }
    ],
    hint: "A person passing knowledge along to others."
  },
  {
    id: "k058", kanji: "築", on: "チク", kun: "きず.く",
    meaning: "Fabricate, build, construct", strokes: 16,
    radical: "竹", radicalName: "たけ (Bamboo)",
    level: "N2",
    compounds: [
      { word: "建築", reading: "けんちく", meaning: "Architecture, construction" },
      { word: "築く", reading: "きずく", meaning: "To build, to construct" },
      { word: "新築", reading: "しんちく", meaning: "Newly built" }
    ],
    hint: "Bamboo framework erected to build a structure."
  },
  {
    id: "k059", kanji: "導", on: "ドウ", kun: "みちび.く",
    meaning: "Guide, lead, conduct, usher", strokes: 15,
    radical: "寸", radicalName: "すん (Inch/Measure)",
    level: "N2",
    compounds: [
      { word: "指導", reading: "しどう", meaning: "Guidance, leadership" },
      { word: "導入", reading: "どうにゅう", meaning: "Introduction, installation" },
      { word: "誘導", reading: "ゆうどう", meaning: "Guidance, leading" }
    ],
    hint: "Measuring out the road inch by inch to guide others."
  },
  {
    id: "k060", kanji: "否", on: "ヒ", kun: "いな, いや",
    meaning: "Negate, no, noes, refuse, decline", strokes: 7,
    radical: "口", radicalName: "くち (Mouth)",
    level: "N2",
    compounds: [
      { word: "否定", reading: "ひてい", meaning: "Denial, negation" },
      { word: "拒否", reading: "きょひ", meaning: "Refusal, rejection" },
      { word: "賛否", reading: "さんぴ", meaning: "Pros and cons" }
    ],
    hint: "A mouth with a bar above — blocking and denying."
  },
  {
    id: "k061", kanji: "占", on: "セン", kun: "し.める, うらな.う",
    meaning: "Occupy, take possession, divine, fortune-tell", strokes: 5,
    radical: "卜", radicalName: "ぼく (Divination)",
    level: "N2",
    compounds: [
      { word: "占める", reading: "しめる", meaning: "To occupy, to hold" },
      { word: "占い", reading: "うらない", meaning: "Fortune-telling" },
      { word: "独占", reading: "どくせん", meaning: "Monopoly, exclusive" }
    ],
    hint: "A divination stick over a mouth — fortune-telling and possession."
  },
  {
    id: "k062", kanji: "展", on: "テン", kun: "-",
    meaning: "Unfold, expand, exhibit, display", strokes: 10,
    radical: "尸", radicalName: "しかばね (Body)",
    level: "N2",
    compounds: [
      { word: "展開", reading: "てんかい", meaning: "Development, expansion" },
      { word: "展示", reading: "てんじ", meaning: "Exhibition, display" },
      { word: "発展", reading: "はってん", meaning: "Development, growth" }
    ],
    hint: "A body unfolding and spreading out its garments for display."
  },
  {
    id: "k063", kanji: "革", on: "カク", kun: "かわ",
    meaning: "Leather, reform, become serious", strokes: 9,
    radical: "革", radicalName: "かわ (Leather)",
    level: "N2",
    compounds: [
      { word: "革命", reading: "かくめい", meaning: "Revolution" },
      { word: "改革", reading: "かいかく", meaning: "Reform, revolution" },
      { word: "皮革", reading: "ひかく", meaning: "Leather, hides" }
    ],
    hint: "An animal hide stretched and treated — reformed leather."
  },
  {
    id: "k064", kanji: "衝", on: "ショウ", kun: "つ.く",
    meaning: "Collide, conflict, crash, ram, thrust", strokes: 15,
    radical: "行", radicalName: "ぎょうがまえ (Go)",
    level: "N2",
    compounds: [
      { word: "衝突", reading: "しょうとつ", meaning: "Collision, conflict" },
      { word: "衝撃", reading: "しょうげき", meaning: "Impact, shock" },
      { word: "緩衝", reading: "かんしょう", meaning: "Buffer" }
    ],
    hint: "Heavy weight going forward to crash into something."
  },
  {
    id: "k065", kanji: "訴", on: "ソ", kun: "うった.える",
    meaning: "Accuse, sue, appeal, complain", strokes: 12,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "訴える", reading: "うったえる", meaning: "To sue, to appeal" },
      { word: "訴訟", reading: "そしょう", meaning: "Lawsuit, litigation" },
      { word: "告訴", reading: "こくそ", meaning: "Accusation, prosecution" }
    ],
    hint: "Words spoken to accuse — making a legal appeal."
  },
  {
    id: "k066", kanji: "操", on: "ソウ", kun: "みさお, あやつ.る",
    meaning: "Maneuver, manipulate, operate, chastity", strokes: 16,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "操作", reading: "そうさ", meaning: "Operation, manipulation" },
      { word: "操る", reading: "あやつる", meaning: "To manipulate, operate" },
      { word: "体操", reading: "たいそう", meaning: "Gymnastics, exercise" }
    ],
    hint: "Hands manipulating many threads to operate a puppet."
  },
  {
    id: "k067", kanji: "燃", on: "ネン", kun: "も.える, も.やす",
    meaning: "Burn, blaze, glow", strokes: 16,
    radical: "火", radicalName: "ひ (Fire)",
    level: "N2",
    compounds: [
      { word: "燃料", reading: "ねんりょう", meaning: "Fuel" },
      { word: "燃える", reading: "もえる", meaning: "To burn, blaze" },
      { word: "燃焼", reading: "ねんしょう", meaning: "Combustion, burning" }
    ],
    hint: "Fire naturally catching flame and burning."
  },
  {
    id: "k068", kanji: "壊", on: "カイ", kun: "こわ.す, こわ.れる",
    meaning: "Demolish, break, destroy", strokes: 16,
    radical: "土", radicalName: "つち (Earth)",
    level: "N2",
    compounds: [
      { word: "破壊", reading: "はかい", meaning: "Destruction, demolition" },
      { word: "壊す", reading: "こわす", meaning: "To break, to destroy" },
      { word: "壊れる", reading: "こわれる", meaning: "To be broken, to collapse" }
    ],
    hint: "Earth structures demolished and turned to dust."
  },
  {
    id: "k069", kanji: "訓", on: "クン", kun: "おし.える",
    meaning: "Instruction, Japanese reading of kanji, explain", strokes: 10,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "訓練", reading: "くんれん", meaning: "Training, drill" },
      { word: "教訓", reading: "きょうくん", meaning: "Lesson, moral" },
      { word: "訓読み", reading: "くんよみ", meaning: "Japanese reading of kanji" }
    ],
    hint: "Words used to instruct along a flowing river of knowledge."
  },
  {
    id: "k070", kanji: "豊", on: "ホウ", kun: "ゆた.か",
    meaning: "Bountiful, plentiful, rich, abundant", strokes: 13,
    radical: "豆", radicalName: "まめ (Bean)",
    level: "N2",
    compounds: [
      { word: "豊か", reading: "ゆたか", meaning: "Abundant, wealthy" },
      { word: "豊富", reading: "ほうふ", meaning: "Plentiful, abundant" },
      { word: "豊作", reading: "ほうさく", meaning: "Bumper crop" }
    ],
    hint: "Overflowing beans from a bountiful harvest."
  },
  {
    id: "k071", kanji: "純", on: "ジュン", kun: "-",
    meaning: "Pure, genuine, unmixed", strokes: 10,
    radical: "糸", radicalName: "いと (Thread)",
    level: "N2",
    compounds: [
      { word: "純粋", reading: "じゅんすい", meaning: "Pure, genuine" },
      { word: "単純", reading: "たんじゅん", meaning: "Simple, plain" },
      { word: "純白", reading: "じゅんぱく", meaning: "Pure white" }
    ],
    hint: "Thread from a single shield — pure and unmixed."
  },
  {
    id: "k072", kanji: "鋼", on: "コウ", kun: "はがね",
    meaning: "Steel", strokes: 16,
    radical: "金", radicalName: "かね (Metal/Gold)",
    level: "N2",
    compounds: [
      { word: "鉄鋼", reading: "てっこう", meaning: "Iron and steel" },
      { word: "鋼鉄", reading: "こうてつ", meaning: "Steel" },
      { word: "鋼材", reading: "こうざい", meaning: "Steel material" }
    ],
    hint: "Metal refined in a ridge-shaped mold to forge steel."
  },
  {
    id: "k073", kanji: "維", on: "イ", kun: "-",
    meaning: "Fiber, maintain, preserve", strokes: 14,
    radical: "糸", radicalName: "いと (Thread)",
    level: "N2",
    compounds: [
      { word: "維持", reading: "いじ", meaning: "Maintenance, preservation" },
      { word: "繊維", reading: "せんい", meaning: "Fiber, textile" },
      { word: "維新", reading: "いしん", meaning: "Restoration, reformation" }
    ],
    hint: "Threads that maintain and hold together like fibers."
  },
  {
    id: "k074", kanji: "貯", on: "チョ", kun: "た.める",
    meaning: "Savings, store, lay in", strokes: 12,
    radical: "貝", radicalName: "かい (Shell/Money)",
    level: "N2",
    compounds: [
      { word: "貯金", reading: "ちょきん", meaning: "Savings, deposit" },
      { word: "貯蓄", reading: "ちょちく", meaning: "Saving up money" },
      { word: "貯める", reading: "ためる", meaning: "To save, to accumulate" }
    ],
    hint: "Money stored safely — building up savings."
  },
  {
    id: "k075", kanji: "輸", on: "ユ", kun: "-",
    meaning: "Transport, send, convey", strokes: 16,
    radical: "車", radicalName: "くるま (Vehicle)",
    level: "N2",
    compounds: [
      { word: "輸出", reading: "ゆしゅつ", meaning: "Export" },
      { word: "輸入", reading: "ゆにゅう", meaning: "Import" },
      { word: "輸送", reading: "ゆそう", meaning: "Transport, shipping" }
    ],
    hint: "Vehicles carrying goods for transport."
  },
  {
    id: "k076", kanji: "憶", on: "オク", kun: "-",
    meaning: "Remember, recollect, think", strokes: 16,
    radical: "忄", radicalName: "りっしんべん (Heart/Mind)",
    level: "N2",
    compounds: [
      { word: "記憶", reading: "きおく", meaning: "Memory, recollection" },
      { word: "追憶", reading: "ついおく", meaning: "Reminiscence" },
      { word: "憶える", reading: "おぼえる", meaning: "To remember" }
    ],
    hint: "The heart of one's thoughts — memories stored in the mind."
  },
  {
    id: "k077", kanji: "拡", on: "カク", kun: "ひろ.がる, ひろ.げる",
    meaning: "Broaden, extend, expand, enlarge", strokes: 8,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "拡大", reading: "かくだい", meaning: "Enlargement, expansion" },
      { word: "拡張", reading: "かくちょう", meaning: "Extension, expansion" },
      { word: "拡散", reading: "かくさん", meaning: "Spreading, diffusion" }
    ],
    hint: "Hands spreading wide to expand and broaden."
  },
  {
    id: "k078", kanji: "縮", on: "シュク", kun: "ちぢ.む, ちぢ.める",
    meaning: "Shrink, contract, reduce", strokes: 17,
    radical: "糸", radicalName: "いと (Thread)",
    level: "N2",
    compounds: [
      { word: "短縮", reading: "たんしゅく", meaning: "Shortening, abbreviation" },
      { word: "縮小", reading: "しゅくしょう", meaning: "Reduction, shrinking" },
      { word: "圧縮", reading: "あっしゅく", meaning: "Compression" }
    ],
    hint: "Thread pulled tight and compressed — shrinking fabric."
  },
  {
    id: "k079", kanji: "態", on: "タイ", kun: "わざ.と",
    meaning: "Attitude, condition, figure, appearance", strokes: 14,
    radical: "心", radicalName: "こころ (Heart)",
    level: "N2",
    compounds: [
      { word: "態度", reading: "たいど", meaning: "Attitude, manner" },
      { word: "状態", reading: "じょうたい", meaning: "Condition, state" },
      { word: "事態", reading: "じたい", meaning: "Situation, state of affairs" }
    ],
    hint: "A heart that can take on different forms — attitude and condition."
  },
  {
    id: "k080", kanji: "勢", on: "セイ", kun: "いきお.い",
    meaning: "Forces, energy, military strength, vigor", strokes: 13,
    radical: "力", radicalName: "ちから (Power)",
    level: "N2",
    compounds: [
      { word: "勢力", reading: "せいりょく", meaning: "Influence, power, might" },
      { word: "姿勢", reading: "しせい", meaning: "Posture, attitude" },
      { word: "大勢", reading: "おおぜい", meaning: "Many people, crowd" }
    ],
    hint: "Powerful force generated from the earth with great vigor."
  },
  {
    id: "k081", kanji: "徴", on: "チョウ", kun: "しるし",
    meaning: "Indication, sign, symptom, collect (taxes)", strokes: 14,
    radical: "彳", radicalName: "ぎょうにんべん (Step)",
    level: "N2",
    compounds: [
      { word: "特徴", reading: "とくちょう", meaning: "Feature, characteristic" },
      { word: "象徴", reading: "しょうちょう", meaning: "Symbol" },
      { word: "徴収", reading: "ちょうしゅう", meaning: "Collection (of taxes)" }
    ],
    hint: "Stepping forward to observe the signs and characteristics."
  },
  {
    id: "k082", kanji: "志", on: "シ", kun: "こころざ.す, こころざし",
    meaning: "Intention, plan, resolve, aspire, motive", strokes: 7,
    radical: "心", radicalName: "こころ (Heart)",
    level: "N2",
    compounds: [
      { word: "志望", reading: "しぼう", meaning: "Aspiration, wish" },
      { word: "志す", reading: "こころざす", meaning: "To aspire to, aim for" },
      { word: "意志", reading: "いし", meaning: "Will, volition" }
    ],
    hint: "A samurai's heart directed toward a goal — aspiration."
  },
  {
    id: "k083", kanji: "患", on: "カン", kun: "わずら.う",
    meaning: "Afflicted, suffer from disease, ill", strokes: 11,
    radical: "心", radicalName: "こころ (Heart)",
    level: "N2",
    compounds: [
      { word: "患者", reading: "かんじゃ", meaning: "Patient, sick person" },
      { word: "患う", reading: "わずらう", meaning: "To suffer from illness" },
      { word: "疾患", reading: "しっかん", meaning: "Disease, ailment" }
    ],
    hint: "A heart weighed down by piercing concerns — illness."
  },
  {
    id: "k084", kanji: "症", on: "ショウ", kun: "-",
    meaning: "Symptoms, illness, disease", strokes: 10,
    radical: "疒", radicalName: "やまいだれ (Sickness)",
    level: "N2",
    compounds: [
      { word: "症状", reading: "しょうじょう", meaning: "Symptom, condition" },
      { word: "炎症", reading: "えんしょう", meaning: "Inflammation" },
      { word: "後遺症", reading: "こういしょう", meaning: "Aftereffect, sequel" }
    ],
    hint: "Under the roof of sickness — the correct symptoms are identified."
  },
  {
    id: "k085", kanji: "療", on: "リョウ", kun: "-",
    meaning: "Heal, cure, therapy", strokes: 17,
    radical: "疒", radicalName: "やまいだれ (Sickness)",
    level: "N2",
    compounds: [
      { word: "治療", reading: "ちりょう", meaning: "Medical treatment, cure" },
      { word: "療法", reading: "りょうほう", meaning: "Therapy, remedy" },
      { word: "診療", reading: "しんりょう", meaning: "Medical care, treatment" }
    ],
    hint: "Under the sickness radical, a remedy brings healing."
  },
  {
    id: "k086", kanji: "診", on: "シン", kun: "み.る",
    meaning: "Checkup, examine, diagnose", strokes: 12,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "診察", reading: "しんさつ", meaning: "Medical examination" },
      { word: "診断", reading: "しんだん", meaning: "Diagnosis" },
      { word: "検診", reading: "けんしん", meaning: "Medical checkup" }
    ],
    hint: "Words of inquiry to examine and diagnose a patient."
  },
  {
    id: "k087", kanji: "薬", on: "ヤク", kun: "くすり",
    meaning: "Medicine, chemical, drug", strokes: 16,
    radical: "艹", radicalName: "くさかんむり (Grass)",
    level: "N2",
    compounds: [
      { word: "薬局", reading: "やっきょく", meaning: "Pharmacy" },
      { word: "薬品", reading: "やくひん", meaning: "Medicine, chemicals" },
      { word: "飲み薬", reading: "のみぐすり", meaning: "Oral medicine" }
    ],
    hint: "Plants that bring pleasure — medicinal herbs."
  },
  {
    id: "k088", kanji: "菓", on: "カ", kun: "-",
    meaning: "Candy, cakes, sweets, fruit", strokes: 11,
    radical: "艹", radicalName: "くさかんむり (Grass)",
    level: "N2",
    compounds: [
      { word: "お菓子", reading: "おかし", meaning: "Sweets, candy" },
      { word: "菓子", reading: "かし", meaning: "Confection, sweets" },
      { word: "和菓子", reading: "わがし", meaning: "Japanese sweets" }
    ],
    hint: "Fruits growing from plants — transformed into confections."
  },
  {
    id: "k089", kanji: "訪", on: "ホウ", kun: "おとず.れる, たず.ねる",
    meaning: "Visit, call on, look up", strokes: 11,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "訪問", reading: "ほうもん", meaning: "Visit, call" },
      { word: "訪ねる", reading: "たずねる", meaning: "To visit, call on" },
      { word: "訪日", reading: "ほうにち", meaning: "Visit to Japan" }
    ],
    hint: "Speaking words of greeting in all directions as you visit."
  },
  {
    id: "k090", kanji: "互", on: "ゴ", kun: "たが.い",
    meaning: "Mutually, reciprocally, together", strokes: 4,
    radical: "二", radicalName: "に (Two)",
    level: "N2",
    compounds: [
      { word: "お互い", reading: "おたがい", meaning: "Each other, mutual" },
      { word: "交互", reading: "こうご", meaning: "Mutual, alternating" },
      { word: "相互", reading: "そうご", meaning: "Mutual, reciprocal" }
    ],
    hint: "Interlocking hands fitting together reciprocally."
  },
  {
    id: "k091", kanji: "招", on: "ショウ", kun: "まね.く",
    meaning: "Beckon, invite, summon, engage", strokes: 8,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "招待", reading: "しょうたい", meaning: "Invitation" },
      { word: "招く", reading: "まねく", meaning: "To invite, incur" },
      { word: "招集", reading: "しょうしゅう", meaning: "Summon, convene" }
    ],
    hint: "Hand waving to call someone over to invite them."
  },
  {
    id: "k092", kanji: "割", on: "カツ", kun: "わ.る, わ.れる, わり",
    meaning: "Divide, cut, halve, proportion", strokes: 12,
    radical: "刂", radicalName: "りっとう (Knife)",
    level: "N2",
    compounds: [
      { word: "割合", reading: "わりあい", meaning: "Ratio, proportion, comparatively" },
      { word: "割引", reading: "わりびき", meaning: "Discount" },
      { word: "分割", reading: "ぶんかつ", meaning: "Partition, division" }
    ],
    hint: "Harmonizing parts by cutting with a blade into proportions."
  },
  {
    id: "k093", kanji: "抜", on: "バツ", kun: "ぬ.く, ぬ.ける",
    meaning: "Extract, pull out, omit, surpass", strokes: 7,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "抜群", reading: "ばつぐん", meaning: "Outstanding, preeminent" },
      { word: "抜く", reading: "ぬく", meaning: "To pull out, surpass" },
      { word: "追い抜く", reading: "おいぬく", meaning: "To pass, overtake" }
    ],
    hint: "Hand pulling a friend up and out of a tight spot."
  },
  {
    id: "k094", kanji: "勤", on: "キン, ゴン", kun: "つと.める, つと.まる",
    meaning: "Work, serve, diligent, employed", strokes: 12,
    radical: "力", radicalName: "ちから (Power)",
    level: "N2",
    compounds: [
      { word: "勤務", reading: "きんむ", meaning: "Duty, work, service" },
      { word: "通勤", reading: "つうきん", meaning: "Commuting to work" },
      { word: "勤勉", reading: "きんべん", meaning: "Diligence, industriousness" }
    ],
    hint: "Exerting power diligently for one's service."
  },
  {
    id: "k095", kanji: "逆", on: "ギャク", kun: "さか, さか.らう",
    meaning: "Inverted, reverse, opposite, wicked", strokes: 9,
    radical: "辶", radicalName: "しんにょう (Road)",
    level: "N2",
    compounds: [
      { word: "逆転", reading: "ぎゃくてん", meaning: "Reversal, sudden turn" },
      { word: "逆に", reading: "ぎゃくに", meaning: "Conversely, on the contrary" },
      { word: "逆らう", reading: "さからう", meaning: "To go against, disobey" }
    ],
    hint: "Walking against traffic in the opposite direction."
  },
  {
    id: "k096", kanji: "障", on: "ショウ", kun: "さわ.る",
    meaning: "Hinder, hurt, interfere, barrier", strokes: 14,
    radical: "阝", radicalName: "こざとへん (Mound)",
    level: "N2",
    compounds: [
      { word: "障害", reading: "しょうがい", meaning: "Obstacle, disability, barrier" },
      { word: "故障", reading: "こしょう", meaning: "Breakdown, failure" },
      { word: "支障", reading: "ししょう", meaning: "Obstacle, hindrance" }
    ],
    hint: "A mound forming a barrier that blocks the path."
  },
  {
    id: "k097", kanji: "害", on: "ガイ", kun: "-",
    meaning: "Harm, injury, damage, bad influence", strokes: 10,
    radical: "宀", radicalName: "うかんむり (Roof)",
    level: "N2",
    compounds: [
      { word: "被害", reading: "ひがい", meaning: "Damage, injury" },
      { word: "公害", reading: "こうがい", meaning: "Pollution, public nuisance" },
      { word: "利害", reading: "りがい", meaning: "Advantages and disadvantages" }
    ],
    hint: "Words spoken under a roof that inflict damage."
  },
  {
    id: "k098", kanji: "補", on: "ホ", kun: "おぎな.う",
    meaning: "Supplement, supply, compensate, offset", strokes: 12,
    radical: "衤", radicalName: "ころもへん (Clothing)",
    level: "N2",
    compounds: [
      { word: "補助", reading: "ほじょ", meaning: "Assistance, subsidy" },
      { word: "補修", reading: "ほしゅう", meaning: "Repair, mending" },
      { word: "候補", reading: "こうほ", meaning: "Candidate, nominee" }
    ],
    hint: "Patching clothing to supplement and repair worn cloth."
  },
  {
    id: "k099", kanji: "益", on: "エキ, ヤク", kun: "ま.す",
    meaning: "Benefit, gain, profit, advantage", strokes: 10,
    radical: "皿", radicalName: "さら (Plate/Dish)",
    level: "N2",
    compounds: [
      { word: "利益", reading: "りえき", meaning: "Profits, gains, benefit" },
      { word: "有益", reading: "ゆうえき", meaning: "Beneficial, profitable" },
      { word: "収益", reading: "しゅうえき", meaning: "Earnings, revenue" }
    ],
    hint: "Water overflowing a dish — overflowing gain and profit."
  },
  {
    id: "k100", kanji: "批", on: "ヒ", kun: "-",
    meaning: "Criticism, strike", strokes: 7,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "批判", reading: "ひはん", meaning: "Criticism, critique" },
      { word: "批評", reading: "ひひょう", meaning: "Review, critique" },
      { word: "准批", reading: "じゅんぴ", meaning: "Ratification" }
    ],
    hint: "A hand comparing side by side to criticize."
  },
  {
    id: "k101", kanji: "承", on: "ショウ", kun: "うけたまわ.る",
    meaning: "Acquiesce, hear, listen to, receive", strokes: 8,
    radical: "手", radicalName: "て (Hand)",
    level: "N2",
    compounds: [
      { word: "承認", reading: "しょうにん", meaning: "Approval, authorization" },
      { word: "承知", reading: "しょうち", meaning: "Consent, understanding" },
      { word: "承る", reading: "うけたまわる", meaning: "To hear/receive (humble)" }
    ],
    hint: "Hands cupped respectfully to receive instruction."
  },
  {
    id: "k102", kanji: "延", on: "エン", kun: "の.びる, の.ばす",
    meaning: "Prolong, stretch, postpone, extend", strokes: 8,
    radical: "廴", radicalName: "えんにょう (Long stride)",
    level: "N2",
    compounds: [
      { word: "延長", reading: "えんちょう", meaning: "Extension, elongation" },
      { word: "延期", reading: "えんき", meaning: "Postponement, deferral" },
      { word: "遅延", reading: "ちえん", meaning: "Delay, latency" }
    ],
    hint: "Striding forward along a road that extends into the distance."
  },
  {
    id: "k103", kanji: "寄", on: "キ", kun: "よ.る, よ.せる",
    meaning: "Draw near, stop in, donate, contribute", strokes: 11,
    radical: "宀", radicalName: "うかんむり (Roof)",
    level: "N2",
    compounds: [
      { word: "寄付", reading: "きふ", meaning: "Donation, contribution" },
      { word: "立ち寄る", reading: "たちよる", meaning: "To drop by" },
      { word: "寄与", reading: "きよ", meaning: "Contribution, service" }
    ],
    hint: "Stopping under a strange roof to draw near and visit."
  },
  {
    id: "k104", kanji: "帯", on: "タイ", kun: "お.びる, おび",
    meaning: "Sash, belt, zone, region", strokes: 10,
    radical: "巾", radicalName: "はば (Cloth)",
    level: "N2",
    compounds: [
      { word: "携帯", reading: "けいたい", meaning: "Mobile phone, carrying" },
      { word: "地帯", reading: "ちたい", meaning: "Zone, area, belt" },
      { word: "時間帯", reading: "じかんたい", meaning: "Time slot, period" }
    ],
    hint: "A sash of cloth worn around the waist."
  },
  {
    id: "k105", kanji: "救", on: "キュウ", kun: "すく.う",
    meaning: "Salvation, save, rescue, help", strokes: 11,
    radical: "攵", radicalName: "のぶん (Action)",
    level: "N2",
    compounds: [
      { word: "救急", reading: "きゅうきゅう", meaning: "Emergency, first aid" },
      { word: "救助", reading: "きゅうじょ", meaning: "Relief, aid, rescue" },
      { word: "救う", reading: "すくう", meaning: "To save, rescue" }
    ],
    hint: "Action seeking someone in distress to save them."
  },
  {
    id: "k106", kanji: "援", on: "エン", kun: "-",
    meaning: "Aid, help, assist", strokes: 12,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "応援", reading: "おうえん", meaning: "Cheering, support" },
      { word: "援助", reading: "えんじょ", meaning: "Assistance, aid" },
      { word: "支援", reading: "しえん", meaning: "Support, backing" }
    ],
    hint: "A hand reaching out to pull a friend up in assistance."
  },
  {
    id: "k107", kanji: "責", on: "セキ", kun: "せ.める",
    meaning: "Blame, condemn, censure, duty", strokes: 11,
    radical: "貝", radicalName: "かい (Money/Shell)",
    level: "N2",
    compounds: [
      { word: "責任", reading: "せきにん", meaning: "Responsibility, duty" },
      { word: "責める", reading: "せめる", meaning: "To blame, criticize" },
      { word: "引責", reading: "いんせき", meaning: "Taking responsibility" }
    ],
    hint: "Demanding money owed — holding someone responsible."
  },
  {
    id: "k108", kanji: "避", on: "ヒ", kun: "さ.ける, よ.ける",
    meaning: "Evade, avoid, ward off, flee", strokes: 16,
    radical: "辶", radicalName: "しんにょう (Road)",
    level: "N2",
    compounds: [
      { word: "避難", reading: "ひなん", meaning: "Evacuation, taking refuge" },
      { word: "回避", reading: "かいひ", meaning: "Evasion, avoidance" },
      { word: "避ける", reading: "さける", meaning: "To avoid, ward off" }
    ],
    hint: "Walking along a road to dodge and evade danger."
  },
  {
    id: "k109", kanji: "促", on: "ソク", kun: "うなが.す",
    meaning: "Stimulate, urge, press, demand", strokes: 9,
    radical: "亻", radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "促進", reading: "そくしん", meaning: "Promotion, acceleration" },
      { word: "促す", reading: "うながす", meaning: "To urge, stimulate" },
      { word: "催促", reading: "さいそく", meaning: "Demand, pressing" }
    ],
    hint: "A person standing by feet, urging swift action."
  },
  {
    id: "k110", kanji: "抱", on: "ホウ", kun: "だ.く, いだ.く, かか.える",
    meaning: "Embrace, hug, hold in arms", strokes: 8,
    radical: "扌", radicalName: "てへん (Hand)",
    level: "N2",
    compounds: [
      { word: "抱く", reading: "だく", meaning: "To embrace, hold" },
      { word: "抱える", reading: "かかえる", meaning: "To carry, bear problems" },
      { word: "辛抱", reading: "しんぼう", meaning: "Patience, endurance" }
    ],
    hint: "Hand wrapping around something to embrace it."
  },
  {
    id: "k111", kanji: "倒", on: "トウ", kun: "たお.れる, たお.す",
    meaning: "Fall down, collapse, overthrow", strokes: 10,
    radical: "亻", radicalName: "にんべん (Person)",
    level: "N2",
    compounds: [
      { word: "倒産", reading: "とうさん", meaning: "Bankruptcy, insolvency" },
      { word: "倒れる", reading: "たおれる", meaning: "To fall down, collapse" },
      { word: "面倒", reading: "めんどう", meaning: "Trouble, bother, care" }
    ],
    hint: "A person arriving at the brink and falling over."
  },
  {
    id: "k112", kanji: "慣", on: "カン", kun: "な.れる, な.らす",
    meaning: "Accustomed, get used to, habit", strokes: 14,
    radical: "忄", radicalName: "りっしんべん (Heart)",
    level: "N2",
    compounds: [
      { word: "習慣", reading: "しゅうかん", meaning: "Habit, custom" },
      { word: "慣れる", reading: "なれる", meaning: "To get used to" },
      { word: "慣習", reading: "かんしゅう", meaning: "Custom, convention" }
    ],
    hint: "The heart pierced many times until accustomed to it."
  },
  {
    id: "k113", kanji: "厳", on: "ゲン, ゴン", kun: "きび.しい, おごそ.か",
    meaning: "Stern, strict, severe, rigorous", strokes: 17,
    radical: "口", radicalName: "くち (Mouth)",
    level: "N2",
    compounds: [
      { word: "厳しい", reading: "きびしい", meaning: "Strict, severe" },
      { word: "厳重", reading: "げんじゅう", meaning: "Strict, secure, rigorous" },
      { word: "荘厳", reading: "そうごん", meaning: "Solemn, sublime" }
    ],
    hint: "Mouths shouting with cliff-like stern discipline."
  },
  {
    id: "k114", kanji: "敬", on: "ケイ, キョウ", kun: "うやま.う",
    meaning: "Awe, respect, honor, revere", strokes: 12,
    radical: "攵", radicalName: "のぶん (Action)",
    level: "N2",
    compounds: [
      { word: "敬意", reading: "けいい", meaning: "Respect, honor" },
      { word: "敬語", reading: "けいご", meaning: "Honorific language" },
      { word: "尊敬", reading: "そんけい", meaning: "Respect, esteem" }
    ],
    hint: "Action showing deep reverence and respect."
  },
  {
    id: "k115", kanji: "礼", on: "レイ, ライ", kun: "-",
    meaning: "Salute, bow, ceremony, thanks, courtesy", strokes: 5,
    radical: "礻", radicalName: "しめすへん (Altar)",
    level: "N2",
    compounds: [
      { word: "礼儀", reading: "れいぎ", meaning: "Etiquette, courtesy" },
      { word: "お礼", reading: "おれい", meaning: "Thanks, gratitude, reward" },
      { word: "失礼", reading: "しつれい", meaning: "Rude, impolite, excuse me" }
    ],
    hint: "Standing before an altar in respectful bow."
  },
  {
    id: "k116", kanji: "疑", on: "ギ", kun: "うたが.う",
    meaning: "Doubt, distrust, suspect, question", strokes: 14,
    radical: "疋", radicalName: "ひき (Foot)",
    level: "N2",
    compounds: [
      { word: "疑問", reading: "ぎもん", meaning: "Question, problem, doubt" },
      { word: "疑う", reading: "うたがう", meaning: "To doubt, suspect" },
      { word: "容疑者", reading: "ようぎしゃ", meaning: "Suspect (person)" }
    ],
    hint: "Halting one's steps with cane in hand, doubting the path."
  },
  {
    id: "k117", kanji: "惑", on: "ワク", kun: "まど.う",
    meaning: "Beguile, delusion, perplexity", strokes: 12,
    radical: "心", radicalName: "こころ (Heart)",
    level: "N2",
    compounds: [
      { word: "迷惑", reading: "めいわく", meaning: "Trouble, nuisance, annoyance" },
      { word: "当惑", reading: "とうわく", meaning: "Bewilderment, confusion" },
      { word: "惑星", reading: "わくせい", meaning: "Planet (wandering star)" }
    ],
    hint: "A heart lost in borders — bewildered and perplexed."
  },
  {
    id: "k118", kanji: "途", on: "ト", kun: "みち",
    meaning: "Route, way, road, midway", strokes: 10,
    radical: "辶", radicalName: "しんにょう (Road)",
    level: "N2",
    compounds: [
      { word: "途中", reading: "とちゅう", meaning: "On the way, en route" },
      { word: "中途", reading: "ちゅうと", meaning: "Midway, unfinished" },
      { word: "用途", reading: "ようと", meaning: "Use, service, application" }
    ],
    hint: "Walking along a road en route to a destination."
  },
  {
    id: "k119", kanji: "浮", on: "フ", kun: "う.く, う.かぶ",
    meaning: "Floating, float, rise to surface", strokes: 10,
    radical: "氵", radicalName: "さんずい (Water)",
    level: "N2",
    compounds: [
      { word: "浮かぶ", reading: "うかぶ", meaning: "To float, come to mind" },
      { word: "浮力", reading: "ふりょく", meaning: "Buoyancy" },
      { word: "浮上", reading: "ふじょう", meaning: "Surfacing, rising" }
    ],
    hint: "Water holding a fledgling bird up — floating."
  },
  {
    id: "k120", kanji: "詰", on: "キツ", kun: "つ.める, つ.まる",
    meaning: "Packed, close, cram, stuff into", strokes: 13,
    radical: "言", radicalName: "ことば (Words)",
    level: "N2",
    compounds: [
      { word: "缶詰", reading: "かんづめ", meaning: "Canned food" },
      { word: "詰める", reading: "つめる", meaning: "To stuff, pack into" },
      { word: "追い詰める", reading: "おいつめる", meaning: "To corner, drive to the wall" }
    ],
    hint: "Words demanding an auspicious conclusion — packed tightly."
  }
];

if (typeof window !== "undefined") {
  window.kanjiData = KANJI_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KANJI_DATA };
}
