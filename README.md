# 🎌 JLPT N2 Master (日本語能力試験 N2)

An interactive, responsive web application designed to help learners prepare for and pass the **JLPT N2 (Japanese Language Proficiency Test Level 2)** exam. Built with vanilla HTML5, CSS3, and modern JavaScript, styled in an elegant **maroon and beige** aesthetic.

![Theme](https://img.shields.io/badge/Theme-Maroon%20%26%20Beige-800020?style=flat-square)
![JLPT Level](https://img.shields.io/badge/JLPT-N2-D4AF37?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)

---

## ✨ Features

The application is structured into three dedicated preparation sections:

### 1. 漢 Kanji Section (漢字)
- **120 Core JLPT N2 Kanji** with complete character breakdowns.
- **Detailed Metadata**: On'yomi, Kun'yomi, stroke order counts, radicals, and radical English names.
- **High-Yield Compounds**: 3 authentic compound vocabulary words per kanji with hiragana readings and definitions.
- **Mnemonic Hints**: Visual and conceptual memory aids to accelerate retention.
- **Search & Filter**: Real-time instant filtering by kanji glyph, reading, or English meaning.
- **Interactive Kanji Modal**: Fullscreen view with stroke details and "Mark as Learned" progress tracking.

### 2. 語 Vocabulary Section (語彙)
- **105 High-Frequency JLPT N2 Words** organized into key grammar and part-of-speech categories:
  - Nouns (名詞)
  - Verbs (動詞 — transitive and intransitive pairs, compound verbs)
  - I-Adjectives (い形容詞)
  - Na-Adjectives (な形容詞)
  - Adverbs (副詞)
  - Conjunctions (接続詞)
- **Contextual Learning**: Authentic Japanese example sentences with full English translations.
- **Collocations**: Common phrases and pairings tested on the N2 exam.
- **Filter Chips**: Filter by grammatical category with a single click.

### 3. 聴 Listening Comprehension (聴解)
- **20 Authentic Exam-Style Questions** covering all 5 official JLPT N2 listening patterns:
  - **問題1: 課題理解 (Task-Based Comprehension)** — Determine immediate next steps.
  - **問題2: ポイント理解 (Key Point Comprehension)** — Identify specific details and core reasons.
  - **問題3: 概要理解 (Summary Comprehension)** — Grasp main themes from lectures and talks.
  - **問題4: 即時応答 (Quick Response)** — Practice everyday business keigo and rapid conversational responses.
  - **問題5: 統合理解 (Integrated Comprehension)** — Multi-option decision making and comparison.
- **Audio & TTS**: Browser-native Web Speech API (`ja-JP`) for natural Japanese pronunciation.
- **Adjustable Playback Speed**: Practice listening at `0.6×`, `0.8×`, `1.0×`, or `1.2×` speeds.
- **Transcript Toggle**: Reveal full conversation dialogue scripts on demand.
- **Scoring & Explanations**: Instant visual feedback (green/red) and comprehensive Japanese explanations for every question.

---

## 🎨 Design System

- **Color Palette**:
  - Primary Maroon: `#800020`
  - Deep Maroon: `#5C0018`
  - Beige Surface: `#F5F0E8`
  - Cream Background: `#FFF8F0`
  - Accent Gold: `#C9A84C`
- **Dark Mode**: Fully supported via the top-bar theme toggle button (`🌙` / `☀️`).
- **Typography**: Clean typography pairing Google's **Noto Sans JP** with **Poppins**.
- **Responsive**: Fully responsive grid adapting to mobile, tablet, and widescreen layouts.

---

## 🚀 Getting Started

No build tools, package managers, or external servers are required. The application runs purely in the browser.

### Option 1: Direct File Open
Simply open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari):
```bash
# Linux
xdg-open index.html

# macOS
open index.html

# Windows
start index.html
```

### Option 2: Local HTTP Server
Run a lightweight HTTP server using Python:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📁 Repository Structure

```
├── index.html          # Main single-page application layout
├── css/
│   └── style.css       # Maroon & beige design tokens, grid styles, responsive rules
├── js/
│   ├── app.js          # Main application logic, tabs, modal, TTS player, progress state
│   ├── kanji-data.js   # 120 JLPT N2 Kanji entries
│   ├── vocab-data.js   # 105 JLPT N2 Vocabulary entries
│   └── listening.js    # 20 JLPT N2 Listening comprehension questions
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
