/* Base del banc de preguntes - Tema 2 (bilingüe ca/es)
   Els fitxers data-*.js afegeixen les preguntes a l'array QUESTIONS. */

const QUESTIONS = [];

// Temes
const T_GLOBAL = { ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" };
const T_RESP   = { ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" };
const T_IAM    = { ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" };
const T_EC2    = { ca: "Introducció a EC2", es: "Introducción a EC2" };
const T_SG     = { ca: "Security Groups (SG)", es: "Security Groups (SG)" };
const T_NACL   = { ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" };
const T_NET    = { ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" };

// Constructor de pregunta
function Q(topic, question, options, correct, explanation) {
  return { topic, question, options, correct, explanation };
}
