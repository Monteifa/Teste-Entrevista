function emailValidation(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email || !emailRegex.test(email)) {
    return false;
  }
  return true;
}

function telValidation(tel) {
  if (!tel || tel.length < 10 || typeof parseInt(tel) !== 'number') {
    return false;
  }
  return true;
}

module.exports = { emailValidation, telValidation };
