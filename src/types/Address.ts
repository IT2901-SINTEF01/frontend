export type Address = {
    adressekode: number;
    adressenavn: string;
    adressetekst: string;
    adressetekstutenadressetilleggsnavn: string;
    adressetilleggsnavn: string;
    bokstav: string;
    bruksenhetsnummer: number[];
    bruksnummer: number;
    festenummer: number;
    gardsnummer: number;
    kommunenavn: string;
    kommunenummer: string;
    nummer: number;
    objtype: string;
    oppdateringsdato: Date;
    postnummer: number;
    poststed: string;
    representasjonspunkt: {
        epsg: string;
        lat: number;
        lon: number;
    };
    stedfestingverifisert: boolean;
    undernummer: number;
};
