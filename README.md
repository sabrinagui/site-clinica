# ClínicaPro - Site Completo de Clínica Médica

Um site completo e profissional para clínicas médicas, desenvolvido com React no frontend e Laravel no backend.

## 🚀 Características

### Frontend (React + TypeScript)
- ⚡ Interface moderna e responsiva
- 🎨 Design profissional com paleta de cores médicas
- 📱 Totalmente responsivo para todos os dispositivos
- 🎥 Hero section com vídeo de fundo
- 📋 Sistema de agendamento online
- 💬 Formulário de contato integrado
- 🔄 Animações suaves e interativas

### Backend (Laravel)
- 🛡️ API RESTful segura
- 📊 Sistema de gerenciamento de agendamentos
- 🏥 Cadastro de serviços médicos
- 📧 Sistema de contatos
- 🔒 Validação de dados robusta
- 📱 CORS configurado para frontend

## 🎨 Design e Cores

O site utiliza uma paleta de cores profissionais baseada em tons de verde médico:

- **Verde Principal**: #36a274 (confiança e saúde)
- **Laranja Accent**: #f97316 (call-to-actions)
- **Cinzas Neutros**: Para textos e backgrounds
- **Gradientes**: Para elementos visuais impactantes

## 📁 Estrutura do Projeto

```
Site Clinica/
├── frontend/          # Aplicação React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── pages/         # Páginas
│   │   ├── services/      # APIs e serviços
│   │   ├── styles/        # Temas e estilos
│   │   └── types/         # Tipos TypeScript
│   └── public/
└── backend/           # API Laravel
    ├── app/
    │   ├── Http/Controllers/  # Controllers da API
    │   └── Models/           # Modelos Eloquent
    ├── database/
    │   ├── migrations/       # Migrations do banco
    │   └── seeders/         # Seeders com dados iniciais
    └── routes/
        └── api.php          # Rotas da API
```

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** com TypeScript
- **Styled Components** para estilização
- **React Hook Form** para formulários
- **Yup** para validação
- **Axios** para requisições HTTP
- **Framer Motion** para animações

### Backend
- **Laravel 11** (PHP)
- **MySQL** como banco de dados
- **Eloquent ORM** para modelagem
- **API Resources** para serialização
- **CORS** habilitado

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ e npm/yarn
- PHP 8.1+ e Composer
- MySQL 8.0+

### Backend (Laravel)

1. Navegue para a pasta backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
composer install
```

3. Configure o banco de dados no arquivo `.env`:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=clinica_db
DB_USERNAME=root
DB_PASSWORD=
```

4. Execute as migrations e seeders:
```bash
php artisan migrate:fresh --seed
```

5. Inicie o servidor:
```bash
php artisan serve
```

A API estará disponível em `http://localhost:8000`

### Frontend (React)

1. Navegue para a pasta frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL da API no arquivo `.env`:
```env
REACT_APP_API_URL=http://localhost:8000/api/v1
```

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

O site estará disponível em `http://localhost:3000`

## 📊 API Endpoints

### Serviços
- `GET /api/v1/services/public` - Lista serviços ativos
- `GET /api/v1/services/{id}` - Detalhes de um serviço

### Agendamentos
- `POST /api/v1/appointments/book` - Criar agendamento
- `GET /api/v1/appointments` - Listar agendamentos
- `PUT /api/v1/appointments/{id}` - Atualizar agendamento

### Contatos
- `POST /api/v1/contacts/send` - Enviar mensagem
- `GET /api/v1/contacts` - Listar mensagens

## 🔧 Configurações

### Dados Iniciais
O sistema vem com dados de exemplo pré-configurados:
- 6 serviços médicos (Consulta Geral, Cardiologia, etc.)
- Usuário admin padrão
- Estrutura completa de banco de dados

### Personalização
- Cores: Edite `src/styles/theme.ts`
- Logo: Substitua no componente Header
- Vídeo: Adicione em `public/videos/hero-video.mp4`
- Imagens: Atualize URLs no componente About

## 📱 Funcionalidades Principais

### Para Pacientes
- ✅ Navegação intuitiva e responsiva
- ✅ Visualização de serviços e preços
- ✅ Agendamento online com validação
- ✅ Formulário de contato
- ✅ Informações completas da clínica

### Para Administradores
- ✅ API para gerenciar agendamentos
- ✅ Sistema de contatos
- ✅ Cadastro de serviços
- ✅ Estrutura preparada para dashboard

## 🎯 Próximos Passos

- [ ] Dashboard administrativo
- [ ] Sistema de login/autenticação
- [ ] Integração com calendário
- [ ] Notificações por email
- [ ] Sistema de pagamentos
- [ ] Chat online
- [ ] App mobile

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para proporcionar a melhor experiência digital para clínicas médicas.

---

**ClínicaPro** - Cuidando da sua saúde com tecnologia e excelência.