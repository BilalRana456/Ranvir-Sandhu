<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
function loadGoogleMap(event) {
	event.preventDefault(); // Prevents the default behavior of the link

	var mapContainer = document.getElementById("mapContainer");

	// Hide the image
	event.target.style.display = "none";

	// Load the Google Map
	var mapFrame = document.createElement("iframe");
	mapFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.4161279244827!2d-83.66830212457357!3d32.59509209326135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3e0da8be549e9%3A0xe043fd8f3ec0158a!2s123%20Carl%20Vinson%20Pkwy%20b%2C%20Warner%20Robins%2C%20GA%2031088%2C%20USA!5e0!3m2!1sen!2s!4v1687765655967!5m2!1sen!2s";
	mapFrame.width = "100%";
	mapFrame.height = "315px";
	mapContainer.appendChild(mapFrame);
}
</script>
<!-- end Simple Custom CSS and JS -->
