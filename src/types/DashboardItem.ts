export type DashboardItemSmall = {
    title: string;
    titleSize: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    width: number | string;
    height: number | string;
};

export type DashboardItemLarge = DashboardItemSmall & {
    paragraph: string;
    textSize: 300 | 400 | 500;
};
