/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({offset: -65});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });


  

  // Smooth scrolling for nav links
  // $('.greedy-nav a[href^="#"]').on('click', function(e) {
  //   e.preventDefault(); // 阻止默认行为
    
  //   var target = $(this.hash);
  //   if (!target.length) return; // 如果目标不存在则退出
    
  //   // 禁用其他点击事件
  //   $('body').css('pointer-events', 'none');
    
  //   // 使用 scrollIntoView 进行平滑滚动
  //   target[0].scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start'
  //   });

  //   // 动画完成后重新启用点击事件
  //   setTimeout(function() {
  //     $('body').css('pointer-events', 'auto');
      
  //     // 更新 URL 但不触发跳转
  //     if (history.replaceState) {
  //       history.replaceState(null, null, target.selector);
  //     }
  //   }, 500); // 动画持续时间与 scrollIntoView 保持一致
  // });
  // Smooth scrolling for nav links with offset for fixed navigation
  $('.greedy-nav a[href^="#"]').on('click', function(e) {
    e.preventDefault(); // 阻止默认行为

    var target = $(this.hash); // 获取目标
    if (!target.length) return; // 如果目标不存在，退出

    var navHeight = $('.greedy-nav').outerHeight(); // 获取固定导航栏高度
    var targetOffset = target.offset().top - navHeight; // 计算滚动偏移量

    // 使用 jQuery animate 方法平滑滚动
    $('html, body').animate({
      scrollTop: targetOffset
    }, 500, 'swing'); // 动画持续时间 500ms，缓动效果 swing

    // 更新 URL（不会触发页面跳转）
    if (history.replaceState) {
      history.replaceState(null, null, this.hash);
    }
  });
});
