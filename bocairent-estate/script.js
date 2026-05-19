window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
formspree('initForm', { formElement: '#contact-form', formId: 'xlgvdywd' });

function setLang(lang) {
  document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('#lang-toggle button').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && lang === 'es') || (i === 1 && lang === 'en'));
  });
}

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  obs.observe(el);
});
