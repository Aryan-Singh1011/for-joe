const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const successPage = document.getElementById('successPage');
const proposalSection = document.getElementById('proposalSection');

const moveButton = () => {
    // Limits the movement to within the screen height/width
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
};

// Works for both mouse and touch
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking it on mobile
    moveButton();
});

yesBtn.addEventListener('click', () => {
    successPage.classList.remove('hidden');
    window.scrollTo(0, 0);
});