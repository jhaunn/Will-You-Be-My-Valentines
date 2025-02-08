const messages = [
   "Are you sure?",
   "Really sure??",
   "Are you positive?",
   "Pookie please...",
   "Just think about it!",
   "If you say no, I will be really sad...",
   "I will be very sad...",
   "I will be very very very sad...",
   "Ok fine, I will stop asking...",
   "Just kidding, say yes please! ❤️"
];

const gifs = [
   "https://media.giphy.com/media/bKyQb654tHDq72daXJ/giphy.gif",
   "https://media.giphy.com/media/oWe817G10gRKmx84zB/giphy.gif",
   "https://media.giphy.com/media/ZcTZQ9K75kGiMycCLZ/giphy.gif",
   "https://media.giphy.com/media/KxDqcD2mAEuOFMMu1g/giphy.gif",
   "https://media.giphy.com/media/5ouxQsY5V5as4UwpRo/giphy.gif",
   "https://media.giphy.com/media/W4RizlO6qZWQRYw9mb/giphy.gif",
   "https://media.giphy.com/media/BhRNXjTlP0IdQp25cd/giphy.gif",
   "https://media.giphy.com/media/wMlcT3exSxYAcbkby6/giphy.gif",
   "https://media.giphy.com/media/Zsormm4i0J1sy7PJs6/giphy.gif",
   "https://media.giphy.com/media/3i4g2nMtIXT9Y0sUUz/giphy.gif"
]

let index = 0;

function handleNoClick() {
   const noButton = document.querySelector('.no-button');
   const yesButton = document.querySelector('.yes-button');
   const gifContainer = document.querySelector('.gif');
   gifContainer.src = gifs[index];
   noButton.textContent = messages[index];
   index = (index + 1) % messages.length;
   const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
   yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
   window.location.href = "yes_page.html";
}