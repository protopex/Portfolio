gsap.from('.video', {
    x: '100%', // Animer la vidéo depuis la droite (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out'
});

gsap.from('.text', {
    y: '100%', // Animer le texte depuis le bas (hors de la vue)
    opacity: 0, // Commencer avec une opacité de 0
    duration: 1.5,
    ease: 'power2.out',
    delay: 0.5 // Délai pour que l'animation de la vidéo démarre avant
});
