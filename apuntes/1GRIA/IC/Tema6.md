---
layout: default
use_math: true
---


# T6 - Trabajar con procesos
*IC - 1.º Grado en Inteligencia Artificial*

*Anxo López Rodríguez*

*Escuela Superior de Enxeñaría Informática - Universidade de Vigo*

---
# Procesos en linux
Juegan un papel muy importante ya que son los que consumen recursos de hardware en entornos de producción. Estos procesos y la gestión del sistema sobre ellos hacen posible que el servidor funcione sin necesidad de reiniciar tras un cambio o actualización importante. Es por ello que Linux se usa en el 90% de los servidores a nivel mundial.
## Foreground
Proceso que se ejecuta directamente en la terminal o consola donde el usuario lo ejecutó. Cuando se ejecuta en primer plano ocupa el control de la terminal y el usuario no puede hacer ciertas tareas hasta que acabe (Por ejemplo, al abrir Nano)

## Background
Se ejecuta en segundo plano permitiendo que la terminal quede libre para que el usuario ejecute otros comandos mientras tanto. Se debe de añadir **&** al final del comando

# Ps (Process status)
Comando que permite ver los procesos en ejecución. La sintaxis se compone de “Ps [opciones]” siendo las opciones:
* a : Procesos de todos los usuarios
* u: Formato detallado, incluyendo el usuario
* x: Procesos no asociados a una terminal
Sin ninguna opción mostraría solo los procesos pertenecientes a la sesión actual del usuario. Se puede usar en combinación con otros comandos (Por ejemplo, ps -p PID, buscaría por PID…) La información que devuelve es:
* PID: Identificador del proceso
* User: Usuario que inició el proceso
* %CPU: Porcentaje de uso en CPU
* %Mem: Porcentaje de uso en memoria
* VSZ: Tamaño virtual del proceso en Kilobytes
* RSS: Memoria física usada por el propio proceso en KB
* TTY: Terminal asociada al proceso
* STAT: Estado del proceso
	* R – Ejecutándose
	* S - Espera
	* T – Detenido
	* Z - Zombie
* Time: Tiempo de CPU Usado
* Command: Nombre comando/programa en ejecución

# Top
Monitoreo en tiempo real de los procesos del sistema. Se actualiza constantemente, a diferencia de PS que es estático. Su sintaxis es “top [opciones]” siendo las opciones:
* -u [usuario]: Las de un usuario especifico (-u Juan)
* -p [PID]: Un proceso en específico (-p 2358)
Mientras está en ejecución, puedes interactuar con el pulsando:
* q – Salir
* h – Ayuda Interactiva
* k – Filtrar proceso por PID
* u – Filtrar proceso de un solo usuario
* p – Ordenar procesos por uso de CPU
* m – Ordenar procesos por uso de memoria
* t – Ordenar por tiempo de CPU

# Otros comandos
* Kill: Mata proceso por PID (Ej: kill 234)
* killall: Mata todos los procesos de un nombre (Ej: killall pyhton)
* fg : Manda un proceso a 1er plano (fg % [Nº trabajo])
* bg : Manda un proceso a 2º plano (bg % [Nº trabajo])
