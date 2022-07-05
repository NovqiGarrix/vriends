import { writeFileSync } from "fs";

const indexDTS = `export declare let Pannellum: ((props: any) => JSX.Element) & {
    Hotspot: ((props: any) => JSX.Element) & {
        defaultProps: {
            className: string;
            id: string;
            handleClick: (event: any, name: string) => void;
            style: {
                backgroundColor: string;
                border: string;
                borderRadius: string;
                boxShadow: string;
                cursor: string;
                height: string;
                left: string;
                position: string;
                top: string;
                width: string;
            };
        };
    };
}`;

writeFileSync("index.d.ts", indexDTS);

writeFileSync(
    "node_modules/@georgedrpg/pannellum-react-next/index.d.ts",
    indexDTS
);
