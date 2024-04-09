const form = document.getElementById('blogForm');
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');

// Add event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!username.value || !title.value || !content.value) {
      alert('Please fill out all fields.');
      return;
    }

    const blogPost = {
      username: username.value,
      title: title.value,
      content: content.value,
    };

    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    username.value = '';
    title.value = '';
    content.value = '';

    window.location.href = 'blog.html';
  });
});

const viewBlogButton = document.getElementById('viewBlogButton');

viewBlogButton.addEventListener('click', () => {
  window.location.href = 'blog.html';
});