;(() => {
  const searchParams = new URLSearchParams(window.location.search);
  const firstName = searchParams.get("first-name");
  console.log(firstName);
  const domName = document.querySelector("[data-name]");
  console.log(domName);

  if (domName) {
    domName.textContent = `Thank you for your survey ${firstName}`;
  }
})()
