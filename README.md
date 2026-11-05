# Test de pràctica - Tema 2: Introducció a la núvol pública

Web interactiva per practicar la teoria del **Tema 2 (U2)** del mòdul opcional de DAW "Introducció a la núvol pública".

## Temes inclosos

- Infraestructura global d'AWS: Regions i Zones de Disponibilitat (AZs)
- Model de responsabilitat compartida (AWS vs client)
- IAM: usuaris, grups, rols, polítiques i principi de mínim privilegi
- Introducció a Amazon EC2: AMI, tipus d'instància, Key Pairs, EBS, VPC
- Security Groups (SG): stateful, només regles ALLOW, nivell d'instància
- Network ACLs (NACL): stateless, ALLOW i DENY, nivell de subnet, ordre de regles
- Comparació SG vs NACL i funcionament conjunt

## Característiques

- **118 preguntes** tipus test basades en la teoria del Tema 2
- **Selecció de temes**: tries quins temes vols practicar
- **Bilingüe valencià/castellà** amb selector d'idioma (es recorda)
- **Temporitzador configurable**: sense límit, 10, 15, 20, 30 o 45 minuts
- **Mode clar i fosc** amb selector (es recorda)
- **Botó per tornar a l'inici** des del test, amb confirmació si ja hi ha respostes
- Preguntes barrejades aleatòriament
- Puntuació final i resultat desglossat per tema
- Revisió de totes les respostes amb explicacions
- Totalment funcional en el navegador (HTML/CSS/JS sense servidor)

## Desplegament

Es pot publicar amb **GitHub Pages**:

1. Puja aquest repositori a GitHub.
2. A la configuració del repositori, activa GitHub Pages des de la branca `main` (o `master`).
3. La web quedarà accessible a: `https://<usuari>.github.io/introduccion-a-la-nube-publica/`

## Fitxers

- `index.html` — Estructura de la web
- `css/style.css` — Estil (mode clar/fosc)
- `js/questions.js` — Base del banc de preguntes i constructor
- `js/data-global.js` — Preguntes d'infraestructura global
- `js/data-resp.js` — Preguntes del model de responsabilitat compartida
- `js/data-iam.js` — Preguntes d'IAM
- `js/data-ec2.js` — Preguntes d'EC2
- `js/data-sg.js` — Preguntes de Security Groups
- `js/data-nacl.js` — Preguntes de Network ACLs
- `js/data-net.js` — Preguntes de seguretat de xarxa (SG vs NACL)
- `js/app.js` — Lògica del test, temporitzador, idioma i tema
