/* Lògica del test - Tema 2 Introducció a la núvol pública */

const topicGrid = document.getElementById("topic-grid");
const startBtn = document.getElementById("start-btn");
const shuffleInput = document.getElementById("shuffle");
const countHint = document.getElementById("count-hint");

const quizSection = document.getElementById("quiz");
const resultsSection = document.getElementById("results");
const reviewSection = document.getElementById("review");
const homeSection = document.getElementById("home");

let selectedTopics = new Set();
let allQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = []; // {questionIndex, selected, correct, isCorrect, explanation, topic, question, options}

// ---------- Inicialització ----------
function renderTopics() {
  topicGrid.innerHTML = "";
  TOPICS.forEach((topic) => {
    const count = QUESTIONS.filter((q) => q.topic === topic).length;
    const el = document.createElement("div");
    el.className = "topic-card";
    el.innerHTML = `
      <input type="checkbox" id="topic-${topic}" value="${topic}">
      <label for="topic-${topic}">
        <span class="topic-name">${escapeHtml(topic)}</span>
        <span class="topic-desc">${count} pregunta${count !== 1 ? "s" : ""}</span>
      </label>
    `;
    const input = el.querySelector("input");
    input.checked = selectedTopics.has(topic);
    input.addEventListener("change", () => {
      if (input.checked) selectedTopics.add(topic);
      else selectedTopics.delete(topic);
      updateStart();
    });
    topicGrid.appendChild(el);
  });
  updateStart();
}

function updateStart() {
  const total = [...selectedTopics].flatMap((t) =>
    QUESTIONS.filter((q) => q.topic === t)
  ).length;
  countHint.textContent =
    total === 0
      ? "Selecciona almenys un tema per començar."
      : `${total} pregunta${total !== 1 ? "s" : ""} disponible${total !== 1 ? "s" : ""}.`;
  startBtn.disabled = total === 0;
}

// ---------- Iniciar test ----------
startBtn.addEventListener("click", () => {
  allQuestions = [...selectedTopics]
    .flatMap((t) => QUESTIONS.filter((q) => q.topic === t))
    .map((q) => ({ ...q }));

  if (shuffleInput.checked) {
    allQuestions.sort(() => Math.random() - 0.5);
  }

  currentIndex = 0;
  score = 0;
  userAnswers = [];

  showSection(quizSection);
  renderQuestion();
});

function renderQuestion() {
  const q = allQuestions[currentIndex];
  document.getElementById("curr").textContent = currentIndex + 1;
  document.getElementById("total").textContent = allQuestions.length;
  document.getElementById("progress-bar").style.width =
    ((currentIndex) / allQuestions.length) * 100 + "%";
  document.getElementById("topic-badge").textContent = q.topic;
  document.getElementById("question").textContent = q.question;

  const optionsEl = document.getElementById("options");
  optionsEl.innerHTML = "";
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.className = "option";
    label.innerHTML = `
      <input type="radio" name="answer" value="${i}">
      <span class="opt-text">${escapeHtml(opt)}</span>
    `;
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      document.getElementById("next-btn").disabled = false;
    });
    optionsEl.appendChild(label);
  });

  document.getElementById("next-btn").disabled = true;
  document.getElementById("prev-btn").disabled = currentIndex === 0;
  document.getElementById("feedback").style.display = "none";
}

// ---------- Resposta i navegació ----------
document.getElementById("next-btn").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;

  const q = allQuestions[currentIndex];
  const selectedIndex = parseInt(selected.value, 10);
  const isCorrect = selectedIndex === q.correct;

  userAnswers.push({
    questionIndex: currentIndex,
    selected: selectedIndex,
    correct: q.correct,
    isCorrect,
    explanation: q.explanation,
    topic: q.topic,
    question: q.question,
    options: q.options
  });

  if (isCorrect) score++;

  highlightAnswer(selectedIndex, q.correct);
  document.getElementById("feedback").textContent = isCorrect
    ? "✅ Correcte!"
    : `❌ Incorrecte. La resposta correcta és: ${escapeHtml(q.options[q.correct])}.`;
  document.getElementById("feedback").className = isCorrect ? "feedback ok" : "feedback err";
  document.getElementById("feedback").style.display = "block";

  const isLast = currentIndex === allQuestions.length - 1;
  document.getElementById("next-btn").textContent = isLast ? "Finalitzar" : "Següent";

  if (isLast) {
    // Un segon clic en l'últim mostra els resultats
    if (document.getElementById("next-btn").dataset.justAnswered === "true") {
      showResults();
      return;
    }
    document.getElementById("next-btn").dataset.justAnswered = "true";
    return;
  }

  document.getElementById("next-btn").dataset.justAnswered = "false";
  currentIndex++;
  renderQuestion();
});

document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    document.getElementById("next-btn").dataset.justAnswered = "false";
    document.getElementById("next-btn").textContent = "Següent";
    renderQuestion();
  }
});

function highlightAnswer(selected, correct) {
  const labels = document.querySelectorAll(".option");
  labels.forEach((label, i) => {
    label.style.pointerEvents = "none";
    if (i === correct) {
      label.classList.add("correct");
    } else if (i === selected) {
      label.classList.add("wrong");
    }
  });
}

// ---------- Resultats ----------
function showResults() {
  const percent = allQuestions.length
    ? Math.round((score / allQuestions.length) * 100)
    : 0;

  document.getElementById("score-big").textContent = `${score} / ${allQuestions.length}`;
  document.getElementById("score-text").textContent = resultMessage(percent);
  document.getElementById("summary").innerHTML = summaryHtml(percent);

  drawScoreCanvas(percent);

  showSection(resultsSection);
}

function resultMessage(p) {
  if (p === 100) return "Excel·lent! Has domanat el Tema 2.";
  if (p >= 80) return "Molt bé. Tens un bon nivell del Tema 2.";
  if (p >= 60) return "Aprovat, però pots millorar revisant els errors.";
  return "Cal revisar la teoria del Tema 2. Aním!";
}

function summaryHtml(p) {
  const byTopic = {};
  userAnswers.forEach((a) => {
    if (!byTopic[a.topic]) byTopic[a.topic] = { ok: 0, total: 0 };
    byTopic[a.topic].total++;
    if (a.isCorrect) byTopic[a.topic].ok++;
  });
  let html = "<h3>Resultat per tema</h3><ul>";
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

  // Fons
  ctx.beginPath();
  ctx.arc(center, center, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = "#e2e8f0";
  ctx.stroke();

  // Progrés
  ctx.beginPath();
  ctx.arc(center, center, radius, -Math.PI / 2, (-Math.PI / 2) + (p / 100) * 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = p >= 80 ? "#16a34a" : p >= 60 ? "#ca8a04" : "#dc2626";
  ctx.stroke();

  // Text al centre
  ctx.fillStyle = "#1e293b";
  ctx.font = "bold 26px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(p + "%", center, center + 6);
}

// ---------- Revisió ----------
document.getElementById("review-btn").addEventListener("click", () => {
  const list = document.getElementById("review-list");
  list.innerHTML = "";
  userAnswers.forEach((a, i) => {
    const item = document.createElement("div");
    item.className = "review-item";
    const selectedText = a.options[a.selected] ?? "Sense resposta";
    const correctText = a.options[a.correct];
    item.innerHTML = `
      <div class="r-topic">${escapeHtml(a.topic)}</div>
      <div class="r-question">${i + 1}. ${escapeHtml(a.question)}</div>
      <div class="r-options">
        <div><span class="${a.isCorrect ? "correct-opt" : "wrong-opt"}">${a.isCorrect ? "✅" : "❌"} La teva resposta:</span> ${escapeHtml(selectedText)}</div>
        <div><span class="correct-opt">✅ Correcte:</span> ${escapeHtml(correctText)}</div>
      </div>
      <div class="r-expl">${escapeHtml(a.explanation)}</div>
    `;
    list.appendChild(item);
  });
  showSection(reviewSection);
});

// ---------- Navegació ----------
function showSection(section) {
  [homeSection, quizSection, resultsSection, reviewSection].forEach((s) =>
    s.classList.add("hidden")
  );
  section.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.getElementById("restart-btn").addEventListener("click", () => showSection(homeSection));
document.getElementById("restart-review-btn").addEventListener("click", () => showSection(homeSection));
document.getElementById("back-results-btn").addEventListener("click", () => showSection(resultsSection));

function escapeHtml(text) {
  if (!text) return text;
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Arrancada
renderTopics();
