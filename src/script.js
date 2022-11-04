const getText = () => {
  fetch('src/sample.txt')
    .then((res) => res.text())
    .then((data) => {
      let output = `<p class="px-2 py-2 font-semibold">${data}</p>`;

      const toHTML = (document.getElementById('output').innerHTML = output);

      return toHTML;
    })
    .catch((err) => console.log(err));
};

const getUsers = () => {
  fetch('src/users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h1 class="text-2xl font-semibold py-2">Users</h1>';

      data.forEach((user) => {
        output += `
          <ul>
          <li class="text-gray-600">
          ID: <span class="text-black font-bold">${user.id}</span>
        </li>
        <li class="text-gray-600">
          Name: <span class="text-black font-bold">${user.name}</span>
        </li>
        <li class="text-gray-600">
          Email: <span class="text-black font-bold">${user.email}</span>
        </li>
        <hr class="border-black border-1 my-4" />
          </ul>
        `;
      });

      const toHTML = (document.getElementById('output').innerHTML = output);

      return toHTML;
    })
    .catch((err) => console.log(err));
};

const getPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h1 class="text-2xl font-semibold py-2">Posts</h1>';

      data.forEach((post) => {
        output += `
        <ul>
          <li class="text-gray-600">
            ID: <span class="text-black font-bold">${post.id}</span>
          </li>
          <li class="text-gray-600">
            Title: <span class="text-black font-bold">${post.title}</span>
          </li>
          <li class="text-gray-600">
            Body: <span class="text-black font-bold">${post.body}</span>
          </li>
          <hr class="border-black border-1 my-4" />
        </ul>
        `;
      });

      const toHTML = (document.getElementById('output').innerHTML = output);

      return toHTML;
    })
    .catch((err) => console.log(err));
};

const addPosts = (e) => {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ title, body }),
  })
    .then((res) => res.json())
    .then((data) => {
      let output = `
      <p class="text-gray-600">
      ID: <span class="text-black font-bold">${data.id}</span>
    </p>
    <p class="text-gray-600">
      Title: <span class="text-black font-bold">${data.title}</span>
    </p>
    <p class="text-gray-600">
      Body: <span class="text-black font-bold">${data.body}</span>
    </p>
    <hr class="border-black border-1 my-4" />
      `;

      const toHTML = (document.getElementById('output').innerHTML += output);

      return toHTML;
    })
    .catch((err) => console.log(err));
};

document.getElementById('getText').addEventListener('click', getText);

document.getElementById('getUsers').addEventListener('click', getUsers);

document.getElementById('getPosts').addEventListener('click', getPosts);

document.getElementById('addPost').addEventListener('submit', addPosts);
