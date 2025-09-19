<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'name' => 'Consulta Geral',
                'description' => 'Consulta médica completa com exame físico e avaliação geral do estado de saúde.',
                'icon' => 'stethoscope',
                'price' => 150.00,
                'duration' => 60,
                'active' => true,
            ],
            [
                'name' => 'Cardiologia',
                'description' => 'Consulta especializada em cardiologia com eletrocardiograma incluído.',
                'icon' => 'heart',
                'price' => 200.00,
                'duration' => 90,
                'active' => true,
            ],
            [
                'name' => 'Dermatologia',
                'description' => 'Consulta dermatológica para diagnóstico e tratamento de problemas de pele.',
                'icon' => 'user-md',
                'price' => 180.00,
                'duration' => 45,
                'active' => true,
            ],
            [
                'name' => 'Ortopedia',
                'description' => 'Consulta ortopédica para problemas ósseos, musculares e articulares.',
                'icon' => 'bone',
                'price' => 220.00,
                'duration' => 60,
                'active' => true,
            ],
            [
                'name' => 'Exames Laboratoriais',
                'description' => 'Ampla gama de exames laboratoriais com resultados rápidos e precisos.',
                'icon' => 'flask',
                'price' => 80.00,
                'duration' => 30,
                'active' => true,
            ],
            [
                'name' => 'Radiologia',
                'description' => 'Exames de imagem incluindo raio-X, ultrassom e tomografia.',
                'icon' => 'x-ray',
                'price' => 120.00,
                'duration' => 30,
                'active' => true,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
