let myLcd = document.getElementById('lcd');
let myTextParagraph = document.getElementById('textParagraph');
let myTextArea = document.getElementById('textArea');
let myTimer = document.getElementById('timer');
let myCheckbox = document.getElementById('automaticScrollingCheckbox');
let text;
let keyTimes = [];
let started = false;
let startTime;
let now;
const charPerWord = 5;
let my10HzTimer;
let my1HzTimer;
const printable = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c';
let topHeight = 0;

let keyWpms = new Map();
for (let i = 0; i < printable.length; i++) {
    keyWpms.set(printable[i], {'t': 0, 'counter': 0, 'wpm': 0});
}

text = '\'Anyway, Harry, you\'re interfering with reception. Extendable Ears,\' he added in response to Harry\'s raised eyebrows, and held up the string which Harry now saw was trailing out on to the landing. \'We\'re trying to hear what\'s going on downstairs.\' \'You want to be careful,\' said Ron, staring at the Ear, \'if Mum sees one of them again ...\' \'It\'s worth the risk, that\'s a major meeting they\'re having,\' said Fred. The door opened and a long mane of red hair appeared. \'Oh, hello, Harry!\' said Ron\'s younger sister, Ginny, brightly. \'I thought I heard your voice.\' Turning to Fred and George, she said, \'It\'s no-go with the Extendable Ears, she\'s gone and put an Imperturbable Charm on the kitchen door.\' \'How d\'you know?\' said George, looking crestfallen. \'Tonks told me how to find out,\' said Ginny. \'You just chuck stuff at the door and if it can\'t make contact the door\'s been Imperturbed. I\'ve been flicking Dungbombs at it from the top of the stairs and they just soar away from it, so there\'s no way the Extendable Ears will be able to get under the gap.\' Fred heaved a deep sigh. \'Shame. I really fancied finding out what old Snape\'s been up to.\' \'Snape!\' said Harry quickly. \'Is he here?\' \'Yeah,\' said George, carefully closing the door and sitting down on one of the beds; Fred and Ginny followed. \'Giving a report. Top secret.\' \'Git,\' said Fred idly. \'He\'s on our side now,\' said Hermione reprovingly. Ron snorted. \'Doesn\'t stop him being a git. The way he looks at us when he sees us.\' \'Bill doesn\'t like him, either,\' said Ginny, as though that settled the matter. Harry was not sure his anger had abated yet; but his thirst for information was now overcoming his urge to keep shouting. He sank on to the bed opposite the others. \'Is Bill here?\' he asked. \'I thought he was working in Egypt?\' \'He applied for a desk job so he could come home and work for the Order,\' said Fred. \'He says he misses the tombs, but,\' he smirked, \'there are compensations.\' \'What d\'you mean?\' \'Remember old Fleur Delacour?\' said George.'
myTextParagraph.textContent = text;



function checkTypedText() {
    let textAreaContent = myTextArea.value;
    let state = new Map();

    state.set('complete', textAreaContent === text);
    state.set('correct', text.startsWith(textAreaContent));
    return state
}

function calculateSpeed(n, dt) {
    let charsPerSec = n / dt;
    let wordsPerMinute = charsPerSec / charPerWord * 60;
    return wordsPerMinute;
}


function my10HzMethods() {
    now = performance.now();
    if (started) {
        let wpm = calculateSpeed(myTextArea.textLength, (now - startTime) / 1000);
        myLcd.textContent =  wpm.toFixed(2);
    }
}

function my1HzMethods() {
    now = performance.now();
    let dt = (now - startTime) / 1000;
    let minutes = Math.floor(dt / 60);
    let seconds = Math.round(dt % 60);

    let minutesString = minutes < 10 ? String('0' + minutes) : String(minutes);
    let secondsString = seconds < 10 ? String('0' + seconds) : String(seconds);
    myTimer.textContent = 'Elapsed time: ' + minutesString + ':' + secondsString;
}

function myScrollingMethod() {
    now = performance.now();
    if (started) {
        let lowPassFilter = 0.005;
        myTextParagraph.scrollTop = Math.round(topHeight * lowPassFilter + myTextParagraph.scrollTop * (1 - lowPassFilter));
    }
}

function onChange() {

    now = performance.now();
    let n = myTextArea.textLength;

    if (!started && n > 0) {
        started = true;
        startTime = now;
        my1HzTimer = setInterval(my1HzMethods, 1000);
        my10HzTimer = setInterval(my10HzMethods, 100);
        myScrollingTimer = setInterval(myScrollingMethod, 100);

    }

    let state = checkTypedText();

    if (state.get('correct')) {
        myTextArea.style.background = "#565559";

        // todo when a letter gets deleted don't overwrite the one before it.
        if (n > 0) {
            keyTimes[n - 1] = (now - startTime) / 1000;
        }
        topHeight = scrollTextParagraphTop(n);

    } else {
        myTextArea.style.background = "#59484e";
    }


    if (state.get('complete')) {
        myTextArea.readOnly = true;
        clearInterval(my1HzTimer);
        clearInterval(my10HzTimer);
        clearInterval(myScrollingTimer);

        let wpm = calculateSpeed(myTextArea.textLength, keyTimes[keyTimes.length - 1]).toFixed(2);
        calculateKeyWpms();
    }

}

myTextArea.oninput = onChange;



function calculateKeyWpms() {
    console.log(keyTimes);

    for (let i = 1; i < keyTimes.length; i++) {
        keyWpms.get(text[i]).t += (keyTimes[i] - keyTimes[i - 1]);
        keyWpms.get(text[i]).counter++;
    }

    for (const [char, val] of  keyWpms) {
        if (keyWpms.get(char).counter > 0) {
            keyWpms.get(char).wpm = calculateSpeed(keyWpms.get(char).counter, keyWpms.get(char).t);
        }
    }
}

function scrollTextParagraphTop(n) {
    let textHeight = myTextParagraph.scrollHeight;
    let textParagraphHeight = myTextParagraph.clientHeight;
    let complete = n / text.length;
    return  complete * textHeight - textParagraphHeight / 2;
}

// ke
