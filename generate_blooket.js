// Generate Blooket CSV matching the official Blooket Spreadsheet Import Template
const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
eval(content.replace(/^const /gm, 'var '));

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function esc(s) {
    s = String(s);
    if (s.includes(',') || s.includes('"') || s.includes('\n')) return '"' + s.replace(/"/g, '""') + '"';
    return s;
}

const questions = [];

// Type 1: Character → Meaning
for (const c of charDatabase) {
    const d = shuffle(charDatabase.filter(x => x.char !== c.char)).slice(0, 3).map(x => x.meaning);
    const a = shuffle([c.meaning, ...d]);
    questions.push({ q: `Chữ「${c.char}」có nghĩa là gì?`, a, c: a.indexOf(c.meaning) + 1, t: 20 });
}

// Type 2: Meaning → Character
for (const c of charDatabase) {
    const d = shuffle(charDatabase.filter(x => x.char !== c.char)).slice(0, 3).map(x => x.char);
    const a = shuffle([c.char, ...d]);
    questions.push({ q: `Chữ nào có nghĩa "${c.meaning}"?`, a, c: a.indexOf(c.char) + 1, t: 20 });
}

// Type 3: Character → Pinyin
for (const c of charDatabase) {
    const d = shuffle(charDatabase.filter(x => x.pinyin !== c.pinyin)).slice(0, 3).map(x => x.pinyin);
    const a = shuffle([c.pinyin, ...d]);
    questions.push({ q: `Pinyin của chữ「${c.char}」là gì?`, a, c: a.indexOf(c.pinyin) + 1, t: 15 });
}

// Type 4: Fill in the blank
for (const g of grammarDatabase) {
    const d = shuffle(charDatabase.filter(x => x.char !== g.answer)).slice(0, 3).map(x => x.char);
    const a = shuffle([g.answer, ...d]);
    questions.push({ q: `${g.text_pre}___${g.text_post} (${g.vietnamese})`, a, c: a.indexOf(g.answer) + 1, t: 20 });
}

// Type 5: Vocab meaning
for (const v of vocabDatabase) {
    if (v.chars.length > 3) continue;
    const others = vocabDatabase.filter(x => x.word !== v.word && x.chars.length <= 3);
    if (others.length < 3) continue;
    const d = shuffle(others).slice(0, 3).map(x => x.meaning);
    const a = shuffle([v.meaning, ...d]);
    questions.push({ q: `「${v.word}」có nghĩa là gì?`, a, c: a.indexOf(v.meaning) + 1, t: 20 });
}

// Type 6: Short sentence meaning
for (const s of sentenceRevealDatabase) {
    if (s.chinese.length > 12) continue;
    const others = sentenceRevealDatabase.filter(x => x.chinese !== s.chinese && x.chinese.length <= 12);
    if (others.length < 3) continue;
    const d = shuffle(others).slice(0, 3).map(x => x.vietnamese);
    const a = shuffle([s.vietnamese, ...d]);
    questions.push({ q: `「${s.chinese}」nghĩa là gì?`, a, c: a.indexOf(s.vietnamese) + 1, t: 30 });
}

// Build CSV — exact Blooket template format
const lines = [];
// Row 1: Header
lines.push('Question #,Question Text,Answer 1,Answer 2,Answer 3 (Optional),Answer 4 (Optional),Correct Answer(s),Time Limit (sec) (Max: 300 seconds)');
// Row 2+: Questions (no instruction row — Blooket skips it during import anyway)
questions.forEach((q, i) => {
    lines.push([i + 1, esc(q.q), esc(q.a[0]), esc(q.a[1]), esc(q.a[2]), esc(q.a[3]), q.c, q.t].join(','));
});

// Write with UTF-8 BOM for proper encoding recognition
const BOM = '\uFEFF';
fs.writeFileSync('blooket_import.csv', BOM + lines.join('\n'), 'utf8');
console.log(`Generated ${questions.length} questions → blooket_import.csv`);
