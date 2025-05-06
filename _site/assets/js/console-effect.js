/**
 * Console Typing Effect
 * 
 * This script creates a typing effect that mimics typing in a console/terminal.
 * It can be applied to any element with the class 'console-effect'.
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find all elements with the console-effect class
  const consoleElements = document.querySelectorAll('.console-effect');
  
  consoleElements.forEach(element => {
    // Store the original text
    const originalText = element.textContent;
    // Clear the element
    element.textContent = '';
    
    // Create a cursor element
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    element.appendChild(cursor);
    
    // Start typing effect with a slight delay
    setTimeout(() => {
      typeText(element, originalText, cursor, 0);
    }, 500);
  });
  
  // Function to type text character by character
  function typeText(element, text, cursor, index) {
    if (index < text.length) {
      // Remove cursor temporarily
      if (cursor.parentNode === element) {
        element.removeChild(cursor);
      }
      
      // Add the next character
      element.textContent += text.charAt(index);
      
      // Add cursor back
      element.appendChild(cursor);
      
      // Random typing speed between 50ms and 150ms
      const typingSpeed = Math.floor(Math.random() * 100) + 50;
      
      // Type the next character after a delay
      setTimeout(() => {
        typeText(element, text, cursor, index + 1);
      }, typingSpeed);
    }
  }
  
  // Add console typing effect to code blocks
  const codeBlocks = document.querySelectorAll('pre code');
  
  codeBlocks.forEach(codeBlock => {
    // Store the original code
    const originalCode = codeBlock.textContent;
    // Clear the code block
    codeBlock.textContent = '';
    
    // Create a cursor element
    const codeCursor = document.createElement('span');
    codeCursor.className = 'cursor';
    codeBlock.appendChild(codeCursor);
    
    // Start typing effect with a delay
    setTimeout(() => {
      typeCode(codeBlock, originalCode, codeCursor, 0);
    }, 800);
  });
  
  // Function to type code with line breaks
  function typeCode(element, code, cursor, index) {
    if (index < code.length) {
      // Remove cursor temporarily
      if (cursor.parentNode === element) {
        element.removeChild(cursor);
      }
      
      // Add the next character
      element.textContent += code.charAt(index);
      
      // Add cursor back
      element.appendChild(cursor);
      
      // Faster typing for code (30-80ms)
      const typingSpeed = Math.floor(Math.random() * 50) + 30;
      
      // Type the next character after a delay
      setTimeout(() => {
        typeCode(element, code, cursor, index + 1);
      }, typingSpeed);
    }
  }
  
  // Add "hacker" effect to elements with class 'hacker-text'
  const hackerElements = document.querySelectorAll('.hacker-text');
  
  hackerElements.forEach(element => {
    const originalText = element.textContent;
    const hackerChars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
    
    element.addEventListener('mouseover', () => {
      let iterations = 0;
      const interval = setInterval(() => {
        element.textContent = originalText
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return hackerChars[Math.floor(Math.random() * hackerChars.length)];
          })
          .join("");
        
        if (iterations >= originalText.length) {
          clearInterval(interval);
          element.textContent = originalText;
        }
        
        iterations += 1 / 3;
      }, 30);
    });
  });
});
