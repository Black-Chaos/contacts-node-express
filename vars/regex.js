exports.phone = /^\(\d{3}\) \d{3}-\d{4}$/;

exports.email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

exports.pswd = /^(?=.*[0-9])(?=.*[.!@#$%^&*/])[a-zA-Z0-9.!@#$%^&*/]{8,128}$/;