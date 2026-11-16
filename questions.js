/* ============================================================
   Histoire de France, le grand jeu : base de questions
   Pour ajouter une question, copie une ligne du même type
   et modifie-la. Les numéros d'époque vont de 1 à 6.
   Niveau : 1 = facile, 2 = moyen, 3 = difficile.

   Q(époque, niveau, question, BONNE réponse, faux1, faux2, faux3, explication)
   VF(époque, niveau, affirmation, true ou false, explication)
   MAP(époque, niveau, question, latitude, longitude, nom du lieu, explication)
   FR(époque, niveau, [[événement, année, texte de l'année], ...], explication)
   ============================================================ */

const ERAS = [
  { id: 1, nom: "Gaule et premiers rois", per: "Origines à 987", c: "#F59E0B", e: "🏛️" },
  { id: 2, nom: "Moyen Âge", per: "987 à 1453", c: "#3B82F6", e: "🏰" },
  { id: 3, nom: "Renaissance et Ancien Régime", per: "1453 à 1789", c: "#A855F7", e: "👑" },
  { id: 4, nom: "Révolution et Empire", per: "1789 à 1815", c: "#EF4444", e: "⚔️" },
  { id: 5, nom: "XIXe siècle", per: "1815 à 1914", c: "#10B981", e: "🚂" },
  { id: 6, nom: "XXe siècle et après", per: "1914 à nos jours", c: "#EC4899", e: "✈️" }
];

const Q = (era, lvl, q, good, b1, b2, b3, e) => ({ t: "qcm", era, lvl, q, o: [good, b1, b2, b3], e });
const VF = (era, lvl, q, a, e) => ({ t: "vf", era, lvl, q, a, e });
const MAP = (era, lvl, q, lat, lon, lieu, e) => ({ t: "map", era, lvl, q, lat, lon, lieu, e });
const FR = (era, lvl, items, e) => ({
  t: "frise", era, lvl,
  q: "Remets ces événements dans l'ordre, du plus ancien au plus récent.",
  items: items.map(([n, y, l]) => ({ n, y, l })), e
});

const QUESTIONS = [

/* ===================== ÉPOQUE 1 : Gaule et premiers rois ===================== */
Q(1,1,"Quel peuple vivait en Gaule avant l'arrivée des Romains ?","Les Gaulois","Les Vikings","Les Francs","Les Huns","Les Gaulois étaient des peuples celtes, répartis en de nombreuses tribus souvent rivales. Les Francs arrivent plus tard, après la fin de l'Empire romain."),
Q(1,1,"Quel chef gaulois affronte Jules César à Alésia ?","Vercingétorix","Brennus","Clovis","Charlemagne","Vercingétorix rassemble de nombreuses tribus contre César. Assiégé à Alésia, il se rend en 52 av. J.-C."),
Q(1,2,"En quelle année a lieu la bataille d'Alésia ?","52 av. J.-C.","121 av. J.-C.","27 av. J.-C.","70 ap. J.-C.","C'est la bataille décisive de la guerre des Gaules, que César mène à partir de 58 av. J.-C."),
Q(1,1,"Quel roi des Francs se fait baptiser à Reims vers 496 ?","Clovis","Pépin le Bref","Dagobert","Charlemagne","La date exacte est débattue, mais ce baptême rapproche les rois francs de l'Église catholique."),
Q(1,2,"Les peintures de la grotte de Lascaux ont environ...","17 000 ans","2 000 ans","5 000 ans","100 000 ans","La grotte, en Dordogne, a été découverte en 1940 par quatre adolescents. Elle abrite près de 600 peintures."),
Q(1,2,"Quelle ville était la capitale des Gaules sous les Romains ?","Lugdunum (Lyon)","Lutèce (Paris)","Massalia (Marseille)","Burdigala (Bordeaux)","Lugdunum, fondée en 43 av. J.-C., devient la capitale des Trois Gaules."),
Q(1,3,"Qui est le premier roi de la dynastie carolingienne ?","Pépin le Bref","Charles Martel","Clovis","Louis le Pieux","Pépin le Bref devient roi des Francs en 751, avec l'appui du pape. Son fils sera Charlemagne."),
Q(1,2,"En quelle année Charlemagne est-il couronné empereur à Rome ?","800","732","843","987","Le pape Léon III le couronne le jour de Noël de l'an 800."),
Q(1,2,"Quel traité de 843 partage l'empire carolingien entre trois petits-fils de Charlemagne ?","Le traité de Verdun","Le traité de Versailles","Le traité d'Utrecht","Le traité de Vienne","Charles le Chauve reçoit la partie occidentale, ancêtre du royaume de France."),
Q(1,2,"Qui s'installe en Normandie vers 911 après un accord avec le roi Charles le Simple ?","Des Vikings","Des Sarrasins","Des Huns","Des Wisigoths","Leur chef Rollon reçoit des terres autour de Rouen. Le mot « Normand » vient de « hommes du Nord »."),
Q(1,2,"Quelle ville a été fondée vers 600 av. J.-C. par des Grecs venus de Phocée ?","Marseille (Massalia)","Lyon","Bordeaux","Paris","Marseille est considérée comme la plus ancienne ville de France."),
Q(1,2,"Quelle dynastie succède aux Carolingiens en 987 ?","Les Capétiens","Les Mérovingiens","Les Valois","Les Bourbons","Hugues Capet est élu roi en 987. Ses descendants régneront pendant plus de huit siècles."),
Q(1,2,"Qui arrête une armée venue d'Espagne musulmane en 732 ?","Charles Martel","Charlemagne","Clovis","Pépin le Bref","Charles Martel, maire du palais, est le grand-père de Charlemagne."),

VF(1,1,"Les Vikings portaient des casques à cornes pour combattre.",false,"Faux. On n'a retrouvé aucun casque viking à cornes. Cette image vient surtout de costumes d'opéra du XIXe siècle."),
VF(1,1,"Lutèce est l'ancien nom de Paris.",true,"Vrai. Lutèce était la ville des Parisii, un peuple gaulois, qui ont donné son nom à Paris."),
VF(1,3,"La Vie de Charlemagne, écrite par Éginhard, a été rédigée après la mort de l'empereur.",true,"Vrai. Éginhard, un proche de Charlemagne, l'écrit une quinzaine d'années après sa mort en 814, en s'inspirant de l'auteur romain Suétone."),
VF(1,1,"Jules César a écrit lui-même le récit de la conquête de la Gaule.",true,"Vrai. La Guerre des Gaules est signée de César. C'est notre principale source écrite, mais c'est le point de vue du vainqueur."),
VF(1,2,"Clovis portait officiellement le titre de roi de France.",false,"Faux. Clovis est roi des Francs. Le titre de roi de France ne s'impose que progressivement, vers 1200."),
VF(1,1,"Les Romains ont construit le pont du Gard.",true,"Vrai. Cet aqueduc du Ier siècle amenait l'eau jusqu'à la ville de Nîmes."),

MAP(1,2,"Où se déroule le siège d'Alésia, en 52 av. J.-C. ?",47.54,4.50,"Alésia (Alise-Sainte-Reine)","Le site est sur le mont Auxois, en Bourgogne. Les fouilles y ont retrouvé des traces des fortifications décrites par César."),
MAP(1,3,"Où se trouve la grotte de Lascaux, célèbre pour ses peintures préhistoriques ?",45.05,1.17,"Lascaux (Montignac)","Lascaux est en Dordogne, près de Montignac. La grotte originale est fermée au public depuis 1963 pour protéger les peintures."),
MAP(1,2,"En 732, Charles Martel arrête une armée omeyyade dans le Poitou. Près de quelle ville ?",46.58,0.34,"Poitiers","On parle de bataille de Poitiers ou de Tours-Poitiers, car le lieu exact, entre les deux villes, reste discuté."),

FR(1,2,[["Défaite de Vercingétorix à Alésia",-52,"52 av. J.-C."],["Baptême de Clovis",496,"vers 496"],["Bataille de Poitiers",732,"732"],["Couronnement de Charlemagne",800,"800"]],"Plus de huit siècles séparent la fin de l'indépendance gauloise de l'empire de Charlemagne."),
FR(1,3,[["Fondation de Marseille",-600,"vers 600 av. J.-C."],["Début de la guerre des Gaules",-58,"58 av. J.-C."],["Édit de Caracalla",212,"212"],["Chute de l'Empire romain d'Occident",476,"476"]],"L'édit de Caracalla accorde la citoyenneté romaine à presque tous les hommes libres de l'Empire."),
FR(1,3,[["Traité de Verdun",843,"843"],["Siège de Paris par les Vikings",885,"885-886"],["Rollon reçoit la Normandie",911,"911"],["Hugues Capet devient roi",987,"987"]],"Entre le partage de l'empire carolingien et l'arrivée des Capétiens, le royaume subit les raids vikings."),

/* ===================== ÉPOQUE 2 : Moyen Âge ===================== */
Q(2,3,"Quelle abbaye de Bourgogne, fondée en 910, devient le centre d'un très grand ordre monastique ?","Cluny","Cîteaux","Vézelay","Fontevraud","Au XIe siècle, l'ordre de Cluny rayonne dans toute l'Europe chrétienne. Cîteaux, fondée en 1098, est une autre grande abbaye bourguignonne."),
Q(2,1,"Qui conquiert l'Angleterre en 1066 ?","Guillaume, duc de Normandie","Philippe Auguste","Saint Louis","Hugues Capet","Après sa victoire à Hastings, Guillaume devient roi d'Angleterre. Les liens entre Normandie et Angleterre durent ensuite des siècles."),
Q(2,2,"Quelle célèbre broderie raconte la conquête de 1066 ?","La tapisserie de Bayeux","La Dame à la licorne","La tenture de l'Apocalypse","Les Gobelins","La tapisserie de Bayeux mesure près de 70 mètres de long. C'est en réalité une broderie."),
Q(2,3,"Quel pape appelle à la première croisade, à Clermont, en 1095 ?","Urbain II","Léon III","Grégoire VII","Jean XXII","Urbain II, un Français, lance l'appel. Les croisés partent en 1096 et prennent Jérusalem en 1099."),
Q(2,1,"Quel roi de France a été canonisé après avoir mené deux croisades ?","Louis IX (Saint Louis)","Philippe IV le Bel","Louis XI","Charles V","Louis IX part en 1248 puis en 1270. Il meurt de maladie à Tunis en 1270 et sera canonisé en 1297."),
Q(2,2,"Quelle bataille de 1214 renforce l'autorité de Philippe Auguste ?","Bouvines","Crécy","Azincourt","Poitiers","Philippe Auguste y bat une coalition réunissant l'empereur germanique, le roi d'Angleterre et le comte de Flandre."),
Q(2,1,"Combien de temps dure environ la guerre de Cent Ans ?","116 ans","100 ans exactement","60 ans","200 ans","Elle va de 1337 à 1453, avec de longues pauses. Son nom a été donné bien plus tard."),
Q(2,1,"Que réussit Jeanne d'Arc en 1429 ?","Faire lever le siège d'Orléans","Reprendre Paris","Gagner à Azincourt","Signer la paix avec l'Angleterre","Elle libère Orléans le 8 mai 1429, puis conduit Charles VII au sacre, à Reims, en juillet."),
Q(2,2,"Dans quelle ville Jeanne d'Arc est-elle brûlée en 1431 ?","Rouen","Orléans","Reims","Paris","Condamnée par un tribunal d'Église favorable à ses ennemis, elle est brûlée le 30 mai 1431. Elle avait environ 19 ans."),
Q(2,1,"Quelle épidémie ravage la France à partir de 1348 ?","La peste noire","Le choléra","La grippe espagnole","La variole","Selon les estimations, elle tue au moins un tiers des Européens."),
Q(2,2,"Quel roi fait arrêter les Templiers en 1307 ?","Philippe IV le Bel","Louis IX","Charles V","Philippe VI","L'arrestation a lieu le vendredi 13 octobre 1307. Le roi voulait notamment mettre la main sur les richesses de l'ordre."),
Q(2,2,"Dans quelle ville les papes s'installent-ils de 1309 à 1377 ?","Avignon","Lyon","Marseille","Rome","Pendant près de 70 ans, les papes résident à Avignon. Le palais des Papes est l'un des plus grands palais gothiques d'Europe."),
Q(2,1,"Quelle cathédrale gothique est commencée en 1163 sur l'île de la Cité ?","Notre-Dame de Paris","Chartres","Reims","Amiens","Sa construction dure près de deux siècles. Après l'incendie de 2019, elle a été restaurée et rouverte en décembre 2024."),

VF(2,1,"Le Moyen Âge dure environ mille ans.",true,"Vrai. On le situe en général entre 476, fin de l'Empire romain d'Occident, et 1453 ou 1492 selon les manuels."),
VF(2,2,"Au Moyen Âge, les savants pensaient que la Terre était plate.",false,"Faux. Les savants médiévaux savaient que la Terre est ronde. L'idée d'une Terre plate est un mythe répandu surtout au XIXe siècle."),
VF(2,2,"Saint Louis rendait la justice sous un chêne, à Vincennes.",true,"Vrai, selon son ami Joinville qui raconte la scène. Cette image du roi juste est restée célèbre."),
VF(2,1,"La guerre de Cent Ans a opposé la France à l'Espagne.",false,"Faux. Elle oppose les rois de France et d'Angleterre, qui se disputent la couronne de France."),
VF(2,3,"Jeanne d'Arc a été réhabilitée environ 25 ans après sa condamnation.",true,"Vrai. Le procès en nullité de 1456 annule la condamnation de 1431. Elle sera canonisée en 1920."),
VF(2,2,"Les premiers châteaux forts étaient construits en pierre.",false,"Faux. Les premiers étaient en bois, sur une butte de terre appelée motte castrale. La pierre s'impose ensuite, surtout aux XIIe et XIIIe siècles."),

MAP(2,2,"Où Jeanne d'Arc libère-t-elle une ville assiégée en 1429 ?",47.90,1.91,"Orléans","Orléans est sur la Loire. Les Anglais lèvent le siège le 8 mai 1429."),
MAP(2,3,"Où Philippe Auguste remporte-t-il la bataille de 1214 contre l'empereur et le roi d'Angleterre ?",50.58,3.21,"Bouvines","Bouvines est dans le Nord, près de Lille. La victoire est souvent vue comme un des premiers grands moments de l'histoire nationale."),
MAP(2,2,"Dans quelle ville du Sud-Est les papes résident-ils de 1309 à 1377 ?",43.95,4.81,"Avignon","Avignon est sur le Rhône. La ville a appartenu aux papes jusqu'en 1791."),

FR(2,1,[["Bataille de Hastings",1066,"1066"],["Appel à la première croisade",1095,"1095"],["Victoire de Bouvines",1214,"1214"],["Arrestation des Templiers",1307,"1307"]],"Du Xe au XIVe siècle, les rois capétiens renforcent peu à peu leur pouvoir."),
FR(2,2,[["Début de la guerre de Cent Ans",1337,"1337"],["Arrivée de la peste noire",1348,"1348"],["Défaite d'Azincourt",1415,"1415"],["Fin de la guerre de Cent Ans (Castillon)",1453,"1453"]],"La peste, la guerre et les défaites marquent profondément le XIVe et le début du XVe siècle."),
FR(2,3,[["Début de la construction de Notre-Dame",1163,"1163"],["Philippe Auguste devient roi",1180,"1180"],["Louis IX devient roi",1226,"1226"],["Les papes s'installent à Avignon",1309,"1309"]],"Louis IX n'a que 12 ans à son avènement : sa mère, Blanche de Castille, assure la régence."),

/* ===================== ÉPOQUE 3 : Renaissance et Ancien Régime ===================== */
Q(3,1,"Quel roi bat les Suisses à Marignan en 1515 ?","François Ier","Henri IV","Louis XIII","Charles VIII","Cette victoire, au début de son règne, lui donne un grand prestige. Marignan se trouve en Italie."),
Q(3,2,"Où Léonard de Vinci meurt-il en 1519 ?","À Amboise, en France","À Florence","À Rome","À Milan","Invité par François Ier, il passe ses dernières années au Clos Lucé, près du château d'Amboise."),
Q(3,2,"Quel texte de 1539 impose le français dans les actes officiels ?","L'ordonnance de Villers-Cotterêts","L'édit de Nantes","Le concordat de Bologne","Le serment de Strasbourg","Elle remplace le latin par le français dans la justice et l'administration. Elle impose aussi aux curés de tenir des registres de baptême."),
Q(3,1,"Quel roi signe l'édit de Nantes en 1598 ?","Henri IV","Louis XIII","Henri III","Louis XIV","L'édit accorde aux protestants la liberté de conscience et certains droits de culte, après les guerres de Religion."),
Q(3,2,"En quelle année Henri IV est-il assassiné par Ravaillac ?","1610","1589","1643","1715","Il est poignardé dans sa voiture, rue de la Ferronnerie, à Paris, le 14 mai 1610."),
Q(3,1,"Quel roi est surnommé le Roi-Soleil ?","Louis XIV","Louis XIII","Louis XV","Louis XVI","Louis XIV a choisi le soleil comme emblème. Il règne personnellement de 1661 à 1715."),
Q(3,2,"Combien de temps dure le règne de Louis XIV ?","72 ans","42 ans","54 ans","90 ans","De 1643 à 1715 : c'est l'un des plus longs règnes d'Europe. Il devient roi à 4 ans."),
Q(3,2,"Quel ministre de Louis XIV développe les manufactures et la marine ?","Colbert","Richelieu","Mazarin","Sully","Jean-Baptiste Colbert soutient des manufactures, comme celle des Gobelins, pour enrichir le royaume."),
Q(3,3,"En quelle année la cour s'installe-t-elle officiellement à Versailles ?","1682","1661","1715","1789","Louis XIV y installe le gouvernement et la cour. Le château reste la résidence royale jusqu'en 1789."),
Q(3,2,"Quel événement de 1685 pousse de nombreux protestants à quitter le royaume ?","La révocation de l'édit de Nantes","La Fronde","La Saint-Barthélemy","La peste de Marseille","Louis XIV interdit le culte protestant. Plus de 150 000 protestants s'exilent, selon les estimations."),
Q(3,1,"Quel mouvement du XVIIIe siècle défend la raison, la liberté et la tolérance ?","Les Lumières","Le romantisme","Le classicisme","Le réalisme","Voltaire, Rousseau et Montesquieu comptent parmi les grands auteurs des Lumières."),
Q(3,2,"Qui dirige l'Encyclopédie, avec d'Alembert ?","Diderot","Voltaire","Montesquieu","Rousseau","L'Encyclopédie, publiée à partir de 1751, veut rassembler tous les savoirs de l'époque."),
Q(3,3,"Quelle guerre se termine en 1763 par la perte du Canada français ?","La guerre de Sept Ans","La guerre de Trente Ans","La guerre de Cent Ans","La guerre de Succession d'Espagne","Par le traité de Paris, la France cède le Canada à l'Angleterre. Elle garde quelques îles, comme Saint-Pierre-et-Miquelon."),

VF(3,3,"Louis XIV a réellement dit « L'État, c'est moi » devant le Parlement.",false,"Faux, ou du moins très douteux. On n'a pas de preuve fiable de cette phrase, sans doute inventée après coup."),
VF(3,2,"La Saint-Barthélemy est un massacre de protestants qui a lieu en 1572.",true,"Vrai. Il commence à Paris dans la nuit du 23 au 24 août 1572 et se prolonge en province."),
VF(3,1,"Louis XIV a fait de Versailles la résidence de la cour.",true,"Vrai. Le château, agrandi à partir de 1661, est un symbole du pouvoir du roi."),
VF(3,3,"Au XVIIe siècle, tous les Français parlaient le français.",false,"Faux. La plupart des habitants parlaient des langues régionales : breton, occitan, alsacien, basque, picard... Le français ne devient la langue de tous que bien plus tard."),
VF(3,2,"Louis XIV est devenu roi avant l'âge de cinq ans.",true,"Vrai. Né en 1638, il devient roi en 1643. Sa mère, Anne d'Autriche, assure la régence avec Mazarin."),
VF(3,1,"Christophe Colomb a atteint l'Amérique en 1492 avec le soutien du roi de France.",false,"Faux. Colomb est soutenu par les souverains d'Espagne, Isabelle de Castille et Ferdinand d'Aragon."),

MAP(3,2,"Où François Ier fait-il construire un immense château à partir de 1519 ?",47.62,1.52,"Chambord","Chambord est dans le Loir-et-Cher, près de la Loire. C'est le plus grand château de la Loire."),
MAP(3,2,"Dans quelle ville de l'Ouest Henri IV signe-t-il l'édit de 1598 ?",47.22,-1.55,"Nantes","L'édit de Nantes met fin à plus de trente ans de guerres de Religion."),
MAP(3,1,"Où Louis XIV installe-t-il sa cour ?",48.80,2.13,"Versailles","Versailles est à une vingtaine de kilomètres à l'ouest de Paris."),

FR(3,1,[["Victoire de Marignan",1515,"1515"],["Édit de Nantes",1598,"1598"],["Début du règne personnel de Louis XIV",1661,"1661"],["Mort de Louis XIV",1715,"1715"]],"Du début de la Renaissance à la fin du Grand Siècle : le pouvoir du roi ne cesse de croître."),
FR(3,2,[["Ordonnance de Villers-Cotterêts",1539,"1539"],["Massacre de la Saint-Barthélemy",1572,"1572"],["Assassinat d'Henri IV",1610,"1610"],["Révocation de l'édit de Nantes",1685,"1685"]],"La question religieuse domine toute cette période : guerres, édit de tolérance, puis révocation."),
FR(3,3,[["Début de la Fronde",1648,"1648"],["La cour s'installe à Versailles",1682,"1682"],["Début de l'Encyclopédie",1751,"1751"],["Traité de Paris, fin de la guerre de Sept Ans",1763,"1763"]],"On dit souvent que la Fronde, révolte contre le pouvoir royal, a incité Louis XIV à garder la noblesse près de lui."),

/* ===================== ÉPOQUE 4 : Révolution et Empire ===================== */
Q(4,1,"Quand a lieu la prise de la Bastille ?","14 juillet 1789","4 août 1789","21 janvier 1793","9 novembre 1799","Les Parisiens prennent la forteresse-prison, symbole du pouvoir royal. Le 14 juillet devient fête nationale en 1880."),
Q(4,1,"Quel texte de 1789 affirme que les hommes naissent libres et égaux en droits ?","La Déclaration des droits de l'homme et du citoyen","Le Code civil","La Charte de 1814","L'édit de Nantes","Elle est adoptée le 26 août 1789. Elle inspire encore le préambule de la Constitution actuelle."),
Q(4,1,"Quel roi est guillotiné le 21 janvier 1793 ?","Louis XVI","Louis XV","Charles X","Louis XVIII","Condamné pour trahison par la Convention, il est exécuté place de la Révolution, aujourd'hui place de la Concorde."),
Q(4,2,"Quelle bataille de 1792 arrête l'armée prussienne et sauve la jeune Révolution ?","Valmy","Austerlitz","Waterloo","Marignan","Après la victoire de Valmy, le 20 septembre 1792, la Convention abolit la monarchie dès le lendemain."),
Q(4,2,"Quel révolutionnaire est surnommé « l'Incorruptible » ?","Robespierre","Danton","Marat","La Fayette","Maximilien de Robespierre domine le Comité de salut public pendant la Terreur. Il est guillotiné en juillet 1794."),
Q(4,1,"Quel instrument devient le symbole des exécutions pendant la Révolution ?","La guillotine","Le bûcher","La potence","Le pilori","Proposée pour une mort plus égale et plus rapide, elle est utilisée pour la première fois en 1792."),
Q(4,2,"Que se passe-t-il le 18 brumaire an VIII (9 novembre 1799) ?","Bonaparte prend le pouvoir par un coup d'État","Napoléon devient empereur","La monarchie est abolie","Louis XVI s'enfuit","Bonaparte met fin au Directoire et devient Premier consul. Il a alors 30 ans."),
Q(4,1,"En quelle année Napoléon est-il sacré empereur à Notre-Dame ?","1804","1789","1815","1799","Il se couronne lui-même devant le pape Pie VII, venu à Paris. Il couronne aussi Joséphine."),
Q(4,2,"Quel grand recueil de lois de 1804 organise le droit civil et existe encore en partie aujourd'hui ?","Le Code civil","Le Code noir","Le Code de la route","La Constitution","Il garantit l'égalité devant la loi, mais maintient la femme mariée dans une situation inférieure. On l'appelle aussi Code Napoléon."),
Q(4,1,"Quelle victoire de 1805, contre les Russes et les Autrichiens, est la plus célèbre de Napoléon ?","Austerlitz","Waterloo","Trafalgar","Leipzig","Austerlitz a lieu le 2 décembre 1805. La même année, la flotte française est battue à Trafalgar."),
Q(4,2,"Quelle campagne de 1812 détruit presque toute la Grande Armée ?","La campagne de Russie","La campagne d'Égypte","La campagne d'Italie","La campagne d'Espagne","L'armée atteint Moscou, puis subit le froid et la faim pendant la retraite."),
Q(4,1,"Où Napoléon est-il définitivement vaincu en 1815 ?","À Waterloo","À Austerlitz","À Valmy","À Trafalgar","La bataille de Waterloo a lieu le 18 juin 1815, dans l'actuelle Belgique, contre les Britanniques et les Prussiens."),
Q(4,2,"Où Napoléon est-il exilé après Waterloo ?","À Sainte-Hélène","À l'île d'Elbe","En Corse","À Malte","Sainte-Hélène est une île isolée de l'Atlantique sud. Il y meurt en 1821. L'île d'Elbe avait été son premier exil, en 1814."),

VF(4,2,"Marie-Antoinette a dit « Qu'ils mangent de la brioche ».",false,"Faux. Cette phrase circule bien avant son arrivée en France. Rousseau l'attribue à « une grande princesse » dans un texte écrit alors que Marie-Antoinette était encore une enfant."),
VF(4,1,"La Révolution française met fin à la monarchie absolue.",true,"Vrai. En 1789, les privilèges sont abolis et une monarchie constitutionnelle s'installe, avant la proclamation de la République en 1792."),
VF(4,1,"Napoléon était particulièrement petit.",false,"Faux. Il mesurait environ 1,68 m, ce qui était dans la moyenne de l'époque. Le mythe vient en partie de la différence entre pouces français et anglais."),
VF(4,3,"La Marseillaise a d'abord été écrite comme chant de guerre pour l'armée du Rhin, à Strasbourg.",true,"Vrai. Rouget de Lisle la compose en 1792. Elle devient la Marseillaise car des volontaires de Marseille la chantent en montant à Paris."),
VF(4,1,"Le drapeau tricolore apparaît pendant la Révolution.",true,"Vrai. La cocarde bleu, blanc, rouge apparaît en 1789. Le drapeau tricolore est adopté en 1794."),
VF(4,2,"Napoléon est né en France continentale.",false,"Faux. Il naît à Ajaccio, en Corse, en 1769, un an après le rattachement de la Corse à la France."),

MAP(4,2,"Où l'armée révolutionnaire arrête-t-elle les Prussiens en septembre 1792 ?",49.08,4.77,"Valmy","Valmy est dans la Marne, en Champagne. La bataille est surtout un duel d'artillerie."),
MAP(4,1,"Où se trouvait la prison de la Bastille, prise le 14 juillet 1789 ?",48.853,2.369,"Paris, place de la Bastille","La forteresse a été démolie en quelques mois. Aujourd'hui, une colonne s'élève sur la place de la Bastille."),
MAP(4,2,"Dans quelle ville de Corse naît Napoléon en 1769 ?",41.92,8.74,"Ajaccio","Napoléon naît à Ajaccio le 15 août 1769."),

FR(4,1,[["Prise de la Bastille",1789,"1789"],["Exécution de Louis XVI",1793,"1793"],["Coup d'État du 18 brumaire",1799,"1799"],["Sacre de Napoléon",1804,"1804"]],"En quinze ans, la France passe de la monarchie à la République, puis à l'Empire."),
FR(4,2,[["Déclaration des droits de l'homme",1789,"1789"],["Proclamation de la République",1792,"1792"],["Création du Comité de salut public",1793,"1793"],["Chute de Robespierre",1794,"1794"]],"La République est proclamée dans un contexte de guerre contre l'Europe monarchique."),
FR(4,2,[["Victoire d'Austerlitz",1805,"1805"],["Campagne de Russie",1812,"1812"],["Bataille de Leipzig",1813,"1813"],["Bataille de Waterloo",1815,"1815"]],"Après le sommet de 1805, l'Empire recule à partir de 1812."),

/* ===================== ÉPOQUE 5 : XIXe siècle ===================== */
Q(5,2,"Quelle révolution de 1830, en trois jours, renverse Charles X ?","Les Trois Glorieuses","La Commune","Le Printemps des peuples","La Fronde","Les 27, 28 et 29 juillet 1830, les Parisiens se soulèvent contre des ordonnances qui limitent notamment la liberté de la presse."),
Q(5,2,"Qui devient roi des Français en 1830 ?","Louis-Philippe","Louis XVIII","Napoléon III","Charles X","On dit « roi des Français » et non « roi de France » : son pouvoir est présenté comme venant du peuple."),
Q(5,2,"Quel acte de 1848, appuyé par Victor Schœlcher, abolit l'esclavage dans les colonies françaises ?","Le décret du 27 avril 1848","L'édit de Nantes","Le Code noir","Les lois Jules Ferry","Une première abolition, en 1794, avait été annulée par Napoléon en 1802. Celle de 1848 est définitive."),
Q(5,1,"Quel empereur règne de 1852 à 1870 ?","Napoléon III","Napoléon Ier","Louis-Philippe","Charles X","Neveu de Napoléon Ier, il est d'abord élu président de la République en 1848, puis prend le pouvoir par un coup d'État en 1851."),
Q(5,2,"Quelle défaite de 1870 provoque la chute du Second Empire ?","Sedan","Valmy","Waterloo","Verdun","Napoléon III est fait prisonnier à Sedan par les Prussiens le 2 septembre 1870. Deux jours plus tard, la République est proclamée à Paris."),
Q(5,2,"Quelles régions la France perd-elle en 1871 après la guerre contre la Prusse ?","L'Alsace et une partie de la Lorraine","La Bretagne et la Normandie","La Savoie et Nice","La Corse et la Provence","Elles forment l'Alsace-Lorraine allemande. Elles reviennent à la France en 1918."),
Q(5,3,"Que fut la Commune de Paris, en 1871 ?","Un gouvernement insurrectionnel de Paris, écrasé en mai","Un congrès de paix avec la Prusse","Une grande fête nationale","Un parti politique du Second Empire","Les communards défendent une République sociale. L'armée les écrase pendant la « Semaine sanglante », fin mai 1871."),
Q(5,2,"Quel ministre rend l'école primaire gratuite, laïque et obligatoire dans les années 1880 ?","Jules Ferry","Victor Hugo","Léon Gambetta","Georges Clemenceau","Les lois de 1881 et 1882 posent les bases de l'école publique. L'instruction devient obligatoire de 6 à 13 ans."),
Q(5,1,"Pour quelle occasion la tour Eiffel est-elle construite en 1889 ?","L'Exposition universelle, pour le centenaire de la Révolution","Les Jeux olympiques","Le couronnement d'un roi","L'inauguration du métro","Elle devait être démontée après 20 ans. Son usage comme antenne radio l'a sauvée."),
Q(5,2,"Dans l'affaire Dreyfus, qui est Alfred Dreyfus ?","Un capitaine accusé à tort de trahison","Un général allemand","Un ministre de la Guerre","Un journaliste","Condamné en 1894 pour espionnage au profit de l'Allemagne, il est innocent. Il sera réhabilité en 1906."),
Q(5,2,"Quel écrivain publie « J'accuse » en 1898 pour défendre Dreyfus ?","Émile Zola","Victor Hugo","Gustave Flaubert","Alexandre Dumas","Sa lettre ouverte paraît dans le journal L'Aurore. Zola est condamné pour diffamation et s'exile un temps en Angleterre."),
Q(5,2,"Que décide la loi de 1905 ?","La séparation des Églises et de l'État","La journée de huit heures","Le droit de vote des femmes","L'école obligatoire","L'État ne reconnaît ni ne finance plus aucun culte et garantit la liberté de conscience. C'est un pilier de la laïcité."),
Q(5,2,"Quel savant met au point un vaccin contre la rage en 1885 ?","Louis Pasteur","Pierre Curie","Claude Bernard","Antoine Lavoisier","Pasteur l'essaie sur un jeune garçon, Joseph Meister, qui survit. La pasteurisation porte aussi son nom."),

VF(5,2,"Napoléon III est le neveu de Napoléon Ier.",true,"Vrai. Louis-Napoléon Bonaparte est le fils de Louis Bonaparte, frère de l'empereur."),
VF(5,3,"La première ligne de chemin de fer de voyageurs au départ de Paris a ouvert en 1837.",true,"Vrai. Elle relie Paris au Pecq, près de Saint-Germain-en-Laye, et ouvre au public le 26 août 1837."),
VF(5,1,"Les Françaises votent dès 1848.",false,"Faux. En 1848, le suffrage universel ne concerne que les hommes. Les Françaises votent pour la première fois en 1945."),
VF(5,2,"La tour Eiffel devait être démontée au bout de vingt ans.",true,"Vrai. Le permis courait jusqu'en 1909. Les expériences scientifiques et la radio l'ont sauvée."),
VF(5,2,"Victor Hugo a passé près de vingt ans en exil sous le Second Empire.",true,"Vrai. Opposé à Napoléon III, il vit en exil de 1851 à 1870, à Bruxelles d'abord, puis à Jersey et à Guernesey."),
VF(5,1,"La statue de la Liberté, à New York, a été offerte par la France.",true,"Vrai. Œuvre du sculpteur Bartholdi, elle est inaugurée en 1886. Gustave Eiffel a conçu sa structure interne."),

MAP(5,2,"Où Napoléon III est-il fait prisonnier en 1870 ?",49.70,4.94,"Sedan","Sedan est dans les Ardennes, près de la frontière belge."),
MAP(5,3,"Quelle grande ville de Lorraine est annexée par l'Allemagne en 1871 ?",49.12,6.18,"Metz","Metz, en Moselle, est annexée avec l'Alsace et une partie de la Lorraine par le traité de Francfort."),
MAP(5,3,"Dans quelle ville les ouvriers de la soie, les canuts, se révoltent-ils en 1831 puis en 1834 ?",45.76,4.84,"Lyon","Les canuts réclament de meilleurs salaires. Leurs révoltes comptent parmi les premières grandes révoltes ouvrières."),

FR(5,2,[["Les Trois Glorieuses",1830,"1830"],["Abolition de l'esclavage",1848,"1848"],["Coup d'État de Louis-Napoléon Bonaparte",1851,"1851"],["Guerre franco-prussienne",1870,"1870"]],"Du roi Charles X à Napoléon III puis à la défaite de 1870 : le siècle est agité."),
FR(5,2,[["Commune de Paris",1871,"1871"],["Lois scolaires de Jules Ferry",1881,"1881"],["Inauguration de la tour Eiffel",1889,"1889"],["« J'accuse » de Zola",1898,"1898"]],"La IIIe République s'installe, avec l'école pour tous, les grandes expositions et l'affaire Dreyfus."),
FR(5,3,[["Prise d'Alger",1830,"1830"],["Suffrage universel masculin",1848,"1848"],["Proclamation de la IIIe République",1870,"1870"],["Séparation des Églises et de l'État",1905,"1905"]],"La conquête de l'Algérie commence en 1830. Elle durera jusqu'à l'indépendance, en 1962."),

/* ===================== ÉPOQUE 6 : XXe siècle et après ===================== */
Q(6,1,"En quelle année commence la Première Guerre mondiale ?","1914","1905","1918","1939","Elle débute en août 1914 et dure plus de quatre ans."),
Q(6,1,"Quelle bataille de 1916, longue de dix mois, symbolise la Grande Guerre pour les Français ?","Verdun","Valmy","Bouvines","Marignan","Verdun fait environ 300 000 morts et disparus dans les deux camps."),
Q(6,3,"Où l'armistice du 11 novembre 1918 est-il signé ?","À Rethondes, en forêt de Compiègne","À Versailles","À Verdun","À Sedan","Il est signé dans un wagon de train. En 1940, Hitler impose l'armistice à la France dans le même lieu."),
Q(6,2,"Quel traité de 1919 conclut la guerre avec l'Allemagne ?","Le traité de Versailles","Le traité de Verdun","Le traité de Rome","Le traité de Paris","Il est signé dans la galerie des Glaces, là où l'empire allemand avait été proclamé en 1871."),
Q(6,2,"Quelle grande mesure sociale est adoptée en 1936 sous le Front populaire ?","Les congés payés","Le droit de vote des femmes","La retraite à 60 ans","La Sécurité sociale","Deux semaines de congés payés, sous le gouvernement de Léon Blum. Beaucoup d'ouvriers découvrent alors les vacances."),
Q(6,1,"Que fait de Gaulle le 18 juin 1940 ?","Il appelle depuis Londres à continuer le combat","Il signe l'armistice","Il libère Paris","Il devient président","Son appel est diffusé sur la BBC. Peu de Français l'entendent ce jour-là, mais il deviendra un symbole de la Résistance."),
Q(6,1,"Qui dirige le régime de Vichy à partir de 1940 ?","Philippe Pétain","Charles de Gaulle","Léon Blum","Paul Reynaud","Le maréchal Pétain obtient les pleins pouvoirs en juillet 1940. Son régime collabore avec l'Allemagne nazie."),
Q(6,1,"Quand a lieu le débarquement de Normandie ?","6 juin 1944","11 novembre 1918","8 mai 1945","14 juillet 1789","Plus de 150 000 soldats alliés débarquent sur cinq plages le jour J."),
Q(6,2,"Quand Paris est-il libéré de l'occupation allemande ?","25 août 1944","6 juin 1944","8 mai 1945","11 novembre 1918","Le général de Gaulle descend les Champs-Élysées le lendemain, 26 août."),
Q(6,2,"Quelle date marque la capitulation de l'Allemagne nazie en Europe ?","8 mai 1945","6 juin 1944","11 novembre 1918","2 septembre 1945","Le 8 mai est un jour férié en France. Le Japon capitule en septembre 1945, ce qui met fin à la guerre mondiale."),
Q(6,2,"Quel traité de 1957 crée la Communauté économique européenne ?","Le traité de Rome","Le traité de Maastricht","Le traité de Versailles","Le traité de Lisbonne","La France est l'un des six pays fondateurs, avec l'Allemagne de l'Ouest, l'Italie, la Belgique, les Pays-Bas et le Luxembourg."),
Q(6,1,"Quel général fonde la Ve République en 1958 ?","Charles de Gaulle","Georges Pompidou","Philippe Pétain","François Mitterrand","La Constitution de 1958 renforce le pouvoir du président. Elle est toujours en vigueur."),
Q(6,2,"En quelle année la peine de mort est-elle abolie en France ?","1981","1968","1958","2002","La loi est portée par le garde des Sceaux Robert Badinter, sous la présidence de François Mitterrand."),

VF(6,2,"Les Françaises ont voté pour la première fois en 1945.",true,"Vrai. Le droit de vote leur est accordé par une ordonnance d'avril 1944. Elles votent aux élections municipales d'avril 1945."),
VF(6,3,"Le tunnel sous la Manche a été inauguré en 1994.",true,"Vrai. Il relie la France et le Royaume-Uni. Il est inauguré en mai 1994 et les trains Eurostar y circulent à la fin de l'année."),
VF(6,1,"La France a gagné la Coupe du monde de football en 1998.",true,"Vrai. Elle bat le Brésil 3 à 0 en finale, au Stade de France. Elle gagne de nouveau en 2018."),
VF(6,1,"L'euro a remplacé le franc en pièces et en billets en 2002.",true,"Vrai. Le passage a lieu le 1er janvier 2002. L'euro existait déjà comme monnaie de compte depuis 1999."),
VF(6,2,"Mai 68 commence par un mouvement étudiant, à l'université de Nanterre.",true,"Vrai. Le mouvement s'étend ensuite à Paris puis à tout le pays, avec une grève générale de plusieurs millions de travailleurs."),
VF(6,3,"Le président de la République est élu au suffrage universel direct depuis un référendum de 1962.",true,"Vrai. La première élection selon ce système a lieu en 1965. De Gaulle est réélu au second tour face à François Mitterrand."),

MAP(6,1,"Où se déroule la bataille de Verdun, en 1916 ?",49.16,5.38,"Verdun","Verdun est dans la Meuse, en Lorraine. Plusieurs villages détruits autour de la ville n'ont jamais été reconstruits."),
MAP(6,2,"Où les Alliés installent-ils un port artificiel après le Débarquement du 6 juin 1944 ?",49.34,-0.62,"Arromanches","Ce port, nommé Mulberry, permet de faire passer troupes et matériel. Ses vestiges sont encore visibles à marée basse."),
MAP(6,2,"Quelle ville d'Auvergne est la capitale du régime de Pétain, de 1940 à 1944 ?",46.13,3.43,"Vichy","Vichy est une ville thermale de l'Allier. Elle donne son nom au régime."),

FR(6,1,[["Début de la Première Guerre mondiale",1914,"1914"],["Armistice du 11 novembre",1918,"1918"],["Appel du 18 juin",1940,"1940"],["Libération de Paris",1944,"1944"]],"Deux guerres mondiales, à peine vingt ans d'écart entre les deux armistices."),
FR(6,2,[["Droit de vote des femmes",1944,"1944"],["Traité de Rome",1957,"1957"],["Mai 68",1968,"1968"],["Élection de François Mitterrand",1981,"1981"]],"Cette période voit l'Europe se construire et la société française changer profondément."),
FR(6,2,[["Front populaire",1936,"1936"],["Naissance de la Ve République",1958,"1958"],["Abolition de la peine de mort",1981,"1981"],["Passage à l'euro en pièces et billets",2002,"2002"]],"Des congés payés à l'euro : la France se transforme tout au long du XXe siècle.")

];
