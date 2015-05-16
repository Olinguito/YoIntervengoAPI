module.exports = function addReportCategories(app) {
    //
    app.dataSources['db'].automigrate('Category', function (err) {
        if (err) throw err;

        app.models.Category.create([
            
            {"slug": "pub-services", "name": "Servicios Públicos", "icon": "pub-services"},
            {"slug": "electricity", "name": "Energía", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "phone", "name": "Telefonía", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "internet", "name": "Internet", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "trash", "name": "Aseo/Basuras", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "lighting", "name": "Alumbrado", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "water", "name": "Acueducto", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "sewage", "name": "Alcantarillado", "icon": "pub-services", "parent": "pub-services"},
            {"slug": "gas", "name": "Gas", "icon": "pub-services", "parent": "pub-services"},
            
            {"slug": "mobility", "name": "Movilidad vial", "icon": "mobility"},
            {"slug": "hole", "name": "Hueco", "icon": "mobility", "parent": "mobility", "type": 1},
            {"slug": "sidewalk", "name": "Andén", "icon": "mobility", "parent": "mobility"},
            {"slug": "cycling-route", "name": "Ciclo-ruta", "icon": "mobility", "parent": "mobility"},
            {"slug": "traffic-signal", "name": "Señales de tránsito", "icon": "mobility", "parent": "mobility"},
            {"slug": "footbridge", "name": "Puente peatonal", "icon": "mobility", "parent": "mobility"},
            {"slug": "bridge", "name": "Puente vehicular", "icon": "mobility", "parent": "mobility"},
            {"slug": "dangerous-crossing", "name": "Cruce peligroso", "icon": "mobility", "parent": "mobility", "type": 1},
            {"slug": "traffic-light", "name": "Semáforos", "icon": "mobility", "parent": "mobility"},
            {"slug": "difficult-access", "name": "Difícil acceso", "icon": "mobility", "parent": "mobility"},
            {"slug": "unpaved-road", "name": "Vía sin pavimentar", "icon": "mobility", "parent": "mobility", "type": 1},
            {"slug": "paving", "name": "Pavimentación", "icon": "mobility", "parent": "mobility", "type": 0},
            {"slug": "sewer-theft", "name": "Robo de alcantarilla", "icon": "mobility", "parent": "mobility", "type": 1},
            {"slug": "sewer", "name": "Alcantarilla", "icon": "mobility", "parent": "mobility", "type": 0},
            
            {"slug": "buildings", "name": "Construcciones y terrenos", "icon": "buildings"},
            {"slug": "park", "name": "Parques", "icon": "buildings", "parent": "buildings"},
            {"slug": "sport-place", "name": "Complejos deportivos", "icon": "buildings", "parent": "buildings"},
            {"slug": "building", "name": "Edificios", "icon": "buildings", "parent": "buildings"},
            {"slug": "abandoned-building", "name": "Elefante blanco", "icon": "buildings", "parent": "buildings"},
            {"slug": "lowcost-house", "name": "Viviendas de interés social", "icon": "buildings", "parent": "buildings"},
            {"slug": "educational-center", "name": "Centros educativos", "icon": "buildings", "parent": "buildings"},
            {"slug": "healthcare-center", "name": "Centros de salud", "icon": "buildings", "parent": "buildings"},
            
            {"slug": "environment", "name": "Salubridad/medio ambiental", "icon": "environment"},
            {"slug": "pollution", "name": "Contaminación", "icon": "environment", "parent": "environment"},
            {"slug": "backwaters", "name": "Aguas estancadas", "icon": "environment", "parent": "environment"},
            {"slug": "ilegal-fire", "name": "Quemas ilegales", "icon": "environment", "parent": "environment"},
            {"slug": "tree-felling", "name": "Tala ilegal", "icon": "environment", "parent": "environment"},
            {"slug": "rivers", "name": "Desviación y ríos", "icon": "environment", "parent": "environment"},
            {"slug": "environmental-catastrophe", "name": "Prevención de catástrofes ambientales", "icon": "environment", "parent": "environment"},
            
            {"slug": "security", "name": "Seguridad", "icon": "security"},
            {"slug": "robbery", "name": "Robo ", "icon": "security", "parent": "security", "type": 1},
            {"slug": "police-presence", "name": "Más presencia policial", "icon": "security", "parent": "security", "type": 0},
            {"slug": "security-cameras", "name": "Cámaras de seguridad", "icon": "security", "parent": "security"},
            {"slug": "gangs", "name": "Grupos ilegales/bandas", "icon": "security", "parent": "security", "type": 1},
            {"slug": "illicit-outlets", "name": "Expendios ilegales", "icon": "security", "parent": "security", "type": 1},
            {"slug": "armed-groups", "name": "Presencia de actores armados", "icon": "security", "parent": "security", "type": 1},
        ]);
    });
};
