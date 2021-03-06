'use strict';

/**
 * Models an item in the user's backpack or something they
 * have equipped.
 */
function Item() {
    var self = this;

    self.DESCRIPTION_MAX_LENGTH = 200;

    self.ps = PersistenceService.register(Item, self);
    self.mapping = {
        ignore: ['clear', 'ps', 'importValues', 'exportValues', 'save',
            'totalWeight', 'delete', 'mapping'],
        include: ['characterId']
    };

    self.characterId = ko.observable(null);
    self.itemName = ko.observable('');
    self.itemType = ko.observable('');
    self.itemIsEquippable = ko.observable(false);
    self.itemBodyLocation = ko.observable('');
    self.itemDesc = ko.observable('');
    self.itemQty = ko.observable(1);
    self.itemWeight = ko.observable(0);
    self.itemCost = ko.observable(0);
    self.itemCurrencyDenomination = ko.observable('');

    self.totalWeight = ko.pureComputed(function() {
        if (self.itemQty() && self.itemWeight()) {
            return parseInt(self.itemQty()) * parseFloat(self.itemWeight());
        }
        return 0;
    });

    self.shortDescription = ko.pureComputed(function() {
        if (self.itemDesc()) {
            return self.itemDesc().substring(0, self.DESCRIPTION_MAX_LENGTH) + '...';
        }
    });

    self.itemDescriptionHTML = ko.pureComputed(function() {
        if (self.itemDesc()){
            return self.itemDesc().replace(/\n/g, '<br />');
        } else {
            return '<div class="h3"><small>Add a description via the edit tab.</small></div>';
        }
    });

    self.itemWeightLabel = ko.pureComputed(function() {
        return self.itemWeight() + ' lbs.'
    });

    self.clear = function() {
        var values = new Item().exportValues();
        ko.mapping.fromJS(values, self.mapping, self);
    };

    self.importValues = function(values) {
        ko.mapping.fromJS(values, self.mapping, self);
    };

    self.exportValues = function() {
        return ko.mapping.toJS(self, self.mapping);
    };

    self.save = function() {
        self.ps.save();
    };

    self.delete = function() {
        self.ps.delete();
    };
}

Item.findAllBy = function(characterId) {
    return PersistenceService.findAll(Item).filter(function(e, i, _) {
        return e.characterId() === characterId;
    });
};
