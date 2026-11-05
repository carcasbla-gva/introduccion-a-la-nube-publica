/* Tema: Introducció a AWS */
QUESTIONS.push(
  Q(T_AWS_INTRO,
    { ca: "Què és AWS?", es: "¿Qué es AWS?" },
    [
      { ca: "Amazon Web Services, el líder mundial en serveis al núvol", es: "Amazon Web Services, el líder mundial en servicios en la nube" },
      { ca: "Una tenda online de mobles", es: "Una tienda online de muebles" },
      { ca: "Un programa d'edició de fotos", es: "Un programa de edición de fotos" },
      { ca: "Una xarxa social d'Amazon", es: "Una red social de Amazon" }
    ], 0,
    { ca: "Amazon Web Services (AWS) és el líder mundial en serveis al núvol, amb milers de milions de dòlars d'infraestructura distribuïda globalment.", es: "Amazon Web Services (AWS) es el líder mundial en servicios en la nube, con miles de millones de dólares de infraestructura distribuida globalmente." }),

  Q(T_AWS_INTRO,
    { ca: "En quin any es va fundar AWS?", es: "¿En qué año se fundó AWS?" },
    [
      { ca: "1994", es: "1994" },
      { ca: "2001", es: "2001" },
      { ca: "2006", es: "2006" },
      { ca: "2010", es: "2010" }
    ], 2,
    { ca: "AWS es va fundar en 2006.", es: "AWS se fundó en 2006." }),

  Q(T_AWS_INTRO,
    { ca: "Quantitat de serveis que ofereix AWS (aprox.)?", es: "¿Cantidad de servicios que ofrece AWS (aprox.)?" },
    [
      { ca: "Més de 20", es: "Más de 20" },
      { ca: "Més de 50", es: "Más de 50" },
      { ca: "Més de 200", es: "Más de 200" },
      { ca: "Més de 1000", es: "Más de 1000" }
    ], 2,
    { ca: "AWS ofereix més de 200 serveis que cobreixen tots els àmbits del desenvolupament informàtic.", es: "AWS ofrece más de 200 servicios que cubren todos los ámbitos del desarrollo informático." }),

  Q(T_AWS_INTRO,
    { ca: "Quins àmbits cobreixen els serveis d'AWS?", es: "¿Qué ámbitos cubren los servicios de AWS?" },
    [
      { ca: "Còpia de seguretat, IA, anàlisi de dades, desplegament web, etc.", es: "Copia de seguridad, IA, análisis de datos, despliegue web, etc." },
      { ca: "Només emmagatzematge", es: "Solo almacenamiento" },
      { ca: "Només màquines virtuals", es: "Solo máquinas virtuales" },
      { ca: "Només bases de dades", es: "Solo bases de datos" }
    ], 0,
    { ca: "Els més de 200 serveis d'AWS cobreixen tots els àmbits: còpia de seguretat, IA, anàlisi de dades, desplegament web, etc.", es: "Los más de 200 servicios de AWS cubren todos los ámbitos: copia de seguridad, IA, análisis de datos, despliegue web, etc." }),

  Q(T_AWS_INTRO,
    { ca: "Quant percentatge dels beneficis d'Amazon prové d'AWS?", es: "¿Qué porcentaje de los beneficios de Amazon proviene de AWS?" },
    [
      { ca: "38,6%", es: "38,6%" },
      { ca: "50%", es: "50%" },
      { ca: "61,4%", es: "61,4%" },
      { ca: "90%", es: "90%" }
    ], 2,
    { ca: "El 61,4% dels beneficis d'Amazon provenen d'AWS; el 38,6% restant prové de la tenda online.", es: "El 61,4% de los beneficios de Amazon provienen de AWS; el 38,6% restante proviene de la tienda online." }),

  Q(T_AWS_INTRO,
    { ca: "De la tenda online d'Amazon, quin percentatge de beneficis prové?", es: "De la tienda online de Amazon, ¿qué porcentaje de beneficios proviene?" },
    [
      { ca: "61,4%", es: "61,4%" },
      { ca: "38,6%", es: "38,6%" },
      { ca: "10%", es: "10%" },
      { ca: "25%", es: "25%" }
    ], 1,
    { ca: "Només el 38,6% dels beneficis provenen de la tenda online; la resta és d'AWS.", es: "Solo el 38,6% de los beneficios provienen de la tienda online; el resto es de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quina és la funció principal d'EC2?", es: "¿Cuál es la función principal de EC2?" },
    [
      { ca: "Emmagatzematge d'objectes", es: "Almacenamiento de objetos" },
      { ca: "Gestió d'usuaris i permisos", es: "Gestión de usuarios y permisos" },
      { ca: "Servidors virtuals", es: "Servidores virtuales" },
      { ca: "Execució de codi sense servidor", es: "Ejecución de código sin servidor" }
    ], 2,
    { ca: "EC2 és el servei de servidors virtuals d'AWS.", es: "EC2 es el servicio de servidores virtuales de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quina és la funció principal de S3?", es: "¿Cuál es la función principal de S3?" },
    [
      { ca: "Servidors virtuals", es: "Servidores virtuales" },
      { ca: "Emmagatzematge d'objectes", es: "Almacenamiento de objetos" },
      { ca: "Bases de dades relacionals", es: "Bases de datos relacionales" },
      { ca: "Gestió d'usuaris i permisos", es: "Gestión de usuarios y permisos" }
    ], 1,
    { ca: "S3 és el servei d'emmagatzematge d'objectes d'AWS.", es: "S3 es el servicio de almacenamiento de objetos de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quina és la funció principal d'IAM?", es: "¿Cuál es la función principal de IAM?" },
    [
      { ca: "Execució de codi sense servidor", es: "Ejecución de código sin servidor" },
      { ca: "Servidors virtuals", es: "Servidores virtuales" },
      { ca: "Emmagatzematge d'objectes", es: "Almacenamiento de objetos" },
      { ca: "Gestió d'usuaris i permisos", es: "Gestión de usuarios y permisos" }
    ], 3,
    { ca: "IAM és el servei de gestió d'usuaris i permisos d'AWS.", es: "IAM es el servicio de gestión de usuarios y permisos de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quina és la funció principal de RDS?", es: "¿Cuál es la función principal de RDS?" },
    [
      { ca: "Bases de dades relacionals", es: "Bases de datos relacionales" },
      { ca: "Servidors virtuals", es: "Servidores virtuales" },
      { ca: "Gestió d'usuaris", es: "Gestión de usuarios" },
      { ca: "Emmagatzematge d'objectes", es: "Almacenamiento de objetos" }
    ], 0,
    { ca: "RDS és el servei de bases de dades relacionals d'AWS.", es: "RDS es el servicio de bases de datos relacionales de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quina és la funció principal de Lambda?", es: "¿Cuál es la función principal de Lambda?" },
    [
      { ca: "Emmagatzematge d'objectes", es: "Almacenamiento de objetos" },
      { ca: "Execució de codi sense servidor", es: "Ejecución de código sin servidor" },
      { ca: "Bases de dades relacionals", es: "Bases de datos relacionales" },
      { ca: "Servidors virtuals", es: "Servidores virtuales" }
    ], 1,
    { ca: "Lambda és el servei d'execució de codi sense servidor (serverless) d'AWS.", es: "Lambda es el servicio de ejecución de código sin servidor (serverless) de AWS." }),

  Q(T_AWS_INTRO,
    { ca: "Quines empreses utilitzen AWS al seu funcionament diari (segons el material)?", es: "¿Qué empresas utilizan AWS en su funcionamiento diario (según el material)?" },
    [
      { ca: "Només petites tendes locals", es: "Solo pequeñas tiendas locales" },
      { ca: "Netflix, NASA i BMW, entre moltes altres", es: "Netflix, NASA y BMW, entre muchas otras" },
      { ca: "Res no utilitza AWS", es: "Nadie utiliza AWS" },
      { ca: "Només empreses de videojocs", es: "Solo empresas de videojuegos" }
    ], 1,
    { ca: "Netflix, NASA, BMW i moltes start-ups utilitzen AWS per al seu funcionament diari.", es: "Netflix, NASA, BMW y muchas start-ups utilizan AWS para su funcionamiento diario." }),

  Q(T_AWS_INTRO,
    { ca: "Per buscar ràpidament un servei d'AWS a la consola (per exemple EC2), què utilitzem?", es: "Para buscar rápidamente un servicio de AWS en la consola (por ejemplo EC2), ¿qué utilizamos?" },
    [
      { ca: "El buscador de la part superior de la consola", es: "El buscador de la parte superior de la consola" },
      { ca: "Un motor de cerca extern", es: "Un motor de búsqueda externo" },
      { ca: "No es poden buscar serveis", es: "No se pueden buscar servicios" },
      { ca: "Hem de crear un servei nou", es: "Hay que crear un servicio nuevo" }
    ], 0,
    { ca: "A la part superior de la consola disposem d'un buscador que permet localitzar ràpidament els serveis d'AWS (EC2, S3, RDS...).", es: "En la parte superior de la consola disponemos de un buscador que permite localizar rápidamente los servicios de AWS (EC2, S3, RDS...)." }),

  Q(T_AWS_INTRO,
    { ca: "Millores podem consultar a la part superior de la consola d'AWS a part del buscador?", es: "¿Qué podemos consultar en la parte superior de la consola de AWS aparte del buscador?" },
    [
      { ca: "La regió d'AWS en què treballem i l'idioma de la interfície", es: "La región de AWS en la que trabajamos y el idioma de la interfaz" },
      { ca: "El preu de les accions d'Amazon", es: "El precio de las acciones de Amazon" },
      { ca: "La llista de correus del professor", es: "La lista de correos del profesor" },
      { ca: "Res, només el buscador", es: "Nada, solo el buscador" }
    ], 0,
    { ca: "A la zona superior de la consola també podem consultar la regió d'AWS en què estem treballant i l'idioma de la interfície.", es: "En la zona superior de la consola también podemos consultar la región de AWS en la que estamos trabajando y el idioma de la interfaz." })
);
