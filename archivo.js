document.addEventListener("DOMContentLoaded", function () {
    const estiloCSS = `
        <style>
            .container{
                max-width: 1000px;
                width: 90%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
          
            }

            .cont4{
                max-width: 1000px;
                width: 100%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
               
            }

            .cont5{
                max-width: 1000px;
                width: 100%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                
            }


            .mensaje{
                max-width: 1000px;
                width: 100%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                background-color: #ffffff; /* Cambia el color a tu elección */
            }

            button {
                padding: 15px 100px; /* Espaciado interno del botón */
                border: none; /* Sin borde */
                border-radius: 10px; /* Esquinas redondeadas */
                cursor: pointer; /* Cursor de apuntar */
                margin-right: 20px; /* Margen derecho entre botones */
                border: 2px solid #C5CBCD
                
            }

            

            .palabra{
                max-width: 1000px;
                width: 100%;
                height: 30%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
            }

            .text {
                width: 100%;
                text-align: right;
                margin-bottom: 180px;
                font-size: 18px;
                margin-right: 40px;
            }

            .text1 {
                width: 100%;
                text-align: right;
                margin-bottom: 150px;
                margin-left: auto;
                margin-top: 30px;/*margen superior*/
                font-size: 10px;
                color: #C5C8CE;
            }


            .tit2 {
                width: 100%;
                text-align: left;
                font-size: 30px;
                margin-top: 50%;/*margen superior*/
            }

            .tit3 {
                width: 100%;
                text-align: left;
                margin-left: 55%;
                font-size: 30px;
                margin-top:-30%;
            }

            .tit4 {
                width: 100%;
                text-align: left;
                font-size: 30px;
                margin-top: 50%
            }

            .tit5 {
                width: 100%;
                text-align: left;
                margin-left: 55%;
                font-size: 30px;
                margin-top:-30%;
            }


            .text2{
                width: 100%;
                text-align: left;
                font-size: 15px;
                margin-right: auto;
                color: #C5C8CE;
            }

            .text3{
                width: 100%;
                text-align: left;
                font-size: 15px;
                margin-left: 55%;
                margin-top:-10%;
                color: #C5C8CE;
            }

            .text4{
                width: 100%;
                text-align: left;
                font-size: 15px;
                margin-right: auto;
                color: #C5C8CE;
            }

            .text5{
                width: 100%;
                text-align: left;
                font-size: 15px;
                margin-left: 55%;
                margin-top:-10%;
                color: #C5C8CE;
            }

            .text6{
                width: 100%;
                text-align: center;
                font-size: 60px;
                margin-top: 50%;
                margin-left: 7%;
                margin-right: -55%;
            }

            .image {
                width: 50%;
                max-width: 450px;/*tamaño imagen*/
                margin-right: auto;
                margin-top: 1px;/*margen superior*/
                margin-bottom: 10px;
            }                


            .image1 {
                width: 100%;
                max-width: 200px;
                margin-right: auto; /*margen derecho*/
                margin-top: 10px;/*margen superior*/
                margin-bottom: 110px;
                /*margin-left: margen izquierdo*/
            }

            .nuevo-contenedor {
                width: 100%;
               
            }

            .image2 {
                width: 100%;
                max-width: 400px;
                margin-left: auto; /*margen derecho*/
                margin-top: -300px;/*margen superior*/
                /*margin-left: margen izquierdo*/
            }

            .image3 {
                width: 100%;
                max-width: 300px;
                margin-right: auto; /*margen derecho*/
                margin-top:140px;
            }

            .image4{
                width: 100%;
                max-width: 400px;
                margin-left: 50%; /*margen derecho*/
                margin-right:auto;
                margin-top: -300px;
            }

            .image5 {
                width: 100%;
                max-width: 300px;
                margin-right: auto; /*margen derecho*/
                margin-top:140px;
            }

            .image8 {
                width: 100%;
                max-width: 400px;
            }

            .image9 {
                width: 100%;
                max-width: 200px;
                margin-left: 70%; /*margen derecho*/
                margin-top: 0px;
                /*margin-left: margen izquierdo*/
            }

            .button-container {
                width: 100%;
                display: flex;
                flex-direction: column; /* Cambia la dirección del flex a columna */
                align-items: flex-end; /* Alinea los botones a la derecha del contenedor */
                margin-top: -250px; /* Ajusta el margen superior según sea necesario */
                margin-right: 40px;
            }
        
            .button-container1 {
                width: 100%;
                display: flex;
                justify-content: center; /* Centra los botones horizontalmente */
                align-items: flex-start; /* Alinea los botones en la parte superior del contenedor */
                margin-top: 20px; /* Ajusta el margen superior según sea necesario */
                margin-left: 15%;
            }

            .button-container button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón según sea necesario */
            }

            .button-container1 button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón según sea necesario */
                padding: 20px 40px;
                margin-bottom: 100%;
            }

            @media (min-width: 600px) {
                

                .image1 {
                    width: 50%;
                }

                .text1{
                    width: 50%;
                }
                
                .image {
                    width: 50%;
                }

                .text{
                    width: 45%;
                }

                .bot1{
                    width: 35%;
                }

                .bot2{
                    width: 35%;
                }

                .tit2{
                    width: 45%: /*ancho*
                }

                .image2{
                    width: 50%;
                }

                .image3{
                    width: 50%;
                }

                .tit3{
                    width: 45%: /*ancho*
                }

                .text3{
                    width: 45%;
                }

                .tit4{
                    width: 45%;
                }

                .text4{
                    width: 45%;
                }

                .image4{
                    width: 45%;
                }

                .image5{
                    width: 45%;
                }

                .tit5 {
                    width: 45%;
                }

                .text5{
                    width: 45%;
                }

                .text6{
                    width: 45%;
                }

                .bot3{
                    width: 45%;
                }
                
                .bot4{
                    width: 45%;
                }

                .image8{
                    width: 45%;
                }

                .image9{
                    width: 45%;
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML("beforeend", estiloCSS);

    const contenidoHTML = `
            
        <div class="palabra">
            <img class="image1" src="imagenes/duo2.svg" alt="Imagen Descriptiva">
            <div class="text1">
                <h2><strong>IDIOMA DE LA PAGINA: ESPAÑOL</strong></h2>
            </div>
        </div>

        <div class="container">
            <img class="image" src="imagenes/duolingo3.gif" alt="GIF Descriptivo">
            <div class="text">
                <h2>!La forma divertida, efectiva y<br> 
                gratis de aprender un idioma!</h2>
            </div>
            <div class="button-container">
                <button class="bot1"> <strong>EMPIEZA AHORA</strong> </button>
                <button class="bot2"> <strong>OTRO BOTÓN</strong> </button>
            </div>
            <div class="tit2">
                <h2>divertido, efectivo y <br> gratis</h2>
            </div>
            <div class="text2">
             Aprender con Duolingo es divertido y los estudios demuestran<br>
             que funciona. ¡En nuestras lecciones cortas ganarás puntos y <br>
             habilitarás nuevas unidades al mismo tiempo que desarrollas <br>
             tus habilidades de comunicación en la vida real!
            </div>
            <img class="image2" src="imagenes/duo4.gif" alt="GIF Descriptivo">
            <div class="cont4">
                <img class="image3" src="imagenes/duo5.gif" alt="GIF Descriptivo">
                <div class="tit3">
                    <h2>respaldado por la <br> ciencia</h2>
                </div>
                <div class="text3">
                    Gracias a la combinación de métodos de enseñanza respaldados <br>
                    por la ciencia y un contenido entretenido, creamos cursos que <br>
                    enseñan de forma eficiente a leer, escribir, entender y hablar en <br>
                    otros idiomas.
                </div>
             <div>
            <div class="tit4">
                <h2>mantén tu <br>motivación</h2>
            </div>
            <div class="text4">
             Aprender con Duolingo es divertido y los estudios demuestran<br>
             que funciona. ¡En nuestras lecciones cortas ganarás puntos y <br>
             habilitarás nuevas unidades al mismo tiempo que desarrollas <br>
             tus habilidades de comunicación en la vida real!
            </div>
            <img class="image4" src="imagenes/duo7.gif" alt="GIF Descriptivo">
            <div class="cont5">
                <img class="image5" src="imagenes/duo8.gif" alt="GIF Descriptivo">
                <div class="tit5">
                    <h2>aprendizaje <br>personalizado</h2>
                </div>
                <div class="text5">
                Al combinar lo mejor de la inteligencia artificial y las ciencias de <br>
                idiomas, las lecciones se adaptan según tu desempeño para <br>
                ayudarte a aprender al nivel adecuado y a tu propio ritmo.
                </div>
             <div>
            <div class="mensaje">
                <h1 class="text6">
                aprende cuando <br> 
                quieras y donde <br> 
                quieras
                </h1>
                <div class="button-container1">
                <button class="bot3"> <strong>EMPIEZA AHORA</strong> </button>
                <button class="bot4"> <strong>OTRO BOTÓN</strong> </button>
                </div>
            </div>
            
        </div>
        <section class="nuevo-contenedor">
        <img class="image8" src="imagenes/duo9.svg" alt="Imagen Descriptiva">
        

        </section>
        
    `;

    document.body.innerHTML = contenidoHTML;
});