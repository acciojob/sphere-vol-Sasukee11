function volume_sphere() {
    //Write your code here
event.preventDefault(); // Prevent form submission

  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');

  const radius = parseFloat(radiusInput.value);
  const volume = (4/3) * Math.PI * Math.pow(radius, 3);

  volumeInput.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
