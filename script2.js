// Animation du texte avec fade-in pendant 5 secondes
gsap.from('.video-container p', {
    opacity: 0, // Commencer avec une opacité de 0
    duration: 5, // Durée de l'animation de fade-in
    ease: 'power2.out',
    scrollTrigger: {
        trigger: '.video-container', // Déclencheur basé sur la div video-container
        start: 'top 90%', // Déclencher l'animation lorsque la div est à 90% de la vue
        once: true, // L'animation ne se joue qu'une seule fois
    },
});

// Animation des vidéos (une par une, de bas en haut)
const videos = gsap.utils.toArray('.video-box');
videos.forEach((video, index) => {
    gsap.from(video, {
        y: '100%', // Déplacer depuis le bas (hors de la vue)
        opacity: 0, // Commencer avec une opacité de 0
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: video,
            start: 'top 90%', // Déclencher l'animation lorsque la vidéo est à 90% de la vue
            once: true, // L'animation ne se joue qu'une seule fois
            // Décalage progressif pour chaque vidéo
            toggleActions: `play none none ${index * 0.5}`,
        },
    });
});
