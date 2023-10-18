/*-------------------------------------------
スワイパーの読み込み
-------------------------------------------*/

  // 製品ラインナップ
  // $(document).ready(function(){
  //   $('.mainvisual-class').slick({
  //     pauseOnHover: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  
  //     loop:true,
  //     autoplay:true,
  //     autoplaySpeed: 5000,
  //     dots:true,
  //     // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  //     // nextArrow: '<button class="slide-arrow next-arrow"></button>',
  //     variableWidth:true,
  //     centerMode: true,
      
  //     responsive:[
  //       {
  //         breakpoint:968,
  //         settings:{
  //         slidesToShow:1,
  //         centerMode: true,
  
  //       }},
  //     ],
  //   });
  // });



  function postMessageToPlayer(player, command){
    if (player == null || command == null) return;
    player.contentWindow.postMessage(JSON.stringify(command), "*");
  }
  
  // When the slide is changing
  function playPauseVideo(slick, control){
    var currentSlide, slideType, startTime, player, video;
  
    currentSlide = slick.find(".slick-current");
    slideType = currentSlide.attr("class").split(" ")[1];
    player = currentSlide.find("iframe").get(0);
    startTime = currentSlide.data("video-start");
  
    if (slideType === "vimeo") {
      switch (control) {
        case "play":
          if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
            currentSlide.addClass('started');
            postMessageToPlayer(player, {
              "method": "setCurrentTime",
              "value" : startTime
            });
          }
          postMessageToPlayer(player, {
            "method": "play",
            "value" : 1
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "method": "pause",
            "value": 1
          });
          break;
      }
    } else if (slideType === "youtube") {
      switch (control) {
        case "play":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "mute"
          });
          postMessageToPlayer(player, {
            "event": "command",
            "func": "playVideo"
          });
          break;
        case "pause":
          postMessageToPlayer(player, {
            "event": "command",
            "func": "pauseVideo"
          });
          break;
      }
    } else if (slideType === "video") {
      video = currentSlide.children("video").get(0);
      if (video != null) {
        if (control === "play"){
          video.play();
        } else {
          video.pause();
        }
      }
    }
  }
  
  // Resize player
  function resizePlayer(iframes, ratio) {
    if (!iframes[0]) return;
    var win = $(".main-slider"),
        width = win.width(),
        playerWidth,
        height = win.height(),
        playerHeight,
        ratio = ratio || 16/9;
  
    iframes.each(function(){
      var current = $(this);
      if (width / ratio < height) {
        playerWidth = Math.ceil(height * ratio);
        current.width(playerWidth).height(height).css({
          left: (width - playerWidth) / 2,
           top: 0
          });
      } else {
        playerHeight = Math.ceil(width / ratio);
        current.width(width).height(playerHeight).css({
          left: 0,
          top: (height - playerHeight) / 2
        });
      }
    });
  }
  
  // DOM Ready
  $(function() {
    // Initialize
    slideWrapper.on("init", function(slick){
      slick = $(slick.currentTarget);
      setTimeout(function(){
        playPauseVideo(slick,"play");
      }, 1000);
      resizePlayer(iframes, 16/9);
    });
    slideWrapper.on("beforeChange", function(event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick,"pause");
    });
    slideWrapper.on("afterChange", function(event, slick) {
      slick = $(slick.$slider);
      playPauseVideo(slick,"play");
    });
    slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
      lazyCounter++;
      if (lazyCounter === lazyImages.length){
        lazyImages.addClass('show');
        // slideWrapper.slick("slickPlay");
      }
    });
  
    //start the slider
    slideWrapper.slick({
      // fade:true,
      autoplaySpeed:4000,
      lazyLoad:"progressive",
      speed:600,
      arrows:false,
      dots:true,
      cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
    });
  });
  
  // Resize event
  $(window).on("resize.slickVideoPlayer", function(){  
    resizePlayer(iframes, 16/9);
  });

  // $(document).ready(function(){
  //   $('.mainvisual-class').slick({
  //     pauseOnHover: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  
  //     loop:true,
  //     autoplay:true,
  //     autoplaySpeed: 5000,
  //     dots:true,
  //     prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  //     nextArrow: '<button class="slide-arrow next-arrow"></button>',
  //     variableWidth:true,
  //     centerMode: true,
      
  //     responsive:[
  //       {
  //         breakpoint:968,
  //         settings:{
  //         slidesToShow:1,
  //         centerMode: true,
  
  //       }},
  //     ],
  //   });
  // });


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
      centerPadding: '20px',
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