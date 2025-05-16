//wait for HTML DOCUMENT TO FULLY LOAD BEFORE RUNNING JS
document.addEventListener("DOMContentLoaded", function () {
  //mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  // When hamburger is clicked, toggle 'active' class
  hamburger.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when a nav link is clicked
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
  //LOAD POSTS DYNAMICALLY
  const postsContainer = document.getElementById("postsContainer");
  const loadMoreBtn = document.getElementById("loadMore");

  if (postsContainer && loadMoreBtn) {
    let currentPage = 1;
    const postsPerPage = 2; // Number of posts to load at once

    // Function to load posts
    function loadPosts(page) {
      const posts = [
        {
          title: "Getting started with React",
          excerpt:
            "Learn the basics of React and how to set up your first project.",
          category: "Technology",
          author: "kimtech francis",
          date: "may 10 2025",
          image: "images/react.jpeg",
        },
        {
          title: "Healthy Eating Habits",
          excerpt:
            "Simple changes you can make to your diet for better health.",
          category: "Health",
          author: "Sarah Williams",
          date: "May 5, 2024",
          image: "images/pexels-shkrabaanthony-5588983.jpg",
        },
        {
          title: "Traveling on a Budget",
          excerpt:
            "Tips and tricks for seeing the world without breaking the bank.",
          category: "Travel",
          author: "David Mwangi",
          date: "May 3, 2025",
          image: "images/pexels-quang-nguyen-vinh-222549-2161449.jpg",
        },
        {
          title: "Introduction to Python",
          excerpt: "A beginner's guide to Python programming language.",
          category: "Technology",
          author: "Alex mwangi",
          date: "April 28, 2023",
          image: "images/pexels-divinetechygirl-1181373.jpg",
        },
      ];
      //calculate which post to show
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      const postsToDisplay = posts.slice(startIndex, endIndex);

      // create HTLM FOR EACH POST and ad to container
      postsToDisplay.forEach((post) => {
        const postElement = document.createElement("article");
        postElement.className = "post-card";
        postElement.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
          <div class="post-content">
            <span class="category">${post.category}</span>
            <h2><a href="post.html">${post.title}</a></h2>
            <p class="excerpt">${post.excerpt}</p>
            <div class="post-meta">
              <span class="author">By ${post.author}</span>
              <span class="date">${post.date}</span>
            </div>
          </div>
            `;
        postsContainer.appendChild(postElement);
      });
      //Hide "Load more " button if there are no more posts to display
      if (endIndex >= posts.length) {
        loadMoreBtn.style.display = "none";
      }
    }
    //Initial Load
    loadPosts(currentPage);
    //Load more posts when button is clicked
    loadMoreBtn.addEventListener("click", function () {
      currentPage++;
      loadPosts(currentPage);
    });
  }
  document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (validateEmail(email)) {
          alert(`Thank you for subscribing with ${email}!`);
          emailInput.value = "";
        } else {
          alert("Please enter a valid email address");
        }
      });
    }

    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  }); //NEWSLETTER FORM
  const newsLetterForm = this.getElementById("newsletterForm");
  if (newsLetterForm) {
    newsLetterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const emailInput = this.querySelector("input");
      const email = emailInput.value.trim();

      if (email) {
        alert(`Thankyou for subscribing with ${email}!`);
        emailInput.value = ""; //clear the input
      }
    });
  }
  // BACK TOP BUTTON
  const backToTopButton = document.createElement("button");
  backToTopButton.innerHTML = "↑";
  backToTopButton.className = "back-to-top";
  document.body.appendChild(backToTopButton);

  // Show the button when the user scrolls down
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  //about page AND hover effect to team members
  // Add hover effects to team members
  const teamMembers = document.querySelectorAll(".team-member");

  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", () => {
      member.style.transform = "translateY(-5px)";
      member.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });

    member.addEventListener("mouseleave", () => {
      member.style.transform = "translateY(0)";
      member.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
    });
  });
  //update coptyright year automatically
  document.querySelector(".copyright p").innerHTML =
    `&copy; ${new Date().getFullYear()}My Blog. All rights reserved.`;

  //contact us form
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // In a real application, you would send this data to a server
      console.log("Form submitted:", { name, email, message });

      // Show success message
      alert(
        `Thank you, ${name}! Your message has been sent. We'll get back to you soon.`,
      );

      // Reset form
      this.reset();
    });
});
