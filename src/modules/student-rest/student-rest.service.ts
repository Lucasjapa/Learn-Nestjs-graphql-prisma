import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { StudentDTO } from './student.dto';

@Injectable()
export class StudentRestService {

    constructor(private prisma: PrismaService){

    }

    async create(data: StudentDTO){

        const studentExists = await this.prisma.student.findFirst({
            where:{
                name: data.name,
            },
        });

        if(studentExists){
            throw new Error('Student already exists');
        }

        const student = await this.prisma.student.create({
            data,
        });

        return student;
    }

    async findAll(){
        return (await this.prisma.student.findMany()).sort();
    }

    async updateStudent(id: string, data: StudentDTO){
        const studentExists = await this.prisma.student.findUnique({
            where:{
                id,
            },
        });

        if(!studentExists){
            throw new Error('Student does not exists!!');
        }

        return await this.prisma.student.update({
            data,
            where: {
                id,
            }
        })
    }
}
