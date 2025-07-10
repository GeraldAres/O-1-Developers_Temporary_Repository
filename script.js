  class FloatingIcon {
            constructor() {
                this.icon = document.getElementById('floatingIcon');
                this.currentStyle = 0;
                this.styles = ['', 'style-danger', 'style-warning', 'style-azure'];
                this.badgeCount = 0;
                this.setupEventListeners();
                this.injectIcon();
            }
            
            setupEventListeners() {
                this.icon.addEventListener('click', () => {
                    this.handleIconClick();
                });
                
                // Handle scroll to ensure icon stays visible
                window.addEventListener('scroll', () => {
                    this.handleScroll();
                });
            }
            
            updateBadge(count) {
                this.badgeCount = count;
                this.icon.setAttribute('data-badge', count);
                
                if (count > 0) {
                    this.icon.classList.add('has-badge');
                } else {
                    this.icon.classList.remove('has-badge');
                }
            }
            
            setPulse(enable) {
                if (enable) {
                    this.icon.classList.add('pulse');
                } else {
                    this.icon.classList.remove('pulse');
                }
            }
}
