const recipes = [
    {
        id: 1,
        title: "Romige Pasta Carbonara",
        description: "Klassiek Italiaans comfort food",
        time: "30 min",
        servings: 4,
        difficulty: "Gemiddeld",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "400g spaghetti",
            "200g spekblokjes of pancetta",
            "4 eidooiers",
            "100g Parmezaanse kaas",
            "Peper en zout",
            "2 teentjes knoflook"
        ],
        steps: [
            "Kook de pasta volgens de verpakking in gezouten water.",
            "Bak de spekblokjes knapperig in een grote pan.",
            "Klop de eidooiers met geraspte Parmezaanse kaas.",
            "Giet de pasta af, bewaar een kopje kookvocht.",
            "Meng de warme pasta met het spek en haal de pan van het vuur.",
            "Roer snel het eimengsel erdoor, voeg kookvocht toe voor romigheid.",
            "Breng op smaak met peper en serveer direct met extra kaas."
        ]
    },
    {
        id: 2,
        title: "Mediterrane Salade",
        description: "Fris en gezond",
        time: "15 min",
        servings: 2,
        difficulty: "Makkelijk",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "200g gemengde sla",
            "250g cherrytomaatjes",
            "1 komkommer",
            "200g feta kaas",
            "100g olijven",
            "Rode ui",
            "Olijfolie en citroen",
            "Oregano"
        ],
        steps: [
            "Was alle groenten grondig.",
            "Snijd de cherrytomaatjes doormidden.",
            "Snijd de komkommer in plakjes.",
            "Snijd de rode ui in dunne ringen.",
            "Meng alle groenten in een grote schaal.",
            "Verkruimel de feta over de salade.",
            "Voeg olijven toe.",
            "Maak een dressing van olijfolie, citroensap en oregano.",
            "Serveer meteen of koel voor 30 minuten."
        ]
    },
    {
        id: 3,
        title: "Tomaten Basilicum Soep",
        description: "Warm en troostend",
        time: "45 min",
        servings: 4,
        difficulty: "Makkelijk",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "1kg verse tomaten",
            "2 uien",
            "4 teentjes knoflook",
            "1 liter groentebouillon",
            "Verse basilicum",
            "200ml room",
            "Olijfolie",
            "Zout en peper"
        ],
        steps: [
            "Snijd de tomaten in stukken.",
            "Snipper de uien en knoflook.",
            "Fruit de ui en knoflook glazig in olijfolie.",
            "Voeg de tomaten toe en laat 10 minuten sudderen.",
            "Voeg de bouillon toe en kook 20 minuten.",
            "Pureer de soep glad met een staafmixer.",
            "Roer de room erdoor en verwarm zachtjes.",
            "Garneer met verse basilicum en serveer."
        ]
    },
    {
        id: 4,
        title: "Hachee Stoofpot",
        description: "Nederlands klassiek",
        time: "2 uur",
        servings: 6,
        difficulty: "Gemiddeld",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "800g rundvlees",
            "3 grote uien",
            "2 laurierblaadjes",
            "4 kruidnagels",
            "2 eetlepels azijn",
            "500ml runderbouillon",
            "2 eetlepels bloem",
            "Zout en peper"
        ],
        steps: [
            "Snijd het vlees in grote blokken.",
            "Snipper de uien grof.",
            "Bestrooi het vlees met bloem, zout en peper.",
            "Braad het vlees rondom bruin.",
            "Voeg de uien toe en fruit mee.",
            "Blus af met azijn en bouillon.",
            "Voeg laurier en kruidnagels toe.",
            "Laat 2 uur zachtjes sudderen tot het vlees mals is.",
            "Serveer met aardappelpuree en rode kool."
        ]
    },
    {
        id: 5,
        title: "Thaise Rode Curry",
        description: "Pittig en aromatisch",
        time: "40 min",
        servings: 4,
        difficulty: "Gemiddeld",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "500g kipfilet",
            "400ml kokosmelk",
            "3 eetlepels rode currypasta",
            "1 paprika",
            "200g taugé",
            "Thaise basilicum",
            "Vissaus",
            "Limoen",
            "Jasmijnrijst"
        ],
        steps: [
            "Kook de rijst volgens de verpakking.",
            "Snijd de kip in blokjes.",
            "Snijd de paprika in repen.",
            "Verhit wat olie en bak de currypasta 1 minuut.",
            "Voeg de kip toe en bak 5 minuten.",
            "Giet de kokosmelk erbij en breng aan de kook.",
            "Voeg de paprika toe en laat 10 minuten sudderen.",
            "Voeg taugé en basilicum toe op het laatst.",
            "Breng op smaak met vissaus en limoensap.",
            "Serveer over de rijst."
        ]
    },
    {
        id: 6,
        title: "Ramen Noedelsoep",
        description: "Japans comfort food",
        time: "25 min",
        servings: 2,
        difficulty: "Makkelijk",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "200g ramen noedels",
            "1 liter kippenbouillon",
            "2 eieren",
            "100g champignons",
            "Lente-ui",
            "Sojasaus",
            "Sesamolie",
            "Gember",
            "Nori zeewier"
        ],
        steps: [
            "Kook de eieren 7 minuten voor een zachte dooier en pel ze.",
            "Snijd de champignons in plakjes.",
            "Snijd de lente-ui in ringetjes.",
            "Breng de bouillon aan de kook met gember.",
            "Voeg sojasaus en sesamolie toe naar smaak.",
            "Kook de noedels in de bouillon volgens verpakking.",
            "Bak de champignons apart in wat olie.",
            "Verdeel de noedels en bouillon over kommen.",
            "Garneer met ei, champignons, lente-ui en nori."
        ]
    },
    {
        id: 7,
        title: "Kip Avocado Wrap",
        description: "Perfect voor lunch",
        time: "20 min",
        servings: 4,
        difficulty: "Makkelijk",
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "4 wraps",
            "300g kipfilet",
            "2 avocado's",
            "Sla",
            "Tomaat",
            "Rode ui",
            "150g yoghurt",
            "Limoensap",
            "Knoflookpoeder",
            "Paprikapoeder"
        ],
        steps: [
            "Snijd de kip in reepjes en kruid met paprika en knoflookpoeder.",
            "Bak de kip goudbruin in een pan.",
            "Maak een saus van yoghurt en limoensap.",
            "Snijd de avocado in plakjes.",
            "Snijd de tomaat en ui.",
            "Verwarm de wraps kort in een droge pan.",
            "Beleg de wraps met sla, kip, avocado, tomaat en ui.",
            "Verdeel de yoghurtsaus erover.",
            "Rol de wraps stevig op en snijd doormidden."
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        description: "Simpel en perfect",
        time: "35 min",
        servings: 2,
        difficulty: "Gemiddeld",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop&q=80",
        ingredients: [
            "400g pizzadeeg",
            "400g gepelde tomaten",
            "250g mozzarella",
            "Verse basilicum",
            "Olijfolie",
            "Knoflook",
            "Oregano",
            "Zout"
        ],
        steps: [
            "Verwarm de oven voor op 250°C.",
            "Pureer de tomaten met knoflook, zout en oregano.",
            "Rol het deeg uit tot een dunne cirkel.",
            "Bestrijk het deeg met de tomatensaus.",
            "Verdeel de mozzarella over de pizza.",
            "Besprenkel met olijfolie.",
            "Bak 12-15 minuten tot de bodem knapperig is.",
            "Garneer met verse basilicum en serveer direct."
        ]
    }
];

function getRecipeIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

function loadRecipe() {
    const recipeId = getRecipeIdFromUrl();
    const recipe = recipes.find(r => r.id === recipeId);
    
    if (!recipe) {
        window.location.href = '../index.html';
        return;
    }
    
    document.title = `${recipe.title} - LekkerZelf`;
    document.getElementById('recipeTitle').textContent = recipe.title;
    document.getElementById('recipeDescription').textContent = recipe.description;
    document.getElementById('recipeTime').textContent = recipe.time;
    document.getElementById('recipeServings').textContent = `${recipe.servings} personen`;
    document.getElementById('recipeDifficulty').textContent = recipe.difficulty;
    document.getElementById('recipeImage').src = recipe.image;
    document.getElementById('recipeImage').alt = recipe.title;
    
    const ingredientsList = document.getElementById('ingredientsList');
    recipe.ingredients.forEach((ingredient, index) => {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `ingredient-${index}`;
        
        const label = document.createElement('label');
        label.htmlFor = `ingredient-${index}`;
        label.textContent = ingredient;
        
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                div.classList.add('checked');
            } else {
                div.classList.remove('checked');
            }
        });
        
        div.appendChild(checkbox);
        div.appendChild(label);
        ingredientsList.appendChild(div);
    });
    
    const stepsList = document.getElementById('stepsList');
    recipe.steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadRecipe();
    
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
});