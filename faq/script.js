const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

document.addEventListener('DOMContentLoaded', function () {
const faqContainer = document.getElementById('faq');

function toggleAnswer(answerElement) {
  answerElement.style.display = (answerElement.style.display === 'none' || answerElement.style.display === '') ? 'block' : 'none';
}

FAQ.forEach((faq, index) => {
  const faqItem = document.createElement('div');
  faqItem.classList.add('faq-item');

  const question = document.createElement('div');
  question.textContent = faq.question;

  const chevron = document.createElement('span');
  chevron.classList.add('chevron');
  chevron.textContent = '▼';

  const answer = document.createElement('div');
  answer.classList.add('answer');
  answer.textContent = faq.answer;

  if (index === 0) {
    answer.style.display = 'none';
  }

  question.appendChild(chevron);
  faqItem.appendChild(question);
  faqItem.appendChild(answer);

  faqItem.addEventListener('click', function () {
    toggleAnswer(answer);
    chevron.textContent = (chevron.textContent === '▼') ? '▲' : '▼';
  });

  faqContainer.appendChild(faqItem);
});
});
