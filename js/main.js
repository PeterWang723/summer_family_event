// Greenwich Park 团建活动 - 交互功能
document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滚动功能
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // 为导航链接添加平滑滚动
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // 滚动时导航栏背景变化
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('bg-white/95');
            nav.classList.remove('bg-white/90');
        } else {
            nav.classList.add('bg-white/90');
            nav.classList.remove('bg-white/95');
        }
    });

    // 滚动动画观察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // 站点卡片点击效果
    const stationCards = document.querySelectorAll('.station-card');
    stationCards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击反馈
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // 悬浮提示功能
    function createTooltip(element, text) {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute bg-gray-800 text-white px-3 py-2 rounded-lg text-sm z-50 pointer-events-none';
            tooltip.style.bottom = '100%';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
            tooltip.textContent = text;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            // 动画显示
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 10);
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.absolute.bg-gray-800');
            if (tooltip) {
                tooltip.remove();
            }
        });
    }

    // 为游戏图标添加悬浮提示
    const gameIcons = document.querySelectorAll('.station-card .rounded-full');
    const tooltipTexts = ['创意表达', '反应能力', '团队协作'];
    gameIcons.forEach((icon, index) => {
        if (tooltipTexts[index]) {
            createTooltip(icon, tooltipTexts[index]);
        }
    });

    // 倒计时功能（如果需要）
    function updateCountdown() {
        // 这里可以添加活动倒计时功能
        // 假设活动时间是固定的，可以根据实际需求修改
        const eventDate = new Date('2025-07-26T14:00:00');
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            
            // 可以在页面上显示倒计时
            console.log(`活动倒计时: ${days}天 ${hours}小时 ${minutes}分钟`);
        }
    }

    // 每分钟更新倒计时
    setInterval(updateCountdown, 60000);
    updateCountdown(); // 立即执行一次

    // 响应式菜单功能（移动端）
    let mobileMenuOpen = false;
    
    // 检测移动设备
    function isMobile() {
        return window.innerWidth < 768;
    }

    // 优化移动端滚动性能
    let ticking = false;
    function optimizedScrollHandler() {
        if (!ticking) {
            requestAnimationFrame(function() {
                // 这里可以添加需要在滚动时执行的优化代码
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

    // 触摸设备优化
    if ('ontouchstart' in window) {
        // 为触摸设备添加特殊处理
        document.body.classList.add('touch-device');
        
        // 防止iOS Safari的弹性滚动
        document.addEventListener('touchmove', function(e) {
            if (e.target.closest('.fixed')) {
                e.preventDefault();
            }
        }, { passive: false });
    }

    // 页面加载完成后的初始化动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // 预加载重要图片
    function preloadImages() {
        const imagesToPreload = [
            './images/greenwich-park-bg.jpg',
            './images/team-building.jpeg',
            './images/charades-game.png',
            './images/freeze-game.jpg',
            './images/blind-soccer.jpg'
        ];

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    preloadImages();

    // 错误处理
    window.addEventListener('error', function(e) {
        console.error('页面出现错误:', e.error);
        // 可以在这里添加错误报告功能
    });

    console.log('Greenwich Park 团建活动页面加载完成！🎉');
});

// 辅助函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 辅助函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}