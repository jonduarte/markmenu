Markmenu - simple jQuery plugin to mark menu
============================================

Markmenu é um simples plugin para formatação de links em menus
baseado na url que o usuário está visitando, ex:
Se o usuário está visitando a pagina /contato, então no menu que possui um link
para /contato automaticamente ficará com uma classe especial destacando-o.
Se você possuir um html parecido com o seguinte:

    <ul id="top_menu">
       <li>
           <a href="/home" id="home">Home</a>
       <li>
       <li>
           <a href="/projects/details.php" id="projects">Projects</a>
       <li>
       <li>
           <a href="/about" id="about">About</a>
       <li>
   </ul>

Para fazer o markmenu funcionar e deixar seus links de maneira destacadas basta:

   $("#top_menu").markmenu();

Por padrão o markmenu() irá acrescentar uma classe chamada .marked ao link. Se você achar nescessário
você pode altera-la da seguinte maneira:
	 
	 $("#top_menu").markmenu({class : "myCustomClass" });
   

