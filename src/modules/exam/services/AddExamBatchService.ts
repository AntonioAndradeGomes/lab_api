import { ExamType } from "@prisma/client";
import prismaClient from "../../../prisma/prisma";

interface IExam {
  name: string;
  type: string;
}

interface IRequest {
  exams: IExam[];
}

class AddExamBatchService {
  async execute({ exams }: IRequest) {
    let examsConvert = exams.map((e) => {
      const type = (e.type =
        ExamType[e.type.toUpperCase()] || ExamType["CLINICAL_ANALYSIS"]);
      return {
        name: e.name,
        type: type,
      };
    });
   
    const createMany =  await prismaClient.exam.createMany({data: examsConvert})
    return createMany;
  }
}

export { AddExamBatchService };
