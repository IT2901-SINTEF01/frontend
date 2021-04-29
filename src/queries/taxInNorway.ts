import { gql } from '@apollo/client';

export const TAX_ASSESMENT = gql`
    query($municipalities: [String]) {
        taxAssessment {
            dataset(
                municipalities: $municipalities
                years: [
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
                ]
            ) {
                value {
                    taxesForYear {
                        year
                        averageDebt
                        averageBankDeposits
                        averageGrossIncome
                    }
                }
            }
        }
    }
`;

export type TaxAssesment = {
    taxAssessment: {
        dataset: {
            value: {
                taxesForYear: {
                    year: number;
                    averageDebt: number;
                    averageBankDeposits: number;
                    averageGrossIncome: number;
                }[];
            }[];
        };
    };
};

export type TaxAssesmentVariables = {
    municipalities: string[];
};
