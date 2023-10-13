/*-------------------------------------------
スワイパーの読み込み
-------------------------------------------*/

  // 製品ラインナップ
  $(document).ready(function(){
    $('.mainvisual-class').slick({
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      loop:true,
      autoplay:false,
      autoplaySpeed: 5000,
      dots:true,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      variableWidth:true,
      centerMode: true,
      responsive:[
        {
          breakpoint:968,
          settings:{
          slidesToShow:1,
          centerMode: true,
          // adaptiveHeight:true,
        }},
      ],
    });
  });



// 主な製品ラインナップ
  $(document).ready(function(){
    $('.products-class').slick({
      pauseOnHover: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      // loop:true,
      dots: true,
      arrows: false,
      dotsClass: 'slider-dots',
      variableWidth:true,
      centerPadding: '20px',//ポイント！！！
      responsive:[
        {
          breakpoint:968,
          settings:{
          slidesToShow:2,
          variableWidth:true,
        }},
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            variableWidth:false,
          }
        },
      ],
    });
  });




  // 新着記事
$(document).ready(function(){
    $('.article-class').slick({
      Class: 'slider-articles',
      pauseOnHover: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      loop:true,
      dots: true,
      arrows: false,
      dotsClass: 'slider-dots',
      variableWidth:false,
      responsive:[
        {
          breakpoint:968,
          settings:{
          slidesToShow:1,
          variableWidth:true,
        }},
        {
          breakpoint:620,
          settings:{
          slidesToShow:1,
          variableWidth:false,
        }},
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            variableWidth:false,
          }
        },
      ],
    });
  });

  /*-------------------------------------------
円を描画するアニメーション  半径:200px
-------------------------------------------*/
  
  //    // スクロールイベント
  //    window.addEventListener('scroll', function() {
  //     // アニメーションを呼び出す
  //     animateCircle();
  // });

  // function animateCircle() {
  //     // 要素の縦位置を取得
  //     let target = document.querySelector('.svg1').getBoundingClientRect().top;
  //     // スクロール量を取得
  //     let scroll = window.scrollY;
  //     // 表示画面の高さを取得
  //     let windowHeight = window.innerHeight;

  //     // アニメーションをトリガーする条件
  //     if (scroll > target - windowHeight + 0) {
  //         document.querySelector('.circle1').style.animation = 'circle1 2s forwards'; // アニメーションを有効に
  //     }
  // }
  // // 初回のスクロールイベントをトリガー
  // animateCircle();
  //    // スクロールイベント
  //    window.addEventListener('scroll', function() {
  //     // アニメーションを呼び出す
  //     animateCircle();
  // });

  // function animateCircle() {
  //     // 要素の縦位置を取得
  //     let target = document.querySelector('.svg2').getBoundingClientRect().top;
  //     // スクロール量を取得
  //     let scroll = window.scrollY;
  //     // 表示画面の高さを取得
  //     let windowHeight = window.innerHeight;

  //     // アニメーションをトリガーする条件
  //     if (scroll > target - windowHeight + 0) {
  //         document.querySelector('.circle2').style.animation = 'circle2 2s forwards'; // アニメーションを有効に
  //     }
  // }
  // // 初回のスクロールイベントをトリガー
  // animateCircle();
  /*-------------------------------------------
円を描画するアニメーション  半径:160px
-------------------------------------------*/
//  // スクロールイベント
//  window.addEventListener('scroll', function() {
//   // アニメーションを呼び出す
//   animateCircle();
// });

// function animateCircle() {
//   // 要素の縦位置を取得
//   let target = document.querySelector('.svg2,.sv').getBoundingClientRect().top;
//   // スクロール量を取得
//   let scroll = window.scrollY;
//   // 表示画面の高さを取得
//   let windowHeight = window.innerHeight;

//   // アニメーションをトリガーする条件
//   if (scroll > target - windowHeight + 200) {
//       document.querySelector('.circle2').style.animation = 'circle2 2s forwards'; // アニメーションを有効に
//   }
// }
// // 初回のスクロールイベントをトリガー
// animateCircle();
  /*-------------------------------------------
画面を下にスクロールしていくと
アルファベットがランダムに変化してWe Value Serendipity.が出現
-------------------------------------------*/

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


  /*-------------------------------------------
ABOUT-US 左から右に流れるテキスト
-------------------------------------------*/
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

  /*-------------------------------------------
ABOUT-USセクション・ABOUTーUSテキストがふわっと出現する
-------------------------------------------*/
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


    /*-------------------------------------------
スクロールしていくと円が描画されるアニメーション
-------------------------------------------*/
