(function() {
    function detectLanguage() {
        const htmlLang = document.documentElement.lang;
        if (htmlLang === 'gl' || htmlLang === 'es' || htmlLang === 'en') {
            return htmlLang;
        }
        
        const path = window.location.pathname;
        if (path.startsWith('/es/') || path === '/es') return 'es';
        if (path.startsWith('/gl/') || path === '/gl') return 'gl';
        if (path.startsWith('/en/') || path === '/en') return 'en';
        
        return 'gl';
    }

    const texts = {
        es: {
            about: 'Sobre Mí',
            projects: 'Proyectos', 
            notes: 'Apuntes',
            student: 'Estudiante de GRIA en la ESEI - Universidade de Vigo',
            rights: 'Todos los derechos reservados. Desarrollado con ❤️'
        },
        en: {
            about: 'About Me',
            projects: 'Projects',
            notes: 'Notes', 
            student: 'GRIA Student at ESEI - University of Vigo',
            rights: 'All rights reserved. Developed with ❤️'
        },
        gl: {
            about: 'Sobre Min',
            projects: 'Proxectos',
            notes: 'Apuntamentos',
            student: 'Estudante de GRIA na ESEI - Universidade de Vigo', 
            rights: 'Tódolos dereitos reservados. Desenvolto con ❤️'
        }
    };

    const links = {
        es: {
            about: '/es/sobre-mi',
            projects: '/es/proyectos', 
            notes: '/es/apuntes',
            langOptions: [
                { href: getCurrentPageInLang('es'), text: 'Español' },
                { href: getCurrentPageInLang('en'), text: 'English' },
                { href: getCurrentPageInLang('gl'), text: 'Galego' }
            ]
        },
        en: {
            about: '/en/aboutme',
            projects: '/en/projects',
            notes: '/en/notes',
            langOptions: [
                { href: getCurrentPageInLang('es'), text: 'Español' }, 
                { href: getCurrentPageInLang('en'), text: 'English' },
                { href: getCurrentPageInLang('gl'), text: 'Galego' }
            ]
        },
        gl: {
            about: '/gl/sobre-min',
            projects: '/gl/proxectos',
            notes: '/gl/apuntamentos',
            langOptions: [
                { href: getCurrentPageInLang('es'), text: 'Español' },
                { href: getCurrentPageInLang('en'), text: 'English' },
                { href: getCurrentPageInLang('gl'), text: 'Galego' }
            ]
        }
    };

    function getCurrentPageInLang(targetLang) {
        const currentPath = window.location.pathname;
        
        const pageMapping = {
            'sobre-mi': { es: '/es/sobre-mi', en: '/en/aboutme', gl: '/gl/sobre-min' },
            'aboutme': { es: '/es/sobre-mi', en: '/en/aboutme', gl: '/gl/sobre-min' },
            'sobre-min': { es: '/es/sobre-mi', en: '/en/aboutme', gl: '/gl/sobre-min' },
            
            'proyectos': { es: '/es/proyectos', en: '/en/projects', gl: '/gl/proxectos' },
            'projects': { es: '/es/proyectos', en: '/en/projects', gl: '/gl/proxectos' },
            'proxectos': { es: '/es/proyectos', en: '/en/projects', gl: '/gl/proxectos' },
            
            'apuntes': { es: '/es/apuntes', en: '/en/notes', gl: '/gl/apuntamentos' },
            'notes': { es: '/es/apuntes', en: '/en/notes', gl: '/gl/apuntamentos' },
            'apuntamentos': { es: '/es/apuntes', en: '/en/notes', gl: '/gl/apuntamentos' },
            
            'GLPI-AssistIA': { 
                es: '/es/proyectos/GLPI-AssistIA', 
                en: '/en/projects/GLPI-AssistIA', 
                gl: '/gl/proxectos/GLPI-AssistIA' 
            }
        };

        for (const [key, mapping] of Object.entries(pageMapping)) {
            if (currentPath.includes(key)) {
                return mapping[targetLang] || `/${targetLang}`;
            }
        }

        return `/${targetLang}`;
    }

    function createHeader(lang) {
        const t = texts[lang];
        const l = links[lang];
        const langCode = lang.toUpperCase();

        return `
            <header class="bg-white bg-opacity-90 backdrop-blur-lg fixed top-0 left-0 w-full z-50 shadow-md">
                <nav class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <a href="/" class="text-xl sm:text-2xl font-bold text-gray-800">
                        Anxo López Rodríguez
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="${l.about}" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                            ${t.about}
                        </a>
                        <a href="${l.projects}" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                            ${t.projects}
                        </a>
                        <a href="${l.notes}" class="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium">
                            ${t.notes}
                        </a>
                    </div>

                    <div class="flex items-center space-x-4">
                        <div class="relative hidden md:block">
                            <button id="lang-button" class="flex items-center space-x-2 px-4 py-2 text-sm sm:text-base font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                                <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                                </svg>
                                <span>${langCode}</span>
                                <svg class="w-4 h-4 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div id="lang-menu" class="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 origin-top-right transform scale-95 opacity-0 transition-all duration-300 hidden">
                                <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    ${l.langOptions.map(option => 
                                        `<a href="${option.href}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">${option.text}</a>`
                                    ).join('')}
                                </div>
                            </div>
                        </div>

                        <button id="mobile-menu-button" class="md:hidden p-2 text-gray-800 rounded-md hover:bg-gray-200 transition-colors duration-200">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            <div id="mobile-menu" class="fixed top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-lg z-40 transform -translate-x-full transition-transform duration-300 ease-in-out">
                <div class="flex justify-end p-4">
                    <button id="close-menu-button" class="p-2 text-gray-800 rounded-md hover:bg-gray-200 transition-colors duration-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex flex-col items-center justify-center h-full space-y-8 text-center text-gray-800">
                    <a href="${l.about}" class="text-3xl font-bold hover:text-gray-600 transition-colors duration-200">
                        ${t.about}
                    </a>
                    <a href="${l.projects}" class="text-3xl font-bold hover:text-gray-600 transition-colors duration-200">
                        ${t.projects}
                    </a>
                    <a href="${l.notes}" class="text-3xl font-bold hover:text-gray-600 transition-colors duration-200">
                        ${t.notes}
                    </a>
                    
                    <div class="relative mt-8">
                        <button id="mobile-lang-button" class="flex items-center space-x-2 px-4 py-2 text-xl font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200">
                            <svg class="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path d="M10 20a10 10 0 110-20 10 10 0 010 20zm0-18a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clip-rule="evenodd" fill-rule="evenodd"></path>
                            </svg>
                            <span>${langCode}</span>
                            <svg class="w-5 h-5 transform transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div id="mobile-lang-menu" class="absolute left-1/2 -translate-x-1/2 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 origin-top transform scale-95 opacity-0 transition-all duration-300 hidden">
                            <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                ${l.langOptions.map(option => 
                                    `<a href="${option.href}" class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100" role="menuitem">${option.text}</a>`
                                ).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function createFooter(lang) {
        const t = texts[lang];

        return `
            <footer class="bg-white bg-opacity-90 backdrop-blur-lg mt-auto py-8 text-gray-800 shadow-inner">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col sm:flex-row justify-between items-center text-center">
                        <div class="mb-4 sm:mb-0 sm:text-left">
                            <h3 class="text-xl font-bold text-gray-800 mb-1">Anxo López Rodríguez</h3>
                            <p class="text-sm text-gray-600">${t.student}</p>
                        </div>

                        <div class="flex justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
                            <a href="https://www.x.com/anxolo_/" class="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <img src="/assets/pictures/x.png" alt="X logo" class="w-full h-full">
                            </a>
                            <a href="https://bsky.app/profile/anxolo.bsky.social" class="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <img src="/assets/pictures/bluesky.png" alt="Bluesky logo" class="w-full h-full">
                            </a>
                            <a href="https://es.linkedin.com/in/anxo-lopez-rodriguez" class="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <img src="/assets/pictures/linkedin_blue.png" alt="LinkedIn logo" class="w-full h-full">
                            </a>
                            <a href="mailto:lopezrodriguezanxo@gmail.com" class="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <img src="/assets/pictures/email.png" alt="Email icon" class="w-full h-full">
                            </a>
                            <a href="https://github.com/anxolo" class="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity duration-200">
                                <img src="/assets/pictures/github.png" alt="GitHub logo" class="w-full h-full">
                            </a>
                        </div>
                    </div>
                    
                    <div class="text-center text-sm text-gray-500 pt-6 mt-6 border-t border-gray-300">
                        &copy; Anxo López Rodríguez. ${t.rights}
                    </div>
                </div>
            </footer>
        `;
    }

    function initializeMenuEvents() {
        const langButton = document.getElementById('lang-button');
        const langMenu = document.getElementById('lang-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuButton = document.getElementById('close-menu-button');
        const mobileLangButton = document.getElementById('mobile-lang-button');
        const mobileLangMenu = document.getElementById('mobile-lang-menu');

        function toggleMenu(menu, button) {
            if (!menu || !button) return;
            const isHidden = menu.classList.contains('hidden');
            const arrowSvg = button.querySelector('svg:last-of-type');

            if (isHidden) {
                menu.classList.remove('hidden');
                setTimeout(() => {
                    menu.classList.remove('opacity-0', 'scale-95');
                    menu.classList.add('opacity-100', 'scale-100');
                    if (arrowSvg) arrowSvg.classList.add('rotate-180');
                }, 10);
            } else {
                menu.classList.remove('opacity-100', 'scale-100');
                menu.classList.add('opacity-0', 'scale-95');
                if (arrowSvg) arrowSvg.classList.remove('rotate-180');
                setTimeout(() => { menu.classList.add('hidden'); }, 300);
            }
        }

        function toggleMobileMenu() {
            if (mobileMenu) mobileMenu.classList.toggle('-translate-x-full');
        }

        if (langButton) langButton.addEventListener('click', () => toggleMenu(langMenu, langButton));
        if (mobileLangButton) mobileLangButton.addEventListener('click', () => toggleMenu(mobileLangMenu, mobileLangButton));
        if (mobileMenuButton) mobileMenuButton.addEventListener('click', toggleMobileMenu);
        if (closeMenuButton) closeMenuButton.addEventListener('click', toggleMobileMenu);

        document.addEventListener('click', (event) => {
            if (langButton && !langButton.contains(event.target) && langMenu && !langMenu.contains(event.target)) {
                langMenu.classList.add('hidden', 'opacity-0', 'scale-95');
                const arrowSvg = langButton.querySelector('svg:last-of-type');
                if (arrowSvg) arrowSvg.classList.remove('rotate-180');
            }
            if (mobileLangButton && !mobileLangButton.contains(event.target) && mobileLangMenu && !mobileLangMenu.contains(event.target)) {
                mobileLangMenu.classList.add('hidden', 'opacity-0', 'scale-95');
                const arrowSvg = mobileLangButton.querySelector('svg:last-of-type');
                if (arrowSvg) arrowSvg.classList.remove('rotate-180');
            }
        });
    }

    function loadLayout() {
        const lang = detectLanguage();
        
        const headerOutput = document.getElementById('header-output');
        const footerOutput = document.getElementById('footer-output');

        if (headerOutput) {
            headerOutput.innerHTML = createHeader(lang);
        }

        if (footerOutput) {
            footerOutput.innerHTML = createFooter(lang);
        }

        setTimeout(() => {
            initializeMenuEvents();
        }, 100);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadLayout);
    } else {
        loadLayout();
    }
})();
