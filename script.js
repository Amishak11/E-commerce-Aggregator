document.getElementById('searchBtn').addEventListener('click', function() {
    const imageUpload = document.getElementById('imageUpload').files[0];
    
    if (imageUpload) {
        const formData = new FormData();
        formData.append('image', imageUpload);

        // Make an API call to the image recognition service
        fetch('YOUR_IMAGE_RECOGNITION_API_URL', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Redirect to results page with the product info
            // For now, just logging the data
            console.log(data);
            // Here you can redirect to results.html with product data
            window.location.href = 'results.html';  // Adjust this as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Please upload an image');
    }
});
