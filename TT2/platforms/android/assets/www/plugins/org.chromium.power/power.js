cordova.define("org.chromium.power.power", function(require, exports, module) { // Copyright (c) 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var exec = require('cordova/exec');

exports.requestKeepAwake = function(level) {
    if (level !== 'system' && level !== 'display') {
        // TODO(maxw): Handle this.
    }

    exec(null, null, 'ChromePower', 'requestKeepAwake', [level]);
};

exports.releaseKeepAwake = function() {
    exec(null, null, 'ChromePower', 'releaseKeepAwake', []);
}


});
