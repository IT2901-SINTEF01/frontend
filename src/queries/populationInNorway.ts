import { gql } from '@apollo/client';

export const POPULATION_IN_NORWAY = gql`
    query($municipalities: [String]) {
        populationsInNorway {
            dataset(
                years: [
                    "1986"
                    "1987"
                    "1988"
                    "1989"
                    "1990"
                    "1991"
                    "1992"
                    "1993"
                    "1994"
                    "1995"
                    "1996"
                    "1997"
                    "1998"
                    "1999"
                    "2000"
                    "2001"
                    "2002"
                    "2003"
                    "2004"
                    "2005"
                    "2006"
                    "2007"
                    "2008"
                    "2009"
                    "2010"
                    "2011"
                    "2012"
                    "2013"
                    "2014"
                    "2015"
                    "2016"
                    "2017"
                    "2018"
                    "2019"
                    "2020"
                    "2021"
                ]
                municipalities: $municipalities
            ) {
                value {
                    populationForYear {
                        population
                        year
                    }
                }
            }
        }
    }
`;

export type PopulationInNorway = {
    populationsInNorway: {
        dataset: {
            value: {
                populationForYear: {
                    population: number;
                    year: number;
                }[];
            }[];
        };
    };
};

export type SSBPopulationVariables = {
    municipalities: string[];
};
