function animate(paper, args, t) {
  return new Promise(resolve => {
    paper.animate(args, t, () => resolve())
  })
}

const s = Snap("#svg");
const logo = Snap('#logo');

const circle = s
  .circle('50%', '50%', 0)
  .attr({ fill: '#fff' });

const img = s
  .image('titus_road.jpg', 0, 0, '100%', '100%')
  .attr({
    id: 'background-image',
    preserveAspectRatio: 'xMidYMid slice',
    mask: circle
  });

function fadeout() {
  document.body.style.background = '#fff';
  animate(img, { opacity: 0 }, 2000)
    .then(() => console.log('>>> REDIRECT'))
}

setTimeout(() => {
  animate(circle, { r: '100%' }, 4000)
}, 1500);

setTimeout(function() {
  // hack, prevent user from clicking title
  // until after a certain amount of time has passed
  logo.click(fadeout);
}, 1500 + 1500)
