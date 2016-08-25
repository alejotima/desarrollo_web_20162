**¿Por qué evitar las tablas de html?**
porque al usar tablas en el diseño de una página el archivo html pesa más y se consume más ancho de banda.

**¿Qué es CSS?**
es un lenguaje de estilo que sirve para definir de forma organizada el aspecto de los documentos html.

**¿Donde se puede escribir CSS?**
se puede escribir en un archivo html mediante la etiqueta <style type=”text/css” media=”screen”>TU CÓDIGO</style> o en un documento externo de tipo .css

**¿Cuales son los selectores básicos en CSS?**
	
	1. Selector universal: Se utiliza para seleccionar todos los elementos de la página. El siguiente ejemplo elimina el margen y el relleno de todos los elementos HTML.

		* {
	  margin: 0;
	  padding: 0;
	}

	2. Selector de tipo o etiqueta: Selecciona todos los elementos de la página cuya etiqueta HTML coincide con el valor del selector. El siguiente ejemplo selecciona todos los párrafos de la página.
	
	h2 {
	  color: blue;
	}
	 
	p {
	  color: black;
	}

	3. Selector descendente: Selecciona los elementos que se encuentran dentro de otros elementos. Un elemento es descendiente de otro cuando se encuentra entre las etiquetas de apertura y de cierre del otro elemento.

	 p span { color: red; }

	4. Selector de clase:

	A continuación, se crea en el archivo CSS una nueva regla llamada destacado con todos los estilos que se van a aplicar al elemento. Para que el navegador no confunda este selector con los otros tipos de selectores, se prefija el valor del atributo class con un punto (.) tal y como muestra el siguiente ejemplo:

	.destacado { color: red; }

	<body>
  <p class="destacado">Lorem ipsum dolor sit amet...</p>
  <p>Nunc sed lacus et <a href="#" class="destacado">est adipiscing</a> accumsan...</p>
  <p>Class aptent taciti <em class="destacado">sociosqu ad</em> litora...</p>
	</body>

	El selector .destacado se interpreta como "cualquier elemento de la página cuyo atributo class sea igual a destacado", por lo que solamente el primer párrafo cumple esa condición.

	5. Selectores de ID:

	La sintaxis de los selectores de ID es muy parecida a la de los selectores de clase, salvo que se utiliza el símbolo de la almohadilla (#) en vez del punto (.) como prefijo del nombre de la regla CSS:

		#destacado { color: red; }
		 
		<p>Primer párrafo</p>
		<p id="destacado">Segundo párrafo</p>
		<p>Tercer párrafo</p>


