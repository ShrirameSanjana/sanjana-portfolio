/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Developer...", "Ethical Hacker..."],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  


/* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

      }  else {

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

      }
    })
  }

  window.addEventListener('scroll', scrollActive)

/* ----- BUTTON HANDLERS: HIRE ME, DOWNLOAD CV, SEND MESSAGE ----- */
  document.addEventListener('DOMContentLoaded', function() {
    var hireMeBtn = document.getElementById('btnHireMe');
    var downloadCvNav = document.getElementById('btnDownloadCvNav');
    var downloadCvFeatured = document.getElementById('btnDownloadCvFeatured');
    var downloadCvAbout = document.getElementById('btnDownloadCvAbout');
    var sendBtn = document.getElementById('btnSendMessage');

    function smoothScrollToContact() {
      var contactSection = document.getElementById('contact');
      if (contactSection && contactSection.scrollIntoView) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = '#contact';
      }
    }

    function handleDownloadCv() {
      var cvPath = 'assets/cv/Sanjana_Shrirame_CV.pdf';
      fetch(cvPath, { method: 'HEAD' })
        .then(function(resp) {
          if (resp.ok) {
            var link = document.createElement('a');
            link.href = cvPath;
            link.download = '';
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            alert('CV file not found. Please add it at ' + cvPath + ' or share the correct path.');
          }
        })
        .catch(function() {
          alert('Unable to access CV file. Please try again later or verify the file path.');
        });
    }

    function handleSendMessage() {
      var nameInput = document.getElementById('inputName');
      var emailInput = document.getElementById('inputEmail');
      var messageInput = document.getElementById('inputMessage');

      var name = nameInput ? nameInput.value.trim() : '';
      var email = emailInput ? emailInput.value.trim() : '';
      var message = messageInput ? messageInput.value.trim() : '';

      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !email || !message) {
        alert('Please fill in Name, Email, and Message.');
        return;
      }
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      var recipient = 'shriramesanjana@gmail.com';
      var subject = encodeURIComponent('Portfolio Contact from ' + name);
      var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
      var mailtoUrl = 'mailto:' + recipient + '?subject=' + subject + '&body=' + body;

      window.location.href = mailtoUrl;
    }

    if (hireMeBtn) {
      hireMeBtn.addEventListener('click', smoothScrollToContact);
    }
    if (downloadCvNav) {
      downloadCvNav.addEventListener('click', handleDownloadCv);
    }
    if (downloadCvFeatured) {
      downloadCvFeatured.addEventListener('click', handleDownloadCv);
    }
    if (downloadCvAbout) {
      downloadCvAbout.addEventListener('click', handleDownloadCv);
    }
    if (sendBtn) {
      sendBtn.addEventListener('click', handleSendMessage);
    }
  })