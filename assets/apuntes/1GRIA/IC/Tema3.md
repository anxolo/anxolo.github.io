---
layout: default
use_math: true
---


# T3 - Hardware
*IC - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Enxeñaría Informática - Universidade de Vigo*

---

## Placa base / Motherboard
Es la columna vertebral del ordenador, donde se conectan y comunican todos los dispositivos de hardware.


## Procesador/CPU (Unidad central de procesamiento)
Encargado de ejecutar instrucciones de los programas y coordinar operaciones en un sistema informático (Es el cerebro del ordenador). Fundamental en PCS, teléfonos inteligentes y otros dispositivos programables. Se inserta en un zócalo, es muy importante verificar si son compatibles (Ya que un zócalo incorrecto no permitirá la instalación de ciertas CPUs).
### Partes
* **Físicas**
    * **Substrato/PCB:** Base, la placa que integra circuitos para interconectarse con el resto del ordenador
    * **Dic o Matriz:** Está en el medio del procesador, es un trozo de sílicio donde está esculpido el circuito. En este se realizan los cálculos, interpretación de instrucciones y se guardan componentes internos (núcleo caché...)
    * **IHS:** Cubierta metálica, donde se imprime marca y modelo. Se usa para conducir el calor del interior al exterior del componente, permitiéndo la instalación de disipadores o sistemas de refrigeración líquida.
* **No físicas**
    * **Unidad aritmética (ALU):** Operaciones lógicas y matemáticas
    * **Unidad de control:** Gestiona y coordina acciones en el procesador.
    * **Registros:** Áreas de almacenamiento rápidas y temporales,. Guarda datos e instrucciones durante su procesamiento.
    * **Memoria caché:** Memoria de acceso ultra rápido que almacenada datos e instrucciones empleadas con mucha frecuencia, reduciendo el tiempo de acceso a la RAM.


## Tipos de Procesador

Un procesador o CPU (Unidad Central de Procesamiento) es el cerebro del ordenador. Su arquitectura determina cómo ejecuta las instrucciones.

-   **CISC (Complex Instruction Set Computer):** Se caracteriza por tener un conjunto de instrucciones que pueden realizar operaciones muy complejas en un solo comando, aunque la ejecución de dicho comando pueda requerir varios ciclos de reloj.
-   **RISC (Reduced Instruction Set Computer):** Utiliza un conjunto de instrucciones más pequeño y simple, donde cada instrucción se ejecuta, por lo general, en un solo ciclo de reloj. Busca optimizar la velocidad y la eficiencia a través de la simplicidad.
-   **ASIC (Application-Specific Integrated Circuit):** Son circuitos integrados diseñados para una tarea muy específica (por ejemplo, minería de criptomonedas o procesamiento de audio). Son extremadamente rápidos y eficientes para su función, pero no son flexibles para otras tareas.

### Características Principales

-   **Frecuencia de Reloj:** Mide la velocidad a la que un procesador ejecuta operaciones. Se mide en Gigahercios (GHz), que representan miles de millones de ciclos por segundo. A mayor frecuencia, más operaciones puede realizar por segundo.
-   **Número de Núcleos:** Un procesador puede contener varias unidades de procesamiento independientes llamadas núcleos. Cada núcleo puede ejecutar una tarea o proceso de forma autónoma, permitiendo la ejecución paralela de múltiples procesos (multitarea real).
-   **Hilos de Procesamiento (Threads):** Son secuencias de instrucciones que un núcleo puede gestionar. Gracias a tecnologías como el *Hyper-Threading* o *SMT*, un solo núcleo físico puede manejar dos hilos simultáneamente, actuando como dos núcleos lógicos para el sistema operativo y mejorando la eficiencia en la multitarea.
-   **Memoria Caché:** Es una memoria ultrarrápida integrada en el procesador para almacenar los datos e instrucciones más utilizados y acelerar el acceso a ellos. Se organiza en niveles (L1, L2, L3).

## Unidad de Almacenamiento

Es la memoria no volátil donde se almacena de forma permanente el sistema operativo, las aplicaciones y los archivos del usuario.

-   **Características:**
    -   **Memoria Permanente:** Retiene los datos incluso cuando el ordenador se apaga (no volátil).
    -   **Capacidad de Almacenamiento:** Mucho mayor que la memoria RAM, medida en Gigabytes (GB), Terabytes (TB) o incluso Petabytes (PB).

-   **Tipos:**
    -   **HDD (Hard Disk Drive):** Almacena datos en discos magnéticos que giran a alta velocidad. Un cabezal de lectura/escritura se mueve sobre los discos para acceder a la información. Están siendo reemplazados por los SSD debido a su menor velocidad y mayor fragilidad al tener partes móviles.
    -   **SSD (Solid-State Drive):** Utiliza memoria Flash (similar a la de los pendrives o tarjetas SD). No tiene partes móviles, lo que le permite acceder a los datos de forma casi instantánea. Un controlador interno gestiona la ubicación de los datos para una lectura y escritura mucho más rápida y eficiente que en los HDD.
    -   **M.2:** Es un **factor de forma** (un tipo de conector), no un tipo de almacenamiento en sí mismo. Las unidades M.2 son muy compactas y se conectan directamente a la placa base. Pueden utilizar dos tipos de protocolos: **SATA** (con velocidades similares a los SSD de 2.5") o **NVMe** (que utiliza el bus PCIe para alcanzar velocidades de transferencia de datos muy superiores), reduciendo drásticamente los tiempos de carga.

## RAM (Random Access Memory)

Es una memoria **volátil** (pierde sus datos al apagarse) que actúa como intermediario de alta velocidad entre el procesador y la unidad de almacenamiento. Almacena temporalmente los datos e instrucciones que el sistema está utilizando activamente, permitiendo un acceso casi instantáneo. Su capacidad (medida en GB) determina la cantidad de aplicaciones y tareas que se pueden ejecutar simultáneamente de forma fluida. Evoluciona en generaciones (DDR3, DDR4, DDR5), cada una mejorando la velocidad y la eficiencia energética.

## Memoria Caché

Memoria de acceso extremadamente rápido utilizada para almacenar temporalmente los datos e instrucciones más usados por el procesador, reduciendo la latencia.

-   **Caché de Nivel 1 (L1):** Es la más pequeña y rápida, integrada directamente en cada núcleo del procesador. Suele estar dividida en dos partes: una para datos y otra para instrucciones.
-   **Caché de Nivel 2 (L2):** Más grande que la L1, actúa como intermediaria entre esta y la memoria RAM (o la L3). Proporciona un acceso rápido a datos usados con frecuencia.
-   **Caché de Nivel 3 (L3):** Es la más grande y es compartida por varios núcleos del procesador. Almacena datos e instrucciones para que todos los núcleos puedan acceder a ellos eficientemente.

## Jerarquía de Memoria

Es la organización estructurada de los diferentes tipos de memoria en un sistema informático, clasificados por su velocidad y coste. La jerarquía va desde las memorias más pequeñas, rápidas y caras (Registros del procesador, Caché L1) hasta las más grandes, lentas y económicas (Almacenamiento secundario como SSD/HDD).

`[DIAGRAMA: Registros > L1 > L2 > L3 > RAM > Almacenamiento (SSD/HDD)]`

## Sistema de Alimentación

La **Fuente de Alimentación (PSU)** es el componente que convierte la corriente alterna (AC) del enchufe en corriente continua (DC) con los voltajes adecuados para el hardware del ordenador. Distribuye esta energía a través de diferentes conectores, como el **ATX** de 24 pines para la placa base y el **EPS/ATX12V** de 4+4 u 8 pines para la CPU.

### Sistemas de Regulación de Voltaje

Son cruciales para que cada componente reciba la cantidad de energía exacta y estable que necesita.

-   **VRM (Voltage Regulator Module):** Circuitos integrados en la placa base (normalmente cerca del zócalo de la CPU) que regulan y convierten el voltaje de entrada a niveles más bajos y precisos, garantizando un suministro estable y continuo.
-   **Fases de Alimentación:** Son subdivisiones de un VRM que distribuyen la carga eléctrica entre varios circuitos. A más fases, mejor es la capacidad para manejar altas demandas de energía de forma estable y sin generar calor excesivo.

## Métodos de Refrigeración

El procesador genera una gran cantidad de calor al realizar cálculos. Es fundamental disipar este calor para evitar el sobrecalentamiento y posibles daños.

-   **Disipador por Aire:** Una pieza de metal (generalmente aluminio con una base de cobre) con láminas que aumentan la superficie de contacto con el aire. Un ventilador fuerza el paso del aire a través de las láminas para enfriar el metal y, por ende, el procesador.
-   **Refrigeración Líquida:** Un sistema que utiliza un bloque de contacto para absorber el calor del procesador, una bomba que mueve un líquido refrigerante a través de tubos, y un radiador con ventiladores que enfría el líquido antes de que vuelva al bloque.
-   **Pasta Térmica:** Un compuesto de alta conductividad térmica (a base de cerámica o metal) que se aplica entre el procesador y el disipador. Rellena las imperfecciones microscópicas de ambas superficies para garantizar una transferencia de calor óptima.

## Chipset

Es el centro neurálgico de la placa base. Se encarga de gestionar el flujo de datos entre el procesador (CPU), la memoria RAM, las unidades de almacenamiento y los periféricos (como el ratón o el teclado). El modelo de chipset determina en gran medida las capacidades de la placa base, como el tipo de CPU y RAM compatibles, el número de puertos USB, o la capacidad de hacer *overclocking*.

## PCH (Platform Controller Hub)

En las arquitecturas de placas base modernas, el PCH es, en esencia, el **chipset**. Antiguamente, las funciones del chipset se dividían en dos puentes: el **Northbridge** (que conectaba la CPU con la RAM y la tarjeta gráfica) y el **Southbridge** (que gestionaba los componentes más lentos). Para mejorar la eficiencia, los procesadores modernos han integrado las funciones del Northbridge, dejando que un único chip, el PCH, se encargue del resto de comunicaciones.

## Tarjetas Gráficas (GPU)

Componente especializado en procesar y renderizar imágenes y gráficos, esencial para tareas como videojuegos, diseño 3D o edición de vídeo.

-   Contiene su propia **Unidad de Procesamiento Gráfico (GPU)**.
-   Dispone de su propia memoria de alta velocidad, la **VRAM**, para almacenar texturas y modelos 3D.
-   Pueden ser **dedicadas** (una tarjeta física independiente) o **integradas** (incluidas dentro de la propia CPU, para tareas menos exigentes).
-   Disponen de salidas de vídeo como **HDMI** o **DisplayPort** para conectar monitores.

## Slots (Ranuras de Expansión)

Son los zócalos de la placa base donde se conectan tarjetas de expansión.

-   **PCI Express (PCIe):** Es el estándar actual. Una interfaz de alta velocidad que se utiliza para conectar componentes como tarjetas gráficas, SSDs NVMe o tarjetas de red. Su diseño modular funciona con "carriles" (lanes), lo que permite diferentes tamaños de ranura (x1, x4, x8, x16) para adaptarse al ancho de banda que necesita cada componente.

## Buses

Son los canales de comunicación que permiten la transferencia de datos entre los distintos componentes del ordenador. El chipset se encarga de gestionar su tráfico. Existen principalmente tres tipos:

-   **Bus de Direcciones:** Transporta las direcciones de memoria a las que la CPU quiere acceder.
-   **Bus de Datos:** Transfiere los datos entre la CPU, la memoria y los periféricos.
-   **Bus de Control:** Envía señales de control y temporización para coordinar las operaciones de todo el sistema.

## BIOS y UEFI

-   **BIOS (Basic Input/Output System):** Es un firmware almacenado en un chip de memoria no volátil en la placa base. Es el primer software que se ejecuta al encender el ordenador. Realiza una autoprueba de arranque (**POST**), inicializa el hardware y carga el sistema operativo.
-   **UEFI (Unified Extensible Firmware Interface):** Es el sucesor moderno de la BIOS. Ofrece una interfaz gráfica más amigable, mayor seguridad, tiempos de arranque más rápidos y soporte para discos duros de más de 2 TB.