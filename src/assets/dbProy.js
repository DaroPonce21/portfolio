import canin1 from '../assets/imgProyectos/canin/1.png'
import canin2 from '../assets/imgProyectos/canin/2.png'
import canin3 from '../assets/imgProyectos/canin/3.png'
import canin4 from '../assets/imgProyectos/canin/4.png'
import pep1 from '../assets/imgProyectos/Pep-Shop/1.png'
import pep2 from '../assets/imgProyectos/Pep-Shop/2.png'
import pep3 from '../assets/imgProyectos/Pep-Shop/3.png'
import pep4 from '../assets/imgProyectos/Pep-Shop/4.png'
import pep5 from '../assets/imgProyectos/Pep-Shop/5.png'
import clim1 from '../assets/imgProyectos/clima/1.jpg'
import clim2 from '../assets/imgProyectos/clima/2.png'
import clim3 from '../assets/imgProyectos/clima/3.png'
import todo1 from '../assets/imgProyectos/ToDo/1.jpg'
import dt1 from '../assets/imgProyectos/Dt/1.png'
import juego1 from '../assets/imgProyectos/juegos/1.png'
import juego2 from '../assets/imgProyectos/juegos/2.png'
import juego3 from '../assets/imgProyectos/juegos/3.png'
import juego4 from '../assets/imgProyectos/juegos/4.png'
import juego5 from '../assets/imgProyectos/juegos/5.png'

const dbPro = [
    {
        id: "p1",
        PoW: "Proyecto",
        title: 'Canin-Pedia',
        data: 2022,
        tecno: "Javascript | CSS | React | Redux | Node | Express | Sequalize | PostgreSQL",
        desc: "Se trata de una SPA de consulta canina, donde el usuario puede filtrar, buscar y ordenar distintas razas de perros (que vienen desde una API externa). Al mismo tiempo el usuario puede crear sus propias razas de perros con todas las caracteristicas y estas se almacenan en una base de datos. El proyecto utiliza todas las tecnologias mencionadas, tomo 20 dias realizarlo y fue mi primero proyecto con todo el conocimiento adquirido.",
        linkVideo: "https://youtu.be/BOQ5OSzuXOE",
        linkGitH: "https://github.com/DaroPonce21/Canin-Pedia/tree/main",
        web: "https://pi-dogs-iota.vercel.app/",
        portada: canin1,
        img: [canin1, canin2, canin3, canin4]
    },
    {
        id: "p2",
        PoW: "Proyecto",
        title: 'E-commerce Developets',
        data: 2022,
        tecno: "Javascript | CSS | React | Redux | Node | Express | Sequalize | PostgreSQL",
        desc: "Es un proyecto de tienda on line para un comercio de productos para mascotas. El usuario al entrar en la web podra usar el buscador, o filtrar productos por tipo de mascota (perro o gato) ordenar por precios mas altos o bajos, o por categorias (alimentos, juguetes). La pasarele de pago y el carrito estan inspirados en la tienda de MELI lo que hace que el usuario conozca mejor su funcionamiento. Antes de realizar una compra debera loguearse para lo que utilizara Auth0. Cuando el administrador sea el que se loguee tambien podra acceder a un dashboard con toda la informacion necesaria para llevar su negocio al maximo.",
        linkVideo: "https://youtu.be/5fboDsE6vr0",
        linkGitH: "https://github.com/DaroPonce21/Pet-store-ecommerce",
        web: "https://pet-store-ecommerce.vercel.app/",
        portada: pep1,
        img: [pep1, pep2, pep3, pep4, pep5]
    },

    {
        id: "p3",
        PoW: "Proyecto",
        title: 'Clima',
        data: 2022,
        tecno: "Javascript | CSS | React | React-Hooks",
        desc: "Es una app muy simple que me sirvio para aprender a insertar mapas en mis proyectos y a consumir las primeras APIs externas, en este caso use https://www.weatherapi.com/ La APP cuenta con un buscador en donde insertando la ciudad podremos obtener el clima que esta haciendo y el mapa navegara hasta esa zona.",
        linkVideo: "",
        linkGitH: "https://github.com/DaroPonce21/widget_clima",
        web: "",
        portada: clim1,
        img: [clim1, clim2, clim3]
    },

    {
        id: "p4",
        PoW: "Proyecto",
        title: 'To-Do List',
        data: 2022,
        tecno: "Javascript | CSS | React | React-Hooks",
        desc: "Un de los primeros proyectos que hacemos todos, el famoso To-Do List, permite crear una tarea, almacenarla, luego borrarla o editarla.",
        linkVideo: "",
        linkGitH: "https://github.com/DaroPonce21/To-Do-List",
        web: "",
        portada: todo1,
        img: [todo1,todo1,todo1]
    },

    {
        id: "p5",
        PoW: "Proyecto",
        title: 'Dt Futbol',
        data: 2022,
        tecno: "Javascript | CSS | React | Redux | React-Hooks | React-Redux",
        desc: "Es una APP con la que practique el uso de Redux y el CSS, funciona como una pizarra de director tecnico de futbol en la cual se puede ingresar y quitar jugadores del campo reemplazandolos por los del banco.",
        linkVideo: "",
        linkGitH: "https://github.com/DaroPonce21/DTFutbol",
        web: "",
        portada: dt1,
        img: [dt1,dt1,dt1]
    },

    {
        id: "p6",
        PoW: "Proyecto",
        title: 'Web de Juegos',
        data: "2022",
        tecno: "Javascript | CSS | React | React-Hooks | React-Router-Dom",
        desc: "Es una pequeña APP donde podemos jugar a 3 clasicos juegos, un Memotest, el cual es un array de las tecnologias web y el usuario tiene que encontrar las parejas. Un contador de caracteres por tiempo. Y por ultimo el famoso desafio del anime Pokemon que consistia en adivinar el Pokemon en funcion de su silueta, esta esto usamos una API externa.",
        linkVideo: "",
        linkGitH: "https://github.com/DaroPonce21/Juegos",
        web: "",
        portada: juego1,
        img: [juego1, juego2, juego3, juego4, juego5]
    },


    /*
           {
            id: "",
            PoW: "",
            title:'',
            data: "",
            tecno: ["Javascript" , "React", "Redux", "Node", "Express", "Sequalize", "PostgreSQL"],
            desc: "",
            linkVideo: "",
            linkGitH: "",
            web: "",
            portada: ,
            img:[]
        },
        */


]

export default dbPro