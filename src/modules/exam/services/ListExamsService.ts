import { State } from "@prisma/client";
import prismaClient from "../../../prisma/prisma";

interface IRequest {
  active: State;
}

class ListExamsService {
  async execute({ active }: IRequest) {
    if (active) {
      const exams = await prismaClient.exam.findMany({
        where: { status: active },
      });
      return exams;
    }
    const exams = await prismaClient.exam.findMany({
      where: { status: "ACTIVE" },
    });
    return exams;
  }
}

export { ListExamsService };
