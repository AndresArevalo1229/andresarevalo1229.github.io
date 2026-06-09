export type ContractStatus = "DRAFT" | "ACTIVE" | "CLOSED";

export type CreateContractInput = {
  customerId: string;
  assetId: string;
  startDate: string;
  monthlyAmount: number;
};

export function validateContract(input: CreateContractInput) {
  if (!input.customerId) return "Cliente requerido";
  if (!input.assetId) return "Equipo requerido";
  if (!input.startDate) return "Fecha de inicio requerida";
  if (input.monthlyAmount <= 0) return "Monto mensual invalido";
  return null;
}

export function createContract(input: CreateContractInput) {
  const error = validateContract(input);
  if (error) throw new Error(error);

  return {
    id: crypto.randomUUID(),
    status: "ACTIVE" as ContractStatus,
    ...input,
  };
}
