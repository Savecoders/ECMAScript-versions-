
const $ = document.querySelector.bind(document);
const button = $('#button');

button.addEventListener('click', async () => {
  const { hello } = await import('./06-DynacmicImport/module.js');
  hello();
});

