const blogPostsContainer = document.getElementById('blogPosts');

const renderBlogPosts = () => {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPostsContainer.innerHTML = '';

  blogPosts.forEach((post, index) => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;
    postElement.appendChild(titleElement);

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;
    postElement.appendChild(contentElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Posted by: ${post.username}`;
    authorElement.classList.add('author');
    postElement.appendChild(authorElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteBlogPost(index));
    postElement.appendChild(deleteButton);

    blogPostsContainer.appendChild(postElement);
  });
};

renderBlogPosts();

const deleteBlogPost = (index) => {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  blogPosts.splice(index, 1);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  renderBlogPosts();
};