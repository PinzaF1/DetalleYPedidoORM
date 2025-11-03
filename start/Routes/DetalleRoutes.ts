import Route  from "@adonisjs/core/services/router";
import DetallesController from "#controllers/detalles_controller";

const detalle = new DetallesController()

Route.post('/detalle', detalle.crearDetalle)
Route.get('/detalle/:id', detalle.obtenerDetalle)
