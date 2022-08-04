export declare interface InputOptions {

    createDemo: boolean;

    scaffoldStart: scaffoldStartType ;

    skipInstall: boolean;

    test?: boolean;

    alreadyInstalled?: boolean;

    reset?: boolean;

}


export type scaffoldStartType = "starterContract";


export interface InputOptions_Extension extends InputOptions {
    sourceRoot?: string,
    projectFound?: string

}
