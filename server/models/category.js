module.exports = function(Category) {
    // allow to only fetch
    Category.disableRemoteMethod('create', true);
    Category.disableRemoteMethod('deleteById', true);
    Category.disableRemoteMethod('upsert', true);
    Category.disableRemoteMethod('updateAll', true);
    Category.disableRemoteMethod('updateAttributes', false);
};
