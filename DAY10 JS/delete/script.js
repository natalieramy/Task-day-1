const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const deleteForm = document.getElementById("delete-form");
const deleteId = document.getElementById("delete-id");
const deleteResult = document.getElementById("deleteResult");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("DELETE", `${BASE_URL}/${deleteId.value}`);

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      deleteResult.innerHTML = `<div class="alert alert-success">Post with ID <strong>${deleteId.value}</strong> deleted successfully.</div>`;
      deleteForm.reset();
    } else {
      console.error("Request failed with status:", xhr.status);
      deleteResult.innerHTML =
        '<div class="alert alert-danger">Failed to delete post. </div>';
    }
  });

  xhr.addEventListener("error", () => {
    console.error("Network error");
    deleteResult.innerHTML =
      '<div class="alert alert-danger">Network error occurred. </div>';
  });

  xhr.send();
});