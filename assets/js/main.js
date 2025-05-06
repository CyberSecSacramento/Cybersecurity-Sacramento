document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current page in navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPath === linkPath || 
        (linkPath !== '/' && currentPath.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });
  
  // Mobile dropdown menu toggle
  const dropdownLinks = document.querySelectorAll('.dropdown > a');
  
  dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only handle click for mobile view
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.parentElement;
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown.active').forEach(activeDropdown => {
          if (activeDropdown !== dropdown) {
            activeDropdown.classList.remove('active');
          }
        });
        
        // Toggle current dropdown
        dropdown.classList.toggle('active');
      }
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // War Games terminal typing effect
  const wargamesText = document.querySelector('.wargames-text');
  if (wargamesText) {
    const lines = [
      "HOW ABOUT A NICE GAME OF",
      "GLOBAL THERMONUCLEAR",
      "WAR?"
    ];
    
    // Remove existing cursor if any
    const existingCursor = document.querySelector('.wargames-cursor');
    if (existingCursor) {
      existingCursor.remove();
    }
    
    // Clear existing content
    wargamesText.innerHTML = '';
    
    // Create elements for each line
    const paragraphs = lines.map(() => {
      const p = document.createElement('p');
      wargamesText.appendChild(p);
      return p;
    });
    
    // Type each line sequentially
    const typeLines = (lineIndex = 0) => {
      if (lineIndex >= lines.length) {
        // All lines typed, add cursor to the last line
        const cursor = document.createElement('span');
        cursor.className = 'wargames-cursor';
        paragraphs[lines.length - 1].appendChild(cursor);
        return;
      }
      
      const line = lines[lineIndex];
      const p = paragraphs[lineIndex];
      let charIndex = 0;
      
      const typeChar = () => {
        if (charIndex < line.length) {
          p.textContent += line.charAt(charIndex);
          charIndex++;
          setTimeout(typeChar, 100);
        } else {
          // Move to next line after finishing current line
          setTimeout(() => typeLines(lineIndex + 1), 500);
        }
      };
      
      // Start typing this line
      typeChar();
    };
    
    // Start the typing effect
    setTimeout(() => typeLines(0), 1000);
  }

  // Add blinking cursor to headers (disabled for CoC page)
  const addCursorToElement = (selector) => {
    // Skip adding cursor on the Code of Conduct page
    if (window.location.pathname.includes('CoC')) return;
    
    const element = document.querySelector(selector);
    if (element) {
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      element.appendChild(cursor);
    }
  };

  // Add cursor to main title (except on CoC page)
  addCursorToElement('header h1');

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Initialize console typing effect (to be implemented later)
  // This is a placeholder for the future implementation
  const initConsoleTyping = () => {
    // Will be implemented in a future update
    console.log('Console typing effect will be implemented later');
  };

  // Enhance code blocks with copy button
  document.querySelectorAll('pre').forEach(pre => {
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.textContent = 'Copy';
    
    copyButton.addEventListener('click', () => {
      const code = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy';
        }, 2000);
      });
    });
    
    pre.appendChild(copyButton);
  });

  // Add hover effect to social links
  document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = '';
    });
  });
});
