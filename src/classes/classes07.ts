type LogLevel = 'INFO' | 'WARNING' | 'ERROR';

export class Logger {
    private static logLevel: LogLevel = 'INFO';

    public static setLogLevel(level: LogLevel): void {
        Logger.logLevel = level;
    }

    public static logMessage(message: string): string {
        // Возврашааем сообщение, содержащее текущее значение logLevel
        return `[${Logger.logLevel}] ${message}`;
    }
}


