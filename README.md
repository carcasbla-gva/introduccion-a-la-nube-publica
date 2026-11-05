# Tests de pràctica - Introducció a la núvol pública

Web interactiva per practicar la teoria del mòdul opcional de DAW "Introducció a la núvol pública". Primer tries la **unitat** (Tema 1 o Tema 2) i després els **temes** que vols practicar.

## Tema 1 · Introducció al núvol i a AWS (76 preguntes)

- Què és el núvol i el model on-premise
- Característiques del núvol (escalabilitat, elasticitat, alta disponibilitat, pagament per ús)
- Models de servei (IaaS, PaaS, SaaS) i la metàfora de la casa
- Models de desplegament (núvol públic, privat i híbrid)
- Introducció a AWS (història, serveis fonamentals: EC2, S3, IAM, RDS, Lambda)
- AWS Academy i Learner Lab (crèdit de 50 $, sessió de 4 h, regions, Stop Lab, Reset Lab)

## Tema 2 · Introducció a la núvol pública (118 preguntes)

- Infraestructura global d'AWS: Regions i Zones de Disponibilitat (AZs)
- Model de responsabilitat compartida (AWS vs client)
- IAM: usuaris, grups, rols, polítiques i principi de mínim privilegi
- Introducció a Amazon EC2: AMI, tipus d'instància, Key Pairs, EBS, VPC
- Security Groups (SG): stateful, només regles ALLOW, nivell d'instància
- Network ACLs (NACL): stateless, ALLOW i DENY, nivell de subnet, ordre de regles
- Comparació SG vs NACL i funcionament conjunt

## Característiques

- **194 preguntes** tipus test basades en la teoria dels dos temes
- **Selecció d'unitat i de temes**: tries la unitat i després quins temes practicar
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
- `js/questions.js` — Base del banc de preguntes, unitats i constructor
- `js/data-cloud-intro.js` — Preguntes: què és el núvol i el model on-premise
- `js/data-cloud-feat.js` — Preguntes: característiques del núvol
- `js/data-models-svc.js` — Preguntes: models de servei (IaaS, PaaS, SaaS)
- `js/data-models-depl.js` — Preguntes: models de desplegament
- `js/data-aws-intro.js` — Preguntes: introducció a AWS
- `js/data-aws-academy.js` — Preguntes: AWS Academy i Learner Lab
- `js/data-global.js` — Preguntes d'infraestructura global
- `js/data-resp.js` — Preguntes del model de responsabilitat compartida
- `js/data-iam.js` — Preguntes d'IAM
- `js/data-ec2.js` — Preguntes d'EC2
- `js/data-sg.js` — Preguntes de Security Groups
- `js/data-nacl.js` — Preguntes de Network ACLs
- `js/data-net.js` — Preguntes de seguretat de xarxa (SG vs NACL)
- `js/app.js` — Lògica del test, temporitzador, idioma i tema
