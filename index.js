var path = require('path');
var removeFile = require('broccoli-file-remover');

module.exports = {
  name: 'ember-cli-test-file-remover',

  setupPreprocessorRegistry: function(type, registry) {
    var options, appName;
    if (registry && registry.app && registry.app.options) {
      options = registry.app.options['test-file-remover'];
      appName = registry.app.name;
      env = registry.app.env;
      if (options && options.files) {
        options.files = options.files.map(function(f) {
          return path.join(appName, "tests", f);
        });
      }
    }
    registry.add('js', {
      name: 'ember-cli-test-file-remover',
      ext: 'js',
      toTree: function(tree) {
        if (options) {
          if (!!!options.env || options.env === env)
            return removeFile(tree, options);
        }
        return tree;
      }
    });
  }
};
