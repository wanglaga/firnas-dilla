gsap.from('.relative .teks-one', { duration: 2.5, rorateY: 360, opacity: 0 })
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    content: ".viewport",
    smooth: 1
  });

  
$('.accordion-item').on('shown.bs.collapse', function () {
    ScrollTrigger.refresh();
  }).on('hidden.bs.collapse', function() {
    ScrollTrigger.refresh();
  });
