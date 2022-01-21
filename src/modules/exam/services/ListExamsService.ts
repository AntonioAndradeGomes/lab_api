import { State } from "@prisma/client";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  active: State;
  name: string | null;
}

class ListExamsService {
  async execute({ active, name }: IRequest) {
    if (!name) {
      const exams = await prismaClient.exam.findMany({
        where: { status: active },
      });
      return exams;
    }
    const exams = await prismaClient.exam.findMany({
      where: { name: { contains: name } },
      select: {
        id: true,
        name: true,
        type: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        laboratories: { select: { laboratory: true } },
        _count: { select: { laboratories: true } },
      },
    });
    return exams;
  }
}

export { ListExamsService };
