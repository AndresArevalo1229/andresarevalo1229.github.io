export type Location = {
  id: string;
  code: string;
  capacity: number;
  currentLoad: number;
};

export function canReceiveStock(location: Location, quantity: number) {
  if (quantity <= 0) return false;
  return location.currentLoad + quantity <= location.capacity;
}

export function assignStock(location: Location, quantity: number) {
  if (!canReceiveStock(location, quantity)) {
    throw new Error("La ubicacion no tiene capacidad disponible");
  }

  return {
    ...location,
    currentLoad: location.currentLoad + quantity,
  };
}
