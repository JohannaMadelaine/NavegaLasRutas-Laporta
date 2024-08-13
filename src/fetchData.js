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
  {
    id: 6 ,
    imageUrl:"http://img.freepik.com/foto-gratis/closeup-foto-pesas-rusas-peso-variable_181624-32979.jpg",
    name: "Kettleble" ,
    description: "Pesa rusa de 10 kg",
    specifications: `Material del recubrimiento: PVC de alta durabilidad
    Relleno: municion de acero y concreto. El acero es el principal factor del peso, y el concreto funciona como complemento del mismo, asi como tambien que este no se mueva.
    Alto: 25cm
    Ancho de la base: 17cm
    Ancho del agarre (manija): 21cm
    Profundidad: 20cm  
    No marca, ni mancha el piso.
    Debido a la calidad de la terminación del PVC no daña la mano al usarla.`,
    price: 14300 ,
    Rebajas: false,
    NuevoProducto: false,
    stock: 10,
    category: "musculacion",
  },
  {
    id: 7 ,
    imageUrl: "https://img.freepik.com/foto-gratis/pesas-gimnasio_93675-129247.jpg",
    name: "Discos PVC"  ,
    description: " Combo 4 discos de 5 kg",
    specifications: `4 unidades de discos planos de pvc de 5 Kg.
    Rellenos de munición de acero y concreto.
    Centro de 30 mm compatible para barras huecas y macizas con apertura de 28 o 30 mm
    Medidas: 27x27x4.5cm
    Resistente a los golpes.
    No dañan ni rayan el piso.
    Listo para usar`,
    price: 23236  ,
    Rebajas: false,
    NuevoProducto: true,
    stock: 8,
    category: "musculacion",
  },
  {
    id: 8,
    imageUrl: "https://img.freepik.com/foto-gratis/mancuernas-son-naturaleza-muerta-estudio_23-2151747262.jpg",
    name: "Mancuerna Fundicion" ,
    description: " Mancuerna hexagonal de hierro",
    specifications: `Mancuerna hexagonal de hierro fundido 100% macizo.
    Peso: 5 Kg.
    Medidas: 7 x 7 x 25 cm.
    Ancho mango: 11 cm.
    Pintadas con pintura epoxi color negro.
    Una gran herramienta para poder fortalecer tríceps, bíceps, espalda, pecho, entre otros músculos.
    Ideal para gimnasios como así también para hogares y clases personalizadas.
    Las medidas publicadas son aproximadas.`,
    price: 20370 ,
    Rebajas: false,
    NuevoProducto: true,
    stock:10 ,
    category: "musculacion",
  },
  {
    id: 9,
    imageUrl: "https://img.freepik.com/foto-gratis/concepcion-fuerza-barra-negra-soporte-metal-gimnasio-dia-no-hay-gente-alrededor_146671-16607.jpg",
    name: "Barra" ,
    description: " Barra hueca 1,5 M con Topes ",
    specifications: `Material: Hierro hueco.
    Pintura: Epoxi de color negro.
    Compatible con discos de pvc tipo bodypump como a su vez también puede utilizarse con discos de fundición de 30 mm.
    Diámetro: 28 mm.
    Medida: 150 cm.
    Ancho mango agarre: 100 cm.
    Medida espacio carga disco: 25 cm cada lado.
    Peso: 1 Kg.
    Capacidad de carga de discos: Hasta 50 kg.
    Incluye par de topes tijera.`,
    price:  21625  ,
    Rebajas: false,
    NuevoProducto: false,
    stock: 7,
    category: "musculacion",
  },
  {
    id: 10,
    imageUrl: "https://img.freepik.com/foto-gratis/piernas-vista-lateral-haciendo-ejercicios-fitness_23-2148343685.jpg ",
    name: "Tiraband" ,
    description: "Set tiraband circular x 5",
    specifications: `Kit de 5 tirabands circulares confeccionadas en látex alta calidad y resistencia. Contiene 5 bandas elásticas de diferentes tensiones (extra leve, leve, media, fuerte y extra fuerte). Ideal para hacer trabajo en piernas aumentando resistencia, flexibilidad, tonificación y estiramiento de los músculos.
    Medidas: 30 x 8 cm.`,
    price: 39000 ,
    Rebajas: false,
    NuevoProducto: true,
    stock: 5,
    category: "accesorios",
  },
  {
    id: 11,
    imageUrl:"https://img.freepik.com/fotos-premium/tomada-cuadro-completo-fondo-abstracto_1048944-7820305.jpg",
    name: "Pido de goma eva" ,
    description:"Piso de goma eva encastrable 1 x 1 x 23 mm Negro",
    specifications: `Piso de goma encastrable de 23 mm de espesos de 1 x 1 metro.
    Ideal para deportes que no requieren tránsito permanente o que no utilizan demasiado peso.
    Se arma y desarma fácilmente. 
    No absorbe agua ni humedad. 
    Fácil de limpiar. 
    Es antideslizante. 
    No es necesario pegarlo.`,
    price: 42900 ,
    Rebajas: false,
    NuevoProducto: true,
    stock: 20,
    category: "accesorios",
  },
  {
    id: 12,
    imageUrl: "https://img.freepik.com/fotos-premium/entrenamiento-casa-bandas-resistencia-goma_144962-9076.jpg",
    name: "Banda Larga" ,
    description: " Banda Larga Reforzada Tension Alta 1,1mt",
    specifications: `Banda elástica con manijas de 110cm de tension alta.
    Confeccionada en latex te alta resistencia.
    Cuenta con manijas ergonómicas, revesitdas en PVC.
    Incluye una funda corrediza de tela, que actua como refuerzo del latex, evitando que este se desgaste con el tiempo, dando una mayor vida útil a la banda.
    Tipo de latex: tubular
    Color de latex: negro/beige
    Ideal para trabajo de fuerzas de brazos (biceps/triceps) y hombros. Se utilizan mucho en entrenamiento funcional, localizada, personalizados y pilates.`,
    price: 17330 ,
    Rebajas: false,
    NuevoProducto: true,
    stock: 5,
    category: "accesorios",
  },
  {
    id: 13,
    imageUrl: "https://img.freepik.com/foto-gratis/trabajo-bien-hecho-deportiva-joven-tiene-dia-fitness-gimnasio-manana_146671-16029.jpg",
    name: "Cajon de Salto"  ,
    description: "Cajon de Salto Pliometria de madera ",
    specifications: `Medidas: 40 x 50 x 60 cm (según el lado es la altura el banco)
    Fabricado en MDF de primera calidad
    Excelente terminación en todas sus caras.
    Cuenta con manijas en ambos lados para facilitar el traslado y agarre.
   Especialmente diseñado y reforzado para que se pueda utilizar en todas sus caras.`,
    price: 87600  ,
    Rebajas: false,
    NuevoProducto: true,
    stock: 8,
    category: "accesorios",
  }

];



