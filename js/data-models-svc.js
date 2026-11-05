/* Tema: Models de servei (IaaS, PaaS, SaaS) */
QUESTIONS.push(
  Q(T_MODELS_SVC,
    { ca: "Segons què es divideixen els models de servei al núvol?", es: "¿Según qué se dividen los modelos de servicio en la nube?" },
    [
      { ca: "Segons el preu", es: "Según el precio" },
      { ca: "Segons el nivell de control i responsabilitat de l'usuari", es: "Según el nivel de control y responsabilidad del usuario" },
      { ca: "Segons la regió geogràfica", es: "Según la región geográfica" },
      { ca: "Segons el sistema operatiu", es: "Según el sistema operativo" }
    ], 1,
    { ca: "Els models IaaS, PaaS i SaaS es distingeixen pel nivell de control i responsabilitat que té l'usuari.", es: "Los modelos IaaS, PaaS y SaaS se distinguen por el nivel de control y responsabilidad que tiene el usuario." }),

  Q(T_MODELS_SVC,
    { ca: "Què ofereix IaaS?", es: "¿Qué ofrece IaaS?" },
    [
      { ca: "Aplicacions llestes per utilitzar", es: "Aplicaciones listas para utilizar" },
      { ca: "Infraestructura virtualitzada: servidors, discos, xarxes, etc.", es: "Infraestructura virtualizada: servidores, discos, redes, etc." },
      { ca: "Una plataforma de codi propietat", es: "Una plataforma de código propietaria" },
      { ca: "Un buscador d'aplicacions", es: "Un buscador de aplicaciones" }
    ], 1,
    { ca: "IaaS ofereix infraestructura virtualitzada: servidors, discos, xarxes, etc.", es: "IaaS ofrece infraestructura virtualizada: servidores, discos, redes, etc." }),

  Q(T_MODELS_SVC,
    { ca: "En IaaS, què controla l'usuari?", es: "En IaaS, ¿qué controla el usuario?" },
    [
      { ca: "Només l'ús del servei", es: "Solo el uso del servicio" },
      { ca: "Només el codi de l'aplicació", es: "Solo el código de la aplicación" },
      { ca: "El sistema operatiu, aplicacions, configuracions i actualitzacions", es: "El sistema operativo, aplicaciones, configuraciones y actualizaciones" },
      { ca: "Res, tot ho porta el proveïdor", es: "Nada, todo lo lleva el proveedor" }
    ], 2,
    { ca: "En IaaS, l'usuari controla el sistema operatiu, les aplicacions, les configuracions i les actualitzacions.", es: "En IaaS, el usuario controla el sistema operativo, las aplicaciones, las configuraciones y las actualizaciones." }),

  Q(T_MODELS_SVC,
    { ca: "Quins són exemples d'IaaS en AWS?", es: "¿Cuáles son ejemplos de IaaS en AWS?" },
    [
      { ca: "Elastic Beanstalk i Lambda", es: "Elastic Beanstalk y Lambda" },
      { ca: "WorkMail i Chime", es: "WorkMail y Chime" },
      { ca: "EC2, EBS, VPC i Elastic Load Balancing", es: "EC2, EBS, VPC y Elastic Load Balancing" },
      { ca: "Google Docs i Dropbox", es: "Google Docs y Dropbox" }
    ], 2,
    { ca: "Exemples IaaS en AWS: EC2, EBS, VPC i Elastic Load Balancing.", es: "Ejemplos IaaS en AWS: EC2, EBS, VPC y Elastic Load Balancing." }),

  Q(T_MODELS_SVC,
    { ca: "Per a qui és ideal IaaS?", es: "¿Para quién es ideal IaaS?" },
    [
      { ca: "Usuari final sense coneixements tècnics", es: "Usuario final sin conocimientos técnicos" },
      { ca: "Administradors de sistemes i desenvolupadors que necessiten control total", es: "Administradores de sistemas y desarrolladores que necesitan control total" },
      { ca: "Una persona que només consulta correu", es: "Una persona que solo consulta correo" },
      { ca: "Una empresa que només veu vídeos", es: "Una empresa que solo ve vídeos" }
    ], 1,
    { ca: "IaaS és ideal per a administradors de sistemes i desenvolupadors que necessiten control total.", es: "IaaS es ideal para administradores de sistemas y desarrolladores que necesitan control total." }),

  Q(T_MODELS_SVC,
    { ca: "Què ofereix PaaS?", es: "¿Qué ofrece PaaS?" },
    [
      { ca: "Una plataforma preparada per executar aplicacions, sense preocupar-se de la infraestructura", es: "Una plataforma preparada para ejecutar aplicaciones, sin preocuparse de la infraestructura" },
      { ca: "Màquines virtuals amb control total del SO", es: "Máquinas virtuales con control total del SO" },
      { ca: "Aplicacions llestes per utilitzar", es: "Aplicaciones listas para utilizar" },
      { ca: "Discos virtualitzats", es: "Discos virtualizados" }
    ], 0,
    { ca: "PaaS ofereix una plataforma preparada per executar aplicacions sense preocupar-se de la infraestructura.", es: "PaaS ofrece una plataforma preparada para ejecutar aplicaciones sin preocuparse de la infraestructura." }),

  Q(T_MODELS_SVC,
    { ca: "En PaaS, què controla l'usuari?", es: "En PaaS, ¿qué controla el usuario?" },
    [
      { ca: "El sistema operatiu", es: "El sistema operativo" },
      { ca: "Només el codi i la configuració de l'aplicació", es: "Solo el código y la configuración de la aplicación" },
      { ca: "Els discos i la xarxa", es: "Los discos y la red" },
      { ca: "Res", es: "Nada" }
    ], 1,
    { ca: "En PaaS, l'usuari només controla el codi i la configuració de l'aplicació.", es: "En PaaS, el usuario solo controla el código y la configuración de la aplicación." }),

  Q(T_MODELS_SVC,
    { ca: "Quins són exemples de PaaS en AWS?", es: "¿Cuáles son ejemplos de PaaS en AWS?" },
    [
      { ca: "Elastic Beanstalk i AWS Lambda (amb matisos)", es: "Elastic Beanstalk y AWS Lambda (con matices)" },
      { ca: "Amazon EC2 i EBS", es: "Amazon EC2 y EBS" },
      { ca: "Amazon WorkMail", es: "Amazon WorkMail" },
      { ca: "Google Docs", es: "Google Docs" }
    ], 0,
    { ca: "Exemples PaaS en AWS: Elastic Beanstalk i AWS Lambda (amb matisos).", es: "Ejemplos PaaS en AWS: Elastic Beanstalk y AWS Lambda (con matices)." }),

  Q(T_MODELS_SVC,
    { ca: "Què ofereix SaaS?", es: "¿Qué ofrece SaaS?" },
    [
      { ca: "Servidors virtualitzats", es: "Servidores virtualizados" },
      { ca: "Una plataforma on només escrius el codi", es: "Una plataforma donde solo escribes el código" },
      { ca: "Aplicacions llestes per utilitzar a través d'Internet", es: "Aplicaciones listas para utilizar a través de Internet" },
      { ca: "Unes màquines sense sistema operatiu", es: "Unas máquinas sin sistema operativo" }
    ], 2,
    { ca: "SaaS ofereix aplicacions llestes per utilitzar a través d'Internet; no cal instal·lar, configurar ni actualitzar res.", es: "SaaS ofrece aplicaciones listas para utilizar a través de Internet; no hace falta instalar, configurar ni actualizar nada." }),

  Q(T_MODELS_SVC,
    { ca: "En SaaS, què controla l'usuari?", es: "En SaaS, ¿qué controla el usuario?" },
    [
      { ca: "El sistema operatiu", es: "El sistema operativo" },
      { ca: "Només l'ús del servei", es: "Solo el uso del servicio" },
      { ca: "El codi de l'aplicació", es: "El código de la aplicación" },
      { ca: "La xarxa", es: "La red" }
    ], 1,
    { ca: "En SaaS, l'usuari només controla l'ús del servei.", es: "En SaaS, el usuario solo controla el uso del servicio." }),

  Q(T_MODELS_SVC,
    { ca: "Quins són exemples de SaaS en AWS?", es: "¿Cuáles son ejemplos de SaaS en AWS?" },
    [
      { ca: "Amazon WorkMail i Amazon Chime", es: "Amazon WorkMail y Amazon Chime" },
      { ca: "Amazon EC2 i EBS", es: "Amazon EC2 y EBS" },
      { ca: "Elastic Beanstalk", es: "Elastic Beanstalk" },
      { ca: "Elastic Load Balancing", es: "Elastic Load Balancing" }
    ], 0,
    { ca: "Exemples SaaS en AWS: Amazon WorkMail i Amazon Chime. Altres SaaS coneguts: Google Docs, Dropbox...", es: "Ejemplos SaaS en AWS: Amazon WorkMail y Amazon Chime. Otros SaaS conocidos: Google Docs, Dropbox..." }),

  Q(T_MODELS_SVC,
    { ca: "Quina és la metàfora de la casa per a IaaS?", es: "¿Cuál es la metáfora de la casa para IaaS?" },
    [
      { ca: "Vas a un hotel amb tot inclòs", es: "Vas a un hotel con todo incluido" },
      { ca: "Llogues una casa moblada", es: "Alquilas una casa amueblada" },
      { ca: "Llogues una casa buida: tu portes mobles, cuines i la neteges", es: "Alquilas una casa vacía: tú pones muebles, cocinas y la limpias" },
      { ca: "Comcrets una casa nova", es: "Compras una casa nueva" }
    ], 2,
    { ca: "Metàfora IaaS: llogues una casa buida i tu portes el mobiliari, cuines i la neteges.", es: "Metáfora IaaS: alquilas una casa vacía y tú pones el mobiliario, cocinas y la limpias." }),

  Q(T_MODELS_SVC,
    { ca: "Quina és la metàfora de la casa per a SaaS?", es: "¿Cuál es la metáfora de la casa para SaaS?" },
    [
      { ca: "Llogues una casa buida", es: "Alquilas una casa vacía" },
      { ca: "Llogues una casa moblada i hi vius", es: "Alquilas una casa amueblada y vives en ella" },
      { ca: "Vas a un hotel amb tot inclòs", es: "Vas a un hotel con todo incluido" },
      { ca: "Comcrets un terreny aband disfruten", es: "Compras un terreno abandonado" }
    ], 2,
    { ca: "Metàfora SaaS: vas a un hotel amb tot inclòs.", es: "Metáfora SaaS: vas a un hotel con todo incluido." }),

  Q(T_MODELS_SVC,
    { ca: "Quina és la metàfora de la casa per a PaaS?", es: "¿Cuál es la metáfora de la casa para PaaS?" },
    [
      { ca: "Llogues una casa buida i la neteges", es: "Alquilas una casa vacía y la limpias" },
      { ca: "Llogues una casa moblada: tu només cuines i vius", es: "Alquilas una casa amueblada: tú solo cocinas y vives" },
      { ca: "Vas a un hotel amb tot inclòs", es: "Vas a un hotel con todo incluido" },
      { ca: "No hi ha metàfora", es: "No hay metáfora" }
    ], 1,
    { ca: "Metàfora PaaS: llogues una casa moblada i tu només cuines i vius.", es: "Metáfora PaaS: alquilas una casa amueblada y tú solo cocinas y vives." })
);
