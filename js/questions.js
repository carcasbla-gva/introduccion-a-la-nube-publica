/* Preguntes del Tema 2 - Introducció a la núvol pública
   Contingut basat en la teòria del Tema 2 (U2): infraestructura global,
   model de responsabilitat compartida, IAM, EC2, Security Groups i NACLs. */

const QUESTIONS = [
  // ========================================================================
  // TEMA: Infraestructura global (Regions i AZs)
  // ========================================================================
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Què és una Regió d'AWS?",
    options:[
      "Un centre de dades únic i independent",
      "Una zona geogràfica gran que conté múltiples centres de dades",
      "Un servei d'emmagatzematge d'objectes",
      "Un tallafoc virtual per a instàncies EC2"
    ],
    correct:1,
    explanation:"Una Regió d'AWS és una zona geogràfica gran (per exemple, eu-west-1 a Irlanda) que conté múltiples centres de dades."
  },
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Què són les Zones de Disponibilitat (AZs)?",
    options:[
      "Regions geogràfiques diferents",
      "Centres de dades independents però interconnectats dins d'una mateixa Regió",
      "Serveis de base de dades gestionats",
      "Polítiques de permís d'IAM"
    ],
    correct:1,
    explanation:"Cada Regió té entre 2 i 6 AZs, que són centres de dades independents amb el seu propi subministrament elèctric, xarxa redundant i refrigeració, però interconnectats."
  },
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Quantes Zones de Disponibilitat hi ha com a mínim per Regió?",
    options:["1","Entre 2 i 6","Exactament 3","Entre 10 i 20"],
    correct:1,
    explanation:"Dins de cada Regió hi ha entre 2 i 6 Zones de Disponibilitat."
  },
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Quina és la Regió d'AWS a Irlanda?",
    options:["us-east-1","eu-west-1","eu-south-2","southeast-1"],
    correct:1,
    explanation:"eu-west-1 és la Regió d'AWS a Irlanda. us-east-1 és Virgínia del Nord i eu-south-2 és Madrid."
  },
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Quins factors s'han de considerar per triar una Regió d'AWS?",
    options:["Nomé el preu","Latència, cumpliment normatiu, costos, disponibilitat de serveis i estratègia de negoci","Nomé la proximitat als usuaris","Nomé la disponibilitat de serveis nous"],
    correct:1,
    explanation:"Quan es despleguen serveis a AWS cal considerar la latència prop als usuaris, el cumpliment normatiu (per exemple GDPR), els costos, la disponibilitat de serveis i l'estratègia de negoci."
  },
  {
    topic: "Infraestructura global (Regions i AZs)",
    question: "Quina és la principal avantatge de desplegar instàncies en diferents AZs d'una mateixa Regió?",
    options:["Reduir el cost de les instàncies","Alta disponibilitat i tolerància a fallades","Evitar pagar per transferència de dades","No necessitar Security Groups"],
    correct:1,
    explanation:"Si una AZ cau per manteniment o desastre, les altres AZs continuen actives, cosa que permet arquitectures d'alta disponibilitat i disaster recovery."
  },

  // ========================================================================
  // TEMA: Model de responsabilitat compartida
  // ========================================================================
  {
    topic: "Model de responsabilitat compartida",
    question: "Dintre del model de responsabilitat compartida, qui és responsable de la seguretat dels centres de dades físics i del maquinari?",
    options:["El client d'AWS","AWS","Ambaixats parts parts parts","Cap dels dos"],
    correct:1,
    explanation:"AWS s'encarrega de la seguretat de la infraestructura (datacenters, maquinari, xarxa física, hipervisor, etc.). El client és responsable de la seguretat del que crea i configura dins del núvol."
  },
  {
    topic: "Model de responsabilitat compartida",
    question: "Qui és responsable de la configuració dels firewalls (Security Groups)?",
    options:["AWS","El client","Ambaixats parts","Cap dels dos"],
    correct:1,
    explanation:"La configuració de firewalls (Security Groups), la gestió d'usuaris (IAM), el xifrat de dades i la instal·lació de programari són responsabilitat del client."
  },
  {
    topic: "Model de responsabilitat compartida",
    question: "Qui és responsable de la gestió d'usuaris amb IAM?",
    options:["AWS","El client","Ambaixats parts","Cap dels dos"],
    correct:1,
    explanation:"La gestió d'usuaris (IAM) és responsabilitat del client; AWS assegura la infraestructura física i del núvol."
  },
  {
    topic: "Model de responsabilitat compartida",
    question: "Per què va patir Capital One una filtració de dades a AWS?",
    options:["Per un fall AWS en els datacenters","Per una configuració errònia d'un Security Group, que és responsabilitat del client","Per una pèrdua de claus de AWS","Per un atac als servidors físics d'AWS"],
    correct:1,
    explanation:"La filtració de dades de Capital One va ser causada per una configuració errònia d'un Security Group en AWS. AWS no va ser el culpable: era responsabilitat del client."
  },
  {
    topic: "Model de responsabilitat compartida",
    question: "Quina és una obligació del client segons el model de responsabilitat compartida?",
    options:["Mantenir els datacenters físics","Gestionar usuaris i permisos amb IAM","Gestionar el hipervisor","Mantenir la xarxa física global"],
    correct:1,
    explanation:"El client és responsable de la configuració i l'ús correcte: gestió d'usuaris (IAM), configuració de firewalls, xifrat de dades, claus i instal·lació de programari i parches."
  },

  // ========================================================================
  // TEMA: IAM
  // ========================================================================
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Què significa l'acrònim IAM?",
    options:["Identity and Access Management","Instance and Access Monitor","Internet Access Management","Identity Authorization Module"],
    correct:0,
    explanation:"IAM significa Identity and Access Management (Gestió d'identitats i accés)."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Què és un usuari a IAM?",
    options:["Una aplicació que necessita credencials temporals","Una identitat individual que accedeix al sistema (administrador, desenvolupador, etc.)","Una política JSON de permisos","Unaregla de xarxa per a subnets"],
    correct:1,
    explanation:"Un usuari és una identitat individual dins d'AWS que pot tenir credencials d'accés a la consola o claus d'accés per a la CLI/SDK."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Què és un rol d'IAM?",
    options:["Una identitat per a persones amb contrasenya permanent","Una identitat per a serveis o aplicacions (per exemple, una instància EC2) que genera credencials temporals","Una política gestionada per AWS","Un grup d'usuaris amb permís d'administrador"],
    correct:1,
    explanation:"Els rols són identitats pensades per a serveis, no per a persones. Per exemple, una instància EC2 pot usar un rol per llegir un bucket S3 sense emmagatzemar claus permanents a la màquina."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Què és el principi de mínim privilegi?",
    options:["Donar tots els permisos a tots els usuaris","Donar a cada entitat només els permisos estrictament necessaris","Usar sempre el compte root","No activar l'MFA mai"],
    correct:1,
    explanation:"El principi de mínim privileix consisteix en donar a cada entitat només els permisos estrictament necessaris, redueixen el risc d'errors i atacs."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Què són les polítiques d'IAM?",
    options:["Regles de xarxa per a subnets","Documents JSON que especifiquen quines accions estan permeses o denegades sobre quins recursos","Centres de dades d'AWS","Tipus d'instàncies EC2"],
    correct:1,
    explanation:"Les polítiques defineixen quins permisos té un usuari, grup o rol. Són documents en format JSON que especifiquen accions permeses o denegades, recursos i condicions."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Quines són les dues classes de polítiques d'IAM?",
    options:["Públices i privades","AWS managed policies i Customer managed policies","Entrada i sortida","Stateful i stateless"],
    correct:1,
    explanation:"AWS ofreceix polítiques ja preparades (AWS managed policies) i polítiques personalitzades que creem nosaltres (Customer managed policies)."
  },
  {
    topic: "IAM (Usuaris, grups i rols)",
    question: "Quina és una bona pràctica important d'IAM?",
    options:["Usar el compte root per al dia a dia","No activar mai l'MFA","No usar el compte root per al dia a dia i activar l'MFA","No revisar mai les claus d'accés"],
    correct:2,
    explanation:"Bones pràctiques: no usar el compte root per al dia a dia, activar MFA (Multi-Factor Authentication) i revisar/rotar les claus d'accés periòdicament."
  },

  // ========================================================================
  // TEMA: EC2
  // ========================================================================
  {
    topic: "Introducció a EC2",
    question: "Què és Amazon EC2?",
    options:["Un servei d'emmagatzematge d'objectes","Un servei que permet llogar màquines virtuals a la carta (instàncies)","Un servei de gestió d'identitats","Un tallafoc per a subnets"],
    correct:1,
    explanation:"Amazon Elastic Compute Cloud (EC2) permet llogar màquines virtuals a la carta (instàncies) per executar aplicacions, pàgines web o entorns de desenvolupament."
  },
  {
    topic: "Introducció a EC2",
    question: "Per què s'anomena EC2 'elastic'?",
    options:["Perque només funciona amb Linux","Perque es poden crear, aturar, eliminar o redimensionar instàncies ràpidament segons les necessitats","Perque té preu fix","Perque no es pot escalar"],
    correct:1,
    explanation:"Es diu elastic perquè podem crear, aturar, eliminar o redimensionar les instàncies de manera ràpida segons les necessitats, passant d'una instància a centenars en minuts."
  },
  {
    topic: "Introducció a EC2",
    question: "Què és una AMI (Amazon Machine Image)?",
    options:["Un disc virtual associat a la instància","Una plantilla que defineix el sistema operatiu i el programari inicial de la instància","Una clau per connectar per SSH","Un tipus d'instància"],
    correct:1,
    explanation:"L'AMI és la plantilla que defineix el sistema operatiu i el programari inicial de la instància (per exemple, Ubuntu, Amazon Linux, Windows Server)."
  },
  {
    topic: "Introducció a EC2",
    question: "Quins elements es necessiten per connectar-se a una instància EC2 Linux?",
    options:["Nomé una IP pública","Un parell de claus (key pairs) basat en criptografia asimètrica","Nomé un Security Group","Nomé una AMI"],
    correct:1,
    explanation:"Per connectar-se via SSH a Linux (o RDP a Windows) es necessiten parells de claus: la clau pública es guarda a la instància i la clau privada només la té l'usuari."
  },
  {
    topic: "Introducció a EC2",
    question: "Què és un volum EBS?",
    options:["Una imatge del sistema operatiu","Un disc virtual que s'associa a la instància per emmagatzemar dades","Una clau d'accés SSH","Un tipus d'instància optimitzada per GPU"],
    correct:1,
    explanation:"Els volumens EBS són discs virtuals que s'associen a la instància per emmagatzemar dades."
  },
  {
    topic: "Introducció a EC2",
    question: "Quina és una bona pràctica de seguretat en l'accés a instàncies EC2?",
    options:["Usar sempre contrasenyes tradicionals","Perder la clau privada és sense problema","No obrir SSH al món sencer (0.0.0.0/0); limitar l'accés a una IP de confiança","Usar el compte root per al dia a dia"],
    correct:2,
    explanation:"No és recomanable obrir SSH al món sencer (0.0.0.0/0); es millor limitar l'accés a una IP de confiança o usar un mecanisme d'administració més segur. Si es perd la clau privada, no hi ha manera senzilla d'accedir a la instància."
  },

  // ========================================================================
  // TEMA: Security Groups
  // ========================================================================
  {
    topic: "Security Groups (SG)",
    question: "Què és un Security Group?",
    options:["Una llista de regles a nivell de subxarxa","Un tallafoc virtual que controla el trànsit a nivell d'instància","Un servei d'identitats d'AWS","Un disc virtual EBS"],
    correct:1,
    explanation:"Un Security Group és un tallafoc virtual associat a recursos de xarxa (com una instància EC2) que permet definir quin trànsit està autoritzat a entrar i eixir."
  },
  {
    topic: "Security Groups (SG)",
    question: "A quin nivell s'aplica un Security Group?",
    options:["A la subxarxa (subnet)","Al recurs o a la interfície de xarxa","A tota la VPC","A Internet"],
    correct:1,
    explanation:"El Security Group s'associa a la interfície de xarxa de la instància (a nivell del recurs), mentre que la NACL s'aplica a la subnet."
  },
  {
    topic: "Security Groups (SG)",
    question: "Un Security Group és stateful. Què significa això?",
    options:["Que no recorda l'estat de les connexions","Que si permetes una connexió d'entrada, la resposta automàticament està permesa sense regla d'eixida específica","Que només té regles DENY","Que s'avaluen per ordre numèric ascendent"],
    correct:1,
    explanation:"És stateful: té en compte l'estat de les connexions. Si permetes una connexió d'entrada, la resposta torna automàticament, encara que no hi hagi una regla d'eixida específica per a ella."
  },
  {
    topic: "Security Groups (SG)",
    question: "Quins tipus de regles tenen els Security Groups?",
    options:["Nomé regles DENY","Nomé regles d'autorització (ALLOW), no tenen regles Deny explícites","Nomé regles d'entrada","Nomé regles de sortida"],
    correct:1,
    explanation:"Els Security Groups només tenen regles per autoritzar trànsit; no tenen regles explícites de tipus Deny. El trànsit no autoritzat no passa."
  },
  {
    topic: "Security Groups (SG)",
    question: "Què passa quan hi ha diversos Security Groups associats a una mateixa interfície de xarxa?",
    options:["S'avaluen conjuntament les regles d'autorització","Un SG pot anular un altre amb una regla Deny","Nomé s'aplica el primer SG","No es permet associar diversos SGs"],
    correct:0,
    explanation:"Quan hi ha diversos Security Groups associats, s'avaluen conjuntament les seues regles d'autorització. No es pot utilitzar un SG per anul·lar una autorització d'un altre mitjançant una regla Deny."
  },
  {
    topic: "Security Groups (SG)",
    question: "Què és el principi de mínim privilegi aplicat als Security Groups?",
    options:["Obrir tots els ports a Internet","Crear un SG per funció (SG-Web, SG-App, SG-Database) i obrir només els ports necessaris","Usar un sol SG per a totes les instàncies","Obrir SSH per 0.0.0.0/0"],
    correct:1,
    explanation:"Cada recurs hauria de rebre només les comunicacions que necessita. Per exemple, SG-Web per servidors web, SG-App per servidors d'aplicacions i SG-Database per bases de dades."
  },

  // ========================================================================
  // TEMA: Network ACLs (NACL)
  // ========================================================================
  {
    topic: "Network ACLs (NACL)",
    question: "Què és una Network ACL (NACL)?",
    options:["Un tallafoc virtual per a una instància concreta","Una llista de regles que controla el trànsit que entra i eix d'una subxarxa (subnet) de la VPC","Un servei de bases de dades","Una política d'IAM en format JSON"],
    correct:1,
    explanation:"Una Network ACL és una llista de regles que controla el trànsit d'entrada i eixida d'una subnet de la VPC. No s'associa directament a una instància, sinó a la subnet."
  },
  {
    topic: "Network ACLs (NACL)",
    question: "Una NACL és stateless. Què implica això?",
    options:["Recorda l'estat de les connexions i permet respostes automàticament","No recorda l'estat de les connexions; cal configurar tant el trànsit d'entrada com el d'eixida","Nomé té regles ALLOW","S'avaluen les regles en ordre ascendent"],
    correct:1,
    explanation:"És stateless: no recorda que una petició haja entrat ni autoritza automàticament la resposta. Per això cal configurar les dues direccions del trànsit."
  },
  {
    topic: "Network ACLs (NACL)",
    question: "Quins tipus d'accions permeten les NACLs?",
    options:["Nomé ALLOW","Nomé DENY","ALLOW i DENY","Cap acció"],
    correct:2,
    explanation:"Les Network ACLs permeten tant accions ALLOW com DENY, cosa que els Security Groups no fan (els SG només tenen autorització)."
  },
  {
    topic: "Network ACLs (NACL)",
    question: "Com s'avaluen les regles d'una NACL?",
    options:["En ordre ascendent, primer la regla amb el número més baix","En ordre descendent","A l'atzar","Nomé la primera regla s'avalua sempre"],
    correct:0,
    explanation:"Les regles d'una NACL tenen números i s'avaluen en ordre ascendent. Quan una regla coincideix amb el trànsit, s'aplica la seua acció i no es continuen examinant les posteriors."
  },
  {
    topic: "Network ACLs (NACL)",
    question: "Què són els ports efímers en el contexto d'una NACL?",
    options:["Ports oberts permanentment al servidor","Ports temporals que el sistema del client utilitza per establir connexions de retorn","Ports dels Security Groups","Ports de les instàncies EC2"],
    correct:1,
    explanation:"Els ports efímers són ports temporals del client. En una NACL stateless, la regla d'eixida ha de permetre el trànsit de retorn cap a aquests ports, altrament la comunicació pot fallar."
  },
  {
    topic: "Network ACLs (NACL)",
    question: "Quina afirmació és certa sobre la associació de NACLs a subnets?",
    options:["Una subnet pot estar associada a diverses NACLs alhora","Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot tenir una NACL alhora","Les NACLs no s'associen a cap subnet","Cada instància té la seua pròpia NACL"],
    correct:1,
    explanation: "Cada subnet ha d'estar associada a una Network ACL. Una mateixa NACL pot associar-se a diverses subnets, però cada subnet només pot estar associada a una NACL alhora."
  },

  // ========================================================================
  // TEMA: Comparació SG vs NACL / funcionament conjunt
  // ========================================================================
  {
    topic: "Seguretat de xarxa (SG vs NACL)",
    question: "Quina és la diferència principal entre un Security Group i una NACL?",
    options:[
      "Nomé la NACL és stateful",
      "El SG protegeix el recurs (stateful, només ALLOW) i la NACL filtra a escala de subnet (stateless, ALLOW i DENY)",
      "Nomé el SG pot bloquejar IPs explícitament",
      "Els dos són el mateix però amb noms diferents"
    ],
    correct:1,
    explanation:"El Security Group aplica-se al recurs, és stateful i només té regles ALLOW. La NACL aplica-se a la subnet, és stateless i permet ALLOW i DENY. Es compleixen com a capes complementàries."
  },
  {
    topic: "Seguretat de xarxa (SG vs NACL)",
    question: "Si el Security Group permet HTTP però la NACL bloqueja el trànsit, què passa?",
    options:["La web és accessible perquè el SG és l'únic que importa","La web no serà accessible; cal superar els dos controls","La NACL s'ignore perquè el SG té prioritat","Nomé funcione el SSH"],
    correct:1,
    explanation:"Els dos mecanismes actuen simultàniament. Per arribar a l'aplicació, la petició ha de superar tant el SG com la NACL. Si algun dels dos ho bloqueja, la petició no arriba."
  },
  {
    topic: "Seguretat de xarxa (SG vs NACL)",
    question: "Quin mecanisme recomana AWS utilitzar com a control principal per a l'accés als recursos?",
    options:["Nomé les NACLs","Nomé els Security Groups","Security Groups com a mecanisme principal i NACLs com a capa addicional de xarla","Cap dels dos"],
    correct:2,
    explanation:"AWS recomana utilitzar els Security Groups com a mecanisme principal per controlar l'accés als recursos i les NACLs quan calgui un control addició de xarxa a escala de subnet."
  },
  {
    topic: "Seguretat de xarxa (SG vs NACL)",
    question: "Què cal perquè una petició web arriba a un servidor Apache a EC2?",
    options:["Nomé que el SG permet HTTP","Nomé que la NACL permet HTTP","Que el SG i la NACL permetgin el trànsit, i que hi hagi connectivitat de xarxa (IP pública, rutes, Internet Gateway si cal)","Nomé una IP pública"],
    correct:2,
    explanation:"Perque una petició web arribi a Apache, ha de superar els controls de xarxa aplicables (SG i NACL) i necessita connectivitat: IP pública, rutes adequades i un Internet Gateway quan correspongui."
  }
];

// Arreglar l'objecte malformat (estructura defensiva)
QUESTIONS.forEach(q => {
  if (!Array.isArray(q.options)) q.options = [];
  if (typeof q.correct !== "number" || q.correct < 0 || q.correct >= q.options.length) q.correct = 0;
});

const TOPICS = [...new Set(QUESTIONS.map(q => q.topic))];
