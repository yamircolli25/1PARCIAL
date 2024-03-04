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
                margin-top: 50%;
                margin-bottom:10%;
                float: left;
                box-sizing: border-box;
                padding: 10px;
            }

            .li2 {
                max-width: 1000px;
                width: 100%;
                height:10%;
                margin-top: 50%;
                padding:20px;
                word-spacing: 10px;
                margin-rottom: 50%;
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

            .bot7 {
                padding: 15px 15px;
                margin-top: 10%;
                margin-left: 25%;
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
                width: 50%; /*tamaño del contenedor de ancho de pantalla*/
                hight: 100%;/*tamaño alto*/
                
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

            .image12{
                width: 90%;
                margin-right: 20%;
                margin-top: -100%;
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

            .button-container3 {
                width: 100%;
                display: flex;
                flex-direction: column; /* Cambia la dirección del flex a columna */         
                 /* Alinea los botones en la parte superior del contenedor */
                margin-right: 40px;
                margin-top:5%;
            }

            .button-container button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón según sea necesario */
            }

            .button-container1 button {
                margin-top: 10px; /* Ajusta el margen superior de cada botón según sea necesario */
                padding: 20px 40px;
                margin-bottom: 100%;
            }

            .bot10{
                width: 35%;
                margin-left: 55%;
            }

            .bot11{
                width: 30%;
                margin-left: 35%;
                padding: 20px 10px;
            }

            .mensaje2 {
                width:100%;
                text-align: center;
                margin-top:30%;
                font-size: 60px;
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
                    width: 45%;
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
 
        <section class="nuevo-contenedor">
           <img class="image12" src="imagenes/duo12.svg" alt="Imagen Descriptiva">     
           <button class="bot7"> <strong>PRUEBA 2 SEMANAS GRATIS</strong> </button>
        </section>

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
                <button class="bot1"> <strong>CERTIFICA TU INGLES</strong> </button>
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
            
                <button class="bot10"> <strong>POTENCIA TU SALON DE CLASES</strong> </button>
            
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
                <button class="bot1"> <strong>CONOCE DUOLINGO ABC</strong> </button>
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
            
            <button class="bot10"> <strong>MEJORA EN MATEMATICA</strong> </button>
            
        </div>
        <div class="cont4">
            <h1 class="mensaje2">
            aprende idiomas <br>
            con duolingo
            </h1>
            <button class="bot11"> <strong>EMPIEZA AHORA</strong> </button>
        </div>
        <div >
        </div>
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
