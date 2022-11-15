

anime({
    targets: '#title path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 50 },
    direction: 'alternate',
    loop: false
  });
  
  anime({
    targets: '#back-btn path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    delay: function(el, i) { return i * 50 },
    direction: 'alternate',
    loop: false
  });