const bcrypt = require('bcryptjs');

const test = async () => {
  const password = "test@123";
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const isMatch = await bcrypt.compare(password, hash);

  console.log("Password:", password);
  console.log("Hash:", hash);
  console.log("Does it match?:", isMatch);
};

test();
