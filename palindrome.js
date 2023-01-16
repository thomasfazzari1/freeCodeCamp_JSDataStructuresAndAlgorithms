function palindrome(str) {
  // remove non-alphanumeric characters + convert to lower case
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // checking
  return str === str.split('').reverse().join('');
}

palindrome("eye");
palindrome("almostomla");