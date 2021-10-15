# designory. Front End Developer - Take Home Test Boilerplate - React Version - Itzel Navarro

*  Explicación del código:

Para desarrollar el proyecto decidí poner en componentes separados cada sección, pensando en que si el proyecto crece o se le incrusta información dinámica, sea más fácil editar ó modificar cada componente.
Tomando en cuenta lo anterior, generé una carpeta llamada "components" donde se encuentran:

-Header (Header.js): 
    Contiene logo y navegación

-Banner (Banner.js):
    Contiene el call to action se que muestra en un primer momento

 Wrapper:
    Este wrapper no es un componente, sólo es un contenedor donde incluí el resto de las secciones:

	-Articles (Articles.js):
        Contiene los 3 artículos que se muestran
	
    -Info (Info.js):
        Contiene el artículo grande
	
    -Footer (Footer.js):
        Contiene el pie de página
    
Cada uno de los componentes cuenta con su respectiva hoja estilos en SASS (scss) donde se encuentran también los estilos responsive. El nombre de la hoja de estilos es similar al del componente, ejemplo: Header.scss.