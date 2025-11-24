document.getElementById("artwork-select").addEventListener("change", (e) => {
    const slug = e.target.value;
    if (slug) {
        window.location.href = `/artworks/${slug}`;
    }
});