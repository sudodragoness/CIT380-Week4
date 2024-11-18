const uploadForm = document.getElementById('upload-form');
const uploadButton = document.getElementById('upload-button');
const artworkInput = document.getElementById('artwork');


export { uploadForm, uploadButton, artworkInput };
uploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const artworkFile = artworkInput.files[0];
  const formData = new FormData();
  formData.append('artwork', artworkFile);

  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
});