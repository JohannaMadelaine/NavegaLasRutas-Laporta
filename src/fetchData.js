const productos = [
  {
    id: 1,
    imageUrl:
      "https://img.freepik.com/foto-gratis/sesion-meditacion-vista-superior_23-2148835437.jpg",
    name: "Mat de yoga Negro",
    description: "Colchoneta mat de yoga negra de 6mm",
    specifications: `Yoga Mat 4 mm.
    Tomá tus clases de yoga cómodamente en el gimnasio o al aire libre.
    Ideal para proteger rodillas, articulaciones, tobillos y otras zonas de apoyo que se ven afectadas en posturas y ejercicios de yoga y pilates.
    Material: PVC.
    Antideslizante.
    No absorbe olores.
    Base de agarre firme.`,
    price: 27500,
    Rebajas: false,
    NuevoProducto: true,
    stock: 10,
    category: "yogaypilates"
  },
  {
    id: 2,
    imageUrl:
      "https://img.freepik.com/foto-gratis/mujer-joven-elementos-esenciales-yoga_23-2149502672.jpg",
    name: "Mat de yoga Rosa",
    description: "Colchoneta mat de yoga rosa de 6mm",
    specifications: `Yoga Mat 4 mm.
    Tomá tus clases de yoga cómodamente en el gimnasio o al aire libre.
    Ideal para proteger rodillas, articulaciones, tobillos y otras zonas de apoyo que se ven afectadas en posturas y ejercicios de yoga y pilates.
    Material: PVC.
    Antideslizante.
    No absorbe olores.
    Base de agarre firme.`,
    price: 27500,
    Rebajas: false,
    NuevoProducto: false,
    stock: 10,
    category: "yogaypilates"
  },
  {
    id: 3,
    imageUrl:
      "https://img.freepik.com/foto-gratis/mujer-deportiva-ropa-azul-fitness-abriendo-botella_23-2148827588.jpg",
    name: "Pelota de  pilates",
    description: "Pelota de pilates gris de 25cm",
    specifications: `Pelota de esferodinamia Importada de 25 cm
    Ideal para Pilates, Yoga, Funcional y Rehabilitaciones.
    Aporta estabilidad a la columna vertebral, incrementando la resistencia.
    Tamaño: 25 cm.`,
    price: 16000,
    Rebajas: false,
    NuevoProducto: false,
    stock: 5,
    category: "yogaypilates"
  },
  {
    id: 4,
    imageUrl:
      "https://img.freepik.com/foto-gratis/enfermera-paciente-sesion-osteopatia_23-2149146148.jpg",
    name: "Rolo de pilates",
    description: "Rolo de pilates de 33 cm",
    specifications: `Recomendado para Yoga , Pilates, Elongación, Gimnasia, entre otras actividades.
    Fabricado en Goma Eva de alta densidad (compacta y firme).
    Ranurado y texturado para mejorar la irrigación sanguínea con el movimiento.
    Mejora la movilidad.
    Recomendado también para todo tipo de deportistas. Recuperación posta ejercicio, previene lesiones.`,
    price: 11000,
    Rebajas: true,
    NuevoProducto: false,
    stock: 10,
    category: "yogaypilates"
  },
  {
    id: 5,
    imageUrl:
      "https://img.freepik.com/foto-gratis/yoga-practicante-mujer-deportiva-aptitud-bloques-rosados-estera-ejercicio_23-2147941378.jpg",
    name: "Ladrillo de yoga",
    description: "Ladrillo de goma",
    specifications: `Ladrillo de Yoga y Pilates.
    Ideal para realizar diversas actividades físicas.
    Bordes Bicelados.
    Alto: 7.5 cm.
    Ancho: 15 cm.
    Largo: 23 cm.`,
    price: 9400,
    Rebajas: false,
    NuevoProducto: true,
    stock: 7,
    category: "yogaypilates"
  },
];

export default function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
}
