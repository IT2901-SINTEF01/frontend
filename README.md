# Open Data Visualisation Platform – Frontend

![Build, lint, and test](https://github.com/IT2901-SINTEF01/frontend/workflows/Build,%20lint,%20and%20test/badge.svg) ![Issues](https://img.shields.io/github/issues/IT2901-SINTEF01/frontend) ![License](https://img.shields.io/github/license/IT2901-SINTEF01/frontend) ![Version](https://img.shields.io/github/v/release/IT2901-SINTEF01/frontend?include_prereleases) ![Deployment badge](https://img.shields.io/github/deployments/it2901-sintef01/frontend/Production?label=Production%20deployment) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/aa2ba28a1a1c4609b04c3bde2d822bcb)](https://www.codacy.com/gh/IT2901-SINTEF01/frontend/dashboard?utm_source=github.com&utm_medium=referral&utm_content=IT2901-SINTEF01/frontend&utm_campaign=Badge_Grade)

<img src="./SINTEF_logo.png" alt="SINTEF" height=50 />

_This repository contains the frontend for the "Open Data Visualisation Platform" developed in collaboration with [SINTEF](https://sintef.no). You may find the backend [here](https://github.com/IT2901-SINTEF01/backend). By providing both a dashboard and a Storybook page, users will be able to test different visualisations of their desired datasets. Consult the [releases](https://github.com/IT2901-SINTEF01/frontend/releases) page to get a local, stable copy of the service._

## Overview

You can view the current deployment [here](https://sintef01.netlify.app/) and our deployed storybooks [here](https://www.chromatic.com/builds?appId=603cc7be306c9a0023f0f937).

The frontend is built with React.js, written in TypeScript. We also utilise the [Storybook.js](https://storybook.js.org/) library to give an **easy to use** and **intuitive** overview of our React components. For deployment we decided to use [Netlify](https://www.netlify.com/). Refer to our [wiki](https://github.com/IT2901-SINTEF01/frontend/wiki) for more information regarding our architecture and structure.

## Setup

Install the dependencies with:

```bash
yarn
```

## Running

Run the application in development mode with:

```bash
yarn start
```

You can view the project at [http://localhost:3000](http://localhost:3000).

Launch your local instance of [Storybook.js](https://storybook.js.org/) with:

```bash
yarn storybook
```

Then you can view your storybook at [http://localhost:6006](http://localhost:6006)

## Testing

Run the entire test suite with auto-running on file changes with:

```bash
yarn test
```

## License

> Copyright 2021 SINTEF AS
>
> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
>     http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
