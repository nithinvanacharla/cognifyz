// Step 2: Use fetch() to get data
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        displayPosts(data); // Step 3: Call display function
    })
    .catch(error => console.error('Error fetching data:', error));

// Step 3: Display the data dynamically
function displayPosts(posts) {
    const container = document.getElementById('posts-container');
    
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        `;
        container.appendChild(postDiv);
    });
}

