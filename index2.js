
function signup(userName) {
 
  const existingUsers = ['alice', 'bob', 'charlie'];


  if (existingUsers.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    existingUsers.push(userName); // Add new username to the array
    return "Signup Successful, Please Login";
  }
}

// Export the signup function for use later
module.exports = { signup };
