/* Tema: NAT Gateway */
QUESTIONS.push(
  Q(T_NAT,
    { ca: "Què és una NAT Gateway?", es: "¿Qué es una NAT Gateway?" },
    [
      { ca: "Un component que permet eixir a Internet a les subxarxes privades sense exposar-les", es: "Un componente que permite salir a Internet a las subredes privadas sin exponerlas" },
      { ca: "Un tipus de Security Group", es: "Un tipo de Security Group" },
      { ca: "Una instància EC2 pública", es: "Una instancia EC2 pública" },
      { ca: "Una taula de rutes", es: "Una tabla de rutas" }
    ], 0,
    { ca: "Una NAT Gateway permet que les instàncies de subxarxes privades accedisquen a Internet, però sense que aquestes siguen accessibles des de fora.", es: "Una NAT Gateway permite que las instancias de subredes privadas accedan a Internet, pero sin que estas sean accesibles desde fuera." }),

  Q(T_NAT,
    { ca: "En quina subxarxa s'ubica una NAT Gateway?", es: "¿En qué subred se ubica una NAT Gateway?" },
    [
      { ca: "En una subxarxa privada", es: "En una subred privada" },
      { ca: "En una subxarxa pública", es: "En una subred pública" },
      { ca: "Fora de la VPC", es: "Fuera de la VPC" },
      { ca: "Dins d'un bucket S3", es: "Dentro de un bucket S3" }
    ], 1,
    { ca: "La NAT Gateway s'ubica dins d'una subxarxa pública i utilitza una Elastic IP per identificar-se davant d'Internet.", es: "La NAT Gateway se ubica dentro de una subred pública y utiliza una Elastic IP para identificarse ante Internet." }),

  Q(T_NAT,
    { ca: "Quin tipus de tràfic permet la NAT Gateway?", es: "¿Qué tipo de tráfico permite la NAT Gateway?" },
    [
      { ca: "Bidireccional: Internet pot iniciar connexions cap a la instància privada", es: "Bidireccional: Internet puede iniciar conexiones hacia la instancia privada" },
      { ca: "Unidireccional: la instància privada pot eixir, però Internet no pot iniciar connexions cap a ella", es: "Unidireccional: la instancia privada puede salir, pero Internet no puede iniciar conexiones hacia ella" },
      { ca: "Només tràfic intern de la VPC", es: "Solo tráfico interno de la VPC" },
      { ca: "Només tràfic SSH", es: "Solo tráfico SSH" }
    ], 1,
    { ca: "La NAT Gateway dona accés a Internet de forma unidireccional: les instàncies poden eixir, però Internet no pot iniciar connexions cap a elles.", es: "La NAT Gateway da acceso a Internet de forma unidireccional: las instancias pueden salir, pero Internet no puede iniciar conexiones hacia ellas." }),

  Q(T_NAT,
    { ca: "Quin component necessita la NAT Gateway per a identificar-se davant d'Internet?", es: "¿Qué componente necesita la NAT Gateway para identificarse ante Internet?" },
    [
      { ca: "Una Elastic IP", es: "Una Elastic IP" },
      { ca: "Una NACL", es: "Una NACL" },
      { ca: "Un usuari IAM", es: "Un usuario IAM" },
      { ca: "Una funció Lambda", es: "Una función Lambda" }
    ], 0,
    { ca: "La NAT Gateway utilitza una Elastic IP (IP pública estàtica) per identificar-se davant d'Internet quan fa la traducció d'adreces.", es: "La NAT Gateway utiliza una Elastic IP (IP pública estática) para identificarse ante Internet cuando hace la traducción de direcciones." }),

  Q(T_NAT,
    { ca: "Quina ruta ha de tindre la subxarxa privada per eixir a Internet via NAT?", es: "¿Qué ruta debe tener la subred privada para salir a Internet vía NAT?" },
    [
      { ca: "0.0.0.0/0 → IGW", es: "0.0.0.0/0 → IGW" },
      { ca: "0.0.0.0/0 → NAT Gateway (nat-xxx)", es: "0.0.0.0/0 → NAT Gateway (nat-xxx)" },
      { ca: "10.0.0.0/16 → NACL", es: "10.0.0.0/16 → NACL" },
      { ca: "0.0.0.0/0 → Elastic IP", es: "0.0.0.0/0 → Elastic IP" }
    ], 1,
    { ca: "La subxarxa privada tindrà una ruta 0.0.0.0/0 → NAT Gateway (nat-xxx), mentre que la pública té 0.0.0.0/0 → IGW.", es: "La subred privada tendrá una ruta 0.0.0.0/0 → NAT Gateway (nat-xxx), mientras que la pública tiene 0.0.0.0/0 → IGW." }),

  Q(T_NAT,
    { ca: "Per on ix finalment el tràfic de la NAT Gateway cap a Internet?", es: "¿Por dónde sale finalmente el tráfico de la NAT Gateway hacia Internet?" },
    [
      { ca: "Directament, sense passar per cap component", es: "Directamente, sin pasar por ningún componente" },
      { ca: "A través de l'Internet Gateway de la VPC", es: "A través del Internet Gateway de la VPC" },
      { ca: "A través d'un Security Group", es: "A través de un Security Group" },
      { ca: "A través de S3", es: "A través de S3" }
    ], 1,
    { ca: "La NAT Gateway fa la traducció i envia el tràfic cap a fora a través de l'IGW, ja que està ubicada en una subxarxa pública amb accés a Internet.", es: "La NAT Gateway hace la traducción y envía el tráfico hacia fuera a través del IGW, ya que está ubicada en una subred pública con acceso a Internet." }),

  Q(T_NAT,
    { ca: "Quin és un exemple pràctic d'ús de la NAT Gateway?", es: "¿Cuál es un ejemplo práctico de uso de la NAT Gateway?" },
    [
      { ca: "Que una EC2 privada instal·le MySQL des d'Internet sense quedar exposada", es: "Que una EC2 privada instale MySQL desde Internet sin quedar expuesta" },
      { ca: "Que Internet accedisca directament a la base de dades privada", es: "Que Internet acceda directamente a la base de datos privada" },
      { ca: "Crear usuaris IAM", es: "Crear usuarios IAM" },
      { ca: "Fer una còpia de seguretat d'un bucket", es: "Hacer una copia de seguridad de un bucket" }
    ], 0,
    { ca: "És útil quan un servidor privat ha de descarregar actualitzacions, paquets o programes (per exemple instal·lar MySQL) sense exposar-se a Internet amb una IP pública.", es: "Es útil cuando un servidor privado debe descargar actualizaciones, paquetes o programas (por ejemplo instalar MySQL) sin exponerse a Internet con una IP pública." }),

  Q(T_NAT,
    { ca: "Les instàncies d'una subxarxa privada que usen NAT necessiten IP pública pròpia?", es: "¿Las instancias de una subred privada que usan NAT necesitan IP pública propia?" },
    [
      { ca: "Sí, obligatòriament", es: "Sí, obligatoriamente" },
      { ca: "No, la NAT Gateway fa la traducció per elles", es: "No, la NAT Gateway hace la traducción por ellas" },
      { ca: "Només si són Windows", es: "Solo si son Windows" },
      { ca: "Només si tenen Lambda", es: "Solo si tienen Lambda" }
    ], 1,
    { ca: "No necessiten IP pública pròpia: la NAT Gateway tradueix les adreces i elles poden eixir a Internet mantenint-se inaccessibles des de l'exterior.", es: "No necesitan IP pública propia: la NAT Gateway traduce las direcciones y ellas pueden salir a Internet manteniéndose inaccesibles desde el exterior." }),

  Q(T_NAT,
    { ca: "La NAT Gateway permet que Internet inicie connexions cap a una instància privada?", es: "¿La NAT Gateway permite que Internet inicie conexiones hacia una instancia privada?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No, només permet el tràfic d'eixida", es: "No, solo permite el tráfico de salida" },
      { ca: "Només pel port 80", es: "Solo por el puerto 80" },
      { ca: "Només si té una NACL", es: "Solo si tiene una NACL" }
    ], 1,
    { ca: "No. La NAT Gateway és unidireccional: les instàncies poden eixir a Internet, però Internet no pot iniciar connexions cap a elles.", es: "No. La NAT Gateway es unidireccional: las instancias pueden salir a Internet, pero Internet no puede iniciar conexiones hacia ellas." }),

  Q(T_NAT,
    { ca: "Quina diferència principal hi ha entre IGW i NAT Gateway?", es: "¿Qué diferencia principal hay entre IGW y NAT Gateway?" },
    [
      { ca: "L'IGW és per a subxarxes privades i la NAT per a públiques", es: "El IGW es para subredes privadas y la NAT para públicas" },
      { ca: "L'IGW dona accés a subxarxes públiques; la NAT dona eixida a privades de forma unidireccional", es: "El IGW da acceso a subredes públicas; la NAT da salida a privadas de forma unidireccional" },
      { ca: "Són exactament iguals", es: "Son exactamente iguales" },
      { ca: "La NAT no té res a veure amb Internet", es: "La NAT no tiene nada que ver con Internet" }
    ], 1,
    { ca: "L'IGW dona accés a Internet a subxarxes públiques (amb IP pública); la NAT Gateway dona accés a subxarxes privades, però de forma unidireccional.", es: "El IGW da acceso a Internet a subredes públicas (con IP pública); la NAT Gateway da acceso a subredes privadas, pero de forma unidireccional." }),

  Q(T_NAT,
    { ca: "Què vol dir NAT?", es: "¿Qué significa NAT?" },
    [
      { ca: "Network Access Table", es: "Network Access Table" },
      { ca: "Network Address Translation", es: "Network Address Translation" },
      { ca: "New AWS Terminal", es: "New AWS Terminal" },
      { ca: "Non-Available Traffic", es: "Non-Available Traffic" }
    ], 1,
    { ca: "NAT significa Network Address Translation: traducció d'adreces de xarxa, que és el que fa la NAT Gateway perquè les instàncies privades puguen eixir a Internet.", es: "NAT significa Network Address Translation: traducción de direcciones de red, que es lo que hace la NAT Gateway para que las instancias privadas puedan salir a Internet." }),

  Q(T_NAT,
    { ca: "En l'exemple de la teoria, quina és la seqüència correcta quan una EC2 privada instal·la MySQL?", es: "En el ejemplo de la teoría, ¿cuál es la secuencia correcta cuando una EC2 privada instala MySQL?" },
    [
      { ca: "EC2 → IGW → NAT → Internet", es: "EC2 → IGW → NAT → Internet" },
      { ca: "EC2 → NAT Gateway → IGW → Internet", es: "EC2 → NAT Gateway → IGW → Internet" },
      { ca: "EC2 → NACL → Internet", es: "EC2 → NACL → Internet" },
      { ca: "EC2 → S3 → Internet", es: "EC2 → S3 → Internet" }
    ], 1,
    { ca: "La petició va de l'EC2 privat a la NAT Gateway (per la ruta 0.0.0.0/0), la NAT l'envia a Internet a través de l'IGW i la resposta torna pel mateix camí.", es: "La petición va de la EC2 privada a la NAT Gateway (por la ruta 0.0.0.0/0), la NAT la envía a Internet a través del IGW y la respuesta vuelve por el mismo camino." }),

  Q(T_NAT,
    { ca: "Quin avantatge de seguretat aporta la NAT Gateway?", es: "¿Qué ventaja de seguridad aporta la NAT Gateway?" },
    [
      { ca: "Cap, és només per velocitat", es: "Ninguna, es solo por velocidad" },
      { ca: "Les instàncies privades no queden exposades directament a Internet", es: "Las instancias privadas no quedan expuestas directamente a Internet" },
      { ca: "Xifra tots els discos", es: "Cifra todos los discos" },
      { ca: "Substitueix el model de responsabilitat compartida", es: "Sustituye el modelo de responsabilidad compartida" }
    ], 1,
    { ca: "Com que les instàncies privades no tenen IP pública ni reben connexions iniciades des de fora, no queden exposades directament a Internet, cosa que millora la seguretat.", es: "Como las instancias privadas no tienen IP pública ni reciben conexiones iniciadas desde fuera, no quedan expuestas directamente a Internet, lo que mejora la seguridad." }),

  Q(T_NAT,
    { ca: "La NAT Gateway forma part de la subxarxa pública o privada?", es: "¿La NAT Gateway forma parte de la subred pública o privada?" },
    [
      { ca: "Privada, sempre", es: "Privada, siempre" },
      { ca: "Pública, però dona servei a les privades", es: "Pública, pero da servicio a las privadas" },
      { ca: "De les dues alhora", es: "De las dos a la vez" },
      { ca: "De cap", es: "De ninguna" }
    ], 1,
    { ca: "La NAT Gateway s'ubica en una subxarxa pública (perquè necessita l'IGW) i dona servei a les instàncies de les subxarxes privades.", es: "La NAT Gateway se ubica en una subred pública (porque necesita el IGW) y da servicio a las instancias de las subredes privadas." }),

  Q(T_NAT,
    { ca: "Quin cost té una NAT Gateway?", es: "¿Qué coste tiene una NAT Gateway?" },
    [
      { ca: "És sempre gratuïta", es: "Es siempre gratuita" },
      { ca: "Té cost mentre existix i pel tràfic processat", es: "Tiene coste mientras existe y por el tráfico procesado" },
      { ca: "Només costa si s'usa Lambda", es: "Solo cuesta si se usa Lambda" },
      { ca: "Costa només el primer mes", es: "Cuesta solo el primer mes" }
    ], 1,
    { ca: "És un recurs de pagament: genera cost mentre està creada i també pel volum de dades que processa. Cal tindre-ho en compte en els laboratoris.", es: "Es un recurso de pago: genera coste mientras está creada y también por el volumen de datos que procesa. Hay que tenerlo en cuenta en los laboratorios." }),

  Q(T_NAT,
    { ca: "Si una subxarxa privada no té ruta cap a la NAT Gateway, què passa?", es: "Si una subred privada no tiene ruta hacia la NAT Gateway, ¿qué pasa?" },
    [
      { ca: "Igualment ix a Internet per l'IGW", es: "Igualmente sale a Internet por el IGW" },
      { ca: "No pot eixir a Internet", es: "No puede salir a Internet" },
      { ca: "Es crea una ruta automàticament", es: "Se crea una ruta automáticamente" },
      { ca: "AWS obri tots els ports", es: "AWS abre todos los puertos" }
    ], 1,
    { ca: "Sense una ruta 0.0.0.0/0 → NAT Gateway, la subxarxa privada no té camí cap a Internet. La ruta és imprescindible.", es: "Sin una ruta 0.0.0.0/0 → NAT Gateway, la subred privada no tiene camino hacia Internet. La ruta es imprescindible." }),

  Q(T_NAT,
    { ca: "Quina afirmació sobre la NAT Gateway és correcta?", es: "¿Qué afirmación sobre la NAT Gateway es correcta?" },
    [
      { ca: "Permet connexions entrants i eixides sense restriccions", es: "Permite conexiones entrantes y salientes sin restricciones" },
      { ca: "Permet eixida a Internet i traduïx les adreces, sense exposar les instàncies privades", es: "Permite salida a Internet y traduce las direcciones, sin exponer las instancias privadas" },
      { ca: "Substituïx l'IGW en les subxarxes públiques", es: "Sustituye al IGW en las subredes públicas" },
      { ca: "Només funciona amb bases de dades RDS", es: "Solo funciona con bases de datos RDS" }
    ], 1,
    { ca: "La NAT Gateway tradueix les adreces de les instàncies privades perquè puguen eixir a Internet, sense que aquestes siguen accessibles des de fora.", es: "La NAT Gateway traduce las direcciones de las instancias privadas para que puedan salir a Internet, sin que estas sean accesibles desde fuera." }),

  Q(T_NAT,
    { ca: "Una NAT Gateway pot estar en la mateixa subxarxa privada que els servidors que l'utilitzen?", es: "¿Una NAT Gateway puede estar en la misma subred privada que los servidores que la utilizan?" },
    [
      { ca: "Sí, sempre", es: "Sí, siempre" },
      { ca: "No, ha d'estar en una subxarxa pública per poder arribar a l'IGW", es: "No, debe estar en una subred pública para poder llegar al IGW" },
      { ca: "Només si és Lambda", es: "Solo si es Lambda" },
      { ca: "Només si té NACL", es: "Solo si tiene NACL" }
    ], 1,
    { ca: "Ha d'estar en una subxarxa pública, perquè necessita una ruta cap a l'IGW per a traure el tràfic cap a Internet.", es: "Debe estar en una subred pública, porque necesita una ruta hacia el IGW para sacar el tráfico hacia Internet." })
);
