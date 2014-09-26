/**
 * @author Richard Ayotte <rich.ayotte@ayottesoftware.com>
 */

'use strict';

var advise = require('dcl/advise')
	, User = require('../../models').User
;

var user = {
    name: 'Fred Flinstone'
    , title: 'Stonemaster'
};

User.create(user)
.then(function(newUser){
    advise.around(newUser, 'save', function(save) {
        return function() {
            newUser.name = 'Rocker';
            return save.apply(this, arguments);
        };
    });

    newUser.name = 'Rich';
    newUser.save();
});
