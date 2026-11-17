/* Tema: Internet Gateway i taules de rutes */
QUESTIONS.push(
  Q(T_IGW,
    { ca: "Què és un Internet Gateway (IGW)?", es: "¿Qué es un Internet Gateway (IGW)?" },
    [
      { ca: "Una subxarxa privada", es: "Una subred privada" },
      { ca: "Un component que connecta la VPC amb Internet", es: "Un componente que conecta la VPC con Internet" },
      { ca: "Una regla de Security Group", es: "Una regla de Security Group" },
      { ca: "Una IP elàstica", es: "Una IP elástica" }
    ], 1,
    { ca: "Un Internet Gateway és un component que es connecta a la VPC i permet que les instàncies de les subxarxes públiques facen tràfic cap a Internet.", es: "Un Internet Gateway es un componente que se conecta a la VPC y permite que las instancias de las subredes públicas hagan tráfico hacia Internet." }),

  Q(T_IGW,
    { ca: "Què passa en una VPC sense Internet Gateway?", es: "¿Qué pasa en una VPC sin Internet Gateway?" },
    [
      { ca: "Les instàncies tenen Internet igualment", es: "Las instancias tienen Internet igualmente" },
      { ca: "La VPC no té accés a Internet", es: "La VPC no tiene acceso a Internet" },
      { ca: "S'assignen IPs elàstiques automàticament", es: "Se asignan IPs elásticas automáticamente" },
      { ca: "Es crea un NAT Gateway automàtic", es: "Se crea un NAT Gateway automático" }
    ], 1,
    { ca: "Sense un Internet Gateway, les VPC no tenen accés a Internet. L'IGW és la porta d'eixida cap a la xarxa pública.", es: "Sin un Internet Gateway, las VPC no tienen acceso a Internet. El IGW es la puerta de salida hacia la red pública." }),

  Q(T_IGW,
    { ca: "Quin tipus de subxarxa aprofita directament un Internet Gateway?", es: "¿Qué tipo de subred aprovecha directamente un Internet Gateway?" },
    [
      { ca: "La subxarxa privada", es: "La subred privada" },
      { ca: "La subxarxa pública", es: "La subred pública" },
      { ca: "Cap de les dues", es: "Ninguna de las dos" },
      { ca: "Només les subxarxes de base de dades", es: "Solo las subredes de base de datos" }
    ], 1,
    { ca: "L'IGW dona accés a Internet a les subxarxes públiques, sempre que les instàncies tinguen IP pública.", es: "El IGW da acceso a Internet a las subredes públicas, siempre que las instancias tengan IP pública." }),

  Q(T_IGW,
    { ca: "Quina ruta ha de tindre una subxarxa pública per eixir a Internet?", es: "¿Qué ruta debe tener una subred pública para salir a Internet?" },
    [
      { ca: "0.0.0.0/0 → IGW", es: "0.0.0.0/0 → IGW" },
      { ca: "0.0.0.0/0 → NACL", es: "0.0.0.0/0 → NACL" },
      { ca: "10.0.0.0/16 → SG", es: "10.0.0.0/16 → SG" },
      { ca: "0.0.0.0/0 → Lambda", es: "0.0.0.0/0 → Lambda" }
    ], 0,
    { ca: "La subxarxa pública tindrà una ruta 0.0.0.0/0 → IGW (que apareix com a igw-xxx) per enviar tot el tràfic no local a Internet.", es: "La subred pública tendrá una ruta 0.0.0.0/0 → IGW (que aparece como igw-xxx) para enviar todo el tráfico no local a Internet." }),

  Q(T_IGW,
    { ca: "Què significa la ruta 0.0.0.0/0?", es: "¿Qué significa la ruta 0.0.0.0/0?" },
    [
      { ca: "Una única adreça concreta", es: "Una única dirección concreta" },
      { ca: "La ruta per defecte: qualsevol destí no cobert per altres rutes", es: "La ruta por defecto: cualquier destino no cubierto por otras rutas" },
      { ca: "La xarxa local de la VPC", es: "La red local de la VPC" },
      { ca: "Una ruta només per a IPv6", es: "Una ruta solo para IPv6" }
    ], 1,
    { ca: "0.0.0.0/0 és la ruta per defecte: captura tot el tràfic que no coincideix amb una ruta més específica i l'envia a l'objectiu indicat (IGW, NAT...).", es: "0.0.0.0/0 es la ruta por defecto: captura todo el tráfico que no coincide con una ruta más específica y lo envía al objetivo indicado (IGW, NAT...)." }),

  Q(T_IGW,
    { ca: "Quina funció té una taula de rutes (route table)?", es: "¿Qué función tiene una tabla de rutas (route table)?" },
    [
      { ca: "Filtrar paquets per port", es: "Filtrar paquetes por puerto" },
      { ca: "Determinar per on ix el tràfic segons el destí", es: "Determinar por dónde sale el tráfico según el destino" },
      { ca: "Emmagatzemar fitxers", es: "Almacenar archivos" },
      { ca: "Gestionar usuaris IAM", es: "Gestionar usuarios IAM" }
    ], 1,
    { ca: "Les taules de rutes defineixen quin destí (CIDR) es dirigeix a quin objectiu (porta d'eixida). Són semblants a l'enrutament d'una xarxa tradicional.", es: "Las tablas de rutas definen qué destino (CIDR) se dirige a qué objetivo (puerta de salida). Son similares al enrutamiento de una red tradicional." }),

  Q(T_IGW,
    { ca: "Cada subxarxa d'AWS té associada...", es: "Cada subred de AWS tiene asociada..." },
    [
      { ca: "Una taula de rutes", es: "Una tabla de rutas" },
      { ca: "Un usuari IAM propi", es: "Un usuario IAM propio" },
      { ca: "Una instància Lambda", es: "Una instancia Lambda" },
      { ca: "Una Elastic IP obligatòria", es: "Una Elastic IP obligatoria" }
    ], 0,
    { ca: "Cada subxarxa té associada una taula de rutes que determina com trau el tràfic, de manera semblant a l'enrutament tradicional.", es: "Cada subred tiene asociada una tabla de rutas que determina cómo saca el tráfico, de forma similar al enrutamiento tradicional." }),

  Q(T_IGW,
    { ca: "Quin objectiu tindria la ruta 0.0.0.0/0 en una subxarxa privada que ha d'eixir a Internet?", es: "¿Qué objetivo tendría la ruta 0.0.0.0/0 en una subred privada que debe salir a Internet?" },
    [
      { ca: "L'Internet Gateway", es: "El Internet Gateway" },
      { ca: "La NAT Gateway (nat-xxx)", es: "La NAT Gateway (nat-xxx)" },
      { ca: "El Security Group", es: "El Security Group" },
      { ca: "La NACL", es: "La NACL" }
    ], 1,
    { ca: "La subxarxa privada tindrà una ruta 0.0.0.0/0 → NAT Gateway (apareix com a nat-xxx), que alhora està en una subxarxa pública amb accés a l'IGW.", es: "La subred privada tendrá una ruta 0.0.0.0/0 → NAT Gateway (aparece como nat-xxx), que a su vez está en una subred pública con acceso al IGW." }),

  Q(T_IGW,
    { ca: "Quin component apareix normalment com a \"igw-xxx\" en una taula de rutes?", es: "¿Qué componente aparece normalmente como \"igw-xxx\" en una tabla de rutas?" },
    [
      { ca: "Una NAT Gateway", es: "Una NAT Gateway" },
      { ca: "Un Internet Gateway", es: "Un Internet Gateway" },
      { ca: "Un Security Group", es: "Un Security Group" },
      { ca: "Una instància EC2", es: "Una instancia EC2" }
    ], 1,
    { ca: "Els Internet Gateways s'identifiquen amb el prefix igw- en les taules de rutes; les NAT Gateways amb nat-.", es: "Los Internet Gateways se identifican con el prefijo igw- en las tablas de rutas; las NAT Gateways con nat-." }),

  Q(T_IGW,
    { ca: "La VPC per defecte d'AWS necessita que creem manualment l'IGW?", es: "¿La VPC por defecto de AWS necesita que creemos manualmente el IGW?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No, ja el té adjunt", es: "No, ya lo tiene adjunto" },
      { ca: "Només si usem Lambda", es: "Solo si usamos Lambda" },
      { ca: "Només si és una subxarxa privada", es: "Solo si es una subred privada" }
    ], 1,
    { ca: "La VPC per defecte ja té un Internet Gateway adjunt; no l'hem de crear explícitament, però sí que hi és.", es: "La VPC por defecto ya tiene un Internet Gateway adjunto; no tenemos que crearlo explícitamente, pero sí que está." }),

  Q(T_IGW,
    { ca: "Tindre un IGW adjunt a la VPC garanteix que una instància tinga Internet?", es: "¿Tener un IGW adjunto a la VPC garantiza que una instancia tenga Internet?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No: cal ruta, IP pública i regles de seguretat adequades", es: "No: hace falta ruta, IP pública y reglas de seguridad adecuadas" },
      { ca: "Sí, si la instància és t2.micro", es: "Sí, si la instancia es t2.micro" },
      { ca: "No, perquè l'IGW no serveix per a res", es: "No, porque el IGW no sirve para nada" }
    ], 1,
    { ca: "Que l'IGW permeta la comunicació no vol dir que la instància la tinga: cal la ruta, una IP pública i que les regles de seguretat ho permeten.", es: "Que el IGW permita la comunicación no significa que la instancia la tenga: hace falta la ruta, una IP pública y que las reglas de seguridad lo permitan." }),

  Q(T_IGW,
    { ca: "Una subxarxa privada pot tindre només rutes internes?", es: "¿Una subred privada puede tener solo rutas internas?" },
    [
      { ca: "No, és obligatori tindre 0.0.0.0/0", es: "No, es obligatorio tener 0.0.0.0/0" },
      { ca: "Sí, pot tindre només rutes cap a altres subxarxes", es: "Sí, puede tener solo rutas hacia otras subredes" },
      { ca: "No, les rutes internes no existeixen", es: "No, las rutas internas no existen" },
      { ca: "Només si té una Elastic IP", es: "Solo si tiene una Elastic IP" }
    ], 1,
    { ca: "La subxarxa privada pot tindre només rutes internes cap a altres subxarxes. Si necessita eixir a Internet, s'hi afig una ruta cap a la NAT Gateway.", es: "La subred privada puede tener solo rutas internas hacia otras subredes. Si necesita salir a Internet, se añade una ruta hacia la NAT Gateway." }),

  Q(T_IGW,
    { ca: "Quina relació hi ha entre IGW i taules de rutes?", es: "¿Qué relación hay entre IGW y tablas de rutas?" },
    [
      { ca: "Cap", es: "Ninguna" },
      { ca: "La taula de rutes indica que el tràfic cap a Internet va a l'IGW", es: "La tabla de rutas indica que el tráfico hacia Internet va al IGW" },
      { ca: "L'IGW substitueix la taula de rutes", es: "El IGW sustituye la tabla de rutas" },
      { ca: "La taula de rutes crea l'IGW", es: "La tabla de rutas crea el IGW" }
    ], 1,
    { ca: "L'IGW és l'objectiu; la taula de rutes és la que dirigeix el tràfic cap a ell amb una entrada com 0.0.0.0/0 → igw-xxx.", es: "El IGW es el objetivo; la tabla de rutas es la que dirige el tráfico hacia él con una entrada como 0.0.0.0/0 → igw-xxx." }),

  Q(T_IGW,
    { ca: "Una subxarxa amb ruta 0.0.0.0/0 → igw-xxx i instàncies amb IP pública és...", es: "Una subred con ruta 0.0.0.0/0 → igw-xxx e instancias con IP pública es..." },
    [
      { ca: "Una subxarxa privada", es: "Una subred privada" },
      { ca: "Una subxarxa pública", es: "Una subred pública" },
      { ca: "Una VPC", es: "Una VPC" },
      { ca: "Una NACL", es: "Una NACL" }
    ], 1,
    { ca: "És la definició de subxarxa pública: ruta cap a l'IGW i instàncies amb IP pública que poden comunicar-se amb Internet.", es: "Es la definición de subred pública: ruta hacia el IGW e instancias con IP pública que pueden comunicarse con Internet." }),

  Q(T_IGW,
    { ca: "Quin element NO participa en l'enrutament del tràfic d'una subxarxa?", es: "¿Qué elemento NO participa en el enrutamiento del tráfico de una subred?" },
    [
      { ca: "La taula de rutes", es: "La tabla de rutas" },
      { ca: "L'Internet Gateway", es: "El Internet Gateway" },
      { ca: "La NAT Gateway", es: "La NAT Gateway" },
      { ca: "El nom de la instància EC2", es: "El nombre de la instancia EC2" }
    ], 3,
    { ca: "El nom (tag) d'una instància no intervé en l'enrutament. Decideixen les taules de rutes i els objectius com IGW o NAT Gateway.", es: "El nombre (tag) de una instancia no interviene en el enrutamiento. Deciden las tablas de rutas y los objetivos como IGW o NAT Gateway." }),

  Q(T_IGW,
    { ca: "Què cal configurar a més de l'IGW perquè una instància de subxarxa pública arribe a Internet?", es: "¿Qué hay que configurar además del IGW para que una instancia de subred pública llegue a Internet?" },
    [
      { ca: "Res més", es: "Nada más" },
      { ca: "Ruta per defecte, IP pública i regles d'entrada/eixida permeses", es: "Ruta por defecto, IP pública y reglas de entrada/salida permitidas" },
      { ca: "Només una NACL", es: "Solo una NACL" },
      { ca: "Un usuari IAM", es: "Un usuario IAM" }
    ], 1,
    { ca: "Cal la ruta 0.0.0.0/0 → IGW, una IP pública a la instància i que el Security Group i la NACL permeten el tràfic necessari.", es: "Hace falta la ruta 0.0.0.0/0 → IGW, una IP pública en la instancia y que el Security Group y la NACL permitan el tráfico necesario." }),

  Q(T_IGW,
    { ca: "La ruta 0.0.0.0/0 → IGW s'aplica a...", es: "La ruta 0.0.0.0/0 → IGW se aplica a..." },
    [
      { ca: "Totes les subxarxes de la VPC automàticament", es: "Todas las subredes de la VPC automáticamente" },
      { ca: "La subxarxa associada a eixa taula de rutes", es: "La subred asociada a esa tabla de rutas" },
      { ca: "Només a les instàncies amb Lambda", es: "Solo a las instancias con Lambda" },
      { ca: "Només a la VPC per defecte", es: "Solo a la VPC por defecto" }
    ], 1,
    { ca: "La ruta s'aplica a la subxarxa que té associada eixa taula de rutes. Cada subxarxa pot tindre una taula diferent.", es: "La ruta se aplica a la subred que tiene asociada esa tabla de rutas. Cada subred puede tener una tabla diferente." })
);
