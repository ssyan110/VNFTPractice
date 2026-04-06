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
    { char: '文', pinyin: 'wén', meaning: 'VĂN, CHỮ VIẾT', radical: '文 (wén) – bộ Văn' },
    { char: '习', pinyin: 'xí', meaning: 'LUYỆN TẬP, HỌC', radical: '乙 (yǐ) – bộ Ất' },
    { char: '发', pinyin: 'fā', meaning: 'PHÁT, PHÁT TRIỂN', radical: '又 (yòu) – bộ Hựu' },
    { char: '音', pinyin: 'yīn', meaning: 'ÂM, ÂM THANH', radical: '音 (yīn) – bộ Âm' },
    { char: '朋', pinyin: 'péng', meaning: 'BẠN BÈ', radical: '月 (yuè) – bộ Nguyệt' },
    { char: '书', pinyin: 'shū', meaning: 'SÁCH, VIẾT', radical: '乙 (yǐ) – bộ Ất' },
    { char: '个', pinyin: 'gè', meaning: 'CÁI, LƯỢNG TỪ', radical: '亻 (rén) – bộ Nhân đứng' },
    { char: '午', pinyin: 'wǔ', meaning: 'TRƯA', radical: '十 (shí) – bộ Thập' },
    { char: '头', pinyin: 'tóu', meaning: 'ĐẦU', radical: '大 (dà) – bộ Đại' },
    { char: '米', pinyin: 'mǐ', meaning: 'GẠO, MÉT', radical: '米 (mǐ) – bộ Mễ' }
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
    '们', '名', '字', '国', '中', '文', '习', '发', '音', '朋',
    '书', '个', '午', '头', '米'
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
    { word: '文字', chars: ['文', '字'], pinyin: 'wén zì', meaning: 'Văn tự / Chữ viết' },
    { word: '学习', chars: ['学', '习'], pinyin: 'xué xí', meaning: 'Học tập' },
    { word: '朋友', chars: ['朋', '友'], pinyin: 'péng yǒu', meaning: 'Bạn bè' },
    { word: '发音', chars: ['发', '音'], pinyin: 'fā yīn', meaning: 'Phát âm' },
    { word: '习字', chars: ['习', '字'], pinyin: 'xí zì', meaning: 'Luyện viết chữ' },
    { word: '中午', chars: ['中', '午'], pinyin: 'zhōng wǔ', meaning: 'Buổi trưa' },
    { word: '上午', chars: ['上', '午'], pinyin: 'shàng wǔ', meaning: 'Buổi sáng' },
    { word: '下午', chars: ['下', '午'], pinyin: 'xià wǔ', meaning: 'Buổi chiều' },
    { word: '个人', chars: ['个', '人'], pinyin: 'gè rén', meaning: 'Cá nhân' },
    { word: '头发', chars: ['头', '发'], pinyin: 'tóu fa', meaning: 'Tóc' }
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
    { vietnamese: "Bạn là người nước nào?", answer: ['你', '是', '哪', '国', '人'], chars: ['你', '是', '哪', '国', '人'], pinyin: "Nǐ shì nǎ guó rén?" },
    { vietnamese: "Tôi học tập tiếng Trung.", answer: ['我', '学', '习', '中', '文'], chars: ['我', '学', '习', '中', '文'], pinyin: "Wǒ xué xí zhōng wén." },
    { vietnamese: "Anh ấy là bạn tôi.", answer: ['他', '是', '我', '朋', '友'], chars: ['他', '是', '我', '朋', '友'], pinyin: "Tā shì wǒ péng yǒu." },
    { vietnamese: "Phát âm tiếng Hán không khó.", answer: ['汉', '语', '发', '音', '不', '难'], chars: ['汉', '语', '发', '音', '不', '难'], pinyin: "Hàn yǔ fā yīn bù nán." },
    { vietnamese: "Cô ấy là bạn tốt của tôi.", answer: ['她', '是', '我', '好', '朋', '友'], chars: ['她', '是', '我', '好', '朋', '友'], pinyin: "Tā shì wǒ hǎo péng yǒu." },
    { vietnamese: "Đó là tên bạn phải không?", answer: ['那', '是', '你', '名', '字', '吗'], chars: ['那', '是', '你', '名', '字', '吗'], pinyin: "Nà shì nǐ míng zì ma?" },
    { vietnamese: "Ngày mai tôi đi Trung Quốc hai mươi ngày.", answer: ['我', '明', '天', '去', '中', '国', '二', '十', '天'], chars: ['我', '明', '天', '去', '中', '国', '二', '十', '天'], pinyin: "Wǒ míng tiān qù zhōng guó èr shí tiān." },
    { vietnamese: "Tiếng Trung của tôi không tốt, không đi Trung Quốc làm việc.", answer: ['我', '中', '文', '不', '好', '不', '去', '中', '国', '工', '作'], chars: ['我', '中', '文', '不', '好', '不', '去', '中', '国', '工', '作'], pinyin: "Wǒ zhōng wén bù hǎo, bù qù zhōng guó gōng zuò." },
    { vietnamese: "Giáo viên bảo tôi đi Trung Quốc học tập tiếng Hán.", answer: ['老', '师', '叫', '我', '去', '中', '国', '学', '习', '汉', '语'], chars: ['老', '师', '叫', '我', '去', '中', '国', '学', '习', '汉', '语'], pinyin: "Lǎo shī jiào wǒ qù zhōng guó xué xí hàn yǔ." },
    { vietnamese: "Phát âm tiếng Trung của tôi không tốt, phát âm của bạn tốt không?", answer: ['我', '中', '文', '发', '音', '不', '好', '你', '发', '音', '好', '吗'], chars: ['我', '中', '文', '发', '音', '不', '好', '你', '发', '音', '好', '吗'], pinyin: "Wǒ zhōng wén fā yīn bù hǎo, nǐ fā yīn hǎo ma?" },
    { vietnamese: "Thứ tư tôi học tiếng Trung, không học tiếng Nhật.", answer: ['我', '星', '期', '三', '学', '习', '中', '文', '不', '学', '日', '文'], chars: ['我', '星', '期', '三', '学', '习', '中', '文', '不', '学', '日', '文'], pinyin: "Wǒ xīng qī sān xué xí zhōng wén, bù xué rì wén." },
    { vietnamese: "Phát âm tiếng Nhật của tôi rất tốt, phát âm tiếng Trung không tốt.", answer: ['我', '日', '文', '发', '音', '很', '好', '中', '文', '发', '音', '不', '好'], chars: ['我', '日', '文', '发', '音', '很', '好', '中', '文', '发', '音', '不', '好'], pinyin: "Wǒ rì wén fā yīn hěn hǎo, zhōng wén fā yīn bù hǎo." },
    { vietnamese: "Anh ấy là bạn Trung Quốc của tôi.", answer: ['他', '是', '我', '中', '国', '朋', '友'], chars: ['他', '是', '我', '中', '国', '朋', '友'], pinyin: "Tā shì wǒ zhōng guó péng yǒu." },
    { vietnamese: "Tên tiếng Trung của tôi là Minh Minh.", answer: ['我', '的', '中', '文', '名', '字', '是', '明', '明'], chars: ['我', '的', '中', '文', '名', '字', '是', '明', '明'], pinyin: "Wǒ de zhōng wén míng zì shì míng míng." },
    { vietnamese: "Đây là bạn của bố, anh ấy là người Nhật.", answer: ['这', '是', '爸', '爸', '的', '朋', '友', '他', '是', '日', '本', '人'], chars: ['这', '是', '爸', '爸', '的', '朋', '友', '他', '是', '日', '本', '人'], pinyin: "Zhè shì bà ba de péng yǒu, tā shì rì běn rén." },
    { vietnamese: "Ngày mai tôi đi trường học tập, gặp bạn bè.", answer: ['我', '明', '天', '去', '学', '校', '学', '习', '见', '朋', '友'], chars: ['我', '明', '天', '去', '学', '校', '学', '习', '见', '朋', '友'], pinyin: "Wǒ míng tiān qù xué xiào xué xí, jiàn péng yǒu." },
    { vietnamese: "Đi Trung Quốc làm việc tốt không?", answer: ['去', '中', '国', '工', '作', '好', '吗'], chars: ['去', '中', '国', '工', '作', '好', '吗'], pinyin: "Qù zhōng guó gōng zuò hǎo ma?" },
    { vietnamese: "Tên tiếng Trung của bạn là gì?", answer: ['你', '中', '文', '名', '字', '是'], chars: ['你', '中', '文', '名', '字', '是'], pinyin: "Nǐ zhōng wén míng zì shì?" },
    { vietnamese: "Phát âm tiếng Trung không quá khó, phát âm tiếng Nhật rất khó.", answer: ['中', '文', '发', '音', '不', '太', '难', '日', '文', '发', '音', '很', '难'], chars: ['中', '文', '发', '音', '不', '太', '难', '日', '文', '发', '音', '很', '难'], pinyin: "Zhōng wén fā yīn bú tài nán, rì wén fā yīn hěn nán." },
    { vietnamese: "Phát âm tiếng Trung của bạn tôi rất tốt.", answer: ['我', '朋', '友', '中', '文', '发', '音', '很', '好'], chars: ['我', '朋', '友', '中', '文', '发', '音', '很', '好'], pinyin: "Wǒ péng yǒu zhōng wén fā yīn hěn hǎo." },
    { vietnamese: "Hôm nay mẹ rất nhức đầu!", answer: ['妈', '妈', '今', '天', '头', '很', '大'], chars: ['妈', '妈', '今', '天', '头', '很', '大'], pinyin: "Mā ma jīn tiān tóu hěn dà!" },
    { vietnamese: "Hôm nay có hai mươi người đi trường.", answer: ['今', '天', '有', '二', '十', '个', '人', '去', '学', '校'], chars: ['今', '天', '有', '二', '十', '个', '人', '去', '学', '校'], pinyin: "Jīn tiān yǒu èr shí gè rén qù xué xiào." },
    { vietnamese: "Tôi có ba mươi sáu người bạn Trung Quốc.", answer: ['我', '有', '三', '十', '六', '个', '中', '国', '朋', '友'], chars: ['我', '有', '三', '十', '六', '个', '中', '国', '朋', '友'], pinyin: "Wǒ yǒu sān shí liù gè zhōng guó péng yǒu." },
    { vietnamese: "Buổi trưa bạn đi đâu? Đi trường học tiếng Hán không?", answer: ['中', '午', '你', '去', '哪', '去', '学', '校', '学', '习', '汉', '语', '吗'], chars: ['中', '午', '你', '去', '哪', '去', '学', '校', '学', '习', '汉', '语', '吗'], pinyin: "Zhōng wǔ nǐ qù nǎ? Qù xué xiào xué xí hàn yǔ ma?" },
    { vietnamese: "Đây không phải sách tiếng Hán, đây là sách tiếng Nhật.", answer: ['这', '不', '是', '汉', '语', '书', '这', '是', '日', '语', '书'], chars: ['这', '不', '是', '汉', '语', '书', '这', '是', '日', '语', '书'], pinyin: "Zhè bú shì hàn yǔ shū, zhè shì rì yǔ shū." },
    { vietnamese: "Tiếng Hán rất khó, tôi nhức đầu quá!", answer: ['汉', '语', '很', '难', '我', '头', '大', '了'], chars: ['汉', '语', '很', '难', '我', '头', '大', '了'], pinyin: "Hàn yǔ hěn nán, wǒ tóu dà le!" },
    { vietnamese: "Một người có một cái đầu.", answer: ['一', '个', '人', '有', '一', '个', '头'], chars: ['一', '个', '人', '有', '一', '个', '头'], pinyin: "Yī gè rén yǒu yī gè tóu." },
    { vietnamese: "Hôm nay tôi không đi làm!", answer: ['今', '天', '老', '子', '不', '去', '工', '作'], chars: ['今', '天', '老', '子', '不', '去', '工', '作'], pinyin: "Jīn tiān lǎo zi bù qù gōng zuò!" },
    { vietnamese: "Chủ nhật ngân hàng đóng, trường cũng đóng.", answer: ['星', '期', '日', '银', '行', '关', '学', '校', '也', '关'], chars: ['星', '期', '日', '银', '行', '关', '学', '校', '也', '关'], pinyin: "Xīng qī rì yín háng guān, xué xiào yě guān." },
    { vietnamese: "Sức khỏe tôi không tốt, chiều không về trường học phát âm tiếng Hán.", answer: ['我', '身', '体', '不', '好', '下', '午', '不', '回', '学', '校', '学', '汉', '语', '发', '音'], chars: ['我', '身', '体', '不', '好', '下', '午', '不', '回', '学', '校', '学', '汉', '语', '发', '音'], pinyin: "Wǒ shēn tǐ bù hǎo, xià wǔ bù huí xué xiào xué hàn yǔ fā yīn." },
    { vietnamese: "Anh ấy là giáo viên tiếng Nhật của bạn, đúng không?", answer: ['他', '是', '你', '的', '日', '语', '老', '师', '对', '吗'], chars: ['他', '是', '你', '的', '日', '语', '老', '师', '对', '吗'], pinyin: "Tā shì nǐ de rì yǔ lǎo shī, duì ma?" },
    { vietnamese: "Hôm nay rất bận, tôi nhức đầu quá!", answer: ['今', '天', '很', '忙', '我', '头', '很', '大'], chars: ['今', '天', '很', '忙', '我', '头', '很', '大'], pinyin: "Jīn tiān hěn máng, wǒ tóu hěn dà!" },
    { vietnamese: "Người kia là giáo viên đại học, đúng không?", answer: ['那', '个', '人', '是', '大', '学', '老', '师', '对', '吗'], chars: ['那', '个', '人', '是', '大', '学', '老', '师', '对', '吗'], pinyin: "Nà gè rén shì dà xué lǎo shī, duì ma?" },
    { vietnamese: "Giáo viên này hôm nay không vào trường làm việc, anh ấy quá bận.", answer: ['这', '个', '老', '师', '今', '天', '不', '进', '学', '校', '工', '作', '他', '太', '忙', '了'], chars: ['这', '个', '老', '师', '今', '天', '不', '进', '学', '校', '工', '作', '他', '太', '忙', '了'], pinyin: "Zhè gè lǎo shī jīn tiān bù jìn xué xiào gōng zuò, tā tài máng le." }
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
    { text_pre: "中", text_post: "不难。", vietnamese: "Tiếng Trung không khó.", answer: '文' },
    { text_pre: "我学", text_post: "中文。", vietnamese: "Tôi học tập tiếng Trung.", answer: '习' },
    { text_pre: "汉语", text_post: "音不难。", vietnamese: "Phát âm tiếng Hán không khó.", answer: '发' },
    { text_pre: "他是我", text_post: "友。", vietnamese: "Anh ấy là bạn tôi.", answer: '朋' },
    { text_pre: "发", text_post: "很好。", vietnamese: "Phát âm rất tốt.", answer: '音' },
    { text_pre: "我看", text_post: "。", vietnamese: "Tôi đọc sách.", answer: '书' },
    { text_pre: "中", text_post: "很忙。", vietnamese: "Buổi trưa rất bận.", answer: '午' },
    { text_pre: "一", text_post: "人。", vietnamese: "Một người.", answer: '个' },
    { text_pre: "上", text_post: "去学校。", vietnamese: "Buổi sáng đi trường.", answer: '午' },
    { text_pre: "这不是汉语", text_post: "。", vietnamese: "Đây không phải sách tiếng Hán.", answer: '书' },
    { text_pre: "一", text_post: "人有一个头。", vietnamese: "Một người có một cái đầu.", answer: '个' },
    { text_pre: "汉语很难，我", text_post: "大了！", vietnamese: "Tiếng Hán rất khó, tôi nhức đầu quá!", answer: '头' },
    { text_pre: "今天有二十", text_post: "人去学校。", vietnamese: "Hôm nay có hai mươi người đi trường.", answer: '个' },
    { text_pre: "下", text_post: "不回学校。", vietnamese: "Buổi chiều không về trường.", answer: '午' }
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
    { chinese: '中文不难，汉字也不难。', vietnamese: 'Tiếng Trung không khó, chữ Hán cũng không khó.' },
    { chinese: '我学习中文。', vietnamese: 'Tôi học tập tiếng Trung.' },
    { chinese: '他是我朋友。', vietnamese: 'Anh ấy là bạn tôi.' },
    { chinese: '汉语发音不难。', vietnamese: 'Phát âm tiếng Hán không khó.' },
    { chinese: '她是我好朋友。', vietnamese: 'Cô ấy là bạn tốt của tôi.' },
    { chinese: '我朋友学习汉语发音。', vietnamese: 'Bạn tôi học tập phát âm tiếng Hán.' },
    { chinese: '我上午看书。', vietnamese: 'Buổi sáng tôi đọc sách.' },
    { chinese: '中午去见朋友。', vietnamese: 'Buổi trưa đi gặp bạn.' },
    { chinese: '下午我去学校学习。', vietnamese: 'Buổi chiều tôi đi trường học tập.' },
    { chinese: '一个人去北京。', vietnamese: 'Một mình đi Bắc Kinh.' },
    { chinese: '那是你名字吗？', vietnamese: 'Đó là tên bạn phải không?' },
    { chinese: '我明天去中国二十天。', vietnamese: 'Ngày mai tôi đi Trung Quốc hai mươi ngày.' },
    { chinese: '我中文不好，不去中国工作。', vietnamese: 'Tiếng Trung của tôi không tốt, không đi Trung Quốc làm việc.' },
    { chinese: '老师叫我去中国学习汉语。', vietnamese: 'Giáo viên bảo tôi đi Trung Quốc học tập tiếng Hán.' },
    { chinese: '我中文发音不好，你发音好吗？', vietnamese: 'Phát âm tiếng Trung của tôi không tốt, phát âm của bạn tốt không?' },
    { chinese: '我星期三学习中文，不学日文。', vietnamese: 'Thứ tư tôi học tiếng Trung, không học tiếng Nhật.' },
    { chinese: '我日文发音很好，中文发音不好。', vietnamese: 'Phát âm tiếng Nhật của tôi rất tốt, phát âm tiếng Trung không tốt.' },
    { chinese: '他是我中国朋友。', vietnamese: 'Anh ấy là bạn Trung Quốc của tôi.' },
    { chinese: '我的中文名字是明明。', vietnamese: 'Tên tiếng Trung của tôi là Minh Minh.' },
    { chinese: '这是爸爸的朋友，他是日本人。', vietnamese: 'Đây là bạn của bố, anh ấy là người Nhật.' },
    { chinese: '我明天去学校学习、见朋友。', vietnamese: 'Ngày mai tôi đi trường học tập, gặp bạn bè.' },
    { chinese: '去中国工作好吗？', vietnamese: 'Đi Trung Quốc làm việc tốt không?' },
    { chinese: '你中文名字是？', vietnamese: 'Tên tiếng Trung của bạn là gì?' },
    { chinese: '中文发音不太难，日文发音很难。', vietnamese: 'Phát âm tiếng Trung không quá khó, phát âm tiếng Nhật rất khó.' },
    { chinese: '我朋友中文发音很好。', vietnamese: 'Phát âm tiếng Trung của bạn tôi rất tốt.' },
    { chinese: '妈妈今天头很大！', vietnamese: 'Hôm nay mẹ rất nhức đầu!' },
    { chinese: '今天有二十个人去学校。', vietnamese: 'Hôm nay có hai mươi người đi trường.' },
    { chinese: '我有三十六个中国朋友。', vietnamese: 'Tôi có ba mươi sáu người bạn Trung Quốc.' },
    { chinese: '中午你去哪？去学校学习汉语吗？', vietnamese: 'Buổi trưa bạn đi đâu? Đi trường học tiếng Hán không?' },
    { chinese: '这不是汉语书，这是日语书。', vietnamese: 'Đây không phải sách tiếng Hán, đây là sách tiếng Nhật.' },
    { chinese: '汉语很难，我头大了！', vietnamese: 'Tiếng Hán rất khó, tôi nhức đầu quá!' },
    { chinese: '一个人有一个头。', vietnamese: 'Một người có một cái đầu.' },
    { chinese: '今天老子不去工作！', vietnamese: 'Hôm nay tôi không đi làm!' },
    { chinese: '星期日银行关，学校也关。', vietnamese: 'Chủ nhật ngân hàng đóng, trường cũng đóng.' },
    { chinese: '我身体不好，下午不回学校学汉语发音。', vietnamese: 'Sức khỏe tôi không tốt, chiều không về trường học phát âm tiếng Hán.' },
    { chinese: '他是你的日语老师，对吗？', vietnamese: 'Anh ấy là giáo viên tiếng Nhật của bạn, đúng không?' },
    { chinese: '今天很忙，我头很大！', vietnamese: 'Hôm nay rất bận, tôi nhức đầu quá!' },
    { chinese: '那个人是大学老师，对吗？', vietnamese: 'Người kia là giáo viên đại học, đúng không?' },
    { chinese: '这个老师今天不进学校工作，他太忙了。', vietnamese: 'Giáo viên này hôm nay không vào trường làm việc, anh ấy quá bận.' }
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
