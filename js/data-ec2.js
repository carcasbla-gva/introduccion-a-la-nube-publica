/* Tema: Introducció a EC2 */
QUESTIONS.push(
  Q(T_EC2,
    { ca: "Què és Amazon EC2?", es: "¿Qué es Amazon EC2?" },
    [
      { ca: "Un servei d'emmagatzematge d'objectes", es: "Un servicio de almacenamiento de objetos" },
      { ca: "Un servei que permet llogar màquines virtuals a la carta (instàncies)", es: "Un servicio que permite alquilar máquinas virtuales bajo demanda (instancias)" },
      { ca: "Un servei de gestió d'identitats", es: "Un servicio de gestión de identidades" },
      { ca: "Un tallafoc per a subnets", es: "Un firewall para subnets" }
    ], 1,
    { ca: "Amazon Elastic Compute Cloud (EC2) permet llogar màquines virtuals a la carta (instàncies).", es: "Amazon Elastic Compute Cloud (EC2) permite alquilar máquinas virtuales bajo demanda (instancias)." }),

  Q(T_EC2,
    { ca: "Per què s'anomena EC2 'elastic'?", es: "¿Por qué se llama EC2 'elastic'?" },
    [
      { ca: "Perquè només funciona amb Linux", es: "Porque solo funciona con Linux" },
      { ca: "Perquè es poden crear, aturar, eliminar o redimensionar instàncies ràpidament", es: "Porque se pueden crear, apagar, eliminar o redimensionar instancias rápidamente" },
      { ca: "Perquè té preu fix", es: "Porque tiene precio fijo" },
      { ca: "Perquè no es pot escalar", es: "Porque no se puede escalar" }
    ], 1,
    { ca: "Es diu elàstic perquè podem crear, aturar, eliminar o redimensionar instàncies ràpidament segons les necessitats.", es: "Se dice elástico porque podemos crear, apagar, eliminar o redimensionar instancias rápidamente según las necesidades." }),

  Q(T_EC2,
    { ca: "Què és una AMI (Amazon Machine Image)?", es: "¿Qué es una AMI (Amazon Machine Image)?" },
    [
      { ca: "Un disc virtual associat a la instància", es: "Un disco virtual asociado a la instancia" },
      { ca: "Una plantilla que defineix el sistema operatiu i el programari inicial", es: "Una plantilla que defineye el sistema operativo y el software inicial" },
      { ca: "Una clau per connectar per SSH", es: "Una clave para conectar por SSH" },
      { ca: "Un tipus d'instància", es: "Un tipo de instancia" }
    ], 1,
    { ca: "L'AMI és la plantilla que defineix el sistema operatiu i el programari inicial (Ubuntu, Amazon Linux, Windows Server, etc.).", es: "La AMI es la plantilla que defineye el sistema operativo y el software inicial (Ubuntu, Amazon Linux, Windows Server, etc.)." }),

  Q(T_EC2,
    { ca: "Què és un tipus d'instància?", es: "¿Qué es un tipo de instancia?" },
    [
      { ca: "La combinació de CPU, memòria, disc i xarxa", es: "La combinación de CPU, memoria, disco y red" },
      { ca: "Una clau SSH", es: "Una clave SSH" },
      { ca: "Una política d'IAM", es: "Una política de IAM" },
      { ca: "Una regla de la NACL", es: "Una regla de la NACL" }
    ], 0,
    { ca: "El tipus d'instància defineix la combinació de CPU, memòria, disc i xarxa (per exemple, t2.micro, t3.small, m5.large).", es: "El tipo de instancia define la combinación de CPU, memoria, disco y red (por ejemplo, t2.micro, t3.small, m5.large)." }),

  Q(T_EC2,
    { ca: "Quins elements es necessiten per connectar-se a una instància EC2 Linux?", es: "¿Qué elementos se necesitan para conectarse a una instancia EC2 Linux?" },
    [
      { ca: "Només una IP pública", es: "Solo una IP pública" },
      { ca: "Un parell de claus (key pairs) basat en criptografia asimètrica", es: "Un par de claves (key pairs) basado en criptografía asimétrica" },
      { ca: "Només un Security Group", es: "Solo un Security Group" },
      { ca: "Només una AMI", es: "Solo una AMI" }
    ], 1,
    { ca: "Per connectar-se via SSH (Linux) o RDP (Windows) es necessiten parells de claus.", es: "Para conectarse vía SSH (Linux) o RDP (Windows) se necesitan pares de claves." }),

  Q(T_EC2,
    { ca: "Què és un volum EBS?", es: "¿Qué es un volumen EBS?" },
    [
      { ca: "Una imatge del sistema operatiu", es: "Una imagen del sistema operativo" },
      { ca: "Un disc virtual que s'associa a la instància per emmagatzemar dades", es: "Un disco virtual que se asocia a la instancia para almacenar datos" },
      { ca: "Una clau d'accés SSH", es: "Una clave de acceso SSH" },
      { ca: "Un tipus d'instància optimitzada per GPU", es: "Un tipo de instancia optimizada para GPU" }
    ], 1,
    { ca: "Els volums EBS són discs virtuals que s'associen a la instància per emmagatzemar dades.", es: "Los volúmenes EBS son discos virtuales que se asocian a la instancia para almacenar datos." }),

  Q(T_EC2,
    { ca: "Quina és una bona pràctica de seguretat en l'accés a instàncies EC2?", es: "¿Cuál es una buena práctica de seguridad en el acceso a instancias EC2?" },
    [
      { ca: "Usar sempre contrasenyes tradicionals", es: "Usar siempre contraseñas tradicionales" },
      { ca: "Perder la clau privada no és problema", es: "Perder la clave privada no es problema" },
      { ca: "No obrir SSH a 0.0.0.0/0; limitar-lo a una IP de confiança", es: "No abrir SSH a 0.0.0.0/0; limitarlo a una IP de confianza" },
      { ca: "Usar el compte root per al dia a dia", es: "Usar la cuenta root para el día a día" }
    ], 2,
    { ca: "No és recomanable obrir SSH al món sencer; cal limitar l'accés a una IP de confiança o usar un mecanisme més segur.", es: "No es recomendable abrir SSH al mundo entero; hay que limitar el acceso a una IP de confianza o usar un mecanismo más seguro." }),

  Q(T_EC2,
    { ca: "Quina característica d'EC2 permet triar entre CPU, memòria, GPU o emmagatzematge optimitzat?", es: "¿Qué característica de EC2 permite elegir entre CPU, memoria, GPU o almacenamiento optimizado?" },
    [
      { ca: "Els diferents tipus d'instància", es: "Los diferentes tipos de instancia" },
      { ca: "Les NACLs", es: "Las NACLs" },
      { ca: "Els grups d'IAM", es: "Los grupos de IAM" },
      { ca: "Les regions", es: "Las regiones" }
    ], 0,
    { ca: "EC2 permet elegir diferents tipus d'instància segons CPU, memòria, GPU o emmagatzematge optimitzat.", es: "EC2 permite elegir diferentes tipos de instancia según CPU, memoria, GPU o almacenamiento optimizado." }),

  Q(T_EC2,
    { ca: "Quin control té el client sobre una instància EC2?", es: "¿Qué control tiene el cliente sobre una instancia EC2?" },
    [
      { ca: "Cap control", es: "Ningún control" },
      { ca: "Control total sobre el sistema operatiu i la configuració", es: "Control total sobre el sistema operativo y la configuración" },
      { ca: "Només sobre el maquinari físic", es: "Solo sobre el hardware físico" },
      { ca: "Només sobre la xarxa global", es: "Solo sobre la red global" }
    ], 1,
    { ca: "EC2 ofereix control total sobre el sistema operatiu i la configuració de la instància.", es: "EC2 ofrece control total sobre el sistema operativo y la configuración de la instancia." }),

  Q(T_EC2,
    { ca: "Què permet l'escalabilitat d'EC2?", es: "¿Qué permite la escalabilidad de EC2?" },
    [
      { ca: "Passar de tindre una instància a centenars en minuts", es: "Pasar de tener una instancia a centenares en minutos" },
      { ca: "No poder canviar el nombre d'instàncies", es: "No poder cambiar el número de instancias" },
      { ca: "Eliminar la VPC", es: "Eliminar la VPC" },
      { ca: "Desactivar IAM", es: "Desactivar IAM" }
    ], 0,
    { ca: "Gràcies a l'escalabilitat, podem passar de tindre una instància a centenars en minuts.", es: "Gracias a la escalabilidad, podemos pasar de tener una instancia a centenares en minutos." }),

  Q(T_EC2,
    { ca: "Amb quins serveis s'integra EC2?", es: "¿Con qué servicios se integra EC2?" },
    [
      { ca: "Només amb S3", es: "Solo con S3" },
      { ca: "Amb S3, RDS, VPC, IAM, entre altres", es: "Con S3, RDS, VPC, IAM, entre otros" },
      { ca: "Només amb IAM", es: "Solo con IAM" },
      { ca: "Amb cap servei", es: "Con ningún servicio" }
    ], 1,
    { ca: "EC2 s'integra amb altres serveis com S3, RDS, VPC i IAM.", es: "EC2 se integra con otros servicios como S3, RDS, VPC e IAM." }),

  Q(T_EC2,
    { ca: "Quin és un cas d'ús típic d'EC2?", es: "¿Cuál es un caso de uso típico de EC2?" },
    [
      { ca: "Allotjament de pàgines web o aplicacions", es: "Alojamiento de páginas web o aplicaciones" },
      { ca: "Definir polítiques d'IAM", es: "Definir políticas de IAM" },
      { ca: "Configurar NACLs", es: "Configurar NACLs" },
      { ca: "Gestionar regions", es: "Gestionar regiones" }
    ], 0,
    { ca: "Un cas d'ús típic és l'allotjament de pàgines web o aplicacions, entre d'altres.", es: "Un caso de uso típico es el alojamiento de páginas web o aplicaciones, entre otros." }),

  Q(T_EC2,
    { ca: "Quin d'aquests és un cas d'ús típic d'EC2?", es: "¿Cuál de estos es un caso de uso típico de EC2?" },
    [
      { ca: "Servidors de bases de dades", es: "Servidores de bases de datos" },
      { ca: "Crear regions d'AWS", es: "Crear regiones de AWS" },
      { ca: "Definir el model de responsabilitat compartida", es: "Definir el modelo de responsabilidad compartida" },
      { ca: "Gestionar el DNS global", es: "Gestionar el DNS global" }
    ], 0,
    { ca: "EC2 s'usa per a allotjament web, servidors de bases de dades, entorns de prova i càlcul intensiu.", es: "EC2 se usa para alojamiento web, servidores de bases de datos, entornos de prueba y cálculo intensivo." }),

  Q(T_EC2,
    { ca: "Quin d'aquests és un cas d'ús de càlcul intensiu per a EC2?", es: "¿Cuál de estos es un caso de uso de cálculo intensivo para EC2?" },
    [
      { ca: "Big Data i Machine Learning", es: "Big Data y Machine Learning" },
      { ca: "Enviar correus", es: "Enviar correos" },
      { ca: "Gestionar dominis", es: "Gestionar dominios" },
      { ca: "Configurar MFA", es: "Configurar MFA" }
    ], 0,
    { ca: "El càlcul intensiu (Big Data, Machine Learning) és un cas d'ús típic d'EC2.", es: "El cálculo intensivo (Big Data, Machine Learning) es un caso de uso típico de EC2." }),

  Q(T_EC2,
    { ca: "Quin d'aquests és un exemple de tipus d'instància EC2?", es: "¿Cuál de estos es un ejemplo de tipo de instancia EC2?" },
    ["t2.micro", "s3-bucket", "iam-role", "nacl-01"], 0,
    { ca: "t2.micro, t3.small i m5.large són exemples de tipus d'instància EC2.", es: "t2.micro, t3.small y m5.large son ejemplos de tipos de instancia EC2." }),

  Q(T_EC2,
    { ca: "On es guarda la clau pública en un parell de claus?", es: "¿Dónde se guarda la clave pública en un par de claves?" },
    [
      { ca: "A la instància", es: "En la instancia" },
      { ca: "Només a l'ordinador de l'usuari", es: "Solo en el ordenador del usuario" },
      { ca: "A Internet", es: "En Internet" },
      { ca: "A la NACL", es: "En la NACL" }
    ], 0,
    { ca: "La clau pública es guarda a la instància; la clau privada només la té l'usuari i serveix per autenticar-se.", es: "La clave pública se guarda en la instancia; la clave privada solo la tiene el usuario y sirve para autenticarse." }),

  Q(T_EC2,
    { ca: "Qui té la clau privada en un parell de claus?", es: "¿Quién tiene la clave privada en un par de claves?" },
    [
      { ca: "La instància EC2", es: "La instancia EC2" },
      { ca: "Només l'usuari", es: "Solo el usuario" },
      { ca: "AWS", es: "AWS" },
      { ca: "Internet", es: "Internet" }
    ], 1,
    { ca: "La clau privada només la té l'usuari i serveix per autenticar-se; la pública es guarda a la instància.", es: "La clave privada solo la tiene el usuario y sirve para autenticarse; la pública se guarda en la instancia." }),

  Q(T_EC2,
    { ca: "Quina clau es pot descarregar per defecte als laboratoris d'AWS Academy?", es: "¿Qué clave se puede descargar por defecto en los laboratorios de AWS Academy?" },
    ["vockey", "rootkey", "admin.pem", "labkey"], 0,
    { ca: "Per defecte, als laboratoris ja tenim una clau anomenada vockey, que es pot descarregar des del panell de control.", es: "Por defecto, en los laboratorios ya tenemos una clave llamada vockey, que se puede descargar desde el panel de control." }),

  Q(T_EC2,
    { ca: "Què passa si es perd la clau privada d'una instància?", es: "¿Qué pasa si se pierde la clave privada de una instancia?" },
    [
      { ca: "Es pot recuperar fàcilment des d'AWS", es: "Se puede recuperar fácilmente desde AWS" },
      { ca: "No hi ha manera senzilla d'accedir a la instància", es: "No hay manera sencilla de acceder a la instancia" },
      { ca: "La instància s'elimina automàticament", es: "La instancia se elimina automáticamente" },
      { ca: "Es genera una nova automàticament", es: "Se genera una nueva automáticamente" }
    ], 1,
    { ca: "Si es perd la clau privada, no hi ha manera senzilla d'accedir a la instància.", es: "Si se pierde la clave privada, no hay manera sencilla de acceder a la instancia." }),

  Q(T_EC2,
    { ca: "Quin protocol s'usa per connectar-se a una instància Windows?", es: "¿Qué protocolo se usa para conectarse a una instancia Windows?" },
    ["SSH", "RDP", "HTTP", "FTP"], 1,
    { ca: "Per a Windows s'usa RDP; per a Linux, SSH.", es: "Para Windows se usa RDP; para Linux, SSH." }),

  Q(T_EC2,
    { ca: "Què és una VPC?", es: "¿Qué es una VPC?" },
    [
      { ca: "Una xarxa virtual privada on s'executen les instàncies", es: "Una red virtual privada donde se ejecutan las instancias" },
      { ca: "Un tipus de disc EBS", es: "Un tipo de disco EBS" },
      { ca: "Una política d'IAM", es: "Una política de IAM" },
      { ca: "Un parell de claus", es: "Un par de claves" }
    ], 0,
    { ca: "Una VPC (Virtual Private Cloud) és una xarxa virtual pròpia que aïlla els recursos en xarxes privades; les instàncies EC2 s'executen dins d'una VPC.", es: "Una VPC (Virtual Private Cloud) es una red virtual propia que aísla los recursos en redes privadas; las instancias EC2 se ejecutan dentro de una VPC." })
);
