import { State } from "@prisma/client";
import { AppError } from "../../../config/errors/AppError";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  id: string;
  name: string;
  address: string;
  status: string;
}

class UpdateLaboratoryService {
  async execute({ id, name, address, status }: IRequest) {
    const statusExists = ["ACTIVE", "INACTIVE"].find(
      (element) => element == status.toUpperCase()
    );
    if (!statusExists) {
      throw new AppError("Non-existent lab status");
    }
    let lab = await prismaClient.laboratory.findUnique({ where: { id } });
    if (!lab) {
      throw new AppError("Laboratory does not exist");
    }
    lab = await prismaClient.laboratory.update({
      where: { id },
      data: { name, address, status: State[status.toUpperCase()] },
    });
    return lab;
  }
}

export { UpdateLaboratoryService };
