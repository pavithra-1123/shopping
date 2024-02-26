// document.getElementById('first1').addEventListener('change', function() {
//     const card = document.getElementById('accordian');
//     card.classList.toggle('expanded', this.checked);
//   });

function toggleCard() {
  const cardContent = document.getElementById('content');
  cardContent.classList.toggle('expanded');
}