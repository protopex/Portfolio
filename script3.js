// Animation pour la section des projets (mes-projets)
gsap.from('.mes-projets', {
    opacity: 0, // Commencer avec une opacité de 0
    duration: 5,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.mes-projets',
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});
