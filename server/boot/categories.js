module.exports = function addReportCategories(app) {
    //
    app.dataSources['yi-dev'].automigrate('Category', function (err) {
        if (err) throw err;

        app.models.Category.create([
            {"name": "mobility", "icon": "mobility"},
            {"name": "buildings", "icon": "buildings"},
            {"name": "security", "icon": "security"},
            {"name": "pub-services", "icon": "pub-services"},
            {"name": "environment", "icon": "environment"},
            {"name": "other", "icon": "other"},
            {"name": "tunnel", "icon": "mobility", "parent": "mobility"},
            {"name": "crossing", "icon": "mobility", "parent": "mobility"},
            {"name": "bridge", "icon": "buildings", "parent": "buildings"}
        ]);
    });
};
