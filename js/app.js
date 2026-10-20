/**
 * JLPT N2 Master — Main Application Logic
 * Handles tab navigation, rendering, search, filters, modals,
 * listening practice, progress tracking, and dark mode.
 */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────
  const state = {
    activeTab: 'kanji',
    kanjiLearned: new Set(JSON.parse(localStorage.getItem('kanjiLearned') || '[]')),
    vocabLearned: new Set(JSON.parse(localStorage.getItem('vocabLearned') || '[]')),
    listeningScore: JSON.parse(localStorage.getItem('listeningScore') || '{"correct":0,"total":0}'),
    listeningAnswered: new Set(JSON.parse(localStorage.getItem('listeningAnswered') || '[]')),
    currentQuestion: 0,
    speechRate: 1,
    vocabFilter: 'all',
    theme: localStorage.getItem('theme') || 'light',
  };

  // ── DOM References ─────────────────────────────────────
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ── Data aliases ───────────────────────────────────────
  const kanjiList = (typeof KANJI_DATA !== 'undefined') ? KANJI_DATA : [];
  const vocabList = (typeof VOCAB_DATA !== 'undefined') ? VOCAB_DATA : [];
  const listeningList = (typeof LISTENING_DATA !== 'undefined') ? LISTENING_DATA : [];

  // ══════════════════════════════════════════════════════
  //  INITIALIZATION
  // ══════════════════════════════════════════════════════

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    applyTheme(state.theme);
    setupTabs();
    setupThemeToggle();
    renderKanji();
    renderVocab();
    setupKanjiSearch();
    setupVocabSearch();
    setupVocabFilters();
    setupModal();
    setupListening();
    updateProgress();
  }

  // ══════════════════════════════════════════════════════
  //  THEME
  // ══════════════════════════════════════════════════════

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    state.theme = t;
    localStorage.setItem('theme', t);
    const btn = $('#themeToggle');
    if (btn) btn.textContent = t === 'dark' ? '☀️' : '🌙';
  }

  function setupThemeToggle() {
    const btn = $('#themeToggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }

  // ══════════════════════════════════════════════════════
  //  TAB NAVIGATION
  // ══════════════════════════════════════════════════════

  function setupTabs() {
    $$('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        if (tab === state.activeTab) return;
        state.activeTab = tab;

        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
          const playBtn = $('#playBtn');
          if (playBtn) {
            playBtn.classList.remove('playing');
            playBtn.textContent = '▶';
          }
        }

        $$('.tab-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');

        $$('.section').forEach((s) => s.classList.remove('active'));
        const section = $(`#${tab}-section`);
        if (section) section.classList.add('active');
      });
    });
  }

  // ══════════════════════════════════════════════════════
  //  TOAST NOTIFICATION
  // ══════════════════════════════════════════════════════

  function showToast(msg) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(() => el.classList.remove('show'), 2200);
  }

  // ══════════════════════════════════════════════════════
  //  PROGRESS
  // ══════════════════════════════════════════════════════

  function updateProgress() {
    const total = kanjiList.length + vocabList.length;
    const learned = state.kanjiLearned.size + state.vocabLearned.size;
    const pct = total > 0 ? Math.round((learned / total) * 100) : 0;

    const fill = $('#progressFill');
    const text = $('#progressText');
    if (fill) fill.style.width = pct + '%';
    if (text) text.textContent = pct + '%';

    // Kanji stats
    const kt = $('#kanjiTotal');
    const kl = $('#kanjiLearned');
    const kp = $('#kanjiPercent');
    if (kt) kt.textContent = kanjiList.length;
    if (kl) kl.textContent = state.kanjiLearned.size;
    if (kp) kp.textContent = (kanjiList.length > 0 ? Math.round((state.kanjiLearned.size / kanjiList.length) * 100) : 0) + '%';

    // Vocab stats
    const vt = $('#vocabTotal');
    const vl = $('#vocabLearned');
    const vp = $('#vocabPercent');
    if (vt) vt.textContent = vocabList.length;
    if (vl) vl.textContent = state.vocabLearned.size;
    if (vp) vp.textContent = (vocabList.length > 0 ? Math.round((state.vocabLearned.size / vocabList.length) * 100) : 0) + '%';
  }

  function saveLearned() {
    localStorage.setItem('kanjiLearned', JSON.stringify([...state.kanjiLearned]));
    localStorage.setItem('vocabLearned', JSON.stringify([...state.vocabLearned]));
  }

  // ══════════════════════════════════════════════════════
  //  KANJI SECTION
  // ══════════════════════════════════════════════════════

  function renderKanji(filter = '') {
    const grid = $('#kanjiGrid');
    const empty = $('#kanjiEmpty');
    if (!grid) return;

    const q = filter.toLowerCase().trim();
    const filtered = kanjiList.filter((k) => {
      if (!q) return true;
      return (
        k.kanji.includes(q) ||
        k.meaning.toLowerCase().includes(q) ||
        k.on.toLowerCase().includes(q) ||
        k.kun.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }

    if (empty) empty.style.display = 'none';

    grid.innerHTML = filtered
      .map((k) => {
        const learned = state.kanjiLearned.has(k.id) ? 'learned' : '';
        return `
        <div class="kanji-card ${learned}" data-id="${k.id}" role="button" tabindex="0">
          <div class="learned-badge">✓</div>
          <div class="kanji-char">${k.kanji}</div>
          <div class="kanji-reading">${k.on}${k.kun && k.kun !== '-' ? ' / ' + k.kun : ''}</div>
          <div class="kanji-meaning">${truncate(k.meaning, 40)}</div>
        </div>`;
      })
      .join('');

    // Attach click handlers
    grid.querySelectorAll('.kanji-card').forEach((card) => {
      card.addEventListener('click', () => openKanjiModal(card.dataset.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') openKanjiModal(card.dataset.id);
      });
    });
  }

  function setupKanjiSearch() {
    const input = $('#kanjiSearch');
    if (!input) return;
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => renderKanji(input.value), 200);
    });
  }

  // ══════════════════════════════════════════════════════
  //  KANJI MODAL
  // ══════════════════════════════════════════════════════

  let currentModalKanji = null;

  function setupModal() {
    const overlay = $('#kanjiModal');
    const closeBtn = $('#modalClose');
    const learnBtn = $('#modalLearnBtn');

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    if (learnBtn) {
      learnBtn.addEventListener('click', () => {
        if (!currentModalKanji) return;
        if (state.kanjiLearned.has(currentModalKanji.id)) {
          state.kanjiLearned.delete(currentModalKanji.id);
          showToast(`${currentModalKanji.kanji} removed from learned`);
          learnBtn.textContent = '✓ Mark as Learned';
        } else {
          state.kanjiLearned.add(currentModalKanji.id);
          showToast(`${currentModalKanji.kanji} marked as learned! 🎉`);
          learnBtn.textContent = '✗ Unmark';
        }
        saveLearned();
        updateProgress();
        renderKanji($('#kanjiSearch')?.value || '');
      });
    }
  }

  function openKanjiModal(id) {
    const k = kanjiList.find((x) => x.id === id);
    if (!k) return;
    currentModalKanji = k;

    $('#modalKanji').textContent = k.kanji;
    $('#modalMeaning').textContent = k.meaning;
    $('#modalOn').textContent = k.on;
    $('#modalKun').textContent = k.kun || '-';
    $('#modalStrokes').textContent = k.strokes;
    $('#modalRadical').textContent = `${k.radical} (${k.radicalName})`;
    $('#modalHintText').textContent = k.hint || '';

    const compList = $('#modalCompounds');
    compList.innerHTML = k.compounds
      .map(
        (c) =>
          `<li><span class="cw">${c.word}</span><span class="cr">${c.reading}</span><span class="cm">${c.meaning}</span></li>`
      )
      .join('');

    const learnBtn = $('#modalLearnBtn');
    if (learnBtn) {
      learnBtn.textContent = state.kanjiLearned.has(k.id) ? '✗ Unmark' : '✓ Mark as Learned';
    }

    $('#kanjiModal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    $('#kanjiModal')?.classList.remove('open');
    document.body.style.overflow = '';
    currentModalKanji = null;
  }

  // ══════════════════════════════════════════════════════
  //  VOCABULARY SECTION
  // ══════════════════════════════════════════════════════

  function renderVocab(filter = '', posFilter = 'all') {
    const list = $('#vocabList');
    const empty = $('#vocabEmpty');
    if (!list) return;

    const q = filter.toLowerCase().trim();
    const filtered = vocabList.filter((v) => {
      const matchPos = posFilter === 'all' || v.pos === posFilter;
      if (!matchPos) return false;
      if (!q) return true;
      return (
        v.word.includes(q) ||
        v.reading.includes(q) ||
        v.meaning.toLowerCase().includes(q)
      );
    });

    if (filtered.length === 0) {
      list.innerHTML = '';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (empty) empty.style.display = 'none';

    list.innerHTML = filtered
      .map((v) => {
        const learned = state.vocabLearned.has(v.id) ? 'learned' : '';
        const posClass = getPosClass(v.pos);
        return `
        <div class="vocab-card ${learned}" data-id="${v.id}">
          <div class="learned-badge">✓</div>
          <div class="vocab-word-col">
            <div class="vocab-word">${v.word}</div>
            <div class="vocab-reading">${v.reading}</div>
          </div>
          <div class="vocab-details">
            <span class="pos-tag ${posClass}">${v.posLabel}</span>
            <div class="vocab-meaning">${v.meaning}</div>
            <div class="vocab-example">
              ${v.example.ja}
              <div class="en">${v.example.en}</div>
            </div>
            ${v.collocation ? `<div class="vocab-collocation">📎 ${v.collocation}</div>` : ''}
            <button class="btn btn-sm btn-outline" style="margin-top:8px" data-learn="${v.id}">
              ${state.vocabLearned.has(v.id) ? '✗ Unmark' : '✓ Learned'}
            </button>
          </div>
        </div>`;
      })
      .join('');

    // Learn buttons
    list.querySelectorAll('[data-learn]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.learn;
        if (state.vocabLearned.has(id)) {
          state.vocabLearned.delete(id);
          showToast('Removed from learned');
        } else {
          state.vocabLearned.add(id);
          showToast('Marked as learned! 🎉');
        }
        saveLearned();
        updateProgress();
        renderVocab($('#vocabSearch')?.value || '', state.vocabFilter);
      });
    });
  }

  function getPosClass(pos) {
    const map = {
      noun: 'pos-noun',
      verb: 'pos-verb',
      'adjective-i': 'pos-adj-i',
      'adjective-na': 'pos-adj-na',
      adverb: 'pos-adverb',
      conjunction: 'pos-conj',
      expression: 'pos-expr',
    };
    return map[pos] || 'pos-noun';
  }

  function setupVocabSearch() {
    const input = $('#vocabSearch');
    if (!input) return;
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => renderVocab(input.value, state.vocabFilter), 200);
    });
  }

  function setupVocabFilters() {
    const container = $('#vocabFilters');
    if (!container) return;
    container.querySelectorAll('.chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        container.querySelectorAll('.chip').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        state.vocabFilter = chip.dataset.filter;
        renderVocab($('#vocabSearch')?.value || '', state.vocabFilter);
      });
    });
  }

  // ══════════════════════════════════════════════════════
  //  LISTENING SECTION
  // ══════════════════════════════════════════════════════

  function setupListening() {
    if (listeningList.length === 0) {
      const card = $('#listeningCard');
      if (card) card.innerHTML = '<div class="empty-state"><div class="empty-icon">🎧</div><p>No listening questions available.</p></div>';
      return;
    }

    // Play button
    $('#playBtn')?.addEventListener('click', playCurrentAudio);

    // Speed controls
    $$('.speed-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        $$('.speed-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.speechRate = parseFloat(btn.dataset.speed);
      });
    });

    // Toggle dialogue
    $('#toggleDialogue')?.addEventListener('click', () => {
      const box = $('#dialogueBox');
      const btn = $('#toggleDialogue');
      if (box.classList.contains('visible')) {
        box.classList.remove('visible');
        btn.textContent = 'Show Transcript';
      } else {
        box.classList.add('visible');
        btn.textContent = 'Hide Transcript';
      }
    });

    // Navigation
    $('#nextBtn')?.addEventListener('click', () => {
      if (state.currentQuestion < listeningList.length - 1) {
        state.currentQuestion++;
        loadQuestion();
      }
    });

    $('#prevBtn')?.addEventListener('click', () => {
      if (state.currentQuestion > 0) {
        state.currentQuestion--;
        loadQuestion();
      }
    });

    // Reset score
    $('#resetScoreBtn')?.addEventListener('click', () => {
      state.listeningScore = { correct: 0, total: 0 };
      state.listeningAnswered.clear();
      localStorage.setItem('listeningScore', JSON.stringify(state.listeningScore));
      localStorage.setItem('listeningAnswered', '[]');
      updateScoreDisplay();
      loadQuestion();
      showToast('Score reset!');
    });

    // Keyboard nav
    document.addEventListener('keydown', (e) => {
      if (state.activeTab !== 'listening') return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        $('#nextBtn')?.click();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        $('#prevBtn')?.click();
      }
    });

    loadQuestion();
    updateScoreDisplay();
  }

  function loadQuestion() {
    const q = listeningList[state.currentQuestion];
    if (!q) return;

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    const answered = state.listeningAnswered.has(q.id);

    // Header
    $('#qTitle').textContent = q.title;
    const badge = $('#qBadge');
    badge.textContent = q.difficulty;
    badge.className = 'q-badge badge-' + q.difficulty.toLowerCase();

    // Situation
    const sit = $('#qSituation');
    sit.innerHTML = `${q.situation}<div class="en">${q.situationEn}</div>`;

    // Dialogue
    const dbox = $('#dialogueBox');
    dbox.classList.remove('visible');
    $('#toggleDialogue').textContent = 'Show Transcript';
    dbox.innerHTML = q.dialogue
      .map(
        (d) =>
          `<div class="dialogue-line"><div class="speaker">${d.speaker}:</div>${d.text}</div>`
      )
      .join('');

    // Question
    $('#qText').textContent = q.question;
    $('#qTextEn').textContent = q.questionEn;

    // Options
    const optContainer = $('#answerOptions');
    optContainer.innerHTML = q.options
      .map(
        (opt, i) =>
          `<button class="answer-btn" data-index="${i}" ${answered ? 'disabled' : ''}>${opt}</button>`
      )
      .join('');

    // If already answered, highlight
    if (answered) {
      const btns = optContainer.querySelectorAll('.answer-btn');
      btns[q.correctIndex].classList.add('correct');
      btns.forEach((b) => (b.disabled = true));
      $('#explanationBox').classList.add('visible');
      $('#explanationText').textContent = q.explanation;
    } else {
      $('#explanationBox').classList.remove('visible');
      // Attach answer handlers
      optContainer.querySelectorAll('.answer-btn').forEach((btn) => {
        btn.addEventListener('click', () => handleAnswer(btn, q));
      });
    }

    // Counter
    $('#qCounter').textContent = `${state.currentQuestion + 1} / ${listeningList.length}`;

    // Nav button states
    $('#prevBtn').disabled = state.currentQuestion === 0;
    $('#nextBtn').disabled = state.currentQuestion === listeningList.length - 1;

    // Audio status
    $('#audioStatus').textContent = 'Press play to listen';
    $('#playBtn').classList.remove('playing');
  }

  function handleAnswer(btn, q) {
    const idx = parseInt(btn.dataset.index);
    const allBtns = $$('#answerOptions .answer-btn');

    // Disable all
    allBtns.forEach((b) => (b.disabled = true));

    // Highlight correct
    allBtns[q.correctIndex].classList.add('correct');

    if (idx !== q.correctIndex) {
      btn.classList.add('incorrect');
    }

    // Update score
    if (!state.listeningAnswered.has(q.id)) {
      state.listeningAnswered.add(q.id);
      state.listeningScore.total++;
      if (idx === q.correctIndex) {
        state.listeningScore.correct++;
      }
      localStorage.setItem('listeningScore', JSON.stringify(state.listeningScore));
      localStorage.setItem('listeningAnswered', JSON.stringify([...state.listeningAnswered]));
    }

    updateScoreDisplay();

    // Show explanation
    $('#explanationText').textContent = q.explanation;
    $('#explanationBox').classList.add('visible');
  }

  function updateScoreDisplay() {
    const el = $('#listeningScore');
    if (el) el.textContent = `${state.listeningScore.correct} / ${state.listeningScore.total}`;
  }

  // ── Text-to-Speech ────────────────────────────────────

  function playCurrentAudio() {
    const q = listeningList[state.currentQuestion];
    if (!q) return;

    const playBtn = $('#playBtn');
    const statusEl = $('#audioStatus');

    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (playBtn) {
        playBtn.classList.remove('playing');
        playBtn.textContent = '▶';
      }
      if (statusEl) statusEl.textContent = 'Paused — click to play';
      return;
    }

    // Cancel any previous speech
    window.speechSynthesis.cancel();

    // Build full text from dialogue
    const fullText = q.dialogue.map((d) => d.text).join('。');

    const utter = new SpeechSynthesisUtterance(fullText);
    utter.lang = 'ja-JP';
    utter.rate = state.speechRate;
    utter.pitch = 1;

    // Try to pick a Japanese voice
    const voices = window.speechSynthesis.getVoices();
    const jaVoice = voices.find((v) => v.lang.startsWith('ja'));
    if (jaVoice) utter.voice = jaVoice;

    const playBtn = $('#playBtn');
    const statusEl = $('#audioStatus');

    utter.onstart = () => {
      playBtn.classList.add('playing');
      playBtn.textContent = '⏸';
      statusEl.textContent = 'Playing...';
    };

    utter.onend = () => {
      playBtn.classList.remove('playing');
      playBtn.textContent = '▶';
      statusEl.textContent = 'Finished — click to replay';
    };

    utter.onerror = () => {
      playBtn.classList.remove('playing');
      playBtn.textContent = '▶';
      statusEl.textContent = 'Audio error — try again';
    };

    window.speechSynthesis.speak(utter);
  }

  // Pre-load voices
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
  }

  // ══════════════════════════════════════════════════════
  //  UTILITIES
  // ══════════════════════════════════════════════════════

  function truncate(str, max) {
    return str.length > max ? str.slice(0, max) + '…' : str;
  }
})();
