/* Tema: Seguretat de xarxa (SG vs NACL) */
QUESTIONS.push(
  Q(T_NET,
    { ca: "Quina és la diferència principal entre un Security Group i una NACL?", es: "¿Cuál es la diferencia principal entre un Security Group y una NACL?" },
    [
      { ca: "Només la NACL és stateful", es: "Solo la NACL es stateful" },
      { ca: "El SG protegeix el recurs (stateful, només ALLOW) i la NACL filtra a escala de subnet (stateless, ALLOW i DENY)", es: "El SG protege el recurso (stateful, solo ALLOW) y la NACL filtra a escala de subnet (stateless, ALLOW y DENY)" },
      { ca: "Només el SG pot bloquejar IPs explícitament", es: "Solo el SG puede bloquear IPs explícitamente" },
      { ca: "Els dos són el mateix però amb noms diferents", es: "Ambos son lo mismo pero con nombres diferentes" }
    ], 1,
    { ca: "El SG s'aplica al recurs, és stateful i només té regles ALLOW. La NACL s'aplica a la subnet, és stateless i permet ALLOW i DENY.", es: "El SG se aplica al recurso, es stateful y solo tiene reglas ALLOW. La NACL se aplica a la subnet, es stateless y permite ALLOW y DENY." }),

  Q(T_NET,
    { ca: "Si el Security Group permet HTTP però la NACL bloqueja el trànsit, què passa?", es: "Si el Security Group permite HTTP pero la NACL bloqueja el tráfico, ¿qué pasa?" },
    [
      { ca: "La web és accessible perquè el SG és l'únic que importa", es: "La web es accesible porque el SG es lo único que importa" },
      { ca: "La web no serà accessible; cal superar els dos controls", es: "La web no será accesible; hay que superar los dos controles" },
      { ca: "La NACL s'ignora perquè el SG té prioritat", es: "La NACL se ignora porque el SG tiene prioridad" },
      { ca: "Només funciona el SSH", es: "Solo funciona el SSH" }
    ], 1,
    { ca: "Els dos mecanismes actuen simultàniament. Si algun dels dos bloqueja, la petició no arriba a l'aplicació.", es: "Los dos mecanismos actúan simultáneamente. Si alguno de los dos bloqueja, la petición no llega a la aplicación." }),

  Q(T_NET,
    { ca: "Quin mecanisme recomana AWS com a control principal per a l'accés als recursos?", es: "¿Qué mecanismo recomienda AWS como control principal para el acceso a los recursos?" },
    [
      { ca: "Només les NACLs", es: "Solo las NACLs" },
      { ca: "Només els Security Groups", es: "Solo los Security Groups" },
      { ca: "Security Groups com a principal i NACLs com a capa addicional", es: "Security Groups como principal y NACLs como capa adicional" },
      { ca: "Cap dels dos", es: "Ninguno de los dos" }
    ], 2,
    { ca: "AWS recomana els Security Groups com a mecanisme principal i les NACLs quan calga un control addicional de xarxa a escala de subnet.", es: "AWS recomienda los Security Groups como mecanismo principal y las NACLs cuando se necesite un control adicional de red a escala de subnet." }),

  Q(T_NET,
    { ca: "Què cal perquè una petició web arribe a un servidor Apache a EC2?", es: "¿Qué se necesita para que una petición web llegue a un servidor Apache en EC2?" },
    [
      { ca: "Només que el SG permet HTTP", es: "Solo que el SG permita HTTP" },
      { ca: "Només que la NACL permet HTTP", es: "Solo que la NACL permita HTTP" },
      { ca: "Que SG i NACL ho permetin, i que hi haja connectivitat (IP pública, rutes, Internet Gateway si cal)", es: "Que SG y NACL lo permitan, y que haya conectividad (IP pública, rutas, Internet Gateway si es necesario)" },
      { ca: "Només una IP pública", es: "Solo una IP pública" }
    ], 2,
    { ca: "La petició ha de superar els controls de xarxa (SG i NACL) i necessita connectivitat: IP pública, rutes adequades i Internet Gateway quan correspongui.", es: "La petición debe superar los controles de red (SG y NACL) y necesita conectividad: IP pública, rutas adecuadas e Internet Gateway cuando corresponda." }),

  Q(T_NET,
    { ca: "On s'aplica un Security Group?", es: "¿Dónde se aplica un Security Group?" },
    [
      { ca: "Al recurs o la interfície de xarxa", es: "Al recurso o la interfaz de red" },
      { ca: "A la subnet", es: "A la subnet" },
      { ca: "A la regió", es: "A la región" },
      { ca: "A Internet", es: "A Internet" }
    ], 0,
    { ca: "El SG s'aplica al recurs o la interfície de xarxa; la NACL a la subnet.", es: "El SG se aplica al recurso o la interfaz de red; la NACL a la subnet." }),

  Q(T_NET,
    { ca: "Quant a l'estat, com és cada mecanisme?", es: "En cuanto al estado, ¿cómo es cada mecanismo?" },
    [
      { ca: "SG stateful i NACL stateless", es: "SG stateful y NACL stateless" },
      { ca: "SG stateless i NACL stateful", es: "SG stateless y NACL stateful" },
      { ca: "Els dos stateful", es: "Ambos stateful" },
      { ca: "Els dos stateless", es: "Ambos stateless" }
    ], 0,
    { ca: "El Security Group és stateful i la Network ACL és stateless.", es: "El Security Group es stateful y la Network ACL es stateless." }),

  Q(T_NET,
    { ca: "Quines regles estan disponibles en un Security Group?", es: "¿Qué reglas están disponibles en un Security Group?" },
    [
      { ca: "Només ALLOW", es: "Solo ALLOW" },
      { ca: "ALLOW i DENY", es: "ALLOW y DENY" },
      { ca: "Només DENY", es: "Solo DENY" },
      { ca: "Cap", es: "Ninguna" }
    ], 0,
    { ca: "Els Security Groups només tenen regles ALLOW; les NACLs tenen ALLOW i DENY.", es: "Los Security Groups solo tienen reglas ALLOW; las NACLs tienen ALLOW y DENY." }),

  Q(T_NET,
    { ca: "Com es permet el trànsit de resposta en un Security Group?", es: "¿Cómo se permite el tráfico de respuesta en un Security Group?" },
    [
      { ca: "Cal una regla d'eixida específica sempre", es: "Hace falta una regla de salida específica siempre" },
      { ca: "Es permet automàticament per a connexions autoritzades", es: "Se permite automáticamente para conexiones autorizadas" },
      { ca: "No es permet mai", es: "No se permite nunca" },
      { ca: "El permet la NACL", es: "Lo permite la NACL" }
    ], 1,
    { ca: "En un SG, el trànsit de resposta es permet automàticament per a connexions autoritzades (stateful).", es: "En un SG, el tráfico de respuesta se permite automáticamente para conexiones autorizadas (stateful)." }),

  Q(T_NET,
    { ca: "Com es permet el trànsit de resposta en una NACL?", es: "¿Cómo se permite el tráfico de respuesta en una NACL?" },
    [
      { ca: "Automàticament", es: "Automáticamente" },
      { ca: "Ha d'estar permés per les regles corresponents", es: "Debe estar permitido por las reglas correspondientes" },
      { ca: "No es pot permetre", es: "No se puede permitir" },
      { ca: "Ho fa el SG", es: "Lo hace el SG" }
    ], 1,
    { ca: "Com que la NACL és stateless, el trànsit de resposta ha d'estar permés per les regles corresponents.", es: "Como la NACL es stateless, el tráfico de respuesta debe estar permitido por las reglas correspondientes." }),

  Q(T_NET,
    { ca: "Com s'ordenen les regles en un Security Group i en una NACL?", es: "¿Cómo se ordenan las reglas en un Security Group y en una NACL?" },
    [
      { ca: "El SG usa prioritat numèrica i la NACL no", es: "El SG usa prioridad numérica y la NACL no" },
      { ca: "El SG no usa prioritat numèrica; la NACL s'avalua de menor a major número", es: "El SG no usa prioridad numérica; la NACL se evalúa de menor a mayor número" },
      { ca: "Els dos usen prioritat numèrica", es: "Ambos usan prioridad numérica" },
      { ca: "Els dos s'avaluen a l'atzar", es: "Ambos se evalúan al azar" }
    ], 1,
    { ca: "El SG no utilitza una prioritat numèrica entre regles; la NACL s'avalua de menor a major número.", es: "El SG no utiliza una prioridad numérica entre reglas; la NACL se evalúa de menor a mayor número." }),

  Q(T_NET,
    { ca: "Quin és l'ús habitual de cada mecanisme?", es: "¿Cuál es el uso habitual de cada mecanismo?" },
    [
      { ca: "SG: filtres generals de subnet; NACL: accés a recursos concrets", es: "SG: filtros generales de subnet; NACL: acceso a recursos concretos" },
      { ca: "SG: accés a recursos concrets; NACL: filtres generals de subnet", es: "SG: acceso a recursos concretos; NACL: filtros generales de subnet" },
      { ca: "Els dos fan exactament el mateix", es: "Ambos hacen exactamente lo mismo" },
      { ca: "Cap dels dos s'usa", es: "Ninguno de los dos se usa" }
    ], 1,
    { ca: "Els SGs s'usen per controlar l'accés a recursos concrets; les NACLs per aplicar filtres generals a una subnet.", es: "Los SGs se usan para controlar el acceso a recursos concretos; las NACLs para aplicar filtros generales a una subnet." }),

  Q(T_NET,
    { ca: "Els Security Groups i les NACLs són alternatives excloents?", es: "¿Los Security Groups y las NACLs son alternativas excluyentes?" },
    [
      { ca: "Sí, cal triar un", es: "Sí, hay que elegir uno" },
      { ca: "No, poden actuar simultàniament com a capes complementàries", es: "No, pueden actuar simultáneamente como capas complementarias" },
      { ca: "Només en entorns grans", es: "Solo en entornos grandes" },
      { ca: "Només si no hi ha VPC", es: "Solo si no hay VPC" }
    ], 1,
    { ca: "No són excloents: poden actuar simultàniament com a capes complementàries de seguretat.", es: "No son excluyentes: pueden actuar simultáneamente como capas complementarias de seguridad." }),

  Q(T_NET,
    { ca: "Si la NACL permet HTTP però el Security Group no l'autoritza, què passa?", es: "Si la NACL permite HTTP pero el Security Group no lo autoriza, ¿qué pasa?" },
    [
      { ca: "La petició arriba igualment", es: "La petición llega igualmente" },
      { ca: "La petició no arriba a l'aplicació", es: "La petición no llega a la aplicación" },
      { ca: "El SG s'ignora", es: "El SG se ignora" },
      { ca: "S'obre el port automàticament", es: "Se abre el puerto automáticamente" }
    ], 1,
    { ca: "Si la NACL permet però el SG no autoritza, la petició tampoc no arriba a l'aplicació.", es: "Si la NACL permite pero el SG no autoriza, la petición tampoco llega a la aplicación." }),

  Q(T_NET,
    { ca: "Quina és una bona pràctica de seguretat de xarxa?", es: "¿Cuál es una buena práctica de seguridad de red?" },
    [
      { ca: "Obrir tots els ports per comoditat", es: "Abrir todos los puertos por comodidad" },
      { ca: "Aplicar el principi de mínim privilegi i obrir només els ports necessaris", es: "Aplicar el principio de mínimo privilegio y abrir solo los puertos necesarios" },
      { ca: "No limitar mai per IP", es: "No limitar nunca por IP" },
      { ca: "Barrejar producció i proves", es: "Mezclar producción y pruebas" }
    ], 1,
    { ca: "Cal obrir només els ports estrictament necessaris i limitar per IP sempre que siga possible.", es: "Hay que abrir solo los puertos estrictamente necesarios y limitar por IP siempre que sea posible." }),

  Q(T_NET,
    { ca: "Per què és recomanable separar els entorns de producció i de proves en SGs diferents?", es: "¿Por qué es recomendable separar los entornos de producción y de pruebas en SGs diferentes?" },
    [
      { ca: "Per estalviar diners", es: "Para ahorrar dinero" },
      { ca: "Per aplicar polítiques de seguretat diferents i evitar afectacions creuades", es: "Para aplicar políticas de seguridad diferentes y evitar afectaciones cruzadas" },
      { ca: "Perquè ho exigeix IAM", es: "Porque lo exige IAM" },
      { ca: "No és recomanable", es: "No es recomendable" }
    ], 1,
    { ca: "Separar entorns (producció i proves en SGs diferents) permet polítiques de seguretat diferenciades i evita afectacions creuades.", es: "Separar entornos (producción y pruebas en SGs diferentes) permite políticas de seguridad diferenciadas y evita afectaciones cruzadas." }),

  Q(T_NET,
    { ca: "Amb quines eines es pot monitoritzar la seguretat de xarxa a AWS?", es: "¿Con qué herramientas se puede monitorizar la seguridad de red en AWS?" },
    [
      { ca: "CloudWatch i VPC Flow Logs", es: "CloudWatch y VPC Flow Logs" },
      { ca: "IAM i S3", es: "IAM y S3" },
      { ca: "EC2 i EBS", es: "EC2 y EBS" },
      { ca: "RDP i SSH", es: "RDP y SSH" }
    ], 0,
    { ca: "És una bona pràctica monitoritzar amb CloudWatch i VPC Flow Logs.", es: "Es una buena práctica monitorizar con CloudWatch y VPC Flow Logs." })
);
