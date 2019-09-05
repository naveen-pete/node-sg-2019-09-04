const getUser = (id, cb) => {
  if (isNaN(id)) {
    return cb(`User id '${id}' should be numeric.`);
  }

  setTimeout(() => {
    cb(null, {
      id: id,
      name: `user-${id}`
    });
  }, 3000);
};


console.log('begin');

const showUser = (err, user) => {
  if (err) {
    return console.log('Error:', err);
  }

  console.log('user:', user);
}

getUser(1, showUser);
getUser('a', showUser);

console.log('end');
