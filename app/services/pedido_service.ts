import Pedido from "..//models/pedido.js"

export class PedidoService {
  async crear(data: Partial<Pedido>) {
    return await Pedido.create(data)
  }

  async mostraerpedidodetalle(id: number) {
    const list = await Pedido.query()
      .where('id', id)
      .preload('detalles')
    return list
  }

  async todospedidodetalle() {
    const list = await Pedido.query()
      .preload('detalles')
    return list
  }

  async mostrarpedidodetallecamposespecificos() {
    const resultado = await Pedido.query()
      .select('id', 'id_cliente', 'nombre_cliente', 'Fecha_pedido')
      .preload('detalles', (detallequery) => {
        detallequery.select('id')
      })

    return resultado
  }

  async mostarpedidodetalladocamposespecificosid(id) {
    const res = await Pedido.query()
      .select('id', 'nombre_cliente', 'Fecha_pedido')
      .where('id', id)
      .preload('detalles', (dquery) => {
        dquery.select('nombre_pedido')
      })
    return res
  }

  async todospedido() {
    const respuesta = await Pedido.query()
      .select('id', 'nombre_cliente', 'Fecha_pedido')
    return respuesta
  }

  async traernombrecliente() {
    const list = await Pedido.query()
      .select('id', 'nombre_cliente', 'Fecha_pedido')
      .whereLike('nombre_cliente', '%a%')
      .preload('detalles')
    return list
  }
}
