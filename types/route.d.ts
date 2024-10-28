type RootStackParamList = {
    'home': undefined;
    'detail': {id: number, title: string} | undefined;
    'about': undefined;
}

declare global {
    namespace ReactNavigation {
        export type RootStackParamList = RootStackParamList;
    }
}