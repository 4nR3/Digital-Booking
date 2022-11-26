package com.dh.hotel.util;

import com.dh.hotel.model.*;
import com.dh.hotel.repository.IRol;
import com.dh.hotel.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @Autowired
    private CategoriaService categoriaService;

    @Autowired
    private CiudadService ciudadService;

    @Autowired
    private ImagenService imagenService;

    @Autowired
    private ProductoService productoService;

    @Autowired
    private ReservaService reservaService;

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private RolService rolService;


    @Override
    public void run(ApplicationArguments args) throws Exception {

        try{
            Categoria categoria1 = new Categoria("Hosteles", "Hosteles de la zona", "https://media-cdn.tripadvisor.com/media/photo-s/21/91/1a/75/exterior.jpg");
            Categoria categoria2 = new Categoria("Hoteles","Hoteles de la zona","https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1");
            Categoria categoria3 = new Categoria("Departamentos","Hoteles de la zona","https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2.jpeg");
            Categoria categoria4 = new Categoria("Bed and breakfast","Hoteles de la zona","https://static.hosteltur.com/app/public/uploads/img/articles/2015/08/01/L_5b14fe49e7f2c_breakfast.jpg");

            categoriaService.agregarCategoria(categoria1);
            categoriaService.agregarCategoria(categoria2);
            categoriaService.agregarCategoria(categoria3);
            categoriaService.agregarCategoria(categoria4);


            Ciudad ciudad1 = new Ciudad("Cordoba","Cordoba","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad2 = new Ciudad("Rosario","Santa Fe","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad3 = new Ciudad("Ciudad de Santa Fe","Santa Fe","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad4 = new Ciudad("La Quiaca","Jujuy","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad5 = new Ciudad("Bariloche","Rio Negro","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad6 = new Ciudad("Ushuaia","Tierra del Fuego","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad7 = new Ciudad("Mar del Plate","Buenos Aires","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad8 = new Ciudad("Villa La Angostura","Neuquen","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad9 = new Ciudad("Cafayate","Salta","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad10 = new Ciudad("Puerto Iguazu","Misiones","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad ciudad11 = new Ciudad("Tilcara","Jujuy","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");
            Ciudad silentCity = new Ciudad("Merlo","San Luis","Argentina","https://www.google.com.ar/maps/place/C%C3%B3rdoba/@-31.3994342,-64.2643842,12z/data=!3m1!4b1!4m5!3m4!1s0x9432985f478f5b69:0xb0a24f9a5366b092!8m2!3d-31.4200833!4d-64.1887761?hl=es-419");

            ciudadService.agregarCiudad(ciudad1);
            ciudadService.agregarCiudad(ciudad2);
            ciudadService.agregarCiudad(ciudad3);
            ciudadService.agregarCiudad(ciudad4);
            ciudadService.agregarCiudad(ciudad5);
            ciudadService.agregarCiudad(ciudad6);
            ciudadService.agregarCiudad(ciudad7);
            ciudadService.agregarCiudad(ciudad8);
            ciudadService.agregarCiudad(ciudad9);
            ciudadService.agregarCiudad(ciudad10);
            ciudadService.agregarCiudad(ciudad11);
            ciudadService.agregarCiudad(silentCity);

            Caracteristica caracteristica1= new Caracteristica("Wifi","fas fa-wifi");
            Caracteristica caracteristica2= new Caracteristica("Pileta","fas fa-swimmer");
            Caracteristica caracteristica3= new Caracteristica("Parrilla","fas fa-fire");
            Caracteristica caracteristica4= new Caracteristica("Mascotas","fas fa-dog");
            Caracteristica caracteristica5= new Caracteristica("Amazon","fab fa-amazon-pay");
            Caracteristica caracteristica6= new Caracteristica("Ambulancia", "fas fa-ambulance");


            caracteristicaService.agregarCaracteristica(caracteristica1);
            caracteristicaService.agregarCaracteristica(caracteristica2);
            caracteristicaService.agregarCaracteristica(caracteristica3);

            List <Caracteristica> listaCaracteristicas1 = new ArrayList<>();
            listaCaracteristicas1.add(caracteristica1);
            listaCaracteristicas1.add(caracteristica2);
            listaCaracteristicas1.add(caracteristica3);

            List <Caracteristica> listaCaracteristicas2 = new ArrayList<>();
            listaCaracteristicas2.add(caracteristica3);

            List <Caracteristica> listaCaracteristicas3 = new ArrayList<>();
            listaCaracteristicas3.add(caracteristica1);
            listaCaracteristicas3.add(caracteristica2);

            List <Caracteristica> listaCaracteristicas4 = new ArrayList<>();
            listaCaracteristicas4.add(caracteristica1);

            Imagen imagenPrincpal1 = new Imagen("Hotel De Cordoba 1","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal1.jpg");
            Imagen imagenPrincpal2 = new Imagen("Hotel De Cordoba 2","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal2.jpg");
            Imagen imagenPrincpal3 = new Imagen("Hotel De Cordoba 3","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal3.jpeg");
            Imagen imagenPrincpal4 = new Imagen("Hotel De Cordoba 4","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal4.jpg");
            Imagen imagenPrincpal5 = new Imagen("Hotel De Cordoba 5","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal5.jpg");
            Imagen imagenPrincpal6 = new Imagen("Hotel De Cordoba 6","https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/principal6.jpg");
            Imagen imagenHabitacion1 = new Imagen("Habitacion 1", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(1).jpg");
            Imagen imagenHabitacion2 = new Imagen("Habitacion 2", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(2).jpg");
            Imagen imagenHabitacion3 = new Imagen("Habitacion 3", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(3).jpg");
            Imagen imagenHabitacion4 = new Imagen("Habitacion 4", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(4).jpg");
            Imagen imagenHabitacion5 = new Imagen("Habitacion 5", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(5).jpg");
            Imagen imagenHabitacion6 = new Imagen("Habitacion 6", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(6).jpg");
            Imagen imagenHabitacion7 = new Imagen("Habitacion 7", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(7).jpg");
            Imagen imagenHabitacion8 = new Imagen("Habitacion 8", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(8).jpg");
            Imagen imagenHabitacion9 = new Imagen("Habitacion 9", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(9).jpg");
            Imagen imagenHabitacion10 = new Imagen("Habitacion 10", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(10).jpg");
            Imagen imagenHabitacion11 = new Imagen("Habitacion 11", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(11).jpg");
            Imagen imagenHabitacion12 = new Imagen("Habitacion 12", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(12).jpg");
            Imagen imagenHabitacion13 = new Imagen("Habitacion 13", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(13).jpg");
            Imagen imagenHabitacion14 = new Imagen("Habitacion 14", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(14).jpg");
            Imagen imagenHabitacion15 = new Imagen("Habitacion 15", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(15).jpg");
            Imagen imagenHabitacion16 = new Imagen("Habitacion 16", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(16).jpg");
            Imagen imagenHabitacion17 = new Imagen("Habitacion 17", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(17).jpg");
            Imagen imagenHabitacion18 = new Imagen("Habitacion 18", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(18).jpg");
            Imagen imagenHabitacion19 = new Imagen("Habitacion 19", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(19).jpg");
            Imagen imagenHabitacion20 = new Imagen("Habitacion 20", "https://0621c1g3anitaimagenes.s3.us-west-2.amazonaws.com/habitacion+(20).jpg");

            imagenService.subirImagen(imagenPrincpal1);
            imagenService.subirImagen(imagenPrincpal2);
            imagenService.subirImagen(imagenPrincpal3);
            imagenService.subirImagen(imagenPrincpal4);
            imagenService.subirImagen(imagenPrincpal5);
            imagenService.subirImagen(imagenPrincpal6);

            imagenService.subirImagen(imagenHabitacion1);
            imagenService.subirImagen(imagenHabitacion2);
            imagenService.subirImagen(imagenHabitacion3);
            imagenService.subirImagen(imagenHabitacion4);
            imagenService.subirImagen(imagenHabitacion5);
            imagenService.subirImagen(imagenHabitacion6);
            imagenService.subirImagen(imagenHabitacion7);
            imagenService.subirImagen(imagenHabitacion8);
            imagenService.subirImagen(imagenHabitacion9);
            imagenService.subirImagen(imagenHabitacion10);
            imagenService.subirImagen(imagenHabitacion11);
            imagenService.subirImagen(imagenHabitacion12);
            imagenService.subirImagen(imagenHabitacion13);
            imagenService.subirImagen(imagenHabitacion14);
            imagenService.subirImagen(imagenHabitacion15);
            imagenService.subirImagen(imagenHabitacion16);
            imagenService.subirImagen(imagenHabitacion17);
            imagenService.subirImagen(imagenHabitacion18);
            imagenService.subirImagen(imagenHabitacion19);
            imagenService.subirImagen(imagenHabitacion20);



            List <Imagen> listaImagenes1 = new ArrayList<>();
            List <Imagen> listaImagenes2 = new ArrayList<>();
            List <Imagen> listaImagenes3 = new ArrayList<>();
            List <Imagen> listaImagenes4 = new ArrayList<>();
            List <Imagen> listaImagenes5 = new ArrayList<>();
            List <Imagen> listaImagenes6 = new ArrayList<>();
            List <Imagen> listaImagenes7 = new ArrayList<>();
            List <Imagen> listaImagenes8 = new ArrayList<>();

            String tituloDescripcion="Alojate en el corazón de Argentina";

            listaImagenes1.add(imagenPrincpal1);
            listaImagenes1.add(imagenHabitacion1);
            listaImagenes1.add(imagenHabitacion2);
            listaImagenes1.add(imagenHabitacion3);
            listaImagenes1.add(imagenHabitacion4);
            listaImagenes1.add(imagenHabitacion5);

            listaImagenes2.add(imagenPrincpal2);
            listaImagenes2.add(imagenHabitacion6);
            listaImagenes2.add(imagenHabitacion7);
            listaImagenes2.add(imagenHabitacion8);
            listaImagenes2.add(imagenHabitacion9);
            listaImagenes2.add(imagenHabitacion10);

            listaImagenes3.add(imagenPrincpal3);
            listaImagenes3.add(imagenHabitacion11);
            listaImagenes3.add(imagenHabitacion12);
            listaImagenes3.add(imagenHabitacion13);
            listaImagenes3.add(imagenHabitacion14);
            listaImagenes3.add(imagenHabitacion14);

            listaImagenes4.add(imagenPrincpal4);
            listaImagenes4.add(imagenHabitacion16);
            listaImagenes4.add(imagenHabitacion17);
            listaImagenes4.add(imagenHabitacion18);
            listaImagenes4.add(imagenHabitacion19);
            listaImagenes4.add(imagenHabitacion20);

            listaImagenes5.add(imagenPrincpal5);
            listaImagenes5.add(imagenHabitacion1);
            listaImagenes5.add(imagenHabitacion2);
            listaImagenes5.add(imagenHabitacion3);
            listaImagenes5.add(imagenHabitacion4);
            listaImagenes5.add(imagenHabitacion5);

            listaImagenes6.add(imagenPrincpal6);
            listaImagenes6.add(imagenHabitacion6);
            listaImagenes6.add(imagenHabitacion7);
            listaImagenes6.add(imagenHabitacion8);
            listaImagenes6.add(imagenHabitacion9);
            listaImagenes6.add(imagenHabitacion10);


            listaImagenes7.add(imagenPrincpal3);
            listaImagenes7.add(imagenHabitacion11);
            listaImagenes7.add(imagenHabitacion12);
            listaImagenes7.add(imagenHabitacion13);
            listaImagenes7.add(imagenHabitacion14);
            listaImagenes7.add(imagenHabitacion17);

            listaImagenes8.add(imagenPrincpal4);
            listaImagenes8.add(imagenHabitacion16);
            listaImagenes8.add(imagenHabitacion17);
            listaImagenes8.add(imagenHabitacion18);
            listaImagenes8.add(imagenHabitacion19);
            listaImagenes8.add(imagenHabitacion20);

            String descripcion1 = "En el corazón de San Telmo, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion2 = "En el corazón de La Ferrere, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion3 = "En el corazón de Villa Gesell, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion4 = "En el corazón de Salta La Linda, disfruta de un albergue inspirado en las pasiones de Salta";
            String descripcion5 = "En el corazón del penal de Ezeiza, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion6 = "En el corazón de Areco, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion7 = "En el corazón de Marcos Paz, disfruta de un albergue inspirado en las pasiones de Buenos Aires";
            String descripcion8 = "En el corazón de Capital Federal, disfruta de un albergue inspirado en las pasiones de Buenos Aires";

            String normas = "Check-out 10:00 \n\nNo se permiten fiestas \n\nNo fumar";
            String seguridad = "Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus\n\nDetector de humo\n\nDeposito de seguridad";
            String cancelacion = "Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía. \n\nEl incumplimiento de alguna de las normas resultara en la cancelacion inmediata";
            Double latitud1 = -31.394100;
            Double longitud1 = -64.210662;
            String direccion = "Calle falsa 123";

            Producto producto1 = new Producto("Punta bella",tituloDescripcion,descripcion1, direccion,categoria1, ciudad1,listaImagenes1, listaCaracteristicas1,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto2 = new Producto("El gatito",tituloDescripcion,descripcion2, direccion,categoria2, ciudad2,listaImagenes2, listaCaracteristicas4,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto3 = new Producto("El perrito",tituloDescripcion,descripcion3, direccion,categoria3, ciudad3,listaImagenes3, listaCaracteristicas3,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto4 = new Producto("El hamster",tituloDescripcion,descripcion4, direccion,categoria4, ciudad4,listaImagenes4, listaCaracteristicas2,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto5 = new Producto("El caballo",tituloDescripcion,descripcion5, direccion,categoria1, ciudad4,listaImagenes5, listaCaracteristicas2,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto6 = new Producto("Port Aventura Resort",tituloDescripcion,descripcion6, direccion,categoria2, ciudad4,listaImagenes6, listaCaracteristicas1,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto7 = new Producto("Sheraton hotel & resort",tituloDescripcion,descripcion7, direccion,categoria3, ciudad1,listaImagenes7, listaCaracteristicas4,normas,seguridad,cancelacion,latitud1,longitud1);
            Producto producto8 = new Producto("PortAventura","Veni a jugar a pasar un buen rato en Port Aventura",descripcion8, direccion,categoria4, ciudad4,listaImagenes8, listaCaracteristicas3,normas,seguridad,cancelacion,latitud1,longitud1);

            productoService.agregarProducto(producto1);
            productoService.agregarProducto(producto2);
            productoService.agregarProducto(producto3);
            productoService.agregarProducto(producto4);
            productoService.agregarProducto(producto5);
            productoService.agregarProducto(producto6);
            productoService.agregarProducto(producto7);
            productoService.agregarProducto(producto8);

            SQLUtil sqlUtil = new SQLUtil();

            Date diaYHoraInicio1 = new Date();
            Date diaYhoraFin1 = new Date(122,5,25,20,40);
            Date diaYHoraInicio2 = new Date(122,6,1,13,30);
            Date diaYhoraFin2 = new Date(122,6,8,14,20);
            Date diaYHoraInicio3 = new Date();
            Date diaYhoraFin3 = new Date(122,6,8,14,20);
            Date diaYHora4 = new Date(122,5,27,13,30);

            Time time = new Time(17,18,30);

            Rol rol1 = new Rol("ADMIN");
            Rol rol2 = new Rol("USER");

            rolService.crearRol(rol1);
            rolService.crearRol(rol2);

            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

            String contra = passwordEncoder.encode("hola123");

            Usuario user1 = new Usuario("Admin","Admin","admin@admin.com", contra,"Sistema",rol1);
            Usuario user2 = new Usuario("Andre","Alvarez","hola@mail.com",contra,"Bs As",rol2);
            Usuario user3 = new Usuario("Ana","C","hola2@mail.com",contra,"Bs As",rol2);

            usuarioService.crearUsuario(user1);
            usuarioService.crearUsuario(user2);
            usuarioService.crearUsuario(user3);

            Reserva reserva1 = new Reserva(time,diaYHoraInicio1,diaYhoraFin1,producto1,user1);
            Reserva reserva2 = new Reserva(time,diaYHoraInicio2,diaYhoraFin2,producto3,user2);
            Reserva reserva3 = new Reserva(time,diaYHoraInicio3,diaYhoraFin3,producto2,user2);
            Reserva reserva4 = new Reserva(time,diaYHora4,diaYHora4,producto3,user1);

            reservaService.crearReserva(reserva1);
            reservaService.crearReserva(reserva2);
            reservaService.crearReserva(reserva3);
            reservaService.crearReserva(reserva4);


        }
        catch (Exception e){
            System.out.println(e);
        }

    }
}


/*

            https://media-cdn.tripadvisor.com/media/photo-s/21/91/1a/75/exterior.jpg

            https://cf.bstatic.com/xdata/images/hotel/max1024x768/184305239.jpg?k=2d22fe63ae1f8960e057238c98fb436f7bd9f65854e3a5e918607c5cfa1d0a52&o=&hp=1

            https://www.inmuebles24.com/noticias/wp-content/uploads/2020/01/departamentos-de-lujo-2.jpeg

            https://static.hosteltur.com/app/public/uploads/img/articles/2015/08/01/L_5b14fe49e7f2c_breakfast.jpg

            https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg


 */