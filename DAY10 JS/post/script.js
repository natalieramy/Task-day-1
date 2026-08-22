const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const postForm = document.getElementById("post-form");
const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const postResult = document.getElementById("postResult");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("POST", BASE_URL);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let createdPost = {};
      try {
        createdPost = JSON.parse(xhr.responseText);
      } catch {
        console.error("Failed to parse JSON");
      }
      postResult.innerHTML += `<div class="card h-100">
        <div class="card-body">
          <span class="result-id">ID: ${createdPost.id}</span>
          <h5 class="card-title">${createdPost.title}</h5>
          <p class="card-text text-muted">${createdPost.body}</p>
        </div>
      </div>`;
      postForm.reset();
    } else {
      console.error("Request failed with status:", xhr.status);
      postResult.innerHTML =
        '<div class="alert alert-danger">Failed to create post. </div>';
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    postResult.innerHTML =
      '<div class="alert alert-danger">Network error occurred. </div>';
  });

  xhr.send(
    JSON.stringify({
      title: postTitle.value,
      body: postBody.value,
      userId: 1,
    }),
  );
});