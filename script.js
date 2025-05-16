const images=document.querySelectorAll('.images img');
images.forEach(img=>{
    img.addEventListener('click',(event) => {
        const clickedImage=event.target;
        alert('This is famous in :' + clickedImage.alt);
    });
});