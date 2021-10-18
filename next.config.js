const path = require("path");
const {withPlaiceholder} = require("@plaiceholder/next");

const dataDirectory = path.join(process.cwd(), "data");

module.exports = withPlaiceholder({
    env: {
        dataDirectory
    }
});
