// Premièrement, obtenons tous les éléments dont nous avons besoin.
let dots = Array.from(document.querySelectorAll('.dot'));
let expressions = Array.from(document.querySelectorAll('.section2_box_expression > div:not(.section2_quote) > div:not(.effect)'));

// Maintenant, ajoutons un gestionnaire d'événement à chaque "dot".
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Ajoute la classe 'off' à toutes les expressions.
    expressions.forEach(exp => exp.classList.add('off'));
    // Supprime la classe 'off' de l'expression correspondante à ce "dot".
    expressions[index].classList.remove('off');
  });
});
