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
    { char: '二', pinyin: 'èr', meaning: 'HAI' },
    { char: '三', pinyin: 'sān', meaning: 'BA', radical: '一 (Nhất)' },
    { char: '四', pinyin: 'sì', meaning: 'BỐN', radical: '囗 (Vi)' },
    { char: '今', pinyin: 'jīn', meaning: 'HÔM NAY, BÂY GIỜ' },
    { char: '关', pinyin: 'guān', meaning: 'ĐÓNG, TẮT' },
    { char: '星', pinyin: 'xīng', meaning: 'SAO' },
    { char: '期', pinyin: 'qī', meaning: 'KỲ, TUẦN' },
    { char: '几', pinyin: 'jǐ', meaning: 'MẤY, BAO NHIÊU', radical: '几 (Kỷ)' },
    { char: '我', pinyin: 'wǒ', meaning: 'TÔI' },
    { char: '工', pinyin: 'gōng', meaning: 'CÔNG, VIỆC, CÔNG VIỆC, THỢ', radical: '工 (gōng) – bộ Công' },
    { char: '作', pinyin: 'zuò', meaning: 'LÀM, TẠO RA, SÁNG TẠO, LÀM VIỆC', radical: '亻 (rén) – bộ Nhân đứng' },
    { char: '日', pinyin: 'rì', meaning: 'MẶT TRỜI, NGÀY', radical: '日 (rì) – bộ Nhật' },
    { char: '是', pinyin: 'shì', meaning: 'LÀ, ĐÚNG, PHẢI', radical: '日 (rì) – bộ Nhật' },
    { char: '这', pinyin: 'zhè', meaning: 'ĐÂY, CÁI NÀY', radical: '辶 (chuò) – bộ Sước' },
    { char: '进', pinyin: 'jìn', meaning: 'VÀO, TIẾN VÀO', radical: '辶 (chuò) – bộ Sước' },
    { char: '老', pinyin: 'lǎo', meaning: 'GIÀ, LỚN TUỔI', radical: '老 (lǎo) – bộ Lão' },
    { char: '师', pinyin: 'shī', meaning: 'THẦY, GIÁO VIÊN', radical: '巾 (jīn) – bộ Cân' },
    { char: '身', pinyin: 'shēn', meaning: 'THÂN, CƠ THỂ', radical: '身 (shēn) – bộ Thân' },
    { char: '体', pinyin: 'tǐ', meaning: 'THÂN THỂ, CƠ THỂ', radical: '亻 (rén) – bộ Nhân đứng' },
    { char: '上', pinyin: 'shàng', meaning: 'TRÊN, LÊN', radical: '一 (yī) – bộ Nhất' },
    { char: '下', pinyin: 'xià', meaning: 'DƯỚI, XUỐNG', radical: '一 (yī) – bộ Nhất' },
    { char: '月', pinyin: 'yuè', meaning: 'MẶT TRĂNG, THÁNG', radical: '月 (yuè) – bộ Nguyệt' },
    { char: '生', pinyin: 'shēng', meaning: 'SINH, SỐNG', radical: '生 (shēng) – bộ Sinh' },
    { char: '了', pinyin: 'le', meaning: 'TRỢ TỪ HOÀN THÀNH', radical: '乙 (yǐ) – bộ Ất' },
    { char: '木', pinyin: 'mù', meaning: 'CÂY, GỖ', radical: '木 (mù) – bộ Mộc' },
    { char: '休', pinyin: 'xiū', meaning: 'NGHỈ NGƠI', radical: '亻 (rén) – bộ Nhân đứng' },
    { char: '亡', pinyin: 'wáng', meaning: 'MẤT, CHẾT', radical: '亠 (tóu) – bộ Đầu' },
    { char: '也', pinyin: 'yě', meaning: 'CŨNG', radical: '乙 (yǐ) – bộ Ất' },
    { char: '又', pinyin: 'yòu', meaning: 'LẠI, NỮA', radical: '又 (yòu) – bộ Hựu' },
    { char: '子', pinyin: 'zǐ', meaning: 'CON, ĐỨA TRẺ', radical: '子 (zǐ) – bộ Tử' },
    { char: '小', pinyin: 'xiǎo', meaning: 'NHỎ, BÉ', radical: '小 (xiǎo) – bộ Tiểu' },
    { char: '回', pinyin: 'huí', meaning: 'QUAY LẠI, TRỞ VỀ', radical: '囗 (wéi) – bộ Vi' },
    { char: '校', pinyin: 'xiào', meaning: 'TRƯỜNG HỌC', radical: '木 (mù) – bộ Mộc' },
    { char: '那', pinyin: 'nà', meaning: 'KIA, ĐÓ', radical: '阝 (yì) – bộ Ấp' },
    { char: '哪', pinyin: 'nǎ', meaning: 'NÀO, ĐÂU', radical: '口 (kǒu) – bộ Khẩu' },
    { char: '十', pinyin: 'shí', meaning: 'MƯỜI', radical: '十 (shí) – bộ Thập' },
    { char: '昨', pinyin: 'zuó', meaning: 'HÔM QUA', radical: '日 (rì) – bộ Nhật' },
    { char: '谢', pinyin: 'xiè', hanViet: 'tạ', meaning: 'CẢM ƠN, XIN LỖI, TỪ CHỐI, TÀN', radical: '讠 (yán) – bộ Ngôn', characterType: 'Hình thanh' },
    { char: '人', pinyin: 'rén', hanViet: 'nhân', meaning: 'NGƯỜI', radical: '人 (rén) – bộ Nhân', characterType: 'Tượng hình' },
    { char: '问', pinyin: 'wèn', hanViet: 'vấn', meaning: 'HỎI', radical: '门 (mén) – bộ Môn', characterType: 'Hình thanh' },
    { char: '叫', pinyin: 'jiào', hanViet: 'khiếu', meaning: 'GỌI, KÊU', radical: '口 (kǒu) – bộ Khẩu', characterType: 'Hình thanh' },
    { char: '门', pinyin: 'mén', hanViet: 'môn', meaning: 'CỬA', radical: '门 (mén) – bộ Môn', characterType: 'Tượng hình' },
    { char: '们', pinyin: 'men', hanViet: 'môn', meaning: 'TRỢ TỪ SỐ NHIỀU DÙNG SAU ĐẠI TỪ HOẶC TỪ CHỈ NGƯỜI', radical: '亻 (rén) – bộ Nhân đứng', characterType: 'Hình thanh' },
    { char: '名', pinyin: 'míng', meaning: 'TÊN, TÊN GỌI', radical: '夕 (xī) – bộ Tịch' },
    { char: '字', pinyin: 'zì', meaning: 'CHỮ, VĂN TỰ', radical: '子 (zǐ) – bộ Tử' },
    { char: '国', pinyin: 'guó', meaning: 'NƯỚC, QUỐC GIA', radical: '囗 (wéi) – bộ Vi' },
    { char: '中', pinyin: 'zhōng', meaning: 'Ở GIỮA, TRUNG TÂM', radical: '丨 (gǔn) – bộ Cổn' },
    { char: '文', pinyin: 'wén', meaning: 'VĂN, CHỮ VIẾT', radical: '文 (wén) – bộ Văn' }
];

// Keep this list in sync with characters_learned.md so game 2 only uses
// learned characters and covers the full learned set.
const learnedCharacters = [
    '一', '八', '五', '不', '大', '口', '白', '女', '你', '好', '马',
    '太', '汉', '语', '吗', '妈', '爸', '很', '忙', '他', '她', '难',
    '六', '七', '九', '学', '去', '北', '京', '对', '明', '天', '见',
    '银', '行', '二', '三', '四', '今', '关', '星', '期', '几', '我',
    '工', '作', '日', '是', '这', '进', '老', '师', '身', '体', '上',
    '下', '月', '生', '了', '木', '休', '亡', '也', '又', '子', '小',
    '回', '校', '那', '哪', '十', '昨', '谢', '人', '问', '叫', '门',
    '们', '名', '字', '国', '中', '文'
];
const learnedCharacterSet = new Set(learnedCharacters);

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
    { word: '去吗', chars: ['去', '吗'], pinyin: 'qù ma', meaning: 'Đi không?' },
    { word: '今天', chars: ['今', '天'], pinyin: 'jīn tiān', meaning: 'Hôm nay' },
    { word: '星期', chars: ['星', '期'], pinyin: 'xīng qī', meaning: 'Tuần / thứ' },
    { word: '星期一', chars: ['星', '期', '一'], pinyin: 'xīng qī yī', meaning: 'Thứ hai' },
    { word: '星期二', chars: ['星', '期', '二'], pinyin: 'xīng qī èr', meaning: 'Thứ ba' },
    { word: '星期三', chars: ['星', '期', '三'], pinyin: 'xīng qī sān', meaning: 'Thứ tư' },
    { word: '星期四', chars: ['星', '期', '四'], pinyin: 'xīng qī sì', meaning: 'Thứ năm' },
    { word: '星期五', chars: ['星', '期', '五'], pinyin: 'xīng qī wǔ', meaning: 'Thứ sáu' },
    { word: '星期六', chars: ['星', '期', '六'], pinyin: 'xīng qī liù', meaning: 'Thứ bảy' },
    { word: '星期天', chars: ['星', '期', '天'], pinyin: 'xīng qī tiān', meaning: 'Chủ nhật' },
    { word: '几天', chars: ['几', '天'], pinyin: 'jǐ tiān', meaning: 'Mấy ngày' },
    { word: '今天见', chars: ['今', '天', '见'], pinyin: 'jīn tiān jiàn', meaning: 'Hôm nay gặp' },
    { word: '今天去', chars: ['今', '天', '去'], pinyin: 'jīn tiān qù', meaning: 'Hôm nay đi' },
    { word: '今天很忙', chars: ['今', '天', '很', '忙'], pinyin: 'jīn tiān hěn máng', meaning: 'Hôm nay rất bận' },
    { word: '明天去', chars: ['明', '天', '去'], pinyin: 'míng tiān qù', meaning: 'Ngày mai đi' },
    { word: '明天很忙', chars: ['明', '天', '很', '忙'], pinyin: 'míng tiān hěn máng', meaning: 'Ngày mai rất bận' },
    { word: '大学', chars: ['大', '学'], pinyin: 'dà xué', meaning: 'Đại học' },
    { word: '北京大学', chars: ['北', '京', '大', '学'], pinyin: 'běi jīng dà xué', meaning: 'Đại học Bắc Kinh' },
    { word: '好吗', chars: ['好', '吗'], pinyin: 'hǎo ma', meaning: 'Có khỏe / tốt không?' },
    { word: '对吗', chars: ['对', '吗'], pinyin: 'duì ma', meaning: 'Đúng không?' },
    { word: '工作', chars: ['工', '作'], pinyin: 'gōng zuò', meaning: 'Công việc / Làm việc' },
    { word: '这是', chars: ['这', '是'], pinyin: 'zhè shì', meaning: 'Đây là' },
    { word: '是吗', chars: ['是', '吗'], pinyin: 'shì ma', meaning: 'Phải không / Vậy sao?' },
    { word: '不去', chars: ['不', '去'], pinyin: 'bù qù', meaning: 'Không đi' },
    { word: '不见', chars: ['不', '见'], pinyin: 'bú jiàn', meaning: 'Không gặp' },
    { word: '太好', chars: ['太', '好'], pinyin: 'tài hǎo', meaning: 'Quá tốt' },
    { word: '白马', chars: ['白', '马'], pinyin: 'bái mǎ', meaning: 'Ngựa trắng' },
    { word: '大马', chars: ['大', '马'], pinyin: 'dà mǎ', meaning: 'Ngựa lớn' },
    { word: '这几天', chars: ['这', '几', '天'], pinyin: 'zhè jǐ tiān', meaning: 'Mấy ngày nay' },
    { word: '星期日', chars: ['星', '期', '日'], pinyin: 'xīng qī rì', meaning: 'Chủ nhật' },
    { word: '三天', chars: ['三', '天'], pinyin: 'sān tiān', meaning: 'Ba ngày' },
    { word: '进去', chars: ['进', '去'], pinyin: 'jìn qù', meaning: 'Đi vào' },
    { word: '老师', chars: ['老', '师'], pinyin: 'lǎo shī', meaning: 'Giáo viên' },
    { word: '身体', chars: ['身', '体'], pinyin: 'shēn tǐ', meaning: 'Cơ thể / Sức khỏe' },
    { word: '名字', chars: ['名', '字'], pinyin: 'míng zì', meaning: 'Tên' },
    { word: '中国', chars: ['中', '国'], pinyin: 'zhōng guó', meaning: 'Trung Quốc' },
    { word: '中文', chars: ['中', '文'], pinyin: 'zhōng wén', meaning: 'Tiếng Trung' },
    { word: '中国人', chars: ['中', '国', '人'], pinyin: 'zhōng guó rén', meaning: 'Người Trung Quốc' },
    { word: '汉字', chars: ['汉', '字'], pinyin: 'hàn zì', meaning: 'Chữ Hán' },
    { word: '国人', chars: ['国', '人'], pinyin: 'guó rén', meaning: 'Người trong nước' },
    { word: '文字', chars: ['文', '字'], pinyin: 'wén zì', meaning: 'Văn tự / Chữ viết' }
];

// Sentences Database
const sentenceDatabase = [
    { vietnamese: "Chào bạn.", answer: ['你', '好'], chars: ['你', '好'], pinyin: "Nǐ hǎo." },
    { vietnamese: "Bạn có khỏe không?", answer: ['你', '好', '吗'], chars: ['你', '好', '吗'], pinyin: "Nǐ hǎo ma?" },
    { vietnamese: "Mẹ bạn có khỏe không?", answer: ['你', '妈', '妈', '好', '吗'], chars: ['你', '妈', '妈', '好', '吗'], pinyin: "Nǐ mā ma hǎo ma?" },
    { vietnamese: "Bố bạn có bận không?", answer: ['你', '爸', '爸', '忙', '吗'], chars: ['你', '爸', '爸', '忙', '吗'], pinyin: "Nǐ bà ba máng ma?" },
    { vietnamese: "Tôi không bận.", answer: ['我', '不', '忙'], chars: ['我', '不', '忙'], pinyin: "Wǒ bù máng." },
    { vietnamese: "Anh ấy rất tốt.", answer: ['他', '很', '好'], chars: ['他', '很', '好'], pinyin: "Tā hěn hǎo." },
    { vietnamese: "Cô ấy rất bận.", answer: ['她', '很', '忙'], chars: ['她', '很', '忙'], pinyin: "Tā hěn máng." },
    { vietnamese: "Tiếng Hán không khó.", answer: ['汉', '语', '不', '难'], chars: ['汉', '语', '不', '难'], pinyin: "Hàn yǔ bù nán." },
    { vietnamese: "Bạn học tiếng Hán không?", answer: ['你', '学', '汉', '语', '吗'], chars: ['你', '学', '汉', '语', '吗'], pinyin: "Nǐ xué Hàn yǔ ma?" },
    { vietnamese: "Tôi học tiếng Hán.", answer: ['我', '学', '汉', '语'], chars: ['我', '学', '汉', '语'], pinyin: "Wǒ xué Hàn yǔ." },
    { vietnamese: "Cô ấy học tiếng Hán.", answer: ['她', '学', '汉', '语'], chars: ['她', '学', '汉', '语'], pinyin: "Tā xué Hàn yǔ." },
    { vietnamese: "Bắc Kinh rất lớn.", answer: ['北', '京', '很', '大'], chars: ['北', '京', '很', '大'], pinyin: "Běi jīng hěn dà." },
    { vietnamese: "Bạn đi Bắc Kinh không?", answer: ['你', '去', '北', '京', '吗'], chars: ['你', '去', '北', '京', '吗'], pinyin: "Nǐ qù Běi jīng ma?" },
    { vietnamese: "Tôi đi Bắc Kinh.", answer: ['我', '去', '北', '京'], chars: ['我', '去', '北', '京'], pinyin: "Wǒ qù Běi jīng." },
    { vietnamese: "Anh ấy không đi Bắc Kinh.", answer: ['他', '不', '去', '北', '京'], chars: ['他', '不', '去', '北', '京'], pinyin: "Tā bù qù Běi jīng." },
    { vietnamese: "Cô ấy đi ngân hàng không?", answer: ['她', '去', '银', '行', '吗'], chars: ['她', '去', '银', '行', '吗'], pinyin: "Tā qù yín háng ma?" },
    { vietnamese: "Hôm nay tôi đi ngân hàng.", answer: ['今', '天', '我', '去', '银', '行'], chars: ['今', '天', '我', '去', '银', '行'], pinyin: "Jīn tiān wǒ qù yín háng." },
    { vietnamese: "Hôm nay anh ấy rất bận.", answer: ['今', '天', '他', '很', '忙'], chars: ['今', '天', '他', '很', '忙'], pinyin: "Jīn tiān tā hěn máng." },
    { vietnamese: "Ngày mai gặp.", answer: ['明', '天', '见'], chars: ['明', '天', '见'], pinyin: "Míng tiān jiàn." },
    { vietnamese: "Ngày mai tôi đi Bắc Kinh.", answer: ['明', '天', '我', '去', '北', '京'], chars: ['明', '天', '我', '去', '北', '京'], pinyin: "Míng tiān wǒ qù Běi jīng." },
    { vietnamese: "Hôm nay là thứ mấy?", answer: ['今', '天', '星', '期', '几'], chars: ['今', '天', '星', '期', '几'], pinyin: "Jīn tiān xīng qī jǐ?" },
    { vietnamese: "Hôm nay là thứ ba.", answer: ['今', '天', '星', '期', '二'], chars: ['今', '天', '星', '期', '二'], pinyin: "Jīn tiān xīng qī èr." },
    { vietnamese: "Hôm nay là thứ tư.", answer: ['今', '天', '星', '期', '三'], chars: ['今', '天', '星', '期', '三'], pinyin: "Jīn tiān xīng qī sān." },
    { vietnamese: "Thứ sáu gặp.", answer: ['星', '期', '五', '见'], chars: ['星', '期', '五', '见'], pinyin: "Xīng qī wǔ jiàn." },
    { vietnamese: "Thứ bảy tôi không bận.", answer: ['星', '期', '六', '我', '不', '忙'], chars: ['星', '期', '六', '我', '不', '忙'], pinyin: "Xīng qī liù wǒ bù máng." },
    { vietnamese: "Chủ nhật anh ấy đi Bắc Kinh.", answer: ['星', '期', '天', '他', '去', '北', '京'], chars: ['星', '期', '天', '他', '去', '北', '京'], pinyin: "Xīng qī tiān tā qù Běi jīng." },
    { vietnamese: "Bố mẹ tôi rất bận.", answer: ['我', '爸', '妈', '很', '忙'], chars: ['我', '爸', '妈', '很', '忙'], pinyin: "Wǒ bà mā hěn máng." },
    { vietnamese: "Mẹ anh ấy rất tốt.", answer: ['他', '妈', '妈', '很', '好'], chars: ['他', '妈', '妈', '很', '好'], pinyin: "Tā mā ma hěn hǎo." },
    { vietnamese: "Bạn sinh nhật vào thứ mấy?", answer: ['你', '星', '期', '几', '生', '日'], chars: ['你', '星', '期', '几', '生', '日'], pinyin: "Nǐ xīng qī jǐ shēng rì?" },
    { vietnamese: "Hôm nay là thứ mấy? Mẹ đi gặp bố không?", answer: ['今', '天', '星', '期', '几', '妈', '妈', '去', '见', '爸', '爸', '吗'], chars: ['今', '天', '星', '期', '几', '妈', '妈', '去', '见', '爸', '爸', '吗'], pinyin: "Jīn tiān xīng qī jǐ? Mā ma qù jiàn bà ba ma?" },
    { vietnamese: "Hôm nay thứ mấy?", answer: ['今', '天', '星', '期', '几'], chars: ['今', '天', '星', '期', '几'], pinyin: "Jīn tiān xīng qī jǐ?" },
    { vietnamese: "Ngày mai tôi về trường.", answer: ['明', '天', '我', '回', '学', '校'], chars: ['明', '天', '我', '回', '学', '校'], pinyin: "Míng tiān wǒ huí xué xiào." },
    { vietnamese: "Ngày mai bạn đi đâu?", answer: ['你', '明', '天', '去', '哪'], chars: ['你', '明', '天', '去', '哪'], pinyin: "Nǐ míng tiān qù nǎ?" },
    { vietnamese: "Hôm nay làm việc bận không?", answer: ['今', '天', '工', '作', '忙', '吗'], chars: ['今', '天', '工', '作', '忙', '吗'], pinyin: "Jīn tiān gōng zuò máng ma?" },
    { vietnamese: "Thứ sáu gặp!", answer: ['星', '期', '五', '见'], chars: ['星', '期', '五', '见'], pinyin: "Xīng qī wǔ jiàn!" },
    { vietnamese: "Tiểu Minh là sinh viên đại học phải không?", answer: ['小', '明', '是', '大', '学', '生', '吗'], chars: ['小', '明', '是', '大', '学', '生', '吗'], pinyin: "Xiǎo míng shì dà xué shēng ma?" },
    { vietnamese: "Hôm nay là ngày 9 tháng 10.", answer: ['今', '天', '是', '十', '月', '九', '日'], chars: ['今', '天', '是', '十', '月', '九', '日'], pinyin: "Jīn tiān shì shí yuè jiǔ rì." },
    { vietnamese: "Đây là mẹ tôi.", answer: ['这', '是', '我', '妈', '妈'], chars: ['这', '是', '我', '妈', '妈'], pinyin: "Zhè shì wǒ mā ma." },
    { vietnamese: "Ngày mai bạn đi ngân hàng làm việc không?", answer: ['你', '明', '天', '去', '银', '行', '工', '作', '吗'], chars: ['你', '明', '天', '去', '银', '行', '工', '作', '吗'], pinyin: "Nǐ míng tiān qù yín háng gōng zuò ma?" },
    { vietnamese: "Đây là bố tôi.", answer: ['这', '是', '我', '爸', '爸'], chars: ['这', '是', '我', '爸', '爸'], pinyin: "Zhè shì wǒ bà ba." },
    { vietnamese: "Ngày mai anh ấy đi Bắc Kinh làm việc.", answer: ['他', '明', '天', '去', '北', '京', '工', '作'], chars: ['他', '明', '天', '去', '北', '京', '工', '作'], pinyin: "Tā míng tiān qù běi jīng gōng zuò." },
    { vietnamese: "Chủ nhật tôi không làm việc.", answer: ['星', '期', '日', '我', '不', '工', '作'], chars: ['星', '期', '日', '我', '不', '工', '作'], pinyin: "Xīng qī rì wǒ bù gōng zuò." },
    { vietnamese: "Mấy ngày nay tôi rất bận.", answer: ['这', '几', '天', '我', '很', '忙'], chars: ['这', '几', '天', '我', '很', '忙'], pinyin: "Zhè jǐ tiān wǒ hěn máng." },
    { vietnamese: "Ngày ngày học tiếng Hán, tiếng Hán không khó.", answer: ['天', '天', '学', '汉', '语', '汉', '语', '不', '难'], chars: ['天', '天', '学', '汉', '语', '汉', '语', '不', '难'], pinyin: "Tiān tiān xué hàn yǔ, hàn yǔ bù nán." },
    { vietnamese: "Bạn không phải là mẹ của tôi.", answer: ['你', '不', '是', '我', '妈', '妈'], chars: ['你', '不', '是', '我', '妈', '妈'], pinyin: "Nǐ bú shì wǒ mā ma." },
    { vietnamese: "Đây là ngựa trắng, đúng không?", answer: ['这', '是', '白', '马', '对', '吗'], chars: ['这', '是', '白', '马', '对', '吗'], pinyin: "Zhè shì bái mǎ, duì ma?" },
    { vietnamese: "Hôm nay anh ấy đi ngân hàng làm việc phải không?", answer: ['今', '天', '他', '去', '银', '行', '工', '作', '吗'], chars: ['今', '天', '他', '去', '银', '行', '工', '作', '吗'], pinyin: "Jīn tiān tā qù yín háng gōng zuò ma?" },
    { vietnamese: "Bắc Kinh lớn không?", answer: ['北', '京', '大', '吗'], chars: ['北', '京', '大', '吗'], pinyin: "Běi jīng dà ma?" },
    { vietnamese: "Hôm nay anh ấy không làm việc, đi Bắc Kinh gặp bố tôi.", answer: ['他', '今', '天', '不', '工', '作', '去', '北', '京', '见', '我', '爸', '爸'], chars: ['他', '今', '天', '不', '工', '作', '去', '北', '京', '见', '我', '爸', '爸'], pinyin: "Tā jīn tiān bù gōng zuò, qù běi jīng jiàn wǒ bà ba." },
    { vietnamese: "Mấy ngày nay rất bận, tôi không đi làm.", answer: ['这', '几', '天', '很', '忙', '我', '不', '去', '工', '作'], chars: ['这', '几', '天', '很', '忙', '我', '不', '去', '工', '作'], pinyin: "Zhè jǐ tiān hěn máng, wǒ bù qù gōng zuò." },
    { vietnamese: "Chủ nhật không phải là ngày làm việc.", answer: ['星', '期', '日', '不', '是', '工', '作', '日'], chars: ['星', '期', '日', '不', '是', '工', '作', '日'], pinyin: "Xīng qī rì bú shì gōng zuò rì." },
    { vietnamese: "Bạn thứ mấy về Bắc Kinh?", answer: ['你', '星', '期', '几', '回', '去', '北', '京'], chars: ['你', '星', '期', '几', '回', '去', '北', '京'], pinyin: "Nǐ xīng qī jǐ huí qù běi jīng?" },
    { vietnamese: "Người nào là bố bạn?", answer: ['哪', '个', '人', '是', '你', '爸', '爸'], chars: ['哪', '个', '人', '是', '你', '爸', '爸'], pinyin: "Nǎ ge rén shì nǐ bà ba?" },
    { vietnamese: "Người kia không phải là mẹ tôi.", answer: ['那', '个', '人', '不', '是', '我', '妈', '妈'], chars: ['那', '个', '人', '不', '是', '我', '妈', '妈'], pinyin: "Nà ge rén bú shì wǒ mā ma." },
    { vietnamese: "Ngân hàng thứ mấy đóng cửa?", answer: ['银', '行', '星', '期', '几', '关'], chars: ['银', '行', '星', '期', '几', '关'], pinyin: "Yín háng xīng qī jǐ guān?" },
    { vietnamese: "Tôi vào trường gặp giáo viên.", answer: ['我', '进', '去', '学', '校', '见', '老', '师'], chars: ['我', '进', '去', '学', '校', '见', '老', '师'], pinyin: "Wǒ jìn qù xué xiào jiàn lǎo shī." },
    { vietnamese: "Đây là bố tôi, sức khỏe ông ấy không tốt lắm.", answer: ['这', '是', '我', '爸', '爸', '他', '身', '体', '不', '太', '好'], chars: ['这', '是', '我', '爸', '爸', '他', '身', '体', '不', '太', '好'], pinyin: "Zhè shì wǒ bà ba, tā shēn tǐ bú tài hǎo." },
    { vietnamese: "Cảm ơn bạn, hôm nay tôi không đi làm.", answer: ['谢', '谢', '你', '我', '今', '天', '不', '去', '工', '作'], chars: ['谢', '谢', '你', '我', '今', '天', '不', '去', '工', '作'], pinyin: "Xiè xie nǐ, wǒ jīn tiān bú qù gōng zuò." },
    { vietnamese: "Giáo viên bảo tôi đến trường, vậy giáo viên có bảo bạn đến trường không?", answer: ['老', '师', '叫', '我', '去', '学', '校', '那', '老', '师', '叫', '你', '去', '学', '校', '吗'], chars: ['老', '师', '叫', '我', '去', '学', '校', '那', '老', '师', '叫', '你', '去', '学', '校', '吗'], pinyin: "Lǎo shī jiào wǒ qù xué xiào, nà lǎo shī jiào nǐ qù xué xiào ma?" },
    { vietnamese: "Bạn thứ mấy vào ngân hàng làm việc?", answer: ['你', '星', '期', '几', '进', '银', '行', '工', '作'], chars: ['你', '星', '期', '几', '进', '银', '行', '工', '作'], pinyin: "Nǐ xīng qī jǐ jìn yín háng gōng zuò?" },
    { vietnamese: "Hôm nay tôi đến trường gặp giáo viên.", answer: ['我', '今', '天', '去', '学', '校', '见', '老', '师'], chars: ['我', '今', '天', '去', '学', '校', '见', '老', '师'], pinyin: "Wǒ jīn tiān qù xué xiào jiàn lǎo shī." },
    { vietnamese: "Giáo viên bảo tôi đến trường.", answer: ['老', '师', '叫', '我', '去', '学', '校'], chars: ['老', '师', '叫', '我', '去', '学', '校'], pinyin: "Lǎo shī jiào wǒ qù xué xiào." },
    { vietnamese: "Thầy Bạch thứ năm vào trường không?", answer: ['白', '老', '师', '星', '期', '四', '进', '学', '校', '吗'], chars: ['白', '老', '师', '星', '期', '四', '进', '学', '校', '吗'], pinyin: "Bái lǎo shī xīng qī sì jìn xué xiào ma?" },
    { vietnamese: "Hôm nay tôi sức khỏe không tốt, không đi làm.", answer: ['我', '今', '天', '身', '体', '不', '好', '不', '去', '工', '作'], chars: ['我', '今', '天', '身', '体', '不', '好', '不', '去', '工', '作'], pinyin: "Wǒ jīn tiān shēn tǐ bù hǎo, bú qù gōng zuò." },
    { vietnamese: "Tôi đi vào trường gặp giáo viên.", answer: ['我', '进', '去', '学', '校', '见', '老', '师'], chars: ['我', '进', '去', '学', '校', '见', '老', '师'], pinyin: "Wǒ jìn qù xué xiào jiàn lǎo shī." },
    { vietnamese: "Mẹ tôi hỏi giáo viên sức khỏe tốt không?", answer: ['我', '妈', '妈', '问', '老', '师', '身', '体', '好', '吗'], chars: ['我', '妈', '妈', '问', '老', '师', '身', '体', '好', '吗'], pinyin: "Wǒ mā ma wèn lǎo shī shēn tǐ hǎo ma?" },
    { vietnamese: "Đây là bố tôi, sức khỏe ông ấy không được tốt lắm.", answer: ['这', '是', '我', '爸', '爸', '他', '身', '体', '不', '太', '好'], chars: ['这', '是', '我', '爸', '爸', '他', '身', '体', '不', '太', '好'], pinyin: "Zhè shì wǒ bà ba, tā shēn tǐ bú tài hǎo." },
    { vietnamese: "Cảm ơn bạn, hôm nay tôi không đi làm.", answer: ['谢', '谢', '你', '我', '今', '天', '不', '去', '工', '作'], chars: ['谢', '谢', '你', '我', '今', '天', '不', '去', '工', '作'], pinyin: "Xiè xie nǐ, wǒ jīn tiān bú qù gōng zuò." },
    { vietnamese: "Giáo viên bảo tôi đến trường, vậy giáo viên bảo bạn đến trường không?", answer: ['老', '师', '叫', '我', '去', '学', '校', '那', '老', '师', '叫', '你', '去', '学', '校', '吗'], chars: ['老', '师', '叫', '我', '去', '学', '校', '那', '老', '师', '叫', '你', '去', '学', '校', '吗'], pinyin: "Lǎo shī jiào wǒ qù xué xiào, nà lǎo shī jiào nǐ qù xué xiào ma?" },
    { vietnamese: "Bạn thứ mấy vào ngân hàng làm việc?", answer: ['你', '星', '期', '几', '进', '银', '行', '工', '作'], chars: ['你', '星', '期', '几', '进', '银', '行', '工', '作'], pinyin: "Nǐ xīng qī jǐ jìn yín háng gōng zuò?" },
    { vietnamese: "Thầy Bạch thứ năm vào trường không?", answer: ['白', '老', '师', '星', '期', '四', '进', '学', '校', '吗'], chars: ['白', '老', '师', '星', '期', '四', '进', '学', '校', '吗'], pinyin: "Bái lǎo shī xīng qī sì jìn xué xiào ma?" },
    { vietnamese: "Bố bảo tôi đi Bắc Kinh học tiếng Hán.", answer: ['爸', '爸', '叫', '我', '去', '北', '京', '学', '汉', '语'], chars: ['爸', '爸', '叫', '我', '去', '北', '京', '学', '汉', '语'], pinyin: "Bà ba jiào wǒ qù běi jīng xué hàn yǔ." },
    { vietnamese: "Bố hỏi tôi ngày mai đi đâu làm việc?", answer: ['爸', '爸', '问', '我', '明', '天', '去', '哪', '工', '作'], chars: ['爸', '爸', '问', '我', '明', '天', '去', '哪', '工', '作'], pinyin: "Bà ba wèn wǒ míng tiān qù nǎ gōng zuò?" },
    { vietnamese: "Bạn tên gì?", answer: ['你', '叫', '什', '么', '名', '字'], chars: ['你', '叫', '什', '么', '名', '字'], pinyin: "Nǐ jiào shén me míng zì?" },
    { vietnamese: "Anh ấy là người Trung Quốc.", answer: ['他', '是', '中', '国', '人'], chars: ['他', '是', '中', '国', '人'], pinyin: "Tā shì zhōng guó rén." },
    { vietnamese: "Tôi học tiếng Trung.", answer: ['我', '学', '中', '文'], chars: ['我', '学', '中', '文'], pinyin: "Wǒ xué zhōng wén." },
    { vietnamese: "Chữ Hán không khó.", answer: ['汉', '字', '不', '难'], chars: ['汉', '字', '不', '难'], pinyin: "Hàn zì bù nán." },
    { vietnamese: "Trung Quốc rất lớn.", answer: ['中', '国', '很', '大'], chars: ['中', '国', '很', '大'], pinyin: "Zhōng guó hěn dà." },
    { vietnamese: "Cô ấy tên gì?", answer: ['她', '叫', '什', '么', '名', '字'], chars: ['她', '叫', '什', '么', '名', '字'], pinyin: "Tā jiào shén me míng zì?" },
    { vietnamese: "Bạn là người nước nào?", answer: ['你', '是', '哪', '国', '人'], chars: ['你', '是', '哪', '国', '人'], pinyin: "Nǐ shì nǎ guó rén?" }
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
    { text_pre: "去银", text_post: "。", vietnamese: "Đi ngân hàng.", answer: '行' },
    { text_pre: "今", text_post: "很忙。", vietnamese: "Hôm nay rất bận.", answer: '天' },
    { text_pre: "明", text_post: "去银行。", vietnamese: "Ngày mai đi ngân hàng.", answer: '天' },
    { text_pre: "星", text_post: "三。", vietnamese: "Thứ tư.", answer: '期' },
    { text_pre: "星期", text_post: "。", vietnamese: "Thứ ba.", answer: '二' },
    { text_pre: "星期", text_post: "。", vietnamese: "Thứ năm.", answer: '四' },
    { text_pre: "你学汉语", text_post: "？", vietnamese: "Bạn học tiếng Hán không?", answer: '吗' },
    { text_pre: "你去北", text_post: "吗？", vietnamese: "Bạn đi Bắc Kinh không?", answer: '京' },
    { text_pre: "北", text_post: "很大。", vietnamese: "Bắc Kinh rất lớn.", answer: '京' },
    { text_pre: "他不", text_post: "。", vietnamese: "Anh ấy không bận.", answer: '忙' },
    { text_pre: "今", text_post: "见。", vietnamese: "Hôm nay gặp.", answer: '天' },
    { text_pre: "去银", text_post: "吗？", vietnamese: "Đi ngân hàng không?", answer: '行' },
    { text_pre: "几", text_post: "？", vietnamese: "Mấy ngày?", answer: '天' },
    { text_pre: "今天星期", text_post: "？", vietnamese: "Hôm nay là thứ mấy?", answer: '几' },
    { text_pre: "这", text_post: "你妈妈吗？", vietnamese: "Đây là mẹ bạn phải không?", answer: '是' },
    { text_pre: "你叫什么", text_post: "字？", vietnamese: "Bạn tên gì?", answer: '名' },
    { text_pre: "他是中", text_post: "人。", vietnamese: "Anh ấy là người Trung Quốc.", answer: '国' },
    { text_pre: "我学", text_post: "文。", vietnamese: "Tôi học tiếng Trung.", answer: '中' },
    { text_pre: "汉", text_post: "不难。", vietnamese: "Chữ Hán không khó.", answer: '字' },
    { text_pre: "中国很", text_post: "。", vietnamese: "Trung Quốc rất lớn.", answer: '大' },
    { text_pre: "中", text_post: "不难。", vietnamese: "Tiếng Trung không khó.", answer: '文' }
];

const sentenceRevealDatabase = [
    { chinese: '汉语不难。', vietnamese: 'Tiếng Hán không khó.' },
    { chinese: '我学汉语。', vietnamese: 'Tôi học tiếng Hán.' },
    { chinese: '你学汉语吗？', vietnamese: 'Bạn học tiếng Hán không?' },
    { chinese: '我爸爸很好，你爸爸好吗？', vietnamese: 'Bố tôi rất khỏe, bố bạn có khỏe không?' },
    { chinese: '妈妈今天很忙。', vietnamese: 'Hôm nay mẹ rất bận.' },
    { chinese: '我去银行。', vietnamese: 'Tôi đi ngân hàng.' },
    { chinese: '她去北京几天？', vietnamese: 'Cô ấy đi Bắc Kinh mấy ngày?' },
    { chinese: '他去银行吗？', vietnamese: 'Anh ấy đi ngân hàng không?' },
    { chinese: '我去了北京，北京很大。', vietnamese: 'Tôi đã đi Bắc Kinh, Bắc Kinh rất lớn.' },
    { chinese: '明天见！', vietnamese: 'Hẹn gặp ngày mai!' },
    { chinese: '今天我去见妈妈。', vietnamese: 'Hôm nay tôi đi gặp mẹ.' },
    { chinese: '星期几你去银行？', vietnamese: 'Thứ mấy bạn đi ngân hàng?' },
    { chinese: '明天我很忙。', vietnamese: 'Ngày mai tôi rất bận.' },
    { chinese: '今天星期几？', vietnamese: 'Hôm nay là thứ mấy?' },
    { chinese: '今天星期三。', vietnamese: 'Hôm nay là thứ tư.' },
    { chinese: '明天星期日吗？', vietnamese: 'Ngày mai chủ nhật phải không?' },
    { chinese: '今天星期三，我去银行见妈妈。', vietnamese: 'Hôm nay là thứ tư, tôi đi ngân hàng gặp mẹ.' },
    { chinese: '明天星期四，他去北京见爸爸。', vietnamese: 'Ngày mai là thứ năm, anh ấy đi Bắc Kinh gặp bố.' },
    { chinese: '明天我去北京见妈妈，不见爸爸。', vietnamese: 'Ngày mai tôi đi Bắc Kinh gặp mẹ, không gặp bố.' },
    { chinese: '今天星期三，我学汉语，她去银行见妈妈。', vietnamese: 'Hôm nay là thứ tư, tôi học tiếng Hán, cô ấy đi ngân hàng gặp mẹ.' },
    { chinese: '明天星期四，我去北京见爸爸，不见妈妈。妈妈很忙，爸爸不忙。', vietnamese: 'Ngày mai là thứ năm, tôi đi Bắc Kinh gặp bố, không gặp mẹ. Mẹ rất bận, bố không bận.' },
    { chinese: '今天星期几？', vietnamese: 'Hôm nay thứ mấy?' },
    { chinese: '明天我回学校。', vietnamese: 'Ngày mai tôi về trường.' },
    { chinese: '你明天去哪？', vietnamese: 'Ngày mai bạn đi đâu?' },
    { chinese: '今天工作忙吗？', vietnamese: 'Hôm nay làm việc bận không?' },
    { chinese: '星期五见！', vietnamese: 'Thứ sáu gặp!' },
    { chinese: '小明是大学生吗？', vietnamese: 'Tiểu Minh là sinh viên đại học phải không?' },
    { chinese: '今天是十月九日。', vietnamese: 'Hôm nay là ngày 9 tháng 10.' },
    { chinese: '这是我妈妈。', vietnamese: 'Đây là mẹ tôi.' },
    { chinese: '你明天去银行工作吗？', vietnamese: 'Ngày mai bạn đi ngân hàng làm việc không?' },
    { chinese: '这是我爸爸。', vietnamese: 'Đây là bố tôi.' },
    { chinese: '他明天去北京工作。', vietnamese: 'Ngày mai anh ấy đi Bắc Kinh làm việc.' },
    { chinese: '星期日我不工作。', vietnamese: 'Chủ nhật tôi không làm việc.' },
    { chinese: '这几天我很忙。', vietnamese: 'Mấy ngày nay tôi rất bận.' },
    { chinese: '天天学汉语，汉语不难。', vietnamese: 'Ngày ngày học tiếng Hán, tiếng Hán không khó.' },
    { chinese: '你不是我妈妈。', vietnamese: 'Bạn không phải là mẹ của tôi.' },
    { chinese: '这是白马，对吗？', vietnamese: 'Đây là ngựa trắng, đúng không?' },
    { chinese: '今天他去银行工作吗？', vietnamese: 'Hôm nay anh ấy đi ngân hàng làm việc phải không?' },
    { chinese: '北京大吗？', vietnamese: 'Bắc Kinh lớn không?' },
    { chinese: '他今天不工作，去北京见我爸爸。', vietnamese: 'Hôm nay anh ấy không làm việc, đi Bắc Kinh gặp bố tôi.' },
    { chinese: '银行星期六、星期日关', vietnamese: 'Ngân hàng đóng cửa thứ Bảy, Chủ Nhật.' },
    { chinese: '你一星期去学校几天？', vietnamese: 'Một tuần bạn đến trường mấy ngày?' },
    { chinese: '那是我学生，我对他很好', vietnamese: 'Đó là học sinh của tôi, tôi rất tốt với bạn ấy.' },
    { chinese: '明天星期一，你去哪？', vietnamese: 'Ngày mai thứ Hai, bạn đi đâu?' },
    { chinese: '你星期几回北京？回几天？', vietnamese: 'Thứ mấy bạn về Bắc Kinh? Về mấy ngày?' },
    { chinese: '我不进学校见老师', vietnamese: 'Tôi không vào trường gặp giáo viên.' },
    { chinese: '我妈问老师身体好吗？', vietnamese: 'Mẹ tôi hỏi giáo viên sức khỏe có tốt không?' },
    { chinese: '这是我爸爸，他身体很好', vietnamese: 'Đây là bố tôi, sức khỏe ông ấy rất tốt.' },
    { chinese: '谢谢你，我今天去工作，不去学校', vietnamese: 'Cảm ơn bạn, hôm nay tôi đi làm, không đến trường.' },
    { chinese: '老师叫你明天去学校吗？', vietnamese: 'Giáo viên bảo bạn ngày mai đến trường phải không?' },
    { chinese: '你星期几进学校工作？', vietnamese: 'Bạn thứ mấy vào trường làm việc?' },
    { chinese: '我今天工作，不去见老师', vietnamese: 'Hôm nay tôi làm việc, không đi gặp giáo viên.' },
    { chinese: '老师叫我明天去学校', vietnamese: 'Giáo viên bảo tôi ngày mai đến trường.' },
    { chinese: '白老师星期四进学校吗？', vietnamese: 'Thầy Bạch thứ năm vào trường không?' },
    { chinese: '我今天身体不好，不去工作', vietnamese: 'Hôm nay sức khỏe tôi không tốt, không đi làm.' },
    { chinese: '下星期五是我生日，我不去学汉语', vietnamese: 'Thứ sáu tuần sau là sinh nhật tôi, tôi không đi học tiếng Hán.' },
    { chinese: '我进去学校见老师。', vietnamese: 'Tôi đi vào trường gặp giáo viên.' },
    { chinese: '我妈妈问老师身体好吗？', vietnamese: 'Mẹ tôi hỏi giáo viên sức khỏe tốt không?' },
    { chinese: '这是我爸爸，他身体不太好。', vietnamese: 'Đây là bố tôi, sức khỏe ông ấy không được tốt lắm.' },
    { chinese: '谢谢你，我今天不去工作。', vietnamese: 'Cảm ơn bạn, hôm nay tôi không đi làm.' },
    { chinese: '老师叫我去学校，那老师叫你去学校吗？', vietnamese: 'Giáo viên bảo tôi đến trường, vậy giáo viên bảo bạn đến trường không?' },
    { chinese: '你星期几进银行工作？', vietnamese: 'Bạn thứ mấy vào ngân hàng làm việc?' },
    { chinese: '白老师星期四进学校吗？', vietnamese: 'Thầy Bạch thứ năm vào trường không?' },
    { chinese: '爸爸叫我去北京学汉语。', vietnamese: 'Bố bảo tôi đi Bắc Kinh học tiếng Hán.' },
    { chinese: '爸爸问我明天去哪工作？', vietnamese: 'Bố hỏi tôi ngày mai đi đâu làm việc?' },
    { chinese: '你叫什么名字？', vietnamese: 'Bạn tên gì?' },
    { chinese: '他是中国人。', vietnamese: 'Anh ấy là người Trung Quốc.' },
    { chinese: '我学中文。', vietnamese: 'Tôi học tiếng Trung.' },
    { chinese: '汉字不难。', vietnamese: 'Chữ Hán không khó.' },
    { chinese: '中国很大。', vietnamese: 'Trung Quốc rất lớn.' },
    { chinese: '她叫什么名字？', vietnamese: 'Cô ấy tên gì?' },
    { chinese: '你是哪国人？', vietnamese: 'Bạn là người nước nào?' },
    { chinese: '中文不难，汉字也不难。', vietnamese: 'Tiếng Trung không khó, chữ Hán cũng không khó.' }
];

const animalCoverDatabase = [
    { name: 'chuột', emoji: '🐭', bg: '#dbeafe' },
    { name: 'bò', emoji: '🐮', bg: '#fef3c7' },
    { name: 'hổ', emoji: '🐯', bg: '#ffedd5' },
    { name: 'thỏ', emoji: '🐰', bg: '#fce7f3' },
    { name: 'rồng', emoji: '🐉', bg: '#dcfce7' },
    { name: 'rắn', emoji: '🐍', bg: '#ccfbf1' },
    { name: 'ngựa', emoji: '🐴', bg: '#fee2e2' },
    { name: 'dê', emoji: '🐑', bg: '#f3f4f6' },
    { name: 'khỉ', emoji: '🐵', bg: '#fef3c7' }
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
    const learnedPool = charDatabase
        .filter(item => learnedCharacterSet.has(item.char))
        .sort(() => 0.5 - Math.random())
        .slice(0, 20);

    return learnedPool.map(targetObj => {
        const distractors = learnedCharacters
            .filter(char => char !== targetObj.char)
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);

        return {
            chars: [...distractors, targetObj.char].sort(() => 0.5 - Math.random()),
            target: targetObj.char,
            hint: `Tìm chữ ${targetObj.meaning} (${targetObj.pinyin})`
        };
    });
}

function generateGame3Data() {
    let data = [...grammarDatabase].sort(() => 0.5 - Math.random()).slice(0, 20);
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
    let data = [...vocabDatabase].sort(() => 0.5 - Math.random()).slice(0, 20);
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

    return pool.sort(() => 0.5 - Math.random()).slice(0, 20);
}

function generateGame7Data() {
    return [...sentenceDatabase].sort(() => 0.5 - Math.random()).slice(0, 20);
}

function generateGame8Data() {
    return [...sentenceRevealDatabase];
}

function shuffleArray(items) {
    return [...items].sort(() => 0.5 - Math.random());
}

function generateGame9Data() {
    const practices = [];

    for (let i = 0; i < 5; i++) {
        const chars = shuffleArray(learnedCharacters).slice(0, 4);
        const animals = shuffleArray(animalCoverDatabase).slice(0, 4);
        const prompts = shuffleArray([0, 1, 2, 3]);

        practices.push({
            cards: chars.map((char, index) => ({
                char,
                animal: animals[index]
            })),
            prompts
        });
    }

    return practices;
}
