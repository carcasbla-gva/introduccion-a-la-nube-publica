/* Lògica del test - Tema 2 Introducció a la núvol pública
   Bilingüe (ca/es), temporitzador i mode fosc. */

const topicGrid = document.getElementById("topic-grid");
const startBtn = document.getElementById("start-btn");
const shuffleInput = document.getElementById("shuffle");
const countHint = document.getElementById("count-hint");
const langSwitch = document.getElementById("lang-switch");
const themeToggle = document.getElementById("theme-toggle");
const timerSelect = document.getElementById("timer-select");
const timerDisplay = document.getElementById("timer");

const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const reviewSection = document.getElementById("review");
const homeSection = document.getElementById("home");

// ---------- Estat ----------
let currentLang = safeGet("test-lang") || "ca";
let currentTheme = safeGet("test-theme") || "light";

let selectedTopics = new Set();
let allQuestions = [];
let currentIndex = 0;
let score = 0;
let answers = []; // Per índex: {selected, isCorrect} o null

let timerInterval = null;
let timeLeft = 0;
let timerEnabled = false;

// ---------- Traduccions de la interfície ----------
const UI = {
  ca: {
    siteTitle: "Test Tema 2",
    siteSubtitle: "Introducció a la núvol pública · DAW",
    pickTopics: "Triem els temes",
    pickTopicsDesc: "Selecciona els temes del Tema 2 que vols practicar. Es generaran les preguntes dels temes escollits.",
    shuffle: "Mesclar preguntes",
    timerLabel: "Temps:",
    timerNone: "Sense límit",
    timerMinutes: "min",
    startBtn: "Començar el test",
    hintSelect: "Selecciona almenys un tema per començar.",
    hintAvailable: "pregunta(s) disponible(s).",
    questionLabel: "Pregunta",
    of: "/",
    feedbackCorrect: "✅ Correcte!",
    feedbackIncorrectPrefix: "❌ Incorrecte. La resposta correcta és:",
    nextBtn: "Següent",
    finishBtn: "Finalitzar",
    prevBtn: "Anterior",
    backHome: "Tornar a l'inici",
    confirmLeave: "Segur que vols abandonar el test? Perdràs les respostes.",
    resultsTitle: "Has finalitzat el test",
    scoreText100: "Excel·lent! Has domanat el Tema 2.",
    scoreText80: "Molt bé. Tens un bon nivell del Tema 2.",
    scoreText60: "Aprovat, però pots millorar revisant els errors.",
    scoreTextLow: "Cal revisar la teoria del Tema 2. Aním!",
    summaryTitle: "Resultat per tema",
    reviewTitle: "Revisió de respostes",
    yourAnswer: "La teva resposta:",
    correct: "Correcte:",
    noAnswer: "Sense resposta",
    backResults: "Tornar als resultats",
    restartReview: "Fer un altre test",
    restart: "Fer un altre test",
    reviewAnswers: "Revisar respostes",
    timeUp: "⏰ S'ha acabat el temps!",
    footer: "Test de pràctica del Tema 2 · Introducció a la núvol pública · Mòdul opcional DAW"
  },
  es: {
    siteTitle: "Test Tema 2",
    siteSubtitle: "Introducción a la nube pública · DAW",
    pickTopics: "Elegimos los temas",
    pickTopicsDesc: "Selecciona los temas del Tema 2 que quieres practicar. Se generarán las preguntas de los temas elegidos.",
    shuffle: "Mezclar preguntas",
    timerLabel: "Tiempo:",
    timerNone: "Sin límite",
    timerMinutes: "min",
    startBtn: "Comenzar el test",
    hintSelect: "Selecciona al menos un tema para comenzar.",
    hintAvailable: "pregunta(s) disponible(s).",
    questionLabel: "Pregunta",
    of: "/",
    feedbackCorrect: "✅ ¡Correcto!",
    feedbackIncorrectPrefix: "❌ Incorrecto. La respuesta correcta es:",
    nextBtn: "Siguiente",
    finishBtn: "Finalizar",
    prevBtn: "Anterior",
    backHome: "Volver al inicio",
    confirmLeave: "¿Seguro que quieres abandonar el test? Perderás las respuestas.",
    resultsTitle: "Has finalizado el test",
    scoreText100: "¡Excelente! Has dominado el Tema 2.",
    scoreText80: "Muy bien. Tienes un buen nivel del Tema 2.",
    scoreText60: "Aprobado, pero puedes mejorar revisando los errores.",
    scoreTextLow: "Es necesario repasar la teoría del Tema 2. ¡Ánimo!",
    summaryTitle: "Resultado por tema",
    reviewTitle: "Revisión de respuestas",
    yourAnswer: "Tu respuesta:",
    correct: "Correcta:",
    noAnswer: "Sin respuesta",
    backResults: "Volver a los resultados",
    restartReview: "Hacer otro test",
    restart: "Hacer otro test",
    reviewAnswers: "Revisar respuestas",
    timeUp: "⏰ ¡Se ha acabado el tiempo!",
    footer: "Test de práctica del Tema 2 · Introducción a la nube pública · Módulo opcional DAW"
  }
};

const TOPICS = [...new Set(QUESTIONS.map((q) => q.topic.ca))];

function t(key) {
  return UI[currentLang][key] || key;
}

function safeGet(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}
function safeSet(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function optionText(opt) {
  return typeof opt === "object" ? opt[currentLang] : opt;
}

function topicCountLabel(n) {
  if (currentLang === "ca") return n === 1 ? "1 pregunta" : `${n} preguntes`;
  return n === 1 ? "1 pregunta" : `${n} preguntas`;
}

function availableLabel(n) {
  if (currentLang === "ca") {
    return n === 1 ? "1 pregunta disponible." : `${n} preguntes disponibles.`;
  }
  return n === 1 ? "1 pregunta disponible." : `${n} preguntas disponibles.`;
}

// ---------- Tema / idioma ----------
function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (themeToggle) {
    themeToggle.textContent = currentTheme === "dark" ? "☀️" : "🌙";
    themeToggle.setAttribute(
      "aria-label",
      currentTheme === "dark" ? "Canviar a mode clar" : "Canviar a mode fosc"
    );
  }
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (UI[currentLang][key] !== undefined) el.textContent = UI[currentLang][key];
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
  });

  renderTopics();

  if (!quizSection.classList.contains("hidden")) {
    renderQuestion();
  } else if (!resultsSection.classList.contains("hidden")) {
    showResults();
  } else if (!reviewSection.classList.contains("hidden")) {
    renderReview();
  }
}

// ---------- Inicialització de temes ----------
function renderTopics() {
  topicGrid.innerHTML = "";
  TOPICS.forEach((topicCa) => {
    const qSample = QUESTIONS.find((q) => q.topic.ca === topicCa);
    const topicEs = qSample ? qSample.topic.es : topicCa;
    const count = QUESTIONS.filter((q) => q.topic.ca === topicCa).length;
    const topicLabel = currentLang === "ca" ? topicCa : topicEs;
    const safeId = "topic-" + encodeURIComponent(topicCa);

    const el = document.createElement("div");
    el.className = "topic-card" + (selectedTopics.has(topicCa) ? " selected" : "");
    el.innerHTML = `
      <input type="checkbox" id="${safeId}" value="${topicCa}">
      <label for="${safeId}">
        <span class="topic-name">${escapeHtml(topicLabel)}</span>
        <span class="topic-desc">${topicCountLabel(count)}</span>
      </label>
    `;
    const input = el.querySelector("input");
    input.checked = selectedTopics.has(topicCa);
    input.addEventListener("change", () => {
      if (input.checked) selectedTopics.add(topicCa);
      else selectedTopics.delete(topicCa);
      el.classList.toggle("selected", input.checked);
      updateStart();
    });
    topicGrid.appendChild(el);
  });
  updateStart();
}

function updateStart() {
  const total = [...selectedTopics].flatMap((t) =>
    QUESTIONS.filter((q) => q.topic.ca === t)
  ).length;
  countHint.textContent = total === 0 ? t("hintSelect") : availableLabel(total);
  startBtn.disabled = total === 0;
}

// ---------- Temporitzador ----------
function startTimer() {
  stopTimer();
  timerEnabled = timerSelect.value !== "0";
  timerDisplay.classList.remove("urgent");

  if (!timerEnabled) {
    timerDisplay.textContent = "∞";
    return;
  }

  timeLeft = parseInt(timerSelect.value, 10) * 60;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      stopTimer();
      finishQuiz(true);
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const safe = Math.max(timeLeft, 0);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  timerDisplay.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  timerDisplay.classList.toggle("urgent", safe <= 30 && timerEnabled);
}

// ---------- Iniciar test ----------
startBtn.addEventListener("click", () => {
  allQuestions = [...selectedTopics]
    .flatMap((topic) => QUESTIONS.filter((q) => q.topic.ca === topic))
    .map((q) => ({ ...q }));

  if (shuffleInput.checked) {
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
  }

  currentIndex = 0;
  score = 0;
  answers = new Array(allQuestions.length).fill(null);

  showSection(quizSection);
  renderQuestion();
  startTimer();
});

// ---------- Renderitzar pregunta ----------
function renderQuestion() {
  if (!allQuestions.length) return;
  const q = allQuestions[currentIndex];
  const total = allQuestions.length;

  document.getElementById("curr").textContent = currentIndex + 1;
  document.getElementById("total").textContent = total;
  document.getElementById("progress-bar").style.width =
    (currentIndex / total) * 100 + "%";
  document.getElementById("topic-badge").textContent = q.topic[currentLang];
  document.getElementById("question").textContent = q.question[currentLang];

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  const saved = answers[currentIndex];

  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";
    const letter = String.fromCharCode(65 + i);
    label.innerHTML = `
      <input type="radio" name="answer" value="${i}">
      <span class="letter">${letter}</span>
      <span class="opt-text">${escapeHtml(optionText(opt))}</span>
    `;
    const input = label.querySelector("input");

    if (saved) {
      if (i === q.correct) label.classList.add("correct");
      else if (i === saved.selected) label.classList.add("wrong");
      if (i === saved.selected) input.checked = true;
      input.disabled = true;
      label.style.pointerEvents = "none";
    } else {
      input.addEventListener("change", () => selectAnswer(i));
    }
    optionsEl.appendChild(label);
  });

  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent =
    currentIndex === total - 1 ? t("finishBtn") : t("nextBtn");
  nextBtn.disabled = !saved;

  document.getElementById("prev-btn").disabled = currentIndex === 0;

  if (saved) {
    showFeedback(saved.selected, q);
  } else {
    document.getElementById("feedback").style.display = "none";
  }
}

function selectAnswer(selectedIndex) {
  const q = allQuestions[currentIndex];
  const isCorrect = selectedIndex === q.correct;
  answers[currentIndex] = { selected: selectedIndex, isCorrect };

  const labels = document.querySelectorAll(".option");
  labels.forEach((label, i) => {
    label.style.pointerEvents = "none";
    const input = label.querySelector("input");
    input.disabled = true;
    if (i === q.correct) label.classList.add("correct");
    else if (i === selectedIndex) label.classList.add("wrong");
  });

  showFeedback(selectedIndex, q);
  document.getElementById("next-btn").disabled = false;
}

function showFeedback(selectedIndex, q) {
  const isCorrect = selectedIndex === q.correct;
  const feedback = document.getElementById("feedback");
  feedback.textContent = isCorrect
    ? t("feedbackCorrect")
    : `${t("feedbackIncorrectPrefix")} ${optionText(q.options[q.correct])}.`;
  feedback.className = isCorrect ? "feedback ok" : "feedback err";
  feedback.style.display = "block";
}

// ---------- Navegació del test ----------
document.getElementById("next-btn").addEventListener("click", () => {
  if (!answers[currentIndex]) return;
  if (currentIndex === allQuestions.length - 1) {
    showResults();
  } else {
    currentIndex++;
    renderQuestion();
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
});

// Tornar a l'inici des del test (amb confirmació si ja hi ha respostes)
document.getElementById("home-btn").addEventListener("click", () => {
  const hasAnswers = answers.some((a) => a);
  if (hasAnswers && !window.confirm(t("confirmLeave"))) return;
  goHome();
});

// ---------- Finalitzar / Resultats ----------
function finishQuiz(byTime) {
  if (byTime) {
    // Mostrar breument el missatge de temps esgotat
    const feedback = document.getElementById("feedback");
    feedback.textContent = t("timeUp");
    feedback.className = "feedback err";
    feedback.style.display = "block";
  }
  showResults();
}

function showResults() {
  stopTimer();
  const total = allQuestions.length;
  let correct = 0;
  answers.forEach((a) => { if (a && a.isCorrect) correct++; });
  score = correct;

  const percent = total ? Math.round((correct / total) * 100) : 0;

  document.getElementById("score-big").textContent = `${correct} / ${total}`;
  document.getElementById("score-text").textContent = resultMessage(percent);
  document.getElementById("summary").innerHTML = summaryHtml();

  drawScoreCanvas(percent);

  showSection(resultsSection);
}

function resultMessage(p) {
  if (p === 100) return t("scoreText100");
  if (p >= 80) return t("scoreText80");
  if (p >= 60) return t("scoreText60");
  return t("scoreTextLow");
}

function summaryHtml() {
  const byTopic = {};
  allQuestions.forEach((q, i) => {
    const key = q.topic[currentLang];
    if (!byTopic[key]) byTopic[key] = { ok: 0, total: 0 };
    byTopic[key].total++;
    if (answers[i] && answers[i].isCorrect) byTopic[key].ok++;
  });

  let html = `<h3>${t("summaryTitle")}</h3><ul>`;
  Object.entries(byTopic).forEach(([topic, data]) => {
    const pct = Math.round((data.ok / data.total) * 100);
    html += `<li><strong>${escapeHtml(topic)}:</strong> ${data.ok}/${data.total} (${pct}%)</li>`;
  });
  html += "</ul>";
  return html;
}

function drawScoreCanvas(p) {
  const canvas = document.getElementById("score-canvas");
  const ctx = canvas.getContext("2d");
  const center = 100;
  const radius = 85;
  const lineWidth = 14;

  ctx.clearRect(0, 0, 200, 200);

  ctx.beginPath();
  ctx.arc(center, center, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = getComputedStyle(document.documentElement)
    .getPropertyValue("--ring-bg").trim() || "#e2e8f0";
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(center, center, radius, -Math.PI / 2, (-Math.PI / 2) + (p / 100) * 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = p >= 80 ? "#22c55e" : p >= 60 ? "#f59e0b" : "#ef4444";
  ctx.stroke();

  ctx.fillStyle = getComputedStyle(document.documentElement)
    .getPropertyValue("--text").trim() || "#1e293b";
  ctx.font = "bold 28px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(p + "%", center, center + 6);
}

// ---------- Revisió ----------
function renderReview() {
  const list = document.getElementById("review-list");
  list.innerHTML = "";

  allQuestions.forEach((q, i) => {
    const a = answers[i];
    const selectedText = a ? optionText(q.options[a.selected]) : t("noAnswer");
    const correctText = optionText(q.options[q.correct]);
    const ok = a && a.isCorrect;

    const item = document.createElement("div");
    item.className = "review-item" + (ok ? " ok" : " ko");
    item.innerHTML = `
      <div class="r-topic">${escapeHtml(q.topic[currentLang])}</div>
      <div class="r-question">${i + 1}. ${escapeHtml(q.question[currentLang])}</div>
      <div class="r-options">
        <div><span class="${ok ? "correct-opt" : "wrong-opt"}">${ok ? "✅" : "❌"} ${t("yourAnswer")}</span> ${escapeHtml(selectedText)}</div>
        <div><span class="correct-opt">✅ ${t("correct")}</span> ${escapeHtml(correctText)}</div>
      </div>
      <div class="r-expl">${escapeHtml(q.explanation[currentLang])}</div>
    `;
    list.appendChild(item);
  });
}

document.getElementById("review-btn").addEventListener("click", () => {
  renderReview();
  showSection(reviewSection);
});

// ---------- Canvi d'idioma / tema ----------
langSwitch.addEventListener("click", (e) => {
  const btn = e.target.closest(".lang-btn");
  if (!btn) return;
  currentLang = btn.getAttribute("data-lang");
  safeSet("test-lang", currentLang);
  applyLanguage();
});

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  safeSet("test-theme", currentTheme);
  applyTheme();
  if (!resultsSection.classList.contains("hidden")) {
    const total = allQuestions.length;
    let correct = 0;
    answers.forEach((a) => { if (a && a.isCorrect) correct++; });
    drawScoreCanvas(total ? Math.round((correct / total) * 100) : 0);
  }
});

// ---------- Navegació ----------
function showSection(section) {
  [homeSection, quizSection, resultsSection, reviewSection].forEach((s) =>
    s.classList.add("hidden")
  );
  section.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  stopTimer();
  timerDisplay.textContent = "∞";
  timerDisplay.classList.remove("urgent");
  showSection(homeSection);
}

document.getElementById("restart-btn").addEventListener("click", goHome);
document.getElementById("restart-review-btn").addEventListener("click", goHome);
document.getElementById("back-results-btn").addEventListener("click", () => showResults());

function escapeHtml(text) {
  if (!text) return text;
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ---------- Arrancada ----------
applyTheme();
renderTopics();
applyLanguage();
