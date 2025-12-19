
export class TextDecode {
    constructor(element) {
        this.element = element;
        // Store original HTML to preserve structure (like breaks and spans)
        this.originalHTML = element.innerHTML;
        this.originalText = element.innerText;
        this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+';
        this.cycling = false;

        // Only apply decode effect if it's a simple text element to avoid breaking complex HTML
        // For complex elements (like Hero Title with spans), we validly might skip or just target leaf nodes.
        // BUT given the user wants "WOW", let's try a safer approach:
        // If element has children, don't destroy them. 
        // Simplified: Just add a class for CSS animation if we can't safely decode.

        // Check if element has child elements
        if (this.element.children.length > 0) {
            // Fallback for complex elements: Breathing effect only
            this.element.classList.add('breathing-text');
        } else {
            // Simple text: Decode + Breathe
            this.element.style.whiteSpace = 'pre-wrap';

            this.observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.cycling) {
                        this.start();
                        this.observer.disconnect(); // Run once
                    }
                });
            }, { threshold: 0.5 });

            this.observer.observe(this.element);

            // Continuous effect
            this.element.classList.add('breathing-text');
        }
    }

    start() {
        this.cycling = true;
        let revealed = 0;
        const displayText = this.originalText.split('');

        const interval = setInterval(() => {
            this.element.innerText = displayText
                .map((char, index) => {
                    if (index < revealed) return this.originalText[index];
                    if (char === ' ' || char === '\n') return char;
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join('');

            revealed += 1 / 3; // Speed

            if (revealed >= this.originalText.length) {
                clearInterval(interval);
                this.element.innerText = this.originalText;
                this.cycling = false;
            }
        }, 30);
    }
}

export class TextStagger {
    constructor(element) {
        this.element = element;
        this.text = element.innerText;
        this.element.innerHTML = '';

        // Split by spaces but preserve them as text nodes
        const words = this.text.split(' ');

        this.words = words.map((word, index) => {
            const span = document.createElement('span');
            span.textContent = word;
            span.style.opacity = '0';
            span.style.filter = 'blur(10px)';
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            span.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)';

            this.element.appendChild(span);

            // Add space after word if it's not the last one
            if (index < words.length - 1) {
                this.element.appendChild(document.createTextNode(' '));
            }

            // Continuous effect class
            span.classList.add('breathing-text');

            return span;
        });

        this.observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    this.observer.disconnect();
                }
            });
        }, { threshold: 0.2 });

        this.observer.observe(this.element);
    }

    animate() {
        this.words.forEach((word, index) => {
            setTimeout(() => {
                word.style.opacity = '1';
                word.style.filter = 'blur(0px)';
                word.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }
}
