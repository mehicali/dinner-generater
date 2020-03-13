'use strict';
const decisionButton = document.getElementById('decision');
const imageDivided = document.getElementById('image-area');
const resultDivided = document.getElementById('result-area');
const searchDivided = document.getElementById('search-area');
 
/**
  * 指定した要素の子どもを全て削除する
  * @param {HTMLElement} element HTMLの要素
  */
 function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }

decisionButton.onclick = function () {
    var now = new Date();
    const pushTime = now.getTime();

    //画像エリアの再表示
    removeAllChildren(imageDivided);

    const image = document.createElement('img');
    image.setAttribute('src',"./cooking_chef.png");
    imageDivided.appendChild(image);

    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    
    const header = document.createElement('h3');
    header.innerText = '今日の夕飯は';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = decision(pushTime);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    // TODO 検索エリアの作成
    removeAllChildren(searchDivided);

    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'https://www.google.co.jp/search?q=' + result +'+'+ encodeURIComponent('レシピ'));
    anchor.innerText = result + 'のレシピを検索';
    searchDivided.appendChild(anchor);

}

const answers = [
    'カレー',
    'ハンバーグ',
    '焼き魚',
    '煮魚',
    'ギョウザ',
    'ピーマンの肉詰め',
    'チンジャオロース',
    'ビビンバ',
    'シチュー',
    '鶏肉とネギの焼いたやつ',
    'グラタン',
    'てんぷら',
    '唐揚げ',
    '親子丼',
    'オムライス',
    'おでん',
    '鍋',
    'シリコンスチーマー',
    'パリパリチキン',
    '鶏肉のトマトソース煮',
    '麻婆豆腐',
    'エビチリ',
    'チャーハン',
    '肉野菜炒め',
    'バンバンジー',
    '酢豚',
    'お好み焼き',
    '豚肉の生姜焼き',
    'ガパオライス',
    'かに玉'
];
/**
 * ボタンを押すとメニューを返す関数
 * @param {string} pushTime 押した時刻
 * @return {string} 診断結果
 */
function decision(pushTime){
    //押した時刻を回答の数で割って結果の添え字を求める
    let index = pushTime % answers.length;
    let result = answers[index];
    return result;
}
