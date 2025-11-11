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

  // Smooth scroll for internal anchors with dynamic masthead offset
  var getMastheadOffset = function () {
    return ($('.masthead').outerHeight(true) || 70) + 10; // header height + small buffer
  };
  var offset = -getMastheadOffset();

  // Same-page anchors like #about-me
  $("a[href^='#']").smoothScroll({ offset: offset, speed: 400 });

  // Root-anchored links like /#about-me (same-document)
  $("a[href^='/#']").on('click', function(e) {
    var href = this.getAttribute('href');
    var hashIndex = href.indexOf('#');
    if (hashIndex === -1) return; // no hash
    var anchor = href.slice(hashIndex); // e.g., '#about-me'
    var $target = $(anchor);
    if ($target.length) {
      // Anchor exists on current page: prevent navigation and smoothly scroll
      e.preventDefault();
      $.smoothScroll({ scrollTarget: anchor, offset: offset, speed: 400 });
      if (history.pushState) history.pushState(null, '', anchor);
    }
    // Otherwise let browser navigate to home page with hash
  });

  // Absolute same-page anchors like https://domain/#about-me
  $("a[href^='http']").on('click', function(e) {
    var href = this.getAttribute('href');
    if (!href) return;
    var url;
    try { url = new URL(href, window.location.href); } catch (err) { return; }
    if (!url.hash) return; // no anchor
    // Only intercept if link points to the same document (same origin + same path)
    if (url.origin === window.location.origin && url.pathname === window.location.pathname) {
      var $target = $(url.hash);
      if ($target.length) {
        e.preventDefault();
        $.smoothScroll({ scrollTarget: url.hash, offset: offset, speed: 400 });
        if (history.pushState) history.pushState(null, '', url.hash);
      }
    }
  });

  // If page loaded with a hash, adjust position for header offset
  var initialHash = window.location.hash;
  if (initialHash && $(initialHash).length) {
    setTimeout(function() {
      // animate cross-page hash positioning as well
      $.smoothScroll({ scrollTarget: initialHash, offset: offset, speed: 400 });
    }, 0);
  }

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



});
