---
layout: apuntes
use_math: true
---


# T4 - Procesos
*IC - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Enxeñaría Informática - Universidade de Vigo*

---
## Multiprogramación
Técnica que oermite que varios programas se alojen en la memoria principal de forma simultanea. La cantidad de programas que pueden estar presentes al mismo tiempo se llama **grado de multiprogramación**

## Programa VS Proceso
Un programa es una entidad estática y pasiva un conjunto de instrucciones que no cambian una vez han sido definidas. Cuando este programa es ejecutado se convierte en un proceso, una entidad dinámica y activa que no puede existir por sí sola (es decir que tiene que ser ejecutada). La ejecución de un proceso varía dependiendo del Estado del sistema y no tiene porqué ejecutarse en un sistema operativo, puede estar integrado en hardware o firmware como la bios o sistemas embebidos.

## Concurrencia
Capacidad de un sistema para que dos más procesos progresen simultáneamente (¡Ojo! Simultaneo no es paralelo). Es fundamental en sistemas que manejan múltiples tareas, ya que nos permite optimizar el uso de recursos del procesador y avanzar sin tener que completar una tarea para hacer otra. Hay dos tipos:
* Concurrencia real: Se ejecuta un proceso por procesador, permitiéndo que se ejecuten las tareas de forma independiente sin tener que parar ningún proceso (Número de procesos menor que el número de procesadores).
* Concurrencia aparente: Un único procesador alterna varios procesos (Número de procesos mayor que número de procesadores). Obliga al S.O. a gestionar el tiempo de CPU para que todos los procesos se ejecuten. Puede producir un overhead en el rendimiento  debido al tiempo que gasta en cambiar de contexto (Overhead es el tiempo para guardar, restaurar... Es el tiempo en el que el S.O. no hace nada productivo).

* Pensamiento concurrente: Estado donde un sistema tiene varios procesos en progreso pero que no se tienen por que ejecutar a la vez. Pueden estar en diferentes etapas y compartiendo CPU de forma intercalada. Intermedio entre estado inicial y final.
* Programación concurrente: Conjunto de técnicas usadas para escribir programas que gestionen múltiples procesos o hilos que se ejecuten al mismo tiempo o de forma intercalada, gestionando problemas de sincronización y evitando conflictos. Se usan herramientas como semáforos para evitar exclusión mutua.

## Paralelismo
Capacidad de un sistema para ejecutar más de un proceso al mismo tiempo. Para que los procesos sean paralelos, tienen que coexistir en el mismo espacio de tiempo y se tienen que ejecutar simultáneamente en diferentes núcleos. El paralelismo implica ejecución simultánea real, a diferencia de los sistemas multiprocesador o mononucleo que hacen cambios de contexto rápido (pseudoparalelismo).

## Paralelismo VS Concurrencia
El paralelismo implica concurrencia (Si varios procesos ejecutan al mismo tiempo, conviven a la vez), pero la concurrencia no implica paralelismo (Si varios procesos conviven, no tienen por qué ejecutarse a la vez).

## Áreas de comunicación entre procesos
Los procesos no trabajan de forma aislada, a veces cooperan para alcanzar un objetivo (sincronización) o compiten por el uso de recursos (exclusión mutua). Para entender el uso de estas áreas, debemos entender los tipos de recursos:
* Recursos compartibles: Pueden ser usados por varios procesos al mismo tiempo sin conflictos al usarlos de forma concurrente
* Recursos no compartibles: Recursos que he debido a su naturaleza física o por influencia del proceso, sólo pueden ser utilizados por uno a la vez. Con un procesamiento ceder este queda en espera y hace una vez finalice el que estaba. Por ejemplo, una impresora, ya que si un proceso de imprimir un archivo se mezcla con otro no se imprimirá correctamente (Y por ello hay una cola de impresión).

### Exclusión mutua
Mecanismo utilizado para gestionar la interacción entre dos o mas procesos que se están ejecutando en paralelo y quieren acceder a un recurso no compartible. Garantiza que sólo un proceso tenga acceso al recurso, dando el acceso exclusivo, mientras que otros esperan a que se libere.

### Sincronización
Comunicación requerida entre dos o mas procesos para sincronizar sus actividades. Puede ser simple, un proceso cuando llegue x punto no puede seguir hasta que otro no llegue a y punto (1º espera a 2º), o múltiple, Un proceso llegado a un punto no puede seguir hasta que el otro llegue a ese mismo punto (Se esperan mutuamente)

## Interbloqueo
Un proceso está interbloqueado cuando está a la espera de un proceso que nunca se producirá. Ocurre en sistemas donde varios procesos se interrelacionan y dependen de la finalización de otros para poder continuar. Puede llegar a la paralización de tareas críticas, por ello se utilizan estrategias de prevención, evitación, extención y recuperación de los mismos.