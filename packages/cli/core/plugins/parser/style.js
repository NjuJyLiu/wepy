const Source = require('../../compile/Source');

exports = module.exports = function() {
  this.register('parse-style', function(chain) {
    const bead = chain.bead;
    const compiledCode = bead.compiled.code;

    if (bead.parsed) {
      return Promise.resolve(chain);
    }
    bead.parsed = {
      source: new Source(compiledCode)
    };
    return chain;
  });
};
