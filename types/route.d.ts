type RootStackParamList = {
    'home': undefined;
    'detail': undefined;
    'about': undefined;
}

declare global {
    namespace ReactNavigation {
        export type RootStackParamList = RootStackParamList;
    }
}