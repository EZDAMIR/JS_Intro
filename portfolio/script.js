const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

const details = {
  task: 'This project demonstrates structured task creation, editing, status tracking, and API-oriented thinking.',
  finance: 'This project focuses on presenting financial information clearly through reusable interface components and responsive layouts.',
  chat: 'This project demonstrates interactive UI behavior and a design intended for real-time communication workflows.'
};

document.querySelectorAll('.details-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.project;
    document.getElementById('projectDetails').textContent = details[key];
  });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  document.getElementById('formStatus').textContent = `Thanks, ${name}. Your message was captured by the demo form.`;
  event.target.reset();
});
