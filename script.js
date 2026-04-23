const triviaData = {
    "maps": [
 { "question": "היכן נמצא הר תבור?", "options": ["הכרמל ורמות מנשה", "השומרון ובקעת הירדן", "גליל עליון", "גליל תחתון"], "correct": 3 },
    { "question": "היכן נמצא הר גלבוע?", "options": ["השומרון ובקעת הירדן", "גליל עליון", "הכרמל ורמות מנשה", "גליל תחתון"], "correct": 0 },
    { "question": "ליד איזו עיר נמצא הר מירון?", "options": ["נצרת", "קרית שמונה", "קצרין", "צפת"], "correct": 3 },
    { "question": "מהו חבל הארץ המערבי ביותר במדינה?", "options": ["מישור החוף", "מדבר יהודה", "הכרמל ורמות מנשה", "השומרון ובקעת הירדן"], "correct": 0 },
    { "question": "היכן נמצאת העיר רהט?", "options": ["הרי יהודה", "מישור החוף", "מדבר יהודה", "נגב"], "correct": 3 },
    { "question": "איזו עיר היא הצפונית ביותר בישראל?", "options": ["חיפה", "טבריה", "קצרין", "צפת"], "correct": 2 },
    { "question": "איזו עיר היא הדרומית ביותר בישראל?", "options": ["אילת", "באר שבע", "ירוחם", "דימונה"], "correct": 0 },
    { "question": "מהו ההר הגבוה ביותר במדינת ישראל?", "options": ["הר מירון", "הר חרמון", "הר תבור", "הר הכרמל"], "correct": 1 },
    { "question": "איזה נחל נשפך לכנרת?", "options": ["נחל הירקון", "נחל הירדן", "נחל קישון", "נחל הבשור"], "correct": 1 },
    { "question": "איזו מדינה גובלת בישראל מצפון?", "options": ["ירדן", "מצרים", "לבנון", "עיראק"], "correct": 2 },
    { "question": "איזו מדינה גובלת בישראל ממזרח?", "options": ["לבנון", "ירדן", "מצרים", "קפריסין"], "correct": 1 },
    { "question": "היכן נמצא עמק החולה?", "options": ["דרום הארץ", "אצבע הגליל", "מרכז הארץ", "מישור החוף"], "correct": 1 },
    { "question": "נחל הקישון עובר בקרבת העיר:", "options": ["תל אביב", "חיפה", "אשדוד", "אילת"], "correct": 1 },
    { "question": "היכן נמצאת 'אום רשרש' ההיסטורית?", "options": ["תל אביב", "חיפה", "אילת", "ירושלים"], "correct": 2 },
    { "question": "היכן נמצאת שמורת עין גדי?", "options": ["חוף ים המלח", "חוף ים תיכון", "חוף אילת", "חוף הכנרת"], "correct": 0 },
    { "question": "מהו חבל הארץ שבין מישור החוף להרי יהודה?", "options": ["השפלה", "הגליל", "הנגב", "הערבה"], "correct": 0 },
    { "question": "היכן נמצא נחל לכיש?", "options": ["אשדוד", "נתניה", "חיפה", "אילת"], "correct": 0 },
    { "question": "איזה ים נמצא במזרח מדינת ישראל?", "options": ["ים תיכון", "ים המלח", "ים סוף", "הים האדום"], "correct": 1 },
    { "question": "נחל הבשור נמצא בחבל ארץ:", "options": ["גליל", "שפלה", "נגב מערבי", "גולן"], "correct": 2 },
    { "question": "היכן נמצא הר ארבל?", "options": ["ליד הכנרת", "ליד הים התיכון", "בנגב", "בערבה"], "correct": 0 },
    { "question": "מהו ההר הגבוה בנגב?", "options": ["הר רמון", "הר תבור", "הר מירון", "הר הכרמל"], "correct": 0 },
    { "question": "איפה נמצא הר עיבל?", "options": ["ליד שכם", "ליד באר שבע", "ליד צפת", "ליד אילת"], "correct": 0 },
    { "question": "היכן נמצאת הערבה?", "options": ["בין ים המלח לאילת", "בגליל", "במישור החוף", "בשומרון"], "correct": 0 }
],
    "heritage": [
        { "question": "כיצד מכונים היהודים שנותרו בספרד לאחר הגירוש ואולצו להתנצר?", "options": ["פלאשמורה", "אנוסים", "רפורמים", "מוסתערבים"], "correct": 1 },
    { "question": "איזו עיר ייסדה מחדש דונה גרציה?", "options": ["טבריה", "צפת", "ירושלים", "עכו"], "correct": 0 },
    { "question": "איזו מילה לא מופיעה במגילת העצמאות?", "options": ["ציונית", "שואה", "יהודית", "דמוקרטית"], "correct": 3 },
    { "question": "מי היה הנשיא הראשון של מדינת ישראל?", "options": ["דוד בן גוריון", "חיים ויצמן", "יצחק בן צבי", "זלמן שזר"], "correct": 1 },
    { "question": "מי חיבר את השולחן ערוך?", "options": ["הרמב\"ם", "רבי יוסף קארו", "רבי יהודה הלוי", "אחד העם"], "correct": 1 },
    { "question": "מה תפקיד הקואליציה?", "options": ["לבקר את הממשלה", "לאזן את בתי המשפט", "לגבות את צעדי הממשלה ולהגן על חקיקתה", "לייצג את האופוזיציה"], "correct": 2 },
    { "question": "איזה חוק קובע שכל יהודי זכאי לעלות ארצה?", "options": ["חוק האזרחות", "חוק השבות", "חוק יסוד כבוד האדם", "חוק הלאום"], "correct": 1 },
    { "question": "מי עיצב את סמל המדינה?", "options": ["נפתלי הרץ אימבר", "שמואל כהן", "האחים שמיר", "יוסף טרומפלדור"], "correct": 2 },
    { "question": "מי תבע את המושג 'גרמניה האחרת'?", "options": ["דוד בן גוריון", "מנחם בגין", "חיים ויצמן", "משה שרת"], "correct": 0 },
    { "question": "מי היה אבי הציונות הסינטטית?", "options": ["תיאודור הרצל", "חיים ויצמן", "זאב ז'בוטינסקי", "אחד העם"], "correct": 1 },
    { "question": "מהי 'איליה קפיטולינה'?", "options": ["שם רומי לצפת", "שם רומי לירושלים", "שם רומי לטבריה", "שם רומי לעכו"], "correct": 1 },
    { "question": "מי כתב את הספר 'מדינת היהודים'?", "options": ["מנחם בגין", "תיאודור הרצל", "זאב ז'בוטינסקי", "דוד בן גוריון"], "correct": 1 },
    { "question": "מהו היודנראט?", "options": ["משטרת הגטו", "מועצת יהודים שמונתה ע\"י הנאצים", "תנועת התנגדות יהודית", "ארגון עזרה הדדית"], "correct": 1 },
    { "question": "איזו מפלגה הנהיגה את המדינה ב-3 העשורים הראשונים?", "options": ["הליכוד", "חירות", "מפא\"י", "הציונים הכלליים"], "correct": 2 },
    { "question": "מי המפקד העליון של צה\"ל?", "options": ["הממשלה", "הרמטכ\"ל", "שר הביטחון", "הנשיא"], "correct": 0 },
    { "question": "מי בוחר את נשיא המדינה?", "options": ["הכנסת", "העם", "הממשלה", "בית המשפט"], "correct": 0 }
],
    "military_and_medical": [
      { "question": "מהו 'פער' על פי מודל התחקיר?", "options": ["חריגה מפקודה", "אי ביצוע משימה", "ההפרש בין 'מה היה' לבין 'מה היה צריך להיות'", "טעות אנוש"], "correct": 2 },
    { "question": "מהו 'משולש החיים' בעזרה ראשונה?", "options": ["לב, ריאות, כליות", "נשימה, דם, עצבים", "הכרה, דופק, חום", "חבישה, קיבוע, פינוי"], "correct": 1 },
    { "question": "באילו מצבים נניח חסם עורקים (ח\"ע)?", "options": ["בכל פציעה", "תחת אש או קטיעה", "הכשת נחש", "כאשר יש שטף דם בבטן"], "correct": 1 },
    { "question": "מהו 'ממצא' בתהליך התחקיר?", "options": ["מסקנה אישית", "עובדה שהתבררה בתחקיר ואין עליה עוררין", "המלצה לשיפור", "עונש שניתן לחייל"], "correct": 1 },
    { "question": "מהי 'מסקנה' בתחקיר?", "options": ["רשימת עובדות", "התובנה העולה מתוך ניתוח הממצאים", "לוח זמנים", "פקודה חדשה"], "correct": 1 },
    { "question": "מהו 'לקח' בתחקיר?", "options": ["עובדה היסטורית", "פעולה אופרטיבית שיש לבצע כדי להשתפר בעתיד", "תיאור של מה שקרה", "שיחת נזיפה"], "correct": 1 },
    { "question": "מהו עקרון 'האמינות' בתחקיר?", "options": ["דיווח אמת בלבד", "הסתרת טעויות", "האשמת אחרים", "דיווח רק על הצלחות"], "correct": 0 },
    { "question": "מהו 'גורם שורש' בתחקיר?", "options": ["הסיבה הבסיסית שבלעדיה האירוע לא היה קורה", "שם היחידה", "החייל הראשון", "התוצאה"], "correct": 0 },
    { "question": "מהו ערך 'טוהר הנשק'?", "options": ["שימוש בכוח רק לצורך המשימה ושמירה על צלם אנוש", "ניקיון הנשק", "איסור נשיאת נשק", "שימוש בנשק חם בלבד"], "correct": 0 },
    { "question": "בטיפול בפצוע, מהו סדר הקדימויות (S-A-B-C)?", "options": ["בטיחות, נתיב אוויר, נשימה, עצירת דימום", "פינוי, חבישה, שתייה, מנוחה", "נשק, קשר, מפה, פצוע", "הכרה, צעקה, דיבור, דופק"], "correct": 0 }
],
    "history_dates": [
      { "question": "באיזה תאריך הוחלט על דגל מדינת ישראל?", "options": ["14.05.1948", "28.10.1948", "15.01.1949", "29.11.1947"], "correct": 1 },
    { "question": "באיזו שנה נוסד בנק ישראל?", "options": ["1948", "1950", "1954", "1960"], "correct": 2 },
    { "question": "מתי נחתם הסכם השלום עם ירדן?", "options": ["1977", "1993", "1994", "1995"], "correct": 2 },
    { "question": "באיזו שנה הוקם הארגון הציוני העולמי?", "options": ["1891", "1897", "1901", "1905"], "correct": 1 },
    { "question": "מתי נוסדה קק\"ל?", "options": ["1897", "1901", "1905", "1909"], "correct": 1 },
    { "question": "באיזו שנה הוקמה תל אביב?", "options": ["1901", "1905", "1909", "1914"], "correct": 2 },
    { "question": "מתי הוקם 'השומר'?", "options": ["1901", "1903", "1909", "1912"], "correct": 2 },
    { "question": "באיזו שנה הוקם הקיבוץ הראשון (דגניה א')?", "options": ["1909", "1910", "1912", "1920"], "correct": 1 },
    { "question": "מתי פורסמה הצהרת בלפור?", "options": ["1914", "1917", "1920", "1922"], "correct": 1 },
    { "question": "באיזו שנה הוקם ארגון ה'הגנה'?", "options": ["1917", "1920", "1922", "1929"], "correct": 1 },
    { "question": "מתי התרחשו מאורעות תרפ\"ט?", "options": ["1921", "1924", "1929", "1931"], "correct": 2 },
    { "question": "באיזו שנה הוקם האצ\"ל?", "options": ["1929", "1931", "1936", "1939"], "correct": 1 },
    { "question": "מתי החל מבצע 'חומה ומגדל'?", "options": ["1929", "1932", "1936", "1939"], "correct": 2 },
    { "question": "באיזו שנה פורסם ה'ספר הלבן' השלישי?", "options": ["1936", "1937", "1939", "1941"], "correct": 2 },
    { "question": "מתי הוקם הפלמ\"ח?", "options": ["1939", "1941", "1945", "1948"], "correct": 1 },
    { "question": "מתי חלה 'החלטת החלוקה' (כ\"ט בנובמבר)?", "options": ["1945", "1946", "1947", "1948"], "correct": 2 },
    { "question": "מתי הוקם צה\"ל (פקודת יום)?", "options": ["14.05.1948", "26.05.1948", "01.06.1948", "10.06.1948"], "correct": 1 },
    { "question": "באיזו שנה נערך מבצע 'מרבד הקסמים'?", "options": ["1948", "1949", "1951", "1954"], "correct": 1 },
    { "question": "מתי חוקק 'חוק השבות'?", "options": ["1948", "1950", "1952", "1954"], "correct": 1 },
    { "question": "באיזו שנה נחתם הסכם השילומים עם גרמניה?", "options": ["1950", "1952", "1954", "1956"], "correct": 1 },
    { "question": "מתי הוקמה יחידה 101?", "options": ["1948", "1950", "1953", "1956"], "correct": 2 },
    { "question": "באיזו שנה נערך מבצע קדש?", "options": ["1948", "1956", "1967", "1973"], "correct": 1 },
    { "question": "מתי נערך משפט אייכמן?", "options": ["1959", "1960", "1961", "1962"], "correct": 2 },
    { "question": "באיזו שנה פרצה מלחמת יום הכיפורים?", "options": ["1967", "1970", "1973", "1982"], "correct": 2 },
    { "question": "מתי נערך מבצע יונתן (אנטבה)?", "options": ["1973", "1974", "1976", "1978"], "correct": 2 },
    { "question": "מתי התרחש ה'מהפך' הפוליטי הראשון?", "options": ["1973", "1977", "1981", "1984"], "correct": 1 },
    { "question": "באיזו שנה נחתמו הסכמי קמפ דייוויד?", "options": ["1977", "1978", "1979", "1982"], "correct": 1 },
    { "question": "מתי נערך מבצע 'אופרה'?", "options": ["1979", "1981", "1983", "1985"], "correct": 1 },
    { "question": "באיזו שנה נערך מבצע משה?", "options": ["1981", "1984", "1988", "1991"], "correct": 1 },
    { "question": "מתי נערך מבצע שלמה?", "options": ["1988", "1991", "1994", "1996"], "correct": 1 },
    { "question": "באיזו שנה נחתמו הסכמי אוסלו?", "options": ["1991", "1993", "1995", "1997"], "correct": 1 },
    { "question": "באיזו שנה נרצח יצחק רבין?", "options": ["1994", "1995", "1996", "1998"], "correct": 1 },
    { "question": "באיזו שנה בוצעה תכנית ההתנתקות?", "options": ["2002", "2004", "2005", "2006"], "correct": 2 }
],
    "tradition_and_general": [
 { "question": "מהו התאריך הרווח ביותר לחגיגת חג המולד?", "options": ["01/01", "24/12", "25/12", "06/01"], "correct": 2 },
    { "question": "על איזו עדה חל חוק גיוס חובה בישראל?", "options": ["בדואים", "צ'רקסים ודרוזים", "נוצרים", "מוסלמים סונים"], "correct": 1 },
    { "question": "מהו ה'חאג''?", "options": ["תפילה", "צום", "עליה לרגל למכה", "מתן צדקה"], "correct": 2 },
    { "question": "מיהם הצ'רקסים?", "options": ["מוסלמים סונים ממוצא קווקזי", "נוצרים", "דרוזים", "בדואים"], "correct": 0 },
    { "question": "לאיזה חג מתקשר הביטוי 'יום ראשון של הדלקים'?", "options": ["חג המולד", "פסחא", "יום הנביא שועייב", "חג הקורבן"], "correct": 1 },
    { "question": "מהו 'צחור' (סחור)?", "options": ["ספר קדוש", "ארוחה המתחילה את צום הרמדאן", "יום תענית", "שם של נביא"], "correct": 1 },
    { "question": "למי מיוחס הנביא סבלאן מן העדה הדרוזית?", "options": ["זבולון בנו של יעקב", "יוסף הצדיק", "משה רבנו", "יתרו"], "correct": 0 },
    { "question": "מיהו הנביא אלח'דר במסורת הדרוזית?", "options": ["אליהו הנביא", "יוחנן המטביל", "אברהם אבינו", "משה"], "correct": 0 },
    { "question": "מהו 'עיד אל פיטר'?", "options": ["חג הקורבן", "חג סיום צום הרמדאן", "חג הולדת הנביא", "ראש השנה"], "correct": 1 },
    { "question": "כמה צבעים יש בדגל הדרוזי?", "options": ["3", "4", "5", "6"], "correct": 2 },
    { "question": "מהו חג ה'אפיפניה'?", "options": ["חג המולד", "חג ההתגלות", "חג הפסח", "חג השבועות"], "correct": 1 },
    { "question": "מהו חג 'הסיגד'?", "options": ["חג יהדות אתיופיה", "חג מוסלמי", "חג דרוזי", "חג נוצרי"], "correct": 0 },
    { "question": "איזו עיר קדושה לכל שלוש הדתות?", "options": ["נצרת", "חיפה", "ירושלים", "טבריה"], "correct": 2 },
    { "question": "מהו חג הקורבן (עיד אל אדחא)?", "options": ["חג לזכר עקדת ישמעאל", "חג סיום צום", "חג הולדת הנביא", "חג הקציר"], "correct": 0 },
    { "question": "באיזו עיר נמצאת 'הכיפה הירוקה' של העדה הדרוזית?", "options": ["שפרעם", "חטפין", "נבי שועייב (קרני חיטין)", "דלית אל כרמל"], "correct": 2 }
],
};

// לוגיקת המשחק שכתבת (היא מצוינת!)
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function prepareGame(category) {
    const countSelect = document.getElementById('question-count');
    const requestedCount = parseInt(countSelect.value);
    startGame(category, requestedCount);
}

function startGame(category, count) {
    if (category === 'all') {
        currentQuestions = Object.values(triviaData).flat();
    } else {
        currentQuestions = [...triviaData[category]];
    }
    shuffleArray(currentQuestions);
    currentQuestions = currentQuestions.slice(0, count);
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('category-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    answered = false;
    const questionData = currentQuestions[currentQuestionIndex];
    const correctAnswerText = questionData.options[questionData.correct];
    let shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswerText);

    document.getElementById('progress').innerText = `שאלה ${currentQuestionIndex + 1} מתוך ${currentQuestions.length}`;
    document.getElementById('score').innerText = `ניקוד: ${score}`;
    document.getElementById('question-text').innerText = questionData.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index, newCorrectIndex, button);
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex, correctIndex, clickedButton) {
    if (answered) return;
    answered = true;
    const buttons = document.getElementById('options-container').getElementsByTagName('button');
    if (selectedIndex === correctIndex) {
        clickedButton.classList.add('correct');
        score++;
    } else {
        clickedButton.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }, 1500);
}

function endGame() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = `סיימת עם ${score} תשובות נכונות מתוך ${currentQuestions.length}`;
}

function resetGame() {
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('category-screen').classList.remove('hidden');
}