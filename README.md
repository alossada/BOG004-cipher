# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#4-consideraciones-generales)
* 

***

## 1. Preámbulo

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## 2. Resumen del proyecto

Shh! es una aplicación web que sirve para que el usuario pueda cifrar y descifrar
un texto indicando un desplazamiento específico de
caracteres (_offset_).

Esta inspirada en los adolescentes que les encanta comunicarse en clave y su estilo 
se basa en la imagen de la revista para adolescente TÚ!

necesitaría cifrar un mensaje y pensar en cómo debe ser esa experiencia de uso

La aplicación web esta construida en HTML, CSS y JavaScript.

## 3. Consideraciones generales

* El proyecto se subió a GitHub (commit/push) y la
  interfaz se desplegó usando GitHub pages. 

### Interfaz de usuario (UI)

La interfaz permite al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.


