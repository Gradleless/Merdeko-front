import { writable } from 'svelte/store';

let currentPage = writable('Home');
let game = writable('');
let previousPage = writable('');
let progress = writable(0); // delete this line bro I swear it's useless for u, just delete it. Delete. It. Now. I'm serious. 
// More seriously, it's just for the UI example
let page = writable(1); // same here, delete this line

export { currentPage, game, previousPage, progress, page, trollText };

let trollText = `
[Intro]
Yeah, yoh

[Couplet unique]
Les mecs m'ont dit : "Dems, faut qu'tu rentres, t'es pété"
J'leur ai dit : "Nan, j'suis pas pété, bah nan, j'ai juste bu quelques verres vite fait"
J'dois pisser, faut qu'j'trouve un coin discret, tout près d'ici, sinon, j'vais m'perdre, moi
En plus, j'ai fumé d'l'herbe, j'vais foutre la merde, ouais, j'suis comme ça, moi
Et puis, j'parlerai d'mon ex, puis, j'parlerai d'ses fesses, bref, il faut qu'j'arrête
Donc, j'dessaoule sur l'ch'min du r'tour, j'rencontre une pute de Roumanie
Cheveux courts, string, jupe courte, réclame un facial tsunami
Mais pour d'la money, donc c'est non, car j'en n'ai pas sinon, ç'serait oui
J'gratte pour une gâterie gratuite mais elle me dit "non"(arrête), sale pute que j'réponds, bah oui
Mais après ça, ça a dérapé, j'l'ai insulté, son mac est arrivé pour m'tabasser : un grand black baraqué, ch'veux dégradés
"Bam", deux-trois coups plus tard, du sang coule sur l'trottoir
Mais c'est pas l'mien ni c'lui d'la putain mais du black qu'a r'çu un pain qui s'plaint d'avoir un mal de chien
Pendant qu'l'autre chiale, d'ailleurs, pourquoi tu chiales ? T'as plus d'mac, donc j'vais t'l'enfoncer profond, jusqu'aux cordes vocales
Elle stresse, devient toute blanche comme ses fesses, à peur qu'j'l'agresse, en détresse
J'lui dis : "T'inquiète, viens dans l'bando, qu'j'te montre Django, en vrai"
Qu'on rigole un peu, toi et moi, qu'on s'bichonne un peu, toi et moi
Allez, viens par là, suce-moi pendant qu'j'siphonne une p'tite Corona
À peine que j'introduis : je cris, je jouis, "oh oui, oh oui, oh oui"
J'lui dis : "Prends dans ta gueule ton facial tsunami à Miami"
L'érection reprend, par derrière, je la prends, y a trop d'espace dedans
J'constate qu'elle a la chatte plus grasse, que l'ventre de B.I.G
Fait chier, j'suis dégoûté, donc j'sors d'son trou
La meuf dit : "Qu'est-ce tu fous ? J'suis pas assez bonne pour toi ?S't'eu plait, gars, viole-moi jusqu'au bout"
D'accord, si t'insistes, elle m'dit : "J'dirais pas non pour un fist, non plus"
J'lui dis : "Quel genre de pute que t'es ?" Elle m'dit : "Une qui baise avec son fils dans la rue"
What the fuck ? Putain d'bordel de merde
Elle me dit : "Si, si, ouais, ouais, Damso, j'suis ta mère
Et t'as pas changé d'un poil pubien, ça, c'est clair
J't'ai reconnu quand j'ai posé ta verge sur mes lèvres"
J'recule d'un pas puis, d'un autre, j'crois que j'deviens parano
Mon cœur se serre, de la tension, je perds, j'tomberai d'un moment à l'autre
J'me réveille sur un lit blanc, dans des draps blancs, les murs sont blancs, j'suis entouré d'blancs
Et un black habillé en blanc qui d'mande comment j'me sens

[Outro]
Monsieur Dems, vous m'entendez ? Si vous m'entendez, clignez deux fois des yeux.​
D'accord, je suis le docteur Leonard Da Vinci God.​
En quelques mots, vous avez été victime d'un transfert d'âme appelé expérience de walk-in.​
C'est en quelque sorte, une entente entre deux âmes.​
L'âme qui est dans le corps décide qu'elle ne peut plus continuer de vivre.​
Et au lieu de faire mourir son corps, une autre âme va continuer de vivre sa vie à sa place.​
Comme vous avez pu le constater, votre âme a été victime d'une tentative d'échange forcé, mais si le transfert total a échoué, c'est à cause d'une seule et unique chose.​
Le walk-out devait être capable de reproduire la chose qui vous caractérise le plus dans ce monde.​
Et je suis content de dire que votre flow, monsieur Dems, vous a sauvé la vie.​
Je vous garde encore une petite semaine afin d'effectuer quelques analyses en plus.​
Je vous ai prescrit en attendant la mixtape QALF de Damso et Jackpot du groupe OPG.​
Je vous revois dans quelques heures. Reposez-vous, et à tout à l'heure.​
Monsieur Dems, vous m'entendez ?
`
