INSERT INTO TASK_STATE (STATE_ID) VALUES
('PENDIENTE'),
('EN_PROGRESO'),
('COMPLETADA'),
('CANCELADA'),
('EN_REVISION');


INSERT INTO ROLE (ROLE_ID) VALUES
('ADMIN'),
('MANAGER'),
('DEVELOPER'),
('ANALYST'),
('INTERN');

INSERT INTO PERMISSION (DESCRIPTION) VALUES
('CREATE_TASK'),
('EDIT_TASK'),
('DELETE_TASK'),
('VIEW_TASK'),
('MANAGE_USERS'),
('MANAGE_TEAMS'),
('VIEW_REPORTS'),
('ASSIGN_TASKS');

INSERT INTO TEAM (NAME, DESCRIPTION) VALUES
('Desarrollo Frontend', 'Equipo de desarrollo web'),
('Desarrollo Backend', 'Equipo de APIs y servicios'),
('QA Testing', 'Equipo de pruebas'),
('DevOps', 'Infraestructura y despliegue'),
('Marketing Digital', 'Estrategias digitales');

INSERT INTO APP_USER (APP_USER_ID, ROLE_ID, NAME, AGE, USERNAME, PASSWORD) VALUES
(NULL, 'ADMIN', 'Ana García', 35, 'anagarcia', 'AnaG35!'),
(NULL, 'MANAGER', 'Carlos López', 32, 'carloslopez', 'CarL32!'),
(NULL, 'MANAGER', 'María González', 29, 'mariagonzalez', 'MarG29!'),
(NULL, 'DEVELOPER', 'Juan Pérez', 28, 'juanperez', 'JuaP28!'),
(NULL, 'DEVELOPER', 'Laura Martínez', 26, 'lauramartinez', 'LauM26!'),
(NULL, 'DEVELOPER', 'Diego Rodríguez', 30, 'diegorodriguez', 'DieR30!'),
(NULL, 'ANALYST', 'Sofia Hernández', 27, 'sofiahdez', 'SofH27!'),
(NULL, 'ANALYST', 'Pablo Torres', 31, 'pabotorres', 'PabT31!'),
(NULL, 'INTERN', 'Camila Silva', 22, 'camilasilva', 'CamS22!'),
(NULL, 'INTERN', 'Andrés Castro', 23, 'andrescastro', 'AndC23!');



UPDATE APP_USER SET APP_USER_ID = 1 WHERE USER_ID IN (2, 3); -- Managers reportan al Admin
UPDATE APP_USER SET APP_USER_ID = 2 WHERE USER_ID IN (4, 5); -- Developers reportan a Carlos
UPDATE APP_USER SET APP_USER_ID = 3 WHERE USER_ID IN (6, 7); -- Analysts reportan a María
UPDATE APP_USER SET APP_USER_ID = 2 WHERE USER_ID IN (8, 9); -- Interns reportan a Carlos

-- Asignar permisos a roles
INSERT INTO AUTHORIZATION_PERMISSION (PERMISSION_ID, ROLE_ID) VALUES
-- Admin tiene todos los permisos
(1, 'ADMIN'), (2, 'ADMIN'), (3, 'ADMIN'), (4, 'ADMIN'), (5, 'ADMIN'), (6, 'ADMIN'), (7, 'ADMIN'), (8, 'ADMIN'),
-- Manager puede crear, editar, ver tareas y asignarlas, manejar equipos
(1, 'MANAGER'), (2, 'MANAGER'), (4, 'MANAGER'), (6, 'MANAGER'), (7, 'MANAGER'), (8, 'MANAGER'),
-- Developer puede crear, editar y ver sus tareas
(1, 'DEVELOPER'), (2, 'DEVELOPER'), (4, 'DEVELOPER'),
-- Analyst puede ver y crear tareas, ver reportes
(1, 'ANALYST'), (4, 'ANALYST'), (7, 'ANALYST'),
-- Intern solo puede ver tareas
(4, 'INTERN');

-- Asignar usuarios a equipos
INSERT INTO RELATIONSHIP_3 (USER_ID, TEAM_ID) VALUES
-- Ana (Admin) supervisa todos los equipos
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5),
-- Carlos (Manager) lidera Frontend y Backend
(2, 1), (2, 2),
-- María (Manager) lidera QA y DevOps
(3, 3), (3, 4),
-- Developers en sus respectivos equipos
(4, 1), -- Juan en Frontend
(5, 1), -- Laura en Frontend
(6, 2), -- Diego en Backend
-- Analysts en QA
(7, 3), -- Sofia en QA
(8, 3), -- Pablo en QA
-- Interns distribuidos
(9, 1), -- Camila en Frontend
(10, 5); -- Andrés en Marketing

-- Insertar tareas de ejemplo
INSERT INTO TASK (STATE_ID, TEAM_ID, USER_ID, TITLE, DESCRIPTION, DUE_DATE) VALUES
('PENDIENTE', 1, 4, 'Implementar login de usuarios', 'Crear formulario de login', '2025-09-15'),
('EN_PROGRESO', 1, 5, 'Diseñar dashboard principal', 'Mockups y componentes', '2025-09-20'),
('COMPLETADA', 2, 6, 'API de autenticación', 'Endpoints JWT', '2025-08-30'),
('EN_REVISION', 3, 7, 'Testing de módulo usuarios', 'Pruebas automatizadas', '2025-09-10'),
('PENDIENTE', 4, 8, 'Configurar servidor staging', 'Setup ambiente de pruebas', '2025-09-25'),
('EN_PROGRESO', 1, 9, 'Documentar componentes', 'Storybook components', '2025-09-18'),
('PENDIENTE', 5, 10, 'Campaña redes sociales', 'Estrategia Q4 2025', '2025-10-01'),
('EN_PROGRESO', 2, 6, 'Optimizar base de datos', 'Índices y consultas', '2025-09-12'),
('COMPLETADA', 1, 4, 'Componente de navegación', 'Menu responsive', '2025-08-25'),
('CANCELADA', 3, 7, 'Pruebas de carga', 'Test de performance', NULL),
('PENDIENTE', 1, 5, 'Integrar sistema de pagos', 'Gateway de pagos', '2025-10-15'),
('EN_REVISION', 2, 6, 'Microservicio de notificaciones', 'Push notifications', '2025-09-08');