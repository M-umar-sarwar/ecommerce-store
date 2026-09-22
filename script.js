
const scrollBoxes = document.querySelectorAll('.scroll-container');

scrollBoxes.forEach(container =>{
  const scrollBox = container.querySelector('.scroll-box');
  const leftBtn = container.querySelector('.left-btn');
  const rightBtn = container.querySelector('.right-btn');

  rightBtn.addEventListener('click', () => {
    scrollBox.scrollLeft += 300; 
    // 300px right jao
  });

  leftBtn.addEventListener('click', () => {
    scrollBox.scrollLeft -= 300; // 300px left jao
  });
});

{/* // console.log("hello javascript"); */}

