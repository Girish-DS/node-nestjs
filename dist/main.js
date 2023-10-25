"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const env_helper_1 = require("./common/helper/env.helper");
const path = require('path');
const dirPath = path.join(__dirname, '../src/common/helper/envs');
const envFilePath = (0, env_helper_1.getEnvPath)(dirPath);
dotenv.config({ path: envFilePath });
const { PORT } = process.env;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('User CRUD Operations')
        .setDescription('The User API description')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    await app.listen(PORT);
    console.log(`App listening on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map