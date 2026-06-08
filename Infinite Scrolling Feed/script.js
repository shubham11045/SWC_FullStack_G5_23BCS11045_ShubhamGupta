const feed = document.getElementById("feed");
const loader = document.getElementById("loader");

let page = 1;
let isLoading = false;
const limit = 5;

function createPost(postNumber) {
  const post = document.createElement("div");
  post.className = "post";

  post.innerHTML = `
    <h3>Post ${postNumber}</h3>
    <p>This is sample feed content for post number ${postNumber}.</p>
  `;

  return post;
}

function fetchPosts() {
  if (isLoading) return;

  isLoading = true;
  loader.style.display = "block";

  setTimeout(() => {
    const start = (page - 1) * limit + 1;
    const end = page * limit;

    for (let i = start; i <= end; i++) {
      feed.appendChild(createPost(i));
    }

    page++;
    isLoading = false;
    loader.style.display = "none";
  }, 1000);
}

function handleScroll() {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight - 100) {
    fetchPosts();
  }
}

window.addEventListener("scroll", handleScroll);

fetchPosts();
