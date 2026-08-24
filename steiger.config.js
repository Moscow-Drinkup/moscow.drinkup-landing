import fsd from '@feature-sliced/steiger-plugin';
import {defineConfig} from 'steiger';

// Линтер архитектуры Feature-Sliced Design.
// Запуск: pnpm lint:fsd (или pnpm lint:fsd --watch во время рефакторинга)
export default defineConfig([...fsd.configs.recommended]);
