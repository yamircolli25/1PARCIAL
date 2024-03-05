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

            .container99{
                max-width: 1000px;
                width: 90%;
                height: 80%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
                margin-top: 50%;
            }

            .cont15{
                width: 100%;
                margin-top: -30%;
                
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
            }

            .li1 {
                max-width: 1000px;
                width: 20%;
                margin-top: 10%;
                margin-bottom:10%;
                float: left;
                box-sizing: border-box;
                padding: 10px;
                text-decoration: none;
                color: #C5C8CE;
            }

            h3{
                color: #ffffff;
            }
            a {
                text-decoration: none;
                color: #C5C8CE;
            }

            footer {
                background-color: #49CD23;
                margin-top: 0%; /* Empuja el footer hacia la parte inferior del contenedor */
            }

            .g2{
                color: #C5C8CE;
            }

            .li2 {
                max-width: 1000px;
                width: 100%;
                height:10%;
                margin-top: 50%;
                padding:20px;
                word-spacing: 10px;
                margin-rottom: 50%;
                color: #C5C8CE;
            }

            

            .cont4{
                max-width: 1000px;
                width: 100%;
                height: 0%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: space-between;
               
            }

            .con67{
                max-width: 1000px;
                width: 90%;
                margin-bottom: -20%;
                margin-top:10%;
            }
            
            .cont10{
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
                height: 30%;
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

            .bot7 {
                padding: 15px 15px;
                margin-top: 5%;
                margin-left: 60%;
                background-color: #ffffff;
                color: #091376;
            }


            .palabra{
                position: fixed;
                top:0;
                widt:100%;
                background-color: #ffffff;/*color de fondo de la barra*/
                z-index:1000;
                padding:10px;
                box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
                transition: box-shadow 0.3s ease;
                max-width: 1000px;
                width: 100%;
                height: 10%;
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
                color: #26DF1D;
            }

            .tit3 {
                width: 100%;
                text-align: left;
                margin-left: 52%;
                font-size: 30px;
                margin-top:-30%;
                color: #26DF1D;
            }

            .tit4 {
                width: 100%;
                text-align: left;
                font-size: 30px;
                margin-top: 200px;
                color: #26DF1D;
            }

            .tit5 {
                width: 100%;
                text-align: left;
                margin-left: 48%;
                font-size: 30px;
                margin-top:-30%;
                color: #26DF1D;
            }


            .text2{
                width: 100%;
                text-align: left;
                font-size: 17px;
                margin-right: auto;
                color: #AAB7BC;
            }

            .text3{
                width: 100%;
                text-align: left;
                font-size: 15px;
                margin-left: 55%;
                margin-top:-10%;
                color: #AAB7BC;
            }

            .text4{
                width: 100%;
                text-align: left;
                font-size: 17px;
                margin-right: auto;
                color: #AAB7BC;
            }

            .text5{
                width: 100%;
                text-align: left;
                font-size: 17px;
                margin-left: 48%;
                margin-top:-10%;
                color: #AAB7BC;
            }
            ._1NFpv {
                display: flex;
                list-style:none;
            }

            .text6{
                width: 100%;
                text-align: center;
                font-size: 60px;
                margin-top: 50%;
                margin-left: 10%;
                margin-right: -20%;
                color:#091376;
            }
            .w9lql {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: .8px;
                text-transform: uppercase;
                white-space: nowrap;
            }
            span {
                text-decoration: none;
                letter-spacing: 0.8px;

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
                width: 100%; /*tamaño del contenedor de ancho de pantalla*/
                hight: 100%;/*tamaño alto*/
                background-color: #091376;
            }

            .image2 {
                width: 100%;
                max-width: 400px;
                margin-left: auto; /*margen derecho*/
                margin-top: -300px;/*margen superior*/
                /*margin-left: margen izquierdo*/
            }

            .image15{
                width: 100%;
                max-width: 300px;
                margin-left: 60%; /*margen derecho*/
                margin-top: -300px;/*margen superior*/
            }

            .image3 {
                width: 100%;
                max-width: 300px;
                margin-right: auto; /*margen derecho*/
                margin-top:140px;
            }
            .ban {
                width: 100%;
                max-width: 50px;
            }

            
            .boton {
                margin-left: 10px; /* Espaciado entre los botones y la lista */
              }
            
              #ver-mas img, #ver-inicio img {
                width: 30px; /*tamaño de las imágenes de los botones */
              }
            
              #ver-mas, #ver-inicio {
                margin-top: 0px; /* Espaciado entre la lista y los botones */
                
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
                width: 40%;
                margin-top:20%;
                margin-right: 10%;
                margin-bottom:10%;
            }
            
            .m2 {
                width: 100%;
                margin-top: -1100px;
            }

            .image9 {
                width: 100%;
                max-width: 200px;
                margin-left: 70%; /*margen derecho*/
                margin-top: 0px;
                /*margin-left: margen izquierdo*/
            }

            .image12{
                width: 40%;
                margin-left: 50%;
                margin-top: -100%;
            }

            ._1v6Jc {
                margin-right: 10px;
            }

            .w9lql {
                font-size: 15px;
                font-weight: 700;
                letter-spacing: .8px;
                text-transform: uppercase;
                white-space: nowrap;
            }

            .TNj94 {
                align-items: center;
                color: var(--language-carousel-color, rgb(var(--color-snow-always-light)));
                display: flex;
                justify-content: center;
                text-decoration: none;
            }

            .button-container {
                width: 100%;
                display: flex;
                flex-direction: column; /* Cambia la dirección del flex a columna */
                align-items: flex-end; /* Alinea los botones a la derecha del contenedor */
                margin-top: -250px; /* Ajusta el margen superior*/
                margin-right: 40px;
            }
        
            .button-container1 {
                width: 100%;
                display: flex;
                justify-content: center; /* Centra los botones horizontalmente */
                align-items: flex-start; /* Alinea los botones en la parte superior del contenedor */
                margin-top: 20px; /* Ajusta el margen superior según sea necesario */
                margin-left: 23%;
            }

            .kuc9r {
                overflow: hidden;
            }

            .button-container3 {
                width: 100%;
                display: flex;
                flex-direction: column; /* Cambia la dirección del flex a columna */         
                 /* Alinea los botones en la parte superior del contenedor */
                margin-right: 40px;
                margin-top:5%;
            }

            .botA {
                background-color: #ffffff;
                width: 35%;
                color: #44C5F5;     
            }

            .botB {
                background-color: #ffffff;
                width: 35%;
                margin-left: 50%;
                color: #44C5F5;     
            }

            .button-container button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón */
            }

            .button-container1 button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón */
                padding: 10px 30px;
                margin-bottom: 100%;
            }

            .tecla1{
                cursor: pointer;
                width:10%;
            }

            .bot10{
                width: 35%;
                margin-left: 55%;
            }

            .bot11{
                width: 30%;
                margin-left: 35%;
                padding: 20px 10px;
                margin-bottom: -30%;
            }

            .mensaje2 {
                width:100%;
                text-align: center;
                margin-top:30%;
                font-size: 60px;
                color: #26DF1D;
            }

            

            .t1{
                color: #ffffff;
            }

            ul {
                list-style: none;
                padding: 0;
                display: flex;
                flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente línea */
                margin-right: 5px;
            }
            
              li {
                
                display: inline-block;
                align-items: center;
                justify-content: center;
                margin-right: 10px; /*ajusta este valor*/
                margin-bottom: 5px; /* Espaciado vertical entre filas de elementos */
            }
            
              li img {
                width: 30px; /*tamaño de la imagen del país*/
                margin-right: 5px; /* Espaciado entre la imagen y el texto */
              }
            
              li span {
                margin-right: 5px; /* Espaciado entre la imagen y el texto */
                align-items: center;
                justify-content: center;
              }
            
              li a {
                text-decoration: none;
                color: #000;
                font-size: 13px;
                align-items: center; /* Centra verticalmente el contenido del <a> */
                display: flex;
              }
            
              
             .bot1{
                background-color: #26DF1D;
            }

            .bot11{
                background-color: #26DF1D;
            }
            
            .bot2{
                background-color: #ffffff;
            }

           
            .t2{
                color: #44C5F5;                
            }

              .boton {
                margin-right: 5px; /* Espaciado entre los botones y la lista */
              }
            
              #ver-mas img, #ver-inicio img {
                width: 20px; /* tamaño de las imágenes de los botones  */
              }
            

              #ver-mas, #ver-inicio {
                margin-top: 5px; /* Espaciado entre la lista y los botones */
              }

              .i1{
                width:30px;
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

                .image12{
                    width: 25%;
                }

                .bot7{
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
        <div class="container99">
            <img class="image" src="imagenes/duolingo3.gif" alt="GIF Descriptivo">
            <div class="text">
                <h2>!La forma divertida, efectiva y<br> 
                gratis de aprender un idioma!</h2>
            </div>
            <div class="button-container">
                <button class="bot1"> <strong class="t1">EMPIEZA AHORA</strong> </button>
                <button class="bot2"> <strong class="t2">YA TENGO UNA CUENTA</strong> </button>
            </div>
        </div>
        

            <div class="con67">
                <li>
                <!-- Botón al inicio -->
                <a href="https://es.duolingo.com/courses" target="_blank" id="ver-inicio" class="boton">
                <img src="imagenes/a1.png" alt="IMAGEN DESCRIPTIVA">
                </a>
                </li>
                <li>
                    <a href="/course/en/es/Aprender-ingl%C3%A9s" target="_blank">
                    <img src="imagenes/b2.jpg" alt="IMAGEN DESCRIPTIVA">INGLES
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                        <img src="imagenes/b3.jpg" alt="IMAGEN DESCRIPTIVA"><span>FRANCES</span>
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                    <img src="imagenes/b4.jpg"alt="IMAGEN DESCRIPTIVA">
                    <span>ALEMAN</span>
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                    <img src="imagenes/b5.jpg" alt="IMAGEN DESCRIPTIVA">
                    <span>ITALIANO</span>
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                    <img src="imagenes/b6.jpg" alt="IMAGEN DESCRIPTIVA">
                    <span>PORTUGUES</span>
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                    <img src="imagenes/b7.jpg" alt="IMAGEN DESCRIPTIVA">
                    <span>CATALAN</span>
                    </a>
                </li>
                <li>
                    <a href="enlace_peru.html">
                    <img src="imagenes/b8.jpg" alt="IMAGEN DESCRIPTIVA">
                    <span>RUSO</span>
                    </a>
                </li>
                <li>
                <!-- Botón "Ver más" como imagen -->
                <a href="#" id="ver-mas" class="boton" >
                    <img src="imagenes/a2.png" alt="Ver más países">
                </a>
                </li>
         
        </div>  
        <div class="container">
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
                    Gracias a la combinación de métodos de enseñanza <br>
                    respaldados por la ciencia y un contenido entretenido,<br> 
                    creamos cursos que enseñan de forma eficiente a leer, <br>
                    escribir, entender y hablar en otros idiomas.
                </div>
            <div>
            <div class="tit4">
                <h2>mantén tu <br>motivación</h2>
            </div>
            
            <div class="text4">
            Nuestras funcionalidades y desafíos son divertidos y hacen <br>
            que aprender se sienta como un juego. ¡Vas a poder formar <br>
            un hábito de aprendizaje sin esfuerzo! Y, por supuesto, <br>
            recibirás recordatorios de nuestra adorable mascota, Duo, el <br>
            búho.
            </div>
            <img class="image4" src="imagenes/duo7.gif" alt="GIF Descriptivo">
            <div class="cont5">
                <img class="image5" src="imagenes/duo8.gif" alt="GIF Descriptivo">
                <div class="tit5">
                    <h2>aprendizaje <br>personalizado</h2>
                </div>
                <div class="text5">
                Al combinar lo mejor de la inteligencia artificial y las ciencias<br>
                de idiomas, las lecciones se adaptan según tu desempeño <br>
                para ayudarte a aprender al nivel adecuado y a tu propio <br>
                ritmo.
                </div>
            <div>
            <div class="mensaje">
                <h1 class="text6">
                aprende cuando <br> 
                quieras y donde <br> 
                quieras
                </h1>
                <div class="button-container1">
                <button class="bot3"> <strong>Descargalo en la <br>App Store</strong> </button>
                <button class="bot4"> <strong>Disponible en <br>Google Play</strong> </button>
                </div>
            </div>
            
        </div>
        <div class="m2">
           <img src="imagenes/imagen2.svg" >     
        </div>
        <div class="nuevo-contenedor">
           <img class="image8" src="imagenes/duo9.svg" alt="Imagen Descriptiva">       
           <div >
           <img class="image12" src="imagenes/duo12.svg" alt="Imagen Descriptiva">     
           <button class="bot7"> <strong>PRUEBA 2 SEMANAS GRATIS</strong> </button>
            </div>
        </div>

        <div class="container">
            <div class="tit2">
                <h2>duolingo english test</h2>
            </div>
            
            <div class="text2">
            Nuestro examen de inglés es conveniente, rápido y <br>
            económico. El Duolingo English Test integra los últimos <br>
            avances en la ciencia e inteligencia artificial para dar a todas<br>
            las personas la posibilidad de elegir dónde y cuándo hacer el<br>
            examen y que puedan dar lo mejor de sí.
            </div>
            <div class="button-container3">
                <button class="botA"> <strong>CERTIFICA TU INGLES</strong> </button>
            </div>
            <img class="image2" src="imagenes/duo20.png" alt="Imagen Descriptiva">     
        </div>
        
        <div class="cont4">
        <img class="image3" src="imagenes/duo21.jpg" alt="Imagen Descriptiva">     
        <div class="tit3">
                <h2>duolingo for schools</h2>
            </div>
            <div class="text3">
                Maestras y maestros: ¡estamos para ayudarlos! Nuestra <br>
                herramienta gratuita ayuda a tus estudiantes a aprender <br>
                idiomas a través de la app de Duolingo, tanto dentro como <br>
                fuera del salón de clases.
            </div>     
            
                <button class="botB"> <strong>POTENCIA TU SALON DE CLASES</strong> </button>
            
        </div>
        
        <div class="cont15">
            <div class="tit2">
                <h2>duolingo abc</h2>
            </div>
            
            <div class="text2">
                ¡Desde aprender idiomas hasta alfabetismo! Con lecciones de <br>
                fonética y cuentos divertidos, Duolingo ABC enseña a niños y <br>
                niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente <br>
                gratis!
            </div>
            <div class="button-container3">
                <button class="botA"> <strong>CONOCE DUOLINGO ABC</strong> </button>
            </div>
            <img class="image15" src="imagenes/duo22.png" alt="Imagen Descriptiva">     
        </div>

        <div class="cont4">
            <img class="image3" src="imagenes/duo30.svg" alt="Imagen Descriptiva">     
            <div class="tit3">
                <h2>duolingo math</h2>
            </div>
            <div class="text3">
                ¡Prueba nuestras lecciones cortas y gratis para matemáticas! <br>
                Con Duolingo Math, los estudiantes podrán adelantarse en <br>
                sus clases de matemáticas y los adultos podrán practicar para <br>
                mejorar su destreza matemática.
            </div>     
            
            <button class="botB"> <strong>MEJORA EN MATEMATICA</strong> </button>
            
        </div>
        <div class="cont4">
            <h1 class="mensaje2">
            aprende idiomas <br>
            con duolingo
            </h1>
            <button class="bot11" > <strong class="t1">EMPIEZA AHORA</strong> </button>
        </div>
        <div>
        </div>
        
        <img src="imagenes/imagen1.svg">
        
        <footer>
            <div class="g1">
                <div class="li1">
                    <h3> Sobre Nosotros</h3>
                    <a href="https://es.duolingo.com/courses">Cursos</a><br>  
                    <a href="https://es.duolingo.com/info">Misión</a><br>  
                    <a href="https://es.duolingo.com/approach">Método de enseñanza</a><br>
                    <a href="https://es.duolingo.com/efficacy">Eficacia</a><br>
                    <a href="https://careers.duolingo.com/about" tabindex="0">Equipo</a><br>
                    <a href="https://research.duolingo.com/" tabindex="0">Investigación</a><br>
                    <a href="https://careers.duolingo.com/" tabindex="0">Empleo</a><br>
                    <a href="https://design.duolingo.com/" tabindex="0">Guía para uso de marca</a><br>
                    <a href="https://store.duolingo.com/" tabindex="0">Tienda</a><br>
                    <a href="https://press.duolingo.com/" tabindex="0">Prensa</a><br>
                    <a href="https://investors.duolingo.com/" tabindex="0">Inversionistas</a><br>
                    <a href="https://es.duolingo.com/contact">Contáctanos</a>                   
                </div>
                <div class="li1">
                    <h3> Productos</h3>
                    <a href="https://es.duolingo.com/">Duolingo</a><br>        
                    <a href="https://schools.duolingo.com/" tabindex="0">Duolingo for Schools</a><br>          
                    <a href="https://englishtest.duolingo.com/es" tabindex="0">Duolingo English Test</a><br>
                    <a href="https://podcast.duolingo.com/" tabindex="0">Podcast</a><br>
                    <a href="https://es.duolingo.com/business">Duolingo for Business</a>
                    <a href="https://es.duolingo.com/super">Súper Duolingo</a><br>
                    <a href="https://es.duolingo.com/gift">Regala Súper Duolingo</a>
                </div>
                <div class="li1">
                    <h3> Aplicaciones</h3>
                    <a href="https://play.google.com/store/apps/details?hl=es&amp;id=com.duolingo&amp;referrer=utm_source%3Dduolingo.com%26utm_medium%3Dduolingo_web%26utm_content%3Ddownload_button%26utm_campaign%3Dsite_map" tabindex="0">Duolingo para Android</a>
                    <a href="https://itunes.apple.com/es/app/duolingo-learn-spanish-french/id570060128?mt=8&amp;at=1010lwpr" tabindex="0">Duolingo para iOS</a>    
                </div>
                <div class="li1">
                    <h3> Ayuda y soporte</h3>
                    <a href="https://support.duolingo.com/hc/es" data-test="faq-link" tabindex="0">App de Duolingo</a>
                    <a href="https://duolingoschools.zendesk.com/hc/en-us" tabindex="0">Schools</a>
                    <a href="https://englishtest.duolingo.com/faq" tabindex="0">Duolingo English Test</a>
                    <a href="https://status.duolingo.com/" tabindex="0">Estado</a>
                </div>
                <div class="li1">
                    <h3> Términos y privacidad</h3>
                        <a href="https://es.duolingo.com/guidelines">Normas de la comunidad</a><br>
                        <a href="https://es.duolingo.com/terms">Términos</a><br>
                        <a href="https://es.duolingo.com/privacy">Privacidad</a>
                    <h3> Social</h3>
                    <a href="https://blog.duolingo.com/es" tabindex="0">Blog</a><br>
                    <a href="https://www.instagram.com/duolingoespanol/" tabindex="0">Instagram</a><br>
                    <a href="https://www.facebook.com/duolingoespanol" tabindex="0">Facebook</a><br>
                    <a href="https://twitter.com/duolingoespanol" tabindex="0">Twitter</a><br>
                    <a href="https://www.youtube.com/user/duolingo" tabindex="0">YouTube</a><br>
                </div>
            </div>
            
            <div class="g2">
                <div class="li2">
                    <h3>Idioma de la pagina</h3>
                    <a href="https://ar.duolingo.com/" >العربية</a>
                    <a href="https://bn.duolingo.com/" tabindex="0">বাংলা</a>    
                    <a href="https://cs.duolingo.com/" tabindex="0">Čeština</a> 
                    <a href="https://de.duolingo.com/" tabindex="0">Deutsch</a>   
                    <a href="https://el.duolingo.com/" tabindex="0">Ελληνικά</a>
                    <a href="https://en.duolingo.com/" tabindex="0">English</a>
                    <a href="https://es.duolingo.com/" tabindex="0">Español</a>
                    <a href="https://fr.duolingo.com/" tabindex="0">Français</a>
                    <a href="https://hi.duolingo.com/" tabindex="0">हिंदी</a>
                    <a href="https://hu.duolingo.com/" tabindex="0">Magyar</a>
                    <a href="https://id.duolingo.com/" tabindex="0">Bahasa Indonesia</a>
                    <a href="https://it.duolingo.com/" tabindex="0">Italiano</a>
                    <a href="https://ja.duolingo.com/" tabindex="0">日本語</a>
                    <a href="https://ko.duolingo.com/" tabindex="0">한국어</a>
                    <a href="https://dn.duolingo.com/" tabindex="0">Nederlands</a>
                    <a href="https://pl.duolingo.com/" tabindex="0">Polski</a>  
                    <a href="https://pt.duolingo.com/" tabindex="0">Português</a>
                    <a href="https://ro.duolingo.com/" tabindex="0">Română</a>
                    <a href="https://ru.duolingo.com/" tabindex="0">Русский</a>
                    <a href="https://te.duolingo.com/" tabindex="0">తెలుగు</a>
                    <a href="https://th.duolingo.com/" tabindex="0">ภาษาไทย</a>
                    <a href="https://tl.duolingo.com/" tabindex="0">Tagalog</a>
                    <a href="https://tr.duolingo.com/" tabindex="0">Türkçe</a>
                    <a href="https://uk.duolingo.com/" tabindex="0">Українською</a>
                    <a href="https://vi.duolingo.com/" tabindex="0">Tiếng Việt</a>
                    <a href="https://zs.duolingo.com/" tabindex="0">中文</a>
                </div>
            </div>
        </footer>
    `;

    document.body.innerHTML = contenidoHTML;


});