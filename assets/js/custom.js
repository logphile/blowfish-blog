// Wait for the page to finish loading *everything*
window.addEventListener("load", function () {
    // Try to detach the auto-initialized mediumZoom
    try {
      if (window.mediumZoom && typeof mediumZoom.getImages === "function") {
        const attached = mediumZoom.getImages();
        if (attached.length) {
          mediumZoom.detach(); // Kill the default behavior
          console.log("mediumZoom auto-init overridden");
        }
      }
  
      // Re-initialize only for images inside post content, not cards
      mediumZoom('.medium-zoom-image:not(.no-zoom)');
    } catch (e) {
      console.warn("mediumZoom override failed", e);
    }
  });
  
  