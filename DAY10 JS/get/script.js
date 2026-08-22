const URL = "https://jsonplaceholder.typicode.com/posts";

const loadBtn = document.getElementById("load-btn");
const postsContainer = document.getElementById("postsContainer");

loadBtn.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", URL);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let posts = [];
      try {
        posts = JSON.parse(xhr.responseText);
      } catch {
        console.error("Failed to parse JSON");
      }
      postsContainer.innerHTML = "";
      posts.slice(0, 6).forEach((post) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-1g-4";
        col.innerHTML = `<div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text text-muted">${post.body}</p>
          </div>
        </div>`;
        postsContainer.appendChild(col);
      });
    } else {
      console.error("Request failed with status:", xhr.status);
      postsContainer.innerHTML =
        '<div class="alert alert-danger">Failed to load posts. </div>';
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    postsContainer.innerHTML =
      '<div class="alert alert-danger">Network error occurred. </div>';
  });

  xhr.send();
});