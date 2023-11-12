document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('binary-rain-container');
    var drops = 100; // The number of drops you want

    // Function to generate a single drop
    function generateDrop() {
        var drop = document.createElement('span');
        drop.classList.add('binary-drop');
        drop.textContent = Math.random() < 0.5 ? '0' : '1';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.fontSize = Math.random() * 10 + 10 + 'px'; // Random size
        drop.style.animationDuration = Math.random() * 5 + 3 + 's'; // Random speed
        container.appendChild(drop);

        // Remove drop after it falls down
        setTimeout(function() {
            container.removeChild(drop);
        }, 6000);
    }

    // Generate initial set of drops
    for (var i = 0; i < drops; i++) {
        generateDrop();
    }

    // Function to generate drops at intervals
    setInterval(generateDrop, 100);
});
// Get all the nav links
const navLinks = document.querySelectorAll('nav a');

// Function to remove active classes
function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to handle click event on each nav link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        removeActiveClasses(); // Remove active classes from all links
        const rect = e.target.getBoundingClientRect(); // Get the clicked element's position and size
        const highlight = document.querySelector('.highlight');
        // Set the position and size of the highlight to match the clicked link
        highlight.style.width = `${rect.width}px`;
        highlight.style.height = `${rect.height}px`;
        highlight.style.left = `${rect.left + window.scrollX}px`;
        highlight.style.top = `${rect.top + window.scrollY}px`;
        highlight.style.opacity = '1'; // Make the highlight visible
        link.classList.add('active'); // Add the active class to the clicked link
    });
});
const terminalLines = [
    "calvin@linux-desktop:~$ Compiling source...",
    "calvin@linux-desktop:~$",
    "calvin@linux-desktop:~$ whoami",
    "Hello my name is Calvin-Caleb Amiolemen, I am a Junior at Bowie State University Studying Cyber Operation Engineering",
    "calvin@linux-desktop:~$",
    'calvin@linux-desktop:~$ grep \"school"\ home.txt',
    "calvin@linux-desktop:Thank you for visiting my website here you can know more about me what i do inside and outside of school and a deeper dive into my Projects and Internships",
    "calvin@linux-desktop:~$",
    "calvin@linux-desktop:~$ cd /Desktop/design",
    "calvin@linux-desktop:~$ cat hey.txt",
    "calvin@linux-desktop:~$ Welcome ๑(◕‿◕)๑" 
  ];
  const typingDelay = 25; // milliseconds
  const lineDelay = 1000; // delay before typing the next line
  const terminalText = document.getElementById('terminal-text');
  let lineIndex = 0;
  let charIndex = 0;
  
  function typeLine() {
    if (lineIndex === terminalLines.length) return; // Stop if we've run out of lines
  
    if (charIndex < terminalLines[lineIndex].length) {
      // If we're not at the end of a line, add the next character
      terminalText.textContent += terminalLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeLine, typingDelay);
    } else {
      // If we're at the end of a line, move to the next line
      terminalText.textContent += '\n';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, lineDelay);
    }
  }
  
  // Start the typing effect
  typeLine();
  