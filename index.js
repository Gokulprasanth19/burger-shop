//  const categories = document.querySelectorAll('.category-item');
//   categories.forEach(btn => {
//     btn.addEventListener('click', () => {
//       categories.forEach(b => b.classList.remove('active'));
//       btn.classList.add('active');
//     });
//   });
   const filterButtons = document.querySelectorAll('.category-item');
    const foodCards = document.querySelectorAll('.food-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active from all
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        foodCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });