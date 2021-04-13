import { gql } from '@apollo/client';

const code = localStorage.getItem('municipality') || 'K-0301';
const beginYear = localStorage.getItem('beginYear') || '1986';
const endYear = localStorage.getItem('endYear') || '2020';
const years = new Array<string>();
for (let index = Number(beginYear); index <= Number(endYear); index++) {
    years.push(index.toString());
}

export const POPULATION_IN_NORWAY = gql`
    query {
        populationsInNorway {
            dataset(years: [${years.map((x) => `"` + x + `",`)}], municipalities: ["${code}"]) {
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
