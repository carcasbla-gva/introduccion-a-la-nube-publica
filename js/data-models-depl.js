/* Tema: Models de desplegament */
QUESTIONS.push(
  Q(T_MODELS_DEPL,
    { ca: "Què és el núvol públic?", es: "¿Qué es la nube pública?" },
    [
      { ca: "Infraestructura dedicada exclusivament a una sola organització", es: "Infraestructura dedicada exclusivamente a una sola organización" },
      { ca: "Combinació de núvol privat i públic", es: "Combinación de nube privada y pública" },
      { ca: "Recursos allotjats en centres de dades d'un proveïdor compartits entre múltiples clients", es: "Recursos alojados en centros de datos de un proveedor compartidos entre múltiples clientes" },
      { ca: "Una xarxa local dins de la VPC", es: "Una red local dentro de la VPC" }
    ], 2,
    { ca: "Al núvol públic, els recursos s'allotgen en centres de dades d'un proveïdor (com AWS o Azure) i es comparteixen entre múltiples clients.", es: "En la nube pública, los recursos se alojan en centros de datos de un proveedor (como AWS o Azure) y se comparten entre múltiples clientes." }),

  Q(T_MODELS_DEPL,
    { ca: "Quins són avantatges del núvol públic?", es: "¿Cuáles son ventajas de la nube pública?" },
    [
      { ca: "Costos més alts i escalabilitat limitada", es: "Costos más altos y escalabilidad limitada" },
      { ca: "Menor cost inicial, escalabilitat immediata i manteniment a càrrec del proveïdor", es: "Menor costo inicial, escalabilidad inmediata y mantenimiento a cargo del proveedor" },
      { ca: "Més control directe i privacitat", es: "Más control directo y privacidad" },
      { ca: "No requereix connexió a Internet", es: "No requiere conexión a Internet" }
    ], 1,
    { ca: "Avantatges del núvol públic: menor cost inicial, escalabilitat immediata i manteniment a càrrec del proveïdor.", es: "Ventajas de la nube pública: menor costo inicial, escalabilidad inmediata y mantenimiento a cargo del proveedor." }),

  Q(T_MODELS_DEPL,
    { ca: "Quins són desavantatges del núvol públic?", es: "¿Cuáles son desventajas de la nube pública?" },
    [
      { ca: "Costos inicials molt inferiors", es: "Costos iniciales muy inferiores" },
      { ca: "Menys control directe i possibles preocupacions de privadesa en entorns regulats", es: "Menos control directo y posibles preocupaciones de privacidad en entornos regulados" },
      { ca: "Escalabilitat limitada", es: "Escalabilidad limitada" },
      { ca: "Cal garantir el manteniment físic", es: "Hay que garantizar el mantenimiento físico" }
    ], 1,
    { ca: "Desavantatges del núvol públic: menys control directe i possibles preocupacions de privadesa en entorns regulats.", es: "Desventajas de la nube pública: menos control directo y posibles preocupaciones de privacidad en entornos regulados." }),

  Q(T_MODELS_DEPL,
    { ca: "Què és el núvol privat?", es: "¿Qué es la nube privada?" },
    [
      { ca: "Infraestructura dedicada exclusivament a una sola organització", es: "Infraestructura dedicada exclusivamente a una sola organización" },
      { ca: "Serveis compartits entre múltiples clients", es: "Servicios compartidos entre múltiples clientes" },
      { ca: "Una combinació de públic i privat", es: "Una combinación de público y privado" },
      { ca: "Una xarxa del proveïdor oberta a tothom", es: "Una red del proveedor abierta a todos" }
    ], 0,
    { ca: "El núvol privat és una infraestructura dedicada exclusivament a una sola organització.", es: "La nube privada es una infraestructura dedicada exclusivamente a una sola organización." }),

  Q(T_MODELS_DEPL,
    { ca: "On pot allotjar-se el núvol privat?", es: "¿Dónde puede alojarse la nube privada?" },
    [
      { ca: "Només a la casa del client", es: "Solo en la casa del cliente" },
      { ca: "A les instal·lacions de l'empresa o gestionada per un proveïdor en un entorn dedicat", es: "En las instalaciones de la empresa o gestionada por un proveedor en un entorno dedicado" },
      { ca: "Només a AWS", es: "Solo en AWS" },
      { ca: "No pot allotjar-se enlloc", es: "No puede alojarse en ningún sitio" }
    ], 1,
    { ca: "El núvol privat pot estar allotjat a les instal·lacions de l'empresa o gestionat per un proveïdor en un entorn dedicat.", es: "La nube privada puede estar alojada en las instalaciones de la empresa o gestionada por un proveedor en un entorno dedicado." }),

  Q(T_MODELS_DEPL,
    { ca: "Quin és un avantatge del núvol privat?", es: "¿Cuál es una ventaja de la nube privada?" },
    [
      { ca: "Costos més alts", es: "Costos más altos" },
      { ca: "Mai es pot personalitzar", es: "Nunca se puede personalizar" },
      { ca: "Mai pot escalar", es: "Nunca puede escalar" },
      { ca: "Major control, seguretat i personalització", es: "Mayor control, seguridad y personalización" }
    ], 3,
    { ca: "Un avantatge del núvol privat és el major control, seguretat i personalització.", es: "Una ventaja de la nube privada es el mayor control, seguridad y personalización." }),

  Q(T_MODELS_DEPL,
    { ca: "Quins són desavantatges del núvol privat?", es: "¿Cuáles son desventajas de la nube privada?" },
    [
      { ca: "Escalabilitat i flexibilitat limitada; costos més alts", es: "Escalabilidad y flexibilidad limitada; costos más altos" },
      { ca: "Menor seguretat", es: "Menor seguridad" },
      { ca: "Menor control", es: "Menor control" },
      { ca: "No hi ha desavantatges", es: "No hay desventajas" }
    ], 0,
    { ca: "El núvol privat té costos més alts i escalabilitat i flexibilitat més limitades.", es: "La nube privada tiene costos más altos y escalabilidad y flexibilidad más limitadas." }),

  Q(T_MODELS_DEPL,
    { ca: "Què és el núvol híbrid?", es: "¿Qué es la nube híbrida?" },
    [
      { ca: "Servidors només en casa del client", es: "Servidores solo en casa del cliente" },
      { ca: "Una combinació de núvol privat i públic, per aprofitar el millor de cada món", es: "Una combinación de nube privada y pública, para aprovechar lo mejor de cada mundo" },
      { ca: "Serveis exclusius d'AWS", es: "Servicios exclusivos de AWS" },
      { ca: "Una xarxa VPN", es: "Una red VPN" }
    ], 1,
    { ca: "El núvol híbrid és una combinació de núvol privat i públic que permet aprofitar el millor de cada món.", es: "La nube híbrida es una combinación de nube privada y pública que permite aprovechar lo mejor de cada mundo." }),

  Q(T_MODELS_DEPL,
    { ca: "Segons l'exemple del material, què fa una empresa per mantenir dades sensibles i el núvol hybrid?", es: "Según el ejemplo del material, ¿qué hace una empresa para mantener datos sensibles y la nube híbrida?" },
    [
      { ca: "Manté les dades sensibles en núvol privat i utilitza el públic per a càrregues temporals", es: "Mantiene los datos sensibles en nube privada y usa el público para cargas temporales" },
      { ca: "Manté les dades sensibles en el núvol públic", es: "Mantiene los datos sensibles en la nube pública" },
      { ca: "No usa la nub hybrid", es: "No usa la nube híbrida" },
      { ca: "Emmagatzema tot en un servidor local", es: "Almacena todo en un servidor local" }
    ], 0,
    { ca: "En el hybrideu, l'empresa manté dades sensibles en núvol privat i utilitza el públic per a càrregues de treball temporals.", es: "En el híbrido, la empresa mantiene datos sensibles en nube privada y utiliza el público para cargas de trabajo temporales." })
);
