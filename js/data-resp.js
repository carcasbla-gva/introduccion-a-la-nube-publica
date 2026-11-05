/* Tema: Model de responsabilitat compartida */
QUESTIONS.push(
  Q(T_RESP,
    { ca: "Dintre del model de responsabilitat compartida, qui és responsable de la seguretat dels centres de dades físics i del maquinari?", es: "Dentro del modelo de responsabilidad compartida, ¿quién es responsable de la seguridad de los centros de datos físicos y el hardware?" },
    [
      { ca: "El client d'AWS", es: "El cliente de AWS" },
      { ca: "AWS", es: "AWS" },
      { ca: "Ambas parts", es: "Ambas partes" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ], 1,
    { ca: "AWS s'encarrega de la seguretat de la infraestructura (datacenters, maquinari, xarxa física, hipervisor, etc.).", es: "AWS se encarga de la seguridad de la infraestructura (datacenters, hardware, red física, hipervisor, etc.)." }),

  Q(T_RESP,
    { ca: "Qui és responsable de la configuració dels firewalls (Security Groups)?", es: "¿Quién es responsable de la configuración de los firewalls (Security Groups)?" },
    ["AWS", "El client", { ca: "Ambas parts", es: "Ambas partes" }, { ca: "Cap dels dos", es: "Ninguno de los dos" }], 1,
    { ca: "La configuració de firewalls (Security Groups) és responsabilitat del client.", es: "La configuración de firewalls (Security Groups) es responsabilidad del cliente." }),

  Q(T_RESP,
    { ca: "Qui és responsable de la gestió d'usuaris amb IAM?", es: "¿Quién es responsable de la gestión de usuarios con IAM?" },
    ["AWS", "El client", { ca: "Ambas parts", es: "Ambas partes" }, { ca: "Cap dels dos", es: "Ninguno de los dos" }], 1,
    { ca: "La gestió d'usuaris (IAM) és responsabilitat del client; AWS assegura la infraestructura física i del núvol.", es: "La gestión de usuarios (IAM) es responsabilidad del cliente; AWS asegura la infraestructura física y de la nube." }),

  Q(T_RESP,
    { ca: "Per què va patir Capital One una filtració de dades a AWS?", es: "¿Por qué sufrió Capital One una filtración de datos en AWS?" },
    [
      { ca: "Per un fall d'AWS en els datacenters", es: "Por una falla de AWS en los datacenters" },
      { ca: "Per una configuració errònia d'un Security Group, que és responsabilitat del client", es: "Por una configuración errónea de un Security Group, que es responsabilidad del cliente" },
      { ca: "Per una pèrdua de claus d'AWS", es: "Por una pérdida de claves de AWS" },
      { ca: "Per un atac als servidors físics d'AWS", es: "Por un ataque a los servidores físicos de AWS" }
    ], 1,
    { ca: "La filtració va ser causada per una configuració errònia d'un Security Group. AWS no va ser el culpable: era responsabilitat del client.", es: "La filtración fue causada por una configuración errónea de un Security Group. AWS no fue el culpable: era responsabilidad del cliente." }),

  Q(T_RESP,
    { ca: "Quina és una obligació del client segons el model de responsabilitat compartida?", es: "¿Cuál es una obligación del cliente según el modelo de responsabilidad compartida?" },
    [
      { ca: "Mantenir els datacenters físics", es: "Mantener los centros de datos físicos" },
      { ca: "Gestionar usuaris i permisos amb IAM", es: "Gestionar usuarios y permisos con IAM" },
      { ca: "Gestionar el hipervisor", es: "Gestionar el hipervisor" },
      { ca: "Mantenir la xarxa física global", es: "Mantener la red física global" }
    ], 1,
    { ca: "El client és responsable de la configuració i l'ús correcte: IAM, firewalls, xifrat, claus, programari i parches.", es: "El cliente es responsable de la configuración y el uso correcto: IAM, firewalls, cifrado, claves, software y parches." }),

  Q(T_RESP,
    { ca: "Quin d'aquests elements és responsabilitat d'AWS?", es: "¿Cuál de estos elementos es responsabilidad de AWS?" },
    [
      { ca: "La configuració de Security Groups", es: "La configuración de Security Groups" },
      { ca: "La xarxa global, el maquinari i la virtualització", es: "La red global, el hardware y la virtualización" },
      { ca: "El xifrat de les dades del client", es: "El cifrado de los datos del cliente" },
      { ca: "La instal·lació de programari a les instàncies", es: "La instalación de software en las instancias" }
    ], 1,
    { ca: "AWS s'encarrega dels centres de dades físics, la xarxa global, el maquinari i la virtualització, i la disponibilitat de serveis.", es: "AWS se encarga de los centros de datos físicos, la red global, el hardware y la virtualización, y la disponibilidad de servicios." }),

  Q(T_RESP,
    { ca: "Qui és responsable del xifrat de dades i de les claus?", es: "¿Quién es responsable del cifrado de datos y de las claves?" },
    ["AWS", "El client", { ca: "Ambas parts", es: "Ambas partes" }, { ca: "Cap dels dos", es: "Ninguno de los dos" }], 1,
    { ca: "El xifrat de dades i les claus són responsabilitat del client.", es: "El cifrado de datos y las claves son responsabilidad del cliente." }),

  Q(T_RESP,
    { ca: "Qui és responsable de la instal·lació de programari i parches a les instàncies?", es: "¿Quién es responsable de la instalación de software y parches en las instancias?" },
    ["AWS", "El client", { ca: "Ambas parts", es: "Ambas partes" }, { ca: "Cap dels dos", es: "Ninguno de los dos" }], 1,
    { ca: "La instal·lació de programari i parches és responsabilitat del client.", es: "La instalación de software y parches es responsabilidad del cliente." }),

  Q(T_RESP,
    { ca: "Quin és un error habitual dels clients a AWS?", es: "¿Cuál es un error habitual de los clientes en AWS?" },
    [
      { ca: "Deixar ports oberts a Internet, com 0.0.0.0:22", es: "Dejar puertos abiertos a Internet, como 0.0.0.0:22" },
      { ca: "Usar MFA", es: "Usar MFA" },
      { ca: "Configurar còpies de seguretat", es: "Configurar copias de seguridad" },
      { ca: "Usar rols temporals", es: "Usar roles temporales" }
    ], 0,
    { ca: "Deixar ports oberts a Internet (per exemple, 0.0.0.0:22), usar usuaris root per defecte o no configurar còpies de seguretat són errors habituals.", es: "Dejar puertos abiertos a Internet (por ejemplo, 0.0.0.0:22), usar usuarios root por defecto o no configurar copias de seguridad son errores habituales." }),

  Q(T_RESP,
    { ca: "Quin és un error habitual relacionat amb l'usuari root?", es: "¿Cuál es un error habitual relacionado con el usuario root?" },
    [
      { ca: "Usar el compte root per defecte per al dia a dia", es: "Usar la cuenta root por defecto para el día a día" },
      { ca: "Activar MFA al root", es: "Activar MFA en el root" },
      { ca: "Rotar les claus", es: "Rotar las claves" },
      { ca: "Usar rols per a serveis", es: "Usar roles para servicios" }
    ], 0,
    { ca: "Utilitzar usuaris root per defecte és un error habitual; cal usar comptes amb permisos ajustats al mínim privilegi.", es: "Utilizar usuarios root por defecto es un error habitual; hay que usar cuentas con permisos ajustados al mínimo privilegio." }),

  Q(T_RESP,
    { ca: "Quin és un error habitual relacionat amb les còpies de seguretat?", es: "¿Cuál es un error habitual relacionado con las copias de seguridad?" },
    [
      { ca: "Fer còpies massa sovint", es: "Hacer copias demasiado a menudo" },
      { ca: "No configurar còpies de seguretat", es: "No configurar copias de seguridad" },
      { ca: "Xifrar les còpies", es: "Cifrar las copias" },
      { ca: "Provar les restauracions", es: "Probar las restauraciones" }
    ], 1,
    { ca: "No configurar còpies de seguretat és un error habitual dels clients.", es: "No configurar copias de seguridad es un error habitual de los clientes." }),

  Q(T_RESP,
    { ca: "Qui gestiona l'hipervisor en el model de responsabilitat compartida?", es: "¿Quién gestiona el hipervisor en el modelo de responsabilidad compartida?" },
    ["AWS", "El client", { ca: "Ambas parts", es: "Ambas partes" }, { ca: "Cap dels dos", es: "Ninguno de los dos" }], 0,
    { ca: "L'hipervisor forma part de la infraestructura gestionada per AWS.", es: "El hipervisor forma parte de la infraestructura gestionada por AWS." }),

  Q(T_RESP,
    { ca: "Quina afirmació resumeix millor el model de responsabilitat compartida?", es: "¿Qué afirmación resume mejor el modelo de responsabilidad compartida?" },
    [
      { ca: "AWS ho gestiona tot i el client no té responsabilitats", es: "AWS lo gestiona todo y el cliente no tiene responsabilidades" },
      { ca: "AWS assegura la infraestructura física i del núvol; el client, la configuració i l'ús correcte", es: "AWS asegura la infraestructura física y de la nube; el cliente, la configuración y el uso correcto" },
      { ca: "El client és responsable dels datacenters físics", es: "El cliente es responsable de los datacenters físicos" },
      { ca: "No hi ha responsabilitats compartides", es: "No hay responsabilidades compartidas" }
    ], 1,
    { ca: "AWS assegura la infraestructura física i del núvol, mentre que el client és responsable de la configuració i l'ús correcte.", es: "AWS asegura la infraestructura física y de la nube, mientras que el cliente es responsable de la configuración y el uso correcto." })
);
