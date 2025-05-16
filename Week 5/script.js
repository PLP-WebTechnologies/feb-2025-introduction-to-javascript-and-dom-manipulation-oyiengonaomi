// Wait for the DOM to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const dynamicText = document.getElementById('dynamic-text');
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeBackgroundBtn = document.getElementById('change-background-btn');
    const changeFontBtn = document.getElementById('change-font-btn');
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const newElement = document.getElementById('new-element');
    
    // Text content array to cycle through
    const textOptions = [
        "This text will change when you click the button below!",
        "Look at that! The text has changed!",
        "JavaScript makes websites interactive!",
        "You can change content dynamically!",
        "Click again to see more text options!"
    ];
    
    // Background color options
    const bgColors = ['#ffffff', '#f0f8ff', '#fff0f5', '#f5fffa', '#fffacd'];
    
    // Font size options (in pixels)
    const fontSizes = [18, 20, 22, 24, 16];
    
    // Track current states
    let currentTextIndex = 0;
    let currentBgIndex = 0;
    let currentFontIndex = 0;
    let isElementVisible = false;
    
    // Change text button click handler
    changeTextBtn.addEventListener('click', function() {
        // Move to next text option or loop back to beginning
        currentTextIndex = (currentTextIndex + 1) % textOptions.length;
        
        // Apply fade-out effect
        dynamicText.style.opacity = 0;
        
        // Change text after short delay and fade back in
        setTimeout(function() {
            dynamicText.textContent = textOptions[currentTextIndex];
            dynamicText.style.opacity = 1;
        }, 300);
    });
    
    // Change background color button click handler
    changeBackgroundBtn.addEventListener('click', function() {
        // Move to next background color or loop back to beginning
        currentBgIndex = (currentBgIndex + 1) % bgColors.length;
        
        // Apply the new background color to the body
        document.body.style.backgroundColor = bgColors[currentBgIndex];
    });
    
    // Change font size button click handler
    changeFontBtn.addEventListener('click', function() {
        // Move to next font size or loop back to beginning
        currentFontIndex = (currentFontIndex + 1) % fontSizes.length;
        
        // Apply the new font size to the paragraph
        dynamicText.style.fontSize = fontSizes[currentFontIndex] + 'px';
    });
    
    // Toggle element visibility button click handler
    toggleElementBtn.addEventListener('click', function() {
        // Toggle the visibility state
        isElementVisible = !isElementVisible;
        
        // Update the display style based on visibility state
        if (isElementVisible) {
            newElement.style.display = 'block';
            toggleElementBtn.textContent = 'Hide Element';
        } else {
            newElement.style.display = 'none';
            toggleElementBtn.textContent = 'Show Element';
        }
    });
    
    // Add a smooth transition effect to the dynamic text
    dynamicText.style.transition = 'opacity 0.3s ease';
});