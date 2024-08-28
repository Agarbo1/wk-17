window.onload = () => {
  const header = document.createElement("h1");
  header.textContent = "Catstagram is Cool";
  document.body.appendChild(header);

  const setImg = async () => {

      const img = document.createElement('img');
      const res = fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      const data = await res.json();
      const picUrl = data[0].url;
      img.setAttribute('src', picUrl);
    }
  document.appendChild(img);

  const addButton = document.createElement('button');
  addButton.innerText = 'Get NEw Cat';
  addButton.addEventListener('click', async () => {
    const res = await fetch ('https://api.thecatapi.com/v1/images/search?limit=10');

  })
}
