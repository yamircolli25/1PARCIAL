document.addEventListener('DOMContentLoaded', function () {
    // Estilos adicionales de Duolingo
    var estiloAdicional = `
        header {
            background-color: #ffffff;
            color: #ffffff;
            padding: 10px;
            text-align: center;
        }

        body{
            background-color: #ffffff;
            overflow-y: scroll;
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
            heigth: auto;
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
            position: absolute;
            top: 150px; /* Ajusta según sea necesario */
            left: 100px; /* Ajusta según sea necesario */
            width: 350px; /* Ajusta según sea necesario */
            height: auto; /* Mantener la proporción original */
        }

        #imagen1 {
            top: 100; /*ajusta distancia desde arriba*/
            left: 100px; /*ajusta distancia desde izquierda*/
        }

        #palabra-2{
            position: absolute; /* Permite posicionar con respecto al contenedor relativo */
            top: 10px; /* Ajusta la distancia desde la parte superior */
            left: 800px; /* Ajusta la distancia desde la izquierda */
            font-size: 14px; /* Ajusta el tamaño del texto */
            color: #A9A9A9; /* Ajusta el color del texto */
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
                <img id="duo_imagen" src="duo2.svg" alt="Imagen Desccriptiva">
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
                <img id="imagen1" src="duolingo3.gif" alt="GIF Descriptivo">
                
                <button id="bot1" onclick="realizarPractica()"> <strong>EMPIEZA AHORA</strong> </button>
                <button id="bot2" onclick="realizarPractica()"> <strong>YA TENGO UNA CUENTA</strong> </button>
            </div>
        </body>

        
    `;

    window.scrollBy(0, 200);
    // Aplicar el contenido a la página
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = duolingoContenido;

    function realizarPractica() {
        alert('Comienza la práctica...');
        // Aquí puedes agregar lógica adicional para la práctica
    }
});
