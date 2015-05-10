# ember-cli-test-file-remover
Ember cli test file remover

# Usage
* In your ember-cli app
* npm install ember-cli-test-file-remover --save-dev
* Change Brocfile.js to add test files to remove 

# Example

Brocfile.js

    var app = new EmberApp({
      'test-file-remover': {
        files: ['integration/fully-loaded-set-of-loans-test.js']
      }
    });

File structure is like

    your app
      -- tests
          -- integration
              -- fully-loaded-set-of-loans-test.js

# Issues and Features
  Please use Github to submit your issues and features.
