document.addEventListener("DOMContentLoaded", () => {
    const postForm = document.getElementById("post-form");
    const postList = document.getElementById("post-list");

    postForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form data
        const title = document.getElementById("post-title").value;
        const content = document.getElementById("post-content").value;
        const imageInput = document.getElementById("post-image");

        // Create a new post element
        const post = document.createElement("div");
        post.classList.add("post");

        const date = new Date().toLocaleDateString();
        post.innerHTML = `
            <h3>${title}</h3>
            <p><em>${date}</em></p>
            <p>${content}</p>
        `;

        // Handle image upload
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                post.appendChild(img);
            };
            reader.readAsDataURL(imageInput.files[0]);
        }

        // Add the new post to the post list
        postList.appendChild(post);

        // Reset the form
        postForm.reset();
    });
});
