// Course Data (Add this after the existing script)
const courses = [
  {
    title: "Java Programming",
    image: "images/picture/card-1.png",
    startDate: "May 20, 2025",
    seats: 60,
    price: 49.99,
    description: "Master Java programming from basic syntax to advanced OOP concepts. Learn collections, multithreading, and JavaFX for GUI development.",
    instructor: "Md Dipu",
    duration: "8 weeks",
    category: "Programming",
    difficulty: "Intermediate"
  },
  {
    title: "Python for Beginners",
    image: "images/picture/card-2.png",
    startDate: "May 1, 2025",
    seats: 45,
    price: 59.99,
    description: "Start your programming journey with Python. Learn data types, functions, modules, and work with popular libraries like NumPy and Pandas.",
    instructor: "John Doe",
    duration: "10 weeks",
    category: "Programming",
    difficulty: "Beginner"
  },
  {
    title: "C/C++ Fundamentals",
    image: "images/picture/card-3.png",
    startDate: "June 15, 2025",
    seats: 30,
    price: 69.99,
    description: "Deep dive into low-level programming with C/C++. Learn memory management, pointers, and system programming concepts.",
    instructor: "Sarah Johnson",
    duration: "6 weeks",
    category: "Programming",
    difficulty: "Advanced"
  },
  {
    title: "Database Systems",
    image: "images/picture/card-4.png",
    startDate: "June 15, 2025",
    seats: 60,
    price: 69.99,
    description: "Comprehensive database course covering SQL, NoSQL, database design, and optimization techniques. Work with MySQL and MongoDB.",
    instructor: "Michael Stonebraker",
    duration: "10 weeks",
    category: "Database",
    difficulty: "Intermediate"
  },
  {
    title: "Machine Learning Basics",
    image: "images/picture/card-5.png",
    startDate: "June 20, 2025",
    seats: 30,
    price: 69.99,
    description: "Introduction to machine learning concepts. Implement algorithms using Scikit-learn and TensorFlow. Work on real-world projects.",
    instructor: "Andrew Ng",
    duration: "16 weeks",
    category: "AI/ML",
    difficulty: "Advanced"
  },
  {
    title: "Web Development",
    image: "images/picture/card-6.png",
    startDate: "July 15, 2025",
    seats: 60,
    price: 69.99,
    description: "Full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js. Build complete web applications.",
    instructor: "Brendan Eich",
    duration: "16 weeks",
    category: "Web Development",
    difficulty: "Intermediate"
  }
  
];

// Initialize Courses
document.addEventListener('DOMContentLoaded', () => {
  const courseDeck = document.querySelector('.card-deck');
  
  // Clear existing static content
  courseDeck.innerHTML = '';
  
  // Generate new course cards dynamically
  courses.forEach((course, index) => {
    const courseCard = document.createElement('div');
    courseCard.className = 'col-md-6 col-lg-4 mb-4';
    courseCard.innerHTML = `
      <div class="card h-100">
        <img src="${course.image}" class="card-img-top" alt="${course.title}">
        <div class="card-body">
          <h5 class="card-title">${course.title}</h5>
          <p class="card-text">${course.category} - ${course.difficulty}</p>
          <button class="buy-btn">Buy Course ($${course.price})</button>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <div class="date d-flex">
              <img src="images/icon/calendar.png" alt="Start Date">
              <h6>${course.startDate}</h6>
            </div>
            <div class="date d-flex">
              <img src="images/icon/people.png" alt="Seats">
              <h6>${course.seats} seats</h6>
            </div>
          </div>
        </div>
      </div>
    `;
    
    
    // Add click handlers
    courseCard.querySelector('.card-title').addEventListener('click', () => showCourseDetails(index));
    courseCard.querySelector('.card-img-top').addEventListener('click', () => showCourseDetails(index));
    courseCard.querySelector('.buy-btn').addEventListener('click', (e) => {
      e.preventDefault();
      showCheckout(index);
    });
    
    courseDeck.appendChild(courseCard);
  });
});

// Show Course Details
function showCourseDetails(index) {
  const course = courses[index];
  const detailsModal = document.getElementById('detailsModal');
  
  detailsModal.querySelector('#detailsTitle').textContent = course.title;
  detailsModal.querySelector('#detailsImage').src = course.image;
  detailsModal.querySelector('#detailsDescription').textContent = course.description;
  detailsModal.querySelector('#detailsInstructor').textContent = course.instructor;
  detailsModal.querySelector('#detailsDuration').textContent = course.duration;
  detailsModal.querySelector('#detailsPrice').textContent = `$${course.price.toFixed(2)}`;
  detailsModal.querySelector('#detailsSeats').textContent = course.seats;
  detailsModal.querySelector('#detailsStartDate').textContent = course.startDate;
  
  new bootstrap.Modal(detailsModal).show();
}

// Show Checkout
function showCheckout(index) {
  const course = courses[index];
  const checkoutModal = document.getElementById('checkoutModal');
  
  checkoutModal.querySelector('#courseTitle').textContent = course.title;
  checkoutModal.querySelector('#courseImage').src = course.image;
  checkoutModal.querySelector('#courseStartDate').textContent = course.startDate;
  checkoutModal.querySelector('#courseSeats').textContent = course.seats;
  checkoutModal.querySelector('#coursePrice').textContent = course.price.toFixed(2);
  checkoutModal.querySelector('#totalPrice').textContent = course.price.toFixed(2);
  checkoutModal.querySelector('#courseDescription').textContent = course.description;
  
  new bootstrap.Modal(checkoutModal).show();
}


// Checkout Form Handling
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvc = document.getElementById('cvc').value;

  if (!name || !email || !cardNumber || !expiryDate || !cvc) {
    alert('Please fill in all required fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (!validateCardNumber(cardNumber)) {
    alert('Please enter a valid card number (16 digits).');
    return;
  }

  if (!validateExpiryDate(expiryDate)) {
    alert('Please enter a valid expiry date (MM/YY).');
    return;
  }

  if (!validateCVC(cvc)) {
    alert('Please enter a valid CVC (3 digits).');
    return;
  }

  // Simulate API call
  setTimeout(() => {
    $('#checkoutModal').modal('hide');
    this.reset();
    alert(`Thank you for your purchase, ${name}! You'll receive a confirmation email at ${email}.`);
  }, 1000);
});

// Validation Helpers
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validateCardNumber(number) {
  return /^\d{16}$/.test(number.replace(/\s/g, ''));
}

function validateExpiryDate(date) {
  return /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(date);
}

function validateCVC(cvc) {
  return /^\d{3}$/.test(cvc);
}

// Reset form when modal closes
$('#checkoutModal').on('hidden.bs.modal', () => {
  document.getElementById('checkoutForm').reset();
});
// Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send this data to your backend
        console.log('Login attempt with:', email, password);
        
        // For demo purposes, just show an alert
        alert('Login functionality would be implemented here. Email: ' + email);
        $('#loginModal').modal('hide');
    });

    // Handle signup form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // Here you would typically send this data to your backend
        console.log('Signup attempt with:', firstName, lastName, email, password);
        
        // For demo purposes, just show an alert
        alert('Signup functionality would be implemented here. Welcome ' + firstName + '!');
        $('#signupModal').modal('hide');
    });

    // Handle forgot password form submission
    document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;
        
        // Here you would typically send this data to your backend
        console.log('Password reset requested for:', email);
        
        // For demo purposes, just show an alert
        alert('Password reset link would be sent to: ' + email);
        $('#forgotPasswordModal').modal('hide');
    });

    // Forgot password link click handler
    document.getElementById('forgotPassword').addEventListener('click', function(e) {
        e.preventDefault();
        $('#loginModal').modal('hide');
        $('#forgotPasswordModal').modal('show');
    });

    // Blog Data
const blogPosts = [
    {
        title: "Getting Started with Java Programming",
        image: "images/picture/blog-1.png",
        date: "May 15, 2024",
        category: "Programming",
        excerpt: "Learn the fundamentals of Java programming and start your journey into software development...",
        content: "For full documentation, visit <a href='https://medium.com/@mlvandijk/getting-started-with-java-programming-91323a25e5e6' target='_blank'>Medium</a>."
    },
    {
        title: "Mastering Python for Data Science",
        image: "images/picture/blog-2.png",
        date: "May 18, 2024",
        category: "Data Science",
        excerpt: "Discover how Python is revolutionizing the field of data science and machine learning...",
        content: "For full documentation, visit <a href='https://www.kdnuggets.com/mastering-python-for-data-science-beyond-the-basics' target='_blank'>kdnuggets</a>."
    },
    {
        title: "Web Development Best Practices 2025",
        image: "images/picture/blog-3.png",
        date: "May 20, 2024",
        category: "Web Development",
        excerpt: "Stay up-to-date with the latest trends and best practices in modern web development...",
        content: "For full documentation, visit <a href='https://www.netguru.com/blog/web-development-best-practices' target='_blank'>NetGuru</a>."
    }
];

// Initialize Blog
function loadBlogPosts(start = 0, count = 3) {
    const blogContainer = document.getElementById('blogPosts');
    const end = start + count;
    
    blogPosts.slice(start, end).forEach(post => {
        const blogPost = document.createElement('div');
        blogPost.className = 'col-lg-4 col-md-6 mb-4';
        blogPost.innerHTML = `
            <div class="blog-post">
                <img src="${post.image}" class="blog-image img-fluid" alt="${post.title}">
                <div class="blog-content">
                    <div class="post-meta">
                        <span class="post-date">${post.date}</span>
                        <span class="post-category">${post.category}</span>
                    </div>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more" data-toggle="modal" data-target="#blogModal">Read More →</a>
                </div>
            </div>
        `;
        
        blogPost.querySelector('.read-more').addEventListener('click', () => {
            showBlogPost(post);
        });
        
        blogContainer.appendChild(blogPost);
    });
}

// Blog Modal
function showBlogPost(post) {
    document.getElementById('blogModalTitle').textContent = post.title;
    document.getElementById('blogModalImage').src = post.image;
    document.getElementById('blogModalContent').innerHTML = `
        <div class="post-meta mb-3">
            <span class="post-date">${post.date}</span>
            <span class="post-category">${post.category}</span>
        </div>
        ${post.content}
    `;
    
    new bootstrap.Modal(document.getElementById('blogModal')).show();
}

// Load initial blog posts
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
    
    // Load More functionality
    let currentCount = 3;
    document.getElementById('loadMore').addEventListener('click', () => {
        loadBlogPosts(currentCount);
        currentCount += 3;
        if(currentCount >= blogPosts.length) {
            document.getElementById('loadMore').disabled = true;
        }
    });
});
// Instructor Form Handling
document.getElementById('instructorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('instructorFirstName').value,
        lastName: document.getElementById('instructorLastName').value,
        email: document.getElementById('instructorEmail').value,
        experience: document.getElementById('instructorExperience').value,
        expertise: document.getElementById('instructorExpertise').value,
        linkedin: document.getElementById('instructorLinkedin').value,
        resume: document.getElementById('instructorResume').files[0],
        message: document.getElementById('instructorMessage').value
    };

    if (!validateInstructorForm(formData)) {
        return;
    }

    // Simulate API call
    const reader = new FileReader();
    reader.onload = function() {
        setTimeout(() => {
            $('#instructorModal').modal('hide');
            showToast('Application submitted successfully! We will contact you soon.', 'success');
            this.reset();
        }, 1500);
    };
    reader.readAsDataURL(formData.resume);
});

function validateInstructorForm(formData) {
    if (!formData.firstName || !formData.lastName || !formData.email) {
        showToast('Please fill in all required fields', 'error');
        return false;
    }
    
    if (!validateEmail(formData.email)) {
        showToast('Please enter a valid email address', 'error');
        return false;
    }
    
    if (formData.experience < 1) {
        showToast('Minimum 1 year of experience required', 'error');
        return false;
    }
    
    if (!formData.linkedin.includes('linkedin.com')) {
        showToast('Please provide a valid LinkedIn profile URL', 'error');
        return false;
    }
    
    return true;
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}