const uppercase = (str, callback) => {
    callback(str.toUpperCase());
    return str.toUpperCase();
};

// uppercase("vqv", console.log);

module.exports = uppercase;

