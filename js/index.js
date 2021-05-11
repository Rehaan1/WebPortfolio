const faders = document.querySelectorAll(".fade-in"); //select all fade in Classes
const sliders = document.querySelectorAll(".slide-in");//select all slide in classes
const firstoverlay = document.querySelectorAll(".first-overlay");//select all first-overlay in classes
const secondoverlay = document.querySelectorAll(".second-overlay");//select all second-overlay in classes
const thirdoverlay = document.querySelectorAll(".third-overlay");//select all third-overlay in classes

const appearOptions = {
    threshold: 0.45, //45% of the screen should be in vieport to fade in
    rootMargin: "0px 0px -10px 0px" //reduce viewport size
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) //creating IntersectionObserver
  {
      entries.forEach(entry => {
        if(!entry.isIntersecting) //if not intersecting with page
        {
            entry.target.classList.remove('appear');
        }
        else
        {
            entry.target.classList.add('appear'); //adding class appear
        }
      })
  },appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader); //adding observe to all fader
  })
  
  sliders.forEach(slider=> {
    appearOnScroll.observe(slider);  //adding observe to all slider
  })

  firstoverlay.forEach(overlay=> {
    appearOnScroll.observe(overlay);  //adding observe to all slider
  })

  secondoverlay.forEach(overlay=> {
    appearOnScroll.observe(overlay);  //adding observe to all slider
  })

  thirdoverlay.forEach(overlay=> {
    appearOnScroll.observe(overlay);  //adding observe to all slider
  })


  
  
  