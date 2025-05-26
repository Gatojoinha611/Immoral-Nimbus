// Ensure DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    // Project details data
    const projectDetails = [
        {
            title: "Casa Oriental do Japonês",
            description: "Desafio: Criar um site de roupas de basquete com um tema oriental japonês voltado ao público americano. Solução: Desenvolvemos um layout vibrante com elementos visuais inspirados na cultura japonesa, como estampas de dragões e kanjis, mantendo uma navegação intuitiva para o público ocidental. Resultado: O site atraiu um grande público nos EUA, com aumento de 40% nas vendas online.",
            link: "#"
        },
        {
            title: "RedVibe",
            description: "Desafio: Construir um site de roupas no estilo 'Opium' para trazer mais 'vermelho' à vida dos clientes. Solução: Criamos uma experiência visual intensa com tons de vermelho predominantes, combinados com um design minimalista e moderno que destaca os produtos de forma impactante. Resultado: A identidade visual única aumentou o engajamento em 30% nas redes sociais.",
            link: "#"
        },
        {
            title: "ArtSky",
            description: "Desafio: Desenvolver um site de desenho criativo e intuitivo chamado 'Explore o céu da criatividade'. Solução: Construímos uma plataforma de arte digital com ferramentas de desenho acessíveis, como um Paint mais intuitivo, oferecendo liberdade para criação com pincéis personalizados e uma interface fluida. Resultado: Usuários relataram maior facilidade para criar e compartilhar suas artes online.",
            link: "#"
        },
        {
            title: "MeteFlix",
            description: "Desafio: Criar um catálogo de filmes e séries chamado MeteFlix, com descrições e notas do IMDb. Solução: Desenvolvemos um layout organizado com cards para cada título, incluindo sinopse, nota do IMDb e um botão que redireciona para a página oficial do IMDb. Resultado: O site se tornou uma referência prática para cinéfilos, com alta retenção de usuários.",
            link: "#"
        }
    ];

    // Smooth scroll to section
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Popup functionality
    function showPopup(type) {
        if (type === 'sites') {
            popupTitle.textContent = 'Sites Sob Medida';
            popupText.textContent = 'Desenvolvemos sites personalizados que refletem a essência do seu negócio.';
        } else if (type === 'design') {
            popupTitle.textContent = 'Design Atemporal';
            popupText.textContent = 'Criamos designs que transcendem tendências com estética única.';
        } else if (type === 'visibilidade') {
            popupTitle.textContent = 'Visibilidade Digital';
            popupText.textContent = 'Aumentamos sua presença online com otimizações estratégicas.';
        }
        popup.style.display = 'flex';
    }

    function closePopup() {
        popup.style.display = 'none';
    }

    // Carousel functionality (simple switch)
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });

        // Update project details based on current slide
        const details = projectDetails[index];
        document.getElementById('project-title').textContent = details.title;
        document.getElementById('project-description').textContent = details.description;
        // Removed link update since "Visitar Site" button is gone
    }

    // Handle carousel
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        const slides = carousel.querySelectorAll('.carousel-slide');
        carousel.querySelector('.carousel-btn.prev').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        carousel.querySelector('.carousel-btn.next').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });

        showSlide(currentSlide);
    }

    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}` || (link.getAttribute('href') === "#projetos" && window.location.pathname.includes('projetos.html'))) {
                link.classList.add('active');
            }
        });
    });

    // Update footer year dynamically
    document.getElementById('current-year').textContent = new Date().getFullYear();
});