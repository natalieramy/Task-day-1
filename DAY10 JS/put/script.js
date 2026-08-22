const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const putForm = document.getElementById("put-form");
const putId = document.getElementById("put-id");
const putTitle = document.getElementById("put-title");
const putBody = document.getElementById("put-body");
const putResult = document.getElementById("putResult");

putForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("PUT", `${BASE_URL}/${putId.value}`);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let updatedPost = {};
      try {
        updatedPost = JSON.parse(xhr.responseText);
      } catch {
        console.error("Failed to parse JSON");
      }
      putResult.innerHTML = `<div class="card h-100">
        <div class="card-body">
          <span class="result-id">ID: ${updatedPost.id}</span>
          <h5 class="card-title">${updatedPost.title}</h5>
          <p class="card-text text-muted">${updatedPost.body}</p>
        </div>
      </div>`;
      putForm.reset();
    } else {
      console.error("Request failed with status:", xhr.status);
      putResult.innerHTML =
        '<div class="alert alert-danger">Failed to update post. </div>';
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    putResult.innerHTML =
      '<div class="alert alert-danger">Network error occurred. </div>';
  });

  xhr.send(
    JSON.stringify({
      id: putId.value,
      title: putTitle.value,
      body: putBody.value,
      userId: 1,
    }),
  );
});