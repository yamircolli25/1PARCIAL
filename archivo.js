document.addEventListener('DOMContentLoaded', function () {
    // Estilos adicionales de Duolingo
    var estiloAdicional = `
        
        header {
            background-color: #ffffff;
            color: #ffffff;
            padding: 10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            posicion: relative;
        }
        

        body{
            
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            position: relative;
            scrollbar-width: thin; /* Puedes usar "auto" o "thin" para especificar el ancho de la barra */
            scrollbar-color: #888 #f1f1f1;
        }

        nav ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            display: inline-block;
            margin-right: 20px;
        }

        nav ul li a {
            text-decoration: none;
            color: #5a5a5a;
            font-weight: bold;
            font-size: 16px;
        }

        main {
            margin: 20px;
        }

        h2 {
            color: #5a5a5a;
        }

        h1 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 200px; /* Ajusta la distancia desde la parte superior */
            left: 600px; /* Ajusta la distancia desde la izquierda */
            font-size: 30px; /* Ajusta el tamaño del texto */
            color: #575555
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-bottom: 10px;
            font-size: 18px;
        }

        #lecciones {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
        }

        button {
            padding: 15px 100px; /* Espaciado interno del botón */
            border: none; /* Sin borde */
            border-radius: 10px; /* Esquinas redondeadas */
            cursor: pointer; /* Cursor de apuntar */
            margin-right: 20px; /* Margen derecho entre botones */
            border: 2px solid #C5CBCD
            
        }

        #bot1{
            position: absolute;
            top: 330px; /*ajusta distancia desde arriba*/
            left: 650px; /*ajusta distancia desde izquierda*/
            background-color: #6BDC0D; /* Color de fondo del botón */
            color: white; /* Color del texto del botón */
        }

        #bot2{
            position: absolute;
            top: 390px; /*ajusta distancia desde arriba*/
            left: 650px; /*ajusta distancia desde izquierda*/
            background-color: #FFFFFF; /* Color de fondo del botón */
            color: #1DCCF6; /* Color del texto del botón */
            font-size: 10px; /* Ajusta el tamaño del texto */
        }

        #practica {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
           
        }

        #duo_imagen{
            max-width: 100%;
            height: auto;
            width: 200px;
            position: absolute;
            top: 8px; /*ajusta distancia desde arriba*/
            left: 20px; /*ajusta distancia desde izquierda*/
        }

        img {
            max-width: 100%;
            height: auto;
            margin: 20px 0;
            border-radius: 5px; /* Agrega bordes redondeados alrededor de la imagen */
            top: 150px; /* Ajusta según sea necesario */
            left: 100px; /* Ajusta según sea necesario */
            width: 350px; /* Ajusta según sea necesario */
            height: auto; /* Mantener la proporción original */
            
        }

        #imagen1 {
            top: 100; /*ajusta distancia desde arriba*/
            left: 100px; /*ajusta distancia desde izquierda*/
            position: absolute;
        }

        #imagen2 {
            top: 165%; /*ajusta distancia desde arriba*/
            left: 650px; /*ajusta distancia desde izquierda*/
            position: absolute;
        }

        #imagen3 {
            top: 270%; /*ajusta distancia desde arriba*/
            left: 50px; /*ajusta distancia desde izquierda*/
            position: absolute;
        }

        #imagen4 {
            top: 360%; /*ajusta distancia desde arriba*/
            left: 650px; /*ajusta distancia desde izquierda*/
            position: absolute;
        }

        #imagen5 {
            top: 450%; /*ajusta distancia desde arriba*/
            left: 50px; /*ajusta distancia desde izquierda*/
            position: absolute;
        }

        #pa{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 180%; /* Ajusta la distancia desde la parte superior */
            left: 50px; /* Ajusta la distancia desde la izquierda */
            font-size: 48px; /* Ajusta el tamaño del texto */
            color: #6BDC0D;
        }

        #pa3{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 280%; /* Ajusta la distancia desde la parte superior */
            left: 550px; /* Ajusta la distancia desde la izquierda */
            font-size: 48px; /* Ajusta el tamaño del texto */
            color: #6BDC0D;
        }

        #pa2 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 210%; /* Ajusta la distancia desde la parte superior */
            left: 50px; /* Ajusta la distancia desde la izquierda */
            font-size: 15px; /* Ajusta el tamaño del texto */
            color: #A1A7A9;
        }

        #pa4 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 310%; /* Ajusta la distancia desde la parte superior */
            left: 550px; /* Ajusta la distancia desde la izquierda */
            font-size: 15px; /* Ajusta el tamaño del texto */
            color: #A1A7A9;
        }

        #pa5{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 370%; /* Ajusta la distancia desde la parte superior */
            left: 50px; /* Ajusta la distancia desde la izquierda */
            font-size: 48px; /* Ajusta el tamaño del texto */
            color: #6BDC0D;
        }

        #pa6 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 400%; /* Ajusta la distancia desde la parte superior */
            left: 50px; /* Ajusta la distancia desde la izquierda */
            font-size: 15px; /* Ajusta el tamaño del texto */
            color: #A1A7A9;
        }

        #pa7{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 470%; /* Ajusta la distancia desde la parte superior */
            left: 600px; /* Ajusta la distancia desde la izquierda */
            font-size: 48px; /* Ajusta el tamaño del texto */
            color: #6BDC0D;
        }

        #pa8 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 500%; /* Ajusta la distancia desde la parte superior */
            left: 550px; /* Ajusta la distancia desde la izquierda */
            font-size: 15px; /* Ajusta el tamaño del texto */
            color: #A1A7A9;
        }

        #pa9 {
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 600%; /* Ajusta la distancia desde la parte superior */
            left: 280px; /* Ajusta la distancia desde la izquierda */
            font-size: 70px; /* Ajusta el tamaño del texto */
            color: #082365;
          
        }

        #palabra-2{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 10px; /* Ajusta la distancia desde la parte superior */
            left: 800px; /* Ajusta la distancia desde la izquierda */
            font-size: 14px; /* Ajusta el tamaño del texto */
            color: #A9A9A9; /* Ajusta el color del texto */
        }

        .espacio-al-final {
            height: 50px; /* Ajusta la altura según sea necesario para crear espacio */
          }

        #app {
            min-height: 100vh; /* Ajusta según sea necesario */
        }

        
    `;

    // Crear un estilo en una etiqueta style
    var estilo = document.createElement('style');
    estilo.type = 'text/css';
    estilo.innerHTML = estiloAdicional;
    document.getElementsByTagName('head')[0].appendChild(estilo);
  
    // Contenido de Duolingo
    var duolingoContenido = `
        <header>
            <div>
                <nav>
                <img id="duo_imagen" src="imagenes/duo2.svg" alt="Imagen Desccriptiva">
                    <p id="palabra-2"> <strong>IDIOMA DE LA PAGINA: ESPAÑOL</strong> </p>
                
                </nav>
            </div>
        </header>
        <body>
            <div>
                <h1>
                !La forma divertida, efectiva y gratis de aprender un idioma!
                </h1>
            </div>
            <div>
                <img id="imagen1" src="imagenes/duolingo3.gif" alt="GIF Descriptivo">
                
                <button id="bot1" onclick="realizarPractica()"> <strong>EMPIEZA AHORA</strong> </button>
                <button id="bot2" onclick="realizarPractica()"> <strong>YA TENGO UNA CUENTA</strong> </button>
            </div>
            <div>
                <h1 id= "pa">
                    <strong>divertido, efectivo y</strong>
                    <br>
                    <strong>gratis</strong>
                </h1>

                <h3 id= "pa2">
                Aprender con Duolingo es divertido y los estudios demuestran
                <br> 
                que funciona. ¡En nuestras lecciones cortas ganarás puntos y
                <br> 
                habilitarás nuevas unidades al mismo tiempo que desarrollas
                <br>
                tus habilidades de comunicación en la vida real!
                </h3>
                
                <img id="imagen2" src="imagenes/duo4.gif" alt="GIF Descriptivo">

            </div>
            
            <div>

                <img id="imagen3" src="imagenes/duo5.gif" alt="GIF Descriptivo">

                <h1 id= "pa3">
                    <strong>respaldado por la</strong>
                    <br>
                    <strong>ciencia</strong>
                </h1>

                <h3 id= "pa4">
                Gracias a la combinación de métodos de enseñanza respaldados                
                <br>
                por la ciencia y un contenido entretenido, creamos cursos que  
                <br>
                enseñan de forma eficiente a leer, escribir, entender y hablar en
                <br>
                otros idiomas.
                </h3>
                
            </div>
            <div>
                <h1 id= "pa5">
                    <strong>mantén tu</strong>
                    <br>
                    <strong>motivación</strong>
                </h1>

                <h3 id= "pa6">
                Nuestras funcionalidades y desafíos son divertidos y hacen que
                <br>
                aprender se sienta como un juego. ¡Vas a poder formar un
                <br>
                hábito de aprendizaje sin esfuerzo! Y, por supuesto, recibirás
                <br>
                recordatorios de nuestra adorable mascota, Duo, el búho.
                </h3>
                
                <img id="imagen4" src="imagenes/duo7.gif" alt="GIF Descriptivo">

            </div>
            <div>

                <img id="imagen5" src="imagenes/duo8.gif" alt="GIF Descriptivo">

                <h1 id= "pa7">
                <strong>aprendizaje</strong>
                <br>
                <strong>personalizado</strong>
                </h1>

                <h3 id= "pa8">
                Al combinar lo mejor de la inteligencia artificial y las ciencias de
                <br>
                idiomas, las lecciones se adaptan según tu desempeño para
                <br>
                ayudarte a aprender al nivel adecuado y a tu propio ritmo.
                </h3>
            </div>
                <h1 id= "pa9">
                    <strong>aprende cuando</strong>
                    <br>
                    <strong>quieras y donde</strong>
                    <br>
                    <strong>quieras</strong>
                </h1>
            <div>


            </div>

            <div class="espacio-al-final"></div>
        </body>

        
    `;

    window.scrollBy(0, 200);
    
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = duolingoContenido;

    function realizarPractica() {
        alert('Comienza la práctica...');
        
    }
});