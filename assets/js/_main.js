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
  // Smooth scrolling for nav links with offset for fixed navigation
  $('.greedy-nav a[href^="#"]').on('click', function(e) {
    e.preventDefault(); // 阻止默认行为

    // this.hash 示例:
    // 如果链接是 <a href="#publications">Publications</a>
    // this.hash 将返回 "#publications"
    
    // target.selector 示例:
    // 可能返回不完整或错误的选择器字符串
    // 有时会返回 undefined
    
    var target = $(this.hash); // 获取目标
    if (!target.length) return; // 如果目标不存在，退出

    var navHeight = $('.masthead').outerHeight(); // 获取固定导航栏高度
    var offset = target.offset().top - navHeight - 20; // 额外 20px 空间

    // 平滑滚动到目标位置
    $('html, body').animate({
      scrollTop: offset
    }, {
      duration: 500,
      easing: 'swing',
      complete: function() {
        // 更新 URL 但不触发页面刷新
        if (history.pushState) {
          // 使用 this.hash 更可靠
          history.pushState(null, null, this.hash);  // 正确: 直接使用原始的锚点值
          
          // 不要使用 target.selector
          // history.pushState(null, null, target.selector);  // 错误: 可能获取不到正确的值
        }
      }.bind(this)  // bind(this) 确保在回调函数中能访问到原始的 this
    });
  });
});
