export type ComplejoId = 'doblefalta'
export interface Complejo { id: ComplejoId; nombre: string; tituloImagen: string; canchas: string[]; horarios: string[]; estilo: 'nodo' }
const H = ['13:00', '14:30', '16:00', '17:30', '19:00', '20:30', '23:00']
export const COMPLEJOS: Complejo[] = [
  { id: 'doblefalta', nombre: 'Doble Falta', tituloImagen: 'DOBLE FALTA', canchas: ['Cancha 1'], horarios: H, estilo: 'nodo' },
]
export const complejoPorId = (id: ComplejoId) => COMPLEJOS.find((c) => c.id === id)!
