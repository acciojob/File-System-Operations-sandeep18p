const fs = require('fs');

// Read and parse JSON file
const jsonContent = fs.readFileSync('users.json', 'utf8');
const users = JSON.parse(jsonContent);

// Calculate and print the total number of users
const totalUsers = users.length;
console.log(`Total number of users: ${totalUsers}`);

// Find and print the user with the highest score
let maxScoreUser = users[0];
users.forEach(user => {
  if (user.score > maxScoreUser.score) {
    maxScoreUser = user;
  }
});
console.log(`User with highest score: ${JSON.stringify(maxScoreUser)}`);

// Find and print the user with the lowest score
let minScoreUser = users[0];
users.forEach(user => {
  if (user.score < minScoreUser.score) {
    minScoreUser = user;
  }
});
console.log(`User with lowest score: ${JSON.stringify(minScoreUser)}`);

// Calculate and print the average score of all users
const totalScore = users.reduce((sum, user) => sum + user.score, 0);
const averageScore = totalScore / totalUsers;
console.log(`Average score of all users: ${averageScore}`);

// Sort users based on their scores in descending order
users.sort((a, b) => b.score - a.score);

// Write sorted data back to JSON file
const sortedData = JSON.stringify(users, null, 2);
fs.writeFileSync('users.json', sortedData);
