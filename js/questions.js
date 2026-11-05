/* Base del banc de preguntes (bilingüe ca/es)
   Cada tema té una propietat `unit` (1 o 2) per agrupar-los per unitat.
   Els fitxers data-*.js afegeixen les preguntes a l'array QUESTIONS. */

const QUESTIONS = [];

// Temes Tema 1
const T_CLOUD_INTRO = { unit: 1, ca: "Què és el núvol i el model on-premise", es: "Qué es la nube y el modelo on-premise" };
const T_CLOUD_FEAT  = { unit: 1, ca: "Característiques del núvol", es: "Características de la nube" };
const T_MODELS_SVC  = { unit: 1, ca: "Models de servei (IaaS, PaaS, SaaS)", es: "Modelos de servicio (IaaS, PaaS, SaaS)" };
const T_MODELS_DEPL = { unit: 1, ca: "Models de desplegament", es: "Modelos de despliegue" };
const T_AWS_INTRO   = { unit: 1, ca: "Introducció a AWS", es: "Introducción a AWS" };
const T_AWS_ACADEMY = { unit: 1, ca: "AWS Academy i Learner Lab", es: "AWS Academy y Learner Lab" };

// Temes Tema 2
const T_GLOBAL = { unit: 2, ca: "Infraestructura global (Regions i AZs)", es: "Infraestructura global (Regiones y AZs)" };
const T_RESP   = { unit: 2, ca: "Model de responsabilitat compartida", es: "Modelo de responsabilidad compartida" };
const T_IAM    = { unit: 2, ca: "IAM (Usuaris, grups i rols)", es: "IAM (Usuarios, grupos y roles)" };
const T_EC2    = { unit: 2, ca: "Introducció a EC2", es: "Introducción a EC2" };
const T_SG     = { unit: 2, ca: "Security Groups (SG)", es: "Security Groups (SG)" };
const T_NACL   = { unit: 2, ca: "Network ACLs (NACL)", es: "Network ACLs (NACL)" };
const T_NET    = { unit: 2, ca: "Seguretat de xarxa (SG vs NACL)", es: "Seguridad de red (SG vs NACL)" };

// Constructor de pregunta
function Q(topic, question, options, correct, explanation) {
  return { topic, question, options, correct, explanation };
}
