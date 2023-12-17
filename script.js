const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['précédente', 'suivante'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className === 'gallery-controls-précédente') {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
    }

    setContols() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = "image " + control;
        });
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
    

}
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setContols();
exampleCarousel.useControls();

// Animation pour le texte
gsap.from('.text-content', {
    y: '150px', // Déplacer le texte depuis le bas (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.welcome-section',
        start: 'top 80%',
    },
});

// Animation pour l'image
gsap.from('.img-welcome', {
    x: '100%', // Déplacer l'image de la droite (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.welcome-section',
        start: 'top 80%',
    },
});

// Animation pour le callToScroll
gsap.from('#callToScroll', {
    opacity: 0, // Commencer avec une opacité de 0
    duration: 5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '#callToScroll',
        start: 'top 90%', // Déclencher l'animation lorsque l'élément est à 90% de la vue
    },
});



// Animation pour la div text-container
gsap.from('.text-container', {
    x: '-100%', // Déplacer la div depuis la gauche (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-section', // Déclencheur basé sur la div skills-section
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});

// Animation pour la div skills-section
gsap.from('.skills-section', {
    x: '100%', // Déplacer la div depuis la droite (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%', // Déclencher l'animation lorsque la div est à 80% de la vue
    },
});

// Animation pour les dividers de gauche à droite
gsap.from('.divider', {
    scaleX: 0, // Commencer avec une largeur de 0
    transformOrigin: 'left center', // Origine de la transformation
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-section', // Déclencheur basé sur la div skills-section
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});

gsap.from('.divider2', {
    scaleX: 0, // Commencer avec une largeur de 0
    transformOrigin: 'left center', // Origine de la transformation
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.skills-section', // Déclencheur basé sur la div skills-section
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});

// Animation pour le texte et le divider (de gauche à droite)
gsap.from('.mes-projets h1, .divider3', {
    scaleX: 0, // Commencer avec une largeur de 0
    x: '-100%', // Déplacer depuis la gauche (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.mes-projets', // Déclencheur basé sur la div mes-projets
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});

// Animation pour la gallery (de bas en haut)
gsap.from('.gallery', {
    y: '100%', // Déplacer depuis le bas (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.mes-projets', // Déclencheur basé sur la div mes-projets
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});
