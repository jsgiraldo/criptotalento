const SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
    deployer.deploy(SimpleStorage, 100); // Aquí se pasa el valor inicial (ejemplo: 100)
};
