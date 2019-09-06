const users = [
  { id: 1, name: 'ram' },
  { id: 2, name: 'hari' },
  { id: 3, name: 'krish' }
];

const posts = [
  { id: 1, userId: 1, title: 'ram-p1' },
  { id: 2, userId: 1, title: 'ram-p2' },
  { id: 3, userId: 2, title: 'hari-p1' },
  { id: 4, userId: 2, title: 'hari-p2' },
  { id: 5, userId: 3, title: 'krish-p1' },
  { id: 6, userId: 3, title: 'krish-p2' }
];

const getUser = (userName, cb) => {
  if (userName.trim().length === 0) {
    return cb(`User name should not be empty.`);
  }

  setTimeout(() => {
    const user = users.find(u => u.name === userName);
    cb(null, user);
  }, 3000);
};

const getPosts = (userId, cb) => {
  if (isNaN(userId)) {
    cb('User id should be numeric.');
    return;
  }

  setTimeout(() => {
    const postsForUser = posts.filter(p => p.userId === userId);
    cb(null, postsForUser);
  }, 3000);
}

console.log('begin');

getUser('ram', (err, user) => {
  if (err) {
    return console.log('getUser() - Error:', err);
  }

  console.log('user:', user);
  getPosts(user.id, (err, posts) => {
    if (err) {
      return console.log('getPosts() - Error:', err);
    }

    console.log('posts:', posts);
  });
});

// getUser('a', () => {});

console.log('end');
