export type MovementType = "IN" | "OUT";

export type InventoryMovement = {
  productId: string;
  warehouseId: string;
  quantity: number;
  type: MovementType;
};

export function validateMovement(input: InventoryMovement) {
  if (!input.productId) return "Producto requerido";
  if (!input.warehouseId) return "Almacen requerido";
  if (input.quantity <= 0) return "Cantidad invalida";
  if (!["IN", "OUT"].includes(input.type)) return "Tipo de movimiento invalido";
  return null;
}

export function applyStock(currentStock: number, movement: InventoryMovement) {
  if (movement.type === "IN") return currentStock + movement.quantity;

  const nextStock = currentStock - movement.quantity;
  if (nextStock < 0) {
    throw new Error("No hay existencia suficiente para registrar la salida");
  }

  return nextStock;
}
