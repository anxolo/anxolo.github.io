---
layout: apuntes
use_math: true
---


# T1 - Introducción a las computadoras
*IC - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Enxeñaría Informática - Universidade de Vigo*

---

### Sistema informático
Conjunto de componentes interrelacionados que trabajan juntos para procesar, almacenar y gestionar información, Unidad dinámica para resolver problemas e interactuar con el entorno. ¡OJO! No confundir con Ordenador (Dispositivo capaz de procesar datos y realizar diversas operaciones) 

Está formado por:
* **Hardware:** Todo lo físico y tángible de lo que se compone el sistema (CPU, RAM, Disco duro...).
* **Software:** Conjunto de programas ejecutados sobre el hardware (S.O., APPs...)
* **Personas:** Usuarios, desarolladores...

#### Capas
* **Hardware:** CPU, RAM, Disco Duro, Pantalla/teclado
* **Software/programación:** SO, Apps, Firmware, Videojuegos
* **Información y Datos:** Corazon de un sistema informático, sin ellos el hardware y software son inútiles. Los datos pueden ser representaciones simbólicas o conceptos, son representados en Nºs, letras... (Medios almacenables) y no tienen sentido por si solos. El resultado de procesar datos, organizarlos... tiene un contexto y propósito específico que es proporcionar conocimiento que ayuda en la toma de decisiones (Información).
    * **Códificacion:** Transofrmación que representa los elementos de un conjunto mediante los de otro. Las más comúnes son Binaria o ASCI.
    * **Unidades de almacenamiento:** `1 Byte = 8 bits`

    | Unidad | Símbolo | Equivalencia en Bytes |
    | :--- | :--- | :--- |
    | Byte | B | $2^0$ |
    | Kilobyte | KB | $2^{10}$ |
    | Megabyte | MB | $2^{20}$ |
    | Gigabyte | GB | $2^{30}$ |
    | Terabyte | TB | $2^{40}$ |
    | Petabyte | PB | $2^{50}$ |
    | Exabyte | EB | $2^{60}$ |
    | Zettabyte | ZB | $2^{70}$ |
    | Yottabyte | YB | $2^{80}$ |

* **Comunicación:** Esencial ya que interconecta entre sistemas y comparte datos. Se realiza entre dispositivos y redes.
    * **Interconexión de Sistemas:** Permite la conexión de computadoras y otros dispositivos a redes locales (LAN) o a mayor escala (WLAN/Internet).
    * **Protocolo de comunicación:** Establece reglas para intercambiar información (Ej. TCP/IP).
    * **Seguridade:** Medidas contra la intercepción o alteración de datos intercambiados. Técnicas de cifrado y autenticación de usuarios.
    * **Tecnologías:** WIFI, Ethernet, Protocolo TCP/IP, Bluetooth...


* **Aplicación:** Entorno en el que los usuarios interactúan con el sistema mediante aplicaciones.
    * Proporciona entorno de ejecución para el software de Apps (Donde realizar tareas)
    * Facilita la interacción usuario-sistema mediante GUI (Interfaz Gráfica) o  líneas de comandos. 
    * Interactúa con las capas inferiores del sistema (SO, p.ej.) para acceder al hardware. Este acceso permite que el usuario o programador no tenga que conocer detalles técnicos.
    * Funciones: 
        * Interfaz de usuario (Entorno amigable a usuarios). 
        * Ejecución de Apps (Donde se ejecutan los programas de aplicación).
        * Interacción con capas (usa servicios del SO).



* **Software**: Soporte lógico. Conjunto de programas y gestores procesados por el ordenador.
    * **Software de Control**: Gestiona, supervisa y controla dispositivos o sistemas físicos. Permite la interacción entre un usuario/sistema y un dispositivo/máquina/sistema para lograr tareas específicas.
        * **S.O (Sistema Operativo)**: Programa base de un sistema informático que siempre se ejecuta y gestiona los recursos de hardware y provee servicios a los programas de aplicación.
            * **Funciones**: Abstracción del hardware, Gestión de procesos, Gestión de memoria, Gestión de entrada/salida.
        * **Firmware**
        * **BIOS**
        * **Controladores**
    * **Utilidades**: Programas genéricos no esenciales que ofrecen servicios que ayudan a ampliar y optimizar el sistema (Antivirus, Desfragmentador Disco Duro, Administrador de archivos, Limpiador de registros, etc.).

        * **Software para desarrollar aplicaciones**: Compiladores, Eclipse, Visual Studio...
    * **Software de aplicación**: Software para tareas específicas del usuario final. Resuelve problemas y mejora la productividad.
        * **Tipos**: Navegador (Firefox), Ofimática (Word, Microsoft Office), Imágenes (Gimp), Videojuegos, Música...
        * **Licencias**
            * **Software libre**: Puede ser usado, modificado y copiado libremente. Gratis o al precio de coste de la distribución. Tipos: GPL, LGPL, Mozilla...
            * **Software propietario**: Su uso, modificación y redistribución están limitados al propietario, con acceso limitado al código fuente.
            * **Freeware**: Versión Gratuita (NO CONFUNDIR CON LIBRE).
            * **Shareware (Lite)**: Evaluación gratis y limitada para comprar la versión completa.
            * **Adware**: Publicidad en Pop-ups, banners, etc. Gratis pero con anuncios.

---

### CONCEPTOS BÁSICOS

* **Instrucción:** Conjunto de símbolos que representa una orden de operación o tratamiento.
* **Programa:** Conjunto ordenado de instrucciones proporcionado al ordenador, indicando las tareas a realizar.
* **Lenguaje de programación:** Símbolos y reglas para construir programas para especificar algoritmos que son ejecutados en computadoras.
* **Algoritmos:** Procedimiento para llevar a cabo una tarea, representado por fórmulas, diagramas de flujo, etc., que es descompuesto en pasos simples para su posterior ejecución.
* **Lenguajes de programación:**
    * **Máquina:** Único entendido por CPUs, en Binario, complejo y con alta dependencia del repertorio de instrucciones.
    * **Alto nivel:** Facilita tareas y no necesita depender del computador (Python, C++).
* **Traductor:** Traduce un programa de Lenguaje de Alto nivel a Máquina para ser entendido por el computador.
    * **Compiladores:** Lo traducen globalmente y generan un programa objeto.
    * **Intérpretes:** Analizan, traducen y ejecutan línea a línea. No generan programa objeto.