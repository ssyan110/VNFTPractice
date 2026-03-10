// Character Database: Single Source of Truth for individual characters
const charDatabase = [
    { char: '一', pinyin: 'yī', meaning: 'MỘT', radical: '一 (Nhất)' },
    { char: '八', pinyin: 'bā', meaning: 'TÁM', radical: '八 (Bát)' },
    { char: '五', pinyin: 'wǔ', meaning: 'NĂM' },
    { char: '不', pinyin: 'bù', meaning: 'KHÔNG', radical: '一 (Nhất)' },
    { char: '大', pinyin: 'dà', meaning: 'TO LỚN', radical: '大 (Đại)' },
    { char: '口', pinyin: 'kǒu', meaning: 'MIỆNG', radical: '口 (Bộ Khẩu)' },
    { char: '白', pinyin: 'bái', meaning: 'TRẮNG', radical: '白 (Bạch)' },
    { char: '女', pinyin: 'nǚ', meaning: 'PHỤ NỮ', radical: '女 (Bộ Nữ)' },
    { char: '你', pinyin: 'nǐ', meaning: 'BẠN', radical: '亻 (Nhân đứng)' },
    { char: '好', pinyin: 'hǎo', meaning: 'TỐT', radical: '女 (Bộ Nữ)' },
    { char: '马', pinyin: 'mǎ', meaning: 'NGỰA' },
    { char: '太', pinyin: 'tài', meaning: 'QUÁ, LẮM', radical: '大 (Đại)', similar: '大天' },
    { char: '汉', pinyin: 'hàn', meaning: 'HÁN' },
    { char: '语', pinyin: 'yǔ', meaning: 'NGÔN NGỮ', radical: '讠 (Bộ Ngôn)' },
    { char: '吗', pinyin: 'ma', meaning: 'KHÔNG (TRỢ TỪ)', radical: '口 (Bộ Khẩu)' },
    { char: '妈', pinyin: 'mā', meaning: 'MẸ', radical: '女 (Bộ Nữ)' },
    { char: '爸', pinyin: 'bà', meaning: 'BỐ' },
    { char: '很', pinyin: 'hěn', meaning: 'RẤT', radical: '彳 (Bộ Xích)' },
    { char: '忙', pinyin: 'máng', meaning: 'BẬN' },
    { char: '他', pinyin: 'tā', meaning: 'ANH ẤY', radical: '亻 (Nhân đứng)' },
    { char: '她', pinyin: 'tā', meaning: 'CÔ ẤY', radical: '女 (Bộ Nữ)' },
    { char: '难', pinyin: 'nán', meaning: 'KHÓ' },
    { char: '六', pinyin: 'liù', meaning: 'SÁU', radical: '八 (Bát)' },
    { char: '七', pinyin: 'qī', meaning: 'BẢY' },
    { char: '九', pinyin: 'jiǔ', meaning: 'CHÍN' },
    { char: '学', pinyin: 'xué', meaning: 'HỌC' },
    { char: '去', pinyin: 'qù', meaning: 'ĐI' },
    { char: '北', pinyin: 'běi', meaning: 'BẮC' },
    { char: '京', pinyin: 'jīng', meaning: 'KINH' },
    { char: '对', pinyin: 'duì', meaning: 'ĐÚNG' },
    { char: '明', pinyin: 'míng', meaning: 'SÁNG', radical: '日 (Nhật)' },
    { char: '天', pinyin: 'tiān', meaning: 'TRỜI, NGÀY', radical: '大 (Đại)', similar: '大太' },
    { char: '见', pinyin: 'jiàn', meaning: 'GẶP' },
    { char: '银', pinyin: 'yín', meaning: 'BẠC' },
    { char: '行', pinyin: 'háng', meaning: 'NGÂN HÀNG', radical: '彳 (Bộ Xích)' },
    { char: '二', pinyin: 'èr', meaning: 'HAI' }
];

// Vocabulary Database for words (2+ characters)
const vocabDatabase = [
    { word: '北京', chars: ['北', '京'], pinyin: 'běi jīng', meaning: 'Bắc Kinh' },
    { word: '汉语', chars: ['汉', '语'], pinyin: 'hàn yǔ', meaning: 'Tiếng Hán' },
    { word: '银行', chars: ['银', '行'], pinyin: 'yín háng', meaning: 'Ngân hàng' },
    { word: '明天', chars: ['明', '天'], pinyin: 'míng tiān', meaning: 'Ngày mai' },
    { word: '你好', chars: ['你', '好'], pinyin: 'nǐ hǎo', meaning: 'Xin chào' },
    { word: '爸爸', chars: ['爸', '爸'], pinyin: 'bà ba', meaning: 'Bố' },
    { word: '妈妈', chars: ['妈', '妈'], pinyin: 'mā ma', meaning: 'Mẹ' },
    { word: '很大', chars: ['很', '大'], pinyin: 'hěn dà', meaning: 'Rất to' },
    { word: '太忙', chars: ['太', '忙'], pinyin: 'tài máng', meaning: 'Quá bận' },
    { word: '不难', chars: ['不', '难'], pinyin: 'bù nán', meaning: 'Không khó' },
    { word: '很忙', chars: ['很', '忙'], pinyin: 'hěn máng', meaning: 'Rất bận' },
    { word: '去吗', chars: ['去', '吗'], pinyin: 'qù ma', meaning: 'Đi không?' }
];

// Sentences Database
const sentenceDatabase = [
    { vietnamese: "Anh ấy đi Bắc Kinh.", answer: ['他', '去', '北', '京'], chars: ['他', '去', '北', '京'], pinyin: "Wǒ bú qù běi jīng." },
    { vietnamese: "Tiếng Hán không khó.", answer: ['汉', '语', '不', '难'], chars: ['汉', '语', '不', '难'], pinyin: "Hàn yǔ bù nán." },
    { vietnamese: "Cô ấy rất bận.", answer: ['她', '很', '忙'], chars: ['她', '很', '忙'], pinyin: "Tā hěn máng." },
    { vietnamese: "Hẹn gặp lại ngày mai.", answer: ['明', '天', '见'], chars: ['明', '天', '见'], pinyin: "Míng tiān jiàn." },
    { vietnamese: "Mẹ bạn có khỏe không?", answer: ['你', '妈', '妈', '好', '吗'], chars: ['你', '妈', '妈', '好', '吗'], pinyin: "Nǐ mā ma hǎo ma?" },
    { vietnamese: "Bố anh ấy không đi ngân hàng.", answer: ['他', '爸', '爸', '不', '去', '银', '行'], chars: ['他', '爸', '爸', '不', '去', '银', '行'], pinyin: "Tā bà ba bù qù yín háng." },
    { vietnamese: "Tiếng Hán rất dễ học.", answer: ['汉', '语', '很', '好', '学'], chars: ['汉', '语', '很', '好', '学'], pinyin: "Hàn yǔ hěn hǎo xué." },
    { vietnamese: "Chào bạn.", answer: ['你', '好'], chars: ['你', '好'], pinyin: "Nǐ hǎo." },
    { vietnamese: "Cô ấy không đi Bắc Kinh.", answer: ['她', '不', '去', '北', '京'], chars: ['她', '不', '去', '北', '京'], pinyin: "Tā bù qù běi jīng." },
    { vietnamese: "Ngày mai đi ngân hàng.", answer: ['明', '天', '去', '银', '行'], chars: ['明', '天', '去', '银', '行'], pinyin: "Míng tiān qù yín háng." }
];

// Grammar/Context Database (For Fill In The Blanks)
const grammarDatabase = [
    { text_pre: "你", text_post: "吗?", vietnamese: "Bạn có khỏe không?", answer: '好' },
    { text_pre: "我很", text_post: "。", vietnamese: "Tôi rất bận.", answer: '忙' },
    { text_pre: "明", text_post: "见。", vietnamese: "Hẹn gặp lại ngày mai.", answer: '天' },
    { text_pre: "汉", text_post: "不难。", vietnamese: "Tiếng Hán không khó.", answer: '语' },
    { text_pre: "去北", text_post: "。", vietnamese: "Đi Bắc Kinh.", answer: '京' },
    { text_pre: "七", text_post: "九。", vietnamese: "Bảy, tám, chín.", answer: '八' },
    { text_pre: "不", text_post: "。", vietnamese: "Không đúng.", answer: '对' },
    { text_pre: "她很", text_post: "。", vietnamese: "Cô ấy rất tốt.", answer: '好' },
    { text_pre: "", text_post: "京很大。", vietnamese: "Bắc Kinh rất lớn.", answer: '北' },
    { text_pre: "去银", text_post: "。", vietnamese: "Đi ngân hàng.", answer: '行' }
];

// Core array of just strings for games that need random padding
const allWords = charDatabase.map(c => c.char);

// ============================================
// DYNAMIC GAME DATA GENERATORS
// ============================================

function generateGame1Data() {
    let radicalsMap = {};
    charDatabase.forEach(c => {
        if (c.radical) {
            if (!radicalsMap[c.radical]) radicalsMap[c.radical] = [];
            radicalsMap[c.radical].push(c.char);
        }
    });

    let data = Object.keys(radicalsMap).map(rad => {
        let targets = radicalsMap[rad];
        let others = allWords.filter(c => !targets.includes(c)).sort(() => 0.5 - Math.random());
        return {
            radical: rad,
            targets: targets,
            others: others.slice(0, 8 - Math.min(8, targets.length))
        };
    });
    return data.sort(() => 0.5 - Math.random()).slice(0, 10);
}

function generateGame2Data() {
    let data = [];
    let pool = [...charDatabase].sort(() => 0.5 - Math.random());
    for (let i = 0; i < Math.min(10, pool.length); i++) {
        let targetObj = pool[i];

        // Grab 4 different random characters that are NOT the target character
        let others = allWords.filter(c => c !== targetObj.char).sort(() => 0.5 - Math.random());
        let distractors = others.slice(0, 4);

        // Combine the 4 distractors with the 1 target
        let chars = [...distractors, targetObj.char];

        // Shuffle the 5 characters so the target isn't always at the end
        chars = chars.sort(() => 0.5 - Math.random());

        data.push({
            chars: chars,
            target: targetObj.char,
            hint: `Tìm chữ ${targetObj.meaning} (${targetObj.pinyin})`
        });
    }
    return data;
}

function generateGame3Data() {
    let data = [...grammarDatabase].sort(() => 0.5 - Math.random()).slice(0, 10);
    // Add multiple choice options dynamically
    return data.map(item => {
        let opts = [item.answer];
        let others = allWords.filter(c => c !== item.answer).sort(() => 0.5 - Math.random());
        opts.push(others[0], others[1]);
        return {
            ...item,
            options: opts.sort(() => 0.5 - Math.random())
        };
    });
}

function generateGame5Data() {
    let data = [...vocabDatabase].sort(() => 0.5 - Math.random()).slice(0, 10);
    // Map to the object structure the view expects
    return data.map(item => {
        return {
            chars: item.chars,
            hint: item.meaning
        };
    });
}

function generateGame6Data() {
    let pool = [];
    charDatabase.forEach(w => pool.push({ pinyin: w.pinyin, meaning: w.meaning, targets: [w.char] }));
    vocabDatabase.forEach(w => pool.push({ pinyin: w.pinyin, meaning: w.meaning, targets: w.chars }));
    sentenceDatabase.forEach(s => pool.push({ pinyin: s.pinyin, meaning: s.vietnamese, targets: s.chars }));

    return pool.sort(() => 0.5 - Math.random()).slice(0, 10);
}

function generateGame7Data() {
    return [...sentenceDatabase].sort(() => 0.5 - Math.random()).slice(0, 10);
}
