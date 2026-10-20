/**
 * JLPT N2 Master - Listening Practice Data & Audio Controller
 * Authentic JLPT N2 listening questions covering Task Comprehension, Point Comprehension, and Quick Response.
 */

const LISTENING_DATA = [
  {
    id: "l001",
    title: "問題1: 課題理解 - 会議室の予約と資料準備",
    type: "task",
    typeLabel: "Task Comprehension (課題理解)",
    difficulty: "Medium",
    situation: "会社で、上司の男性と部下の女性が午後の企画会議について話しています。女性はこの後、まず何をしなければなりませんか？",
    situationEn: "At an office, a male supervisor and a female employee are discussing the afternoon planning meeting. What must the woman do first?",
    dialogue: [
      { speaker: "男性", text: "佐藤さん、今日の午後2時からの企画会議の件だけど、参加者が急に3名増えることになったんだ。" },
      { speaker: "女性", text: "あ、そうなんですね。それでしたら、現在予約している第3会議室だと少し手狭になりますね。" },
      { speaker: "男性", text: "うん、それでさっき管理部に行ったら、広めの第1会議室が空いてるって言われたんだ。すぐに変更手続きをしてくれるかい？" },
      { speaker: "女性", text: "承知いたしました。すぐにシステムから変更しておきます。" },
      { speaker: "男性", text: "ありがとう。資料の追加印刷やプロジェクターの設置は部屋を確保したあとでいいから、よろしくね。" },
      { speaker: "女性", text: "わかりました！直ちに取り掛かります。" }
    ],
    question: "女の人はこの後、まず何をしますか？",
    questionEn: "What will the woman do first after this conversation?",
    options: [
      "1. 資料を3部追加で印刷する",
      "2. 第1会議室への変更手続きをする",
      "3. 第1会議室にプロジェクターを設置する",
      "4. 参加者に会議の時間変更を連絡する"
    ],
    correctIndex: 1,
    explanation: "上司は「広めの第1会議室が空いてるって言われたんだ。すぐに変更手続きをしてくれるかい？」「資料の追加印刷やプロジェクターの設置は部屋を確保したあとでいい」と指示しており、女性も「すぐにシステムから変更しておきます」と答えています。したがって、最優先で行うべきは「第1会議室への変更手続き」（2番）です。"
  },
  {
    id: "l002",
    title: "問題2: ポイント理解 - 新製品スマートウォッチの改善点",
    type: "point",
    typeLabel: "Point Comprehension (ポイント理解)",
    difficulty: "Hard",
    situation: "電機メーカーの開発チームで、新製品のスマートウォッチのアンケート結果について二人が話しています。購入者が最も改善を求めている点は何ですか？",
    situationEn: "At an electronics maker development team, two people are discussing survey results for a new smartwatch. What aspect are purchasers most seeking improvement on?",
    dialogue: [
      { speaker: "女性", text: "部長、先月発売した新型スマートウォッチのユーザーアンケートの集計が出ました。" },
      { speaker: "男性", text: "お、どうだった？デザインや軽さはかなり好評だったようだけど。" },
      { speaker: "女性", text: "はい、画面の視認性やフィット感についての満足度は90%を超えています。価格についても妥当だという声が多いです。" },
      { speaker: "男性", text: "それは良かった。じゃあ、不満な点や改善要望はどうだい？アプリの連動かな？" },
      { speaker: "女性", text: "アプリの接続に関する指摘も多少ありましたが、ダントツで多かったのはバッテリーの持ち時間です。毎日充電しないといけないのが不便だという声が過半数を占めました。" },
      { speaker: "男性", text: "なるほど、多機能にしたぶん消費電力が上がってしまったか。次期モデルの最優先課題だな。" }
    ],
    question: "利用者が最も改善を求めている点は何ですか？",
    questionEn: "What aspect do users most want improved?",
    options: [
      "1. デザインと本体の軽量化",
      "2. 画面の見やすさとフィット感",
      "3. バッテリーの持続時間",
      "4. スマートフォンとの接続安定性"
    ],
    correctIndex: 2,
    explanation: "女性が「ダントツで多かったのはバッテリーの持ち時間です。毎日充電しないといけないのが不便だという声が過半数を占めました」と明言しています。よって、正解は「バッテリーの持続時間」（3番）です。"
  },
  {
    id: "l003",
    title: "問題3: 概要理解 - 環境にやさしい都市開発の講演",
    type: "summary",
    typeLabel: "Summary Comprehension (概要理解)",
    difficulty: "Hard",
    situation: "講演会で、都市計画の専門家が話しています。専門家は何について話していますか？",
    situationEn: "At a lecture, an urban planning specialist is speaking. What is the specialist talking about?",
    dialogue: [
      { speaker: "講師", text: "近年、世界各地で記録的な猛暑や集中豪雨が頻発しています。これに対し、従来のコンクリートで固めた都市構造では、ヒートアイランド現象や洪水被害を防ぎきれなくなっています。そこで現在注目されているのが『グリーンインフラストラクチャー』、すなわち自然の生態系が持つ機能を活用したインフラ整備です。屋上緑化や雨水を一時的に貯留する親水公園の整備は、景観を美しくするだけでなく、気温の上昇を抑え、防災にも大きな効果をもたらします。持続可能な都市を作るためには、自然を排除するのではなく、自然と共生する都市設計への転換が不可欠なのです。" }
    ],
    question: "専門家の話の主なテーマは何ですか？",
    questionEn: "What is the main theme of the specialist's talk?",
    options: [
      "1. 猛暑や集中豪雨が起きる気象学的な原因",
      "2. 自然の機能を活用した持続可能な都市づくりの重要性",
      "3. コンクリート建築のコスト削減と耐震技術",
      "4. 公園の整備にかかる地方自治体の予算問題"
    ],
    correctIndex: 1,
    explanation: "専門家は「自然の生態系が持つ機能を活用したインフラ整備」を取り上げ、「自然と共生する都市設計への転換が不可欠」と結論づけています。全体の主旨は「自然の機能を活用した持続可能な都市づくりの重要性」（2番）です。"
  },
  {
    id: "l004",
    title: "問題4: 即時応答 - 取引先への訪問挨拶",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Easy",
    situation: "取引先を訪問した際、受付で相手の担当者から声をかけられました。",
    situationEn: "When visiting a client company, the client's representative greets you at reception.",
    dialogue: [
      { speaker: "取引先", text: "本日は足元の悪い中、わざわざお越しいただき恐れ入ります。" }
    ],
    question: "この発言に対する最も適切な返答はどれですか？",
    questionEn: "What is the most appropriate response to this statement?",
    options: [
      "1. いいえ、とんでもございません。こちらこそお時間をいただきありがとうございます。",
      "2. ええ、靴が汚れてしまって大変でした。",
      "3. 雨が降っていますので、早く打ち合わせを始めましょう。",
      "4. どうぞおかまいなく。お茶をいただけますか。"
    ],
    correctIndex: 0,
    explanation: "「足元の悪い中〜恐れ入ります」は雨や雪の日に来社してくれた相手への礼儀正しい挨拶です。これに対するビジネス上の定型返答は「いいえ、とんでもございません。こちらこそお時間をいただきありがとうございます」（1番）が最も適切です。"
  },
  {
    id: "l005",
    title: "問題5: 課題理解 - 図書館でのボランティア活動",
    type: "task",
    typeLabel: "Task Comprehension (課題理解)",
    difficulty: "Medium",
    situation: "図書館の職員とボランティアの学生がイベントの準備について話しています。学生はまず何をしますか？",
    situationEn: "A library staff member and a student volunteer are talking about event preparation. What will the student do first?",
    dialogue: [
      { speaker: "職員", text: "山田くん、明日の子ども向けお話会の準備、手伝ってくれて助かるよ。" },
      { speaker: "学生", text: "いえ、お役に立てて嬉しいです！何から始めればいいですか？" },
      { speaker: "職員", text: "まずは絵本の選定と消毒作業があるんだけど、消毒液が切れていたのを今思い出したんだ。倉庫から新しい消毒液を持ってきてもらえる？" },
      { speaker: "学生", text: "わかりました。地下の倉庫ですね。" },
      { speaker: "職員", text: "そう、よろしくね。それが終わったら、一緒に絵本の並べ替えと椅子の設置をしよう。" },
      { speaker: "学生", text: "了解しました！すぐに行ってきます。" }
    ],
    question: "学生はまず何をしますか？",
    questionEn: "What will the student do first?",
    options: [
      "1. 倉庫から新しい消毒液を持ってくる",
      "2. お話会で使う絵本を選定する",
      "3. 会場に子ども用の椅子を並べる",
      "4. 絵本の消毒作業を始める"
    ],
    correctIndex: 0,
    explanation: "職員が「まずは絵本の選定と消毒作業があるんだけど、消毒液が切れていたのを今思い出したんだ。倉庫から新しい消毒液を持ってきてもらえる？」と依頼し、学生が「了解しました！すぐに行ってきます」と答えています。したがって、まず行うのは「倉庫から新しい消毒液を持ってくる」（1番）です。"
  },
  {
    id: "l006",
    title: "問題6: 課題理解 - ホテルでのチェックインと荷物預かり",
    type: "task",
    typeLabel: "Task Comprehension (課題理解)",
    difficulty: "Medium",
    situation: "ホテルのフロントで、宿泊客の男性とフロント係の女性が話しています。男性はこの後、まず何をしますか？",
    situationEn: "At a hotel front desk, a male guest and a female receptionist are speaking. What will the man do first?",
    dialogue: [
      { speaker: "フロント係", text: "いらっしゃいませ。チェックインでございますね。" },
      { speaker: "客", text: "はい、3時に予約している田中です。まだ1時なのですが、荷物だけ先に預かっていただけますか？" },
      { speaker: "フロント係", text: "かしこまりました。お荷物をお預かりいたします。その前に、こちらの宿泊カードにお名前とご連絡先をご記入いただけますでしょうか。" },
      { speaker: "客", text: "わかりました。ペンをお借りできますか。" },
      { speaker: "フロント係", text: "どうぞ。ご記入いただきましたら荷物の預かり証をお渡しいたします。お部屋へのご案内は15時以降となります。" }
    ],
    question: "男の人はこの後、まず何をしますか？",
    questionEn: "What will the man do first after this?",
    options: [
      "1. 宿泊カードに必要事項を記入する",
      "2. 荷物を自分の部屋まで運ぶ",
      "3. 荷物の預かり証をフロント係に渡す",
      "4. 15時までロビーのソファで待機する"
    ],
    correctIndex: 0,
    explanation: "フロント係が「その前に、こちらの宿泊カードにお名前とご連絡先をご記入いただけますでしょうか」と依頼し、客も同意してペンを受け取っています。したがって、まず行うべき行動は「宿泊カードへの記入」（1番）です。"
  },
  {
    id: "l007",
    title: "問題7: 課題理解 - 卒業論文の提出手続き",
    type: "task",
    typeLabel: "Task Comprehension (課題理解)",
    difficulty: "Hard",
    situation: "大学の研究室で、教授とゼミ生の女性が卒業論文の提出について話しています。学生は今日中に何をしなければなりませんか？",
    situationEn: "In a university laboratory, a professor and a female seminar student discuss graduation thesis submission. What must the student do before today ends?",
    dialogue: [
      { speaker: "教授", text: "加藤さん、卒論の最終稿読ませてもらったよ。データの考察がとても深まったね。" },
      { speaker: "学生", text: "ありがとうございます！先生のご指導のおかげです。" },
      { speaker: "教授", text: "うん。ただね、参考文献の表記方法に少し不統一があるんだ。学部の指定フォーマットに合わせて修正してほしい。" },
      { speaker: "学生", text: "あ、申し訳ありません。製本して事務課に提出するのは金曜日までですが、修正はいつまでに…" },
      { speaker: "教授", text: "私の最終確認印が必要だからね。今日の夕方5時までに修正したPDFをメールで送ってくれれば、夜のうちに目を通して印鑑を用意しておくよ。" },
      { speaker: "学生", text: "承知いたしました！すぐに修正して5時までに送信します。" }
    ],
    question: "学生は今日中に何をしなければなりませんか？",
    questionEn: "What must the student do before the end of today?",
    options: [
      "1. 論文を製本して事務課の窓口へ提出する",
      "2. 参考文献を修正したPDFを教授にメールで送る",
      "3. 教授から印鑑をもらって事務課に連絡する",
      "4. データの考察部分を再度書き直す"
    ],
    correctIndex: 1,
    explanation: "教授は「今日の夕方5時までに修正したPDFをメールで送ってくれれば」と述べており、学生も「すぐに修正して5時までに送信します」と答えています。したがって、今日中にすべきことは「参考文献を修正したPDFのメール送信」（2番）です。"
  },
  {
    id: "l008",
    title: "問題8: ポイント理解 - カフェの出店場所の選定理由",
    type: "point",
    typeLabel: "Point Comprehension (ポイント理解)",
    difficulty: "Medium",
    situation: "カフェの新規オープンについて、経営者の男性と店舗デザイナーの女性が話しています。経営者がこの物件を選んだ最も決定的な理由は何ですか？",
    situationEn: "Regarding opening a new café, a male business owner and a female shop designer are speaking. What was the most decisive reason the owner chose this property?",
    dialogue: [
      { speaker: "女性", text: "オーナー、新しい物件の契約が決まったそうですね。おめでとうございます！" },
      { speaker: "男性", text: "ありがとう。駅から徒歩10分と少し離れているんだけどね。" },
      { speaker: "女性", text: "駅前商店街のほうが人通りは圧倒的に多いですよね。家賃が安かったんですか？" },
      { speaker: "男性", text: "いや、家賃は築浅だから駅前と大差ないんだ。ただ、目の前に大きなケヤキ並木があって、テラス席から四季折々の緑が見渡せるんだよ。落ち着いた空間で本や珈琲を楽しんでもらうというコンセプトに、これ以上ぴったりの環境はないと思ってね。" },
      { speaker: "女性", text: "なるほど！ブランドの世界観を体現するのに最適なロケーションだったわけですね。" }
    ],
    question: "経営者がこの物件を選んだ決定的な理由は何ですか？",
    questionEn: "What was the decisive reason the owner chose this property?",
    options: [
      "1. 駅前よりも家賃が大幅に安かったから",
      "2. 駅から近くて通行人の数が非常に多いから",
      "3. 緑豊かな並木道に面し、店のコンセプトと合致したから",
      "4. 築年数が古く、内装を自由に変更できるから"
    ],
    correctIndex: 2,
    explanation: "男性は「目の前に大きなケヤキ並木があって、テラス席から四季折々の緑が見渡せる」「落ち着いた空間で本や珈琲を楽しんでもらうというコンセプトに、これ以上ぴったりの環境はない」と語っています。したがって正解は「緑豊かな並木道に面し、店のコンセプトと合致したから」（3番）です。"
  },
  {
    id: "l009",
    title: "問題9: ポイント理解 - 掃除機選びの最優先ポイント",
    type: "point",
    typeLabel: "Point Comprehension (ポイント理解)",
    difficulty: "Medium",
    situation: "家電量販店で、夫婦が掃除機を見ながら話しています。夫が最終的にこの機種を推している理由は何ですか？",
    situationEn: "At an electronics retail store, a married couple is discussing vacuum cleaners. What is the reason the husband ultimately recommends this particular model?",
    dialogue: [
      { speaker: "妻", text: "ねえ、このコードレス掃除機、軽くてデザインもスタイリッシュじゃない？" },
      { speaker: "夫", text: "確かに軽いね。でもさ、うちは犬を飼っているだろう？じゅうたんに絡みついた抜け毛がしっかり吸い取れるかどうかが一番肝心だよ。" },
      { speaker: "妻", text: "あ、そうね。こっちのパワーヘッド搭載モデルはどう？少し重いけど。" },
      { speaker: "夫", text: "うん！カタログにも『特殊ブラシがペットの毛を99%絡め取る』って書いてある。バッテリー持続時間も長いし、これならうちのじゅうたん掃除の悩みが解消できそうだ。" },
      { speaker: "妻", text: "そうね、掃除のしやすさを最優先にしましょう。" }
    ],
    question: "夫がこの掃除機を推奨している主な理由は何ですか？",
    questionEn: "What is the main reason the husband recommends this vacuum cleaner?",
    options: [
      "1. 本体が非常に軽くて持ち運びしやすいこと",
      "2. デザインがスタイリッシュで部屋に馴染むこと",
      "3. ペットの抜け毛をじゅうたんから強力に吸引できること",
      "4. 価格が他のモデルと比べて格段にリーズナブルなこと"
    ],
    correctIndex: 2,
    explanation: "夫は「うちは犬を飼っているだろう？じゅうたんに絡みついた抜け毛がしっかり吸い取れるかどうかが一番肝心だよ」「特殊ブラシがペットの毛を99%絡め取る…うちのじゅうたん掃除の悩みが解消できそう」と述べています。正解は3番です。"
  },
  {
    id: "l010",
    title: "問題10: ポイント理解 - 出版社への志望動機",
    type: "point",
    typeLabel: "Point Comprehension (ポイント理解)",
    difficulty: "Hard",
    situation: "就職面接で、面接官と応募者の女性が話しています。応募者が他社ではなくこの出版社を志望した一番の理由は何ですか？",
    situationEn: "In a job interview, an interviewer and a female applicant are speaking. What is the primary reason the applicant applied to this publishing house rather than competitors?",
    dialogue: [
      { speaker: "面接官", text: "大手総合出版社も多数ある中で、なぜ中堅である当社を第一志望とされたのですか？" },
      { speaker: "応募者", text: "はい。御社が長年刊行されている『自然と科学の探検シリーズ』は、子どもだけでなく大人も魅了する深い専門性を持っています。大手出版社では売れ筋の実用書に注力する傾向が強まる中、御社は採算性のみにとらわれず、知的好奇心を育む硬派な児童書を世に送り出し続けていらっしゃいます。その出版哲学に深く共鳴し、私も次代に残る本づくりに携わりたいと考えました。" }
    ],
    question: "応募者がこの出版社を選んだ最も大きな理由は何ですか？",
    questionEn: "What is the biggest reason the applicant chose this publishing house?",
    options: [
      "1. 大手企業よりも福利厚生や給与待遇が優れているから",
      "2. 流行の実用書やマンガの開発チームに参加したいから",
      "3. 採算だけにとらわれず質の高い知識を届ける出版哲学に共感したから",
      "4. 大学時代の恩師から推薦を受けたから"
    ],
    correctIndex: 2,
    explanation: "応募者は「大手出版社では売れ筋の実用書に注力する傾向が強まる中、御社は採算性のみにとらわれず、知的好奇心を育む硬派な児童書を世に送り出し続けていらっしゃいます。その出版哲学に深く共鳴し…」と理由を明確に述べています。正解は3番です。"
  },
  {
    id: "l011",
    title: "問題11: 概要理解 - 伝統工芸と現代デザインの融合",
    type: "summary",
    typeLabel: "Summary Comprehension (概要理解)",
    difficulty: "Hard",
    situation: "ラジオ番組で、伝統工芸プロデューサーが話しています。プロデューサーが最も伝えたいことは何ですか？",
    situationEn: "On a radio show, a traditional crafts producer is speaking. What does the producer most want to convey?",
    dialogue: [
      { speaker: "プロデューサー", text: "日本各地の伝統工芸は、後継者不足や生活様式の変化により衰退の危機に瀕しています。しかし、古き良き技法をそのまま保存するだけでは、現代の暮らしに定着しません。今求められているのは、現代のライフスタイルに合わせた再解釈です。例えば、伝統的な漆器の技法をスマートフォンのケースや洋食器に生かす試みが、国内外で高い評価を得ています。伝統を守るとは、過去の形を固定することではなく、職人の精神や美意識を現代の日常に呼吸させ続けることなのです。" }
    ],
    question: "プロデューサーの主張の要点は何ですか？",
    questionEn: "What is the main point of the producer's assertion?",
    options: [
      "1. 伝統工芸を守るため、政府による多額の補助金が必要である",
      "2. 伝統の技法や精神を、現代の生活に調和する形に再解釈して生かすべきだ",
      "3. スマートフォンのケースは海外製品よりも漆器製が優れている",
      "4. 若い職人を育成するために職人学校の設立を急ぐべきである"
    ],
    correctIndex: 1,
    explanation: "プロデューサーは「古き良き技法をそのまま保存するだけでは、現代の暮らしに定着しません」「現代のライフスタイルに合わせた再解釈」「職人の精神や美意識を現代の日常に呼吸させ続けること」と強調しています。要点は2番です。"
  },
  {
    id: "l012",
    title: "問題12: 概要理解 - 睡眠とブルーライトの関係",
    type: "summary",
    typeLabel: "Summary Comprehension (概要理解)",
    difficulty: "Medium",
    situation: "健康情報番組で、睡眠医学の医師が話しています。医師は何について話していますか？",
    situationEn: "On a health information program, a sleep medicine doctor is speaking. What is the doctor talking about?",
    dialogue: [
      { speaker: "医師", text: "夜遅くまでスマートフォンやパソコンの画面を見ていると、目が冴えて寝付きが悪くなった経験はありませんか？画面から発せられるブルーライトは、脳の松果体に作用し、睡眠を促すホルモンであるメラトニンの分泌を抑制してしまいます。その結果、体内時計が狂い、深い睡眠が得られなくなって翌朝の集中力低下や倦怠感を引き起こします。就寝の少なくとも1時間前にはデジタル機器を手放し、暖色系の照明でリラックスして過ごすことが質の高い睡眠の秘訣です。" }
    ],
    question: "医師の話の主旨は何ですか？",
    questionEn: "What is the main theme of the doctor's talk?",
    options: [
      "1. スマートフォンの画面の明るさを自動調整する設定方法",
      "2. ブルーライトが睡眠ホルモンを妨げる仕組みと良質な睡眠のための対策",
      "3. 睡眠薬の副作用と正しい服用タイミング",
      "4. 朝起きたときに日光を浴びることの重要性"
    ],
    correctIndex: 1,
    explanation: "医師はブルーライトがメラトニンの分泌を抑制するメカニズムを解説し、就寝前の対策（1時間前には機器を手放すなど）をアドバイスしています。主旨は「ブルーライトが睡眠ホルモンを妨げる仕組みと良質な睡眠のための対策」（2番）です。"
  },
  {
    id: "l013",
    title: "問題13: 概要理解 - 地域コミュニティと祭りの役割",
    type: "summary",
    typeLabel: "Summary Comprehension (概要理解)",
    difficulty: "Hard",
    situation: "地域の市民フォーラムで、社会学者が講演を行っています。社会学者は祭りについてどのように述べていますか？",
    situationEn: "At a local civic forum, a sociologist delivers a lecture. What does the sociologist say about local festivals?",
    dialogue: [
      { speaker: "社会学者", text: "都市化や個人主義の浸透に伴い、ご近所付き合いの希薄化が社会問題となっています。そうした中で、地域の祭りは単なる年中行事や娯楽にとどまらない大きな社会的意義を持っています。神輿の担ぎ手として老若男女が協力し、事前の準備や警備を通じて異なる世代間の対話が自然に生まれます。この『ゆるやかな連帯感』こそが、災害時の助け合いや防犯活動といった強靭な地域レジリエンスの土台となるのです。" }
    ],
    question: "社会学者は祭りの役割についてどのように述べていますか？",
    questionEn: "What does the sociologist say about the role of festivals?",
    options: [
      "1. 観光客を誘致して商業的な利益を最大化する手段である",
      "2. 世代を超えた交流を生み、災害時等の助け合いの絆を育む基盤である",
      "3. 騒音やゴミの問題を引き起こすため縮小すべき行事である",
      "4. 若者のみを対象とした最新エンターテインメントへと刷新すべきである"
    ],
    correctIndex: 1,
    explanation: "社会学者は祭りが「異なる世代間の対話」「ゆるやかな連帯感」を生み、「災害時の助け合いや防犯活動といった強靭な地域レジリエンスの土台」になると説明しています。したがって正解は2番です。"
  },
  {
    id: "l014",
    title: "問題14: 即時応答 - ビジネスでの誘い・打診",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Easy",
    situation: "職場で、取引先から会食に誘われました。",
    situationEn: "At the workplace, a client invites you to dinner.",
    dialogue: [
      { speaker: "取引先", text: "今夜、もしよろしければ情報交換を兼ねてお食事でもいかがですか？" }
    ],
    question: "この発言に対する最も適切な返答はどれですか？",
    questionEn: "What is the most appropriate response to this statement?",
    options: [
      "1. ありがとうございます。ぜひご一緒させてください。",
      "2. ええ、食事は家で一人で食べる主義ですから。",
      "3. 情報交換はメールで十分だと思います。",
      "4. どうぞご遠慮なさらず召し上がってください。"
    ],
    correctIndex: 0,
    explanation: "取引先からの会食の誘いに対する好意的かつ礼儀正しい返答は「ありがとうございます。ぜひご一緒させてください」（1番）です。"
  },
  {
    id: "l015",
    title: "問題15: 即時応答 - 資料の貸し出し依頼",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Easy",
    situation: "同僚から昨日の研修資料を貸してほしいと頼まれました。",
    situationEn: "A coworker asks to borrow yesterday's training handouts.",
    dialogue: [
      { speaker: "同僚", text: "昨日の研修の配布資料、うっかりなくしちゃって。少し見せてもらえない？" }
    ],
    question: "この発言に対する最も適切な返答はどれですか？",
    questionEn: "What is the most appropriate response to this statement?",
    options: [
      "1. うん、今使ってないからコピーして使っていいよ。",
      "2. 私もなくしたので諦めてください。",
      "3. 研修は昨日終わりましたよ。",
      "4. お見せするほどのものでもございません。"
    ],
    correctIndex: 0,
    explanation: "気さくな同僚からの頼みに対する自然な返答は「うん、今使ってないからコピーして使っていいよ」（1番）です。"
  },
  {
    id: "l016",
    title: "問題16: 即時応答 - 上司からの感謝と労い",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Easy",
    situation: "大きな商談をまとめた後、上司から褒められました。",
    situationEn: "After closing a big deal, your supervisor praises you.",
    dialogue: [
      { speaker: "上司", text: "今回の契約成立、君の粘り強い交渉のおかげだよ。本当によくやってくれたね。" }
    ],
    question: "この発言に対する最も適切な返答はどれですか？",
    questionEn: "What is the most appropriate response to this statement?",
    options: [
      "1. 滅相もございません。チームの皆さんのサポートがあったからです。",
      "2. はい、私一人で全部やりましたから当然です。",
      "3. いいえ、契約書に印鑑を押し忘れていました。",
      "4. 部長ももう少し頑張っていただければよかったです。"
    ],
    correctIndex: 0,
    explanation: "上司からの称賛に対する謙虚で適切なビジネスマナーの返答は「滅相もございません。チームの皆さんのサポートがあったからです」（1番）です。"
  },
  {
    id: "l017",
    title: "問題17: 即時応答 - 店頭での在庫問い合わせ",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Medium",
    situation: "洋服店で、店員に商品の色違いがあるか尋ねました。",
    situationEn: "At a clothing store, you ask a clerk if this item comes in a different color.",
    dialogue: [
      { speaker: "客", text: "すみません、このジャケットの紺色のMサイズはありますか？" }
    ],
    question: "店員の最も適切な返答はどれですか？",
    questionEn: "What is the store clerk's most appropriate response?",
    options: [
      "1. あいにく店頭にはございませんが、裏の倉庫をお調べしてまいります。",
      "2. 紺色はお客様にはあまり似合わないと思いますよ。",
      "3. サイズが合わないなら着ないほうがいいです。",
      "4. 昨日はあったような気がします。"
    ],
    correctIndex: 0,
    explanation: "接客における丁寧な返答は「あいにく店頭にはございませんが、裏の倉庫をお調べしてまいります」（1番）です。"
  },
  {
    id: "l018",
    title: "問題18: 即時応答 - 電車の遅延による遅刻連絡",
    type: "quick",
    typeLabel: "Quick Response (即時応答)",
    difficulty: "Medium",
    situation: "部下から人身事故で電車が止まっていると電話がありました。",
    situationEn: "A subordinate calls saying the train has stopped due to an accident.",
    dialogue: [
      { speaker: "部下", text: "課長、申し訳ありません。乗っている電車が運転見合わせになり、始業に20分ほど遅れそうです。" }
    ],
    question: "上司の最も適切な返答はどれですか？",
    questionEn: "What is the supervisor's most appropriate response?",
    options: [
      "1. 連絡ありがとう。事故なら仕方ないから、慌てず気をつけておいで。",
      "2. 走れば間に合うはずだから走ってきなさい。",
      "3. 電車を早く動かすように車掌さんに抗議してください。",
      "4. 遅れるならもう会社に来なくていいです。"
    ],
    correctIndex: 0,
    explanation: "不可抗力の交通トラブルに対する上司の配慮ある適切な返答は「連絡ありがとう。事故なら仕方ないから、慌てず気をつけておいで」（1番）です。"
  },
  {
    id: "l019",
    title: "問題19: 統合理解 - 家族旅行の宿泊プラン比較",
    type: "integrated",
    typeLabel: "Integrated Comprehension (統合理解)",
    difficulty: "Hard",
    situation: "温泉旅館のWebサイトを見ながら、夫と妻が宿泊プランについて話し合っています。二人はどのプランを予約することにしましたか？",
    situationEn: "Browsing a hot spring inn website, a husband and wife discuss accommodation plans. Which plan did they decide to book?",
    dialogue: [
      { speaker: "夫", text: "プランが4つあるね。Aは朝食のみで一人8,000円。Bは朝夕バイキング付きで13,000円。" },
      { speaker: "妻", text: "せっかく温泉に来るんだから夕食は旅館でゆっくり食べたいわ。でもバイキングだと落ち着かないかも。" },
      { speaker: "夫", text: "そうだね。Cプランは部屋食の会席料理付きで18,000円、Dプランは部屋食に加えて貸切露天風呂の無料利用が付いて20,000円だ。" },
      { speaker: "妻", text: "予算は二人で4万円以内って決めてたわよね。大浴場が充実してるから貸切風呂は別になくても平気じゃない？" },
      { speaker: "夫", text: "確かに。それなら部屋で本格的な会席料理が味わえるプランが予算にもぴったりだね。それにしよう！" }
    ],
    question: "二人が最終的に予約することに決めたのはどのプランですか？",
    questionEn: "Which plan did the two ultimately decide to book?",
    options: [
      "1. プランA（朝食のみ・8,000円）",
      "2. プランB（朝夕バイキング付き・13,000円）",
      "3. プランC（部屋食の会席料理付き・18,000円）",
      "4. プランD（部屋食＋貸切露天風呂付き・20,000円）"
    ],
    correctIndex: 2,
    explanation: "夫婦の希望条件は「夕食は落ち着いて部屋で食べたい（バイキング不可）」「貸切風呂は不要」「予算は二人で4万円以内（一人2万円以内）」。プランC（18,000円×2＝36,000円）がこれらの条件を完璧に満たしており、夫の「部屋で本格的な会席料理が味わえるプラン…それにしよう」という合意からも正解は3番（プランC）です。"
  },
  {
    id: "l020",
    title: "問題20: 統合理解 - 創立記念パーティーのケータリング選定",
    type: "integrated",
    typeLabel: "Integrated Comprehension (統合理解)",
    difficulty: "Hard",
    situation: "会社の総務部で、創立記念レセプションのケータリング業者選定について課長と担当者の男性が話し合っています。二人はどの業者に発注することに決めましたか？",
    situationEn: "In a company's general affairs dept, a section chief and a male staff member discuss catering vendor selection for a founding anniversary reception. Which vendor did they decide to order from?",
    dialogue: [
      { speaker: "課長", text: "記念レセプションのケータリング候補、比較表を作ってくれたかい？" },
      { speaker: "男性", text: "はい。A社はフレンチで華やかですがベジタリアン対応が不可です。B社は和洋折衷でベジタリアンやアレルギー対応の個別プレートが可能です。" },
      { speaker: "課長", text: "海外からの来賓もいらっしゃるから、食事制限への配慮は絶対に外せない条件だね。" },
      { speaker: "男性", text: "はい。C社もアレルギー対応可能ですが、配膳スタッフの派遣がなく料理の配送のみとなります。D社は対応可能ですが予算上限を2割超過します。" },
      { speaker: "課長", text: "役員への給仕もあるから配膳スタッフは不可欠だし、予算オーバーも困るね。となると決まりだね。" }
    ],
    question: "二人が選んだケータリング業者はどれですか？",
    questionEn: "Which catering vendor did they choose?",
    options: [
      "1. A社（華やかなフレンチ料理）",
      "2. B社（和洋折衷・食事制限対応可・スタッフ派遣あり・予算内）",
      "3. C社（料理の配送のみ・スタッフ派遣なし）",
      "4. D社（フルサービスだが予算を20%超過）"
    ],
    correctIndex: 1,
    explanation: "条件は「ベジタリアン/アレルギー等の食事制限対応が可能」「配膳スタッフの派遣がある」「予算内であること」。A社は食事制限不可、C社はスタッフなし、D社は予算超過のため、すべての条件を満たすのはB社（2番）です。"
  }
];

if (typeof window !== "undefined") {
  window.listeningData = LISTENING_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { LISTENING_DATA };
}
