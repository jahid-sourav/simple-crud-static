// Data Tables Starts Here
$(document).ready(function () {
    $('#dataTable').DataTable();
});
// Data Tables Ends Here

// Image Preview Starts Here
// Get the file input element
var fileInput = document.getElementById('fileInput');

// Listen for change events on the file input element
fileInput.addEventListener('change', function () {
    // Get the selected file
    var file = this.files[0];

    // Create a new FileReader object
    var reader = new FileReader();

    // Listen for the load event on the FileReader
    reader.addEventListener('load', function () {
        // Get the image element
        var imageElement = document.getElementById('image');

        // Set the src attribute of the image to the data URL of the image
        imageElement.src = this.result;
    });

    // Read the file as a data URL
    reader.readAsDataURL(file);
});
// Image Preview Ends Here
