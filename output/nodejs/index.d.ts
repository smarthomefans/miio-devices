declare module "miio-dev" {
    type ParameterType = "string";
    type ParameterRangeBoolean = "true" | "false";
    interface Parameter {
        type: ParameterType;
        range: ParameterRangeBoolean[];
    }
    interface Command {
        description: string;
        parameters: Parameter[];
    }

    type ResultType = "string";
    type ResultRangeBoolean = "true" | "false";
    interface Result {
        type: ResultType;
        range: ResultRangeBoolean[];
    }
    interface Property {
        description: string;
        results: Result[];
    }

    interface Device {
        commands: Record<string, Command>;
        properties: Record<string, Property>;
    }
    interface VendorDevice {
        commands: Record<string, Command>;
        properties: Record<string, Property>;
        devices: Record<string, Device>;
    }
    interface TypeDevice {
        commands: Record<string, Command>;
        properties: Record<string, Property>;
        vendors: Record<string, VendorDevice>;
    }

    export type Devices = Record<string, TypeDevice>;
}