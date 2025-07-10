import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    // Crear farmacia
    const farmacia = await prisma.farmacia.create({
        data: {
            nombre: 'Farmacia Central',
            direccion: 'Calle 123',
        },
    });

    // Crear medicamentos
    await prisma.medicamento.createMany({
        data: [
            {
                nombre: 'Paracetamol',
                descripcion: 'Alivia el dolor y reduce la fiebre',
            },
            {
                nombre: 'Ibuprofeno',
                descripcion: 'Antiinflamatorio no esteroideo',
            },
            {
                nombre: 'Amoxicilina',
                descripcion: 'Antibiótico de amplio espectro',
            },
            {
                nombre: 'Loratadina',
                descripcion: 'Antihistamínico para alergias',
            },
            {
                nombre: 'Omeprazol',
                descripcion: 'Reduce la producción de ácido estomacal',
            },
            {
                nombre: 'Metformina',
                descripcion: 'Medicamento para la diabetes tipo 2',
            },
            {
                nombre: 'Losartán',
                descripcion: 'Antihipertensivo, controla la presión arterial',
            },
            {
                nombre: 'Atorvastatina',
                descripcion: 'Reduce el colesterol en sangre',
            },
            {
                nombre: 'Salbutamol',
                descripcion: 'Broncodilatador para el asma',
            },
            {
                nombre: 'Azitromicina',
                descripcion: 'Antibiótico para infecciones bacterianas',
            },
            {
                nombre: 'Diclofenaco',
                descripcion: 'Antiinflamatorio y analgésico',
            },
            {
                nombre: 'Prednisona',
                descripcion: 'Corticosteroide para inflamación',
            },
        ],
    });

    // Obtener ids de medicamentos
    const medicamentos = await prisma.medicamento.findMany();
    const paracetamol = medicamentos.find((m) => m.nombre === 'Paracetamol');
    const ibuprofeno = medicamentos.find((m) => m.nombre === 'Ibuprofeno');

    // Relacionar farmacia con medicamentos y cantidades
    if (paracetamol && ibuprofeno) {
        await prisma.farmaciaPosee.createMany({
            data: [
                {
                    idFarmacia: farmacia.idFarmacia,
                    idMedicamento: paracetamol.idMedicamento,
                    cantidad: 50,
                },
                {
                    idFarmacia: farmacia.idFarmacia,
                    idMedicamento: ibuprofeno.idMedicamento,
                    cantidad: 100,
                },
                // Agregar cantidades para los nuevos medicamentos
                ...medicamentos
                    .filter(
                        (m) => m.nombre !== 'Paracetamol' && m.nombre !== 'Ibuprofeno',
                    )
                    .map((m) => ({
                        idFarmacia: farmacia.idFarmacia,
                        idMedicamento: m.idMedicamento,
                        cantidad: 75,
                    })),
            ],
        });
    }

    console.log('Seed completado');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
