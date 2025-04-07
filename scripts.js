const texts = ["I'm Ayeni Victor", "Frontend Developer", "Wed Designer", "UI/UX Designer"];
        let index = 0;
        let charIndex = 0;
        const typingSpeed = 100;
        const erasingSpeed = 50;
        const delayBetweenTexts = 1500;
        const typingTextElement = document.getElementById("typing-text");

        function typeText() {
            if (charIndex < texts[index].length) {
                typingTextElement.innerHTML = texts[index].substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            } else {
                setTimeout(eraseText, delayBetweenTexts);
            }
        }

        function eraseText() {
            if (charIndex > 0) {
                typingTextElement.innerHTML = texts[index].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(eraseText, erasingSpeed);
            } else {
                index = (index + 1) % texts.length;
                setTimeout(typeText, typingSpeed);
            }
        }

        
// about section
         
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(typeText, typingSpeed);
        });

        document.addEventListener("DOMContentLoaded", function() {
            const aboutSection = document.querySelector(".about");
            function handleScroll() {
                const aboutPosition = aboutSection.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (aboutPosition < screenPosition) {
                    aboutSection.classList.add("show");
                }
            }
            window.addEventListener("scroll", handleScroll);
            handleScroll();
        });


        //Skills Section
        $(document).ready(function(){
            $('.skills-slider').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });


        // (function() {
        //     // Initialize EmailJS with your user ID (sign up at https://www.emailjs.com/)
        //     emailjs.init("fovfWw-i2W7-ip4YYB1kE"); // Replace with your actual EmailJS user ID
            
        //     document.getElementById('contactForm').addEventListener('submit', function(event) {
        //         event.preventDefault();
                
        //         // Show loading state
        //         const button = this.querySelector('button[type="submit"]');
        //         const originalText = button.innerHTML;
        //         button.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        //         button.disabled = true;
                
        //         // Prepare template parameters
        //         const templateParams = {
        //             from_name: document.getElementById('name').value,
        //             from_email: document.getElementById('email').value,
        //             subject: document.getElementById('subject').value,
        //             message: document.getElementById('message').value
        //         };
                
        //         // Send email using EmailJS
        //         emailjs.send('service_a831kto', 'template_3nzoy58', templateParams)
        //             .then(function() {
        //                 // Show success message
        //                 document.getElementById('successMessage').style.display = 'block';
        //                 document.getElementById('errorMessage').style.display = 'none';
                        
        //                 // Reset form
        //                 document.getElementById('contactForm').reset();
                        
        //                 // Reset button
        //                 button.innerHTML = originalText;
        //                 button.disabled = false;
                        
        //                 // Hide success message after 5 seconds
        //                 setTimeout(function() {
        //                     document.getElementById('successMessage').style.display = 'none';
        //                 }, 5000);
        //             }, function(error) {
        //                 // Show error message
        //                 document.getElementById('errorMessage').style.display = 'block';
        //                 document.getElementById('successMessage').style.display = 'none';
                        
        //                 // Reset button
        //                 button.innerHTML = originalText;
        //                 button.disabled = false;
                        
        //                 console.error('Email sending failed:', error);
        //             });
        //     });
        // })();


 // Set current year for copyright
 document.getElementById('current-year').textContent = new Date().getFullYear();


 //back to top
 // JavaScript for Back to Top functionality
 document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // For modern browsers
      if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        // Fallback for older browsers
        const scrollToTop = function() {
          const currentPosition = window.pageYOffset;
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
          }
        };
        scrollToTop();
      }
    });
  });