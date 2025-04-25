// Simple Slideshow
const images = ['https://via.placeholder.com/300x200?text=Slide1', 'https://via.placeholder.com/300x200?text=Slide2', 'https://via.placeholder.com/300x200?text=Slide3'];
let current = 0;

const app = document.getElementById('app');
app.innerHTML = `
  <img id="slide" src="${images[current]}" width="300" height="200">
  <div>
    <button onclick="prev()">Previous</button>
    <button onclick="next()">Next</button>
  </div>
`;

function prev() {
  current = (current - 1 + images.length) % images.length;
  document.getElementById('slide').src = images[current];
}

function next() {
  current = (current + 1) % images.length;
  document.getElementById('slide').src = images[current];
}
