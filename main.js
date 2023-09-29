//slickの設定
$('.slider').slick({
  autoplay:true, //自動スライド
slidesToShow: 1,
loop: 1,
// infinite: false,
centerMode:true,
  centerPadding: '25%',
  autoplaySpeed:5000, //スライドさせる間隔
  dots:true, //ドットインジケーターを表示
  lazyLoad:"progressive", //画像の遅延読み込み
  arrows:true, //スライドの左右の矢印ボタンを非表示
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
　 　cssEase:"cubic-bezier(0.9, 0.03, 0.4, 0.9)",　//CSS3アニメーションイージングを設定
　 　pauseOnHover:false,
dots: true,//下部ドットナビゲーションの表示
pauseOnFocus: false,//フォーカスで一時停止を無効
pauseOnHover: false,//マウスホバーで一時停止を無効
pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});
// YouTubeの埋め込み
function onYouTubeIframeAPIReady() {
ytPlayer = new YT.Player(
'youtube', // 埋め込む場所の指定
{
  videoId: 'q6T0wOMsNrI', // YouTubeのID
  playerVars: {
      height: '100%',
      width: '100%',
      loop: 1,//ループ設定
      playlist: 'q6T0wOMsNrI',//次に流すYouTubeのID　loopの設定が１の場合必須
      controls: 0,//コントローラー無し
      autoplay: 1,//オートプレイ
      showinfo: 0,//動画タイトル表示しない
      rel: 0,//関連動画の制御
      iv_load_policy: 3,//動画のアノテーション
      start: 30 //スタート秒数の指定
  },
  events: {
      'onReady': onPlayerReady
  }
}
);
}
//プレイ準備完了後
function onPlayerReady(event) {
event.target.playVideo();
event.target.mute();
}

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述



var arr = []
//初期値の設定
function TypingInit() {
  $('.js_typing').each(function (i) { //js_typingクラスを全て処理をおこなう
    arr[i] = new ShuffleText(this);//動作させるテキストを配列に格納
  });
}
//スクロールした際のアニメーションの設定
function TypingAnime() {
  $(".js_typing").each(function (i) {
    var elemPos = $(this).offset().top - 50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      if(!$(this).hasClass("endAnime")){//endAnimeのクラスがあるかチェック
        arr[i].start();//配列で登録テキストのアニメーションをおこなう
        arr[i].duration = 800;//テキストが最終変化するまでの時間※規定値600
        $(this).addClass("endAnime");//１度アニメーションした場合はendAnimeクラスを追加
      }
    }else{
      $(this).removeClass("endAnime"); //範囲外にスクロールした場合はendAnimeのクラスを削除
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  TypingInit(); //初期設定
  TypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

function slideAnime(){
  //====左に動くアニメーションここから===
    $('.leftAnime').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
        //左から右へ表示するクラスを付与
        //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
        $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
      }else{
        //左から右へ表示するクラスを取り除く
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
        
      }
    });
    
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    slideAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述