import type { NewPlayer } from '../query/rules/player';

type Item = {
    reroll_cost: number
    apothecary: boolean
    players: (
        { skills: string[] }
        & NewPlayer
    ) []
};

type RulesStruct = {
    'amazones': Item
    'orques noirs': Item
    'bretonniens': Item
    'nains du chaos': Item
    'elfes noirs': Item
    'nains': Item
    'union elfique': Item
    'gnomes': Item
    'gobelins': Item
    'halflings': Item
    'humains': Item
    'noblesse impériale': Item
    'khorne': Item
    'hommes-lézards': Item
    'horreurs nécromantiques': Item
    'nordiques': Item
    'nurgle': Item
    'ogres': Item
    'orques': Item
    'morts ambulants': Item
    'skavens': Item
    'snotlings': Item
    'rois des tombes': Item
    'vampires': Item
    'elfes sylvains': Item

};

export const TEAM_RULES: RulesStruct = {
    'amazones': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'guerrière aigle', keywords: 'humain,trois-quart', quantity: 16, cost: 50000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['esquive'],
                primary: 'general', secondary: 'agility,stregnth',
            },
            {
                name: 'guerrière python', keywords: 'humain,lanceur', quantity: 2, cost: 80000,
                move: 6, strength: 3, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'sur le ballon', 'passe', 'passe assurée'],
                primary: 'general,passing', secondary: 'agility,stregnth',
            },
            {
                name: 'guerrière piranha', keywords: 'humain,blitzer', quantity: 2, cost: 90000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['esquive', 'frappe-et-court', 'rétablissement'],
                primary: 'agility,general', secondary: 'stregnth',
            },
            {
                name: 'guerrière jaguar', keywords: 'humain,bloqueur', quantity: 2, cost: 110000,
                move: 6, strength: 4, agility: 3, passing: 4, armour: 9,
                skills: ['esquive', 'défenseur'],
                primary: 'general,strength', secondary: 'agility',
            },
        ],
    },
    'orques noirs': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'malabar gobelin', keywords: 'gobelin,trois-quart', quantity: 16, cost: 45000,
                move: 6, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['esquive', 'poids plume', 'minus', 'crâne épais'],
                primary: 'agility,devious', secondary: 'general,passing,strength',
            },
            {
                name: 'orque noir', keywords: 'orque,bloqueur', quantity: 6, cost: 90000,
                move: 4, strength: 4, agility: 4, passing: 5, armour: 10,
                skills: ['bagarreur', 'projection'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'troll entraîné', keywords: 'troll,gros_bras', quantity: 1, cost: 115000,
                move: 4, strength: 5, agility: 5, passing: 5, armour: 10,
                skills: ['toujours affamé', 'châtaigne', 'gerbe de vomi', 'gros débile', 'régénération', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
    'bretonniens': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'écuyer bretonnien', keywords: 'humain,trois-quart', quantity: 16, cost: 50000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['lutte'],
                primary: 'general', secondary: 'agility,strength',
            },
            {
                name: 'receveur chevalier bretonnien', keywords: 'humain,receveur', quantity: 2, cost: 85000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['réception', 'intrépide', 'nerfs d\'acier'],
                primary: 'agility,general', secondary: 'strength',
            },
            {
                name: 'lanceur chevalier bretonnien', keywords: 'humain,lanceur', quantity: 2, cost: 80000,
                move: 6, strength: 3, agility: 3, passing: 3, armour: 9,
                skills: ['intrépide', 'nerfs d\'acier', 'passe'],
                primary: 'general,passing', secondary: 'agility,strength',
            },
            {
                name: 'chevalier du graal', keywords: 'humain,blitzer', quantity: 2, cost: 95000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 10,
                skills: ['blocage', 'intrépide', 'appuis sûrs'],
                primary: 'general,strength', secondary: 'agility',
            },
        ],
    },
    'nains du chaos': {
        reroll_cost: 70000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart hobgobelin', keywords: 'gobelin,trois-quart', quantity: 16, cost: 40000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: [],
                primary: 'devious', secondary: 'agility,general,strength',
            },
            {
                name: 'surineur sournois', keywords: 'gobelin,spécial', quantity: 2, cost: 60000,
                move: 6, strength: 3, agility: 3, passing: 5, armour: 8,
                skills: ['poursuite', 'poignard'],
                primary: 'devious,general', secondary: 'agility,strength',
            },
            {
                name: 'bloqueur nain du chaos', keywords: 'nain,bloqueur', quantity: 4, cost: 70000,
                move: 4, strength: 3, agility: 4, passing: 6, armour: 10,
                skills: ['blocage', 'peau de fer', 'crâne épais'],
                primary: 'general,strength', secondary: 'agility,devious,mutation',
            },
            {
                name: 'forgeflamme', keywords: 'nain,spécial', quantity: 2, cost: 80000,
                move: 5, strength: 3, agility: 4, passing: 6, armour: 10,
                skills: ['bagarreur', 'souffle ardent', 'présence perturbante', 'crâne épais'],
                primary: 'general,strength', secondary: 'agility,devious,mutation',
            },
            {
                name: 'centaure-taureau', keywords: 'nain,blitzer', quantity: 2, cost: 130000,
                move: 6, strength: 4, agility: 4, passing: 6, armour: 10,
                skills: ['sprint', 'équilibre', 'crâne épais', 'instable'],
                primary: 'general,strength', secondary: 'agility,devious,mutation',
            },
            {
                name: 'minotaure', keywords: 'minotaure,gros_bras', quantity: 1, cost: 150000,
                move: 5, strength: 5, agility: 4, passing: 6, armour: 9,
                skills: ['frénésie', 'cornes', 'solitaire (4+)', 'châtaigne', 'crâne épais', 'fureur débridée'],
                primary: 'mutation,strength', secondary: 'agility,general',
            },
        ],
    },
    'elfes noirs': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart elfe noir', keywords: 'elfe,trois-quart', quantity: 16, cost: 65000,
                move: 6, strength: 3, agility: 2, passing: 3, armour: 9,
                skills: [],
                primary: 'agility,general', secondary: 'devious,strength',
            },
            {
                name: 'coureur elfe noir', keywords: 'elfe,coureur', quantity: 2, cost: 80000,
                move: 7, strength: 3, agility: 2, passing: 3, armour: 8,
                skills: ['délestage', 'dégagement'],
                primary: 'agility,general,passing', secondary: 'devious,strength',
            },
            {
                name: 'assassin elfe noir', keywords: 'elfe,spécial', quantity: 2, cost: 90000,
                move: 7, strength: 3, agility: 2, passing: 4, armour: 8,
                skills: ['frappe-et-court', 'poursuite', 'poignard'],
                primary: 'agility,devious', secondary: 'general,strength',
            },
            {
                name: 'blitzer elfe noir', keywords: 'elfe,blitzer', quantity: 2, cost: 105000,
                move: 7, strength: 3, agility: 2, passing: 3, armour: 9,
                skills: ['blocage'],
                primary: 'agility,general', secondary: 'devious,passing,strength',
            },
            {
                name: 'furie elfe noir', keywords: 'elfe,spécial', quantity: 2, cost: 110000,
                move: 7, strength: 3, agility: 2, passing: 4, armour: 8,
                skills: ['esquive', 'frénésie', 'rétablissement'],
                primary: 'agility,general', secondary: 'devious,strength',
            },
        ],
    },
    'nains': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart nain', keywords: 'nain,trois-quart', quantity: 16, cost: 70000,
                move: 4, strength: 3, agility: 4, passing: 5, armour: 10,
                skills: ['blocage', 'défenseur', 'crâne épais'],
                primary: 'devious,general', secondary: 'strength',
            },
            {
                name: 'coureur nain', keywords: 'nain,coureur', quantity: 2, cost: 80000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['sprint', 'prise sûre', 'crâne épais'],
                primary: 'general,passing', secondary: 'strength',
            },
            {
                name: 'blitzer nain', keywords: 'nain,blitzer', quantity: 2, cost: 100000,
                move: 5, strength: 3, agility: 4, passing: 4, armour: 10,
                skills: ['blocage', 'tacle plongeant', 'tacle', 'crâne épais'],
                primary: 'general,strength', secondary: 'passing',
            },
            {
                name: 'tueur de trolls', keywords: 'nain,spécial', quantity: 2, cost: 95000,
                move: 5, strength: 3, agility: 4, passing: 5, armour: 9,
                skills: ['blocage', 'intrépide', 'frénésie', 'haine (troll)', 'crâne épais'],
                primary: 'general,strength', secondary: 'devious',
            },
            {
                name: 'roule-mort', keywords: 'nain,gros_bras,spécial', quantity: 1, cost: 170000,
                move: 5, strength: 7, agility: 5, passing: 0, armour: 11,
                skills: [
                    'esquive en force', 'joueur déloyal', 'juggernaut', 'solitaire (4+)',
                    'châtaigne', 'sans ballon', 'stabilité', 'arme secrète',
                ],
                primary: 'devious,strength', secondary: 'general',
            },
        ],
    },
    'union elfique': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart elfe', keywords: 'elfe,trois-quart', quantity: 16, cost: 65000,
                move: 6, strength: 3, agility: 2, passing: 3, armour: 8,
                skills: ['fumblerooski'],
                primary: 'aglity,general', secondary: 'strength',
            },
            {
                name: 'lanceur elfe', keywords: 'elfe,lanceur', quantity: 2, cost: 75000,
                move: 6, strength: 3, agility: 2, passing: 2, armour: 8,
                skills: ['passe désespérée', 'passe'],
                primary: 'agility,general,passing', secondary: 'strength',
            },
            {
                name: 'receveur elfe', keywords: 'elfe,receveur', quantity: 2, cost: 100000,
                move: 8, strength: 3, agility: 2, passing: 4, armour: 8,
                skills: ['nerfs d\'acier', 'réception', 'réception plongeante'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
            {
                name: 'biltzer elfe', keywords: 'elfe,blitert', quantity: 2, cost: 115000,
                move: 7, strength: 3, agility: 2, passing: 3, armour: 9,
                skills: ['blocage', 'glissade contrôlée'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
        ],
    },
    'gnomes': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart gnome', keywords: 'gnome,trois-quart', quantity: 16, cost: 40000,
                move: 5, strength: 2, agility: 3, passing: 4, armour: 7,
                skills: ['rétablissement', 'poids plume', 'minus', 'lutte'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'renard sylvestre', keywords: 'animal,coureur', quantity: 2, cost: 50000,
                move: 7, strength: 2, agility: 2, passing: 0, armour: 6,
                skills: ['esquive', 'mon ballon', 'glissade contrôlée', 'minus'],
                primary: '', secondary: 'agility',
            },
            {
                name: 'illusioniste gnome', keywords: 'gnome,spécial', quantity: 2, cost: 50000,
                move: 5, strength: 2, agility: 3, passing: 3, armour: 7,
                skills: ['rétablissement', 'minus', 'farceur', 'lutte'],
                primary: 'agility,passing', secondary: 'devious,general',
            },
            {
                name: 'belluaire gnome', keywords: 'gnome,bloqueur', quantity: 2, cost: 55000,
                move: 5, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['garde', 'rétablissement', 'minus', 'lutte'],
                primary: 'agility', secondary: 'devious,general,strengt^w',
            },
            {
                name: 'homme-arbre de l\'altern', keywords: 'homme-arbre,gros_bras', quantity: 2, cost: 120000,
                move: 2, strength: 6, agility: 5, passing: 5, armour: 11,
                skills: ['châtaigne', 'stabilité', 'bras musclé', 'prendre racine', 'crâne épais', 'lancer de coéquipier', 'timmm-ber!'],
                primary: '', secondary: '',
            },
        ],
    },
    'gobelins': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart gobelin', keywords: 'gobelin,trois-quart', quantity: 16, cost: 40000,
                move: 6, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['esquive', 'poids plume', 'minus'],
                primary: 'agility,devious', secondary: 'general,passing,strength',
            },
            {
                name: 'cinglé', keywords: 'gobelin,spécial', quantity: 1, cost: 40000,
                move: 6, strength: 2, agility: 3, passing: 0, armour: 8,
                skills: ['tronçonneuse', 'minus', 'sans ballon', 'arme secrète'],
                primary: 'devious', secondary: 'agility,general,strength',
            },
            {
                name: 'bomba', keywords: 'gobelin,spécial', quantity: 1, cost: 45000,
                move: 6, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['bombardier', 'esquive', 'arme secrète', 'minus'],
                primary: 'devious,passing', secondary: 'agility,general,strength',
            },
            {
                name: 'ouligan\'', keywords: 'gobelin,spécial', quantity: 1, cost: 60000,
                move: 6, strength: 2, agility: 3, passing: 5, armour: 8,
                skills: ['joueur déloyal', 'présence perturbante', 'esquive', 'poids plume', 'minus', 'provocation'],
                primary: 'agility,devious', secondary: 'general,strength',
            },
            {
                name: 'plongeur de la mort', keywords: 'gobelin,spécial', quantity: 1, cost: 65000,
                move: 6, strength: 2, agility: 3, passing: 6, armour: 8,
                skills: ['esquive', 'poids plume', 'minus', 'piqué'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'fanatique', keywords: 'gobelin,spécial', quantity: 1, cost: 70000,
                move: 3, strength: 7, agility: 3, passing: 0, armour: 8,
                skills: ['chaîne et boulet', 'minus', 'sans ballon', 'arme secrète'],
                primary: 'devious,strength', secondary: 'agility,general',
            },
            {
                name: 'échassier à ressort', keywords: 'gobelin,spécial', quantity: 1, cost: 75000,
                move: 7, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['esquive', 'minus', 'monté sur ressort'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'troll entraîné', keywords: 'troll,gros_bras', quantity: 2, cost: 115000,
                move: 4, strength: 5, agility: 5, passing: 5, armour: 10,
                skills: ['toujours affamé', 'châtaigne', 'gros débile', 'gerbe de vomi', 'régénération', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
    'halflings': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'aspirant halfling', keywords: 'halfling,trois-quart', quantity: 16, cost: 30000,
                move: 5, strength: 2, agility: 3, passing: 4, armour: 7,
                skills: ['esquive', 'poids plume', 'minus'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'balaise halfling', keywords: 'halfling,bloqueur', quantity: 2, cost: 50000,
                move: 5, strength: 2, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'parade', 'minus'],
                primary: 'agility,passing', secondary: 'devious,general,strength',
            },
            {
                name: 'receveur halfling', keywords: 'halfling,receveur', quantity: 2, cost: 55000,
                move: 5, strength: 2, agility: 3, passing: 4, armour: 7,
                skills: ['réception', 'esquive', 'poids plume', 'sprint', 'minus'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'homme-arbre de l\'altern', keywords: 'homme-arbre,gros_bras', quantity: 2, cost: 120000,
                move: 2, strength: 6, agility: 5, passing: 5, armour: 11,
                skills: ['châtaigne', 'stabilité', 'bras musclé', 'prendre racine', 'crâne épais', 'lancer de coéquipier', 'timmm-ber!'],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
    'humains': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart humain', keywords: 'humain,trois-quart', quantity: 16, cost: 50000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: [],
                primary: 'general', secondary: 'agility,devious,strength',
            },
            {
                name: 'aspirant halfling', keywords: 'halfling,trois-quart', quantity: 3, cost: 30000,
                move: 5, strength: 2, agility: 3, passing: 4, armour: 7,
                skills: ['esquive', 'poids plume', 'minus'],
                primary: 'agility', secondary: 'devious,general,strength',
            },
            {
                name: 'receveur humain', keywords: 'humain,receveur', quantity: 2, cost: 75000,
                move: 8, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['réception', 'esquive'],
                primary: 'agility,general', secondary: 'devious,passing,strength',
            },
            {
                name: 'lanceur humain', keywords: 'humain,lanceur', quantity: 2, cost: 75000,
                move: 6, strength: 3, agility: 3, passing: 3, armour: 9,
                skills: ['passe', 'prise sûre'],
                primary: 'general,passing', secondary: 'agility,devious,strength',
            },
            {
                name: 'blitzer humain', keywords: 'humain,blitzer', quantity: 2, cost: 85000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['blocage', 'tacle'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'ogre', keywords: 'ogre,gros_bras', quantity: 1, cost: 140000,
                move: 5, strength: 5, agility: 4, passing: 5, armour: 10,
                skills: ['cerveau lent', 'solitaire (3+)', 'châtaigne', 'crâne épais', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,mutation',
            },
        ],
    },
    'noblesse impériale': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'valet impérial', keywords: 'humain,trois-quart', quantity: 16, cost: 45000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['parade'],
                primary: 'general', secondary: 'agility,strength',
            },
            {
                name: 'lanceur impérial', keywords: 'humain,lanceur', quantity: 2, cost: 75000,
                move: 6, strength: 3, agility: 3, passing: 2, armour: 9,
                skills: ['transmission dans la course', 'passe', 'pro'],
                primary: 'general,passing', secondary: 'agility,strength',
            },
            {
                name: 'garde du corps', keywords: 'humain,bloqueur', quantity: 4, cost: 85000,
                move: 5, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['stabilité', 'lutte'],
                primary: 'general,strength', secondary: 'agility',
            },
            {
                name: 'blitzer noble', keywords: 'humain,blitzer', quantity: 2, cost: 90000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['blocage', 'réception', 'pro'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
            {
                name: 'ogre', keywords: 'ogre,gros_bras', quantity: 1, cost: 140000,
                move: 5, strength: 5, agility: 4, passing: 5, armour: 10,
                skills: ['cerveau lent', 'solitaire (3+)', 'châtaigne', 'crâne épais', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,mutation',
            },
        ],
    },
    'khorne': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'maraudeur sanglant', keywords: 'humain,trois-quart', quantity: 16, cost: 50000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['frénésie'],
                primary: 'general,mutation', secondary: 'agility,devious,strength',
            },
            {
                name: 'khorngor', keywords: 'homme-bête,coureur', quantity: 2, cost: 70000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['cornes', 'juggernaut', 'rétablissement', 'crâne épais'],
                primary: 'general,mutation,strength', secondary: 'agility,devious,passing',
            },
            {
                name: 'rabatteur sanglant', keywords: 'humain,bloqueur', quantity: 4, cost: 105000,
                move: 5, strength: 4, agility: 4, passing: 6, armour: 10,
                skills: ['frénésie'],
                primary: 'general,mutation,strength', secondary: 'agility,devious',
            },
            {
                name: 'rejeton sanglant', keywords: 'rejeton,gros_bras', quantity: 1, cost: 160000,
                move: 5, strength: 5, agility: 4, passing: 6, armour: 9,
                skills: ['griffes', 'frénésie', 'solitaire (4+)', 'châtaigne', 'fureur débridée'],
                primary: 'mutation,strength', secondary: 'agility,general',
            },
        ],
    },
    'hommes-lézards': {
        reroll_cost: 70000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart skink', keywords: 'homme-lézard,trois-quart', quantity: 16, cost: 60000,
                move: 8, strength: 2, agility: 3, passing: 4, armour: 8,
                skills: ['esquive', 'minus'],
                primary: 'agility', secondary: 'general,devious,passing,strength',
            },
            {
                name: 'skink caméléon', keywords: 'homme-lézard,lanceur', quantity: 2, cost: 70000,
                move: 7, strength: 2, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'sur le ballon', 'poursuite', 'minus'],
                primary: 'agility,passing', secondary: 'general,devious,strength',
            },
            {
                name: 'bloqueur saurus', keywords: 'homme-lézard', quantity: 6, cost: 90000,
                move: 6, strength: 4, agility: 5, passing: 6, armour: 10,
                skills: ['juggernaut', 'instable'],
                primary: 'general,strength', secondary: 'agility',
            },
            {
                name: 'kroxigor', keywords: 'homme-lézard,gros_bras', quantity: 1, cost: 140000,
                move: 6, strength: 5, agility: 5, passing: 6, armour: 10,
                skills: ['cerveau lent', 'solitaire (4+)', 'châtaigne', 'queue préhensible', 'crâne épais'],
                primary: 'strength', secondary: 'agility,general',
            },
        ],
    },
    'horreurs nécromantiques': {
        reroll_cost: 70000,
        apothecary: false,
        players: [
            {
                name: 'trois-quart zombie', keywords: 'humain,trois-quart,mort-vivant,zombie', quantity: 16, cost: 40000,
                move: 4, strength: 3, agility: 4, passing: 6, armour: 9,
                skills: ['fourchette', 'régénération', 'instable'],
                primary: 'devious,general', secondary: 'agility,strength',
            },
            {
                name: 'coureur goule', keywords: 'goule,coureur,mort-vivant', quantity: 2, cost: 75000,
                move: 7, strength: 3, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'régénération'],
                primary: 'agility,general', secondary: 'devious,passing,strength',
            },
            {
                name: 'spectre', keywords: 'spectre,bloqueur,mort-vivant', quantity: 2, cost: 85000,
                move: 6, strength: 3, agility: 3, passing: 0, armour: 9,
                skills: ['blocage', 'répulsion', 'sans ballon', 'glissade contrôlée', 'régénération'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'golem de chair', keywords: 'amalgame,bloqueur,mort-vivant', quantity: 2, cost: 110000,
                move: 4, strength: 4, agility: 4, passing: 6, armour: 10,
                skills: ['régénération', 'stabilité', 'crâne épais', 'instable'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'loup-garou', keywords: 'loup-garou,blitzer,mort-vivant', quantity: 2, cost: 120000,
                move: 8, strength: 3, agility: 3, passing: 3, armour: 9,
                skills: ['griffes', 'frénésie', 'régénération'],
                primary: 'agility,general', secondary: 'devious,passing,strength',
            },
        ],
    },
    'nordiques': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'pillard nordique', keywords: 'humain,trois-quart', quantity: 16, cost: 50000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: ['blocage', 'ivrogne', 'crâne épais', 'instable'],
                primary: 'general', secondary: 'agility,passing,strength',
            },
            {
                name: 'sanglier de secours', keywords: 'animal,spécial', quantity: 2, cost: 20000,
                move: 5, strength: 1, agility: 3, passing: 0, armour: 6,
                skills: ['esquive', 'sans ballon', 'petit remontant', 'minus', 'microbe'],
                primary: '', secondary: 'agility',
            },
            {
                name: 'berserker nordique', keywords: 'humain,blitzer', quantity: 2, cost: 90000,
                move: 6, strength: 3, agility: 3, passing: 5, armour: 8,
                skills: ['blocage', 'frénésie', 'rétablissement'],
                primary: 'general,strength', secondary: 'agility,passing',
            },
            {
                name: 'valkyrie', keywords: 'humain,receveur,lanceur', quantity: 2, cost: 95000,
                move: 7, strength: 3, agility: 3, passing: 3, armour: 8,
                skills: ['réception', 'intrépide', 'passe', 'arracher le ballon'],
                primary: 'agility,general,passing', secondary: 'strength',
            },
            {
                name: 'ulfwerener', keywords: 'humain,bloqueur', quantity: 2, cost: 105000,
                move: 6, strength: 4, agility: 4, passing: 6, armour: 9,
                skills: ['frénésie', 'instable'],
                primary: 'general,strength', secondary: 'agility',
            },
            {
                name: 'yéti', keywords: 'yéti,gros_bras', quantity: 1, cost: 140000,
                move: 5, strength: 5, agility: 4, passing: 6, armour: 9,
                skills: ['griffes', 'frénésie', 'présence perturbante', 'solitaire (4+)', 'fureur débridée'],
                primary: 'strength', secondary: 'agility,general',
            },
        ],
    },
    'nurgle': {
        reroll_cost: 60000,
        apothecary: false,
        players: [
            {
                name: 'trois-quart putrescent', keywords: 'humain,trois-quart', quantity: 16, cost: 40000,
                move: 5, strength: 3, agility: 4, passing: 6, armour: 9,
                skills: ['décomposition', 'contagieux'],
                primary: 'devious,general,mutation', secondary: 'agility,strength',
            },
            {
                name: 'pestigor', keywords: 'homme-bête,coureur', quantity: 2, cost: 70000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['cornes', 'contagieux', 'régénération', 'appuis sûrs', 'crâne épais'],
                primary: 'general,mutation,strength', secondary: 'agility,devious,passing',
            },
            {
                name: 'boursouflé', keywords: 'humain,bloqueur', quantity: 4, cost: 110000,
                move: 4, strength: 4, agility: 4, passing: 6, armour: 10,
                skills: ['présence perturbante', 'répulsion', 'contagieux', 'régénération', 'stabilité', 'instable'],
                primary: 'general,mutation,strength', secondary: 'agility,devious',
            },
            {
                name: 'rejeton putride', keywords: 'rejeton,gros_bras', quantity: 1, cost: 140000,
                move: 4, strength: 5, agility: 5, passing: 6, armour: 10,
                skills: [
                    'présence perturbante', 'répulsion', 'solitaire (4+)', 'châtaigne',
                    'contagieux', 'petit remontant', 'gros débile', 'régénération', 'tentacules',
                ],
                primary: 'strength', secondary: 'devious,general,mutation',
            },
        ],
    },
    'ogres': {
        reroll_cost: 70000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart gnoblar', keywords: 'gnoblar,trois-quart', quantity: 16, cost: 15000,
                move: 5, strength: 1, agility: 3, passing: 4, armour: 6,
                skills: ['esquive', 'poids plume', 'glissade contrôlée', 'minus', 'microbe'],
                primary: 'agility,devious', secondary: 'general',
            },
            {
                name: 'bloqueur ogre', keywords: 'ogre,bloqueur,gros_bras', quantity: 5, cost: 140000,
                move: 5, strength: 5, agility: 4, passing: 5, armour: 10,
                skills: ['cerveau lent', 'châtaigne', 'crâne épais', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,devious,general,passing',
            },
            {
                name: 'botte-nabot ogre', keywords: 'ogre,lanceur,gros_bras', quantity: 1, cost: 145000,
                move: 5, strength: 5, agility: 4, passing: 4, armour: 10,
                skills: ['cerveau lent', 'botter de coéquipier', 'châtaigne', 'crâne épais'],
                primary: 'passing,strength', secondary: 'agility,devious,general',
            },
        ],
    },
    'orques': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart orque', keywords: 'orque,trois-quart', quantity: 16, cost: 50000,
                move: 5, strength: 3, agility: 3, passing: 4, armour: 10,
                skills: [],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'trois-quart gobelin', keywords: 'gobelin,trois-quart', quantity: 4, cost: 40000,
                move: 6, strength: 2, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'poids plume', 'minus'],
                primary: 'agility,devious', secondary: 'general,passing,strength',
            },
            {
                name: 'lanceur orque', keywords: 'orque,lanceur', quantity: 2, cost: 75000,
                move: 6, strength: 3, agility: 3, passing: 3, armour: 9,
                skills: ['passe', 'prise sûre'],
                primary: 'general,passing', secondary: 'agility,devious,strength',
            },
            {
                name: 'blitzer orque', keywords: 'orque,blitzer', quantity: 2, cost: 85000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 10,
                skills: ['blocage', 'esquive en force'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'bloqueur kosto', keywords: 'orque,bloqueur', quantity: 2, cost: 95000,
                move: 5, strength: 4, agility: 4, passing: 6, armour: 10,
                skills: ['châtaigne', 'provocation', 'crâne épais', 'instable'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'troll', keywords: 'troll,gros_bras', quantity: 1, cost: 115000,
                move: 4, strength: 5, agility: 5, passing: 5, armour: 10,
                skills: ['toujours affamé', 'solitaire (4+)', 'châtaigne', 'gerbe de vomi', 'gros débile', 'régénération', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
    'morts ambulants': {
        reroll_cost: 70000,
        apothecary: false,
        players: [
            {
                name: 'trois-quart squelette', keywords: 'humain,mort-vivant,squelette,trois-quart', quantity: 16, cost: 40000,
                move: 5, strength: 3, agility: 4, passing: 6, armour: 8,
                skills: ['régénération', 'crâne épais'],
                primary: 'general', secondary: 'agility,devious,strength',
            },
            {
                name: 'trois-quart zombie', keywords: 'humain,mort-vivant,zombie,trois-quart', quantity: 16, cost: 40000,
                move: 4, strength: 3, agility: 4, passing: 6, armour: 9,
                skills: ['fourchette', 'régénération', 'instable'],
                primary: 'devious,general', secondary: 'agility,strength',
            },
            {
                name: 'coureur goule', keywords: 'goule,coureur,mort-vivant', quantity: 2, cost: 75000,
                move: 7, strength: 3, agility: 3, passing: 3, armour: 8,
                skills: ['esquive', 'régénération'],
                primary: 'agility,general', secondary: 'devious,passing,strength',
            },
            {
                name: 'blitzer revenant', keywords: 'humain,squelette,blitzer,mort-vivant', quantity: 2, cost: 95000,
                move: 6, strength: 3, agility: 3, passing: 5, armour: 9,
                skills: ['blocage', 'régénération', 'tacle', 'crâne épais'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'momie', keywords: 'humain,mort-vivant,bloqueur,gros_bras', quantity: 2, cost: 125000,
                move: 3, strength: 5, agility: 5, passing: 6, armour: 10,
                skills: ['châtaigne', 'régénération'],
                primary: 'strength', secondary: 'agility,general',
            },
        ],
    },
    'skavens': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'rat des clans skaven', keywords: 'skaven,trois-quart', quantity: 16, cost: 50000,
                move: 7, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: [],
                primary: 'devious,general', secondary: 'agility,mutation,strength',
            },
            {
                name: 'lanceur skaven', keywords: 'skaven,lanceur', quantity: 2, cost: 80000,
                move: 7, strength: 3, agility: 3, passing: 2, armour: 8,
                skills: ['passe', 'prise sûre'],
                primary: 'general,passing', secondary: 'agility,devious,mutation,strength',
            },
            {
                name: 'coureur d\'égouts', keywords: 'skaven,coureur', quantity: 2, cost: 85000,
                move: 9, strength: 2, agility: 2, passing: 4, armour: 8,
                skills: ['esquive', 'poignard'],
                primary: 'agility,devious,general', secondary: 'mutation,strength',
            },
            {
                name: 'blitzer skqven', keywords: 'skaven,blitzer', quantity: 2, cost: 90000,
                move: 8, strength: 3, agility: 3, passing: 4, armour: 9,
                skills: ['blocage', 'arracher le ballon'],
                primary: 'general,strength', secondary: 'agility,devious,mutation',
            },
            {
                name: 'rat-ogre', keywords: 'skaven,gros_bras', quantity: 1, cost: 150000,
                move: 6, strength: 5, agility: 4, passing: 6, armour: 9,
                skills: ['sauvagerie animale', 'frénésie', 'solitaire (4+)', 'châtaigne', 'queue préhensible'],
                primary: 'strength', secondary: 'agility,general,mutation',
            },
        ],
    },
    'snotlings': {
        reroll_cost: 70000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart snotling', keywords: 'snotling,trois-quart', quantity: 16, cost: 15000,
                move: 5, strength: 1, agility: 3, passing: 4, armour: 6,
                skills: ['esquive', 'insignifiant', 'poids plume', 'glissade contrôlée', 'minus', 'microbe'],
                primary: 'agility,devious', secondary: 'general',
            },
            {
                name: 'r\'bondisseur', keywords: 'snotlng,spécial', quantity: 2, cost: 20000,
                move: 6, strength: 1, agility: 3, passing: 4, armour: 6,
                skills: ['esquive', 'minus', 'monté sur ressort', 'poids plume', 'glissade contrôlée'],
                primary: 'agility,devious', secondary: 'general',
            },
            {
                name: 'échassier', keywords: 'snotling,coureur', quantity: 2, cost: 20000,
                move: 6, strength: 1, agility: 3, passing: 4, armour: 6,
                skills: ['esquive', 'poids plume', 'glissade contrôlée', 'sprint', 'minus'],
                primary: 'agility,devious', secondary: 'general',
            },
            {
                name: 'lance-champis', keywords: 'snotling,spécial', quantity: 2, cost: 30000,
                move: 5, strength: 1, agility: 3, passing: 4, armour: 6,
                skills: ['bombardier', 'poids plume', 'esquive', 'arme secrète', 'glissade contrôlée', 'minus', 'microbe'],
                primary: 'agility,devious,passing', secondary: 'general',
            },
            {
                name: 'chariot à pompe', keywords: 'snotling,gros_bras,spécial', quantity: 2, cost: 100000,
                move: 5, strength: 5, agility: 5, passing: 6, armour: 9,
                skills: ['joueur déloyal', 'juggernaut', 'châtaigne', 'gros débile', 'stabilité'],
                primary: 'devious,strength', secondary: 'agility,general',
            },
            {
                name: 'troll entraîné', keywords: 'troll,gros_bras', quantity: 1, cost: 115000,
                move: 4, strength: 5, agility: 5, passing: 5, armour: 10,
                skills: ['toujours affamé', 'châtaigne', 'gerbe de vomi', 'gros débile', 'régénération', 'lancer de coéquipier'],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
    'rois des tombes': {
        reroll_cost: 60000,
        apothecary: false,
        players: [
            {
                name: 'trois-quart squelette', keywords: 'humain,squelette,trois-quart,mort-vivant', quantity: 16, cost: 40000,
                move: 5, strength: 3, agility: 4, passing: 6, armour: 8,
                skills: ['régénération', 'crâne épais'],
                primary: 'general', secondary: 'agility,devious,strength',
            },
            {
                name: 'lanceur des rois des tombes', keywords: 'humain,squelette,lanceur,mort-vivant', quantity: 2, cost: 65000,
                move: 6, strength: 3, agility: 4, passing: 3, armour: 9,
                skills: ['passe', 'régénération', 'prise sûre', 'crâne épais'],
                primary: 'general,passing', secondary: 'agility,devious,strength',
            },
            {
                name: 'blitzer des rois des tombes', keywords: 'humain,squelette,blitzer,mort-vivant', quantity: 2, cost: 85000,
                move: 6, strength: 3, agility: 4, passing: 5, armour: 9,
                skills: ['blocage', 'régénération', 'crâne épais'],
                primary: 'general,strength', secondary: 'agility,devious',
            },
            {
                name: 'gardien des tombes', keywords: 'humain,gros_bras,bloqueur,mort-vivant', quantity: 4, cost: 115000,
                move: 4, strength: 5, agility: 5, passing: 6, armour: 10,
                skills: ['bagarreur', 'décomposition', 'régénération'],
                primary: 'strength', secondary: 'agility,general',
            },
        ],
    },
    'vampires': {
        reroll_cost: 60000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart sbire', keywords: 'humain,trois-quart,sbire', quantity: 16, cost: 40000,
                move: 6, strength: 3, agility: 3, passing: 4, armour: 8,
                skills: [],
                primary: 'general', secondary: 'agility,strength',
            },
            {
                name: 'coureur vampire', keywords: 'vampire,coureur,mort-vivant', quantity: 2, cost: 100000,
                move: 8, strength: 3, agility: 2, passing: 3, armour: 8,
                skills: ['soif de sang (2+)', 'regard hypnotique', 'régénération'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
            {
                name: 'lanceur vampire', keywords: 'vampire,lanceur,mort-vivant', quantity: 2, cost: 110000,
                move: 6, strength: 4, agility: 2, passing: 2, armour: 9,
                skills: ['soif de sang (2+)', 'regard hypnotique', 'passe', 'régénération'],
                primary: 'agility, general, passing', secondary: 'strength',
            },
            {
                name: 'blitzer vampire', keywords: 'vampir,blitzer,mort-vivant', quantity: 2, cost: 110000,
                move: 6, strength: 4, agility: 2, passing: 4, armour: 9,
                skills: ['soif de sang (3+)', 'regard hypnotique', 'juggernaut', 'régénération'],
                primary: 'agility,general,strength', secondary: '',
            },
            {
                name: 'vargheist', keywords: 'vampire,gros_bras,mort-vivant', quantity: 1, cost: 150000,
                move: 5, strength: 5, agility: 4, passing: 6, armour: 10,
                skills: ['soif de sang (3+)', 'griffes', 'frénésie', 'solitaire (4+)', 'régénération'],
                primary: 'strength', secondary: 'agility,general',
            },
        ],
    },
    'elfes sylvains': {
        reroll_cost: 50000,
        apothecary: true,
        players: [
            {
                name: 'trois-quart elfe sylvain', keywords: 'elfe,trois-quart', quantity: 16, cost: 65000,
                move: 7, strength: 3, agility: 2, passing: 3, armour: 8,
                skills: [],
                primary: 'agility,general', secondary: 'strength',
            },
            {
                name: 'lanceur elfe sylvain', keywords: 'elfe,lanceur', quantity: 2, cost: 85000,
                move: 7, strength: 3, agility: 2, passing: 2, armour: 8,
                skills: ['passe', 'libération contrôlée'],
                primary: 'agility,general,passing', secondary: 'strength',
            },
            {
                name: 'receveur elfe sylvain', keywords: 'elfe,receveur', quantity: 2, cost: 90000,
                move: 8, strength: 2, agility: 2, passing: 3, armour: 8,
                skills: ['réception', 'esquive', 'sprint'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
            {
                name: 'danseur de guerre', keywords: 'elfe,blitzer', quantity: 2, cost: 130000,
                move: 8, strength: 3, agility: 2, passing: 3, armour: 8,
                skills: ['blocage', 'esquive', 'saut'],
                primary: 'agility,general', secondary: 'passing,strength',
            },
            {
                name: 'homme-arbre de la loren', keywords: 'homme-arbre,gros_bras', quantity: 1, cost: 120000,
                move: 2, strength: 6, agility: 5, passing: 5, armour: 11,
                skills: [
                    'solitaire (4+)', 'châtaigne', 'stabilité', 'bras musclé',
                    'prendre racine', 'crâne épais', 'lancer de coéquipier',
                ],
                primary: 'strength', secondary: 'agility,general,passing',
            },
        ],
    },
};
